
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Laptop2,
  Smartphone,
  TicketCheck,
  type LucideIcon,
} from "lucide-react";

type Category =
  | "Web Applications"
  | "Cross-platform"
  | "AI / Machine Learning";

type Filter = "All" | Category;

type Project = {
  id: string;
  title: string;
  category: Category;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  icon: LucideIcon;
  github?: string;
  demo?: string;
};

const filters: Filter[] = [
  "All",
  "Web Applications",
  "Cross-platform",
  "AI / Machine Learning",
];

const projects: Project[] = [
  {
    id: "godesk",
    title: "GoDesk — Helpdesk Management",
    category: "Web Applications",
    description:
      "A full-stack ticketing system designed to organize customer support workflows, monitor service levels, and provide operational reports.",
    challenge:
      "Support teams need a structured way to track tickets, responsibilities, and service deadlines.",
    solution:
      "Developed frontend and backend modules for ticket management, SLA tracking, and reporting.",
    features: [
      "Ticket and agent management",
      "SLA monitoring and status tracking",
      "Reports, analytics, and CSV export",
      "REST API integration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Go",
      "Gin",
      "REST API",
    ],
    icon: TicketCheck,
  },
  {
    id: "pelayanan-kecamatan",
    title: "District Public Service Platform",
    category: "Web Applications",
    description:
      "A web-based platform for managing public service requests and citizen complaints through administrative workflows.",
    challenge:
      "Citizens and administrative staff need clearer processes for submitting and tracking requests.",
    solution:
      "Built service submission forms, data validation, and administrative management features.",
    features: [
      "Online service request forms",
      "Citizen complaint submissions",
      "Administrative data management",
      "Input validation and request tracking",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Filament",
      "MySQL",
    ],
    icon: Building2,
  },
  {
    id: "sicamat",
    title: "SICAMAT — District Information System",
    category: "Cross-platform",
    description:
      "A Flutter-based administrative information system connected to a Dart REST API and a MySQL database.",
    challenge:
      "Administrative information needs a consistent interface across devices and an organized data service.",
    solution:
      "Developed Flutter application screens and a separate API layer for accessing administrative data.",
    features: [
      "Role-based application screens",
      "Administrative dashboards",
      "REST API integration",
      "MySQL-backed data services",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "MySQL",
    ],
    icon: Smartphone,
  },
  {
    id: "ann-ipk",
    title: "GPA Prediction Using Neural Networks",
    category: "AI / Machine Learning",
    description:
      "An academic application that applies an artificial neural network to estimate student GPA from semester performance data.",
    challenge:
      "Academic performance data needs to be processed consistently before it can support predictive analysis.",
    solution:
      "Integrated a prediction workflow into a Laravel application with input validation and result display.",
    features: [
      "Semester grade input and validation",
      "Artificial neural network prediction",
      "Prediction results and error display",
      "Database-backed prediction records",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Python",
      "ANN",
      "MySQL",
    ],
    icon: BrainCircuit,
  },
  {
    id: "web-toko",
    title: "Sales & Inventory Management",
    category: "Web Applications",
    description:
      "A web application for managing store products, customer records, and day-to-day sales administration.",
    challenge:
      "Small businesses need organized product and customer data instead of disconnected manual records.",
    solution:
      "Created a PHP-based management application with data forms and supporting administrative features.",
    features: [
      "Product and customer management",
      "User login",
      "Barcode-related features",
      "Data export",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
    ],
    icon: Laptop2,
    github:
      "https://github.com/royandixix/Web-Tokoh-Penjualan",
  },
  {
    id: "portfolio",
    title: "Personal Software Engineer Portfolio",
    category: "Web Applications",
    description:
      "A responsive portfolio presenting technical skills, selected work, and downloadable resumes in two languages.",
    challenge:
      "Recruiters need a quick way to understand a developer's background, projects, and contact details.",
    solution:
      "Built a responsive Next.js website with interactive sections and bilingual CV downloads.",
    features: [
      "Responsive portfolio sections",
      "Interactive project showcase",
      "Indonesian and English CV downloads",
      "Vercel deployment",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    icon: Code2,
    github: "https://github.com/royandixix/cv",
    demo: "https://cv-id.vercel.app",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  const [expandedProject, setExpandedProject] =
    useState<string | null>(null);

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "All" ||
      project.category === activeFilter
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-300">
            A selection of software projects covering
            full-stack web development, cross-platform
            applications, and machine learning. Explore
            the challenges, solutions, and technologies
            behind each project.
          </p>
        </motion.div>

        <div
          className="mt-9 flex flex-wrap gap-2"
          aria-label="Project categories"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => {
                setActiveFilter(filter);
                setExpandedProject(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                activeFilter === filter
                  ? "border-white bg-white text-zinc-950"
                  : "border-white/20 bg-white/5 text-zinc-200 hover:border-white/50 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-9 grid items-start gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            const expanded =
              expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/80 shadow-sm transition-colors hover:border-white/30"
              >
                <div className="relative flex min-h-40 items-center justify-between overflow-hidden border-b border-white/10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black px-6 py-5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-white/10"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-10 h-40 w-40 rounded-full border border-white/10"
                  />

                  <div className="relative flex flex-col gap-5">
                    <span className="w-fit rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-zinc-200">
                      {project.category}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <Icon
                        size={28}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <span className="relative self-start font-mono text-xs tracking-[0.2em] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {project.description}
                  </p>

                  <div
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`details-${project.id}`}
                    onClick={() =>
                      setExpandedProject(
                        expanded ? null : project.id
                      )
                    }
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {expanded
                      ? "Hide details"
                      : "Explore case study"}

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className={`transition-transform ${
                        expanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`details-${project.id}`}
                    hidden={!expanded}
                  >
                    <div className="mt-3 space-y-5 border-t border-white/10 pt-5">
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Challenge
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-300">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Approach
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-300">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Key features
                        </h4>

                        <ul className="mt-3 space-y-2">
                          {project.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-zinc-300"
                            >
                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-zinc-100"
                                aria-hidden="true"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <Github
                          size={17}
                          aria-hidden="true"
                        />
                        Source Code
                        <ArrowUpRight
                          size={14}
                          aria-hidden="true"
                        />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <ExternalLink
                          size={16}
                          aria-hidden="true"
                        />
                        Live Demo
                      </a>
                    )}

                    {!project.github &&
                      !project.demo && (
                        <span className="text-xs text-zinc-400">
                          Source code and live demo are
                          not publicly listed.
                        </span>
                      )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-white">
              More projects on GitHub
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              Browse additional repositories and explore
              my development work.
            </p>
          </div>

          <a
            href="https://github.com/royandixix?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Github
              size={18}
              aria-hidden="true"
            />
            All Repositories
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
