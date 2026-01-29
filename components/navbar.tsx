import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 flex justify-center px-6">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-grey-1/20 bg-bg-0/80 px-6 py-4 shadow-lg backdrop-blur-md dark:border-grey-2/20 dark:bg-bg-0/80">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-5 to-royal-5 shadow-lg" />
          <span className="text-lg font-semibold text-text-0">NewLuci</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-text-2 md:flex">
          <a href="#" className="transition-colors hover:text-text-0">
            Pricing
          </a>
          <a href="#" className="transition-colors hover:text-text-0">
            <span className="inline-flex items-center gap-2">
              Mobile
              <span className="rounded-full bg-royal-5/10 px-2 py-0.5 text-xs font-semibold text-royal-6">
                New
              </span>
            </span>
          </a>
          <a href="#" className="transition-colors hover:text-text-0">
            Blog
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
