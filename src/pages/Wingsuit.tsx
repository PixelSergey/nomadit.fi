import Navigation from "@/components/Navigation";

interface RequirementsTableProps {
  title: string;
  rows: { label: string; value: string }[];
}

const RequirementsTable = ({ title, rows }: RequirementsTableProps) => (
  <div>
    <h4 className="text-2xl font-bold text-primary mb-4 text-center">{title}</h4>
    <div className="space-y-4 text-xl">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex flex-row flex-wrap justify-between items-center gap-x-4 ${
            i < rows.length - 1 ? "border-b border-border/50 pb-2" : ""
          }`}
        >
          <span className="text-foreground font-bold">{r.label}</span>
          <span className="text-muted-foreground font-semibold">{r.value}</span>
        </div>
      ))}
    </div>
  </div>
);

interface WingsuitModelProps {
  name: string;
  tables: RequirementsTableProps[];
}

const WingsuitModel = ({ name, tables }: WingsuitModelProps) => (
  <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border space-y-8">
    <h3 className="text-3xl font-bold text-primary text-center">{name}</h3>
    <div className="mx-auto w-[70%] aspect-video rounded-lg bg-background/40 border border-dashed border-border/60 flex items-center justify-center text-muted-foreground">
      Kuva tulossa
    </div>
    {tables.map((t) => (
      <RequirementsTable key={t.title} {...t} />
    ))}
  </section>
);


const Wingsuit = () => {
  const models: WingsuitModelProps[] = [
    {
      name: "FSN Turvallista Lentoa",
      tables: [
        {
          title: "Esivaatimukset",
          rows: [
            { label: "Hyppyvaatimus", value: "200 hyppyä" },
            { label: "Apuvarjon yhdyspunos", value: "pidennetty" },
            { label: "Siipikuorma", value: "alle 1.0" },
          ],
        },
      ],
    },
    {
      name: "FSN First Flight Friendly STC",
      tables: [
        {
          title: "Vaatimukset ensimmäisille lennoille",
          rows: [
            { label: "Hyppyvaatimus", value: "100 hyppyä" },
            { label: "Apuvarjon yhdyspunos", value: "pidennetty" },
            { label: "Minimi päävarjon koko", value: "220" },
            { label: "Siipikuorma", value: "alle 1.0" },
          ],
        },
        {
          title: "Vaatimukset ensilennon jälkeen",
          rows: [
            { label: "Hyppyvaatimus", value: "100 hyppyä" },
            { label: "Lisävaatimus", value: "3 hyppyä FSN FFF-liitopuvulla" },
            { label: "Apuvarjon yhdyspunos", value: "pidennetty" },
            { label: "Minimi päävarjon koko", value: "150" },
            { label: "Siipikuorma", value: "alle 1.1" },
          ],
        },
      ],
    },
    {
      name: "FSN Progression Suit STC",
      tables: [
        {
          title: "Vaatimukset",
          rows: [
            { label: "Hyppyvaatimus", value: "100 hyppyä" },
            { label: "Lisävaatimus", value: "5 hyppyä liitopuvuilla" },
            { label: "Apuvarjon yhdyspunos", value: "pidennetty" },
            { label: "Minimi päävarjon koko", value: "150" },
            { label: "Siipikuorma", value: "alle 1.1" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
              Wingsuit
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FSN:llä kehitämme, valmistamme, ja tyyppihyväksymme liitopukuja. Teemme myös liitopukujen muuntotöitä (Wingsuit STC) ja teemme vaarallisista liitopuvuista turvallisempia ja aloittelijaystävällisempiä. Kalustomme, koulutusohjelmamme ja kouluttajamme tarjoavat liitopukuhyppääjille turvallisen ja tehokkaan aloituksen sekä progression lajin parissa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neon-green text-center">Mallit</h2>
              {models.map((m) => (
                <WingsuitModel key={m.name} {...m} />
              ))}
              <p className="text-muted-foreground">
                FSN FFF sekä FSN PS ovat tyyppihyväksyttyjä muunnostöitä olemassa olevista liitopuvuista. FSN muuntaa liitopukuja FFF ja PS liitopuvuiksi vähentämällä liitopukujen paineistusta ja näin tekemällä niistä turvallisempia. FSN FFF ja FSN PS ovat siis uusia liitopukumalleja jonka valmistaja on FSN.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neon-green text-center">Kouluttajat</h2>
              <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border space-y-6">
                <p className="text-muted-foreground text-lg">
                  Liitopukuvalmistajana FSN kouluttaa ja hyväksyy liitopukukouluttajia. Kouluttajilla on oikeus kouluttaa FSN-liitopukujen käyttöä sekä kouluttaa FSN-liitopuvuilla tehtyjä First Flight -kursseja. FSN WS-kouluttaja myöntää oppilailleen koulutustodistuksen onnistuneen teoria- sekä käytännön koulutuksen ja taidonnäyttöjen jälkeen.
                </p>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Ota yhteys kouluttajiin</h3>
                  <p className="text-muted-foreground text-lg">
                    Jos haluat ottaa yhteyttä FSN WS-kouluttajiin, lähetä sähköposti osoitteeseen{" "}
                    <a href="mailto:wingsuit@nomadit.fi" className="text-neon-green hover:text-neon-green/80 underline transition-colors">
                      wingsuit@nomadit.fi
                    </a>
                  </p>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wingsuit;
