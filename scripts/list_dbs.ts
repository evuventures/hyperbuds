import 'dotenv/config';
import mongoose from 'mongoose';

(async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('❌ MONGODB_URI not defined in .env');

  console.log('✅ Connecting to:', uri);

  // Create connection
 const conn = mongoose.createConnection(uri);
  await conn.asPromise();  // <-- wait until connected

  const admin = conn.db.admin();
  const dbs = await admin.listDatabases();
  console.log('✅ Databases:', dbs.databases.map(db => db.name));

  await conn.close();
})();
