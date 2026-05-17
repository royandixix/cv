"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  ShieldCheck,
  Layers,
  GitBranch,
  Monitor,
  Cloud,
  Wrench,
  Paintbrush,
  Rocket,
  Sparkles,
} from "lucide-react";

type ColorKey =
  | "green"
  | "blue"
  | "amber"
  | "orange"
  | "purple"
  | "cyan"
  | "rose";

interface PhaseData {
  phase: string;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  color: ColorKey | "";
  skills: string[];
  label?: string;
}

/* ── color tokens ─────────────────────────────────────────────────── */
const colorMap: Record<ColorKey, { wrap: string; icon: string; title: string }> =
  {
    green: {
      wrap: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
      icon: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
      title: "text-emerald-300",
    },
    blue: {
      wrap: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
      icon: "bg-blue-500/10 border-blue-500/25 text-blue-400",
      title: "text-blue-300",
    },
    amber: {
      wrap: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
      icon: "bg-amber-500/10 border-amber-500/25 text-amber-400",
      title: "text-amber-300",
    },
    orange: {
      wrap: "border-orange-500/30 bg-orange-500/[0.06] hover:bg-orange-500/[0.09]",
      icon: "bg-orange-500/10 border-orange-500/25 text-orange-400",
      title: "text-orange-300",
    },
    purple: {
      wrap: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
      icon: "bg-violet-500/10 border-violet-500/25 text-violet-400",
      title: "text-violet-300",
    },
    cyan: {
      wrap: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
      icon: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
      title: "text-cyan-300",
    },
    rose: {
      wrap: "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]",
      icon: "bg-rose-500/10 border-rose-500/25 text-rose-400",
      title: "text-rose-300",
    },
  };

/* ── data ─────────────────────────────────────────────────────────── */
const phases: PhaseData[] = [
  {
    phase: "Phase 01",
    title: "The Foundation",
    icon: Globe,
    color: "green",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "Async / Await",
      "Responsive Design",
      "Flexbox",
      "Grid",
    ],
  },
  {
    phase: "Phase 02",
    title: "Backend Fundamentals",
    icon: Server,
    color: "blue",
    skills: [
      "PHP",
      "MySQL",
      "XAMPP",
      "Server-side Logic",
      "CRUD Operations",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    phase: "Phase 03",
    title: "TypeScript & Type Safety",
    icon: ShieldCheck,
    color: "amber",
    skills: [
      "Static Typing",
      "Interfaces",
      "Generics",
      "Type Inference",
      "Decorators",
      "Scalable Code",
    ],
  },
  {
    phase: "Phase 04",
    title: "Laravel Ecosystem",
    icon: Layers,
    color: "orange",
    skills: [
      "MVC Architecture",
      "Eloquent ORM",
      "Artisan CLI",
      "Blade Templating",
      "Filament",
      "Livewire",
      "Inertia.js",
      "REST API",
      "Authentication",
      "Queues",
    ],
  },
];

const forkLeft: PhaseData = {
  phase: "Phase 05a",
  title: "React & Next.js",
  icon: Monitor,
  color: "blue",
  label: "Frontend path",
  skills: [
    "Component Architecture",
    "Hooks",
    "Context API",
    "Server Components",
    "ISR · SSG · API Routes",
    "Middleware",
    "Tailwind CSS",
    "Shadcn UI",
  ],
};

const forkRight: PhaseData = {
  phase: "Phase 05b",
  title: "Node.js",
  icon: Server,
  color: "green",
  label: "Backend / Runtime",
  skills: [
    "JS Runtime on Server",
    "npm Ecosystem",
    "Express.js",
    "Middleware",
    "REST APIs",
    "Real-time · WebSockets",
  ],
};

const phasesAfterFork: PhaseData[] = [
  {
    phase: "Phase 06",
    title: "More Frontend Frameworks",
    icon: GitBranch,
    color: "purple",
    skills: [
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "Reactive UI",
      "Two-way Data Binding",
      "Options API",
      "Composition API",
      "Enterprise Architecture",
    ],
  },
  {
    phase: "Phase 07",
    title: "Cloud & Modern Backend",
    icon: Cloud,
    color: "cyan",
    skills: [
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Auth & Authorization",
      "Realtime Database",
      "Cloud Storage",
      "Serverless Functions",
      "Row Level Security",
    ],
  },
  {
    phase: "Phase 08",
    title: "Dev Tools & DevOps Basics",
    icon: Wrench,
    color: "amber",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux",
      "Vite · npm",
      "CI/CD Basics",
      "Postman",
      "Best Practices",
    ],
  },
  {
    phase: "Phase 09",
    title: "UI & Styling Mastery",
    icon: Paintbrush,
    color: "rose",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "CSS Animations",
      "Utility-first",
      "Design Systems",
      "Dark Mode",
      "Accessibility",
    ],
  },
  {
    phase: "Phase 10",
    title: "Real Client Work",
    icon: Rocket,
    color: "orange",
    skills: [
      "Web Applications",
      "Admin Dashboards",
      "Landing Pages",
      "E-commerce",
      "REST APIs",
      "SaaS Platforms",
      "Client Communication",
      "Delivery",
    ],
  },
];

/* ── PhaseCard ────────────────────────────────────────────────────── */
function PhaseCard({ data }: { data: PhaseData }) {
  const c = data.color ? colorMap[data.color] : null;
  const Icon = data.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-6
        transition duration-300 w-full
        ${c ? c.wrap : "border-white/10 bg-white/[0.03]"}`}
    >
      <div className="relative z-10">
        {/* header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`w-10 h-10 rounded-xl border flex items-center
              justify-center flex-shrink-0
              ${c ? c.icon : "bg-white/10 border-white/10 text-white"}`}
          >
            <Icon size={18} />
          </div>
          <div>
            <h3
              className={`text-base font-semibold leading-tight
                ${c ? c.title : "text-white"}`}
            >
              {data.title}
            </h3>
            <p className="text-[11px] text-zinc-500 font-medium tracking-wide mt-0.5">
              {data.phase}
            </p>
          </div>
        </div>

        {/* skill tags */}
        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full text-xs
                  bg-white/5 border border-white/10
                  text-zinc-400 group-hover:text-zinc-200
                  transition duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Connector ────────────────────────────────────────────────────── */
function Connector() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-px h-8 bg-gradient-to-b from-white/10 to-white/[0.04]" />
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        className="text-white/15"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Journey ──────────────────────────────────────────────────────── */
export default function Journey() {
  return (
    <section id="journey" className="py-24 flex justify-center">
      <div className="max-w-3xl w-full px-6">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-3">
            Growth
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            My Learning Journey
          </h2>
          <p className="text-zinc-400 max-w-2xl mt-5 text-base sm:text-lg leading-relaxed">
            10 phases — from absolute zero to shipping real products for real
            clients.
          </p>
        </motion.div>

        {/* flow */}
        <div className="flex flex-col items-center">

          {/* origin node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl
              border border-white/10 bg-white/[0.04]"
          >
            <div
              className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10
                flex items-center justify-center text-zinc-400"
            >
              <Sparkles size={15} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-300">
                Started from Zero
              </p>
              <p className="text-[11px] text-zinc-600 mt-0.5">
                Curiosity — no background, no experience
              </p>
            </div>
          </motion.div>

          {/* phase 01 – 04 */}
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Connector />
              <PhaseCard data={p} />
            </motion.div>
          ))}

          {/* decision node */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Connector />
            <div
              className="px-6 py-2.5 rounded-xl border border-white/15
                bg-white/[0.05] text-sm text-zinc-300 font-medium tracking-wide"
            >
              Which direction to grow?
            </div>
          </motion.div>

          {/* connector into fork */}
          <Connector />

          {/* fork — phase 05a & 05b */}
          <motion.div
            className="grid grid-cols-2 gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {[forkLeft, forkRight].map((f) => (
              <div key={f.phase} className="flex flex-col items-center gap-2">
                <span
                  className="text-[10px] font-medium text-zinc-500 uppercase
                    tracking-widest px-3 py-1 rounded-full
                    border border-white/10 bg-white/[0.03]"
                >
                  {f.label}
                </span>
                <PhaseCard data={f} />
              </div>
            ))}
          </motion.div>

          {/* phase 06 – 10 */}
          {phasesAfterFork.map((p, i) => (
            <motion.div
              key={p.phase}
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Connector />
              <PhaseCard data={p} />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}