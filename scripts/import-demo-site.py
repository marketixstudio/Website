"""
Imports a finished static website (plain HTML/CSS/JS + images) as a demo at /demo/<slug>.

  python3 scripts/import-demo-site.py "<folder with index.html>" <slug> [--home-only]

--home-only imports just index.html (and only the images it uses). Links to the pages
that are left out point at the matching section of the home page instead of 404ing.

What it does: copies the pages, converts the images the pages use to WebP (frames in
images/frames to 1600x900), rewrites relative paths to /demo/<slug>/..., adds
noindex, and adds a small "Demo site built by Marketix Studio" tag (bottom left).
next.config.mjs serves /demo/<slug> from public/demo/<slug>/index.html and sends
X-Robots-Tag: noindex for everything under /demo. Needs Pillow (pip install pillow).

Site-specific patches (frame filenames, the demo contact form message) only apply
when the pattern exists. Check any new demo with a crawl before pushing.
"""
import os, re, shutil, glob, sys
from PIL import Image

SRC = sys.argv[1].rstrip("/")
SLUG = sys.argv[2]
HOME_ONLY = "--home-only" in sys.argv
# Home-only: where a link to a left-out page goes (page file name -> section id on the home page).
SECTION_MAP = {
    "about": "about", "accessories": "accessories", "contact": "contact",
    "vista-25": "products", "axis-45": "products", "prime-100": "products", "crystal-105": "products", "stickon": "products",
    "upvc-window": "services", "aluminium-window": "services", "structural-glazing": "services",
    "glass-railing": "services", "glass-partition": "services", "safety-grills": "services",
}
DST = f"public/demo/{SLUG}"
BASE = f"/demo/{SLUG}"
if os.path.exists(DST): shutil.rmtree(DST)
os.makedirs(DST + "/images/frames"); os.makedirs(DST + "/css"); os.makedirs(DST + "/js")

# 1. Images: only those the pages use; WebP, capped width.
html_files = [SRC + "/index.html"] if HOME_ONLY else sorted(glob.glob(SRC + "/*.html"))
used = set()
for f in html_files + glob.glob(SRC + "/js/*.js"):
    for m in re.findall(r'images/([A-Za-z0-9._ -]+\.(?:png|jpg|jpeg))', open(f).read()):
        used.add(m)
before = after = 0
for name in sorted(used):
    src = f"{SRC}/images/{name}"
    im = Image.open(src); before += os.path.getsize(src)
    if im.width > 1800: im = im.resize((1800, round(im.height * 1800 / im.width)), Image.LANCZOS)
    out = f"{DST}/images/{os.path.splitext(name)[0]}.webp"
    im.save(out, "WEBP", quality=80, method=6); after += os.path.getsize(out)
fb = fa = 0
for src in sorted(glob.glob(SRC + "/images/frames/*.jpg")):
    im = Image.open(src).convert("RGB"); fb += os.path.getsize(src)
    im = im.resize((1600, 900), Image.LANCZOS)
    out = f"{DST}/images/frames/{os.path.basename(src)[:-4]}.webp"
    im.save(out, "WEBP", quality=72, method=6); fa += os.path.getsize(out)
print(f"images {before/1e6:.1f}MB -> {after/1e6:.1f}MB; frames {fb/1e6:.1f}MB -> {fa/1e6:.1f}MB")

# 2. CSS copied as is.
shutil.copy(SRC + "/css/style.css", DST + "/css/style.css")

# 3. JS: frame path and an honest demo form.
if os.path.exists(SRC + "/js/main.js"):
    js = open(SRC + "/js/main.js").read()
    js = js.replace("`images/frames/frame${String(i + 1).padStart(3, '0')}.jpg`", "`" + BASE + "/images/frames/frame${String(i + 1).padStart(3, '0')}.webp`")
    js = js.replace("btn.textContent = '✓ Message Sent!';", "btn.textContent = '✓ Demo form: nothing was sent';")
    open(DST + "/js/main.js", "w").write(js)
    print("js patched:", BASE in js, "Demo form" in js)

# 4. HTML: absolute paths, webp, noindex, Marketix tag.
TAG = """
  <!-- Marketix Studio demo tag -->
  <style>
    #mx-demo-tag{position:fixed;left:16px;bottom:16px;z-index:100000;display:flex;align-items:center;gap:10px;max-width:calc(100vw - 100px);padding:8px 8px 8px 14px;border:1px solid rgba(200,42,239,.55);border-radius:999px;background:#0e0e0e;color:#e9e6ec;font:500 12.5px/1.3 system-ui,-apple-system,'Segoe UI',sans-serif;box-shadow:0 10px 30px -12px rgba(0,0,0,.6)}
    #mx-demo-tag a{color:#fff;text-decoration:none;font-weight:700;white-space:nowrap;padding:6px 12px;border-radius:999px;background:#C82AEF}
    #mx-demo-tag a:hover{background:#9425E4}
    #mx-demo-tag button{all:unset;cursor:pointer;width:24px;height:24px;border-radius:50%;text-align:center;line-height:24px;color:#9d98a3;font-size:16px}
    #mx-demo-tag button:hover{color:#fff}
    @media (max-width:560px){#mx-demo-tag span.mx-long{display:none}}
  </style>
  <div id="mx-demo-tag" role="note">
    <span>Demo site <span class="mx-long">built</span> by Marketix Studio</span>
    <a href="/services/web-design-development">Get a site like this</a>
    <button type="button" aria-label="Hide this note" onclick="try{sessionStorage.setItem('mxDemoTagHidden','1')}catch(e){};this.parentNode.remove()">&times;</button>
  </div>
  <script>try{if(sessionStorage.getItem('mxDemoTagHidden')){var t=document.getElementById('mx-demo-tag');t&&t.remove()}}catch(e){}</script>
"""
def fix_attr(m):
    attr, val = m.group(1), m.group(2)
    if re.match(r'^(#|/|https?:|mailto:|tel:|data:|javascript:)', val): return m.group(0)
    path, _, frag = val.partition('#')
    if HOME_ONLY and path.endswith(".html"):
        if path == "index.html": return f'{attr}="#{frag or "home"}"'
        return f'{attr}="#{SECTION_MAP.get(path[:-5], "home")}"'
    if path == "index.html": new = BASE
    else: new = f"{BASE}/{path}"
    new = re.sub(r'\.(png|jpg|jpeg)$', '.webp', new)
    if frag: new += "#" + frag
    return f'{attr}="{new}"'
count = 0
for f in html_files:
    h = open(f).read()
    h = re.sub(r'\b(href|src|data-img)="([^"]*)"', fix_attr, h)
    h = h.replace("<head>", '<head>\n  <meta name="robots" content="noindex, nofollow" />', 1)
    h = h.replace("</body>", TAG + "</body>", 1)
    open(f"{DST}/{os.path.basename(f)}", "w").write(h); count += 1
print(count, "pages written")
