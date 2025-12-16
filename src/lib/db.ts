import Database from 'better-sqlite3';
import type { Organism } from './types';

export const db = new Database('data/paleo.db');

export function getOrganisms(): Organism[] {
  return db
    .prepare('SELECT * FROM organisms')
    .all() as Organism[];
}

export function getOrganismBySlug(slug: string): Organism | undefined {
  return db
    .prepare('SELECT * FROM organisms WHERE slug = ?')
    .get(slug) as Organism | undefined;
}