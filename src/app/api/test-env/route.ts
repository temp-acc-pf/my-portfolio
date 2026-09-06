import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return NextResponse.json({
    url,
    urlStartsWithHttps: url?.startsWith("https://"),
    urlEndsWithSupabase: url?.includes(".supabase.co"),
    anonKeyExists: !!key,
    anonKeyLength: key?.length || 0,
    anonKeyPrefix: key?.slice(0, 15) || "missing",
  });
}
