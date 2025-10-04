import Hero from '@/components/Hero';
import WannaPlaySection from '@/components/WannaPlaySection';
import TrashUtilitySection from '@/components/TrashUtilitySection';
import JoinTrashSection from '@/components/JoinTrashSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <main className="[&>section]:m-0 [&>section]:p-0">
        <Hero />
        <WannaPlaySection />
        <TrashUtilitySection />
        <JoinTrashSection />
      </main>
    </div>
  );
};

export default Index;
