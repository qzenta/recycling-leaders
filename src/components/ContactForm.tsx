"use client";

import { useState, FormEvent } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "multiselect";
  options?: string[];
  required?: boolean;
};

type Props = {
  subject: string;
  fields: Field[];
  submitLabel?: string;
  successMessage?: string;
};

const inputClass =
  "w-full px-4 py-2.5 border border-[var(--color-grey-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-green-primary)] bg-white text-sm";

export default function ContactForm({
  subject,
  fields,
  submitLabel = "Send Enquiry",
  successMessage = "Thanks! We'll be in touch shortly.",
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function set(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, fields: values }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="bg-[var(--color-green-light)] border border-[var(--color-green-mid)] rounded-xl p-6 text-center text-[var(--color-green-primary)] font-medium">
        ✅ {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {fields.map((f) => (
        <div key={f.name}>
          <label className="block text-sm font-medium text-[var(--color-grey-dark)] mb-1">
            {f.label}
            {f.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {f.type === "textarea" && (
            <textarea
              name={f.name}
              rows={4}
              required={f.required}
              className={inputClass}
              value={values[f.name] || ""}
              onChange={(e) => set(f.name, e.target.value)}
            />
          )}

          {f.type === "select" && (
            <select
              name={f.name}
              required={f.required}
              className={inputClass}
              value={values[f.name] || ""}
              onChange={(e) => set(f.name, e.target.value)}
            >
              <option value="">Select…</option>
              {f.options?.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          )}

          {(!f.type || f.type === "text" || f.type === "email" || f.type === "tel") && (
            <input
              type={f.type || "text"}
              name={f.name}
              required={f.required}
              className={inputClass}
              value={values[f.name] || ""}
              onChange={(e) => set(f.name, e.target.value)}
            />
          )}
        </div>
      ))}

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[var(--color-green-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-green-mid)] transition-colors disabled:opacity-60"
      >
        {loading ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
