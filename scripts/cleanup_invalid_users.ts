// /scripts/cleanup_invalid_users.ts

import 'dotenv/config';
import mongoose from 'mongoose';
import User from '@/lib/models/User'; // adjust path if needed

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

    // Find and delete users missing username or email
    const result = await User.deleteMany({
      $or: [
        { username: { $exists: false } },
        { email: { $exists: false } }
      ]
    });

    console.log(`✅ Deleted ${result.deletedCount} invalid users (missing username or email).`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to clean up users:', err);
    process.exit(1);
  }
})();
