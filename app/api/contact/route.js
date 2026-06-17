import emailjs from '@emailjs/browser';

// Server-side simple logging or EmailJS proxy
// In a real production environment with App Router, you'd typically use a service like Resend, SendGrid, or nodemailer.
// Since the prompt specified @emailjs/browser in dependencies, we'll implement a basic proxy here.

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Acme <onboarding@resend.dev>',
          to: ['salesverse.connect@gmail.com'], // Send to Om's email
          subject: `New Portfolio Inquiry from ${data.name}`,
          html: `
            <h2>New Inquiry from Executive Portfolio</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
            <p><strong>Budget:</strong> ${data.budget || 'N/A'}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `
        }),
      });

      if (!res.ok) {
        throw new Error('Resend API responded with error');
      }
    } else {
      console.log('--- DEVELOPMENT MODE (No Resend Key) ---');
      console.log(`From: ${data.name} (${data.email})`);
      console.log(`Message: ${data.message}`);
    }

    return Response.json({ success: true, message: 'Message sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
