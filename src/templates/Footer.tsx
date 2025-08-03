// src/components/Footer.js

import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter'; // Zkontrolujte cestu
import { Section } from '../layout/Section';
import { Logo } from './Logo'; // Zkontrolujte cestu k vaší Logo komponentě

const Footer = () => (
  <Background color="bg-gray-100"> {/* Pozadí hlavní části patičky */}
    <Section yPadding="py-10"> {/* Menší vertikální padding */}
      <CenteredFooter
        logo={<Logo />} // Používá vaši Logo komponentu
        iconList={null} // <--- Odstraníme ikony, takže necháme null nebo prázdný fragment
      >
        {/* TEXTOVÉ ODKAZY: Upravíme tak, aby směřovaly na ID sekcí */}
        <li className="mr-6">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors duration-200">Home</Link>
        </li>
        <li className="mr-6">
          <Link href="#nas-pristup" scroll={false} className="text-gray-700 hover:text-primary transition-colors duration-200">Náš přístup</Link>
        </li>
        <li className="mr-6">
          <Link href="#nase-firmy" scroll={false} className="text-gray-700 hover:text-primary transition-colors duration-200">Naše firmy</Link>
        </li>
        <li className="mr-6">
          <Link href="#nasi-klienti" scroll={false} className="text-gray-700 hover:text-primary transition-colors duration-200">Naši klienti</Link>
        </li>
        <li className="mr-6">
          <Link href="#kontakt" scroll={false} className="text-gray-700 hover:text-primary transition-colors duration-200">Kontakt</Link>
        </li>
        {/* Případně další odkazy, např. GDPR/Zásady ochrany osobních údajů */}
        {/* <li>
          <Link href="/gdpr" className="text-gray-700 hover:text-primary transition-colors duration-200">Zásady ochrany osobních údajů</Link>
        </li> */}
      </CenteredFooter>
    </Section>
    {/* Nová sekce pro copyright a zmínku o Yeastlabs */}
    <div className="bg-primary-900 text-center text-white text-sm py-4">
      © {new Date().getFullYear()} Narosel.cz. Všechna práva vyhrazena. | Vytvořeno s pomocí <span className="font-semibold text-secondary">Yeastlabs</span>.
    </div>
  </Background>
);

export { Footer };