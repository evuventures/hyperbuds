// scripts/list_collections.ts

import 'dotenv/config';
import mongoose from 'mongoose';

(async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('❌ MONGODB_URI not defined in .env');

  console.log('✅ Connecting to:', uri);

  // Connect to your database (hyperbuds)
  const conn = mongoose.createConnection(uri);
  await conn.asPromise();

  const collections = await conn.db.listCollections().toArray();

  console.log('✅ Collections in DB:', conn.name);
  collections.forEach(c => console.log(`- ${c.name}`));

  await conn.close();
})();
