export type LegalSubsection = {
  title?: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  subsections?: LegalSubsection[];
};

export const LEGAL_LAST_UPDATED = "16th of September, 2026";

export const LEGAL_INTRO = [
  "At [Platform Name], we respect your privacy and are committed to protecting the personal information you provide when you use our website, mobile applications, products, and services.",
  "This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, when we may share it, and the choices available to you.",
  "By using [Platform Name], you acknowledge that you have read and understood this Privacy Policy.",
];

export const LEGAL_SECTIONS: LegalSection[] = [
  {
    id: "about-us",
    title: "About Us",
    paragraphs: [
      "[Platform Name] is a property discovery and listing platform that connects people looking for homes with property owners and agents.",
      "For the purposes of applicable data protection laws, including the Nigeria Data Protection Act 2023, [Company Legal Name] may act as a data controller in relation to personal information we process.",
      "Company: [Company Legal Name]",
      "Address: [Registered Address]",
      "Email: [Privacy Email]",
      "General Support: [Support Email]",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "We collect information that you provide directly, information generated when you use our services, and information received from certain third parties.",
    ],
    subsections: [
      {
        title: "Account Information",
        paragraphs: ["When you create an account, we may collect:"],
        list: [
          "Full name",
          "Email address",
          "Phone number",
          "Password or authentication information",
          "Profile photo, where provided",
          "Account type or profile preference",
          "Communication preferences",
        ],
        after: [
          "If you maintain both a Renter and Property Lister profile, we may process information associated with each profile.",
        ],
      },
      {
        title: "Renter Information",
        paragraphs: [
          "If you use [Platform Name] to find a property, we may collect information such as:",
        ],
        list: [
          "Preferred location",
          "Property type",
          "Budget",
          "Number of bedrooms or other requirements",
          "Property preferences",
          "Saved properties",
          "Enquiries and conversations",
          "Reviews and ratings",
          "Information you voluntarily provide when contacting a Property Lister",
        ],
        after: [
          "You may choose to skip certain preference questions where the platform provides that option.",
        ],
      },
      {
        title: "Property Lister Information",
        paragraphs: ["If you list a property, we may collect:"],
        list: [
          "Your name and contact details",
          "Whether you are the property owner or an agent",
          "Property details",
          "Property address and location",
          "Rent and applicable fees",
          "Property features and amenities",
          "Property photographs and videos",
          "WhatsApp or other contact information",
          "Ownership or authorisation information",
          "Verification documents where required",
          "Information relating to your listings and listing activity",
        ],
      },
      {
        title: "2.4 Verification Information",
        paragraphs: [
          "To help maintain the integrity of the marketplace, we may request information or documents needed to verify a Property Lister or property.",
          "Depending on the circumstances, this may include government-issued identification, proof of ownership, proof of authority to represent an owner, agency information, or other supporting documentation.",
          "We only request information that is reasonably necessary for the relevant verification purpose.",
        ],
      },
      {
        title: "2.5 Communications",
        paragraphs: [
          "When you communicate with us or other users through features provided by [Platform Name], we may process information contained in those communications, including:",
        ],
        list: [
          "Messages",
          "Enquiries",
          "Support requests",
          "Reports",
          "Feedback",
          "Other information you choose to provide",
        ],
      },
      {
        title: "2.6 Location Information",
        paragraphs: [
          "We may collect or process location information that you provide, such as a property address, area, city, state, landmark, or map location.",
          "Where applicable, we may request device location permission to provide location-based features. You can manage location permissions through your device settings.",
        ],
      },
      {
        title: "2.7 Technical Information",
        paragraphs: [
          "When you use our website or application, we may automatically collect certain technical information, including:",
        ],
        list: [
          "IP address",
          "Device type",
          "Browser type",
          "Operating system",
          "Device identifiers",
          "App version",
          "Language and general settings",
          "Usage information",
          "Pages or features accessed",
          "Error and diagnostic information",
        ],
      },
      {
        title: "2.8 Cookies and Similar Technologies",
        paragraphs: [
          "We may use cookies and similar technologies to operate our website, remember preferences, understand usage, improve performance, and support certain features.",
          "Where required, we will provide appropriate choices regarding non-essential cookies.",
          "You can also manage cookies through your browser settings.",
        ],
      },
    ],
  },
  { id: "how-we-use-your-information", title: "How We Use Your Information" },
  {
    id: "information-shared-with-other-users",
    title: "Information Shared With Other Users",
  },
  { id: "when-we-share-information", title: "When We Share Information" },
  { id: "third-party-services", title: "Third-Party Services" },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
  },
  {
    id: "how-we-protect-your-information",
    title: "How We Protect Your Information",
  },
  { id: "data-retention", title: "Data Retention" },
];
