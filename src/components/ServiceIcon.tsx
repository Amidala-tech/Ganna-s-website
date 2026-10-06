import {
  Building2,
  BookOpenCheck,
  UserCheck,
  Scale,
  Compass,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  ledger: BookOpenCheck,
  people: UserCheck,
  scale: Scale,
  compass: Compass,
  pin: MapPin,
};

export default function ServiceIcon({
  name,
  size = 30,
  className = "text-blue",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Compass;
  return <Icon size={size} strokeWidth={1.5} className={className} />;
}
