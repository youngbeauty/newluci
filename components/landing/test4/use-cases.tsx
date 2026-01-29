"use client";

export function UseCases() {
  return (
    <section className="relative px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold text-text-0 sm:text-5xl lg:text-6xl">
            Use Cases
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Use Case 1 */}
          <UseCaseCard
            icon={
              <svg
                className="h-10 w-10"
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
            title="Teams relying on video as a primary collaboration medium"
          />

          {/* Use Case 2 */}
          <UseCaseCard
            icon={
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            title="Knowledge workers managing frequent meetings"
          />

          {/* Use Case 3 */}
          <UseCaseCard
            icon={
              <svg
                className="h-10 w-10"
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
            title="Product, engineering, and strategy discussions"
          />

          {/* Use Case 4 */}
          <UseCaseCard
            icon={
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
            title="Research, learning, and technical reviews"
          />

          {/* Use Case 5 */}
          <UseCaseCard
            icon={
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            }
            title="Founders and executives tracking decisions over time"
          />
        </div>
      </div>
    </section>
  );
}

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
}

function UseCaseCard({ icon, title }: UseCaseCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-grey-1/20 bg-bg-0/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-royal-5/30 hover:bg-bg-0/60 hover:shadow-[0_10px_40px_rgba(65,105,225,0.1)] dark:border-grey-2/20 dark:bg-bg-1/40 dark:hover:border-royal-5/30 dark:hover:bg-bg-1/60">
      {/* Gradient glow on hover */}
      <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-royal-5/20 to-brand-5/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-royal-5/10 to-brand-5/10 text-royal-5 transition-all duration-300 group-hover:scale-110 group-hover:from-royal-5/20 group-hover:to-brand-5/20 dark:text-royal-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative text-lg font-medium leading-snug text-text-0 transition-colors duration-300 group-hover:text-royal-5 dark:group-hover:text-royal-4">
        {title}
      </h3>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-royal-5 to-brand-5 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
