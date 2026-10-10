import {
  BadgeIndianRupee,
  BarChart3,
  Brush,
  Globe,
  LayoutTemplate,
  Mail,
  MapPin,
  MousePointerClick,
  PenLine,
  Search,
  Share2,
  Target,
  MessageCircle,
} from "lucide-react";
import type { ServiceContent, OverviewContent } from "@/lib/content-types";

export const servicesOverview: OverviewContent = {
  eyebrow: "Services",
  title: "Marketing services that bring in",
  highlight: "enquiries",
  subtitle:
    "Paid ads, SEO, websites, creative and follow-up, planned together so every channel is measured on the enquiries and sales it produces.",
  metaTitle: "Digital Marketing Services in Pune",
  metaDescription:
    "Digital marketing services in Pune: Google and Meta ads, SEO, local SEO, websites, landing pages, branding, social, email and WhatsApp marketing.",
  cardsTitle: "What we do",
  cards: [
    { label: "Performance Marketing", href: "/services/performance-marketing", body: "Paid media across channels, managed against enquiry and sales targets.", icon: Target },
    { label: "Google Ads & PPC", href: "/services/google-ads-ppc", body: "Search and Shopping ads that answer what people are searching for.", icon: MousePointerClick },
    { label: "Meta Ads", href: "/services/meta-ads", body: "Facebook and Instagram campaigns built on creative testing.", icon: Share2 },
    { label: "SEO Services", href: "/services/seo-services", body: "Technical, on-page and content SEO for the searches that matter.", icon: Search },
    { label: "Local SEO & Google Business", href: "/services/local-seo-gmb", body: "Show up in the map pack and turn nearby searches into visits.", icon: MapPin },
    { label: "Content Marketing", href: "/services/content-marketing", body: "Articles and pages written to rank, answer questions and convert.", icon: PenLine },
    { label: "Web Design & Development", href: "/services/web-design-development", body: "Fast, mobile-first websites built to turn visits into enquiries.", icon: Globe },
    { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels", body: "Campaign pages built around one clear next step.", icon: LayoutTemplate },
    { label: "Branding & Design", href: "/services/branding-design", body: "Identity, messaging and creative that looks like one brand everywhere.", icon: Brush },
    { label: "Social Media Marketing", href: "/services/social-media-marketing", body: "Organic posts, reels and event content that keep you visible.", icon: Share2 },
    { label: "Email Marketing & Automation", href: "/services/email-marketing-automation", body: "Automated emails that follow up with leads and past customers.", icon: Mail },
    { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing", body: "Broadcasts and follow-ups on the app your customers already use.", icon: MessageCircle },
    { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation", body: "More enquiries from the traffic you already pay for.", icon: BarChart3 },
  ],
  intro: {
    title: "Channels work better when they're planned together",
    body:
      "A campaign only works when the offer, the ad, the landing page and the follow-up agree with each other. We plan them together, set up tracking before anything goes live, and report on the enquiries each channel produced.",
    points: [
      "One team across ads, SEO, web and creative",
      "Tracking set up before launch",
      "Monthly reports on cost per lead, conversion rate and return on ad spend",
    ],
  },
  process: [
    { title: "Audit", body: "We review your ads, website, Google Business Profile and tracking, and show you where enquiries are being lost." },
    { title: "Plan", body: "Channels, offer, creative direction and what we'll measure, agreed before any budget goes live." },
    { title: "Build", body: "Landing pages, creative, tracking and campaigns set up together." },
    { title: "Improve", body: "Regular optimisation, with budget moved toward what brings in enquiries, and a monthly report." },
  ],
  faqs: [
    { q: "Do you work with businesses outside India?", a: "Yes. Alongside clients across India, we plan and run campaigns for brands selling into the UAE, the UK and the US." },
    { q: "Can I hire you for just one service?", a: "Yes. Many clients start with one service, such as Google Ads or a new website, and add others once the first is working." },
    { q: "Which service should I start with?", a: "It depends on where enquiries are being lost. If people aren't finding you, start with ads or SEO. If they visit but don't enquire, start with the website or landing pages. The free growth audit tells you which." },
    { q: "How do you report results?", a: "Every month, in plain language: where the budget went, cost per lead, conversion rate and return on ad spend, and what we changed and why." },
  ],
};

export const services: Record<string, ServiceContent> = {
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    eyebrow: "Services",
    subtitle:
      "Paid media across Google and Meta, managed against the enquiries and sales you actually want, not the cheapest click.",
    metaTitle: "Performance Marketing Services in Pune",
    metaDescription:
      "Performance marketing services in Pune: Google, Meta and LinkedIn budgets managed against revenue targets, for brands in Pune, Mumbai, Dubai, London and the US.",
    answerBlock: {
      question: "What is performance marketing?",
      answer:
        "Performance marketing is paid advertising where every rupee is tied to a measurable business action, such as a lead, a booking or a sale, rather than impressions. Budget is allocated to the channels and creative that produce the lowest cost per qualified outcome, and reallocated weekly as the data changes.",
      keyFacts: [
        "Measured on cost per qualified lead and return on ad spend, not clicks",
        "Works across Google, Meta, LinkedIn and programmatic in one plan",
        "Requires conversion tracking to be configured before launch",
        "Cost per enquiry usually improves as campaigns collect conversion data",
      ],
    },
    problem: {
      title: "Ad spend without a system just buys traffic.",
      body: "Many ad accounts are optimised for the cheapest click, which is the easiest metric to win and the least connected to revenue. The result is a dashboard full of green numbers and a sales team with nothing to call.",
      points: [
        "Budget optimised to clicks instead of qualified leads",
        "No visibility into which campaign created which deal",
        "Leads arriving in an inbox nobody checks within an hour",
        "Reporting that cannot connect spend to closed revenue",
      ],
    },
    included: [
      "Channel strategy and budget allocation model",
      "Campaign build across Google, Meta and LinkedIn",
      "Creative direction, production and testing roadmap",
      "Landing page design and build",
      "GA4, Google Tag Manager and server-side conversion tracking",
      "CRM integration and lead routing",
      "Weekly optimisation and monthly performance review",
    ],
    steps: [
      { title: "Diagnose", body: "Account audit, funnel review, tracking validation and a competitor spend analysis." },
      { title: "Architect", body: "We agree the offer, the audiences, the creative angles and the target cost per acquisition." },
      { title: "Launch", body: "Campaigns, landing pages and tracking go live together in a single coordinated release." },
      { title: "Compound", body: "Weekly creative and bid iteration, scaling budget only into proven segments." },
    ],
    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "GA4", "Google Tag Manager", "Looker Studio", "Hotjar"],
    faqs: [
      { q: "How much does performance marketing cost in India?", a: "There are two costs: the ad budget, paid directly to Google, Meta or LinkedIn, and the agency's management fee. Neither has a fixed industry price. The budget depends on how many enquiries or sales you need and what a click costs in your market; the fee depends on the channels and campaigns involved. We quote after a free audit, so the number is based on your account rather than a package." },
      { q: "What is the difference between performance marketing and digital marketing?", a: "Digital marketing is the umbrella for all online marketing, including awareness work. Performance marketing is the part that is paid for and judged on a measurable action, such as a lead, a sale or a booking, with every rupee tracked back to the ad and search that produced the result." },
      { q: "Performance marketing vs brand marketing: which do I need?", a: "Most businesses need both, in different proportions. Performance marketing captures people who are ready to act now; brand marketing builds the familiarity that makes them choose you when they are. A business in a category with little existing demand usually has to create some awareness first, or performance campaigns run out of people to convert." },
      { q: "Does performance marketing work for small businesses?", a: "Yes, because you can start with a modest budget and pay only for clicks or results that are tracked. The constraint is usually setup rather than budget: conversion tracking, a landing page that converts and fast follow-up on enquiries. Without those, even a large budget produces leads you cannot measure or close." },
      { q: "How long does performance marketing take to show results?", a: "Paid campaigns can bring enquiries within days of going live. The first weeks are a learning period in which the platforms find out which audiences, searches and ads convert, so the cost per result usually improves over the first months as data builds up." },
      { q: "Which channels does performance marketing include?", a: "Search ads on Google, social ads on Meta, LinkedIn and YouTube, shopping and marketplace ads, and retargeting across all of them. SEO, email and WhatsApp are included when they are measured the same way, on leads and revenue rather than reach." },
    ],
  },

  "google-ads-ppc": {
    slug: "google-ads-ppc",
    title: "Google Ads & PPC",
    eyebrow: "Services",
    subtitle:
      "Search, Shopping and Performance Max campaigns structured for profitable cost per acquisition and checked every month for wasted spend.",
    metaTitle: "Google Ads Management in Pune",
    metaDescription:
      "Google Ads management in Pune for Search, Shopping, Display and Performance Max: keyword research, ad copy, daily bids, landing pages and monthly reporting.",
    answerBlock: {
      question: "How much does Google Ads management cost?",
      answer:
        "Agencies usually charge for Google Ads management either as a monthly fee or as a percentage of ad spend. Marketix Studio quotes on the scope of the account after a free audit. Your ad spend is paid directly to Google from your own account, separately from the management fee.",
      keyFacts: [
        "Management fees and ad spend are separate",
        "Ad spend is paid directly to Google",
        "Typical management scope covers Search, Shopping, Display and Performance Max",
        "Negative keywords stop spend on searches that will never convert",
      ],
    },
    problem: {
      title: "Most Google Ads accounts quietly waste a third of their budget.",
      body: "Broad match without negatives, Performance Max swallowing brand traffic, conversion actions counting the same lead three times: these are the defaults, and the defaults favour Google's revenue rather than yours.",
      points: [
        "Broad match keywords matching to irrelevant searches",
        "Performance Max cannibalising cheap branded clicks",
        "Duplicate or phantom conversions inflating reported performance",
        "Landing pages that load slowly and drag down Quality Score",
      ],
    },
    included: [
      "Full account audit and restructure",
      "Keyword research and negative keyword architecture",
      "Ad copy writing and responsive search ad testing",
      "Shopping feed optimisation for eCommerce",
      "Performance Max asset groups and brand exclusions",
      "Conversion tracking and offline conversion import",
      "Weekly search term review and bid management",
    ],
    steps: [
      { title: "Audit", body: "We score the account on structure, match types, negatives, tracking accuracy and landing page speed." },
      { title: "Rebuild", body: "Campaigns restructured around intent tiers with clean conversion actions." },
      { title: "Test", body: "Ad copy, extensions and landing pages tested in a defined sequence." },
      { title: "Scale", body: "Budget moved into the keyword clusters proving profitable at your target CPA." },
    ],
    tools: ["Google Ads", "Google Merchant Center", "GA4", "Google Tag Manager", "Looker Studio", "Semrush"],
    faqs: [
      { q: "How much does Google Ads cost per month in India?", a: "Google Ads has no minimum spend. You set a daily budget and, for Search ads, pay when someone clicks, so the monthly cost is what you choose to spend. Click prices vary widely: niche local searches can be inexpensive, while competitive categories such as real estate, loans or education cost much more. Agency management is a separate fee." },
      { q: "Is Google Ads worth it for a small business?", a: "Yes, when people already search for what you sell. Google Ads puts you in front of them at the moment they are looking, and you pay only when they click. It stops being worth it when tracking is missing, when the landing page does not convert, or when a small budget is spread across too many keywords to learn anything." },
      { q: "How long do Google Ads take to work?", a: "Most ads are reviewed within one business day and can show straight after. Automated bidding then needs a learning period of around one to two weeks, and results take longer to judge fairly, so we assess a new account over its first month or two rather than its first few days." },
      { q: "Google Ads vs Meta ads: which is better?", a: "They do different jobs. Google Ads reaches people who are actively searching, so enquiries tend to be higher intent. Meta ads reach people before they search, which suits creating demand, visual products and lower-cost lead forms. Many businesses, especially in real estate and eCommerce, do best running both with shared tracking." },
      { q: "Google Ads vs SEO: which should I choose?", a: "Google Ads buys visibility immediately and stops when the budget stops. SEO takes months to build but keeps bringing visitors without a cost per click. If you need enquiries this month, start with Google Ads; if you plan to be in the market for years, build SEO alongside it and use ad data to see which searches are worth ranking for." },
      { q: "Can you work in our existing Google Ads account?", a: "Yes, wherever possible. Keeping the account preserves its conversion history, which Google's bidding algorithms rely on. We only recommend a fresh account when the existing one carries a policy strike or irreparable structural damage." },
    ],
  },

  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads",
    eyebrow: "Services",
    subtitle:
      "Facebook and Instagram advertising where fresh creative, not endless audience tinkering, is the lever we pull.",
    metaTitle: "Meta Ads Agency for Facebook and Instagram",
    metaDescription:
      "Meta ads agency for Facebook and Instagram: creative testing, Conversions API tracking and ad management focused on a profitable cost per acquisition.",
    answerBlock: {
      question: "Are Facebook and Instagram ads worth it?",
      answer:
        "Yes, for most businesses that sell to consumers or need leads, as long as the creative keeps changing. Since Meta's targeting moved to broad, machine-learned audiences, creative is the main variable an advertiser still controls. Accounts that ship a steady volume of distinct creative angles each month tend to outperform those that keep refining audiences, because the algorithm needs varied material to find pockets of demand.",
      keyFacts: [
        "Creative volume and variety now outweigh manual audience targeting",
        "Conversions API recovers events lost to iOS opt-outs and ad blockers",
        "Broad targeting usually beats narrow interest stacking at scale",
        "New creative needs enough conversions before its results can be trusted",
      ],
    },
    problem: {
      title: "Running the same three creatives until they die is not a strategy.",
      body: "Meta's auction rewards fresh, distinct creative. Accounts often stall because they treat creative as a quarterly project and audience settings as a weekly hobby, which is exactly backwards.",
      points: [
        "Creative fatigue driving cost per result up every fortnight",
        "iOS opt-outs hiding conversions from the pixel",
        "Over-segmented ad sets splitting the budget below learning thresholds",
        "No systematic process for producing new creative angles",
      ],
    },
    included: [
      "Account structure and campaign consolidation",
      "Creative strategy with a monthly testing roadmap",
      "Static, carousel and short-form video production",
      "UGC and creator sourcing where the offer suits it",
      "Conversions API and server-side event setup",
      "Catalogue and dynamic product ads for eCommerce",
      "Retargeting and exclusion architecture",
    ],
    steps: [
      { title: "Research", body: "Offer analysis, competitor ad library teardown and message-market fit mapping." },
      { title: "Produce", body: "We build the first batch of creative across distinct angles, not colour variations." },
      { title: "Test", body: "Structured testing at the ad level with enough budget to exit the learning phase." },
      { title: "Scale", body: "Winners moved into scaling campaigns, with fresh angles queued behind them." },
    ],
    tools: ["Meta Ads Manager", "Meta Conversions API", "Meta Commerce Manager", "Triple Whale", "Figma", "CapCut"],
    faqs: [
      { q: "How much do Facebook ads cost in India?", a: "Meta lets you set any daily or lifetime budget, so you control the total. What each result costs depends on your audience, competition, the time of year and, above all, the creative. Rather than quoting a typical figure, we start from what a lead or sale is worth to you and work back to a budget that can reach that cost per result." },
      { q: "Are Facebook ads worth it for a small business?", a: "Usually, if you sell to consumers or need leads and can keep producing fresh creative. Meta is strong for visual products, local services and instant lead forms. It is weaker for things people only buy when they search, where Google Ads tends to convert better." },
      { q: "What is the difference between boosting a post and running Facebook ads?", a: "Boosting promotes one existing post with a few simple settings. Ads Manager gives full control: the campaign objective, conversion tracking, audiences, placements, creative testing and lead forms. Boosts are fine for extra reach; for enquiries or sales, campaigns built in Ads Manager are almost always more efficient." },
      { q: "Facebook ads vs Instagram ads: which is better?", a: "Both run from the same Meta Ads Manager, and one campaign can show on both. Instagram suits younger audiences and visual, lifestyle products; Facebook still reaches a broader and older audience in India. We normally let Meta's placement optimisation decide, and separate them only when results show a clear difference." },
      { q: "How long do Facebook ads take to work?", a: "Most ads are reviewed within 24 hours. Each ad set then goes through a learning phase until it records about 50 optimisation events within a week, and results are less stable until it exits. We judge creative once it has had enough spend to leave learning, not after the first day." },
      { q: "Why did my Facebook ad results drop after iOS 14?", a: "Most of that drop was measurement, not performance. Conversions genuinely happened but the browser pixel could not see them. Server-side tracking through the Conversions API recovers many of the apparently missing events." },
    ],
  },

  "seo-services": {
    slug: "seo-services",
    title: "SEO Services",
    eyebrow: "Services",
    subtitle:
      "Technical fixes, content that deserves to rank, and the authority that makes Google and AI assistants trust your brand.",
    metaTitle: "SEO Services in Pune That Bring Customers",
    metaDescription:
      "SEO services in Pune: technical audits, on-page optimisation, content strategy, link acquisition and AI search visibility for brands in India and abroad.",
    answerBlock: {
      question: "How long does SEO take to show results?",
      answer:
        "SEO timelines depend on the competition. Technical fixes are usually the quickest to show movement, content builds traffic over several months, and competitive commercial keywords take the longest to reach page one.",
      keyFacts: [
        "Technical and on-page fixes deliver the fastest measurable wins",
        "Content programmes take months, not weeks, to show traffic gains",
        "Authority building through digital PR is the slowest but most durable lever",
        "AI search visibility now depends on clear, extractable answer formatting",
      ],
    },
    problem: {
      title: "Publishing more blog posts is not an SEO strategy.",
      body: "Many sites have a technical problem, a thin-content problem and an authority problem, and try to solve all three by writing another long article nobody searches for.",
      points: [
        "Pages competing against each other for the same keyword",
        "Slow Core Web Vitals suppressing rankings on mobile",
        "Content written for word count rather than search intent",
        "No structured data, so no rich results and no AI citations",
      ],
    },
    included: [
      "Technical SEO audit and remediation roadmap",
      "Keyword research mapped to search intent and funnel stage",
      "On-page optimisation and internal linking architecture",
      "Content briefs and production",
      "Schema markup and rich result implementation",
      "Digital PR and ethical link acquisition",
      "AI search and answer engine optimisation",
      "Monthly ranking, traffic and conversion reporting",
    ],
    steps: [
      { title: "Audit", body: "Crawl, index coverage, Core Web Vitals, backlink profile and content gap analysis." },
      { title: "Fix", body: "Technical debt cleared first, because content on a broken site cannot rank." },
      { title: "Build", body: "Content produced against briefs tied to real search demand and commercial value." },
      { title: "Earn", body: "Digital PR and partnerships to build the authority that makes rankings stick." },
    ],
    tools: ["Semrush", "Ahrefs", "Google Search Console", "Screaming Frog", "GA4", "Schema.org"],
    faqs: [
      { q: "How much does SEO cost per month in India?", a: "SEO is usually charged as a monthly retainer, and the price depends on the size of the site, how competitive your searches are, and how much content and technical work is needed. A local business needs far less than an eCommerce store competing nationally. We quote after an audit, based on what it will take to rank for the searches that bring you customers." },
      { q: "SEO vs Google Ads: which is better?", a: "Neither is better in general. Google Ads brings traffic from the day it starts and stops when you stop paying. SEO is slower to build but compounds: pages that rank keep bringing visitors without a cost per click. Most businesses use ads for immediate enquiries and build SEO for the long term, using ad data to pick the keywords worth ranking for." },
      { q: "What is the difference between SEO, AEO and GEO?", a: "SEO (search engine optimisation) is about ranking in Google's results. AEO (answer engine optimisation) is about being the answer shown in featured snippets, AI Overviews and voice search. GEO (generative engine optimisation) is about being cited by AI assistants such as ChatGPT, Perplexity and Gemini. All three rest on the same foundation: clear, factual pages that answer real questions on a trustworthy, well-structured site." },
      { q: "Is SEO worth it for a small business?", a: "Yes, especially for local searches. People searching for a service near them are close to buying, and ranking on Google and Google Maps brings those enquiries without paying per click. It is worth it when you plan to be in business for years, because results build over months rather than days." },
      { q: "What does an SEO agency do every month?", a: "Technical fixes so Google can crawl and understand the site, improvements to existing pages, new pages for searches you should rank for, earning links and mentions from relevant sites, and reporting on rankings, traffic and the enquiries it produced. The mix shifts month to month depending on what is holding the site back." },
      { q: "Do you guarantee first page rankings?", a: "No, and you should be wary of anyone who does. Nobody controls Google's ranking systems. What we commit to is a documented workload, transparent reporting and measurable movement on the keywords we agree at kickoff." },
    ],
  },

  "local-seo-gmb": {
    slug: "local-seo-gmb",
    title: "Local SEO & Google Business",
    eyebrow: "Services",
    subtitle:
      "Own the map pack in the areas you actually serve, and turn 'near me' searches into people walking through your door.",
    metaTitle: "Local SEO Services & Google Business Profile Management",
    metaDescription:
      "Local SEO and Google Business Profile optimisation to rank in the map pack, earn more reviews and drive calls, direction requests and store visits.",
    answerBlock: {
      question: "How do I rank higher on Google Maps?",
      answer:
        "Google ranks local results on relevance, distance and prominence. In practice that means a fully completed Google Business Profile with the right primary category, consistent name, address and phone details across directories, a steady flow of recent reviews, and location-relevant pages on your website.",
      keyFacts: [
        "Primary category selection is the single highest-impact profile setting",
        "NAP details must match exactly across every citation source",
        "Review recency and response rate both feed local prominence",
        "Google Posts and product listings increase profile engagement signals",
      ],
    },
    problem: {
      title: "You rank fine on Google, and nowhere on Google Maps.",
      body: "The map pack is a separate ranking system with its own signals. A strong website does not automatically win it, and most local businesses have never touched the settings that actually matter.",
      points: [
        "Wrong or too-broad primary business category",
        "Inconsistent address and phone details across directories",
        "Few recent reviews, and no process for requesting them",
        "No location-specific pages for the areas you serve",
      ],
    },
    included: [
      "Google Business Profile audit and full optimisation",
      "Category, service and attribute configuration",
      "Citation building and NAP consistency cleanup",
      "Review generation system and response templates",
      "Google Posts and product listing management",
      "Location landing pages on your website",
      "Local schema markup",
      "Map pack ranking tracking by area",
    ],
    steps: [
      { title: "Claim & clean", body: "Verify the profile, fix categories and correct NAP data everywhere it appears." },
      { title: "Build authority", body: "Citations, local links and location pages that establish genuine area relevance." },
      { title: "Generate reviews", body: "A repeatable request flow so new reviews arrive every week, not every quarter." },
      { title: "Track by area", body: "Grid-based rank tracking showing exactly where you win and lose by neighbourhood." },
    ],
    tools: ["Google Business Profile", "Local Falcon", "BrightLocal", "Semrush Local", "Google Search Console"],
    faqs: [
      { q: "Is Google Business Profile free?", a: "Yes. Creating, verifying and managing a Google Business Profile is free, and there is no charge to appear on Google Maps. What businesses pay for is help: setting it up properly, optimising it, managing reviews and posts, or running Google Ads, which are separate from the free profile." },
      { q: "How long does Google Business Profile verification take?", a: "It depends on the method Google offers. Video verification is usually reviewed within a few business days; postcard verification takes longer because the code arrives by post. Google sometimes asks for extra evidence, such as signage or business documents, which adds time." },
      { q: "How long does it take to rank on Google Maps?", a: "A newly verified profile can appear on Maps within days, but reaching the top three results for competitive searches usually takes months of steady reviews, accurate details and relevant website pages. Distance matters too: you rank best for searches made near your address." },
      { q: "Is Google Business Profile worth it?", a: "For any business that serves customers locally, yes. It is free, it appears on Google Search and Maps when people search for what you offer nearby, and it lets customers call, message or get directions in one tap. For many local businesses it brings more calls than the website does." },
      { q: "Google Business Profile vs website: do I need both?", a: "Yes. The profile wins the local search and the quick call; the website answers the detailed questions that make a customer choose you, and it is one of the signals Google uses to rank the profile. A profile linked to a clear website with location pages usually ranks better than either on its own." },
      { q: "Can you help us get more Google reviews?", a: "Yes, and it is one of the highest-leverage things we do. We build an AI-assisted review flow that helps a happy customer articulate their experience in seconds, then hands them straight to your Google review form. It stays within Google's rules: the customer reads, edits and submits their own words." },
    ],
  },

  "content-marketing": {
    slug: "content-marketing",
    title: "Content Marketing",
    eyebrow: "Services",
    subtitle:
      "Content built against real search demand and written to be cited by Google, by AI assistants and by your own sales team.",
    metaTitle: "Content Marketing Agency in Pune",
    metaDescription:
      "Content marketing agency in Pune: strategy, SEO content production and thought leadership that earns organic rankings and AI citations.",
    answerBlock: {
      question: "What does a content marketing agency actually do?",
      answer:
        "A content marketing agency identifies what your buyers search for, maps that demand to funnel stages, then produces and distributes content against it. The work spans keyword and audience research, editorial planning, writing and design, on-page optimisation, and measuring which pieces influence pipeline.",
      keyFacts: [
        "Strategy begins with search demand and buyer questions, not publishing volume",
        "Every piece is mapped to a funnel stage and a commercial outcome",
        "Distribution matters as much as production",
        "Performance is measured on assisted conversions, not page views",
      ],
    },
    problem: {
      title: "A blog nobody reads is a cost centre with a CMS.",
      body: "Publishing without a demand model produces archives full of posts that rank for nothing and convert nobody, while the questions your buyers genuinely ask go unanswered.",
      points: [
        "Topics chosen by internal opinion rather than search data",
        "No mapping between content and buying stage",
        "Content published and then never updated or promoted",
        "No measurement linking content to pipeline",
      ],
    },
    included: [
      "Content strategy and editorial calendar",
      "Keyword and buyer question research",
      "Long-form article and landing page copywriting",
      "Case study and sales collateral production",
      "Content refresh programme for decaying pages",
      "Internal linking and topic cluster architecture",
      "Distribution across email, social and newsletters",
      "Performance reporting tied to assisted conversions",
    ],
    steps: [
      { title: "Map demand", body: "Keyword research, competitor gap analysis and interviews with your sales team." },
      { title: "Plan clusters", body: "Topic clusters built around commercial pillars, not isolated blog posts." },
      { title: "Produce", body: "Briefed, written, edited and optimised, with expert input where it matters." },
      { title: "Refresh", body: "Existing pages updated on a schedule, which usually outperforms writing new ones." },
    ],
    tools: ["Semrush", "Ahrefs", "Google Search Console", "Surfer SEO", "Notion", "Figma"],
    faqs: [
      { q: "Does content marketing still work?", a: "Yes, but the bar is higher. Generic articles written to fill a calendar no longer rank or get cited by AI assistants. Content that answers the specific questions your buyers search, with real expertise and examples, still brings steady traffic and enquiries, and it keeps working long after it is published." },
      { q: "How much does content marketing cost in India?", a: "It depends on how much you publish and in what form: a blog post, an in-depth guide, a case study and a video all cost differently. The better way to set a budget is to start from the searches and questions you need to win, then plan how many pieces that takes. We scope content after auditing what you already rank for." },
      { q: "Content marketing vs social media marketing: what is the difference?", a: "Content marketing builds assets people find when they search: guides, articles, case studies and videos that rank and get cited. Social media marketing reaches people in their feeds, where a post is seen for a day or two. They work best together, with social used to distribute and test ideas that content turns into lasting pages." },
      { q: "What type of content generates the most leads?", a: "Pages that answer buying questions: cost explainers, comparisons, case studies and how-to guides for the problems your service solves. They attract people close to a decision, unlike broad awareness articles, and give your sales team a page to send prospects." },
      { q: "Will AI-written content hurt our rankings?", a: "Google's position is that it judges quality and usefulness, not the production method. In practice, unedited AI output performs badly because it is generic and unverifiable. We use AI for research and structure, then write and fact-check with humans." },
      { q: "How do you measure content performance?", a: "Organic sessions and rankings are the leading indicators. The metrics that matter commercially are assisted conversions, pipeline influenced and sales-cycle impact, which we track through GA4 and your CRM." },
    ],
  },

  "web-design-development": {
    slug: "web-design-development",
    title: "Web Design & Development",
    eyebrow: "Services",
    subtitle:
      "Fast, accessible, search-ready websites built on modern frameworks rather than a pile of page-builder plugins.",
    metaTitle: "Web Design in Pune: Websites That Convert",
    metaDescription:
      "Web design in Pune and website development in Next.js, WordPress and Shopify: fast, accessible, SEO-ready sites built to turn visits into enquiries.",
    answerBlock: {
      question: "What makes a website good for SEO and conversion?",
      answer:
        "A high-performing site loads its main content in under two and a half seconds, works properly on mobile, uses a clean semantic heading structure, and gives each page one obvious next action. Technical foundations such as crawlable markup, structured data, accessible contrast and labels decide whether search engines and assistants can use the site at all.",
      keyFacts: [
        "Largest Contentful Paint under 2.5 seconds is the Core Web Vitals threshold",
        "Most Indian visitors browse on phones, so mobile is the primary design target",
        "Semantic HTML and structured data drive both rankings and AI citations",
        "One primary call to action per page beats several competing ones",
      ],
    },
    problem: {
      title: "Your website is the only asset you fully own. Most look like rentals.",
      body: "Page builders stack plugin on plugin until a homepage ships megabytes of code to a phone on a patchy 4G connection. Visitors leave before they ever see your offer.",
      points: [
        "Pages taking over five seconds to load on mobile",
        "Plugin bloat creating security and maintenance risk",
        "No structured data, so no rich results",
        "Design that looks acceptable but converts poorly",
      ],
    },
    included: [
      "UX research, sitemap and wireframes",
      "Custom visual design in Figma",
      "Development in Next.js, WordPress or Shopify",
      "Mobile-first responsive build",
      "Core Web Vitals performance optimisation",
      "On-page SEO and schema markup",
      "Analytics, tag manager and conversion tracking",
      "CMS training and post-launch support",
    ],
    steps: [
      { title: "Discover", body: "Goals, audience, competitor review and a content inventory of what exists today." },
      { title: "Design", body: "Wireframes then high-fidelity design, reviewed on real devices before a line of code." },
      { title: "Build", body: "Component-driven development with accessibility and performance budgets enforced." },
      { title: "Launch", body: "Redirect mapping, analytics verification, Search Console submission and a monitored rollout." },
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "WordPress", "Shopify", "Figma", "Vercel"],
    faqs: [
      { q: "How much does website design cost in India?", a: "It depends on what the site has to do. A few-page brochure site, a lead-generation site with landing pages and an eCommerce store with integrations are very different builds. Cost is driven by the number of page templates, custom design, content writing, integrations such as a CRM or payments, and ongoing maintenance. We quote once the scope is clear, so you pay for what the business needs." },
      { q: "How long does it take to build a website?", a: "It depends on the number of pages, custom features and how quickly content is ready. We agree a timeline in writing before work starts." },
      { q: "Website design vs website development: what is the difference?", a: "Design decides how the site looks and works for the visitor: layout, content structure, visuals and the path to an enquiry. Development builds it: code, speed, forms, integrations, hosting and the SEO foundations. A site needs both done well; a good-looking design on slow or badly built code still loses visitors and rankings." },
      { q: "Should we use WordPress or Next.js?", a: "WordPress suits teams who publish frequently and want familiar editing. Next.js suits brands where speed, custom interaction and scale matter more, and it is what we recommend for competitive SEO. We will give you a straight recommendation based on who maintains the site day to day." },
      { q: "Will a website redesign affect our SEO rankings?", a: "Yes, with proper migration planning. Every existing URL gets a 301 redirect to its new equivalent, metadata is carried across deliberately, and we watch Search Console closely after launch so any drop is caught and fixed early." },
      { q: "Do you provide hosting and maintenance?", a: "We deploy to Vercel or your preferred host and offer an optional monthly maintenance plan covering updates, backups, security monitoring and small content changes." },
    ],
  },

  "landing-pages-funnels": {
    slug: "landing-pages-funnels",
    title: "Landing Pages & Funnels",
    eyebrow: "Services",
    subtitle:
      "Campaign pages built around a single conversion, tested continuously and never left to go stale.",
    metaTitle: "Landing Page Design in Pune for Paid Ads",
    metaDescription:
      "Landing page design in Pune and sales funnel builds for paid campaigns: built fast, tested continuously and measured against cost per lead.",
    answerBlock: {
      question: "What is a good landing page conversion rate?",
      answer:
        "A good conversion rate depends on the offer, the traffic and how closely the page matches the ad. Rather than chase an industry average, measure your own cost per qualified lead and improve it test by test.",
      keyFacts: [
        "Message match between ad and page is the single biggest conversion factor",
        "Removing site navigation from a campaign page keeps visitors focused on one action",
        "Each additional form field reduces completion rate",
        "Fast mobile load times are a prerequisite",
      ],
    },
    problem: {
      title: "Sending paid traffic to your homepage wastes most of the budget.",
      body: "A homepage serves ten audiences at once. A visitor arriving from a specific ad with a specific intent needs the page to continue that conversation, not restart it.",
      points: [
        "Ad promises one thing, the page talks about something else",
        "Too many competing calls to action on a single screen",
        "Forms asking for information nobody needs at this stage",
        "No thank-you page, so conversion tracking never fires properly",
      ],
    },
    included: [
      "Conversion-focused copywriting",
      "Custom page design matched to the campaign creative",
      "Fast, mobile-first development",
      "Form design with validation and spam protection",
      "Thank-you page and conversion event configuration",
      "CRM and WhatsApp lead routing",
      "A/B testing setup and iteration",
      "Heatmap and session recording analysis",
    ],
    steps: [
      { title: "Define the one action", body: "We agree the single conversion this page exists to produce." },
      { title: "Write then design", body: "Copy is written first so the layout serves the argument rather than the other way round." },
      { title: "Build and wire", body: "Page, form, tracking and CRM routing shipped and verified end to end." },
      { title: "Test", body: "Headline, offer and form variants tested against live traffic." },
    ],
    tools: ["Next.js", "Figma", "Google Optimize alternatives", "Hotjar", "Zapier", "GA4"],
    faqs: [
      { q: "Landing page vs website: what is the difference?", a: "A website serves every visitor with many pages and links. A landing page is built for one campaign and one action, such as an enquiry or a booking, with nothing pulling people away. Sending ad traffic to a focused landing page instead of the homepage usually lowers the cost per lead, because every visitor sees the offer that brought them there." },
      { q: "How much does a landing page cost?", a: "It depends on whether you need copywriting, design, development, form and CRM integration, and ongoing testing. One page for one campaign is a smaller job than a set of pages per location or product with A/B tests. We quote per scope, and landing pages are often included when we run the ads." },
      { q: "How long should a landing page be?", a: "As long as the decision needs. A free consultation or simple offer can convert on a short page with one form. A high-value purchase, such as property or a premium service, needs more proof: details, pricing context, testimonials and answers to objections. The rule is one goal per page, not a word count." },
      { q: "How many landing pages should I have?", a: "One for each distinct offer, audience or ad group that needs a different message. A developer with three projects needs at least three; a clinic advertising two treatments needs two. Pages that repeat exactly what the visitor searched for usually convert better than one page trying to serve everyone." },
      { q: "How fast can you build a landing page?", a: "A single campaign page is quick once the copy and creative direction are approved. Multi-step funnels with conditional logic take longer. We agree the timeline before we start." },
      { q: "Can you integrate with our CRM?", a: "Yes. Forms can send leads straight into common CRMs, or into others through webhooks or Zapier. Instant WhatsApp or email alerts help your team reply quickly, which matters a lot for conversion." },
    ],
  },

  "branding-design": {
    slug: "branding-design",
    title: "Branding & Design",
    eyebrow: "Services",
    subtitle:
      "Identity, messaging and design systems that make a small team look like a category leader and stay consistent as you grow.",
    metaTitle: "Branding Agency in Pune",
    metaDescription:
      "Branding agency in Pune for growing brands: brand identity, positioning, messaging, logo, visual identity, brand guidelines and marketing collateral.",
    answerBlock: {
      question: "What is included in a brand identity project?",
      answer:
        "A brand identity project typically covers positioning and messaging, a logo and its variations, a colour and typography system, imagery direction, and a guidelines document. The deliverable that matters most is the system itself: rules that let anyone in the business produce on-brand material without a designer present.",
      keyFacts: [
        "Positioning and messaging are defined before any visual work begins",
        "A usable identity includes responsive logo variants for every context",
        "Colour systems must meet WCAG contrast requirements to be practical",
        "Guidelines exist so non-designers can stay consistent",
      ],
    },
    problem: {
      title: "Inconsistent branding makes good businesses look unreliable.",
      body: "When every deck, ad and invoice uses a different shade of the same colour, buyers read it as carelessness, and carelessness is expensive when you are asking for a large purchase.",
      points: [
        "No single source of truth for logo, colour or type",
        "Ads that look unrelated to the website they lead to",
        "Messaging that changes depending on who is writing",
        "Design bottlenecked on one person for every small asset",
      ],
    },
    included: [
      "Brand positioning and messaging framework",
      "Logo design with responsive variants",
      "Colour system with verified accessibility contrast",
      "Typography scale and hierarchy",
      "Iconography and illustration direction",
      "Photography and art direction guidelines",
      "Brand guidelines document",
      "Template kit for social, decks and documents",
    ],
    steps: [
      { title: "Position", body: "Audience, competitive set, differentiation and the message architecture." },
      { title: "Explore", body: "Two or three distinct visual directions, not twenty variations of one idea." },
      { title: "Systemise", body: "The chosen direction built out into a complete, documented system." },
      { title: "Equip", body: "Templates and training so your team can produce on-brand work without us." },
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva (team templates)"],
    faqs: [
      { q: "How much does branding cost for a small business in India?", a: "It depends on the scope: a logo alone, a full visual identity with colours, typography and guidelines, or a complete brand with positioning, naming and messaging. Each step adds strategy and design work. We scope it after a conversation about where the business is going, because a brand has to last years, not just the launch." },
      { q: "Branding vs marketing: what is the difference?", a: "Branding defines who you are: positioning, name, visual identity, voice and promise. Marketing is how you take that to customers: ads, content, social media and sales. Good branding makes every rupee of marketing work harder, because people recognise and trust you faster." },
      { q: "Should a new business do branding or performance marketing first?", a: "Get the basics of the brand right first: a clear name, positioning, logo and a consistent look. They need not be expensive, but ads built on a confusing or inconsistent brand convert worse. Then use performance marketing to grow, and invest further in the brand as you learn what customers respond to." },
      { q: "How long does a branding project take?", a: "A focused identity project is shorter than a full rebrand with positioning research, naming and rollout. We agree the scope and timeline before work starts." },
      { q: "Can you refresh our brand without starting over?", a: "Often that is the better call. A refresh keeps recognition while fixing the practical problems: contrast, legibility at small sizes, missing variants and inconsistent use." },
      { q: "Do we get the source files?", a: "Yes. You receive full ownership of all source files, fonts licensing guidance and the editable design system. There is no dependency on us to make future changes." },
    ],
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    eyebrow: "Services",
    subtitle:
      "Organic social that builds the demand your paid campaigns later harvest: planned, produced and published consistently.",
    metaTitle: "Social Media Marketing Agency in Pune",
    metaDescription:
      "Social media marketing agency in Pune: management, content production and community growth on Instagram, LinkedIn, Facebook and YouTube.",
    answerBlock: {
      question: "Is social media marketing worth it for a business?",
      answer:
        "It is, if you judge it on the right things. Organic social rarely drives direct sales at volume, but it does three measurable things: it lowers paid acquisition costs by warming audiences, it provides social proof buyers check before purchasing, and it supplies a continuous stream of creative that can be tested as paid ads.",
      keyFacts: [
        "Short-form video reaches furthest organically across every major platform",
        "LinkedIn favours personal profiles over company pages for reach",
        "Consistency of posting matters more than posting frequency",
        "Top-performing organic posts make reliable candidates for paid promotion",
      ],
    },
    problem: {
      title: "Posting daily to an audience that never converts is busywork.",
      body: "Social only pays off when it is tied to a commercial objective. Most accounts post because the calendar says to, with no view of whether any of it influences revenue.",
      points: [
        "Content calendar driven by trends rather than the business",
        "No consistent visual or verbal identity across posts",
        "Comments and DMs going unanswered for days",
        "No connection between social activity and the sales pipeline",
      ],
    },
    included: [
      "Social strategy and channel selection",
      "Monthly content calendar",
      "Static, carousel and short-form video production",
      "Copywriting and platform-native captions",
      "Scheduling and publishing",
      "Community management and response handling",
      "Influencer and creator coordination",
      "Monthly performance reporting",
    ],
    steps: [
      { title: "Choose channels", body: "We pick the two or three platforms where your buyers actually spend time." },
      { title: "Define pillars", body: "Content themes tied to business objectives rather than to trending audio." },
      { title: "Produce and publish", body: "Batch production, scheduled publishing, consistent visual identity." },
      { title: "Amplify", body: "Top organic performers promoted as paid, closing the loop with media." },
    ],
    tools: ["Meta Business Suite", "LinkedIn", "Buffer", "Figma", "CapCut", "Canva"],
    faqs: [
      { q: "How much does social media marketing cost in India?", a: "It depends on the platforms, how many posts and videos a month, whether shoots are needed, and whether community management and paid promotion are included. Content production is usually the largest part. We scope it after agreeing what social needs to achieve for the business, so you are not paying for a posting calendar with no goal." },
      { q: "Social media marketing vs performance marketing: what is the difference?", a: "Social media marketing covers the content you post and the community you build on your own pages. Performance marketing is paid advertising judged on leads and sales, often on the same platforms. Organic content builds trust and supplies creative; paid campaigns turn that into measurable enquiries." },
      { q: "Which social media platform is best for business?", a: "Two done properly beats five done occasionally. For B2B that is usually LinkedIn plus YouTube. For D2C and local businesses it is Instagram plus WhatsApp. We recommend based on where your buyers are, not where the reach numbers look biggest." },
      { q: "How long does social media marketing take to work?", a: "Paid social can bring enquiries within days. Organic growth is slower: expect a few months of consistent posting before reach and engagement build, and longer before it shows clearly in enquiries. Consistency matters more than volume." },
      { q: "How do you measure social media ROI?", a: "Reach and engagement are process metrics. The ones we report against are profile-to-website traffic, assisted conversions in GA4, direct message enquiries, and the measured effect on paid campaign costs." },
      { q: "Do you handle the video shoots?", a: "We handle editing, motion graphics and short-form cutdowns. Full production shoots with a crew are scoped separately, and raw footage shot on a phone to a clear brief often works well." },
    ],
  },

  "email-marketing-automation": {
    slug: "email-marketing-automation",
    title: "Email Marketing & Automation",
    eyebrow: "Services",
    subtitle:
      "Lifecycle flows that earn more from the audience you already paid to acquire.",
    metaTitle: "Email Marketing Agency in Pune",
    metaDescription:
      "Email marketing agency in Pune: lifecycle automation and CRM flows that recover abandoned carts, nurture leads and raise customer lifetime value.",
    answerBlock: {
      question: "What email automations should every business have?",
      answer:
        "Four flows cover most of the value: a welcome sequence for new subscribers, an abandoned cart or abandoned enquiry recovery series, a post-purchase sequence that drives reviews and repeat orders, and a win-back campaign for lapsed customers. For most eCommerce brands these four do most of the work.",
      keyFacts: [
        "Automated flows keep working without a new campaign every week",
        "Abandoned cart recovery is usually the highest-return single flow",
        "List segmentation consistently outperforms broadcast sending",
        "Deliverability depends on SPF, DKIM and DMARC being configured correctly",
      ],
    },
    problem: {
      title: "You paid to acquire that email address. Then you never used it.",
      body: "Most businesses send an occasional newsletter and call it email marketing, leaving the automated sequences that actually produce revenue completely unbuilt.",
      points: [
        "No welcome, cart recovery or win-back sequences running",
        "Every subscriber receiving identical messaging",
        "Emails landing in Promotions or Spam due to unconfigured authentication",
        "No tracking of which emails influence revenue",
      ],
    },
    included: [
      "Email strategy and lifecycle mapping",
      "Welcome, nurture, cart recovery and win-back flows",
      "Campaign design and copywriting",
      "List segmentation and scoring",
      "SPF, DKIM and DMARC deliverability setup",
      "A/B testing on subject lines and send timing",
      "CRM integration and lead scoring",
      "Revenue attribution reporting",
    ],
    steps: [
      { title: "Audit", body: "Deliverability, list health, existing flows and revenue attribution reviewed." },
      { title: "Map lifecycle", body: "We chart every customer stage and identify where a message is missing." },
      { title: "Build flows", body: "Core automations written, designed and launched in priority order." },
      { title: "Optimise", body: "Subject lines, timing and segmentation tested continuously." },
    ],
    tools: ["Klaviyo", "Mailchimp", "HubSpot", "Zoho Campaigns", "Brevo", "Customer.io"],
    faqs: [
      { q: "Does email marketing still work?", a: "Yes. It is one of the few channels you own outright: no algorithm decides whether your subscribers see a message. It works best for businesses with repeat purchases or long decisions, such as eCommerce, education and B2B, where automated emails follow up at the right moment instead of relying on manual sends." },
      { q: "How much does email marketing cost?", a: "There are two parts: the email platform, which usually charges by the number of contacts or emails sent, and the work of writing, designing and automating the emails. Several platforms have free tiers for small lists. The bigger cost is usually setting up the automations, which then keep running without extra effort." },
      { q: "Which email marketing platform is best?", a: "Klaviyo for eCommerce because of its revenue attribution and Shopify integration. HubSpot or Zoho for B2B where email needs to sit inside a CRM. Brevo where budget is the primary constraint." },
      { q: "Email marketing vs WhatsApp marketing: which is better in India?", a: "WhatsApp messages are usually read faster and more often in India, which makes WhatsApp better for reminders, time-sensitive updates and quick replies. Email is cheaper per message, carries longer content and suits newsletters, receipts and nurture sequences. Most businesses benefit from both, each used for what it does best." },
      { q: "Why do our emails land in spam?", a: "Usually missing or misconfigured authentication: SPF, DKIM and DMARC records. Beyond that, sending to old unengaged addresses damages sender reputation. Both are fixable, usually within a few weeks." },
      { q: "How often should we email our list?", a: "For eCommerce, two to four campaigns a month alongside always-on automated flows. For B2B, a genuinely useful monthly or fortnightly send. The correct frequency is the highest one at which engagement holds steady." },
    ],
  },

  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    eyebrow: "Services",
    subtitle:
      "The app your customers already use, run properly on the official Business API rather than a personal number.",
    metaTitle: "WhatsApp Marketing Agency in India",
    metaDescription:
      "WhatsApp marketing agency for Indian and international brands: WhatsApp Business API setup, broadcast campaigns, chatbot flows and CRM integration.",
    answerBlock: {
      question: "How does WhatsApp marketing work for businesses?",
      answer:
        "Businesses use the WhatsApp Business API to send template messages that Meta has pre-approved, to contacts who have opted in. Common uses are order updates, appointment reminders, abandoned cart recovery and promotional broadcasts. Meta charges for messages, and because people read WhatsApp constantly, messages tend to be seen quickly.",
      keyFacts: [
        "Official API requires a verified Meta Business account and opt-in consent",
        "Promotional templates must be approved by Meta before sending",
        "Meta sets and changes the pricing, which varies by country and message type",
        "Opt-in consent must be recorded before you message anyone",
      ],
    },
    problem: {
      title: "Your customers live on WhatsApp. Your marketing does not.",
      body: "Businesses broadcasting from a personal number get blocked, banned and throttled. The official API exists to avoid that.",
      points: [
        "Personal numbers getting banned for bulk sending",
        "No opt-in record, creating genuine compliance exposure",
        "Enquiries arriving on WhatsApp but never reaching the CRM",
        "No automated responses, so leads wait hours for a reply",
      ],
    },
    included: [
      "WhatsApp Business API setup and Meta verification",
      "Green tick business verification application",
      "Message template design and approval submission",
      "Broadcast campaign planning and execution",
      "Chatbot and auto-reply flow design",
      "CRM integration and lead capture",
      "Opt-in collection and compliance documentation",
      "Conversation analytics and reporting",
    ],
    steps: [
      { title: "Set up", body: "Business verification, API provisioning and number migration handled end to end." },
      { title: "Build templates", body: "Message templates written and submitted for Meta approval." },
      { title: "Automate", body: "Chatbot flows for FAQs, qualification and routing to a human." },
      { title: "Broadcast", body: "Segmented campaigns to opted-in contacts, measured on conversation outcomes." },
    ],
    tools: ["WhatsApp Business API", "Meta Business Manager", "Interakt", "WATI", "Zoho CRM"],
    faqs: [
      { q: "How much does the WhatsApp Business API cost in India?", a: "Meta charges per template message delivered, and the rate depends on the category: marketing messages cost the most, utility and authentication messages less, and replies inside the 24-hour customer service window are free. Rates are published per country on Meta's pricing page and change from time to time. Most businesses use a provider (a BSP) that adds its own platform fee." },
      { q: "What is the difference between WhatsApp marketing and utility messages?", a: "Meta classifies every template message. Utility messages relate to something the customer already did, such as an order update, appointment reminder or payment confirmation. Marketing messages promote something: offers, launches or re-engagement. Marketing messages cost more and face stricter limits, so classifying templates correctly affects both cost and delivery." },
      { q: "WhatsApp Business app vs WhatsApp Business API: which do I need?", a: "The free WhatsApp Business app suits a small business replying from one or a few phones. The API is for businesses that need several team members on one number, automated replies and chatbots, broadcasts at scale, CRM integration or detailed tracking of enquiries from ads. The app is free; the API has per-message charges." },
      { q: "Does WhatsApp marketing work?", a: "It works when people have opted in and the messages are useful to them. Messages get read because WhatsApp is where people already talk, but that also means spammy broadcasts get blocked and reported quickly, which can restrict your number. The best results come from fast replies to enquiries, reminders, and offers sent to customers who asked for them." },
      { q: "Is WhatsApp marketing legal in India?", a: "Yes, when you use the official Business API and message only contacts who have opted in. Bulk messaging from a personal number breaches WhatsApp's terms and generally results in a ban." },
      { q: "How do I get the verified badge on WhatsApp Business?", a: "WhatsApp now shows a blue verified badge in place of the old green tick. A business can get it through Meta Verified, a paid subscription with identity checks, or as an official business account, which Meta grants on notability and does not guarantee. We prepare the application and the supporting brand evidence." },
    ],
  },

  "conversion-rate-optimisation": {
    slug: "conversion-rate-optimisation",
    title: "Conversion Rate Optimisation",
    eyebrow: "Services",
    subtitle:
      "Earn more revenue from the traffic you already pay for.",
    metaTitle: "Conversion Rate Optimisation Agency (CRO)",
    metaDescription:
      "Conversion rate optimisation agency: analytics audits, user research, A/B testing and funnel optimisation to raise revenue from the traffic you already have.",
    answerBlock: {
      question: "What is conversion rate optimisation?",
      answer:
        "Conversion rate optimisation is the practice of increasing the share of visitors who complete a desired action, using research and controlled experiments rather than opinion. It combines quantitative analytics, qualitative user research and A/B testing to find and remove the specific friction losing you revenue.",
      keyFacts: [
        "Improving conversion rate raises the return on every existing traffic source",
        "Reliable A/B test results need enough conversions per variant",
        "Most gains come from clarity and trust, not button colours",
        "Mobile and desktop usually need to be optimised separately",
      ],
    },
    problem: {
      title: "Doubling traffic is expensive. Doubling conversion rate is not.",
      body: "Most businesses respond to flat revenue by buying more traffic, which raises costs proportionally. Fixing the funnel raises the return on every channel at once.",
      points: [
        "Checkout or enquiry forms abandoned at high rates",
        "No analytics instrumentation to show where users drop off",
        "Changes made on opinion, with no measurement of the effect",
        "Mobile experience noticeably worse than desktop",
      ],
    },
    included: [
      "Analytics audit and event tracking implementation",
      "Funnel and drop-off analysis",
      "Heatmaps, scroll maps and session recordings",
      "User testing and on-site survey research",
      "Hypothesis backlog prioritised by expected impact",
      "A/B and multivariate test design and build",
      "Checkout and form optimisation",
      "Monthly experiment reporting",
    ],
    steps: [
      { title: "Instrument", body: "Analytics fixed first, because you cannot optimise what you are not measuring correctly." },
      { title: "Research", body: "Quantitative drop-off data combined with qualitative evidence of why." },
      { title: "Prioritise", body: "Hypotheses ranked by expected impact against implementation effort." },
      { title: "Test", body: "Controlled experiments run to significance, with losers documented as carefully as winners." },
    ],
    tools: ["GA4", "Hotjar", "Microsoft Clarity", "VWO", "Google Tag Manager", "Looker Studio"],
    faqs: [
      { q: "What is a good website conversion rate?", a: "There is no single good number. It depends on the industry, the price of what you sell, the traffic source and what counts as a conversion: a free enquiry converts far more often than an expensive purchase. The useful benchmark is your own, measured by page and channel, then improved one test at a time." },
      { q: "How do I increase my website's conversion rate?", a: "Start where visitors drop off. Common fixes are a headline that matches the ad or search, fewer form fields, faster pages on mobile, reviews and case studies near the call to action, and a quicker way to get in touch, such as WhatsApp or click to call. Change one thing at a time so you know what worked." },
      { q: "How much do CRO services cost?", a: "It depends on your traffic, the number of pages and funnels in scope, and whether research, design and development of the changes are included. We quote after an analytics audit, which also shows whether you have enough traffic for testing to be worthwhile." },
      { q: "How much traffic do we need for CRO?", a: "A/B testing needs enough traffic and conversions to give a trustworthy result. With less traffic we still improve things through analysis, user research and proven fixes, we just cannot prove each change on its own." },
      { q: "How long does a test need to run?", a: "At least two full business cycles, so weekday and weekend behaviour are both counted. Stopping a test early because it looks like it is winning is the most common way teams fool themselves." },
      { q: "Do you implement the changes or just recommend them?", a: "We implement. Recommendations that sit in a slide deck do not earn anything. Our team builds and ships the variants, and hands over the winners as production code." },
    ],
  },
};

export const serviceList = Object.values(services);
export const serviceSlugs = Object.keys(services);
