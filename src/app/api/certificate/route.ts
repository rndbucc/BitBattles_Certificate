import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Certificate } from "@/lib/Certificate";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.recipientId) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await dbConnect();

    const recipientData = await Certificate.findOne({
      "Recipient ID": body.recipientId,
    }).lean();

    if (recipientData) {
      return NextResponse.redirect(
        new URL(`/${recipientData["Recipient ID"]}`, request.nextUrl)
      );
    } else {
      return NextResponse.json(
        { error: "No Recipient under this ID found!" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("Error in POST /api/find-certificate:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
