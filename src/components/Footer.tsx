import { ExternalLink, Mail, FileDown } from "lucide-react";
import { Container } from "@/components/Container";
import { personal } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-white/70">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-bold text-white">
            {personal.name}
          </p>
          <p className="mt-1 text-sm">
            {personal.location} &middot; {personal.region}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={personal.emailHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href={personal.resumeHref}
            download
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </nav>

        <p className="text-xs text-white/50">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
