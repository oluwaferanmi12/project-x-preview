import { Accordion, Container, GeneralSpacer, Text } from "@repo/ui";
import { AddIcon, Close, FaqLeftShape, FaqRightShape } from "@repo/icons";
import { FAQ_ITEMS } from "../../guest.constants";
import { SectionTag } from "../section-tag";

const sections = FAQ_ITEMS.map((item) => ({
  id: item.id,
  title: item.title,
  content: (
    <Text variant="body-sm" tone="secondary" className="pb-5">
      {item.answer}
    </Text>
  ),
}));

export const Faq = () => {
  return (
    // Full-bleed wrapper so the decorative shapes can bleed off the screen edges.
    <Container className="relative ml-[calc(50%-50vw)] w-screen overflow-hidden py-16 md:py-24">
      <Container
        aria-hidden="true"
        className="absolute -left-[53px] top-[32%] hidden text-s300 opacity-50 md:block"
      >
        <FaqLeftShape />
      </Container>
      <Container
        aria-hidden="true"
        className="absolute -right-[53px] top-[14%] hidden text-p300 opacity-50 md:block"
      >
        <FaqRightShape />
      </Container>
      <GeneralSpacer>
        <Container className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Container className="flex flex-col">
            <SectionTag label="Frequently Asked Questions" />
            <Container className="mt-4 max-w-[340px]">
              <Text variant="h2" tone="primary">
                Answers to your possible questions
              </Text>
            </Container>
            <Container className="mt-6 flex items-center gap-2">
              <Text variant="body-sm" tone="primary">
                Couldn&apos;t find something?
              </Text>
              <Text as="span" variant="action-label" tone="s500">
                Contact us
              </Text>
            </Container>
          </Container>
          <Accordion
            sections={sections}
            defaultOpen={FAQ_ITEMS[0]?.id}
            className="flex flex-col"
            sectionClassName="border-b border-line"
            headerClassName="py-5"
            titleClassName="text-body-sm font-bold text-primary"
            contentClassName="pr-10"
            showContentDivider={false}
            openIcon={<Close size={14} className="text-s300" />}
            closedIcon={<AddIcon size={14} className="text-s300" />}
          />
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
