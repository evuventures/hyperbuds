// /scripts/list_users.ts

import 'dotenv/config'; // load env first
import mongoose from 'mongoose';
import User from '@/lib/models/User'; // adjust path if your User model is elsewhere

(async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ Missing MONGODB_URI in .env');
    process.exit(1);
  }

  console.log('✅ Connecting to:', uri);

  try {
    await mongoose.connect(uri);
    await User.init();

    // Fetch all users, full fields
    const users = await User.find({}).lean();

    console.log(`✅ Users in DB (total: ${users.length}):`);
    users.forEach(u => {
      console.log(`- username: ${u.username}, email: ${u.email}, created: ${u.createdAt}`);
    });

    // Optional: print full raw objects for debug
    console.log('\n✅ Raw user documents:');
    console.dir(users, { depth: null });

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to list users:', err);
    process.exit(1);
  }
})();
