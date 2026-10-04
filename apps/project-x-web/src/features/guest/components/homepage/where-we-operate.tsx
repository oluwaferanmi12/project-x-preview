import { Container, GeneralSpacer, Text } from "@repo/ui";
import Image from "next/image";
import { OPERATE_CARDS } from "../../guest.constants";
import { SectionTag } from "../section-tag";
import { OperateCard } from "./operate-card";

export const WhereWeOperate = () => {
  return (
    // Full-bleed dark band that breaks out of the page's centred column.
    <Container className="ml-[calc(50%-50vw)] w-screen bg-[#121212] py-16 md:py-24">
      <GeneralSpacer>
        <Container className="flex flex-col items-center">
          <SectionTag label="Where we operate" tone="dark" />
          <Container className="mb-12 mt-4 w-full text-center md:w-[45%]">
            <Text variant="h2" className="text-center text-white">
              We are available nationwide, with properties listed in various
              cities
            </Text>
          </Container>
          <Container className="grid w-full grid-cols-1 gap-4 md:h-[460px] md:grid-cols-[1fr_1.1fr_1fr]">
            <Container className="flex flex-col gap-4">
              {OPERATE_CARDS.left.map((card) => (
                <OperateCard
                  key={card.key}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Container>
            <Container className="relative order-first min-h-[360px] overflow-hidden rounded-3xl md:order-none">
              <Image
                src="/guest/operate-images/human-image.jpg"
                alt="Happy renter relaxing at home"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
            </Container>
            <Container className="flex flex-col gap-4">
              {OPERATE_CARDS.right.map((card) => (
                <OperateCard
                  key={card.key}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Container>
          </Container>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
