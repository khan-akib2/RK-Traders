import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { clientName, clientEmail, product, status, customMessage } = await request.json();

    // Validate inputs
    if (!clientName || !clientEmail) {
      return NextResponse.json(
        { error: "Client Name and Client Email are required." },
        { status: 400 }
      );
    }

    if (!customMessage) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderName = process.env.BREVO_SENDER_NAME || "RK Traders";
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "support.rktraders@gmail.com";

    // Select subject and badge color/text based on status
    let subject = `RK Traders - Order Confirmation`;
    let statusText = "ORDER CONFIRMED";
    let badgeColor = "#8B6B3E"; // Gold/Bronze
    let badgeTextColor = "#FFFFFF";

    if (status === "delayed") {
      subject = `RK Traders - Update on your Inquiry`;
      statusText = "STOCK DELAYED / RESTOCKING";
      badgeColor = "#A67C52"; // Soft Gold
      badgeTextColor = "#FFFFFF";
    } else if (status === "declined") {
      subject = `RK Traders - Quotation Inquiry Update`;
      statusText = "INQUIRY CLOSED";
      badgeColor = "#2B2B2B"; // Dark Charcoal
      badgeTextColor = "#FFFFFF";
    }

    // Format custom message by replacing newlines with HTML breaks for maximum compatibility across mail clients
    const formattedMessage = customMessage.replace(/\r\n|\r|\n/g, "<br />");

    // Format HTML email for client response
    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid rgba(139, 107, 62, 0.2); background-color: #F8F6F2; color: #2B2B2B;">
        <!-- Header -->
        <div style="text-align: center; border-bottom: 2px solid #8B6B3E; padding-bottom: 20px; margin-bottom: 25px;">
          <h2 style="font-size: 22px; font-weight: 800; text-transform: uppercase; margin: 0; color: #2B2B2B;">RK TRADERS</h2>
          <span style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #A67C52; font-weight: bold;">Plywoods • Laminates • Doors</span>
        </div>
        
        <!-- Status Indicator -->
        <div style="text-align: center; margin-bottom: 25px;">
          <span style="display: inline-block; background-color: ${badgeColor}; color: ${badgeTextColor}; padding: 8px 16px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; border-radius: 2px;">
            ${statusText}
          </span>
        </div>
        
        <!-- Message Body -->
        <div style="background-color: #FFFFFF; border: 1px solid rgba(139, 107, 62, 0.1); padding: 25px; margin-bottom: 25px; line-height: 1.6; font-size: 14px; color: #333333;">
          ${formattedMessage}
        </div>
        
        <!-- Reference Details -->
        <div style="background-color: rgba(139, 107, 62, 0.05); border-left: 3px solid #8B6B3E; padding: 15px; margin-bottom: 25px;">
          <h4 style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #8B6B3E; letter-spacing: 0.5px;">Original Inquiry Details</h4>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
            <tr>
              <td style="padding: 4px 0; font-weight: bold; width: 40%;">Client Name:</td>
              <td style="padding: 4px 0;">${clientName}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Product Requested:</td>
              <td style="padding: 4px 0; text-transform: uppercase; color: #8B6B3E; font-weight: bold;">${product}</td>
            </tr>
          </table>
        </div>

        <!-- Contact Support Footer -->
        <div style="font-size: 12px; border-top: 1px solid rgba(139, 107, 62, 0.15); padding-top: 20px; text-align: center; color: #666666;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #2B2B2B; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">RK Traders Support Team</p>
          <p style="margin: 0 0 6px 0; font-size: 11px;">Gala No. 02, House No. 604/605, Diva Shil Rd, Shilgaon, Diva Road, Thane, Navi Mumbai, 400612</p>
          <p style="margin: 0;">
            <a href="tel:+918591044102" style="color: #8B6B3E; text-decoration: none; font-weight: bold;">+91 85910 44102</a> &nbsp;|&nbsp; 
            <a href="mailto:rktraders488@gmail.com" style="color: #8B6B3E; text-decoration: none; font-weight: bold;">rktraders488@gmail.com</a>
          </p>
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
        to: [{ email: clientEmail, name: clientName }],
        subject: subject,
        htmlContent: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo Client Response API error response:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to deliver response email through Brevo." },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: "Response email sent to client successfully." });
  } catch (error) {
    console.error("Response API internal error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred on the server." },
      { status: 500 }
    );
  }
}
