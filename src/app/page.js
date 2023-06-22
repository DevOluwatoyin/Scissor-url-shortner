import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhyUs />
      <Price />
      <Form />
      <Faq />
      <Cta />
    </main>
  );
}
