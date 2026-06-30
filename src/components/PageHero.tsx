import Image from "next/image";

type Props = {
  headline: string;
  subheadline?: string;
  image?: string;
  imageAlt?: string;
  tall?: boolean;
  children?: React.ReactNode;
};

export default function PageHero({ headline, subheadline, image, imageAlt, tall, children }: Props) {
  const py = tall ? "py-24" : "py-14";
  return (
    <section className={`relative bg-[#1e2d20] text-white ${py} px-4 overflow-hidden`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/25" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-[#1e2d20] to-[#2E7D32]/80" />}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
