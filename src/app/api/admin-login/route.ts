import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { passphrase } = body;

    if (!passphrase) {
      return NextResponse.json(
        { error: "Passphrase required" },
        { status: 400 }
      );
    }

    if (passphrase === process.env.ADMIN_PASS) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Incorrect passphrase" },
        { status: 401 }
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
