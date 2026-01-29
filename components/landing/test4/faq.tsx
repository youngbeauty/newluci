"use client";

import { useState } from "react";

export function FAQ() {
  return (
    <section className="relative px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-semibold text-text-0 sm:text-5xl lg:text-6xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-royal-5 via-brand-5 to-royal-5 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          <FAQItem
            question="How does Lucy work without joining meetings?"
            answer="Lucy runs locally on your computer and captures audio and screen content directly from your device. It processes everything on your machine, so there's no bot to join, no calendar integration needed, and no trace in participant lists or recordings."
          />

          <FAQItem
            question="Is my data private and secure?"
            answer="Yes. Lucy processes everything locally on your computer. Your meeting data never leaves your device unless you explicitly choose to share something. There are no cloud recordings, no third-party access, and you maintain complete control over your information."
          />

          <FAQItem
            question="What platforms does Lucy support?"
            answer="Lucy works with any video conferencing platform - Zoom, Google Meet, Microsoft Teams, Slack, and more. Since it captures from your computer directly rather than joining as a bot, it's platform-agnostic and works with screen shares, local recordings, and live meetings."
          />

          <FAQItem
            question="Can Lucy understand multiple languages?"
            answer="Yes. Lucy provides real-time translation and can understand and transcribe conversations in multiple languages. It can even translate between languages during live meetings to help bridge communication gaps."
          />

          <FAQItem
            question="How does Lucy differ from other meeting assistants?"
            answer="Unlike traditional meeting bots, Lucy never joins your meetings, doesn't change social dynamics, works in real-time (not just after meetings end), truly understands visual content like slides and spreadsheets, and creates actual deliverables - not just notes and summaries."
          />

          <FAQItem
            question="What kind of output can Lucy generate?"
            answer="Lucy can create editable slides, real spreadsheets, action plans, summaries, and other deliverables based on your meetings. It focuses on producing work-ready results that you can use immediately, not just passive notes."
          />

          <FAQItem
            question="Does Lucy work during live meetings or only after?"
            answer="Both. Lucy works in real-time during meetings, providing live suggestions, translations, and coaching as the conversation happens. You can also query past meetings anytime to extract insights or create deliverables."
          />

          <FAQItem
            question="How do I get started with Lucy?"
            answer="Download Lucy Desktop for Mac, install it on your computer, and grant the necessary permissions for screen and audio capture. Lucy will then be ready to assist you in your next meeting - no setup, no integrations, no bot invites needed."
          />
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-grey-1/20 bg-bg-0/40 backdrop-blur-sm transition-all duration-300 hover:border-grey-1/40 hover:bg-bg-0/60 dark:border-grey-2/20 dark:bg-bg-1/40 dark:hover:border-grey-2/40 dark:hover:bg-bg-1/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
      >
        <h3 className="text-lg font-semibold text-text-0 sm:text-xl">
          {question}
        </h3>
        <div
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="h-6 w-6 text-royal-5 dark:text-royal-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-grey-1/10 px-6 pb-6 pt-4 dark:border-grey-2/10">
            <p className="text-base leading-relaxed text-text-2 sm:text-lg">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
