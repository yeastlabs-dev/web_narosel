import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode; // <--- Změněno z 'string' na 'ReactNode'
  description?: string; // Může zůstat string, pokud v něm nebudete mít JSX
  yPadding?: string;
  children: ReactNode;
  id?: string; // Přidal jsem id prop, aby ho bylo možné předávat z komponent, kde Section používáte
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id} // <--- Zde se použije ID
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          // Nyní props.title může být JSX, takže ho jen vykreslíme.
          // Styly na h2 zůstanou, ale pokud props.title už obsahuje h2,
          // pak by se h2 duplikovalo.
          // Nejlepší je, pokud Section komponenta obaluje to, co jí předáme, sémantickým tagem.
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };