import Image, { type StaticImageData } from "next/image";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import {
  LEGAL_LAST_UPDATED,
  LEGAL_INTRO,
  LEGAL_SECTIONS,
} from "../../data/legal-content";
import { LegalIndex } from "./legal-index";

type LegalDocumentProps = {
  title: string;
  headerImage: StaticImageData;
};

const Paragraphs = ({ items }: { items?: string[] }) =>
  items?.map((text) => (
    <Text key={text} variant="bodyRegular" tone="secondary" className="mt-2">
      {text}
    </Text>
  ));

export const LegalDocument = ({ title, headerImage }: LegalDocumentProps) => {
  return (
    <GeneralSpacer>
      <Container className="mt-10">
        <Image
          src={headerImage}
          alt=""
          priority
          className="h-auto w-full rounded-2xl"
        />
      </Container>

      <Container className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
        <LegalIndex sections={LEGAL_SECTIONS} />

        <Container>
          <Text as="h1" variant="h1" tone="primary">
            {title}
          </Text>
          <Text variant="body-lg" tone="primary" className="mt-12 font-semibold">
            Last Updated: {LEGAL_LAST_UPDATED}
          </Text>
          <Container className="mt-4">
            <Paragraphs items={LEGAL_INTRO} />
          </Container>

          {LEGAL_SECTIONS.filter(
            (section) => section.paragraphs || section.subsections,
          ).map((section) => (
            <Container
              key={section.id}
              id={section.id}
              className="mt-16 scroll-mt-28"
            >
              <Text as="h2" variant="h5" tone="primary">
                {section.title}
              </Text>
              <Paragraphs items={section.paragraphs} />

              {section.subsections?.map((sub, index) => (
                <Container key={sub.title ?? index} className="mt-6">
                  {sub.title && (
                    <Text as="h3" variant="bodyRegular" tone="primary">
                      {sub.title}
                    </Text>
                  )}
                  <Paragraphs items={sub.paragraphs} />
                  {sub.list && (
                    <ul className="mt-2 list-disc space-y-2 pl-6 marker:text-secondary">
                      {sub.list.map((item) => (
                        <li key={item}>
                          <Text as="span" variant="bodyRegular" tone="secondary">
                            {item}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Paragraphs items={sub.after} />
                </Container>
              ))}
            </Container>
          ))}
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
