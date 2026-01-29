import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative px-6 pb-20 lg:px-12 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Animated Heading */}
          <h1 className="relative mb-8">
            {/* Line 1 - Fade in + Slide up */}
            <span
              className={`block text-5xl font-semibold leading-tight tracking-tight text-text-0 transition-all duration-700 ease-out sm:text-6xl lg:text-7xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Lucy Desktop is an
            </span>

            {/* Line 2 - Fade in + Slide up with delay */}
            <span
              className={`mt-2 block bg-gradient-to-r from-royal-5 via-brand-5 to-royal-5 bg-clip-text text-5xl font-semibold leading-tight tracking-tight text-transparent transition-all duration-700 ease-out sm:text-6xl lg:text-7xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              AI assistant that runs locally
            </span>

            {/* Line 3 - Fade in + Slide up with delay */}
            <span
              className={`mt-2 block text-5xl font-semibold leading-tight tracking-tight text-text-0 transition-all duration-700 ease-out sm:text-6xl lg:text-7xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              on your computer.
            </span>
          </h1>

          {/* Subtitle - Fade in */}
          <div
            className={`mx-auto mb-10 max-w-3xl space-y-6 text-base text-text-1 transition-all duration-700 ease-out sm:text-lg ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <p>Lucy is an ambient AI that stays with you during work:</p>

            <p className="text-lg font-medium text-text-0 sm:text-xl">
              Meetings are just the input.
              <br />
              Output is what matters.
            </p>
          </div>

          {/* CTA Button - Fade in + Scale */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-royal-5 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(65,105,225,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(65,105,225,0.5)]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.6 3.6c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1v5.8H6.1c-.6 0-1 .4-1 1s.4 1 1 1h5.8v5.8c0 .6.4 1 1 1s1-.4 1-1v-5.8h5.8c.6 0 1-.4 1-1s-.4-1-1-1h-5.8V4.3c0-.3-.1-.5-.3-.7z" />
              </svg>
              Get for Mac
              {/* Shine effect */}
              <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 [background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />
            </button>
          </div>

          {/* Product Screenshot - Fade in + Scale + Slide up */}
          <div
            className={`relative mt-16 w-full max-w-5xl transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-12 scale-95 opacity-0"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            {/* Glow background */}
            <div className="absolute -inset-20 rounded-[60px] bg-gradient-to-br from-royal-4/30 via-brand-4/20 to-royal-5/30 blur-3xl" />

            {/* Screenshot Container */}
            <div className="relative overflow-hidden rounded-[32px] border border-grey-1/40 bg-gradient-to-br from-brand-1/60 via-royal-1/40 to-brand-2/50 p-4 shadow-[0_40px_120px_rgba(65,105,225,0.3)] backdrop-blur-sm dark:border-grey-2/30 dark:from-brand-2/30 dark:via-royal-8/20 dark:to-brand-3/40">
              {/* Window Chrome */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Placeholder for product screenshot */}
              <div className="aspect-[16/10] rounded-2xl border border-grey-1/40 bg-gradient-to-br from-royal-0/80 via-bg-0/60 to-brand-0/80 p-8 dark:from-grey-8/60 dark:via-bg-1/40 dark:to-grey-7/50">
                {/* Demo Content */}
                <div className="flex h-full flex-col items-center justify-center space-y-6">
                  {/* Chat Bubble */}
                  <div className="w-full max-w-xl rounded-2xl border border-royal-3/30 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:bg-grey-8/80">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-royal-5 to-brand-5" />
                      <div>
                        <div className="text-sm font-semibold text-text-0">
                          AI Assistant
                        </div>
                        <div className="text-xs text-text-3">
                          Active in meeting
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-1">
                      "A discounted cash flow model values a company by
                      projecting future free cash flows and discounting them to
                      present value using the weighted average cost of capital."
                    </p>
                  </div>

                  {/* Input Field */}
                  <div className="w-full max-w-xl rounded-xl border border-grey-2/40 bg-white/60 px-4 py-3 backdrop-blur-sm dark:bg-grey-7/60">
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-text-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="text-sm text-text-3">
                        Ask anything about the screen or conversation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
