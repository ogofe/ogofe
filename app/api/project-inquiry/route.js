import { Resend } from "resend"

const recipientEmail = process.env.PROJECT_INQUIRY_TO || "7thogofe@gmail.com"
const senderEmail = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>"

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function field(label, value) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #e7e5e4;">
        <p style="margin: 0 0 6px; color: #78716c; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">${label}</p>
        <p style="margin: 0; color: #17140f; font-size: 17px; line-height: 1.55; font-weight: 700;">${escapeHtml(value) || "Not provided"}</p>
      </td>
    </tr>
  `
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Missing RESEND_API_KEY environment variable." },
      { status: 500 },
    )
  }

  // instantiate the client at request time so the env var is read in runtime
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const {
      name = "",
      email = "",
      projectName = "",
      projectType = "",
      budget = "",
      timeline = "",
      details = "",
    } = body

    if (!name.trim() || !email.trim() || !projectName.trim()) {
      return Response.json(
        { error: "Name, email, and project idea are required." },
        { status: 400 },
      )
    }

    const html = `
      <div style="background: #f7f3ea; padding: 32px; font-family: Arial, Helvetica, sans-serif;">
        <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 14px; overflow: hidden;">
          <div style="background: #17140f; color: #ffffff; padding: 28px;">
            <p style="margin: 0 0 10px; color: #67e8f9; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;">New portfolio inquiry</p>
            <h1 style="margin: 0; font-size: 30px; line-height: 1.1;">${escapeHtml(name)} wants to start a project</h1>
          </div>
          <div style="padding: 26px 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${field("Name", name)}
              ${field("Email", email)}
              ${field("Project / idea", projectName)}
              ${field("Project type", projectType)}
              ${field("Budget", budget)}
              ${field("Timeline", timeline)}
              ${field("Extra details", details)}
            </table>
            <p style="margin: 26px 0 0; color: #78716c; font-size: 13px; line-height: 1.6;">
              Reply directly to this email to contact ${escapeHtml(name)}.
            </p>
          </div>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ ok: true, id: data?.id })
  } catch (error) {
    return Response.json(
      { error: "Unable to send project inquiry." },
      { status: 500 },
    )
  }
}
