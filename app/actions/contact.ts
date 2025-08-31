// "use server"

// import { redirect } from "next/navigation"

// export async function submitContactForm(formData: FormData) {
//   try {
//     // Extract form data with proper error handling
//     const firstName = formData.get("firstName")?.toString() || ""
//     const lastName = formData.get("lastName")?.toString() || ""
//     const email = formData.get("email")?.toString() || ""
//     const phone = formData.get("phone")?.toString() || ""
//     const practiceName = formData.get("practiceName")?.toString() || ""
//     const specialty = formData.get("specialty")?.toString() || ""
//     const providers = formData.get("providers")?.toString() || ""
//     const message = formData.get("message")?.toString() || ""

//     // Validate required fields
//     if (!firstName || !lastName || !email || !phone) {
//       throw new Error("Please fill in all required fields (First Name, Last Name, Email, Phone).")
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       throw new Error("Please enter a valid email address.")
//     }

//     // Create email content
//     const emailContent = `
// New Contact Form Submission from ITmed Website

// Contact Information:
// - Name: ${firstName} ${lastName}
// - Email: ${email}
// - Phone: ${phone}
// - Practice Name: ${practiceName || "Not provided"}
// - Medical Specialty: ${specialty || "Not provided"}
// - Number of Providers: ${providers || "Not provided"}

// Message:
// ${message || "No message provided"}

// ---
// Submitted at: ${new Date().toLocaleString()}
// IP Address: [Server-side submission]
//     `.trim()

//     // Log the submission (in production, you'd save to database and send email)
//     console.log("=== NEW CONTACT FORM SUBMISSION ===")
//     console.log(emailContent)
//     console.log("=== END SUBMISSION ===")

//     // Simulate email sending delay
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     // Redirect to success page with success message
//     redirect("/contact?success=true&name=" + encodeURIComponent(firstName))
//   } catch (error) {
//     console.error("Contact form submission error:", error)
//     // Redirect to contact page with error message
//     redirect("/contact?error=" + encodeURIComponent(error instanceof Error ? error.message : "An error occurred"))
//   }
// }

"use server"

import { redirect } from "next/navigation"
import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const practiceName = formData.get("practiceName") as string
  const specialty = formData.get("specialty") as string
  const providers = formData.get("providers") as string
  const message = formData.get("message") as string

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })   
    await transporter.sendMail({
      from: `Elanix Enterprise Contact <${process.env.EMAIL_USER}>`,
      to: "info@elanixenterprise.com",
      subject: "New Contact Form Submission - Elanix Enterprise",
      text: `
New message from ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Practice: ${practiceName}
Specialty: ${specialty}
Providers: ${providers}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><b>Name:</b> ${firstName} ${lastName}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Practice:</b> ${practiceName}</p>
<p><b>Specialty:</b> ${specialty}</p>
<p><b>Providers:</b> ${providers}</p>
<p><b>Message:</b><br/>${message}</p>
      `,
    })

    // return success (do NOT redirect when called from client)
    return { success: true, name: firstName }
  } catch (err: any) {
    console.error(err)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
