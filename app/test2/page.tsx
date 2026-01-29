import { ThemeToggle } from "@/components/theme-toggle";

export default function Test2Page() {
  return (
    <main className="min-h-screen bg-bg-0 text-text-0">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(230,85,30,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(255,154,60,0.12),transparent_45%),radial-gradient(700px_circle_at_50%_90%,rgba(255,44,54,0.12),transparent_55%)] dark:bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(230,85,30,0.28),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(255,154,60,0.24),transparent_45%),radial-gradient(700px_circle_at_50%_90%,rgba(255,44,54,0.22),transparent_55%)]" />
          <div className="absolute -inset-[35%] opacity-50 blur-3xl [background:conic-gradient(from_120deg_at_50%_50%,rgba(255,154,60,0.35),rgba(255,44,54,0.08),rgba(255,154,60,0.4),rgba(255,44,54,0.08),rgba(255,154,60,0.35))] motion-safe:[animation:var(--animate-aurora)] dark:opacity-90" />
          <div className="absolute inset-0 opacity-[0.1] mix-blend-soft-light [background:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-brand-5/20 text-brand-6 shadow-[0_0_24px_rgba(230,85,30,0.4)]" />
            <div className="text-lg font-semibold tracking-tight">Lucy Desktop</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-text-2 md:flex">
            <a href="#" className="transition-colors hover:text-text-0">Capabilities</a>
            <a href="#" className="transition-colors hover:text-text-0">Security</a>
            <a href="#" className="transition-colors hover:text-text-0">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden rounded-full border border-brand-3/50 bg-bg-0/70 px-4 py-2 text-xs font-semibold text-text-0 backdrop-blur transition-colors hover:border-brand-4/70 hover:text-brand-6 dark:bg-bg-1/60 sm:inline-flex"
            >
              Join the waitlist
            </a>
            <ThemeToggle />
          </div>
        </header>

        <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-3/40 bg-brand-1/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-6 shadow-[0_0_28px_rgba(230,85,30,0.25)] dark:border-brand-4/60 dark:bg-brand-2/20 dark:text-brand-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-orange opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-orange" />
              </span>
              Signal-first AI
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-text-0 sm:text-6xl lg:text-7xl">
              会议情报流，
              <span className="block bg-gradient-to-br from-text-0 via-text-1 to-brand-6 bg-clip-text text-transparent">
                实时闪耀
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-text-1 sm:text-xl">
              把所有对话变成可执行的指令与行动清单。每次会议结束，你的下一步已经准备好。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-5 px-6 py-3 text-sm font-semibold text-yellow-foreground shadow-[0_14px_40px_rgba(230,85,30,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                立即体验
                <span className="absolute inset-0 opacity-0 mix-blend-screen [background:radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.5),transparent_45%)] transition-opacity duration-200 group-hover:opacity-100" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-3/50 bg-bg-0/60 px-6 py-3 text-sm font-semibold text-text-0 backdrop-blur transition-colors duration-200 hover:border-brand-4/80 hover:text-brand-6 dark:bg-bg-1/60"
              >
                观看演示
                <span className="text-text-3">12:48</span>
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
              {[
                { label: "响应延迟", value: "<120ms" },
                { label: "自动跟进", value: "98%" },
                { label: "实时摘要", value: "40+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-grey-1/60 bg-bg-0/80 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur dark:border-grey-2/40 dark:bg-bg-1/60"
                >
                  <div className="text-lg font-semibold text-brand-6">{item.value}</div>
                  <div className="text-text-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,154,60,0.22),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(255,44,54,0.2),transparent_46%)] blur-2xl" />
            <div className="relative rounded-[26px] border border-grey-1/60 bg-bg-0/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-grey-2/40 dark:bg-bg-1/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-brand-5/20 text-brand-6 shadow-[0_0_20px_rgba(230,85,30,0.35)]" />
                  <div>
                    <div className="text-sm font-semibold">Live Insight Graph</div>
                    <div className="text-xs text-text-3">Syncing in real time</div>
                  </div>
                </div>
                <span className="rounded-full border border-brand-4/60 px-3 py-1 text-xs font-semibold text-brand-6">
                  Auto
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[0, 1, 2].map((row) => (
                  <div
                    key={row}
                    className="h-3 rounded-full bg-gradient-to-r from-brand-3/30 via-brand-5/60 to-brand-6/40"
                    style={{ width: `${88 - row * 12}%` }}
                  />
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["摘要可见性", "行动项追踪", "情绪曲线", "关键决定"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-grey-1/70 bg-bg-0/80 px-4 py-3 text-sm text-text-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] dark:border-grey-2/40"
                  >
                    <span className="flex size-2.5 rounded-full bg-gradient-orange shadow-[0_0_12px_rgba(255,154,60,0.6)]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-brand-3/50 bg-gradient-to-br from-brand-1/40 via-bg-0/40 to-brand-2/30 p-4 text-xs text-text-1 dark:border-brand-4/50 dark:from-brand-2/20 dark:via-bg-1/30">
                <div className="flex items-center justify-between">
                  <span>Next action in 30 seconds</span>
                  <span className="text-brand-6">Prepared</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-grey-1/50">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-gradient-orange to-gradient-red" />
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-grey-1/60 bg-bg-0/70 px-4 py-3 text-xs font-semibold text-text-1 shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur lg:block">
              效率提升 3.4x
            </div>
          </div>
        </section>
      </div>

      <section className="relative mx-auto grid w-full max-w-6xl gap-6 px-6 pb-20 lg:grid-cols-3 lg:px-12">
        {[
          {
            title: "Focus Capture",
            copy: "把碎片化对话聚合成强信号，实时过滤噪声。",
          },
          {
            title: "Clarity Engine",
            copy: "关键节点自动生成行动项，不再遗漏。",
          },
          {
            title: "Trust Layer",
            copy: "本地处理 + 权限隔离，合规可控。",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-grey-1/60 bg-bg-0/80 p-6 text-sm shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 dark:border-grey-2/40 dark:bg-bg-1/60"
          >
            <div className="text-lg font-semibold text-text-0">{item.title}</div>
            <p className="mt-3 text-text-2">{item.copy}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-brand-6">
              Learn more
              <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-gradient-orange to-gradient-red" />
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-12">
        <div className="rounded-[28px] border border-brand-3/50 bg-gradient-to-r from-brand-1/50 via-bg-0/50 to-brand-2/40 p-10 text-text-0 shadow-[0_20px_60px_rgba(230,85,30,0.18)] dark:border-brand-4/60 dark:from-brand-2/30 dark:via-bg-1/30">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-6">
            Ready to ignite
          </div>
          <div className="mt-4 text-3xl font-semibold sm:text-4xl">
            让每一次会议都留下可行动的轨迹
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-brand-5 px-6 py-3 text-sm font-semibold text-yellow-foreground shadow-[0_14px_40px_rgba(230,85,30,0.35)]"
            >
              预约演示
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-brand-3/60 px-6 py-3 text-sm font-semibold text-text-0 transition-colors hover:border-brand-4/80 hover:text-brand-6"
            >
              查看安全白皮书
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
