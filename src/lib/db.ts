import mongoose from 'mongoose';
import dns from 'node:dns';              // ✅ Import DNS module
import { Resolver } from 'node:dns';

const MONGODB_URI = process.env.MONGODB_URI!;
let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = (global as any).mongoose || { conn: null, promise: null };
if (!(global as any).mongoose) (global as any).mongoose = cached;

// Force DNS to prefer IPv4 (helps with SRV lookups on some setups)
dns.setDefaultResultOrder?.('ipv4first');  // Node.js v18+ supports this :contentReference[oaicite:1]{index=1}

const resolver = new Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4']);

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    mongoose.set('strictQuery', true);
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
