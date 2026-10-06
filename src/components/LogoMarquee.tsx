import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

export default function LogoMarquee() {
  // Duplicate the list so the track loops seamlessly.
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="marquee-mask group overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-x-16 group-hover:[animation-play-state:paused]">
        {logos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex h-16 w-[150px] shrink-0 items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={64}
              className="h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
