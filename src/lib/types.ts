export interface Organism {
  id: number;
  name: string;
  slug: string;
  kingdom: string | null;
  clade: string | null;
  era: string | null;
  period: string | null;
  diet: string | null;
  description: string | null;
}