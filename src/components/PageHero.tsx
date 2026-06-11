type Props = {
  headline: string;
  subheadline?: string;
  children?: React.ReactNode;
};

export default function PageHero({ headline, subheadline, children }: Props) {
  return (
    <section className="bg-[var(--color-green-primary)] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
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
