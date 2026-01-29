import { GradientBlock } from "@/components/gradient-block";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Test3Page() {
  return (
    <main className="min-h-screen bg-bg-0 text-text-0">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 lg:px-12">
        <div className="text-sm font-semibold text-text-2">Test 3 · Orange + Royal</div>
        <ThemeToggle />
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-12">
        <GradientBlock>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-bg-0/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-0 backdrop-blur">
              Royal Gradient Block
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-text-0 sm:text-6xl">
              Orange × Royal Blue
              <span className="block text-text-1">做一整块底色的氛围感</span>
            </h1>
            <p className="mt-5 text-lg text-text-1">
              这是大面积色块背景示例：橙色热度 + Royal Blue 冷感，形成清晰层次。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-bg-0 px-6 py-3 text-sm font-semibold text-text-0 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                主按钮
              </button>
              <button className="rounded-xl border border-bg-0/60 px-6 py-3 text-sm font-semibold text-text-0">
                次按钮
              </button>
            </div>
          </div>
        </GradientBlock>
      </section>
    </main>
  );
}
