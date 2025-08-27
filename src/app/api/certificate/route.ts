import { findCertificateById } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

// Submit ID handler / Get Certificate from Id
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.recipientId) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // Find certificate in JSON database
  const recipientData = findCertificateById(body.recipientId);

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
}
