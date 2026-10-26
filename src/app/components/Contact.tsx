import { Building2, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] bg-[#dfeeff] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Company information
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Official developer, ownership, and organization details for publishing and privacy contact.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="h-auto rounded-full bg-[#111827] px-6 py-3 text-white hover:bg-[#1f2937]">
                  HV INTERNATIONAL
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Building2 size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Legal name</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  HUNG VUONG INTERNATIONAL HUMAN RESOURCE DEVELOPMENT AND INVESTMENT CORPORATION
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Building2 size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Account owner</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lo Van Cuong
                  <br />
                  <a href="mailto:hvinterhrmninvest.corp@gmail.com" className="break-all transition-colors hover:text-slate-950">
                    hvinterhrmninvest.corp@gmail.com
                  </a>
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm sm:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <MapPin size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Registered address</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nguyen Cong Thai Street, Dai Kim Urban Area
                  <br />
                  B9 Dai Kim Building, Floor 2
                  <br />
                  Ha Noi - Viet Nam (VN)
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Phone size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Phone</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <a href="tel:+84584318825" className="transition-colors hover:text-slate-950">+84584318825</a>
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Building2 size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Website</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <a href="http://hvinterhrmninvest.store/" className="break-all transition-colors hover:text-slate-950">
                    hvinterhrmninvest.store
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
