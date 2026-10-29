import Image from "next/image";
import Link from "next/link";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import notFoundBg from "@/assets/images/404-bg.jpg";
import NotFoundNumber from "@/assets/svgs/404.svg";

export const NotFoundBanner = () => {
  return (
    <GeneralSpacer>
      <Container className="relative isolate mt-10 flex min-h-[560px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#3B3561] px-5 py-16 text-center lg:min-h-[800px]">
        <Image
          src={notFoundBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-bottom"
        />
        <Container className="absolute inset-0 -z-10 bg-gradient-to-b from-[#796DC7]/20 to-[#3B3561]/80" />

        <NotFoundNumber
          role="img"
          aria-label="404"
          className="h-auto w-[260px] sm:w-[400px] lg:w-[546px]"
        />
        <Text as="h1" variant="h1" tone="inverted" className="-mt-10 lg:-mt-14">
          Sorry, the page can not be found.
        </Text>
        <Container className="mt-4 max-w-130">
          <Text variant="body-lg" tone="inverted">
            The requested page either doesn&apos;t exists or you do not have
            access to view it
          </Text>
        </Container>
        <Container className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <Link href="/available-properties">
            <Button variant="secondary">Explore Properties</Button>
          </Link>
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
