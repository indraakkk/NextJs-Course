import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Failed to fetch meals data');
  return db.prepare('SELECT * from meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * from meals WHERE slug = ?').get(slug);
}
