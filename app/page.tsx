import AboutSection from "./components/AboutSection/AboutSection";
import Carousel from "./components/Carousel/Carousel";
import OurCaseSection from "./components/OurCaseSection/OurCaseSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

export default function Page() {
  return (
    <div style={{
      // overflow: 'auto',
      // msOverflowStyle: 'none',
      // scrollbarWidth: 'none',
    }}>
      <div
        style={{
          backgroundColor: '#7335b7',
          borderRadius: '0 0 350px 0',
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Carousel />
      </div>
      <div style={{ marginTop: '4%' }}>
        <ServicesSection />
      </div>
      <div style={{ marginTop: '4%' }}>
        <AboutSection />
      </div>
      <div style={{ marginTop: '4%' }}>
        <OurCaseSection />
      </div>
      <div style={{ marginTop: '4%' }}>
        <TestimonialSection />
      </div>
    </div>
  );
}
