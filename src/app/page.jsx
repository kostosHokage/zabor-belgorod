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
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

const HomePage = () => {
  return (
    <>
      <FadeInWhenVisible>
        <div style={{ marginTop: 60 }} className="m150">
          <MainSection />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FullWidthSection>
          <AboutSection />
        </FullWidthSection>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="m150">
          <FencesSection
            title="Заборы и ограждения для частного дома"
            description="Выбор ограждения для частного дома – важный этап строительства, который
        влияет на безопасность, приватность и внешний вид участка. Какой забор
        выбрать? Все зависит от ваших потребностей и особенностей территории."
          />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FullWidthSection>
          <AdvantageSection />
        </FullWidthSection>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="m150">
          <FenceTypeSection />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FullWidthSection>
          <StocksSection />
        </FullWidthSection>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="m150">
          <ReviewsSection />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FullWidthSection>
          <MontageSection />
        </FullWidthSection>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="m150">
          <FormSection />
        </div>
      </FadeInWhenVisible>
    </>
  );
};

export default HomePage;
