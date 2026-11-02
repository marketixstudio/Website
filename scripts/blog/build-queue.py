"""Build content/blog-queue.json from docs/SEARCH_DEMAND.md (real Google autocomplete, India).

One topic per distinct intent per section (cost, worth it, timing, how-to/strategy, tips/ideas,
examples, each "X vs Y" pair). Each topic keeps the real searches it covers; the first one is the
focus keyword (autocomplete lists the most popular first). Re-run after refreshing the research;
topics already in the queue keep their status.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "docs/SEARCH_DEMAND.md"
OUT = ROOT / "content/blog-queue.json"

CATEGORY = {
    "performance-marketing": "costs-budgets", "google-ads-ppc": "google-ads", "meta-ads": "meta-instagram-ads",
    "seo-services": "seo-google-maps", "local-seo-gmb": "seo-google-maps", "content-marketing": "social-media-content",
    "web-design-development": "websites-landing-pages", "landing-pages-funnels": "websites-landing-pages",
    "conversion-rate-optimisation": "websites-landing-pages", "branding-design": "social-media-content",
    "social-media-marketing": "social-media-content", "email-marketing-automation": "whatsapp-email",
    "whatsapp-marketing": "whatsapp-email", "real-estate": "industry-playbooks", "ecommerce-d2c": "industry-playbooks",
    "saas-startups": "industry-playbooks", "healthcare": "industry-playbooks", "education": "industry-playbooks",
    "hospitality": "industry-playbooks", "interior-architecture": "industry-playbooks", "automotive": "industry-playbooks",
    "pune": "costs-budgets",
}
# Not buyer questions: jobs, pay, courses, unrelated brands, "near me" (service pages own those).
JUNK = re.compile(r"\b(make|makes|salary|certificat\w*|course|class(es)?|school for|university|login|jobs?|brands does|museum|"
                  r"seongsu|sofitel|machine|near me|within \d|open now|sell for|commission|sales tax|associates?|"
                  r"been around|world 20\d\d|world cost|for authors|dv360|cyber|workspace|sales agents?|how long is (digital|school)|how long to study|how long has|how long design|how long logo)\b")
INTENTS = [
    ("explainer", re.compile(r"^what is\b")),
    ("cost", re.compile(r"\b(cost|costs|price|prices|pricing|charge|charges|how much|budget|spend|fees?)\b")),
    ("worth", re.compile(r"\b(worth it|really work|still work)\b|^(is|are|does|do) .*\b(worth|work)$")),
    ("timing", re.compile(r"\bhow long\b|\bhow much time\b")),
    ("examples", re.compile(r"\bexamples?\b")),
    ("tips", re.compile(r"\b(tips|tricks|ideas|best practices)\b")),
    ("strategy", re.compile(r"\b(how to|how does|what is|strateg\w*|set up)\b")),
    ("benefits", re.compile(r"\bbenefits?\b")),
]
# Already published (content/blog.ts): don't queue the same question again.
COVERED = ["rank higher on google maps", "break-even roas", "real estate lead generation pune"]

def vs_key(q):
    a, b = q.split(" vs ", 1)
    norm = lambda s: re.sub(r"\s+(which is (better|best)|cost|difference|examples|statistics|for .*)$", "", s.strip())
    return "vs:" + "~".join(sorted([norm(a), norm(b)]))

text = SRC.read_text()
body = text.split("## Buyer questions by topic (as searched)")[1].split("## Pune areas")[0]
topics = []
for block in re.split(r"\n### ", body)[1:]:
    section, rest = block.split("\n", 1)
    section = section.strip()
    qs = [q.strip() for q in rest.split(";") if q.strip()]
    groups = {}
    for q in qs:
        if JUNK.search(q) or any(c in q for c in COVERED):
            continue
        if " vs " in q:
            key = vs_key(q)
        else:
            key = next((name for name, rx in INTENTS if rx.search(q)), None)
            if not key:
                continue
        groups.setdefault(key, []).append(q)
    for key, searches in groups.items():
        topics.append({
            "id": f"{section}:{key}",
            "category": CATEGORY[section],
            "focusKeyword": searches[0],
            "searches": searches[:12],
            "status": "queued",
        })

# Keep status of topics already drafted/published; interleave categories so days vary.
old = {t["id"]: t for t in json.loads(OUT.read_text())} if OUT.exists() else {}
for t in topics:
    if t["id"] in old:
        t["status"] = old[t["id"]]["status"]
        for k in ("slug", "draftedOn"):
            if k in old[t["id"]]:
                t[k] = old[t["id"]][k]
by_cat = {}
for t in topics:
    by_cat.setdefault(t["category"], []).append(t)
ordered = []
while any(by_cat.values()):
    for c in list(by_cat):
        if by_cat[c]:
            ordered.append(by_cat[c].pop(0))
OUT.write_text(json.dumps(ordered, indent=2, ensure_ascii=False) + "\n")
print(f"{len(ordered)} topics -> {OUT.relative_to(ROOT)}", file=sys.stderr)
