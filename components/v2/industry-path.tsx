import { PathExplorer, type PathStep } from "@/components/v2/path-explorer";

/**
 * Industry "buyer's path" container (just below the hero): the path a customer in that sector
 * takes from first sight to the result, what we do at each stage, and the kind of searches they
 * type. Written from the buyer's side so a business owner recognises their own customer. Plain
 * behaviour, no numbers. The interactive part lives in PathExplorer.
 */
type Path = { who: string; steps: PathStep[]; searches: string[] };

const paths: Record<string, Path> = {
  "real-estate": {
    who: "home buyer",
    steps: [
      { buyer: "Sees your project ad with the price bracket", we: "Ads that state price, configuration and location up front, so the wrong buyers scroll past." },
      { buyer: "Fills a short form: budget, configuration, timeline", we: "Qualification questions built into the form, so sales sees intent before the first call." },
      { buyer: "Gets a WhatsApp reply and a call within minutes", we: "Instant WhatsApp acknowledgement and a call task for your team, set up and tested." },
      { buyer: "Visits the site with the family", we: "Site visits tracked against the ad and the form that produced them." },
      { buyer: "Books the home", we: "Bookings fed back to the ad platforms, so spend moves to what actually sells." },
    ],
    searches: ["2 BHK flats in Baner", "new projects in Hinjewadi", "3 BHK under 1.5 crore Pune"],
  },
  "ecommerce-d2c": {
    who: "shopper",
    steps: [
      { buyer: "Stops on a product reel or a Google Shopping ad", we: "Product creative and Shopping feeds built around the products that earn margin." },
      { buyer: "Lands on the product page and reads the reviews", we: "Product pages that answer the questions buyers ask before they pay." },
      { buyer: "Leaves the cart, then gets a reminder", we: "Abandoned cart emails and WhatsApp reminders that bring them back." },
      { buyer: "Comes back and places the order", we: "Checkout friction removed and every order tracked to its source." },
      { buyer: "Orders again when it runs out", we: "Repeat-purchase flows timed to how long the product lasts." },
    ],
    searches: ["healthy snacks online", "natural skincare India", "gift hampers delivery Pune"],
  },
  "saas-startups": {
    who: "software buyer",
    steps: [
      { buyer: "Searches for a tool to fix a problem", we: "SEO and search ads on the problem-led searches your buyers type." },
      { buyer: "Reads a comparison or a how-to article", we: "Comparison and use-case pages that make the case honestly." },
      { buyer: "Starts a trial or books a demo", we: "Sign-up and demo pages built around one clear action." },
      { buyer: "Gets onboarding emails that show the value", we: "Onboarding sequences that lead new users to the moment the product clicks." },
      { buyer: "Becomes a paying customer", we: "Paid conversions tracked back to the channel and the campaign." },
    ],
    searches: ["best CRM for small business", "invoicing software India", "alternative to a tool they use"],
  },
  healthcare: {
    who: "patient",
    steps: [
      { buyer: "Searches for a doctor or clinic nearby", we: "Google Business Profile and local SEO so you show up in the map pack." },
      { buyer: "Checks your reviews on Google Maps", we: "A simple review page that helps happy patients leave a review." },
      { buyer: "Calls, or books an appointment online", we: "Call and booking tracking, with ads that follow medical advertising rules." },
      { buyer: "Gets a reminder before the visit", we: "Appointment reminders by WhatsApp or SMS to cut no-shows." },
      { buyer: "Comes back, and recommends you", we: "Follow-up messages that keep patients in touch with your clinic." },
    ],
    searches: ["dentist near me", "skin clinic in Kothrud", "physiotherapist in Baner"],
  },
  education: {
    who: "student and parent",
    steps: [
      { buyer: "Starts searching courses before the intake", we: "Campaigns timed to the intake calendar, not spread evenly across the year." },
      { buyer: "Downloads the brochure", we: "Brochure and course pages that capture the enquiry with the right details." },
      { buyer: "Gets a call from a counsellor", we: "Leads routed to counsellors fast, with the course they asked about." },
      { buyer: "Visits the campus or joins a webinar", we: "Visit and webinar invitations with reminders that get people to turn up." },
      { buyer: "Enrols before the deadline", we: "Enrolments tracked back to the campaign that produced them." },
    ],
    searches: ["MBA colleges in Pune", "best BBA college Pune", "digital marketing course Pune"],
  },
  hospitality: {
    who: "guest",
    steps: [
      { buyer: "Sees your photos on Instagram", we: "Social content and ads that show the experience, not just the room." },
      { buyer: "Checks prices and reviews on Google", we: "Google Business Profile, reviews and hotel ads kept up to date." },
      { buyer: "Books direct on your website", we: "A booking path on your own site that is faster than the travel apps." },
      { buyer: "Gets a WhatsApp confirmation", we: "Instant confirmations and pre-arrival messages set up for you." },
      { buyer: "Returns, and books direct again", we: "Repeat-guest offers sent direct, so the next booking pays no commission." },
    ],
    searches: ["resort near Pune for the weekend", "hotel in Lonavala with pool", "cafe in Koregaon Park"],
  },
  "interior-architecture": {
    who: "homeowner",
    steps: [
      { buyer: "Saves design ideas on Instagram", we: "A portfolio-led Instagram presence and ads that reach people planning a home." },
      { buyer: "Looks through your past projects", we: "Project pages that show the space, the budget range and the style." },
      { buyer: "Sends an enquiry with the space and budget", we: "Enquiry forms that ask for the space, budget and timeline up front." },
      { buyer: "Books a consultation", we: "Fast follow-up that turns a good enquiry into a booked consultation." },
      { buyer: "Signs the project", we: "Signed projects tracked back to the campaign that found them." },
    ],
    searches: ["interior designer in Pune", "modular kitchen design", "2 BHK interior cost"],
  },
  automotive: {
    who: "car owner",
    steps: [
      { buyer: "Searches for accessories or service nearby", we: "Local SEO and search ads for the products and services you sell." },
      { buyer: "Checks your reviews on Google Maps", we: "A review page that turns happy customers into Google reviews in seconds." },
      { buyer: "Calls or sends a WhatsApp message", we: "Click-to-call and WhatsApp buttons tracked as enquiries." },
      { buyer: "Visits the showroom or workshop", we: "Store visits and calls measured against each campaign." },
      { buyer: "Leaves a review afterwards", we: "A timely review request after the job, so the next customer trusts you." },
    ],
    searches: ["car accessories near me", "seat covers in Pune", "car service centre Wakad"],
  },
};


export function IndustryPath({ slug, sector, outcome }: { slug: string; sector: string; outcome: string }) {
  const path = paths[slug];
  if (!path) return null;
  return <PathExplorer who={path.who} sector={sector} outcome={outcome} steps={path.steps} searches={path.searches} />;
}
