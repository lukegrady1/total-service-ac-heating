import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

// TODO: Connect to GoHighLevel CRM or Mailgun for production

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.string().min(1),
  zip: z.string().min(5),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const lead = {
      ...data,
      submittedAt: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || "unknown",
    };

    // Log to console (placeholder)
    console.log("[NEW LEAD]", lead);

    // Save to JSON file (placeholder storage)
    const leadsDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }
    const leadsFile = path.join(leadsDir, "leads.json");
    const existing = fs.existsSync(leadsFile)
      ? JSON.parse(fs.readFileSync(leadsFile, "utf-8"))
      : [];
    existing.push(lead);
    fs.writeFileSync(leadsFile, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true, message: "Lead received" }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Validation failed" }, { status: 400 });
    }
    console.error("[LEADS API ERROR]", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
