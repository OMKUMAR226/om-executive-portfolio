import HeroSection from '@/components/home/HeroSection';
import PainSection from '@/components/home/PainSection';
import MarqueeTicker from '@/components/home/MarqueeTicker';
import CapabilitiesGrid from '@/components/home/CapabilitiesGrid';
import DisruptiveAdvantage from '@/components/home/DisruptiveAdvantage';
import MetricsMarquee from '@/components/home/MetricsMarquee';
import EcosystemGraph from '@/components/home/EcosystemGraph';
import CaseStudyPreviews from '@/components/home/CaseStudyPreviews';
import WhoThisIsFor from '@/components/home/WhoThisIsFor';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Om Kumar Garg — India Market Lead & Ecosystem Architect',
  description:
    'Om Kumar Garg: India\'s embedded operations partner. 30+ agencies, 6,000+ developer community, $8,100+ events managed. Open to select partnerships for foreign companies entering India.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <MarqueeTicker />
      <CapabilitiesGrid />
      <DisruptiveAdvantage />
      <MetricsMarquee />
      <EcosystemGraph />
      <CaseStudyPreviews />
      <WhoThisIsFor />
      <FinalCTA />
    </>
  );
}
