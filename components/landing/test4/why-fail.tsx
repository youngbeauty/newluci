"use client";

import { GradientBlock } from "@/components/gradient-block";

export function WhyFail() {
  return (
    <section className="relative px-6 py-20 lg:px-12 my-40">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold text-text-0 sm:text-5xl lg:text-6xl">
            Why Existing Meeting
            <br />
            <span className="bg-gradient-to-r from-royal-5 via-brand-5 to-royal-5 bg-clip-text text-transparent">
              Assistants Fail
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-1 sm:text-xl">
            Today's meeting assistants all share the same limitations:
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Problems List */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <ProblemItem>They require bots to join meetings.</ProblemItem>
              <ProblemItem>
                They change the social dynamics of conversations.
              </ProblemItem>
              <ProblemItem>They only work after the meeting ends.</ProblemItem>
              <ProblemItem>
                They do not truly understand video or shared screens.
              </ProblemItem>
              <ProblemItem>They cannot participate in real work.</ProblemItem>
            </div>

            <div className="border-l-4 border-royal-5/30 pl-6">
              <p className="text-lg font-medium text-text-1">
                They record.
                <br />
                They summarize.
                <br />
                They stop there.
              </p>
            </div>
          </div>

          {/* Right Column - Comparison Image */}
          <div className="flex items-center">
            <div className="relative overflow-hidden rounded-3xl border border-grey-1/20 bg-gradient-to-br from-royal-0/50 to-brand-0/50 shadow-[0_20px_60px_rgba(65,105,225,0.15)] dark:border-grey-2/20">
              <img
                src="/images/comparison.jpg"
                alt="Comparison of traditional meeting assistants vs Lucy Desktop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
        <svg
          className="h-5 w-5 text-red-500 dark:text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <p className="text-base text-text-1 sm:text-lg">{children}</p>
    </div>
  );
}
