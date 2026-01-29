"use client";

export function LuciApproach() {
  return (
    <section className="relative px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold text-text-0 sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-royal-5 via-brand-5 to-royal-5 bg-clip-text text-transparent">
              LUCI Desktop
            </span>{" "}
            Approach
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-1 sm:text-xl">
            LUCI Desktop is built around multimodal video understanding
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Audio Feature */}
          <FeatureCard
            icon={
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            }
            title="Audio"
            description="what is said"
            gradientFrom="from-royal-5"
            gradientTo="to-brand-5"
          />

          {/* Vision Feature */}
          <FeatureCard
            icon={
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
            title="Vision"
            description="what appears on screen"
            gradientFrom="from-brand-5"
            gradientTo="to-royal-6"
          />

          {/* Speakers Feature */}
          <FeatureCard
            icon={
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            title="Speakers"
            description="who is speaking"
            gradientFrom="from-royal-6"
            gradientTo="to-brand-6"
          />

          {/* Context Feature */}
          <FeatureCard
            icon={
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            title="Context over time"
            description="how information connects across recordings"
            gradientFrom="from-brand-6"
            gradientTo="to-royal-5"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

function FeatureCard({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-grey-1/20 bg-bg-0/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-grey-1/40 hover:shadow-[0_20px_60px_rgba(65,105,225,0.15)] dark:border-grey-2/20 dark:bg-bg-1/40 dark:hover:border-grey-2/40">
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]`}
      />

      {/* Icon area with image */}
      <div className="relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-grey-1/10 bg-gradient-to-br from-royal-0/50 to-brand-0/50 dark:from-grey-8/50 dark:to-grey-7/50">
        {/* Feature image */}
        <img
          src="/images/feature-notes.jpg"
          alt={title}
          className="h-full w-full object-cover opacity-90"
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10`}
        />

        {/* Icon overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <div className="rounded-2xl bg-bg-0/90 p-4 backdrop-blur-sm dark:bg-bg-1/90">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className={`mb-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-2xl font-semibold text-transparent`}
        >
          {title}
        </h3>
        <p className="text-base text-text-2">{description}</p>
      </div>

      {/* Decorative corner accent */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
      />
    </div>
  );
}
