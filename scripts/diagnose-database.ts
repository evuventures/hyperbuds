// /scripts/diagnose-database.ts
import 'dotenv/config';
import mongoose from 'mongoose';
import User from '@/lib/models/User'; // adjust path if needed

(async () => {
  console.log('🔍 Starting database diagnosis...');

  console.log('✅ process.env.MONGODB_URI:', process.env.MONGODB_URI);

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ Missing MONGODB_URI in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to DB');

    // 1. Count users
    const count = await User.countDocuments();
    console.log(`📊 Total users: ${count}`);

    // 2. List all users
    const users = await User.find({}).lean();
    console.log('\n📋 Users:');
    users.forEach((u, idx) => {
      console.log(`${idx + 1}. username: ${u.username}, email: ${u.email}, created: ${u.createdAt}`);
    });

    // 3. Show indexes
    const indexes = await User.collection.getIndexes();
    console.log('\n🔍 Indexes:', indexes);

    // 4. Validate test user
    console.log('\n🧪 Test user validation:');
    const testUser = new User({
      firstName: 'Test',
      lastName: 'User',
      username: 'testuser123',
      email: 'test123@example.com',
      phone: '+1234567890',
      password: 'TestPassword123!'
    });
    const validation = testUser.validateSync();
    if (validation) {
      console.log('❌ Validation errors:', validation.errors);
    } else {
      console.log('✅ Test user validates successfully');
    }

    console.log('\n✅ Diagnosis complete!');
  } catch (err) {
    console.error('❌ Error during diagnosis:', err);
  } finally {
    await mongoose.disconnect();
  }
})();
