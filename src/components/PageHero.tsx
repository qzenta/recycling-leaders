import Image from "next/image";

type Props = {
  headline: string;
  subheadline?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export default function PageHero({ headline, subheadline, image, imageAlt, children }: Props) {
  return (
    <section className="relative bg-[var(--color-green-primary)] text-white py-20 px-4 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? headline}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/90 via-[#2E7D32]/80 to-[#1B5E20]/70" />
        </>
      )}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
