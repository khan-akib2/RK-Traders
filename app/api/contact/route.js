import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, phone, email, productRequirement, message } = await request.json();

    // Validate inputs
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone Number are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderName = process.env.BREVO_SENDER_NAME || "RK Traders Website";
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "rktraders488@gmail.com";
    const receiverEmail = process.env.BREVO_RECEIVER_EMAIL || "rktraders488@gmail.com";

    // Extract origin dynamically from request headers to construct response links
    const origin = request.headers.get("origin") || request.nextUrl?.origin || `http://${request.headers.get("host")}`;

    // Construct query parameters for the admin actions dashboard page
    const queryParams = new URLSearchParams({
      name: name || "",
      email: email || "",
      phone: phone || "",
      product: productRequirement || "",
      message: message || ""
    });

    const confirmUrl = `${origin}/respond?status=confirmed&${queryParams.toString()}`;
    const delayedUrl = `${origin}/respond?status=delayed&${queryParams.toString()}`;
    const declineUrl = `${origin}/respond?status=declined&${queryParams.toString()}`;

    // Format WhatsApp link (convert Indian local numbers to country code format)
    let cleanPhone = (phone || "").replace(/\D/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith("0")) {
      cleanPhone = "91" + cleanPhone.slice(1);
    }
    const whatsappMsg = encodeURIComponent(
      `Hello ${name}, thank you for contacting RK Traders. Regarding your B2B inquiry for ${productRequirement}...`
    );
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMsg}`;

    // Format HTML Email Content
    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid rgba(139, 107, 62, 0.2); background-color: #F8F6F2; color: #2B2B2B;">
        <div style="text-align: center; border-bottom: 2px solid #8B6B3E; padding-bottom: 20px; margin-bottom: 20px;">
          <h2 style="font-size: 22px; font-weight: 800; text-transform: uppercase; margin: 0; color: #2B2B2B;">RK TRADERS</h2>
          <span style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #A67C52; font-weight: bold;">Plywoods • Laminates • Doors</span>
        </div>
        
        <h3 style="font-size: 16px; font-weight: 700; text-transform: uppercase; color: #8B6B3E; margin-bottom: 15px; border-left: 3px solid #8B6B3E; padding-left: 10px;">
          NEW B2B QUOTATION INQUIRY
        </h3>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); font-weight: bold; background-color: #FFFFFF; width: 35%;">Client Name:</td>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); background-color: #FFFFFF;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); font-weight: bold; background-color: #FFFFFF;">Phone Number:</td>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); background-color: #FFFFFF; font-weight: bold;"><a href="tel:${phone}" style="color: #8B6B3E; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); font-weight: bold; background-color: #FFFFFF;">Email Address:</td>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); background-color: #FFFFFF;">${email ? `<a href="mailto:${email}" style="color: #8B6B3E; text-decoration: none;">${email}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); font-weight: bold; background-color: #FFFFFF;">Product Required:</td>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); background-color: #FFFFFF; font-weight: bold; color: #8B6B3E; text-transform: uppercase;">${productRequirement}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); font-weight: bold; background-color: #FFFFFF; vertical-align: top;">Message / Specs:</td>
            <td style="padding: 12px; border: 1px solid rgba(139, 107, 62, 0.15); background-color: #FFFFFF; white-space: pre-line; line-height: 1.5;">${message || "No message provided"}</td>
          </tr>
        </table>

        <!-- Quick Admin Action Buttons -->
        <div style="margin-top: 30px; padding: 20px; border: 1px solid rgba(139, 107, 62, 0.2); background-color: #FFFFFF; text-align: center;">
          <h4 style="margin: 0 0 15px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #8B6B3E; letter-spacing: 1px;">
            Quick Admin Responses
          </h4>
          <div style="margin-bottom: 12px;">
            <a href="${confirmUrl}" target="_blank" style="display: inline-block; background-color: #8B6B3E; color: #FFFFFF; text-decoration: none; padding: 10px 16px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 4px; border-radius: 2px;">
              Confirm Order
            </a>
            <a href="${delayedUrl}" target="_blank" style="display: inline-block; background-color: #A67C52; color: #FFFFFF; text-decoration: none; padding: 10px 16px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 4px; border-radius: 2px;">
              Stock Delayed / Later
            </a>
            <a href="${declineUrl}" target="_blank" style="display: inline-block; background-color: #2B2B2B; color: #FFFFFF; text-decoration: none; padding: 10px 16px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin: 4px; border-radius: 2px;">
              Decline Order
            </a>
          </div>
          <div style="font-size: 11px; color: #666666; margin-top: 8px; border-top: 1px solid rgba(139, 107, 62, 0.1); padding-top: 10px;">
            Or chat directly on: <a href="${whatsappUrl}" target="_blank" style="color: #8B6B3E; font-weight: bold; text-decoration: none;">WhatsApp Support</a>
          </div>
        </div>

        <div style="margin-top: 30px; font-size: 11px; text-align: center; color: #A67C52; border-top: 1px dashed rgba(139, 107, 62, 0.2); padding-top: 15px;">
          This inquiry was sent automatically from the RK Traders B2B Website.
        </div>
      </div>
    `;

    // Send request to Brevo SMTP transactional email endpoint
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: receiverEmail, name: "RK Traders Admin" }],
        subject: `[RK Traders Inquiry] ${name} - ${productRequirement}`,
        htmlContent: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error response:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to deliver email through Brevo API." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: "Quotation inquiry sent successfully." });
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred on the server." },
      { status: 500 }
    );
  }
}
