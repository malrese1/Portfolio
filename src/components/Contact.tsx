import { Mail, Phone, ExternalLink, FileDown } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { personal } from "@/data/personal";

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: personal.emailHref,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: personal.phoneHref,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "View profile",
    href: personal.linkedinUrl,
    external: true,
  },
  {
    icon: FileDown,
    label: "Resume",
    value: "Download PDF",
    href: personal.resumeHref,
    download: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-navy/10 bg-navy py-20 text-white sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {personal.contact.headline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {personal.contact.copy}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noreferrer" : undefined}
                  download={option.download ? true : undefined}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-6 text-center transition-colors hover:bg-white/10"
                >
                  <Icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white">
                    {option.label}
                  </span>
                  <span className="text-xs text-white/60">{option.value}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
