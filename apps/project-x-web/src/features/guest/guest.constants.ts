export const PLACEHOLDER_IMAGE = "/guest/property-placeholder.png";

// The coverage API's mapKey -> the map SVG's ISO 3166-2 id.
// Temporary: remove once the API returns isoCode itself.
export const MAP_KEY_TO_ISO: Record<string, string> = {
  ABIA: "NG-AB",
  ADAMAWA: "NG-AD",
  AKWA_IBOM: "NG-AK",
  ANAMBRA: "NG-AN",
  BAUCHI: "NG-BA",
  BAYELSA: "NG-BY",
  BENUE: "NG-BE",
  BORNO: "NG-BO",
  CROSS_RIVER: "NG-CR",
  DELTA: "NG-DE",
  EBONYI: "NG-EB",
  EDO: "NG-ED",
  EKITI: "NG-EK",
  ENUGU: "NG-EN",
  FEDERAL_CAPITAL_TERRITORY: "NG-FC",
  GOMBE: "NG-GO",
  IMO: "NG-IM",
  JIGAWA: "NG-JI",
  KADUNA: "NG-KD",
  KANO: "NG-KN",
  KATSINA: "NG-KT",
  KEBBI: "NG-KE",
  KOGI: "NG-KO",
  KWARA: "NG-KW",
  LAGOS: "NG-LA",
  NASSARAWA: "NG-NA",
  NIGER: "NG-NI",
  OGUN: "NG-OG",
  ONDO: "NG-ON",
  OSUN: "NG-OS",
  OYO: "NG-OY",
  PLATEAU: "NG-PL",
  RIVERS: "NG-RI",
  SOKOTO: "NG-SO",
  TARABA: "NG-TA",
  YOBE: "NG-YO",
  ZAMFARA: "NG-ZA",
};

export const HERO_PINS = [
  { top: "36%", left: "56%" },
  { top: "56%", left: "26%" },
  { top: "74%", left: "13%" },
  { top: "28%", left: "87%" },
  { top: "62%", left: "88%" },
  { top: "50%", left: "70%" },
];

export const HOW_IT_WORKS_CARDS = [
  {
    key: "renter",
    tag: "Renter",
    title: "Find a home that fits your needs.",
    description:
      "Explore properties across Nigeria with the information you need to make better decisions. Compare options, save your favourites and connect directly with owners and agents.",
    image: "/guest/how-it-works-1.jpg",
    href: "/register",
    tagClassName: "bg-s300",
    accentClassName: "text-s500",
    gradientColor: "#DD7373",
  },
  {
    key: "lister",
    tag: "Property Lister",
    title: "List your property the right way.",
    description:
      "Showcase your property with complete information, reach interested house seekers and build trust through verified information and reviews.",
    image: "/guest/how-it-works-2.jpg",
    href: "/register",
    tagClassName: "bg-p300",
    accentClassName: "text-p300",
    gradientColor: "#3B3561",
  },
];

export const OPERATE_CARDS = {
  left: [
    {
      key: "states",
      icon: "/guest/operate-images/flag.png",
      title: "Multiple States",
      description:
        "We're expanding across different states, bringing more properties closer to you.",
    },
    {
      key: "cities",
      icon: "/guest/operate-images/location-pin.png",
      title: "More Cities",
      description:
        "Discover homes in growing cities and communities across Nigeria.",
    },
  ],
  right: [
    {
      key: "properties",
      icon: "/guest/operate-images/house.png",
      title: "More Properties",
      description:
        "New homes and listings are being added regularly as we grow.",
    },
    {
      key: "locations",
      icon: "/guest/operate-images/rocket.png",
      title: "Coming to more locations",
      description:
        "We're continuously expanding to make finding a home easier, wherever you are.",
    },
  ],
};

export const FAQ_ITEMS = [
  {
    id: "find-property",
    title: "How do I find a property?",
    answer:
      "Search by location, property type, budget, and other preferences to discover properties that match what you're looking for.",
  },
  {
    id: "both-roles",
    title: "Can I use the platform as both a renter and a property lister?",
    answer:
      "Yes. You can switch between renter and property lister from your profile without creating a new account.",
  },
  {
    id: "contact-owner",
    title: "Can I contact a property owner or agent directly?",
    answer:
      "Yes. Once you find a property you like, you can message the owner or agent directly from the listing.",
  },
  {
    id: "agent-listing",
    title: "Can I list a property if I'm an agent?",
    answer:
      "Yes. Agents can list properties by choosing \"I am an agent\" when they start a new listing.",
  },
  {
    id: "verified",
    title: "Are properties verified?",
    answer:
      "Every listing is reviewed before it is published, and verified listers carry a verified badge on their listings.",
  },
  {
    id: "list-property",
    title: "How do I list my property?",
    answer:
      "Create an account, choose to list a property, and complete the step-by-step form with your property details, photos and pricing. Your listing goes live once it has been reviewed.",
  },
  {
    id: "listing-cost",
    title: "How much does it cost to list a property?",
    answer:
      "Listing costs depend on your plan. Visit our pricing page for the latest details.",
  },
];
