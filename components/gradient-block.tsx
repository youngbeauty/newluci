import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GradientBlockProps = {
  children: ReactNode;
  className?: string;
};

type GradientBlockBaseProps = GradientBlockProps & {
  sizeClassName: string;
};

const baseStyles =
  "relative overflow-hidden rounded-[36px] border border-grey-1/60 bg-[linear-gradient(140deg,var(--brand-3),var(--brand-2)_35%,var(--royal-2))] px-10 py-20 text-text-0 shadow-[0_30px_80px_rgba(65,105,225,0.2)] dark:border-grey-2/40";

function GradientBlockBase({
  children,
  className,
  sizeClassName,
}: GradientBlockBaseProps) {
  return (
    <div
      className={cn(baseStyles, sizeClassName, className)}
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(900px_circle_at_15%_0%,rgba(255,255,255,0.55),transparent_55%),radial-gradient(700px_circle_at_85%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function GradientBlock(props: GradientBlockProps) {
  return <GradientBlockBase {...props} sizeClassName="mx-auto w-full max-w-5xl" />;
}

export function GradientBlockWide(props: GradientBlockProps) {
  return <GradientBlockBase {...props} sizeClassName="mx-auto w-full max-w-6xl" />;
}

export function GradientBlockFull(props: GradientBlockProps) {
  return <GradientBlockBase {...props} sizeClassName="w-full" />;
}
