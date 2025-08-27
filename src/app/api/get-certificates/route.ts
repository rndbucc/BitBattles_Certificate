import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Certificate } from "@/lib/Certificate";

export async function GET() {
  try {
    await dbConnect();

    const certificates = await Certificate.find().lean();

    return NextResponse.json(certificates);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch certificates" },
      { status: 500 }
    );
  }
}
