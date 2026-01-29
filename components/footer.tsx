export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-grey-1/10 bg-gradient-to-b from-brand-1/50 to-brand-0/30 px-6 py-16 dark:border-grey-2/10 dark:bg-bg-0 lg:px-12">
      {/* Floating Decorative Icons */}
      <div className="pointer-events-none absolute inset-0">
        {/* Icon 1 - Top Right */}
        <div className="absolute right-[15%] top-[10%] animate-float">
          <div className="rounded-2xl border border-royal-3/20 bg-gradient-to-br from-royal-1/60 to-brand-1/40 p-4 shadow-lg backdrop-blur-sm dark:from-royal-8/60 dark:to-brand-8/40">
            <svg
              className="h-8 w-8 text-royal-5 dark:text-royal-4"
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
          </div>
        </div>

        {/* Icon 2 - Right Middle */}
        <div
          className="absolute right-[10%] top-[35%] animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="rounded-2xl border border-brand-3/20 bg-gradient-to-br from-brand-1/60 to-royal-1/40 p-4 shadow-lg backdrop-blur-sm dark:from-brand-8/60 dark:to-royal-8/40">
            <svg
              className="h-8 w-8 text-brand-5 dark:text-brand-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
        </div>

        {/* Icon 3 - Left Top */}
        <div
          className="absolute left-[12%] top-[15%] animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="rounded-2xl border border-royal-3/20 bg-gradient-to-br from-royal-1/60 to-brand-1/40 p-3 shadow-lg backdrop-blur-sm dark:from-royal-8/60 dark:to-brand-8/40">
            <svg
              className="h-6 w-6 text-royal-5 dark:text-royal-4"
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
          </div>
        </div>

        {/* Icon 4 - Left Middle */}
        <div
          className="absolute left-[8%] top-[40%] animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="rounded-2xl border border-brand-3/20 bg-gradient-to-br from-brand-1/60 to-royal-1/40 p-3 shadow-lg backdrop-blur-sm dark:from-brand-8/60 dark:to-royal-8/40">
            <svg
              className="h-6 w-6 text-brand-5 dark:text-brand-4"
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
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top Section - CTA */}
        <div className="mb-20 text-center">
          <h3 className="mb-3 text-3xl font-semibold text-text-0 sm:text-4xl">
            Meeting AI that helps during the call, not after.
          </h3>
          <p className="mb-8 text-lg text-text-2 sm:text-xl">
            Try <span className="text-royal-5 dark:text-royal-4">Lucy</span> on
            your next meeting today.
          </p>
          <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-royal-5 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(65,105,225,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(65,105,225,0.5)]">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Get for Mac
            <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 [background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />
          </button>
        </div>

        {/* Middle Section - Links */}
        <div className="mb-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo Column */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-5 to-royal-5 shadow-lg" />
              <span className="text-lg font-semibold text-text-0">Lucy</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              All systems operational
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-0">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-text-2">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-text-0"
                >
                  Mobile
                  <span className="rounded-full bg-royal-5 px-2 py-0.5 text-xs font-semibold text-white">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Bug Bounty
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-0">Support</h4>
            <ul className="space-y-3 text-sm text-text-2">
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-0">Legal</h4>
            <ul className="space-y-3 text-sm text-text-2">
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Data Processing Agreement
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-text-0">
                  Subprocessors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-grey-1/10 pt-8 dark:border-grey-2/10 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-text-3">
            © 2025 Lucy. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-2 transition-colors hover:text-text-0"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-text-2 transition-colors hover:text-text-0"
              aria-label="Discord"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-text-2 transition-colors hover:text-text-0"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-text-2 transition-colors hover:text-text-0"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
