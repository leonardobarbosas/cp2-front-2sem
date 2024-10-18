import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=pS9w5VDqdcrWrB7P3JFbgsyPsUrf45AEy3dQqgGX"
  );
  return NextResponse.json(await response.json());
}
