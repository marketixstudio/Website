import {
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  ShoppingBag,
  Sofa,
  Car,
  Clock,
  Target,
  TrendingDown,
  Users,
  Wallet,
  Search,
  PhoneOff,
  ImageOff,
} from "lucide-react";
import type { IndustryContent, OverviewContent } from "@/lib/content-types";

export const industriesOverview: OverviewContent = {
  eyebrow: "Industries",
  title: "Marketing shaped around how your",
  highlight: "customers decide",
  subtitle:
    "A flat buyer, a SaaS trial and a first online order follow different paths. We plan campaigns around the way your customer actually decides.",
  metaTitle: "Industries We Serve | Marketing by Sector",
  metaDescription:
    "Performance marketing for real estate, eCommerce, SaaS, healthcare, education, hospitality, interiors and automotive brands in India and abroad.",
  cardsTitle: "Sectors we work in",
  cards: [
    { label: "Real Estate", href: "/industries/real-estate", body: "Site visits and inventory movement, not just form fills.", icon: Building2 },
    { label: "eCommerce & D2C", href: "/industries/ecommerce-d2c", body: "Profitable ROAS and repeat purchase revenue.", icon: ShoppingBag },
    { label: "SaaS & Startups", href: "/industries/saas-startups", body: "Demos, trials and efficient pipeline growth.", icon: Rocket },
    { label: "Healthcare", href: "/industries/healthcare", body: "Patient acquisition within advertising compliance rules.", icon: HeartPulse },
    { label: "Education", href: "/industries/education", body: "Admissions and enrolments through the intake cycle.", icon: GraduationCap },
    { label: "Hospitality", href: "/industries/hospitality", body: "Direct bookings that escape OTA commission.", icon: Hotel },
    { label: "Interior & Architecture", href: "/industries/interior-architecture", body: "High-ticket enquiries from serious buyers.", icon: Sofa },
    { label: "Automotive", href: "/industries/automotive", body: "Showroom footfall and service bookings.", icon: Car },
  ],
  intro: {
    title: "An apartment and a skincare set do not share a funnel.",
    body:
      "Buying cycles, objections, compliance rules and the definition of a good lead all change by sector. We start from the commercial model: what a customer is worth, how long they take to decide and who else is involved, then build the campaign backwards from there.",
    points: [
      "Lead definitions agreed against your actual sales process",
      "Creative that speaks to sector-specific objections",
      "Compliance handled where the category demands it",
    ],
  },
  faqs: [
    { q: "What if our industry is not listed?", a: "We can help any business with a measurable sales process and a customer worth more than the cost of acquiring them. Tell us how you sell and we will say honestly whether we are the right fit." },
    { q: "Can we see work from our industry?", a: "Our published case studies are on the Case Studies page. We add a new one only when the client has approved the numbers being shared." },
  ],
};

export const industries: Record<string, IndustryContent> = {
  "real-estate": {
    slug: "real-estate",
    title: "Real Estate Marketing",
    eyebrow: "Industries",
    subtitle:
      "Campaigns measured in site visits and bookings, because a real estate lead that never visits the property is worth nothing.",
    metaTitle: "Real Estate Marketing Agency in Pune",
    metaDescription:
      "Real estate lead generation for developers, builders and brokers. Campaigns measured on site visits and bookings, not raw form fills.",
    answerBlock: {
      question: "How do developers generate quality real estate leads online?",
      answer:
        "Quality real estate leads come from campaigns that qualify before the form, not after. That means targeting by location and budget intent, stating the price bracket openly in the creative, capturing configuration and timeline on the form, and routing every enquiry to a caller within minutes while intent is still live.",
      keyFacts: [
        "Stating the price bracket in creative sharply reduces unqualified enquiries",
        "Speed to first call is the strongest predictor of site visit conversion",
        "Site visit rate is the meaningful KPI, not cost per lead",
        "RERA registration details must appear in property advertising",
      ],
    },
    challenges: [
      { icon: PhoneOff, title: "Leads that never answer", body: "Portal and broadly targeted social leads convert to site visits at very low rates, burning your sales team's day." },
      { icon: Wallet, title: "Budget mismatch", body: "Enquiries from people nowhere near the ticket size, because the ads never mentioned price." },
      { icon: Clock, title: "Slow follow-up", body: "A lead called hours later has usually cooled off or spoken to another project already." },
      { icon: Users, title: "Broker channel conflict", body: "Digital leads and channel partners competing for the same buyer, with no attribution to settle it." },
    ],
    solution: {
      title: "We optimise for site visits, not form fills.",
      body: "Every campaign is wired so the CRM records what happened after the lead arrived: contacted, qualified, visited, booked. Once that loop is closed, the ad platforms can be pointed at visits rather than volume, and cost per booking starts falling.",
      points: [
        "Price bracket and configuration stated openly in creative",
        "Qualification questions built into the lead form",
        "Instant WhatsApp acknowledgement plus a call task inside 5 minutes",
        "Site visit and booking data fed back into the ad platforms",
        "Separate tracking for digital and channel partner sources",
      ],
    },
    services: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
      { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
    ],
    workflow: [
      { title: "Project positioning", body: "Define the buyer, the price story and the single strongest differentiator of this project." },
      { title: "Qualified capture", body: "Landing pages and forms that filter on budget, configuration and timeline." },
      { title: "Instant routing", body: "WhatsApp confirmation to the buyer, call task to sales, all inside five minutes." },
      { title: "Optimise to visits", body: "Feed visit and booking outcomes back so spend concentrates on sources that show up." },
    ],
    faqs: [
      { q: "What is a realistic cost per site visit?", a: "It varies with the location, price segment and how strong the project is, so any single number would mislead you. We estimate it for your project during the free growth audit. Cost per lead on its own tells you very little." },
      { q: "Do you work with brokers or only developers?", a: "Both. Developers usually need project launch campaigns and inventory movement; brokers need consistent buyer flow and a way to compete against portals. The campaign structure differs meaningfully between the two." },
      { q: "Can you help with RERA compliance in ads?", a: "We ensure RERA registration numbers and required disclosures appear correctly in creative and on landing pages. We are a marketing agency, not a legal advisor, so your legal team should sign off the final disclosure language." },
      { q: "How do you handle NRI buyers?", a: "NRI campaigns are targeted by country with time-zone-aware call scheduling, currency context in the creative, and video walkthroughs plus virtual site visits, since the buyer usually cannot attend in person." },
    ],
  },

  "ecommerce-d2c": {
    slug: "ecommerce-d2c",
    title: "eCommerce & D2C Marketing",
    eyebrow: "Industries",
    subtitle:
      "Profitable growth measured on contribution margin, not the ROAS screenshot your ad account would like you to celebrate.",
    metaTitle: "eCommerce & D2C Marketing Agency",
    metaDescription:
      "Performance marketing for eCommerce and D2C brands. Meta and Google ads, creative testing, email flows and CRO built around profitable unit economics.",
    answerBlock: {
      question: "What is a good ROAS for an eCommerce brand?",
      answer:
        "A good return on ad spend depends entirely on your margin. A brand with 70 percent gross margin can be profitable at 2x ROAS, while one at 30 percent margin needs roughly 4x to break even. The useful benchmark is your break-even ROAS, calculated from gross margin, not an industry average.",
      keyFacts: [
        "Break-even ROAS equals 1 divided by gross margin percentage",
        "Blended ROAS across all channels reflects reality better than platform-reported ROAS",
        "Repeat purchase rate usually determines whether a brand can scale profitably",
        "Contribution margin after shipping and returns is the number that matters",
      ],
    },
    challenges: [
      { icon: TrendingDown, title: "ROAS falls as you scale", body: "Performance that looks excellent on a small budget drops off as spend grows, because the easiest audience runs out." },
      { icon: ImageOff, title: "Creative fatigue", body: "The same three ads running for months while cost per purchase drifts steadily upward." },
      { icon: Wallet, title: "Margin ignored", body: "Platform-reported ROAS looks healthy while shipping, returns and discounts quietly erase the profit." },
      { icon: Users, title: "No repeat revenue", body: "Every sale acquired from scratch because the lifecycle email and WhatsApp flows were never built." },
    ],
    solution: {
      title: "We work from contribution margin backwards.",
      body: "Before touching the ad account we calculate what a customer is genuinely worth after shipping, returns, discounts and payment fees. That sets the true break-even, and every decision after it is made against that number rather than a platform dashboard.",
      points: [
        "Unit economics modelled before any budget decision",
        "Creative produced on a monthly cadence, not a quarterly one",
        "Server-side tracking so reported and actual revenue agree",
        "Email and WhatsApp flows built to drive the second and third order",
        "Blended ROAS and new-customer CAC as the reporting headline",
      ],
    },
    services: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
    ],
    workflow: [
      { title: "Model the economics", body: "Gross margin, shipping, returns and repeat rate turned into a break-even target." },
      { title: "Fix measurement", body: "Server-side events and a clean product feed so the data can be trusted." },
      { title: "Scale creative", body: "A continuous pipeline of new angles feeding the algorithm fresh material." },
      { title: "Own retention", body: "Lifecycle flows that make the second purchase cheaper than the first." },
    ],
    faqs: [
      { q: "Do you work with Shopify?", a: "Yes. We also work with WooCommerce and custom Next.js storefronts, and can plan a move between platforms without losing your search rankings." },
      { q: "What monthly ad budget do we need?", a: "Enough to test several creative angles and give the platforms conversion data to learn from. The right figure depends on your price point and margin, so we work it out with you during the free growth audit." },
      { q: "Can you improve our repeat purchase rate?", a: "Yes, and it is usually where the fastest margin improvement sits. Post-purchase email and WhatsApp flows, replenishment timing and a considered subscription or bundle offer typically move repeat rate more than any ad change." },
      { q: "How do you handle returns in the reporting?", a: "We report net revenue after returns wherever the platform data allows it. A 4x ROAS on a category with 30% returns is really 2.8x, and pretending otherwise leads to scaling something unprofitable." },
    ],
  },

  "saas-startups": {
    slug: "saas-startups",
    title: "SaaS & Startup Marketing",
    eyebrow: "Industries",
    subtitle:
      "Pipeline built for a long sales cycle, where the metric is qualified demos, not trial signups from people who will never pay.",
    metaTitle: "SaaS & Startup Marketing Agency",
    metaDescription:
      "B2B SaaS marketing covering demand generation, paid acquisition, SEO and conversion optimisation measured on qualified pipeline and CAC payback.",
    answerBlock: {
      question: "How should a SaaS company measure marketing performance?",
      answer:
        "SaaS marketing should be measured on customer acquisition cost payback period and the ratio of lifetime value to acquisition cost, not on lead volume. A healthy benchmark is a payback period under twelve months and an LTV to CAC ratio above three, tracked by channel so budget can shift toward what compounds.",
      keyFacts: [
        "CAC payback under 12 months is the common efficiency benchmark",
        "LTV to CAC above 3:1 indicates a sustainable acquisition model",
        "Marketing qualified leads must be defined jointly with sales to mean anything",
        "Self-serve and sales-led motions need entirely separate funnels",
      ],
    },
    challenges: [
      { icon: Target, title: "Signups that never activate", body: "Trial volume looks healthy while activation and conversion to paid stay flat." },
      { icon: Clock, title: "Long, invisible sales cycles", body: "Six months between first touch and closed deal, with no attribution surviving the journey." },
      { icon: Search, title: "Category has no search volume", body: "Nobody searches for a product they do not know exists, so demand has to be created." },
      { icon: Wallet, title: "CAC exceeds payback", body: "Growth that consumes cash faster than the cohort ever returns it." },
    ],
    solution: {
      title: "We build for payback period, not signup count.",
      body: "For a long cycle, the only honest measurement is cohort-based. We instrument the full journey from first touch to closed revenue, then optimise the channels that produce customers who stay, which is often not the channel producing the most leads.",
      points: [
        "MQL definition agreed jointly with your sales team",
        "Full-journey attribution from first touch to closed won",
        "Separate funnels for self-serve and sales-led motions",
        "Content built for problem-aware searchers in categories without direct volume",
        "Reporting by cohort, on payback and LTV to CAC",
      ],
    },
    services: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
    ],
    workflow: [
      { title: "Define qualified", body: "Sales and marketing agree in writing what a real opportunity looks like." },
      { title: "Instrument the journey", body: "First touch through closed won, tracked across CRM and analytics." },
      { title: "Create demand", body: "Problem-led content and paid social for categories with no search volume yet." },
      { title: "Compound", body: "Budget concentrated into the channels with the shortest payback." },
    ],
    faqs: [
      { q: "We are pre-product-market-fit. Should we run paid ads?", a: "Usually not at scale. Paid media amplifies whatever is already there, including a weak offer. Before product-market fit, spend is better used on small experiments that teach you something about the message than on scaling acquisition." },
      { q: "Does SEO work for a brand-new category?", a: "Not for category terms nobody searches yet. It works well for the problem your product solves, which people do search for. You rank against the pain first and introduce the category second." },
      { q: "Should we target India or go international first?", a: "It depends on where your pricing works. Dollar pricing against Indian buyers is a hard sell, while Indian-market pricing rarely funds a US go-to-market. We help model both before committing budget." },
      { q: "Can you work with our in-house growth team?", a: "Yes, and that is often the best arrangement. Typically we own paid acquisition and measurement while your team owns product marketing and lifecycle, with a shared weekly review." },
    ],
  },

  healthcare: {
    slug: "healthcare",
    title: "Healthcare Marketing",
    eyebrow: "Industries",
    subtitle:
      "Patient acquisition that respects advertising policy, medical ethics and the fact that people searching are often frightened.",
    metaTitle: "Healthcare Marketing Agency in India",
    metaDescription:
      "Digital marketing for hospitals, clinics and healthcare brands. Compliant patient acquisition through search, local SEO and reputation management.",
    answerBlock: {
      question: "Can healthcare businesses advertise on Google and Meta?",
      answer:
        "Yes, within strict limits. Both platforms restrict health claims, prohibit implying knowledge of a user's medical condition, and require certification for some categories such as pharmaceuticals and addiction services. Indian advertisers must also comply with the Drugs and Magic Remedies Act and Medical Council advertising rules.",
      keyFacts: [
        "Ads may not imply knowledge of a user's health condition",
        "Personalised advertising for sensitive health categories is restricted",
        "Indian medical advertising is governed by the Drugs and Magic Remedies Act",
        "Local SEO and reviews often outperform paid media for clinics",
      ],
    },
    challenges: [
      { icon: Target, title: "Ad rejections", body: "Campaigns disapproved repeatedly for policy violations nobody explained clearly." },
      { icon: Users, title: "Trust is everything", body: "Patients research extensively and choose on credibility, not on the cleverest advert." },
      { icon: Search, title: "Losing to aggregators", body: "Practo and similar platforms outranking the clinic's own website for its own specialisation." },
      { icon: PhoneOff, title: "Enquiries lost at reception", body: "Marketing generates calls that nobody logs, tracks or follows up." },
    ],
    solution: {
      title: "Compliance first, then acquisition.",
      body: "We write creative that stays inside platform policy and Indian medical advertising law, then build visibility where patients actually decide: local search, reviews and genuinely useful condition content rather than promotional claims.",
      points: [
        "Ad copy reviewed against platform policy before submission",
        "Condition and treatment content written to inform, not to claim outcomes",
        "Google Business Profile and review programme per location",
        "Call tracking so reception enquiries are finally measurable",
        "Doctor profile pages built for credibility and E-E-A-T signals",
      ],
    },
    services: [
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
    ],
    workflow: [
      { title: "Policy review", body: "Audit existing creative and claims against platform and Indian regulatory rules." },
      { title: "Build credibility", body: "Doctor profiles, credentials and condition content that earns trust and rankings." },
      { title: "Own local search", body: "Profile optimisation and a steady review flow for every location." },
      { title: "Close the loop", body: "Call tracking and CRM so marketing is measured on appointments booked." },
    ],
    faqs: [
      { q: "Is it ethical to advertise medical services?", a: "Informing people that a service exists is entirely legitimate. Guaranteeing outcomes, exploiting fear or making comparative superiority claims is not, and in India much of it is also illegal. We write to the former standard." },
      { q: "Why do our health ads keep getting rejected?", a: "Most often because the copy implies the platform knows something about the viewer's condition. Phrasing like 'suffering from back pain?' triggers personalised health advertising policies. Rewriting to describe the service rather than address the condition usually resolves it." },
      { q: "How do we compete with Practo and similar platforms?", a: "You will rarely outrank aggregators on broad category terms, and chasing that is a poor use of budget. You can win on your doctors' names, your specific treatments, your locality and the map pack, and those searches bring higher-intent patients anyway." },
      { q: "Do you handle multi-location hospital groups?", a: "Yes. That means a Google Business Profile and location page per facility, department-level content, and careful internal linking so locations reinforce rather than compete with each other." },
    ],
  },

  education: {
    slug: "education",
    title: "Education Marketing",
    eyebrow: "Industries",
    subtitle:
      "Admissions campaigns built around the intake calendar, because in education, starting late can mean missing an entire cycle.",
    metaTitle: "Education Marketing for Admissions",
    metaDescription:
      "Digital marketing for schools, colleges, edtech and coaching institutes. Admission campaigns, counsellor enablement and enrolment-focused funnels.",
    answerBlock: {
      question: "How do educational institutions generate admission enquiries?",
      answer:
        "Admission enquiries come from campaigns timed to the intake cycle, targeting both the student and the parent who usually funds the decision. The highest-converting formats are campus or curriculum content, alumni outcome proof, and fast counsellor follow-up, since enquiry-to-enrolment depends heavily on how quickly a human makes contact.",
      keyFacts: [
        "Campaigns must run ahead of the intake window, not during it",
        "Parents and students respond to different messages and channels",
        "Alumni placement and outcome data is the strongest conversion asset",
        "Counsellor response speed strongly predicts enrolment rate",
      ],
    },
    challenges: [
      { icon: Clock, title: "Seasonal cliff", body: "Everything depends on a narrow admission window, and a late start cannot be recovered." },
      { icon: Users, title: "Two decision makers", body: "The student chooses aspirationally, the parent pays and asks about outcomes." },
      { icon: Target, title: "Enquiries that never enrol", body: "Large enquiry volumes with a conversion rate that nobody has ever measured properly." },
      { icon: Wallet, title: "Fee sensitivity", body: "Enquiries from families for whom the fee was never going to be possible." },
    ],
    solution: {
      title: "We plan backwards from the enrolment deadline.",
      body: "Awareness runs well before the window opens, consideration content answers what parents actually ask, and conversion campaigns peak exactly when decisions are being made. Counsellors get context on every lead so the first call is useful rather than exploratory.",
      points: [
        "Campaign calendar reverse-engineered from the intake date",
        "Separate creative tracks for students and for parents",
        "Placement, outcome and alumni proof front and centre",
        "Fee range signalled in creative to filter early",
        "Counsellor dashboard with enquiry source and stated intent",
      ],
    },
    services: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
      { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    ],
    workflow: [
      { title: "Map the calendar", body: "Intake dates, competitor timing and the awareness runway set the media plan." },
      { title: "Build proof", body: "Placement data, alumni stories and campus content produced before campaigns launch." },
      { title: "Run dual-track", body: "Aspiration-led creative for students, outcome-led creative for parents." },
      { title: "Enable counsellors", body: "Lead context, WhatsApp templates and follow-up sequences that convert enquiries." },
    ],
    faqs: [
      { q: "When should admission campaigns start?", a: "Awareness should begin three to four months before the intake window and conversion campaigns four to six weeks before the deadline. Starting once admissions open means competing at peak cost with no warm audience." },
      { q: "Should we target students or parents?", a: "Both, with different messages. Students respond to campus life, peer proof and aspiration on Instagram and YouTube. Parents respond to placement records, fee clarity and safety, and are more reachable on Facebook, search and WhatsApp." },
      { q: "How do we reduce unqualified enquiries?", a: "Indicate the fee range in creative, ask for the intended programme and preferred location on the form, and qualify on the first counsellor call. Volume drops, enrolment rate rises, and counsellor time goes further." },
      { q: "Does this work for edtech and online courses?", a: "Yes, though the funnel is shorter and more like D2C. Free workshops, webinars and trial lessons work well as the primary conversion event, with the paid programme sold afterwards." },
    ],
  },

  hospitality: {
    slug: "hospitality",
    title: "Hospitality Marketing",
    eyebrow: "Industries",
    subtitle:
      "Direct bookings that keep the commission OTAs would otherwise take out of your margin.",
    metaTitle: "Hotel & Hospitality Marketing Agency",
    metaDescription:
      "Digital marketing for hotels, resorts, restaurants and travel brands. Direct booking campaigns, local SEO and reputation management.",
    answerBlock: {
      question: "How can hotels increase direct bookings?",
      answer:
        "Hotels increase direct bookings by giving guests a clear reason to skip the OTA, such as a best-rate guarantee, a perk unavailable elsewhere or loyalty benefits, combined with a fast mobile booking engine, metasearch presence on Google Hotel Ads, and branded search campaigns defending against OTA bidding on the hotel's own name.",
      keyFacts: [
        "OTA commission takes a real share of every booking it handles",
        "OTAs bid on hotel brand names, so branded search defence is essential",
        "Google Hotel Ads places direct rates alongside OTA rates",
        "Review scores directly influence both ranking and conversion",
      ],
    },
    challenges: [
      { icon: Wallet, title: "OTA commission drain", body: "Commission paid on bookings that guests would happily have made directly." },
      { icon: Search, title: "OTAs outbidding you on your own name", body: "Guests searching for your hotel land on Booking.com and you pay commission anyway." },
      { icon: Clock, title: "Seasonal swings", body: "Full in season, empty out of it, with no demand generation for the quiet months." },
      { icon: Users, title: "Reviews decide everything", body: "Small changes in your rating change both bookings and the room rate you can charge." },
    ],
    solution: {
      title: "Make direct the obviously better choice.",
      body: "We defend branded search, place your real rate on metasearch, and build a direct offer the OTA legally cannot match. Then we make the booking engine fast enough on mobile that guests actually complete the booking.",
      points: [
        "Branded search campaigns defending against OTA bidding",
        "Google Hotel Ads and metasearch rate parity management",
        "Direct-only perks that OTA rate agreements cannot replicate",
        "Booking engine speed and mobile UX optimisation",
        "Review generation and response programme across platforms",
      ],
    },
    services: [
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Email Marketing & Automation", href: "/services/email-marketing-automation" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
    ],
    workflow: [
      { title: "Audit the leak", body: "Quantify the commission cost and how much of it is genuinely recoverable." },
      { title: "Defend the brand", body: "Branded search and metasearch presence so direct appears wherever you do." },
      { title: "Build the reason", body: "A direct offer with real value that rate parity clauses permit." },
      { title: "Fill the shoulder", body: "Demand generation campaigns aimed at the quiet months, not the full ones." },
    ],
    faqs: [
      { q: "Is bidding on our own brand name worth it?", a: "Almost always, when OTAs are bidding on it too. The clicks are inexpensive and each one converted directly saves a commission far larger than the cost of the click." },
      { q: "How do we handle rate parity agreements?", a: "Rate parity generally restricts the published room rate, not the total value. Room upgrades, late checkout, complimentary breakfast, spa credit and loyalty points are usually permitted, though you should check your specific contract." },
      { q: "Do you work with restaurants as well as hotels?", a: "Yes. Restaurant marketing leans more heavily on local SEO, Google Business Profile, reservation platform visibility and Instagram than on paid search." },
      { q: "How important are reviews for hotels?", a: "Critically important. They influence OTA ranking, Google map pack position, conversion rate and the rate you can command. A systematic review programme is usually the highest-return work available to a hotel." },
    ],
  },

  "interior-architecture": {
    slug: "interior-architecture",
    title: "Interior & Architecture Marketing",
    eyebrow: "Industries",
    subtitle:
      "High-ticket enquiries from people ready to spend, filtered before they reach your design team's calendar.",
    metaTitle: "Marketing for Interior Designers",
    metaDescription:
      "Lead generation for interior design and architecture firms. Portfolio-led campaigns that attract high-budget clients and filter out tyre-kickers.",
    answerBlock: {
      question: "How do interior designers get high-value clients online?",
      answer:
        "High-value design clients come from portfolio-led marketing paired with explicit budget qualification. Showing completed projects at the price level you want to attract, stating a minimum project value in the creative, and asking about scope and timeline on the enquiry form filters out low-budget enquiries before they consume consultation time.",
      keyFacts: [
        "Stating a minimum project budget sharply improves enquiry quality",
        "Completed project photography is the highest-converting asset",
        "Pinterest and Instagram drive discovery; search captures active intent",
        "Consultation time is the real cost of an unqualified enquiry",
      ],
    },
    challenges: [
      { icon: Wallet, title: "Budget mismatch", body: "Hours of consultation spent on clients whose budget was never close to your minimum." },
      { icon: ImageOff, title: "Portfolio not working", body: "Excellent projects photographed badly, or never published anywhere findable." },
      { icon: Clock, title: "Long decision cycles", body: "Six months between first enquiry and signature, with no nurture in between." },
      { icon: Users, title: "Referral dependency", body: "Pipeline entirely dependent on word of mouth, which cannot be scaled or forecast." },
    ],
    solution: {
      title: "Show the work, state the budget, filter early.",
      body: "Design is bought visually and decided slowly. We put your completed work in front of the right audience, state the commercial reality openly, and keep serious prospects warm through a decision cycle measured in months.",
      points: [
        "Project photography and case study production",
        "Minimum project value stated openly in creative",
        "Budget, scope and timeline captured on the enquiry form",
        "Long-cycle nurture through email and WhatsApp",
        "Pinterest and Instagram discovery paired with search capture",
      ],
    },
    services: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Branding & Design", href: "/services/branding-design" },
    ],
    workflow: [
      { title: "Build the portfolio", body: "Professional photography and written case studies for your strongest projects." },
      { title: "Position by budget", body: "Creative and messaging pitched at the client tier you actually want." },
      { title: "Qualify at the form", body: "Scope, budget range and timeline asked before a consultation is offered." },
      { title: "Nurture patiently", body: "Content that keeps you present across a six-month decision." },
    ],
    faqs: [
      { q: "Should we really state our minimum budget in ads?", a: "Yes. It reduces enquiry volume and increases enquiry quality, which is the trade every design firm wants. Consultation hours are your scarcest resource and they should not be spent educating people about your price floor." },
      { q: "Is Pinterest worth the effort?", a: "For residential interiors, often yes. Pinterest users are actively collecting ideas for projects they intend to execute, and pins keep driving traffic for years, unlike most social content." },
      { q: "How important is project photography?", a: "Very. Design is bought visually, so well-shot completed projects make every ad, post and page work harder than phone photos can." },
      { q: "Can you help with commercial as well as residential?", a: "Yes, though the channels differ. Commercial and hospitality projects come through LinkedIn, search and industry publications far more than through Instagram." },
    ],
  },

  automotive: {
    slug: "automotive",
    title: "Automotive Marketing",
    eyebrow: "Industries",
    subtitle:
      "Showroom footfall, test drives and service bookings, measured at the door rather than in the ad dashboard.",
    metaTitle: "Automotive and Dealership Marketing",
    metaDescription:
      "Digital marketing for car dealerships, service centres and auto accessory brands. Test drive campaigns, local SEO and review generation.",
    answerBlock: {
      question: "How do car dealerships generate test drive bookings?",
      answer:
        "Test drive bookings come from campaigns that combine model-specific search capture with local targeting around the showroom, an offer that justifies the visit, and immediate follow-up. Because most buyers research online and purchase in person, the measurable outcome is footfall, which requires tracking what happens after the lead is captured.",
      keyFacts: [
        "Most car buyers research extensively online but purchase in person",
        "Model-specific search terms carry far higher intent than category terms",
        "Service and accessory revenue is usually more predictable than vehicle sales",
        "Review volume strongly influences local dealership selection",
      ],
    },
    challenges: [
      { icon: PhoneOff, title: "Leads that never visit", body: "Enquiry forms filled by people casually browsing, with no intention of coming in." },
      { icon: Users, title: "Competing with OEM campaigns", body: "Manufacturer advertising drives brand demand that a nearby dealer captures instead of you." },
      { icon: Search, title: "Invisible in local search", body: "Ranking nowhere for 'car service near me' in the areas immediately around the showroom." },
      { icon: Wallet, title: "Service revenue untapped", body: "The highest-margin part of the business marketed least, if at all." },
    ],
    solution: {
      title: "Optimise for footfall, and stop ignoring service.",
      body: "Vehicle sales campaigns are built around model-specific intent and local radius targeting with a real reason to visit. Alongside that we build the service and accessories funnel, which is usually more profitable and far more predictable.",
      points: [
        "Model-level search campaigns capturing active buyer intent",
        "Radius targeting around the showroom and its catchment",
        "Test drive offers strong enough to justify the trip",
        "Service reminder automation via WhatsApp and SMS",
        "Review generation to win the local map pack",
      ],
    },
    services: [
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
    ],
    workflow: [
      { title: "Capture model intent", body: "Search campaigns at the model and variant level where buying intent is highest." },
      { title: "Own the catchment", body: "Local SEO and radius targeting across the areas your showroom genuinely serves." },
      { title: "Drive the visit", body: "Test drive offers and instant follow-up that convert an enquiry into footfall." },
      { title: "Monetise service", body: "Reminder automation and accessory campaigns against your existing customer base." },
    ],
    faqs: [
      { q: "How do we track showroom visits from online ads?", a: "Through unique landing page offers redeemed in person, call tracking numbers, and importing visit outcomes from the DMS back into the ad platforms as offline conversions." },
      { q: "Should dealers advertise if the OEM already does?", a: "Yes. Manufacturer campaigns create brand demand but do not decide which dealership captures it. Local campaigns are how you make sure that demand converts at your showroom rather than a competitor's." },
      { q: "Is marketing worth it for service centres?", a: "Often more so than for vehicle sales. Service has better margins, shorter decision cycles and a repeat customer base that responds extremely well to WhatsApp reminder automation." },
      { q: "Do you work with car accessory brands?", a: "Yes. Accessory and customisation businesses sit somewhere between local service marketing and D2C eCommerce, and we run both sides of that." },
    ],
  },
};

export const industryList = Object.values(industries);
export const industrySlugs = Object.keys(industries);
