import { Section } from '@/layout/Section'; // Zkontrolujte cestu

const WhyUs = () => ( 
  <Section
    id="nas-pristup" // ID pro navigaci (např. pokud přidáte "Náš přístup" do Navbaru)
    title={
      <>
        Náš <span className="text-secondary">přístup</span> k vašemu růstu {/* Zdůraznění "přístup" červenou barvou */}
      </>
    }
    description="V Narosel věříme v synergii byznysu a inovativních řešení. Náš model spojuje hluboké odborné znalosti s technologickou precizností pro skutečné výsledky."
  >
    <div className="mx-auto max-w-3xl space-y-8 text-center text-lg text-gray-700"> {/* Více mezery */}
      <p className="text-xl font-medium leading-relaxed">
        V dynamickém světě podnikání nestačí jen sledovat trendy. V Narosel chápeme, že klíčem k udržitelnému úspěchu je <strong>proaktivní řízení a chytrá automatizace</strong>. Proto propojujeme špičkovou expertízu ve třech klíčových oblastech.
      </p>
      <p className="text-xl font-medium leading-relaxed">
        Náš integrovaný přístup Vám zajistí:
      </p>
      <ul className="mx-auto max-w-xl list-inside list-disc text-left space-y-3">
        <li>
          <strong className="text-primary-700">Komplexní přehled:</strong> Všechny finanční, procesní a stavební údaje na jednom místě, pro rychlé a informované rozhodování.
        </li>
        <li>
          <strong className="text-primary-700">Procesní efektivitu:</strong> Automatizace rutinních úkolů uvolňuje kapacity vašich týmů pro strategické aktivity.
        </li>
        <li>
          <strong className="text-primary-700">Minimalizaci rizik:</strong> Precizní řízení nákladů a daňová optimalizace snižují finanční nejistotu.
        </li>
        <li>
          <strong className="text-primary-700">Dlouhodobou udržitelnost:</strong> Řešení navržená s ohledem na budoucí růst a adaptabilitu.
        </li>
      </ul>
      <p className="text-xl font-medium leading-relaxed">
        Jsme váš strategický partner, který vám pomůže nejen růst, ale i prosperovat v každé fázi vašeho podnikání. <br />
        <span className="font-bold text-secondary">S Narosel se můžete soustředit na to nejdůležitější – váš byznys.</span>
      </p>
    </div>
  </Section>
);

export { WhyUs }; // Exportujte komponentu pod novým názvem