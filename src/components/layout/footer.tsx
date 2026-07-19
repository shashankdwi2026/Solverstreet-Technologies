import Link from "next/link";
import { BrainCircuit, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { industries, services } from "@/config/content";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BrainCircuit className="size-5" />
            </span>
            <span>Solverstreet Technologies</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Enterprise AI, automation, cloud, analytics, and software engineering for global organizations.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Twitter, Github].map((Icon, index) => (
              <Button key={index} variant="outline" size="icon" aria-label="Social link">
                <Icon className="size-4" />
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {siteConfig.nav.slice(1, 7).map((item) => (
              <Link key={item.href} className="text-sm text-muted-foreground hover:text-foreground" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <div className="mt-4 grid gap-2">
            {services.slice(0, 6).map((item) => (
              <Link key={item.title} className="text-sm text-muted-foreground hover:text-foreground" href="/#services">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm text-muted-foreground">Monthly insights on AI product strategy and engineering.</p>
          <form className="mt-4 flex gap-2">
            <Input type="email" placeholder="you@company.com" aria-label="Email address" />
            <Button type="submit">Join</Button>
          </form>
          <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="size-4" /> hello@solverstreettechnologies.example</span>
            <span className="flex items-center gap-2"><Phone className="size-4" /> +1 415 555 0199</span>
            <span className="flex items-center gap-2"><MapPin className="size-4" /> Global delivery, US headquarters</span>
          </div>
        </div>
      </div>
      <div className="container flex flex-col justify-between gap-4 border-t py-6 text-sm text-muted-foreground md:flex-row">
        <span>Copyright {new Date().getFullYear()} Solverstreet Technologies. All rights reserved.</span>
        <div className="flex gap-5">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/#industries">{industries.length} Industries</Link>
        </div>
      </div>
    </footer>
  );
}
