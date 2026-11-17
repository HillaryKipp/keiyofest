import type { Metadata } from "next";
import { Award, CheckCircle2, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import StaticForm from "@/components/StaticForm";
import { PARTNERS_DATA } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners and Sponsors",
  description:
    "Partner with KEIYO CULTURAL FEST 2026. Explore sponsorship benefits, official sponsor and partner categories, and submit a partnership enquiry.",
  alternates: { canonical: "/partners/" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow={PARTNERS_DATA.hero.eyebrow}
        title={PARTNERS_DATA.hero.title}
        subtitle={PARTNERS_DATA.hero.subtitle}
        breadcrumbLabel="Partners & Sponsors"
        image={PARTNERS_DATA.hero.image}
        imageAlt={PARTNERS_DATA.hero.imageAlt}
      />

      {/* Why Partner + Sponsorship Enquiry Form */}
      <section className="section bg-[var(--cream)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="section-label mb-3">
                {PARTNERS_DATA.whyPartner.eyebrow}
              </div>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#1a2e1a] leading-tight">
                {PARTNERS_DATA.whyPartner.heading}
              </h2>
              <div className="divider" />

              <ul className="space-y-3.5 mb-8">
                {PARTNERS_DATA.whyPartner.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#1a2e1a] text-base"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {PARTNERS_DATA.whyPartner.ctas.map((label, idx) => (
                  <a
                    key={label}
                    href="#sponsorship-form"
                    className={`btn btn-sm ${
                      idx === 0
                        ? "btn-earth"
                        : idx === 1
                        ? "btn-primary"
                        : "btn-outline-dark"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div
              id="sponsorship-form"
              className="bg-white rounded-[20px] p-8 sm:p-10 shadow-md border border-[#d8f3dc]"
            >
              <div className="flex items-center gap-3 mb-2">
                <HeartHandshake
                  className="w-6 h-6 text-[#2d6a4f]"
                  aria-hidden="true"
                />
                <span className="section-label">Sponsorship Enquiry</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2e1a] mb-6">
                Become a Sponsor or Partner
              </h3>

              <StaticForm
                formTitle="Partnership & Sponsorship Enquiry"
                formType="partnership"
                submitLabel="Submit Partnership Enquiry"
                fields={[
                  {
                    name: "organisation",
                    label: "Organisation / Individual Name",
                    type: "text",
                    placeholder: "Organisation or full name",
                    required: true,
                  },
                  {
                    name: "contactPerson",
                    label: "Contact Person",
                    type: "text",
                    placeholder: "Full name",
                    required: true,
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "you@organisation.co.ke",
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
                    label: "Partnership Category",
                    type: "select",
                    required: true,
                    options: [
                      "Official Sponsor",
                      "Media Partner",
                      "Tourism Partner",
                      "Supporting Organisation",
                      "Support Our Heritage",
                    ],
                  },
                  {
                    name: "message",
                    label: "Proposal / Message",
                    type: "textarea",
                    placeholder:
                      "Tell us how you would like to partner or sponsor KEIYO CULTURAL FEST 2026...",
                    required: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner & Sponsor Placeholder Sections */}
      <section className="section bg-white">
        <div className="container-site space-y-14">
          {PARTNERS_DATA.groups.map((group) => (
            <div key={group.id}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-[#d8f3dc]">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#2d6a4f]" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-[#1a2e1a]">
                    {group.title}
                  </h2>
                </div>
                <span className="text-xs font-medium text-[#4a5568]">
                  {group.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {group.slots.map((slot) => (
                  <div
                    key={slot.name}
                    className="h-28 rounded-2xl border-2 border-dashed border-[#d8f3dc] bg-[#f0faf4]/50 flex items-center justify-center p-4 text-center"
                  >
                    {slot.logo ? (
                      <img
                        src={slot.logo}
                        alt={slot.name}
                        className="max-h-16 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-[#4a5568]">
                        {group.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
