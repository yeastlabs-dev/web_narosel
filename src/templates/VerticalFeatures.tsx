import { VerticalFeatureRow } from '../feature/VerticalFeatureRow'; // Zkontrolujte cestu
import { Section } from '../layout/Section'; // Zkontrolujte cestu

const VerticalFeatures = () => (
  // Důležité: Přidáme ID pro tuto sekci, aby bylo možné na ni odkazovat z navigace.
  // Odkaz "Naše firmy" z Navbaru by sem měl směřovat.
  <Section
    id="nase-firmy" // ID pro navigaci (např. z Navbaru)
    title={
      <>
        Naše <span className="text-secondary">firmy</span> {/* Zvýraznění "firmy" červenou barvou */}
      </>
    }
    description="Tři oblasti specializací pod značkou Narosel: účetnictví, procesní automatizace a stavební řízení."
  >
    <VerticalFeatureRow
      title={
        <>
          <span className="text-primary-700">NAROSEL</span>-ACCOUNTING {/* "Narosel" tmavě modrou */}
        </>
      }
      description="Účetnictví & poradenství: Automatizované účetnictví, daňová optimalizace a strategické finanční poradenství pro firmy, co chtějí mít čísla pod kontrolou."
      image="/assets/images/NRSL_ACC_logo.png" // Změna názvu obrázku pro specifičnost
      imageAlt="Narosel Accounting Logo"
    />
    <VerticalFeatureRow
      title={
        <>
          <span className="text-primary-700">NAROSEL</span> OPTI-FLOW
        </>
      }
      description="Procesní automatizace, analytika, interim management a konzultace: Zrychlíme vaše interní toky, automatizujeme rutiny, dodáme datovou transparenci a interim leadership tam, kde to dává smysl."
      image="/assets/images/NRSL_OF_logo.png" // Změna názvu obrázku pro specifičnost
      imageAlt="Narosel Opti-Flow Logo"
      reverse
    />
    <VerticalFeatureRow
      title={
        <>
          <span className="text-primary-700">NAROSEL</span> CONSTRUCTION
        </>
      }
      description="Audity nemovitosti, rozpočtování staveb a cost & project management: Od auditu nemovitostí přes přesné rozpočtování až po efektivní řízení nákladů a projektů stavebních záměrů."
      image="/assets/images/NRSL_CON_logo.png" // Změna názvu obrázku pro specifičnost
      imageAlt="Narosel Construction Logo"
    />
  </Section>
);

export { VerticalFeatures };