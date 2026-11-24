"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertCircle, MessageCircle, Send } from "lucide-react";
import { CONTACT_DETAILS, SITE_CONFIG } from "@/data/site";

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  defaultValue?: string;
}

interface StaticFormProps {
  formTitle: string;
  formType: "enquiry" | "partnership" | "booking";
  fields: FormFieldConfig[];
  submitLabel?: string;
  whatsappOption?: {
    label?: string;
    phone?: string;
  };
}

export default function StaticForm({
  formTitle,
  formType,
  fields,
  submitLabel = "Submit",
  whatsappOption,
}: StaticFormProps) {
  const initialValues: Record<string, string> = {};
  fields.forEach((f) => {
    initialValues[f.name] = f.defaultValue || (f.options?.[0] ?? "");
  });

  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleChange = (name: string, val: string) => {
    setValues((prev) => ({ ...prev, [name]: val }));
    if (validationError) setValidationError("");
  };

  const validateForm = () => {
    for (const field of fields) {
      const val = (values[field.name] || "").trim();
      if (field.required && !val) {
        setValidationError(`Please fill in ${field.label}.`);
        return false;
      }
      if (field.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setValidationError("Please enter a valid email address.");
        return false;
      }
    }
    return true;
  };

  const buildSummaryText = () => {
    const summaryLines = fields
      .filter((f) => (values[f.name] || "").trim() !== "" || f.required)
      .map((f) => `${f.label}: ${(values[f.name] || "").trim() || "-"}`)
      .join("\n");
    return `${formTitle} — ${SITE_CONFIG.name}\n\n${summaryLines}`;
  };

  const whatsappNumber = (whatsappOption?.phone ?? CONTACT_DETAILS.whatsapp).replace(/\D/g, "");

  const handleWhatsAppRequest = () => {
    setValidationError("");
    if (!validateForm() || !whatsappNumber) return;

    const encodedBody = encodeURIComponent(buildSummaryText());
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedBody}`, "_blank", "noopener,noreferrer");
    setStatus("success");
    setStatusMessage(
      "WhatsApp has been opened with your prefilled booking details. Send the message to complete your request."
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!validateForm()) return;

    setStatus("submitting");
    const endpoint = SITE_CONFIG.formEndpoint;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `[${SITE_CONFIG.name}] ${formTitle}`,
            formType,
            ...values,
          }),
        });

        if (res.ok) {
          setStatus("success");
          setStatusMessage(
            "Thank you! Your submission has been received. Our organising team will respond shortly."
          );
          setValues(initialValues);
          return;
        }
        throw new Error("Form endpoint returned an error.");
      } catch {
        setStatus("error");
        setStatusMessage(
          "We could not submit the form automatically. Please try again or use our direct contact details."
        );
        return;
      }
    }

    // Graceful static fallback when NEXT_PUBLIC_FORM_ENDPOINT is not configured
    const encodedBody = encodeURIComponent(buildSummaryText());

    if (CONTACT_DETAILS.email.trim()) {
      const subj = encodeURIComponent(`${formTitle} — ${SITE_CONFIG.name}`);
      window.location.href = `mailto:${CONTACT_DETAILS.email}?subject=${subj}&body=${encodedBody}`;
      setStatus("success");
      setStatusMessage(
        `Your email client has been opened to send your submission to ${CONTACT_DETAILS.email}.`
      );
      return;
    }

    if (CONTACT_DETAILS.whatsapp.trim()) {
      const waDigits = CONTACT_DETAILS.whatsapp.replace(/\D/g, "");
      window.open(`https://wa.me/${waDigits}?text=${encodedBody}`, "_blank", "noopener,noreferrer");
      setStatus("success");
      setStatusMessage("WhatsApp opened with your prefilled message.");
      return;
    }

    // Both endpoint and contact details are placeholders in data/site.ts
    setStatus("success");
    setStatusMessage(
      "Your details have been validated! Note: configure NEXT_PUBLIC_FORM_ENDPOINT or official contact details in data/site.ts to enable live delivery."
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {validationError && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{validationError}</span>
        </div>
      )}

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-2.5 p-4 rounded-xl bg-[#fdf3e1] border border-[#f5c27a] text-[#3b1508] text-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-[#6b2410] shrink-0 mt-0.5" aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field) => {
          const isFullWidth = field.type === "textarea" || fields.length % 2 !== 0 && field === fields[fields.length - 1];
          const id = `${formType}-${field.name}`;

          return (
            <div key={field.name} className={isFullWidth ? "sm:col-span-2" : ""}>
              <label
                htmlFor={id}
                className="block text-sm font-semibold text-[#3b1508] mb-1.5"
              >
                {field.label}{" "}
                {field.required && <span className="text-[#f7a21b]">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  rows={4}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="form-input resize-y"
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  required={field.required}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="form-input"
                >
                  {(field.options || []).map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="form-input"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          <span>{status === "submitting" ? "Sending..." : submitLabel}</span>
        </button>

        {whatsappOption && whatsappNumber && (
          <button
            type="button"
            onClick={handleWhatsAppRequest}
            className="btn w-full sm:w-auto bg-[#15803d] hover:bg-[#166534] text-white border border-[#15803d] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>{whatsappOption.label || "Request on WhatsApp"}</span>
          </button>
        )}
      </div>
    </form>
  );
}
