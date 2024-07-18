import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Vinařství Plchut",
  description: "Podmínky ochrany osobních údajů",
};

const PrivacyPolicyPage = () => {
  return (
    <article className="my-6 px-[4%] lg:px-[7%] xl:px-[10%]">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Ochrana osobních údajů
      </h1>
      <h2 className="mt-2 font-semibold tracking-tight">
        Podmínky ochrany osobních údajů
      </h2>
      <ListNumber>I.</ListNumber>
      <ListTitle>Základní ustanovení</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
          parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti
          se zpracováním osobních údajů a o volném pohybu těchto údajů (dále
          jen: „GDPR”) je Petr Plchut IČ 70280959 se sídlem 696 11, Mutěnice
          Díly 1210 (dále jen: „správce“).
        </li>
        <li>
          Kontaktní údaje správce jsou: <br />
          adresa: stejná jako adresa sídla <br />
          email: vinarstviplchut@seznam.cz <br />
          telefon: +420 605 262 017
        </li>
        <li>
          Osobními údaji se rozumí veškeré informace o identifikované nebo
          identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je
          fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména
          odkazem na určitý identifikátor, například jméno, identifikační číslo,
          lokační údaje, síťový identifikátor nebo na jeden či více zvláštních
          prvků fyzické, fyziologické, genetické, psychické, ekonomické,
          kulturní nebo společenské identity této fyzické osoby.
        </li>
        <li>Správce nejmenoval pověřence pro ochranu osobních údajů.</li>
      </UnorderedList>
      <ListNumber>II.</ListNumber>
      <ListTitle>Zdroje a kategorie zpracovávaných osobních údajů</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní
          údaje, které správce získal na základě plnění Vaší objednávky.
        </li>
        <li>
          Správce zpracovává Vaše identifikační a kontaktní údaje a údaje
          nezbytné pro plnění smlouvy.
        </li>
      </UnorderedList>
      <ListNumber>III.</ListNumber>
      <ListTitle>Zákonný důvod a účel zpracování osobních údajů</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Zákonným důvodem zpracování osobních údajů je
          <UnorderedList variant="disc">
            <li>
              plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm. b)
              GDPR,
            </li>
            <li>
              oprávněný zájem správce na poskytování přímého marketingu (zejména
              pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1
              písm. f) GDPR,
            </li>
            <li>
              Váš souhlas se zpracováním pro účely poskytování přímého
              marketingu (zejména pro zasílání obchodních sdělení a newsletterů)
              podle čl. 6 odst. 1 písm. a) GDPR ve spojení s § 7 odst. 2 zákona
              č. 480/2004 Sb., o některých službách informační společnosti v
              případě, že nedošlo k objednávce zboží nebo služby.
            </li>
          </UnorderedList>
        </li>
        <li>
          Účelem zpracování osobních údajů je
          <UnorderedList variant="disc">
            <li>
              vyřízení Vaší objednávky a výkon práv a povinností vyplývajících
              ze smluvního vztahu mezi Vámi a správcem; při objednávce jsou
              vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení
              objednávky (jméno a adresa, kontakt), poskytnutí osobních údajů je
              nutným požadavkem pro uzavření a plnění smlouvy, bez poskytnutí
              osobních údajů není možné smlouvu uzavřít či jí ze strany správce
              plnit,
            </li>
            <li>
              zasílání obchodních sdělení a činění dalších marketingových
              aktivit.
            </li>
          </UnorderedList>
        </li>
        <li>
          Ze strany správce nedochází k automatickému invidiuálnímu rozhodování
          ve smyslu čl. 22 GDPR.
        </li>
      </UnorderedList>
      <ListNumber>IV.</ListNumber>
      <ListTitle>Doba uchovávání údajů</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Správce uchovává osobní údaje
          <UnorderedList variant="disc">
            <li>
              po dobu nezbytnou k výkonu práv a povinností vyplývajících ze
              smluvního vztahu mezi Vámi a správcem a uplatňování nároků z
              těchto smluvních vztahů (po dobu 15 let od ukončení smluvního
              vztahu).
            </li>
            <li>
              po dobu, než je odvolán souhlas se zpracováním osobních údajů pro
              účely marketingu, nejdéle 2. let, jsou-li osobní údaje
              zpracovávány na základě souhlasu.
            </li>
          </UnorderedList>
        </li>
        <li>
          Po uplynutí doby uchovávání osobních údajů správce osobní údaje
          vymaže.
        </li>
      </UnorderedList>
      <ListNumber>V.</ListNumber>
      <ListTitle>Příjemci osobních údajů (subdodavatelé správce)</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Příjemci osobních údajů jsou osoby
          <UnorderedList variant="disc">
            <li>
              podílející se na dodání zboží / služeb / realizaci plateb na
              základě smlouvy,
            </li>
            <li>zajišťující marketingové služby.</li>
          </UnorderedList>
        </li>
        <li>
          Správce nemá v úmyslu předat osobní údaje do třetí země (do země mimo
          EU).
        </li>
      </UnorderedList>
      <ListNumber>VI.</ListNumber>
      <ListTitle>Vaše práva</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Za podmínek stanovených v GDPR máte
          <UnorderedList variant="disc">
            <li>právo na přístup ke svým osobním údajům dle čl. 15 GDPR,</li>
            <li>
              právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení
              zpracování dle čl. 18 GDPR.
            </li>
            <li>právo na výmaz osobních údajů dle čl. 17 GDPR.</li>
            <li>právo vznést námitku proti zpracování dle čl. 21 GDPR a</li>
            <li>právo na přenositelnost údajů dle čl. 20 GDPR.</li>
            <li>
              právo odvolat souhlas se zpracováním písemně nebo elektronicky na
              adresu nebo email správce uvedený v čl. III těchto podmínek.
            </li>
          </UnorderedList>
        </li>
        <li>
          Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v
          případě, že se domníváte, že bylo porušeno Vaše právo na ochranu
          osobních údajů.
        </li>
      </UnorderedList>
      <ListNumber>VII.</ListNumber>
      <ListTitle>Podmínky zabezpečení osobních údajů</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Správce prohlašuje, že přijal veškerá vhodná technická a organizační
          opatření k zabezpečení osobních údajů.
        </li>
        <li>
          Správce přijal technická opatření k zabezpečení datových úložišť a
          úložišť osobních údajů v listinné podobě, zejména hesly, použitím
          antivirového programu.
        </li>
        <li>
          Správce prohlašuje, že k osobním údajům mají přístup pouze jím
          pověřené osoby.
        </li>
      </UnorderedList>
      <ListNumber>VIII.</ListNumber>
      <ListTitle>Závěrečná ustanovení</ListTitle>
      <UnorderedList variant="decimal">
        <li>
          Odesláním objednávky z internetového objednávkového formuláře
          potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a
          že je v celém rozsahu přijímáte.
        </li>
        <li>
          S těmito podmínkami souhlasíte zaškrtnutím souhlasu prostřednictvím
          internetového formuláře. Zaškrtnutím souhlasu potvrzujete, že jste
          seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu
          přijímáte.
        </li>
        <li>
          Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany
          osobních údajů zveřejní na svých internetových stránkách a zároveň Vám
          zašle novou verzi těchto podmínek Vaši e-mailovou adresu, kterou jste
          správci poskytl/a.
        </li>
      </UnorderedList>
      <h2 className="mt-6 font-semibold tracking-tight">
        Tyto podmínky nabývají účinnosti dnem 25. 5. 2018. <br />
        Vinařství Plchut <br />
        IČ: 70280959 | sídlem: Díly 1210, Mutěnice 696 11 <br />
        www.vinarstviplchut.cz | vinarstviplchut@seznam.cz
      </h2>
    </article>
  );
};

const ListNumber = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mt-6 text-2xl font-semibold tracking-tight">{children}</h3>
  );
};

const ListTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="border-b text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

const UnorderedList = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "disc" | "decimal";
}) => {
  if (variant === "decimal") {
    return <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ul>;
  } else {
    return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
  }
};

export default PrivacyPolicyPage;
