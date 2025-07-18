// /scripts/list_users.ts

import { connectDB } from '@/lib/db';
import User from '@/lib/models/User';

(async () => {
  try {
    await connectDB();
    await User.init();

    const users = await User.find({}, 'username email createdAt').lean();

    console.log('✅ Users in DB:');
    users.forEach(u => {
      console.log(`- username: ${u.username}, email: ${u.email}, created: ${u.createdAt}`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to list users:', err);
    process.exit(1);
  }
})();
