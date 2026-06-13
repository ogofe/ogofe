"use client"

import { useRef, useState } from "react"
import {
  ArrowUpRight,
  Bot,
  BookOpenText,
  Braces,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MousePointer2,
  Server,
  Sparkles,
  TerminalSquare,
  X,
  Instagram,
} from "lucide-react"

const contact = {
  github: "https://github.com/ogofe",
  linkedin: "https://linkedin.com/in/jtogofe",
  medium: "https://jtogofe.medium.com",
  instagram: "https://www.instagram.com/thecodexplainer/",
  email: "7thogofe@gmail.com",
}

const projects = [
  {
    name: "Django Palette",
    type: "Open Source Package",
    year: "Featured",
    description:
      "A customizable Django Admin interface for building composable admin screens with reusable UI components and a stronger developer experience.",
    stack: ["Django", "Python", "HTML", "Admin UX"],
    accent: "from-[#0ea5a3] to-[#f59e0b]",
    stats: ["Published package", "Reusable components", "Composable layouts"],
    href: "https://github.com/ogofe/dj_palette",
  },
  {
    name: "Vue-canva",
    type: "Canvas Editor",
    year: "Pinned",
    description:
      "A lightweight Vue-powered canvas editor for drawing, text editing, shapes, images, and rich manipulation inside Vue applications.",
    stack: ["Vue", "Canvas", "JavaScript", "Editor UX"],
    accent: "from-[#2563eb] to-[#ef4444]",
    stats: ["Drawing tools", "Text and shapes", "Image editing"],
    href: "https://github.com/ogofe/vue-canva",
  },
  {
    name: "Simple View",
    type: "Reader Tool",
    year: "Pinned",
    description:
      "A simple reader-view tool for web articles, focused on stripping away noise so reading feels calmer and more direct.",
    stack: ["Web", "Reader Mode", "JavaScript", "UX"],
    accent: "from-[#7c3aed] to-[#10b981]",
    stats: ["Article parsing", "Readable layout", "Low-friction reading"],
    href: "https://github.com/ogofe/simple-view",
  },
  {
    name: "Multi-Tenant No-Code Platform",
    type: "SaaS Platform",
    year: "Build",
    description:
      "A platform architecture for dynamic schemas, tenant isolation, generated APIs, page builders, and form builders across multiple customers.",
    stack: ["Django", "Vue.js", "PostgreSQL", "API Design"],
    accent: "from-[#f97316] to-[#0d9488]",
    stats: ["Tenant isolation", "Dynamic schemas", "Page builders"],
  },
  {
    name: "Courier Platform",
    type: "Logistics System",
    year: "Build",
    description:
      "A multi-sided logistics product for businesses, riders, and administrators with geospatial workflows and order lifecycle management.",
    stack: ["Django", "Geospatial", "Realtime UX", "PostgreSQL"],
    accent: "from-[#ef4444] to-[#67e8f9]",
    stats: ["Rider workflows", "Route planning", "Order lifecycle"],
  },
  {
    name: "ToBeVersityAI",
    type: "AI Education",
    year: "Building",
    description:
      "An AI-powered education product exploring how useful interfaces, automation, and intelligent assistance can support learning journeys.",
    stack: ["AI", "LLMs", "Education", "Automation"],
    accent: "from-[#17140f] to-[#7c3aed]",
    stats: ["AI assistance", "Learning flows", "Product discovery"],
  },
]

const skillGroups = {
  frontend: {
    label: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Design Systems"],
  },
  backend: {
    label: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "REST APIs", "Auth Flows", "Background Jobs"],
  },
  data: {
    label: "Data",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Analytics", "Schema Design", "Dashboards"],
  },
  ai: {
    label: "AI",
    icon: Bot,
    skills: ["LLM Apps", "Prompt Systems", "AI Automations", "RAG Workflows", "OpenAI Integrations"],
  },
}

const projectFormSteps = [
  {
    id: "intro",
    eyebrow: "Step 1 of 5",
    title: "What should I call you?",
    hint: "Your name and best email so I can reply with useful next steps.",
  },
  {
    id: "project",
    eyebrow: "Step 2 of 5",
    title: "What are we building?",
    hint: "A short, plain-English description is perfect.",
  },
  {
    id: "scope",
    eyebrow: "Step 3 of 5",
    title: "What kind of help do you need?",
    hint: "Pick the closest fit. We can refine later.",
  },
  {
    id: "timing",
    eyebrow: "Step 4 of 5",
    title: "What are the timeline and budget?",
    hint: "This helps me shape the right proposal.",
  },
  {
    id: "details",
    eyebrow: "Step 5 of 5",
    title: "Anything else I should know?",
    hint: "Links, context, must-haves, or constraints.",
  },
]

const projectTypes = ["Website", "Web app", "AI feature", "Backend/API", "Dashboard", "Not sure yet"]
const budgetOptions = ["Under $1k", "$1k - $3k", "$3k - $7k", "$7k+", "Need guidance"]
const timelineOptions = ["ASAP", "2-4 weeks", "1-2 months", "Flexible"]

const timeline = [
  ["01", "Listen", "Clarify the user, product pressure, and the smallest useful version."],
  ["02", "Shape", "Turn fuzzy ideas into screens, flows, components, and data contracts."],
  ["03", "Build", "Ship the frontend and backend with the little details that make it feel finished."],
  ["04", "Tune", "Measure, refine, and smooth the experience until it feels natural to use."],
]

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeSkill, setActiveSkill] = useState("frontend")
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [submitState, setSubmitState] = useState("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    projectType: "Web app",
    budget: "$1k - $3k",
    timeline: "2-4 weeks",
    details: "",
  })
  const formRef = useRef(null)
  const project = projects[activeProject]
  const skill = skillGroups[activeSkill]
  const SkillIcon = skill.icon
  const progress = ((formStep + 1) / projectFormSteps.length) * 100

  function handleSpotlightMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`)
  }

  function updateForm(field, value) {
    setFormData((current) => ({ ...current, [field]: value }))
    setSubmitState("idle")
  }

  function startProject() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  function canContinue() {
    if (formStep === 0) {
      return formData.name.trim() && formData.email.trim()
    }

    if (formStep === 1) {
      return formData.projectName.trim()
    }

    return true
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (formStep < projectFormSteps.length - 1) {
      if (canContinue()) {
        setFormStep((step) => step + 1)
      }
      return
    }

    setSubmitState("loading")

    try {
      const response = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Unable to send inquiry")
      }

      setSubmitState("success")
      setFormData({
        name: "",
        email: "",
        projectName: "",
        projectType: "Web app",
        budget: "$1k - $3k",
        timeline: "2-4 weeks",
        details: "",
      })
      setFormStep(0)
    } catch (error) {
      setSubmitState("error")
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#17140f]">
      <div className="grain" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f3ea]/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-black uppercase tracking-[0.22em]">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#17140f] text-sm text-[#f7f3ea]">
              JO
            </span>
            <span className="hidden sm:inline">Joel</span>
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {["work", "skills", "process", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#17140f]/70 transition hover:bg-black/5 hover:text-[#17140f]"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={startProject}
            className="hidden rounded-lg bg-[#17140f] px-4 py-2 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#0d9488] md:inline-flex"
          >
            Start a project
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/15 bg-white/50 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen ? (
          <div className="border-t border-black/10 bg-[#f7f3ea] px-5 py-4 md:hidden">
            {["work", "skills", "process", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-black uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <section id="top" className="relative min-h-screen px-5 pb-16 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white/45 px-3 py-2 text-xs font-black uppercase tracking-[0.2em]">
              <Sparkles className="h-4 w-4 text-[#f97316]" />
              Fullstack developer in Nigeria
            </div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-normal text-[#17140f] md:text-8xl lg:text-9xl">
              Sharp web products with a human pulse.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#3b3328]/78 md:text-xl">
              I am Joel, a fullstack software developer who turns messy ideas into responsive interfaces,
              useful APIs, and digital tools people can actually enjoy using.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#17140f] px-5 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-[#0d9488]"
              >
                View work <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/20 bg-white/50 px-5 py-3 font-black transition hover:-translate-y-1 hover:bg-white"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual" onMouseMove={handleSpotlightMove}>
            <div className="hero-visual__glow" />
            <div className="terminal-card">
              <div className="flex items-center justify-between border-b border-white/15 p-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                  <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                  <span className="h-3 w-3 rounded-full bg-[#10b981]" />
                </div>
                <TerminalSquare className="h-5 w-5 text-white/65" />
              </div>
              <div className="space-y-5 p-5">
                <div className="grid grid-cols-[auto_1fr] gap-3 text-sm">
                  <span className="text-[#67e8f9]">joel@portfolio</span>
                  <span className="text-white/72">npm run build-the-idea</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/8 p-4">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#fde68a]">
                    Current stack
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {["Django", "Vue", "Python", "AI", "Postgres", "Tailwind"].map((item) => (
                      <span key={item} className="rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="code-lines">
                  <span>const idea = "useful";</span>
                  <span>design.refine(interaction);</span>
                  <span>api.connect(product);</span>
                  <span>{"ship({ polish: true });"}</span>
                </div>
              </div>
            </div>
            <div className="floating-note note-one">
              <MousePointer2 className="h-4 w-4" /> interactive
            </div>
            <div className="floating-note note-two">
              <Braces className="h-4 w-4" /> production-ready
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-black/10 bg-[#17140f] px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#67e8f9]">Selected work</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none md:text-6xl">
                Open-source tools and product systems with real engineering depth.
              </h2>
            </div>
            <p className="max-w-sm text-sm font-semibold leading-7 text-white/62">
              A mix of pinned repositories, active builds, and platform work from my GitHub profile and README.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="space-y-3">
              {projects.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveProject(index)}
                  className={`w-full rounded-lg border p-5 text-left transition ${
                    activeProject === index
                      ? "border-white bg-white text-[#17140f]"
                      : "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-[0.22em] opacity-70">
                    {item.type}
                  </span>
                  <span className="mt-2 flex items-center justify-between gap-4 text-2xl font-black">
                    {item.name}
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </button>
              ))}
            </div>

            <article className="project-panel">
              <div className={`project-orbit bg-gradient-to-br ${project.accent}`}>
                <Globe2 className="h-20 w-20" />
              </div>
              <div className="relative z-10">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#17140f]">
                    {project.year}
                  </span>
                  <span className="text-sm font-bold text-white/65">{project.type}</span>
                </div>
                <h3 className="text-4xl font-black leading-tight md:text-6xl">{project.name}</h3>
                <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/72">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div key={stat} className="rounded-lg border border-white/15 bg-black/20 p-4">
                      <p className="text-sm font-black leading-5 text-white">{stat}</p>
                    </div>
                  ))}
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-black text-[#17140f] transition hover:-translate-y-1 hover:bg-[#67e8f9]"
                  >
                    View repository <ArrowUpRight className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0d9488]">Capabilities</p>
            <h2 className="mt-3 text-4xl font-black leading-none md:text-6xl">Choose a discipline. Watch the toolkit shift.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#3b3328]/72">
              I like building across the stack because the best user experience usually depends on clean decisions
              in the interface, the API, and the data model.
            </p>
          </div>
          <div className="rounded-lg border border-black/15 bg-white/58 p-4 shadow-[12px_12px_0_#17140f]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(skillGroups).map(([key, value]) => {
                const Icon = value.icon
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveSkill(key)}
                    className={`rounded-lg border p-4 text-left transition ${
                      activeSkill === key
                        ? "border-[#17140f] bg-[#f97316] text-[#17140f]"
                        : "border-black/10 bg-white/70 hover:bg-[#fef3c7]"
                    }`}
                  >
                    <Icon className="mb-5 h-6 w-6" />
                    <span className="font-black uppercase tracking-wide">{value.label}</span>
                  </button>
                )
              })}
            </div>
            <div className="mt-4 rounded-lg bg-[#17140f] p-6 text-white">
              <div className="flex items-center gap-3">
                <SkillIcon className="h-7 w-7 text-[#67e8f9]" />
                <h3 className="text-3xl font-black">{skill.label}</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {skill.skills.map((item) => (
                  <div key={item} className="group rounded-lg border border-white/12 bg-white/8 p-4 transition hover:-translate-y-1 hover:bg-white">
                    <p className="font-black text-white transition group-hover:text-[#17140f]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#e7fbf5] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ef4444]">Process</p>
            <h2 className="mt-3 text-4xl font-black leading-none md:text-6xl">A practical rhythm for creative software.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {timeline.map(([number, title, copy]) => (
              <div key={number} className="process-tile">
                <span className="text-5xl font-black text-[#17140f]/18">{number}</span>
                <h3 className="mt-10 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#3b3328]/72">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="rounded-lg border border-black/15 bg-[#f97316] p-6 shadow-[12px_12px_0_#17140f] md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em]">Available for thoughtful builds</p>
            <h2 className="mt-4 text-4xl font-black leading-none md:text-6xl">
              Have an idea that needs taste and engineering?
            </h2>
            <p className="mt-5 text-base font-bold leading-7 text-[#17140f]/72">
              Start with the guided form, or reach me directly through the links below.
            </p>
            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#17140f] px-5 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#0d9488]"
              >
                <Mail className="h-5 w-5" /> {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/20 bg-white/60 px-5 py-4 font-black transition hover:-translate-y-1 hover:bg-white"
              >
                <Github className="h-5 w-5" /> GitHub <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/20 bg-white/60 px-5 py-4 font-black transition hover:-translate-y-1 hover:bg-white"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href={contact.medium}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/20 bg-white/60 px-5 py-4 font-black transition hover:-translate-y-1 hover:bg-white"
              >
                <BookOpenText className="h-5 w-5" /> Medium <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/20 bg-white/60 px-5 py-4 font-black transition hover:-translate-y-1 hover:bg-white"
              >
                <Instagram className="h-5 w-5" /> Instagram <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            id="project-form"
            onSubmit={handleSubmit}
            className="typeform-card"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#0d9488]">
                  Project brief
                </p>
                <p className="mt-2 text-sm font-bold text-[#3b3328]/62">
                  {projectFormSteps[formStep].eyebrow}
                </p>
              </div>
              <div className="rounded-lg border border-black/10 bg-[#f7f3ea] px-3 py-2 text-sm font-black">
                {formStep + 1}/{projectFormSteps.length}
              </div>
            </div>

            <div className="mb-9 h-2 overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-[#0d9488] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="min-h-[360px]">
              <h3 className="text-4xl font-black leading-none md:text-6xl">
                {projectFormSteps[formStep].title}
              </h3>
              <p className="mt-4 max-w-xl text-base font-bold leading-7 text-[#3b3328]/64">
                {projectFormSteps[formStep].hint}
              </p>

              {formStep === 0 ? (
                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  <label className="form-field">
                    <span>Name</span>
                    <input
                      value={formData.name}
                      onChange={(event) => updateForm("name", event.target.value)}
                      placeholder="Joel Ogofe"
                      autoComplete="name"
                    />
                  </label>
                  <label className="form-field">
                    <span>Email</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateForm("email", event.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </label>
                </div>
              ) : null}

              {formStep === 1 ? (
                <label className="form-field mt-9 block">
                  <span>Project name or idea</span>
                  <textarea
                    value={formData.projectName}
                    onChange={(event) => updateForm("projectName", event.target.value)}
                    placeholder="I want to build a booking platform for..."
                    rows={5}
                  />
                </label>
              ) : null}

              {formStep === 2 ? (
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {projectTypes.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateForm("projectType", option)}
                      className={`option-chip ${formData.projectType === option ? "option-chip--active" : ""}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}

              {formStep === 3 ? (
                <div className="mt-9 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#3b3328]/62">
                      Budget
                    </p>
                    <div className="grid gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateForm("budget", option)}
                          className={`option-chip ${formData.budget === option ? "option-chip--active" : ""}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#3b3328]/62">
                      Timeline
                    </p>
                    <div className="grid gap-3">
                      {timelineOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateForm("timeline", option)}
                          className={`option-chip ${formData.timeline === option ? "option-chip--active" : ""}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {formStep === 4 ? (
                <label className="form-field mt-9 block">
                  <span>Extra details</span>
                  <textarea
                    value={formData.details}
                    onChange={(event) => updateForm("details", event.target.value)}
                    placeholder="Links, goals, preferred stack, launch date, or anything else I should know."
                    rows={6}
                  />
                </label>
              ) : null}
            </div>

            {submitState === "success" ? (
              <div className="mt-4 rounded-lg border border-[#0d9488]/30 bg-[#e7fbf5] px-4 py-3 text-sm font-black text-[#0d4f49]">
                Sent. I will get your project details in my inbox.
              </div>
            ) : null}
            {submitState === "error" ? (
              <div className="mt-4 rounded-lg border border-[#ef4444]/30 bg-[#fff1f2] px-4 py-3 text-sm font-black text-[#991b1b]">
                I could not send that yet. Check the Resend environment variables and try again.
              </div>
            ) : null}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setFormStep((step) => Math.max(0, step - 1))}
                disabled={formStep === 0 || submitState === "loading"}
                className="rounded-lg border border-black/15 px-5 py-3 font-black transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-35"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!canContinue() || submitState === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#17140f] px-6 py-3 font-black text-white transition hover:-translate-y-1 hover:bg-[#0d9488] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {submitState === "loading"
                  ? "Sending..."
                  : formStep === projectFormSteps.length - 1
                    ? "Send project brief"
                    : "Continue"}
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
