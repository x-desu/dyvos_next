"use client";

export async function submitForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!res.ok) throw new Error("API request failed");
    return `Thank you, ${name}! Your email (${email}) was submitted.`;
  } catch (error) {
    throw new Error(error.message || "Error");
  }
}
