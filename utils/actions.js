"use server";

export async function submitForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  console.log(subject);
  try {
    const res = await fetch("http://localhost:3000/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!res.ok) throw new Error("API request failed");
    console.log("Received:", { name, email, subject, message });

    return `Thank you, ${name}! Your email (${email}) was submitted.`;
  } catch (error) {
    throw new Error(error.message || "Error");
  }
}
