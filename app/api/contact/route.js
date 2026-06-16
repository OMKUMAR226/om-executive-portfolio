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

    // Server-side email delivery using EmailJS REST API
    // Ensure you have these environment variables set in Vercel
    const serviceId = process.env.EMAILJS_SERVICE_ID || 'default_service';
    const templateId = process.env.EMAILJS_TEMPLATE_ID || 'default_template';
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (publicKey && privateKey) {
      const emailParams = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          company: data.company || 'Not provided',
          budget: data.budget || 'Not specified',
          message: data.message,
        }
      };

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailParams),
      });

      if (!res.ok) {
        throw new Error('EmailJS API responded with error');
      }
    } else {
      // If no env vars, log the message to the console (development mode)
      console.log('--- NEW CONTACT INQUIRY ---');
      console.log(`Name: ${data.name}`);
      console.log(`Email: ${data.email}`);
      console.log(`Company: ${data.company}`);
      console.log(`Budget: ${data.budget}`);
      console.log(`Message: ${data.message}`);
      console.log('---------------------------');
    }

    return Response.json({ success: true, message: 'Message sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
