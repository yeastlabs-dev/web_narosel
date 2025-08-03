// src/components/OurClients.js (Přejmenujte si původní soubor, např. z Technologies.js)

import { Section } from '@/layout/Section'; // Zkontrolujte cestu
// Pokud máte komponentu pro obrázek klienta, importujte ji zde (např. ClientLogo.js)
// import ClientLogo from './ClientLogo';

const Sponsors = () => (
  <Section
    id="nasi-klienti" // ID pro navigaci, pokud chcete mít odkaz "Klienti" v Navbaru
    title={
      <>
        Naši <span className="text-secondary">klienti</span> {/* Zvýraznění "klienti" červenou barvou */}
      </>
    }
    description="Spolupracujeme s předními společnostmi v různých odvětvích. Důvěřují nám, protože jim přinášíme měřitelné výsledky a efektivní řešení."
  >
    <div className="mx-auto max-w-4xl mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 items-center justify-items-center">
      {/* Zde budou loga vašich klientů.
          Nahraďte placeholder obrázky a alt texty reálnými daty.
          Ideálně použijte Next.js Image komponentu pro optimalizaci.
      */}
      <img src="/assets/images/taf_logo.png" alt="TAF ESTATE" className="max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
      <img src="/assets/images/manholding_logo.png" alt="MAN HOLDING" className="max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
      <img src="/assets/images/platinum_logo.png" alt="Platinum" className="max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
      <img src="/assets/images/baby_direkt_logo.png" alt="Baby Direkt" className="max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
      <img src="/assets/images/gordic_logo.png" alt="Gordic" className="max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
      <img src="/assets/images/chemipro_logo.png" alt="Chemipro" className="max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
      {/* Přidejte další loga podle potřeby */}
    </div>

    <div className="mt-12 text-center text-lg text-gray-700">
      <p>
        Chcete se dozvědět více o našich úspěšných projektech? <br />
        <span className="font-bold text-primary">Kontaktujte nás pro případové studie!</span>
      </p>
    </div>
  </Section>
);

export { Sponsors }; // Nezapomeňte na správný export