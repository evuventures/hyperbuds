export async function GET() {
  console.log("🔥 FIREBASE_PROJECT_ID:", process.env.FIREBASE_PROJECT_ID);
  return new Response("ok");
}
