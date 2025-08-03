// src/components/Banner.js

import Link from 'next/link'; // Import pro Next.js Link komponentu
import { Button } from '../button/Button'; // Import pro vaši Button komponentu
import { CTABanner } from '../cta/CTABanner'; // Import pro CTABanner komponentu
import { Section } from '../layout/Section'; // Import pro Section komponentu

const Banner = () => (
  // Sekce, která obaluje celý banner, s vertikálním paddingem
  <Section 
    id="kontakt" // ID pro navigaci na tuto sekci
    yPadding="py-20">
    {/* CTABanner komponenta, která vykresluje titulek, podtitulek a tlačítko */}
    <CTABanner
      // Titulek CTA banneru
      title={
        <>
          Připraveni na další krok? <span className="text-secondary">Zjednodušte</span> své podnikání!
        </>
      }
      // Podtitulek CTA banneru
      subtitle={
        <>
          Neztrácejte čas složitou administrací. Pomůžeme vám optimalizovat finance, automatizovat procesy a efektivně řídit stavební projekty.
        </>
      }
      // Tlačítko pro CTA banner, s mailto odkazem
      button={
        // Link komponenta pro navigaci na mailto adresu
        // className="no-underline" se snaží odstranit podtržení, které Link občas přidá
        <Link href="mailto:info@narosel.cz" className="no-underline">
          {/* Button komponenta s Tailwind CSS třídami pro styling */}
          <Button xl className="bg-secondary hover:bg-secondary-700 text-white font-bold py-3 px-6 rounded-lg shadow-md">
            Domluvte si konzultaci
          </Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };