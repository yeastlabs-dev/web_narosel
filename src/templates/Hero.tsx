// src/components/Hero.js

import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}> {/* Logo už má odkaz na Home "/" */}
        {/* Nový odkaz na sekci "Náš přístup" */}
        <li className="mr-6">
          <Link href="#nas-pristup" scroll={false} className="text-gray-700 hover:text-primary-600 font-medium">
            Náš přístup
          </Link>
        </li>
        {/* Odkaz na sekci "Naše firmy" */}
        <li className="mr-6">
          <Link href="#nase-firmy" scroll={false} className="text-gray-700 hover:text-primary-600 font-medium">
            Naše firmy
          </Link>
        </li>
        {/* Nový odkaz na sekci "Naši klienti" */}
        <li className="mr-6">
          <Link href="#nasi-klienti" scroll={false} className="text-gray-700 hover:text-primary-600 font-medium">
            Naši klienti
          </Link>
        </li>
        {/* Odkaz na sekci "Kontakt" */}
        <li>
          <Link href="#kontakt" scroll={false} className="text-gray-700 hover:text-primary-600 font-medium">
            Kontakt
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        // HLAVNÍ NADPIS - Nyní je to přímo h1 element s jeho styly
        title={
          <h1 className="text-5xl font-bold leading-tight text-primary sm:text-6xl md:text-7xl">
            Narosel: <span className="text-secondary">Inteligentní řízení.</span> <br className="hidden sm:block"/>
            Váš klid. Váš růst.
          </h1>
        }
        // PODNADPIS (SUBTITLE) - Nyní je to přímo h2 element s jeho styly
        subtitle={
          <h2 className="mt-6 text-xl font-normal text-gray-700 sm:text-2xl md:text-3xl">
            Komplexní řešení pro <span className="font-semibold">finance</span>, <span className="font-semibold">procesy</span> a <span className="font-semibold">stavební projekty</span> pod jednou střechou.
          </h2>
        }
        // POPIS - Dlouhý popis, rozdělený do odstavců
        description={
          <>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl md:text-2xl">
              Vyberte si přesně to, co váš podnik potřebuje – od <strong>účetnictví</strong> a <strong>procesní optimalizace</strong> po <strong>stavební kontrolu</strong>.
            </p>
            <p className="mt-2 text-lg text-gray-600 sm:text-xl md:text-2xl">
              My to zjednodušíme, vy se můžete plně soustředit na <strong>růst</strong>.
            </p>
          </>
        }
        // TLAČÍTKO - Toto je v pořádku, Button komponenta je ReactNode
        button={
          <Link href="#kontakt" scroll={false}>
            <Button xl className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md">
              Domluvte si konzultaci
            </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };