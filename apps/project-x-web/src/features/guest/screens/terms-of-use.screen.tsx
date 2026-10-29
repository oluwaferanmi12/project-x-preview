import headerImage from "@/assets/svgs/terms-of-use-header.png";
import { LegalDocument } from "../components/legal/legal-document";

export const TermsOfUseScreen = () => {
  return <LegalDocument title="Terms of Use" headerImage={headerImage} />;
};
