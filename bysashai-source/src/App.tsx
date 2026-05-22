import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';
import { getContent } from './content';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Anatomy from './sections/Anatomy';
import Tiers from './sections/Tiers';
import Footer from './sections/Footer';
import WhatsAppButton from './sections/WhatsAppButton';
import ParchmentUnroll from './effects/ParchmentUnroll';

function AppContent() {
  const { language, dir } = useLanguage();
  const content = getContent(language);

  useLenis();

  useEffect(() => {
    document.title = content.siteTitle;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = content.siteDescription;
  }, [language, dir, content.siteTitle, content.siteDescription]);

  return (
    <>
      <Navigation />
      <ParchmentUnroll />
      <main>
        <Hero />
        <Manifesto />
        <Anatomy />
        <Tiers />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
