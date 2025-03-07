import ContactUsSection from "@/components/ContactUsSection";
import FAQsSection from "@/components/FAQs";
import HomeSection from "@/components/HomeSection";
import PlansSection from "@/components/PlansSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";

export default function Home() {
  return (<>
    <HomeSection />
    <WhoWeAreSection />
    <ProcessSection />
    <PlansSection />
    <TestimonialSection />
    <FAQsSection />
    <ContactUsSection />
  </>);
}
