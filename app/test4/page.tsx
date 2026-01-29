"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/landing/test4/hero";
import { WhyFail } from "@/components/landing/test4/why-fail";
import { LuciApproach } from "@/components/landing/test4/luci-approach";
import { UseCases } from "@/components/landing/test4/use-cases";
import { CoreCapabilities } from "@/components/landing/test4/core-capabilities";
import { FAQ } from "@/components/landing/test4/faq";
import { Footer } from "@/components/footer";
export default function Test4Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-royal-0 via-royal-1/30 to-bg-0 dark:from-[#0B0F14] dark:via-royal-9/20 dark:to-bg-0">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <WhyFail />
      <LuciApproach />
      <UseCases />
      <CoreCapabilities />
      <FAQ />
      <Footer />
    </main>
  );
}
