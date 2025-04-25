import React, { useState } from "react";

export default function ChatWidgetForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: true,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://deploy-company-website-jhgf.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          consent: true,
        });
        setIsOpen(false);
      } else {
        alert("Failed to send message: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 mb-4 max-h-[500px] overflow-y-auto rounded-t-xl shadow-lg border bg-white">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <h2 className="font-semibold">Have a question?</h2>
            </div>
            <span
              className="cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              ▾
            </span>
          </div>

          <div className="p-4">
            <div className="flex gap-2 items-start mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Agent"
                className="w-6 h-6 rounded-full"
              />
              <p className="bg-gray-100 px-3 py-2 rounded-xl text-sm">
                Enter your question below and a representative will get right
                back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                placeholder="Name"
                required
              />

              <div className="flex border rounded-md overflow-hidden">
                <span className="flex items-center justify-center px-2 text-sm bg-gray-100">
                  🇵🇰
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 px-2 py-2 outline-none"
                  placeholder="Phone"
                  required
                />
              </div>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                placeholder="E-mail"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="border px-3 py-2 rounded-md"
                rows="3"
                placeholder="Message"
                required
              ></textarea>

              <label className="flex items-start text-xs gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                By submitting you agree to receive SMS or e-mails for the
                provided channel. Rates may be applied.
              </label>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex justify-center items-center gap-2"
              >
                Send <span className="text-xl">✈️</span>
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-600"
      >
        💬
      </button>
    </div>
  );
}
