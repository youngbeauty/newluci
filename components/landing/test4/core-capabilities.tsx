"use client";

export function CoreCapabilities() {
  return (
    <section className="relative px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold text-text-0 sm:text-5xl lg:text-6xl">
            Core{" "}
            <span className="bg-gradient-to-r from-royal-5 via-brand-5 to-royal-5 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-12 lg:space-y-16">
          {/* Capability 1 */}
          <CapabilityRow
            title="No-Bot Ambient Assistant"
            subtitle="Zero friction. Zero interruption."
            description="Lucy never joins meetings, but always understands them in real time."
            icon={
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            image="/images/image 3381.png"
            reverse={false}
          />

          {/* Capability 2 */}
          <CapabilityRow
            title="Multimodal Intelligence (Look + Listen)"
            subtitle="Lucy hears what's said and sees what's shown —"
            description="video calls, shared screens, slides, spreadsheets, demos, and documents."
            icon={
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            }
            image="/images/image 3382.png"
            reverse={true}
          />

          {/* Capability 3 */}
          <CapabilityRow
            title="Ask Anything About Any Video"
            subtitle="Query any meeting, training, or demo."
            description="Ask what was decided, what matters, or what doesn't add up."
            icon={
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            reverse={false}
          />

          {/* Capability 4 */}
          <CapabilityRow
            title="From Video to Deliverables"
            subtitle="Turn meetings into real output —"
            description="editable slides, real spreadsheets, and clear action plans. Not notes. Results."
            icon={
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            image="/images/transcription.jpg"
            reverse={true}
          />

          {/* Capability 5 */}
          <CapabilityRow
            title="Real-Time AI, During the Meeting"
            subtitle="Live translation, coaching, and next-step suggestions —"
            description="AI that thinks with you, not after."
            icon={
              <svg
                className="h-16 w-16"
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
            reverse={false}
          />

          {/* Capability 6 */}
          <CapabilityRow
            title="Time & Priority Aware"
            subtitle="Lucy understands your day"
            description="and helps you focus on what matters now."
            icon={
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

interface CapabilityRowProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  reverse: boolean;
}

function CapabilityRow({
  title,
  subtitle,
  description,
  icon,
  image,
  reverse,
}: CapabilityRowProps) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Text Content */}
      <div className={reverse ? "lg:col-start-2" : ""}>
        <h3 className="mb-3 text-3xl font-semibold text-text-0 sm:text-4xl">
          {title}
        </h3>
        <p className="mb-2 text-lg font-medium text-royal-5 dark:text-royal-4">
          {subtitle}
        </p>
        <p className="text-lg text-text-2">{description}</p>
      </div>

      {/* Visual Content */}
      <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
        <div className="group relative overflow-hidden rounded-3xl border border-grey-1/20 bg-gradient-to-br from-royal-0/50 via-bg-0/50 to-brand-0/50 backdrop-blur-sm transition-all duration-500 hover:border-grey-1/40 hover:shadow-[0_30px_80px_rgba(65,105,225,0.2)] dark:border-grey-2/20 dark:from-grey-8/50 dark:via-bg-1/50 dark:to-grey-7/50 dark:hover:border-grey-2/40">
          {/* Gradient glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal-5/5 via-brand-5/5 to-royal-5/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {image ? (
            /* Image content */
            <div className="relative aspect-[4/3]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal-5/0 to-brand-5/0 opacity-0 transition-all duration-500 group-hover:from-royal-5/10 group-hover:to-brand-5/10 group-hover:opacity-100" />
            </div>
          ) : (
            /* Icon and placeholder content */
            <div className="relative flex aspect-[4/3] flex-col items-center justify-center p-12">
              {/* Icon */}
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-royal-5/10 to-brand-5/10 p-6 text-royal-5 transition-transform duration-500 group-hover:scale-110 dark:text-royal-4">
                {icon}
              </div>

              {/* Placeholder text */}
              <div className="text-center">
                <p className="text-sm font-medium text-text-2">
                  Visual demonstration
                </p>
                <p className="text-xs text-text-3">Coming soon</p>
              </div>

              {/* Decorative dots pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(65,105,225,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>
          )}

          {/* Corner gradient accent */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-royal-5/30 to-brand-5/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}
