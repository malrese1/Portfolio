import { Hero } from "@/components/Hero";
import { PerformanceSnapshot } from "@/components/PerformanceSnapshot";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <PerformanceSnapshot />
      <About />
    </>
  );
}
