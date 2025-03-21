import { NextResponse } from "next/server";
import { jobPostSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = jobPostSchema.parse(body);
    
    // Mock database call
    console.log("Creating job:", validated);
    
    return NextResponse.json({
      success: true,
      jobId: Date.now().toString()
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid job data" },
      { status: 400 }
    );
  }
}