import { Container } from "@repo/ui";
import { HomePinIcon } from "@repo/icons";
import Image from "next/image";
import { HERO_PINS } from "../../guest.constants";

export const HeroImage = () => {
  return (
    <Container className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
      <Image
        src="/guest/hero-image.png"
        alt="Residential apartment blocks"
        fill
        priority
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover"
      />
      {HERO_PINS.map((pin, index) => (
        <Container
          key={index}
          className="absolute -translate-x-1/2 -translate-y-full text-p300 drop-shadow-md"
          style={{ top: pin.top, left: pin.left }}
        >
          <HomePinIcon size={36} />
        </Container>
      ))}
    </Container>
  );
};
