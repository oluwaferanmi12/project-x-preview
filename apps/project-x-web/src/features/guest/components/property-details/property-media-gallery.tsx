import Image, { type StaticImageData } from "next/image";
import { BookmarkIcon, IconImage, VideoPlayIcon } from "@repo/icons";
import { Button, Container } from "@repo/ui";

export const PropertyMainMedia = ({
  src,
  alt,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) => (
  <Container
    className={`relative aspect-[1.75] w-full overflow-hidden rounded-2xl bg-muted ${className}`}
  >
    <Image src={src} alt={alt} fill priority className="object-cover" />
    <Container className="absolute inset-0 flex items-center justify-center text-inverted">
      <VideoPlayIcon size={56} />
    </Container>
    <Button
      variant="surface"
      shorter
      aria-label="Save property"
      className="absolute right-3 top-3 !h-8 !w-8 !rounded-lg !bg-inverted !p-0 !text-secondary hover:!bg-inverted"
    >
      <BookmarkIcon size={16} />
    </Button>
  </Container>
);

export const PropertyThumbnails = ({
  thumbnails,
  alt,
  className = "",
  onOpen,
}: {
  thumbnails: StaticImageData[];
  alt: string;
  className?: string;
  onOpen?: (index: number | null) => void;
}) => (
  <Container className={`flex flex-col gap-3 ${className}`}>
    <Container className="grid grid-cols-4 gap-2 lg:grid-cols-2 lg:gap-3">
      {thumbnails.slice(0, 4).map((src, index) => (
        <Button
          key={index}
          variant="transparent"
          aria-label={`Open photo ${index + 1}`}
          onClick={() => onOpen?.(index)}
          className="relative aspect-[1.4] !w-full overflow-hidden !rounded-lg !p-0 lg:!rounded-xl"
        >
          <Image
            src={src}
            alt={`${alt} ${index + 1}`}
            fill
            sizes="150px"
            className="object-cover"
          />
        </Button>
      ))}
    </Container>
    <Button
      variant="muted"
      shorter
      fullWidth
      onClick={() => onOpen?.(null)}
      rightIcon={<IconImage size={16} />}
    >
      View property gallery
    </Button>
  </Container>
);
