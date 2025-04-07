import '../styles/main.scss';
import MainSection from '@/sections/MainSection';
import AboutSection from '@/sections/AboutSection';
import FencesSection from '@/sections/FencesSection';
import AdvantageSection from '@/sections/AdvantageSection';
import FullWidthSection from '@/components/FullWidthSection';
import MontageSection from '@/sections/MontageSection';
import FenceTypeSection from '@/sections/FenceTypeSection';
import StocksSection from '@/sections/StocksSection';
import ReviewsSection from '@/sections/ReviewsSection';
import FormSection from '@/sections/FormSection';

const HomePage = () => {
  return (
    <>
      <div style={{ marginTop: 60 }} className="m150">
        <MainSection />
      </div>

      <FullWidthSection>
        <AboutSection />
      </FullWidthSection>

      {/*<div className="m150">*/}
      {/*  <FencesSection />*/}
      {/*</div>*/}

      {/*<FullWidthSection>*/}
      {/*  <AdvantageSection />*/}
      {/*</FullWidthSection>*/}

      {/*<div className="m150">*/}
      {/*  <FenceTypeSection />*/}
      {/*</div>*/}

      {/*<FullWidthSection>*/}
      {/*  <StocksSection />*/}
      {/*</FullWidthSection>*/}

      {/*<div className="m150">*/}
      {/*  <ReviewsSection />*/}
      {/*</div>*/}

      {/*<FullWidthSection>*/}
      {/*  <MontageSection />*/}
      {/*</FullWidthSection>*/}

      <div className="m150">
        <FormSection />
      </div>
    </>
  );
};

export default HomePage;
