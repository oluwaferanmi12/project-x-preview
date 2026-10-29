import { FBIcon, InstagramIcon, TTIcon, XIcon } from "@repo/icons";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import { ContactForm } from "./contact-form";

export const ContactBanner = () => {
  return (
    <GeneralSpacer>
      <Container className="relative">
        <Container className="contact-us !h-[650px] lg:!h-auto lg:min-h-[80vh] rounded-2xl flex lg:items-center px-5 pt-24 lg:pt-0 lg:px-16">
          <Container className="lg:w-1/2 w-full">
            <Text variant="body-sm" tone="inverted">
              Have a question? Let&apos;s talk.
            </Text>
            <Container className="lg:w-4/5 w-full">
              <Text variant="h1" tone="inverted" className="mt-4">
                Whatever you need help with. Send us a message.
              </Text>
            </Container>
            <Text variant="body-sm" tone="inverted" className="mt-10">
              Connect with us.
            </Text>
            <Container className="mt-4 flex items-center gap-6">
              <InstagramIcon size={20} className="text-inverted" />
              <FBIcon size={20} className="text-inverted" />
              <TTIcon size={20} className="text-inverted" />
              <XIcon size={20} className="text-inverted" />
            </Container>
          </Container>
        </Container>
        <Container className="relative z-10 -mt-48 px-4 lg:absolute lg:right-16 lg:top-1/2 lg:mt-0 lg:w-[40%] lg:-translate-y-1/2 lg:px-0">
          <Container className="rounded-3xl shadow-lg">
            <ContactForm />
          </Container>
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
