import About from '@/components/home/About/About';
import Hero from '@/components/home/Hero/Hero';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <Hero />
        <About />
      </main>
    </div>
  );
}
