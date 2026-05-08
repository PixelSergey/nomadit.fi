import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface RequirementsTableProps {
  title: string;
  rows: { label: string; value: string }[];
}

const RequirementsTable = ({ title, rows }: RequirementsTableProps) => (
  <div className="space-y-2">
    <h4 className="text-lg font-semibold text-neon-green">{title}</h4>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vaatimus</TableHead>
          <TableHead>Arvo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.label}>
            <TableCell className="font-medium">{r.label}</TableCell>
            <TableCell>{r.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

interface WingsuitModelProps {
  name: string;
  tables: RequirementsTableProps[];
}

const WingsuitModel = ({ name, tables }: WingsuitModelProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-foreground">{name}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="aspect-video w-full rounded-lg bg-background/40 border border-dashed border-border/60 flex items-center justify-center text-muted-foreground">
        Kuva tulossa
      </div>
      {tables.map((t) => (
        <RequirementsTable key={t.title} {...t} />
      ))}
    </CardContent>
  </Card>
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
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6 space-y-6">
                  <p className="text-muted-foreground">
                    Liitopukuvalmistajana FSN kouluttaa ja hyväksyy liitopukukouluttajia. Kouluttajilla on oikeus kouluttaa FSN-liitopukujen käyttöä sekä kouluttaa FSN-liitopuvuilla tehtyjä First Flight -kursseja. FSN WS-kouluttaja myöntää oppilailleen koulutustodistuksen onnistuneen teoria- sekä käytännön koulutuksen ja taidonnäyttöjen jälkeen.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Ota yhteys kouluttajiin</h3>
                    <p className="text-muted-foreground">
                      Jos haluat ottaa yhteyttä FSN WS-kouluttajiin, lähetä sähköposti osoitteeseen{" "}
                      <a href="mailto:wingsuit@nomadit.fi" className="text-neon-green hover:text-neon-green/80 underline transition-colors">
                        wingsuit@nomadit.fi
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wingsuit;
