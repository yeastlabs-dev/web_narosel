// src/components/Logo.js

import Link from 'next/link';
import Image from 'next/image'; // Důležité: Importujte Next.js Image komponentu

type ILogoProps = {
  xl?: boolean; // Zda je logo velké (např. v Headeru)
};

const Logo = (props: ILogoProps) => {
  // Velikosti pro logo - můžete si je upravit podle potřeby
  // Toto je jen příklad, budete muset doladit podle skutečného loga
  const width = props.xl ? 160 : 120; // Příklad šířky pro XL a základní velikost
  const height = props.xl ? 80 : 60; // Příklad výšky (udržujte poměr stran loga)

  return (
    // Celé logo bude odkazem na domovskou stránku
    <Link href="/" className="inline-block relative"> {/* Added inline-block and relative for styling */}
      {/* Použití Next.js Image komponenty pro optimalizaci loga */}
      <Image
        src="/assets/images/Narosel_logo.png" // <--- Ujistěte se, že cesta k vašemu logu je správná
        alt="Narosel Logo"
        width={width}
        height={height}
        className="h-auto" // Zajišťuje, že se výška automaticky přizpůsobí šířce při zachování poměru stran
      />
    </Link>
  );
};

export { Logo };