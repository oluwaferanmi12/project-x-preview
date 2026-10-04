import { Container, GeneralSpacer, Text } from "@repo/ui";
import { HomePill } from "./home-pill";
import { getImageProps, type StaticImageData } from "next/image";
import RenterImage from "@/assets/images/renter-image.jpg";
import ListerImage from "@/assets/images/property-lister.jpg";
import { NextIcon } from "@repo/icons";

// The source photos are 9–13 MB, so a raw url() would ship them as-is. This
// goes through the same optimizer as <Image> and hands the result to CSS.
// 900 wide is the cover-scaled width at the 590px card height; the 2x entry
// covers retina screens.
const toBackgroundImage = (image: StaticImageData) => {
  const { props } = getImageProps({
    alt: "",
    src: image,
    width: 900,
    height: 590,
  });
  const imageSet = (props.srcSet ?? "")
    .split(", ")
    .map((entry) => {
      const [url, density] = entry.split(" ");
      return `url("${url}") ${density}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
};

type Rgb = [number, number, number];

const DARK: Rgb = [18, 18, 18]; // #121212

// Design gradient: #121212 at the bottom fading to a tint at 0% opacity at the
// top. Figma blends colour and opacity separately, so the tint shows through
// the fade; CSS blends them premultiplied, so a plain two-stop gradient goes
// straight to grey-black and looks darker and flatter. Spelling out the
// in-between stops reproduces Figma's result. Pass the design's end colour.
const fadeFromDark = (end: Rgb) => {
  const stops = Array.from({ length: 11 }, (_, i) => {
    const t = i / 10;
    const [r, g, b] = DARK.map((from, c) =>
      Math.round(from + (end[c] - from) * t),
    );
    return `rgba(${r}, ${g}, ${b}, ${(1 - t).toFixed(1)}) ${i * 10}%`;
  });
  return `linear-gradient(0deg, ${stops.join(", ")})`;
};

const RENTER_GRADIENT = fadeFromDark([221, 115, 115]); // #DD7373
const LISTER_GRADIENT = fadeFromDark([59, 53, 97]); // #3B3561

type HowItWorksCardProps = {
  image: StaticImageData;
  gradient: string;
  label: string;
  heading: string;
  description: string;
  /** Background class for the top-left label tab, e.g. "bg-s300". */
  tabClassName: string;
  /** Background class for the tilted bottom-right corner, e.g. "bg-s500". */
  cornerClassName: string;
};

// The photo is decorative; the card's text carries the content.
const HowItWorksCard = ({
  image,
  gradient,
  label,
  heading,
  description,
  tabClassName,
  cornerClassName,
}: HowItWorksCardProps) => (
  <Container
    className="relative h-147.5 min-w-0 flex-1 flex items-center justify-center rounded-4xl bg-cover bg-center overflow-hidden bg-no-repeat"
    style={{ backgroundImage: toBackgroundImage(image) }}
  >
    <Container
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{ background: gradient }}
    />
    <Container
      className={`${tabClassName} rounded-br-4xl absolute top-0 left-0 px-12 py-6`}
    >
      <Text variant="h3" tone="inverted">
        {label}
      </Text>
    </Container>
    {/* Tilted corner: a rounded block rotated 8° about its top-left corner,
        oversized so the card's overflow-hidden clips it to the corner. */}
    <Container
      aria-hidden="true"
      className={`${cornerClassName} rounded-tl-4xl absolute top-[calc(100%-94px)] left-[calc(100%-133px)] h-36 w-52 origin-top-left rotate-8`}
    />
    <Container className="bg-muted px-3.5 py-1.5 rounded-lg absolute bottom-6 right-12">
      <NextIcon className="text-primary" />
    </Container>
    <Container className="z-10 mx-12 flex flex-col gap-2">
      <Text variant="h1" tone="inverted">
        {heading}
      </Text>
      <Text tone="inverted" variant="bodyRegular">
        {description}
      </Text>
    </Container>
  </Container>
);

export const HowItWorks = () => {
  return (
    <GeneralSpacer>
      <Container className="py-28 flex flex-col items-center">
        <HomePill text="How it works" />
        <Container className="mt-4 mb-32 w-1/2 text-center">
          <Text variant="h1">
            Easier solution to getting a{" "}
            <Text as="span" variant="h1" className="text-s300">
              home
            </Text>{" "}
            or getting the right occupant for your{" "}
            <Text variant="h1" className="text-p200" as="span">
              property
            </Text>
          </Text>
        </Container>
        <Container className="flex w-full items-center gap-6">
          <HowItWorksCard
            image={RenterImage}
            gradient={RENTER_GRADIENT}
            label="Renter"
            heading="Find a home that fits your needs."
            description="Explore properties across Nigeria with the information you need to make better decisions. Compare options, save your favourites and connect directly with owners and agents."
            tabClassName="bg-s300"
            cornerClassName="bg-s500"
          />
          <HowItWorksCard
            image={ListerImage}
            gradient={LISTER_GRADIENT}
            label="Property Lister"
            heading="List your property the right way."
            description="Showcase your property with complete information, reach interested house seekers and build trust through verified information and reviews."
            tabClassName="bg-p300"
            cornerClassName="bg-p500"
          />
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
