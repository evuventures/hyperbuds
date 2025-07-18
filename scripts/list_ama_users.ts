// scripts/list_ama_users.ts
import 'dotenv/config';
import mongoose from 'mongoose';
import User from '@/lib/models/User'; // adjust import to your actual User model path

(async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('❌ MONGODB_URI not defined in .env');

  await mongoose.connect(uri);
  console.log('✅ Connected');

  const users = await User.find({ username: /^ama_/ }).lean();
  console.log('✅ Users with username starting ama_:');
  users.forEach(u => console.log(`- username: ${u.username}, email: ${u.email}`));

  await mongoose.disconnect();
})();
