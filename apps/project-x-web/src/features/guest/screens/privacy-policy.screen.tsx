import headerImage from "@/assets/svgs/privacy-policy-header.png";
import { LegalDocument } from "../components/legal/legal-document";

export const PrivacyPolicyScreen = () => {
  return <LegalDocument title="Privacy Policy" headerImage={headerImage} />;
};
