import type { Metadata } from "next";
import {
  CheckCircle2,
  CreditCard,
  ExternalLink,
  MessageCircle,
  Phone,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import StaticForm from "@/components/StaticForm";
import { TICKETS_DATA } from "@/data/tickets";

export const metadata: Metadata = {
  title: "Tickets and Bookings",
  description:
    "Secure your place at KEIYO CULTURAL FEST 2026 on Wednesday, 23rd December 2026. Early Bird Regular KES 1,499, Early Bird VIP KES 4,440, Standard KES 1,550.",
  alternates: { canonical: "/tickets/" },
};

export default function TicketsPage() {
  const hasPlatform = Boolean(TICKETS_DATA.bookingPlatformUrl.trim());
  const { paymentDetails } = TICKETS_DATA;
  const whatsappVerifyUrl = `https://wa.me/${paymentDetails.verificationWhatsapp}?text=${encodeURIComponent(
    "Hello KEIYO CULTURAL FEST team, I have made my ticket payment via Paybill 522533 (Account 8888529) and would like to verify my payment and attendance."
  )}`;

  return (
    <>
      <PageHero
        eyebrow={TICKETS_DATA.hero.eyebrow}
        title={TICKETS_DATA.hero.title}
        subtitle={TICKETS_DATA.hero.subtitle}
        breadcrumbLabel="Tickets & Bookings"
        image={TICKETS_DATA.hero.image}
        imageAlt={TICKETS_DATA.hero.imageAlt}
      />

      {/* Ticket Categories */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3">Ticket Categories</div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#3b1508]">
              Choose Your Pass
            </h2>
            <p className="text-[#6b4334] mt-3">{TICKETS_DATA.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TICKETS_DATA.categories.map((cat) => (
              <div
                key={cat.id}
                className={`rounded-[20px] p-7 flex flex-col justify-between transition shadow-sm ${
                  cat.highlighted
                    ? "bg-[#3b1508] text-white border-2 border-[#f7a21b] shadow-lg"
                    : "bg-white text-[#3b1508] border border-[#f6dcb8]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Ticket
                      className={`w-6 h-6 ${
                        cat.highlighted ? "text-[#fbbf3c]" : "text-[#6b2410]"
                      }`}
                      aria-hidden="true"
                    />
                    {cat.badge && (
                      <span
                        className={`tag ${
                          cat.highlighted ? "tag-earth" : "tag-green"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold leading-snug mb-2">
                    {cat.name}
                  </h3>

                  <div
                    className={`font-serif-heading text-2xl font-bold mb-6 ${
                      cat.highlighted ? "text-[#fbbf3c]" : "text-[#6b2410]"
                    }`}
                  >
                    {cat.price.trim() ? cat.price : "Prices coming soon"}
                  </div>

                  <ul className="space-y-3 text-sm mb-8">
                    {cat.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            cat.highlighted ? "text-[#f7a21b]" : "text-[#c2410c]"
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={
                            cat.highlighted ? "text-white/85" : "text-[#6b4334]"
                          }
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {hasPlatform ? (
                  <a
                    href={TICKETS_DATA.bookingPlatformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${
                      cat.highlighted ? "btn-earth" : "btn-primary"
                    }`}
                  >
                    <span>Book Now</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href="#booking-form"
                    className={`btn w-full ${
                      cat.highlighted ? "btn-earth" : "btn-primary"
                    }`}
                  >
                    Book Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form + Payment & Delivery */}
      <section className="section bg-white" id="booking-form">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
            <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-md border border-[#f6dcb8]">
              <div className="section-label mb-2">Booking Form</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3b1508] mb-2">
                Reserve Your Tickets
              </h2>
              <p className="text-sm text-[#6b4334] mb-6">
                Start booking today and secure your place!
              </p>

              <StaticForm
                formTitle="Ticket Booking Request"
                formType="booking"
                submitLabel="Submit Booking Request"
                fields={[
                  {
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Your full name",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "you@example.com",
                    required: true,
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+254 7XX XXX XXX",
                    required: true,
                  },
                  {
                    name: "category",
                    label: "Ticket Category",
                    type: "select",
                    required: true,
                    options: TICKETS_DATA.categories.map((c) => c.name),
                  },
                  {
                    name: "quantity",
                    label: "Number of Tickets",
                    type: "text",
                    placeholder: "e.g. 2",
                    defaultValue: "1",
                    required: true,
                  },
                  {
                    name: "mpesaCode",
                    label: "M-Pesa Confirmation Code (Optional)",
                    type: "text",
                    placeholder: "e.g. UKA4X92M1P",
                  },
                  {
                    name: "notes",
                    label: "Additional Notes (Optional)",
                    type: "textarea",
                    placeholder: "Group details or tourism excursion interest...",
                  },
                ]}
              />
            </div>

            <div className="space-y-6">
              <div className="bg-[#fdf3e1] rounded-[20px] p-7 border border-[#f6dcb8]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f6dcb8] text-[#6b2410] flex items-center justify-center">
                    <CreditCard className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3b1508]">
                    {TICKETS_DATA.paymentInstructions.title}
                  </h3>
                </div>
                <p className="text-sm text-[#6b4334] leading-relaxed mb-4">
                  {TICKETS_DATA.paymentInstructions.description}
                </p>

                <div className="bg-white rounded-2xl p-5 border border-[#f5c27a] mb-5 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between gap-4 border-b border-[#f6dcb8] pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6b4334]">
                      Paybill No
                    </span>
                    <span className="font-mono text-xl font-extrabold text-[#3b1508] tracking-wide">
                      {paymentDetails.paybill}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#f6dcb8] pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6b4334]">
                      Account No
                    </span>
                    <span className="font-mono text-xl font-extrabold text-[#3b1508] tracking-wide">
                      {paymentDetails.accountNumber}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6b4334]">
                      Account Name
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#6b2410] text-right">
                      {paymentDetails.accountName}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-[#3b1508]">
                  {TICKETS_DATA.paymentInstructions.channels.map((ch) => (
                    <li key={ch} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-[#6b2410] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2a0e05] text-white rounded-[20px] p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#f7a21b] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {TICKETS_DATA.confirmationNote.title}
                  </h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  {TICKETS_DATA.confirmationNote.description}
                </p>

                <div className="rounded-xl bg-white/10 border border-white/15 p-4 mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#fbbf3c] mb-1">
                    Verification Contact Number
                  </div>
                  <a
                    href={`tel:${paymentDetails.verificationPhoneTel}`}
                    className="text-xl font-extrabold text-white hover:text-[#fbbf3c] transition tracking-wide"
                  >
                    {paymentDetails.verificationPhoneDisplay}
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${paymentDetails.verificationPhoneTel}`}
                    className="btn btn-earth btn-sm flex-1"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call {paymentDetails.verificationPhoneDisplay}</span>
                  </a>
                  <a
                    href={whatsappVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm flex-1"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Verify on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
