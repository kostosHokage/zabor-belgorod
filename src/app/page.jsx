import '../styles/main.scss';
import MainSection from '@/sections/MainSection';
import AboutSection from '@/sections/AboutSection';
import FencesSection from '@/sections/FencesSection';
import AdvantageSection from '@/sections/AdvantageSection';
import FullWidthSection from '@/components/FullWidthSection';
import MontageSection from '@/sections/MontageSection';
import FenceTypeSection from '@/sections/FenceTypeSection';
import StocksSection from '@/sections/StocksSection';

const HomePage = () => {
  return (
    <>
      <div style={{ marginTop: 60 }} className="m150">
        <MainSection />
      </div>

      {/*<FullWidthSection>*/}
      {/*  <AboutSection />*/}
      {/*</FullWidthSection>*/}

      {/*<div className="m150">*/}
      {/*  <FencesSection />*/}
      {/*</div>*/}

      {/*<FullWidthSection>*/}
      {/*  <AdvantageSection />*/}
      {/*</FullWidthSection>*/}

      {/*<div className="m150">*/}
      {/*  <FenceTypeSection />*/}
      {/*</div>*/}

      <FullWidthSection>
        <StocksSection />
      </FullWidthSection>

      <FullWidthSection>
        <MontageSection />
      </FullWidthSection>
    </>
  );
};

export default HomePage;
