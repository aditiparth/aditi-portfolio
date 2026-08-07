import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DataAnalytics from "@/components/DataAnalytics";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import ProductWork from "@/components/ProductWork";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <DataAnalytics />
      <Work />
      <Marquee />
      <ProductWork />
      <About />
      <Contact />
    </main>
  );
}
