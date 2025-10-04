import Hero from '@/components/Hero';
import WannaPlaySection from '@/components/WannaPlaySection';
import TrashUtilitySection from '@/components/TrashUtilitySection';
import JoinTrashSection from '@/components/JoinTrashSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <main>
        <Hero />
        <WannaPlaySection />
        <TrashUtilitySection />
        <JoinTrashSection />
      </main>
    </div>
  );
};

export default Index;
