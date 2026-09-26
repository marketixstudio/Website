import type { BlogPost } from "@/lib/content-types";

/**
 * ARCHIVED — these six posts were written for Vistrow (CRM, AI voice, automation)
 * and came across with the cloned codebase. Publishing them on marketixstudio.com
 * would duplicate vistrow.com and break the Marketix/Vistrow keyword split, so they
 * are kept here for reference only and are NOT exported to any route.
 */
const archivedVistrowPosts: BlogPost[] = [
  {
    slug: "speed-to-lead-why-response-time-decides-deals",
    title: "Speed to lead: why response time decides more deals than your ad spend",
    excerpt:
      "Studies on lead response consistently show the same pattern: the business that responds first usually wins, regardless of who has the better offer. Here's what that means for how you structure follow-up.",
    category: "Lead Generation",
    author: "Marketix Studio Team",
    date: "2026-06-02",
    readTime: "6 min read",
    metaTitle: "Speed to Lead: Why Response Time Decides Deals",
    metaDescription:
      "Why response time is one of the highest-leverage variables in conversion, and how to structure instant follow-up without adding headcount.",
    sections: [
      {
        paragraphs: [
          "Most teams optimise the top of the funnel first: better targeting, sharper creative, lower cost per click. Those matter, but they're not where most pipeline is actually lost. It's lost in the gap between a lead arriving and someone responding to it.",
          "The pattern shows up across industries: real estate, B2B software, local services. The lead doesn't go to the best offer. It goes to whoever calls back first, while intent is still high and the buyer hasn't moved on to a competitor's tab.",
        ],
      },
      {
        heading: "Why response time collapses so fast",
        paragraphs: [
          "A lead who fills out a form is in an unusually short window of high intent. They're actively comparing options right now. An hour later, they may have already spoken to two other businesses. A day later, the moment has often passed entirely.",
          "Manual follow-up can't reliably hit that window, especially outside business hours or during busy periods. It's not a discipline problem - it's a structural one. No team can staff for instant response to every channel, every hour.",
        ],
      },
      {
        heading: "What a faster system actually looks like",
        paragraphs: [
          "The fix isn't \"try harder to call back quickly.\" It's building a system that responds automatically the moment a lead arrives, then hands off to a human once intent is confirmed.",
        ],
        points: [
          "Instant acknowledgment across the channel the lead used",
          "AI voice or messaging that qualifies before a human gets involved",
          "Automatic routing to the right owner the moment qualification completes",
          "A fallback path for after-hours and volume spikes",
        ],
      },
      {
        heading: "The honest caveat",
        paragraphs: [
          "Speed alone doesn't fix a weak offer or poor targeting. If the lead was never a good fit, responding in ten seconds instead of ten minutes won't change the outcome. Speed to lead is a multiplier on demand you're already generating - not a replacement for generating the right demand in the first place.",
        ],
      },
    ],
  },
  {
    slug: "why-most-crm-implementations-fail",
    title: "Why most CRM implementations fail (and it's rarely the software)",
    excerpt:
      "Teams blame the CRM when adoption stalls. In most cases the tool was fine - the process it was supposed to encode was never actually defined.",
    category: "CRM & Automation",
    author: "Marketix Studio Team",
    date: "2026-05-14",
    readTime: "7 min read",
    metaTitle: "Why Most CRM Implementations Fail",
    metaDescription:
      "A CRM implementation rarely fails because of the software. It fails because the sales process it's meant to encode was never clearly defined first.",
    sections: [
      {
        paragraphs: [
          "It's a familiar story: a company buys a CRM, migrates their data, trains the team, and six months later half the reps are back to tracking deals in spreadsheets. The instinct is to blame the software or switch platforms. That rarely fixes it.",
        ],
      },
      {
        heading: "The CRM isn't the process - it's the record of the process",
        paragraphs: [
          "A CRM can only reflect a sales process that already exists and is well understood. If your team doesn't agree on what counts as a qualified lead, what happens at each pipeline stage, or who owns follow-up after a demo, no software configuration fixes that. It just gives everyone a new place to disagree.",
          "Implementations that stick almost always start with the process, not the tool: map the stages, define exit criteria for each one, agree on ownership, and only then decide how the CRM should encode it.",
        ],
      },
      {
        heading: "Signs the process was skipped",
        paragraphs: [
          "A few patterns show up consistently in stalled CRM rollouts:",
        ],
        points: [
          "Pipeline stages that don't map to anything reps actually do",
          "Reps keeping a personal tracker \"just in case\"",
          "Deals sitting in one stage for months with no clear next action",
          "Reporting nobody trusts enough to make decisions from",
        ],
      },
      {
        heading: "What we do differently",
        paragraphs: [
          "Before we touch configuration, we map how deals actually move today - including the informal workarounds. Then we design the pipeline around that reality, automate the repetitive steps, and only migrate data once the structure is agreed. It's slower up front and considerably faster to get real adoption.",
        ],
      },
    ],
  },
  {
    slug: "ai-voice-calling-what-it-can-and-cant-do",
    title: "AI voice calling: what it can and can't do for your pipeline",
    excerpt:
      "AI voice gets pitched as a replacement for sales teams. In practice it's a qualification layer - useful for a specific job, not a general-purpose rep.",
    category: "AI Voice",
    author: "Marketix Studio Team",
    date: "2026-04-22",
    readTime: "5 min read",
    metaTitle: "AI Voice Calling: What It Can and Can't Do",
    metaDescription:
      "A realistic look at where AI voice calling helps pipeline - instant response and qualification - and where it isn't the right tool.",
    sections: [
      {
        paragraphs: [
          "There's a lot of noise around AI voice agents right now, some of it overselling what the technology actually does well. It's worth being specific about where it genuinely helps and where it doesn't.",
        ],
      },
      {
        heading: "Where it earns its place",
        paragraphs: ["AI voice is strongest as the very first touch on a new lead - the job that's hardest for humans to do consistently:"],
        points: [
          "Calling within seconds of a lead arriving, at any hour",
          "Asking consistent qualifying questions without skipping steps",
          "Booking a meeting directly into a calendar when intent is confirmed",
          "Logging the conversation and outcome without manual data entry",
        ],
      },
      {
        heading: "Where it isn't the right tool",
        paragraphs: [
          "Complex negotiation, objection handling that requires judgment, and relationship-building conversations still need a person. We design AI voice to hand off to a human once a lead is qualified - not to carry the whole conversation end to end.",
          "It also depends entirely on what happens after the call. An AI agent that qualifies a lead and then drops it into a CRM nobody checks hasn't solved anything. The value comes from the system around it, not the call in isolation.",
        ],
      },
      {
        heading: "The realistic framing",
        paragraphs: [
          "Think of AI voice as removing the delay and inconsistency from the first response, not as a replacement for your sales team. Used that way, it's one of the highest-leverage pieces of a connected follow-up system.",
        ],
      },
    ],
  },
  {
    slug: "marketing-attribution-that-sales-will-actually-trust",
    title: "Building marketing attribution that sales will actually trust",
    excerpt:
      "Attribution dashboards get ignored when they don't match what the sales team sees in the CRM. Fixing that gap matters more than adding another tracking pixel.",
    category: "Conversion Tracking",
    author: "Marketix Studio Team",
    date: "2026-03-30",
    readTime: "6 min read",
    metaTitle: "Marketing Attribution Sales Teams Will Trust",
    metaDescription:
      "Why attribution dashboards get ignored, and how to build tracking that ties directly to CRM pipeline data sales already trusts.",
    sections: [
      {
        paragraphs: [
          "Most marketing teams have an attribution dashboard. Fewer have one that sales actually references when deciding where to spend time. Those are different problems, and only the second one changes budget decisions.",
        ],
      },
      {
        heading: "The trust gap",
        paragraphs: [
          "When marketing reports leads and sales reports revenue, and the two numbers don't reconcile, sales defaults to trusting their own pipeline view. That's usually correct - the CRM has more accurate downstream data. The fix isn't a better chart. It's making the marketing report and the CRM pipeline the same source of truth.",
        ],
      },
      {
        heading: "What that requires in practice",
        paragraphs: ["A handful of technical pieces, done properly, close most of the gap:"],
        points: [
          "Consistent UTM and source tagging enforced at the point of lead capture",
          "CRM fields that store first-touch and last-touch source, not just \"how did you hear about us\"",
          "Server-side or CRM-triggered conversion events, not just client-side pixels",
          "A shared dashboard built on CRM stage data, not a separate marketing-only tool",
        ],
      },
      {
        heading: "What to expect honestly",
        paragraphs: [
          "Attribution will never be perfectly clean - multi-touch journeys and offline influence make that impossible. The goal is directionally reliable data sales trusts enough to act on, not a perfect model. That's a lower bar than most attribution projects aim for, and a far more useful one.",
        ],
      },
    ],
  },
  {
    slug: "when-to-automate-and-when-not-to",
    title: "When to automate a process, and when not to",
    excerpt:
      "Automation is often applied to processes that were broken to begin with, which just makes the broken process run faster. Here's how we decide what's worth automating.",
    category: "Business Automation",
    author: "Marketix Studio Team",
    date: "2026-03-08",
    readTime: "5 min read",
    metaTitle: "When to Automate a Process - and When Not To",
    metaDescription:
      "A practical framework for deciding which parts of your operations are worth automating, and which aren't ready yet.",
    sections: [
      {
        paragraphs: [
          "Automation gets sold as a default good. It isn't. Automating a process that's inconsistent or poorly defined just means the inconsistency happens faster and at greater scale.",
        ],
      },
      {
        heading: "A useful filter before automating anything",
        paragraphs: ["Before automating a step, we ask three questions:"],
        points: [
          "Is this process repeated often enough to justify the setup cost?",
          "Is it well-defined enough that the same input reliably produces the same correct output?",
          "Does a person still need to make a judgment call partway through?",
        ],
      },
      {
        heading: "Good automation candidates",
        paragraphs: [
          "Lead routing, follow-up sequences, data entry between systems, reminders, and status updates are usually safe to automate - they're repetitive, well-defined, and low-judgment.",
        ],
      },
      {
        heading: "Poor candidates, at least at first",
        paragraphs: [
          "Anything involving negotiation, exception handling, or a process that changes every few weeks is a poor first candidate. Automating it early just means rebuilding the automation every time the process shifts. It's usually better to run it manually until it stabilises, then automate.",
        ],
      },
    ],
  },
  {
    slug: "connected-marketing-system-what-it-actually-means",
    title: "\"Connected marketing system\" is a vague phrase - here's what we actually mean by it",
    excerpt:
      "We use the phrase a lot, so it's worth being concrete about what connects to what, and what breaks when it doesn't.",
    category: "Strategy",
    author: "Marketix Studio Team",
    date: "2026-02-18",
    readTime: "6 min read",
    metaTitle: "What a Connected Marketing System Actually Means",
    metaDescription:
      "A concrete breakdown of what a connected marketing and automation system means in practice, and what breaks when the pieces aren't connected.",
    sections: [
      {
        paragraphs: [
          "\"Connected system\" can sound like marketing language for nothing in particular. It's worth being specific, because the disconnected version is the default state for most businesses, and it has a real cost.",
        ],
      },
      {
        heading: "The default, disconnected version",
        paragraphs: [
          "Ads run in one platform. Leads land in a spreadsheet or a generic inbox. Follow-up happens manually, inconsistently, by whoever has time. The CRM, if there is one, gets updated days later or not at all. Nobody can say with confidence which campaign produced which closed deal.",
        ],
      },
      {
        heading: "What \"connected\" specifically means",
        paragraphs: ["In practice, we mean these systems share data automatically, in both directions:"],
        points: [
          "Ad platforms and landing pages feed leads directly into the CRM with source data attached",
          "The CRM triggers instant follow-up - AI voice, SMS, or email - the moment a lead is qualified",
          "Deal outcomes flow back to the ad platforms as conversion signals, improving targeting over time",
          "Reporting reads from one shared source instead of reconciling exports from four tools",
        ],
      },
      {
        heading: "What breaks without it",
        paragraphs: [
          "Response time slows down because nothing triggers automatically. Attribution breaks because the systems don't share data. And the ad platforms themselves get worse at targeting, because they never learn which leads actually became revenue. A connected system fixes all three by removing the manual handoffs between them.",
        ],
      },
    ],
  },
];

void archivedVistrowPosts;

/** Published Marketix posts. Empty until Marketix-specific articles are written. */
/**
 * Published Marketix posts. Rules: no invented statistics, sources linked for any
 * platform or regulatory fact, worked examples labelled as examples, no em dashes.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-rank-higher-on-google-maps",
    title: "How to rank higher on Google Maps: a practical checklist for local businesses",
    excerpt:
      "Google ranks local businesses on relevance, distance and prominence. Here is what each one means, what you can actually control, and the mistakes that get profiles suspended.",
    category: "Local SEO",
    author: "Marketix Studio",
    date: "2026-09-24",
    readTime: "8 min read",
    metaTitle: "How to Rank Higher on Google Maps",
    metaDescription:
      "A practical Google Maps ranking checklist: how relevance, distance and prominence work, how to set up your Google Business Profile, and what to avoid.",
    focusKeyword: "rank higher on Google Maps",
    secondaryKeywords: ["Google Business Profile optimisation", "local SEO", "Google map pack", "local SEO Pune"],
    breadcrumbTitle: "Rank higher on Google Maps",
    sections: [
      {
        paragraphs: [
          "Google decides which businesses appear in the map pack using three things: relevance, distance and prominence. That comes from Google's own guidance on [improving your local ranking](https://support.google.com/business/answer/7091). You can't move your shop closer to every customer, but you can control most of the rest.",
          "This checklist covers what matters most, in the order we usually work through it for a new client.",
        ],
      },
      {
        heading: "What decides your position on Google Maps",
        paragraphs: [
          "Relevance is how well your profile matches what someone searched for. Distance is how far you are from the searcher, or from the location in their search. Prominence is how well known your business is, both on Google and across the web.",
          "Google has said that review count and review score count towards prominence, as do links and mentions elsewhere online. That is why two similar shops on the same street can rank very differently.",
        ],
        points: [
          "Relevance: categories, services and profile details that match real searches",
          "Distance: your address or service area, which you can't fake",
          "Prominence: reviews, mentions, links and how complete and active your profile is",
        ],
      },
      {
        heading: "Complete every part of your Google Business Profile",
        paragraphs: [
          "An incomplete profile gives Google less to match against. Fill in every field that applies to you, and keep it accurate when things change.",
        ],
        points: [
          "Primary category, plus any secondary categories that genuinely apply",
          "Services or products, written the way customers describe them",
          "Opening hours, including special hours for festivals and holidays",
          "Attributes such as wheelchair access or online appointments, where relevant",
          "A plain description of what you do and where, without keyword stuffing",
          "Real photos of your premises, team and work, added regularly",
        ],
      },
      {
        heading: "Choose your primary category carefully",
        paragraphs: [
          "The primary category is one of the strongest relevance signals you control. Pick the one that describes your core business most precisely. A car accessories shop that also does detailing should usually lead with the accessories category, then add detailing as a secondary one.",
          "Look at which categories the businesses already ranking for your main search use. It is a quick way to see how Google classifies your market.",
        ],
      },
      {
        heading: "Keep your name, address and phone number identical everywhere",
        paragraphs: [
          "Your business name, address and phone number should match exactly on your profile, your website and every directory you are listed in. Different versions of the same address make it harder for Google to be confident the listings are the same business.",
          "Use your real business name. Google's [guidelines for representing your business](https://support.google.com/business/answer/3038177) do not allow extra keywords in the name, and profiles that add them can be suspended.",
        ],
      },
      {
        heading: "Get a steady flow of genuine reviews",
        paragraphs: [
          "Recent, genuine reviews help prominence and help people choose you. The hard part is not asking, it is making it easy. Most happy customers will review if it takes seconds rather than minutes.",
          "Ask at the moment of satisfaction: when the job is done, the order arrives or the customer thanks you. A QR code at the counter and a WhatsApp message with your review link both work well. We built [a review page for Jay Ganesh Car Accessories](/work/jayganesh-review-system) that turns a few words from the customer into a draft they edit and post themselves.",
          "Reply to every review, good or bad. A calm, specific reply to a complaint often does more for your reputation than the complaint does harm.",
        ],
        points: [
          "Never pay for reviews or offer discounts in exchange for them",
          "Never filter unhappy customers away from your review link (review gating)",
          "Never post reviews for yourself, even from staff or family",
        ],
      },
      {
        heading: "Post regularly and keep your photos fresh",
        paragraphs: [
          "Google Business Profile posts let you share offers, events and updates directly on your listing. An active profile gives customers more reasons to call, and it signals that the business is open and cared for.",
          "A simple rhythm is enough: one post a week, and new photos whenever something changes, such as new stock, a new service or a festival display.",
        ],
      },
      {
        heading: "Build pages on your website for the areas you serve",
        paragraphs: [
          "Your website supports your map ranking. A clear page for each main service and each area you serve helps Google understand where you are relevant. Make each page genuinely useful: what you offer there, how to reach you and what customers in that area ask.",
          "For example, a Pune business serving Baner, Wakad and Hinjewadi can explain directions, parking and local delivery for each, rather than repeating the same text with the area name swapped. Our [Pune page](/locations/pune) shows how we think about the city area by area.",
        ],
      },
      {
        heading: "Track rankings from where your customers are",
        paragraphs: [
          "Map rankings change with the searcher's location. You might be first for someone standing outside your shop and invisible two kilometres away. Check your position from several points around your area, not just from your own office.",
          "Track the actions that matter too: calls, direction requests and website clicks from your profile. Those tell you whether better visibility is turning into customers.",
        ],
      },
      {
        heading: "Mistakes that get profiles suspended",
        paragraphs: [
          "Some shortcuts work briefly and then cost you the whole listing. Suspension can take weeks to resolve, and you lose enquiries the entire time.",
        ],
        points: [
          "Adding keywords or locations to your business name",
          "Using a virtual office or someone else's address",
          "Creating duplicate listings for the same location",
          "Buying reviews or running review swaps with other businesses",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If you want to work through this yourself, our [Google Maps Ranking Toolkit](/gmb-toolkit) puts the checklists, post templates and review request scripts in one Excel file for ₹99. If you would rather have it done for you, that is our [local SEO and Google Business Profile service](/services/local-seo-gmb), and a [free growth audit](/growth-audit) will show you what to fix first.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to rank higher on Google Maps?",
        a: "It depends on your category and how competitive your area is. Fixes to your profile can show results within weeks, while competitive categories take longer. Anyone who guarantees a position or a timeline is guessing, because Google does not let anyone control rankings.",
      },
      {
        q: "Do Google reviews help my Google Maps ranking?",
        a: "Yes. Google says review count and review score factor into local ranking as part of prominence. Recent reviews also help customers choose you, so a steady flow of genuine reviews helps twice.",
      },
      {
        q: "Can I rank on Google Maps in an area where I don't have an address?",
        a: "Distance is one of the three ranking factors, so you will always rank best close to your address or service area. You cannot use a fake or virtual address to rank elsewhere; that breaks Google's guidelines and risks suspension.",
      },
      {
        q: "Should I add keywords to my business name on Google?",
        a: "No. Google's guidelines say your business name should match the name you use in the real world. Adding keywords or locations can get your profile suspended.",
      },
    ],
  },
  {
    slug: "real-estate-lead-generation-pune",
    title: "Real estate lead generation in Pune: why site visits beat cost per lead",
    excerpt:
      "Cheap leads that never visit the site cost more than expensive leads that do. How to plan, qualify and measure real estate campaigns around site visits and bookings.",
    category: "Real Estate Marketing",
    author: "Marketix Studio",
    date: "2026-09-24",
    readTime: "8 min read",
    metaTitle: "Real Estate Lead Generation in Pune",
    metaDescription:
      "Real estate lead generation in Pune built around site visits, not cost per lead: targeting, qualifying forms, fast follow-up, RERA details and reporting.",
    focusKeyword: "real estate lead generation Pune",
    secondaryKeywords: ["real estate marketing Pune", "site visit leads", "real estate Google Ads", "real estate Meta ads"],
    breadcrumbTitle: "Real estate lead generation in Pune",
    sections: [
      {
        paragraphs: [
          "Most real estate campaigns are judged on cost per lead because it is the easiest number to see. It is also the easiest to game. A campaign can produce hundreds of cheap leads that never pick up the phone, while a smaller campaign quietly fills the site visit calendar.",
          "The number that pays for a project is bookings, and the closest number you can steer week to week is site visits. This is how we plan real estate campaigns around that.",
        ],
      },
      {
        heading: "Measure the whole journey, not the first step",
        paragraphs: [
          "Every lead goes through the same stages: enquiry, contacted, qualified, site visit, booking. If you only measure the first stage, you optimise for people who fill in forms, not people who buy flats.",
          "Record each stage in your CRM or even a shared sheet. Once you can see cost per site visit and cost per booking by campaign, the right decisions become obvious.",
        ],
        points: [
          "Cost per lead: useful only as a warning light",
          "Contact rate: how many leads you actually reach",
          "Cost per site visit: the number to optimise week to week",
          "Cost per booking: the number that decides whether the campaign paid off",
        ],
      },
      {
        heading: "Say the price and the configuration in the ad",
        paragraphs: [
          "Leaving the price out of an ad invites clicks from everyone, including people nowhere near your budget. Stating the price bracket and configuration, for example '2 BHK from a stated price in Hinjewadi', filters out unsuitable enquiries before you pay for them.",
          "You get fewer leads and a much higher share of them are worth calling. Your sales team will notice within the first week.",
        ],
      },
      {
        heading: "Target Pune by micro-market, not the whole city",
        paragraphs: [
          "Pune is several property markets in one. Buyers looking in Hinjewadi and Wakad are often IT professionals comparing commute times. Baner and Balewadi attract a different budget. Kharadi and Wagholi, Hadapsar and the PCMC side each have their own buyers and competition.",
          "Build separate campaigns and landing pages for each micro-market you sell in, with the landmarks, commute times and prices that matter there. Our [Pune page](/locations/pune) and [real estate page](/industries/real-estate) explain how we segment.",
        ],
      },
      {
        heading: "Qualify on the form, not on the first call",
        paragraphs: [
          "A good real estate form asks three questions besides contact details: preferred configuration, budget range and when the buyer plans to move. It adds a few seconds for a serious buyer and filters out casual browsers.",
          "Send campaign traffic to a dedicated [landing page](/services/landing-pages-funnels) for the project, not your homepage. One project, one clear action: book a site visit or request the price sheet.",
        ],
      },
      {
        heading: "Call back while the buyer still cares",
        paragraphs: [
          "A lead that waits hours for a call has usually spoken to another project already. Speed matters more than a perfect script.",
          "Set up an instant [WhatsApp](/services/whatsapp-marketing) acknowledgement with the brochure and a link to pick a visit slot, and an alert to the sales team the moment a lead arrives. Track how long first contact takes, and treat it as seriously as ad spend.",
        ],
      },
      {
        heading: "Feed site visits back to Google and Meta",
        paragraphs: [
          "Ad platforms optimise for whatever you tell them is a conversion. If that is a form fill, they find more form fillers. Both platforms let you send later outcomes back: Google Ads through offline conversion imports and Meta through its Conversions API.",
          "Once site visits and bookings flow back, the platforms start finding people who look like your actual buyers. That is usually where cost per site visit starts to fall.",
        ],
      },
      {
        heading: "Google Ads or Meta ads for real estate?",
        paragraphs: [
          "Usually both, doing different jobs. [Google Ads](/services/google-ads-ppc) captures people already searching for a flat in a specific area and budget, so intent is high. [Meta ads](/services/meta-ads) reach people before they start searching, using location and interests, and are strong for launches and walkthrough videos.",
          "Meta's instant forms produce more leads but more of them are casual, so add qualifying questions or send traffic to your own landing page.",
        ],
      },
      {
        heading: "Include your MahaRERA details",
        paragraphs: [
          "Projects in Maharashtra that need RERA registration must show the MahaRERA registration number in their advertising, and MahaRERA has also required a project QR code on advertisements. Rules change, so check the current guidance on the [MahaRERA website](https://maharera.maharashtra.gov.in) before every launch, and have your legal team approve the final wording.",
        ],
      },
      {
        heading: "What to report every week",
        paragraphs: [
          "A useful weekly report fits on one screen: spend, leads, contact rate, site visits and bookings by campaign and micro-market, with cost per site visit as the headline. If you want a second opinion on your current campaigns, our [free growth audit](/growth-audit) looks at exactly this.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a good cost per lead for real estate in Pune?",
        a: "There isn't a single good number, because it changes with location, price segment and how strong the project is. Cost per lead on its own is also misleading. Judge campaigns on cost per site visit and cost per booking instead.",
      },
      {
        q: "Should real estate developers use Google Ads or Meta ads?",
        a: "Usually both. Google Ads reaches people actively searching for a property in a specific area, while Meta ads build interest before people search and work well for launches. Measure both on site visits, not leads.",
      },
      {
        q: "Do real estate ads in Maharashtra need a RERA number?",
        a: "Projects that require RERA registration must show their MahaRERA registration number in advertisements. Check MahaRERA's current guidance before launch, as requirements such as QR codes have been added over time.",
      },
      {
        q: "How quickly should sales call a new property lead?",
        a: "As quickly as possible. Send an instant WhatsApp acknowledgement and alert the sales team the moment a lead arrives, then track the time to first call as closely as you track ad spend.",
      },
    ],
  },
  {
    slug: "break-even-roas-calculation",
    title: "What is a good ROAS? How to work out your break-even ROAS",
    excerpt:
      "A good ROAS depends entirely on your margin. Here is how to calculate your break-even ROAS, what to include in your costs, and why platform ROAS rarely matches your bank account.",
    category: "eCommerce",
    author: "Marketix Studio",
    date: "2026-09-24",
    readTime: "7 min read",
    metaTitle: "What Is a Good ROAS? Find Your Break-even",
    metaDescription:
      "How to calculate break-even ROAS from your margin, which costs to include, platform vs blended ROAS, and how to set a realistic target ROAS.",
    focusKeyword: "break-even ROAS",
    secondaryKeywords: ["good ROAS", "ROAS calculation", "eCommerce ROAS", "blended ROAS"],
    breadcrumbTitle: "Break-even ROAS",
    sections: [
      {
        paragraphs: [
          "ROAS, or return on ad spend, is the revenue your ads bring in divided by what you spent on them. Spend ₹10,000 and make ₹40,000 in sales and your ROAS is 4.",
          "Whether 4 is good depends on your margin. A brand with healthy margins can profit at a ROAS of 2, while a brand with thin margins can lose money at 4. The number that tells you is your break-even ROAS.",
        ],
      },
      {
        heading: "The break-even ROAS formula",
        paragraphs: [
          "Break-even ROAS is 1 divided by your contribution margin, written as a decimal. Contribution margin is what is left from each sale after all the costs of making and delivering that sale, before ad spend.",
          "Worked example: you sell a product for ₹1,000 excluding GST. After product cost, packaging, shipping, payment gateway fees and an allowance for returns, you keep ₹400. Your contribution margin is 40%, so your break-even ROAS is 1 ÷ 0.40 = 2.5. Below 2.5 your ads lose money on the first order. Above it they make money.",
          "Same product, but you keep only ₹250 after costs: margin 25%, break-even ROAS 4. Same ads, very different outcome.",
        ],
      },
      {
        heading: "What to include in your costs",
        paragraphs: [
          "Most break-even calculations go wrong because costs are missing. Include everything that happens because of a sale.",
        ],
        points: [
          "Product cost or cost of goods",
          "Packaging and fulfilment",
          "Shipping, including return shipping",
          "Payment gateway and COD charges",
          "Returns and RTO (return to origin) losses, which matter a lot for cash on delivery in India",
          "Discounts and coupon codes",
        ],
      },
      {
        heading: "Use revenue without GST",
        paragraphs: [
          "Calculate ROAS on revenue excluding GST. The tax is collected on the government's behalf, so it was never your revenue. Including it makes every campaign look better than it is.",
        ],
      },
      {
        heading: "Platform ROAS vs blended ROAS",
        paragraphs: [
          "Meta and Google each report their own ROAS using their own attribution rules. A customer who saw a Meta ad, then searched on Google and bought, can be counted by both. Add the platform numbers together and you often get more revenue than your store actually made.",
          "Blended ROAS fixes this: total store revenue divided by total ad spend across every platform, for the same period. It is less flattering but it matches your bank account. Watch platform ROAS to compare campaigns, and blended ROAS to decide whether the business is profitable.",
        ],
      },
      {
        heading: "First-order ROAS and repeat customers",
        paragraphs: [
          "If customers come back and buy again, you can accept a lower ROAS on the first order, because the second and third orders cost little or nothing to win. That is the reason [email and WhatsApp follow-up](/services/email-marketing-automation) matters so much for D2C brands.",
          "Be honest about repeat rate, though. Plan on the repeat behaviour you actually see in your data, not the behaviour you hope for.",
        ],
      },
      {
        heading: "Setting a target ROAS",
        paragraphs: [
          "Your target should sit above break-even by enough to cover fixed costs and profit. If break-even is 2.5, a target of 3 to 3.5 leaves room for overheads and error. Revisit it whenever prices, costs or return rates change.",
          "If campaigns sit below break-even, look beyond the ads. A faster, clearer product page or checkout raises conversion and ROAS without any change in ad spend, which is the job of [conversion rate optimisation](/services/conversion-rate-optimisation).",
        ],
      },
      {
        heading: "A quick checklist",
        paragraphs: ["Before your next budget decision, check these."],
        points: [
          "You know your contribution margin per order, including returns and RTO",
          "Your break-even ROAS is written down and shared with whoever runs your ads",
          "You track blended ROAS weekly alongside platform ROAS",
          "Revenue in every report excludes GST",
          "You know your real repeat purchase rate",
        ],
      },
      {
        paragraphs: [
          "Want someone to check the numbers with you? Our [eCommerce and D2C marketing](/industries/ecommerce-d2c) starts from exactly this calculation, and a [free growth audit](/growth-audit) will show where your ad spend is leaking.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a ROAS of 4 good?",
        a: "It depends on your margin. With a 40% contribution margin your break-even ROAS is 2.5, so 4 is profitable. With a 25% margin break-even is 4, so a ROAS of 4 only breaks even on the first order.",
      },
      {
        q: "What is the difference between ROAS and ROI?",
        a: "ROAS compares revenue with ad spend only. ROI compares profit with the total investment, including product costs and other expenses. A campaign can have a high ROAS and still lose money if margins are thin.",
      },
      {
        q: "Why is my Meta ROAS different from my store's revenue?",
        a: "Each ad platform counts conversions using its own attribution rules, and a sale can be credited to more than one platform. Returns and cancellations also usually aren't deducted. Blended ROAS, total revenue divided by total ad spend, gives the true picture.",
      },
      {
        q: "Should GST be included when calculating ROAS?",
        a: "No. Use revenue excluding GST, because the tax is collected on the government's behalf and was never your revenue.",
      },
    ],
  },
];
