"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { JOBS } from "@/lib/data";

const FILTERS = [
  "All Roles",
  "Finance",
  "Operations",
  "Administration",
  "Sales",
  "Support",
] as const;

export default function JobsGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All Roles");

  const visible =
    filter === "All Roles"
      ? JOBS
      : JOBS.filter((job) => job.department === filter);

  return (
    <div>
      <div className="flex snap-x gap-2.5 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`snap-start whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              filter === f
                ? "border-gold bg-gold text-ink"
                : "border-line bg-surface text-muted hover:border-gold/60 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((job) => (
            <motion.article
              key={job.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectPosition: job.imagePosition ?? "center top" }}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-ink backdrop-blur">
                  {job.department}
                </span>
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {job.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold leading-snug text-ink">
                  {job.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {job.summary}
                </p>
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-role={job.title}
                  data-department={job.department}
                  className="btn-primary mt-auto w-full !py-3 text-center"
                >
                  Apply Now <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
