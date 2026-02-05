// app/page.tsx
// LUCI — Landing page inspired by M5Stack-style marketing layout
// Stack: Next.js App Router + Tailwind + Framer Motion + Lucide Icons + Radix UI
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Eye,
  Video,
  Mic,
  Battery,
  Scissors,
  Users,
  Brain,
  CheckCircle2,
  Bot,
  Layers,
  ArrowRight,
  ShieldCheck,
  Moon,
  Sun,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-3 bg-brand-1 px-3 py-1 text-xs text-brand-5">
      {children}
    </span>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-5 px-4 py-2.5 text-sm font-semibold text-text-0 shadow-sm shadow-brand-5/20 transition hover:translate-y-[-1px] hover:bg-brand-6 hover:shadow-md hover:shadow-brand-5/30 active:translate-y-0">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-accent px-4 py-2.5 text-sm font-semibold text-text-0 transition hover:bg-brand-1 hover:border-brand-3">
      {children}
    </button>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: any;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-text-2">
        <Icon className="h-4 w-4" />
        <span className="text-xs">{label}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-text-0">
        {value}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: any;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-5 transition hover:border-brand-5 hover:bg-brand-0">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-brand-3 bg-brand-1 p-2 transition group-hover:bg-brand-2">
          <Icon className="h-5 w-5 text-brand-5" />
        </div>
        <div>
          <div className="text-base font-semibold text-text-0">{title}</div>
          <p className="mt-1 text-sm leading-6 text-text-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold tracking-wider text-text-2">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-0 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-text-2">{desc}</p>
    </div>
  );
}

function Divider() {
  return <div className="my-12 h-px w-full bg-muted" />;
}

export default function Page() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <main className="min-h-screen bg-bg-0 text-text-0">
      {/* Subtle grid + glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_60%_-10%,rgba(65,105,225,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(65,105,225,0.08),transparent_25%,transparent_70%,rgba(65,105,225,0.04))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(65,105,225,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(65,105,225,0.06)_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.08]" />
      </div>

      {/* Top Nav */}
      <header className="relative z-10 border-b border-border">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-5 bg-brand-1">
              <Sparkles className="h-5 w-5 text-brand-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">LUCI</div>
              <div className="text-xs text-text-2">Always-On Visual AI</div>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-text-2 md:flex">
            <a className="hover:text-text-0" href="#why">
              Why
            </a>
            <a className="hover:text-text-0" href="#how">
              How it works
            </a>
            <a className="hover:text-text-0" href="#hardware">
              Hardware
            </a>
            <a className="hover:text-text-0" href="#faq">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card transition hover:bg-accent hover:border-brand-3"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-brand-5" />
              ) : (
                <Moon className="h-4 w-4 text-brand-5" />
              )}
            </button>
            <SecondaryButton>Request demo</SecondaryButton>
            <div className="hidden sm:block">
              <PrimaryButton>Get LUCI</PrimaryButton>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="lg:col-span-6"
            >
              <motion.div variants={fadeUp}>
                <Pill>
                  <Eye className="h-4 w-4 text-brand-5" />
                  Always-On · Visual-First · Work Memory
                </Pill>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                LUCI — Always-On Visual AI for Real Work
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-xl text-base leading-7 text-text-2"
              >
                LUCI is an{" "}
                <span className="font-semibold text-brand-5">
                  Always-On, Visual-First AI Assistant
                </span>{" "}
                designed for high-frequency meetings and complex workflows. You
                don't need to remember to turn it on. When you need it, the work
                is already done.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <PrimaryButton>Request demo</PrimaryButton>
                <SecondaryButton>See how it works</SecondaryButton>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                <Stat icon={Video} label="Continuous video" value="Up to 12h" />
                <Stat icon={Mic} label="Continuous audio" value="Up to 40h" />
                <Stat
                  icon={Scissors}
                  label="AI slicing"
                  value="Auto sessions"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs text-text-3"
              >
                <ShieldCheck className="h-4 w-4" />
                Privacy-first by design • You stay in control
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-text-0">
                    Your day, structured
                  </div>
                  <Pill>
                    <Layers className="h-4 w-4" />
                    Sessions
                  </Pill>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    {
                      t: "Design Review",
                      meta: "9:10–9:52 · 6 people · decisions + action items",
                      chips: ["Summary", "Decisions", "Tasks"],
                    },
                    {
                      t: "Hallway Sync",
                      meta: "10:07–10:15 · 2 people · whiteboard",
                      chips: ["Highlights", "People"],
                    },
                    {
                      t: "Focus",
                      meta: "10:20–11:05 · quiet period",
                      chips: ["Context"],
                    },
                  ].map((s) => (
                    <div
                      key={s.t}
                      className="rounded-2xl border border-border bg-bg-1 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold">{s.t}</div>
                          <div className="mt-1 text-xs text-text-2">
                            {s.meta}
                          </div>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full border border-border bg-muted" />
                          <div className="h-8 w-8 rounded-full border border-border bg-muted" />
                          <div className="h-8 w-8 rounded-full border border-border bg-muted" />
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.chips.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-border bg-accent px-2.5 py-1 text-[11px] text-text-2"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-muted p-4">
                  <div className="text-xs font-semibold text-text-2">
                    Ask LUCI
                  </div>
                  <div className="mt-2 text-sm text-text-1">
                    “Draft a follow-up email for the decision in the design
                    review.”
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-muted" />
                </div>

                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-muted blur-3xl" />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reality */}
      <section id="why" className="relative z-10">
        <Container>
          <Divider />
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="THE REALITY OF WORK"
                title="Work doesn’t happen when you press “Record.”"
                desc="Meetings start spontaneously, breakthroughs happen in hallways, and decisions evolve over time. Traditional tools rely on human memory to start, stop, and organize."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-card p-6">
                <ul className="space-y-3 text-sm text-text-2">
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-white/40" />
                    Meetings start spontaneously and end early.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-white/40" />
                    Crucial discussions happen in hallways or at whiteboards.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-white/40" />
                    Decisions aren’t single sentences; they’re processes.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl border border-border bg-bg-1 p-4">
                  <div className="text-xs font-semibold text-text-2">
                    Premise
                  </div>
                  <div className="mt-2 text-sm text-text-0">
                    Humans forget. Systems shouldn’t rely on human memory.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Always On + Slicing + Visual First */}
      <section id="how" className="relative z-10">
        <Container>
          <Divider />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="HOW IT WORKS"
                title="Always On by design. Always organized by AI."
                desc="Always-On doesn’t mean a 12-hour black hole. LUCI continuously captures, then automatically slices your day into structured Sessions based on semantics and context changes."
              />
              <div className="mt-6 grid gap-3">
                <FeatureCard
                  icon={Battery}
                  title="No need to start. No need to stop."
                  desc="Continuous background capture with zero manual intervention."
                />
                <FeatureCard
                  icon={Scissors}
                  title="Automatic AI slicing"
                  desc="Meetings, side discussions, and focus time are segmented into clear Sessions."
                />
                <FeatureCard
                  icon={Eye}
                  title="Visual-first understanding"
                  desc="Video adds identity, physical context, and meaning that audio alone can’t infer reliably."
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <Tabs defaultValue="slicing" className="w-full">
                <TabsList className="inline-flex rounded-2xl border border-border bg-card p-1">
                  {[
                    { v: "slicing", label: "AI Slicing" },
                    { v: "visual", label: "Visual-First" },
                    { v: "people", label: "Speaker ID" },
                  ].map((t) => (
                    <TabsTrigger
                      key={t.v}
                      value={t.v}
                      className="select-none rounded-xl px-4 py-2 text-sm font-semibold text-text-2 transition data-[state=active]:bg-white data-[state=active]:text-background"
                    >
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mt-4">
                  <TabsContent value="slicing">
                    <div className="rounded-3xl border border-border bg-card p-6">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Scissors className="h-5 w-5 text-text-1" />
                        Always On, zero chaos
                      </div>
                      <p className="mt-2 text-sm leading-6 text-text-2">
                        LUCI identifies meetings, side discussions, and quiet
                        focus periods, then slices by semantics, participants,
                        and context shifts.
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <FeatureCard
                          icon={Layers}
                          title="Structured Sessions"
                          desc="You don't see a 12-hour file. You see a day architecture."
                        />
                        <FeatureCard
                          icon={Brain}
                          title="Context-aware boundaries"
                          desc="Transitions are detected from meaning, not timers."
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="visual">
                    <div className="rounded-3xl border border-border bg-card p-6">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Video className="h-5 w-5 text-text-1" />
                        Visual-first is the breakthrough
                      </div>
                      <p className="mt-2 text-sm leading-6 text-text-2">
                        In professional settings, who is speaking and the
                        physical context often determine the meaning. Without
                        vision, AI is guessing.
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <FeatureCard
                          icon={Eye}
                          title="Meeting dynamics"
                          desc="Positioning, whiteboards, and visual cues add critical context."
                        />
                        <FeatureCard
                          icon={Users}
                          title="Participant understanding"
                          desc="Visual signals improve attribution and clarity in summaries."
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="people">
                    <div className="rounded-3xl border border-border bg-card p-6">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <Users className="h-5 w-5 text-text-1" />
                        Speaker ID that actually works
                      </div>
                      <p className="mt-2 text-sm leading-6 text-text-2">
                        LUCI combines Face + Voice signals to identify people.
                        Timelines, summaries, and chats show real avatars—no
                        "Speaker 1 / Speaker 2."
                      </p>
                      <div className="mt-5 rounded-2xl border border-border bg-bg-1 p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-semibold text-text-2">
                            People-centric timeline
                          </div>
                          <Pill>
                            <Users className="h-4 w-4" />
                            Avatars
                          </Pill>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="h-11 w-11 rounded-2xl border border-border bg-muted" />
                          <div className="h-11 w-11 rounded-2xl border border-border bg-muted" />
                          <div className="h-11 w-11 rounded-2xl border border-border bg-muted" />
                          <div className="h-11 w-11 rounded-2xl border border-border bg-muted" />
                        </div>
                        <div className="mt-3 text-xs text-text-2">
                          Identities appear throughout Sessions, highlights, and
                          search.
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </Container>
      </section>

      {/* Hardware */}
      <section id="hardware" className="relative z-10">
        <Container>
          <Divider />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="HARDWARE"
                title="Built for all-day work"
                desc="The LUCI Pin isn’t for taking pretty pictures. It’s engineered to help AI understand the world—meeting dynamics, collaboration, and context."
              />
              <div className="mt-6 grid gap-3">
                <FeatureCard
                  icon={Video}
                  title="Up to 12 hours continuous video"
                  desc="All-day capture for high-frequency work."
                />
                <FeatureCard
                  icon={Mic}
                  title="Up to 40 hours continuous audio"
                  desc="Long-run audio capture with low-power operation."
                />
                <FeatureCard
                  icon={Battery}
                  title="Low power, featherlight"
                  desc="Designed for all-day wear without friction."
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">LUCI Pin</div>
                  <Pill>
                    <Battery className="h-4 w-4" />
                    Always-On
                  </Pill>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-bg-1 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-2">
                      <Video className="h-4 w-4" />
                      Visual pipeline
                    </div>
                    <div className="mt-2 text-sm text-text-1">
                      Meeting dynamics · Whiteboards · Context cues
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-muted" />
                  </div>
                  <div className="rounded-2xl border border-border bg-bg-1 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-2">
                      <Mic className="h-4 w-4" />
                      Audio pipeline
                    </div>
                    <div className="mt-2 text-sm text-text-1">
                      Dialogue · Intent · Action items
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-muted" />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-muted p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Brain className="h-5 w-5 text-text-1" />
                    From Sessions to understanding
                  </div>
                  <p className="mt-2 text-sm leading-6 text-text-2">
                    Each Session extracts core points, decisions vs.
                    disagreements, and cross-references people, time, and
                    projects—powering cards, summaries, and highlights.
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-muted blur-3xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What you get */}
      <section className="relative z-10">
        <Container>
          <Divider />
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="OUTPUTS"
                title="Not just records—structured intelligence"
                desc="LUCI turns natural dialogue into decisions, tasks, and execution-ready drafts. It builds long-term professional memory so you don’t repeat context."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <FeatureCard
                  icon={CheckCircle2}
                  title="Tasks, automatically"
                  desc="Explicit promises, implied follow-ups, and action items captured in real time."
                />
                <FeatureCard
                  icon={Brain}
                  title="Long-term work memory"
                  desc="Recurring meetings, frequent collaborators, and your decision patterns compound over time."
                />
                <FeatureCard
                  icon={Bot}
                  title="Agent that actually acts"
                  desc="Draft post-meeting summaries, format updates into emails, and prepare drafts on command."
                />
                <FeatureCard
                  icon={Layers}
                  title="Work first, life included"
                  desc="Automatic daily highlights and meaningful snippets—curated without a director."
                />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="text-sm font-semibold">The real difference</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-bg-1 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-text-1">
                      <Mic className="h-5 w-5 text-text-2" />
                      AI voice recorders
                    </div>
                    <p className="mt-2 text-sm leading-6 text-text-2">
                      Record sound; require manual sorting afterward.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-accent p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-text-0">
                      <Eye className="h-5 w-5" />
                      LUCI
                    </div>
                    <p className="mt-2 text-sm leading-6 text-text-2">
                      Always present. Visual understanding. Automatic AI slicing
                      and action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-bg-1 p-4">
                  <div className="text-xs font-semibold text-text-2">CTA</div>
                  <div className="mt-2 text-base font-semibold">
                    Bring LUCI into your workflow
                  </div>
                  <p className="mt-2 text-sm leading-6 text-text-2">
                    Always-on capture, visual-first understanding, and
                    execution-ready outputs.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <PrimaryButton>Request demo</PrimaryButton>
                    <SecondaryButton>Talk to sales</SecondaryButton>
                  </div>
                  <div className="mt-3 text-xs text-text-3">
                    No friction. No missed moments. No manual cleanup.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10">
        <Container>
          <Divider />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="FAQ"
                title="Questions teams ask first"
                desc="Swap copy, add policies, or wire this into your existing security + admin pages."
              />
            </div>
            <div className="lg:col-span-7">
              <Accordion
                type="single"
                collapsible
                className="rounded-3xl border border-border bg-card p-2"
                defaultValue="item-1"
              >
                {[
                  {
                    v: "item-1",
                    q: "Does Always-On mean I get one giant file?",
                    a: "No. LUCI automatically slices your day into structured Sessions. You browse a timeline, not a 12-hour dump.",
                  },
                  {
                    v: "item-2",
                    q: "Why does visual matter for meetings?",
                    a: "Vision adds identity, physical context, and non-verbal cues that change meaning. It improves attribution and clarity versus audio-only systems.",
                  },
                  {
                    v: "item-3",
                    q: "How are tasks generated?",
                    a: "LUCI detects intent in dialogue—explicit commitments, implied follow-ups, and action items—then attaches them to the relevant Session.",
                  },
                  {
                    v: "item-4",
                    q: "What does the Agent actually do?",
                    a: "Using Sessions + identity + long-term memory, the Agent drafts summaries, prepares email-ready updates, and generates structured outputs on command.",
                  },
                ].map((item) => (
                  <AccordionItem
                    key={item.v}
                    value={item.v}
                    className="overflow-hidden rounded-2xl border border-transparent data-[state=open]:border-border data-[state=open]:bg-card"
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-text-0">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-sm leading-6 text-text-2">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-border">
        <Container className="py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-5 bg-brand-1">
                <Sparkles className="h-5 w-5 text-brand-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">LUCI</div>
                <div className="text-xs text-text-2">
                  Always-On Visual AI for Real Work
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-text-2">
              <a className="hover:text-text-0" href="#why">
                Why
              </a>
              <a className="hover:text-text-0" href="#how">
                How it works
              </a>
              <a className="hover:text-text-0" href="#hardware">
                Hardware
              </a>
              <a className="hover:text-text-0" href="#faq">
                FAQ
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs text-text-0/45">
            © {new Date().getFullYear()} LUCI. All rights reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}
