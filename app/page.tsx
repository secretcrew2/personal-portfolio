"use client";

import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Briefcase, 
  MapPin, 
  ExternalLink, 
  Mail, 
  Sparkles,
  ArrowRight,
  Play,
  RotateCcw
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
// --- Static Portfolio Data ---
const portfolioProjects = [
  {
    id: "project-2",
    number: "Project #2",
    title: "Hand Movement Detection Dashboard",
    description: "A webcam hand-tracking dashboard using MediaPipe and Next.js.",
    stack: "Next.js, TypeScript, Tailwind CSS, MediaPipe",
    status: "complete",
    url: "https://hand-motionv1.vercel.app/"
  },
  {
    id: "project-3",
    number: "Project #3",
    title: "HandTrack Runner",
    description: "A hand-controlled browser runner game with canvas rendering, gestures, telemetry, and keyboard fallback.",
    stack: "Next.js, TypeScript, Tailwind CSS, MediaPipe, Canvas",
    status: "complete",
    url: "https://hand-runner-git-vercel-react-serve-019377-secretcrew2s-projects.vercel.app/"
  },
  {
    id: "project-4",
    number: "Project #4",
    title: "Smart Expense Tracker",
    description: "A localStorage-based budget tracker that tests action, branch, iterate, event, and state_machine.",
    stack: "Next.js, TypeScript, Tailwind CSS, localStorage",
    status: "complete", 
    url: "https://expense-tracker-omega-one-12.vercel.app/"
    
  },
  {
    id: "project-6",
    number: "Project #6",
    title: "Mini Inventory System",
    description: "A localStorage-based inventory dashboard that tests CRUD, stock updates, low-stock warnings, search, filters, action, branch, iterate, event, and state_machine.",
    stack: "Next.js, TypeScript, Tailwind CSS, localStorage",
    status: "complete",
    url: "https://mini-inventory-system-two.vercel.app/"
  },
  {
    id: "project-7",
    number: "Project #7",
    title: "Personal Kanban Task Board",
    description: "A localStorage-based task board with Kanban columns, drag-and-drop movement, due dates, overdue detection, search, filters, action, branch, iterate, event, and state_machine.",
    stack: "Next.js, TypeScript, Tailwind CSS, localStorage, Native Drag and Drop",
    status: "complete",
    url: "https://personal-kanban-board-dusky.vercel.app/"
  }
];

const animationCodeLines = [
  { line: 1, section: "system", text: "declare -> system [HandMovementDashboard](" },
  { line: 2, section: "system", text: "  stack: nextjs," },
  { line: 3, section: "system", text: "  language: typescript," },
  { line: 4, section: "system", text: "  styling: tailwind_v4," },
  { line: 5, section: "system", text: "  execution: client" },
  { line: 6, section: "system", text: ")" },
  { line: 7, section: "runtime", text: "declare -> runtime [BrowserRuntime](" },
  { line: 8, section: "runtime", text: "  execution: client," },
  { line: 9, section: "runtime", text: "  browser_apis: {camera, canvas, animation_frame}" },
  { line: 10, section: "runtime", text: ")" },
  { line: 11, section: "dependency", text: "declare -> dependency [MediaPipeTasksVision](" },
  { line: 12, section: "dependency", text: '  package: "@mediapipe/tasks-vision",' },
  { line: 13, section: "dependency", text: "  purpose: hand_tracking" },
  { line: 14, section: "dependency", text: ")" },
  { line: 15, section: "capability", text: "declare -> capability [CameraAccess](" },
  { line: 16, section: "capability", text: "  api: navigator.mediaDevices.getUserMedia," },
  { line: 17, section: "capability", text: "  requires_permission: true," },
  { line: 18, section: "capability", text: "  fallback_error: \"Camera access requires localhost or HTTPS.\"" },
  { line: 19, section: "capability", text: ")" },
  { line: 20, section: "object", text: "declare -> object [HandTelemetry]" },
  { line: 21, section: "property", text: "declare -> property [HandTelemetry.detected] : boolean(default: false)" },
  { line: 22, section: "property", text: "declare -> property [HandTelemetry.confidence] : number(min: 0, max: 1)" },
  { line: 23, section: "property", text: "declare -> property [HandTelemetry.delay_ms] : number(default: 0)" },
  { line: 24, section: "rendering", text: "declare -> rendering [HandSkeletonOverlay](" },
  { line: 25, section: "rendering", text: "  target: canvas," },
  { line: 26, section: "rendering", text: "  draw: {webcam_feed, hand_skeleton, hand_cursor}," },
  { line: 27, section: "rendering", text: "  animation: requestAnimationFrame" },
  { line: 28, section: "rendering", text: ")" },
  { line: 29, section: "compile", text: "compile -> working_hand_tracking_dashboard" },
];

type AppStatus =
  | "idle"
  | "opening_editor"
  | "showing_file_tree"
  | "typing_system_block"
  | "typing_runtime_block"
  | "typing_dependency_block"
  | "typing_capability_block"
  | "typing_telemetry_block"
  | "typing_rendering_block"
  | "parsing"
  | "validating"
  | "normalizing"
  | "planning"
  | "compiling"
  | "verifying"
  | "success";

export default function SMLPortfolioPage() {
  // --- Animation State Machine & Properties ---
  const [status, setStatus] = useState<AppStatus>("idle");
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [compilerStatusText, setCompilerStatusText] = useState<string>("Waiting for SML input...");

  // --- Computeds ---
  const projectCount = portfolioProjects.length;
  const completedProjectCount = portfolioProjects.filter(p => p.status === "complete").length;
  
  const portfolioStatusText = completedProjectCount >= 3 
    ? "SML-built applications are ready to showcase."
    : "More SML-built projects are being prepared.";

  // --- Procedural Logic Layer Simulation Hook ---
  useEffect(() => {
    const timers: Record<AppStatus, { next: AppStatus; text: string; delay: number; line?: number }> = {
      idle: {
        next: "opening_editor",
        text: "Opening VS Code workspace...",
        delay: 500,
        line: 0,
      },
      opening_editor: {
        next: "showing_file_tree",
        text: "Loading HandMovementDashboard.sml...",
        delay: 600,
      },
      showing_file_tree: {
        next: "typing_system_block",
        text: "Writing system declaration...",
        delay: 600,
      },
      typing_system_block: {
        next: "typing_runtime_block",
        text: "Writing browser runtime rules...",
        delay: 900,
        line: 6,
      },
      typing_runtime_block: {
        next: "typing_dependency_block",
        text: "Declaring MediaPipe dependency...",
        delay: 900,
        line: 10,
      },
      typing_dependency_block: {
        next: "typing_capability_block",
        text: "Declaring camera capability...",
        delay: 900,
        line: 14,
      },
      typing_capability_block: {
        next: "typing_telemetry_block",
        text: "Modeling hand telemetry...",
        delay: 900,
        line: 19,
      },
      typing_telemetry_block: {
        next: "typing_rendering_block",
        text: "Declaring canvas hand skeleton rendering...",
        delay: 900,
        line: 23,
      },
      typing_rendering_block: {
        next: "parsing",
        text: "Parsing SML source into compiler AST...",
        delay: 900,
        line: 29,
      },
      parsing: {
        next: "validating",
        text: "Validating identifiers, dependencies, runtime, and assets...",
        delay: 600,
      },
      validating: {
        next: "normalizing",
        text: "Normalizing SML into internal compiler representation...",
        delay: 600,
      },
      normalizing: {
        next: "planning",
        text: "Planning Next.js App Router file structure...",
        delay: 600,
      },
      planning: {
        next: "compiling",
        text: "Compiling runnable Next.js application...",
        delay: 600,
      },
      compiling: {
        next: "verifying",
        text: "Verifying generated files, install commands, and runtime checks...",
        delay: 600,
      },
      verifying: {
        next: "success",
        text: "STATUS: VALID. Hand tracking dashboard compiled successfully.",
        delay: 600,
      },
      success: {
        next: "success",
        text: "STATUS: VALID. Hand tracking dashboard compiled successfully.",
        delay: 0,
      },
    };

    if (status === "success") return;

    const step = timers[status];

    const timer = setTimeout(() => {
      if (typeof step.line === "number") {
        setCurrentLine(step.line);
      }

      setStatus(step.next);
      setCompilerStatusText(step.text);
    }, step.delay);

    return () => clearTimeout(timer);
  }, [status]);

  // Restart trigger
  const handleResetAnimation = () => {
    setStatus("idle");
    setCurrentLine(0);
    setCompilerStatusText("Restarting simulation pipeline...");
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Header / Responsive Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-70 bg-[#0B0F19] border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 p-2 rounded-lg text-white font-mono font-bold text-sm tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Jorj</span>
            </div>
            
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#hero" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#demo" className="hover:text-purple-400 transition-colors">SML Demo</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Showcase</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About SML</a>
            <a href="#contact" className="hover:text-purple-400 border border-purple-500/30 px-3 py-1.5 rounded-full hover:bg-purple-500/10 transition-all">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{portfolioStatusText}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Jurdel Gallano</span>
            </h1>
            <p className="text-xl text-purple-300 font-medium">
              Physics Graduate and SML Developer
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              I design and build experimental software using SML, a language I created to treat AI as a compiler. Instead of writing only traditional code, I use structured SML prompts to describe software systems, logic, workflows, interfaces, and runtime behavior so AI can generate working applications.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>Based in: Philippines</span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5">
                Explore Projects ({projectCount})
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#demo" className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 font-medium transition-all">
                Watch AI Compiler Demo
              </a>
            </div>
          </div>

          {/* Profile Image & Glowing Background */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl -z-10 w-72 h-72 mx-auto"></div>
            <div className="relative group w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[16px] overflow-hidden glowing-accent-border flex items-center justify-center p-2">
              <img 
                src="/profile.jpg" 
                alt="Jurdel Gallano Profile" 
                onError={(e) => {
                  // Fallback if local image doesn't exist in public/ folder yet
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                }}
                className="w-full h-full object-cover rounded-[12px] filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md border border-gray-800 p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <span className="text-xs font-mono text-purple-400">Profile Picture</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-900 max-w-7xl mx-auto" />

        {/* Animated VSCode & SML Pipeline Live Demo Section */}
        <section id="demo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Live SML AI Compiler Pipeline
            </h2>
            <p className="mt-4 text-gray-400">
              Observe how the SML state machine processes declarative templates sequentially into guaranteed operational deployments.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* VS Code Panel Left */}
            <div className="lg:col-span-7 bg-[#0d1117] rounded-[16px] border border-gray-800 shadow-2xl flex flex-col overflow-hidden min-h-[380px]">
              <div className="bg-[#161b22] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  <span className="ml-2 font-mono text-xs text-gray-400">VS Code</span>
                </div>
                <button 
                  onClick={handleResetAnimation}
                  className="p-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
                  title="Restart SML Workflow Simulation"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Re-run Pipeline</span>
                </button>
              </div>

              <div className="p-6 flex-grow font-mono text-sm overflow-y-auto space-y-2 select-none">
                {animationCodeLines.map((lineObj) => {
                  const lineLimit =
                    status === "typing_system_block"
                      ? 6
                      : status === "typing_runtime_block"
                      ? 10
                      : status === "typing_dependency_block"
                      ? 14
                      : status === "typing_capability_block"
                      ? 19
                      : status === "typing_telemetry_block"
                      ? 23
                      : status === "typing_rendering_block"
                      ? 29
                      : [
                          "parsing",
                          "validating",
                          "normalizing",
                          "planning",
                          "compiling",
                          "verifying",
                          "success",
                        ].includes(status)
                      ? 29
                      : currentLine;

                  const isVisible = lineLimit >= lineObj.line;

                  return (
                    <div 
                      key={lineObj.line} 
                      className={`transition-all duration-300 flex items-start gap-4 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}
                    >
                      <span className="text-gray-600 select-none text-right w-5 text-xs pt-0.5">{lineObj.line}</span>
                      <pre className={`${lineObj.text.includes("declare") ? "text-purple-400" : lineObj.text.includes("compile") ? "text-indigo-400" : "text-gray-300"}`}>
                        {lineObj.text}
                      </pre>
                    </div>
                  );
                })}
                {status === "opening_editor" && (
                  <div className="text-gray-500 italic text-xs animate-pulse">
                    Opening VS Code workspace...
                  </div>
                )}

                {status === "showing_file_tree" && (
                  <div className="text-gray-500 italic text-xs animate-pulse">
                    Loading HandMovementDashboard.sml...
                  </div>
                )}
                {[
                  "typing_system_block",
                  "typing_runtime_block",
                  "typing_dependency_block",
                  "typing_capability_block",
                  "typing_telemetry_block",
                  "typing_rendering_block",
                ].includes(status) && (
                  <div className="inline-block w-2 h-4 bg-purple-500 animate-pulse ml-9"></div>
                )}
              </div>
            </div>

            {/* AI Compiler Panel Right */}
            <div className="lg:col-span-5 bg-gray-900 rounded-[16px] border border-purple-900/40 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-400" />
                    <h3 className="font-mono text-sm font-bold tracking-wide uppercase text-gray-300">AI Compiler Target Output</h3>
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    STATUS: {status.toUpperCase()}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/40 p-4 rounded-xl border border-gray-800 font-mono text-xs space-y-2">
                    <div className="text-gray-400">&gt;&gt; telemetry logs:</div>
                    <div className="text-purple-300 font-medium animate-pulse">{compilerStatusText}</div>
                  </div>

                  {/* Operational Flow Metrics Matrix */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                      <div className="text-gray-400">Parse Stage</div>
                      <div className={`mt-1 font-bold ${status !== "idle" && status !== "opening_editor" ? "text-green-400" : "text-gray-600"}`}>
                        {status !== "idle" && status !== "opening_editor" ? "✓ EXTRACTED" : "PENDING"}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                      <div className="text-gray-400">Validate Stage</div>
                      <div
                        className={`mt-1 font-bold ${
                          [
                            "typing_system_block",
                            "typing_runtime_block",
                            "typing_dependency_block",
                            "typing_capability_block",
                            "typing_telemetry_block",
                            "typing_rendering_block",
                            "parsing",
                          ].includes(status)
                            ? "text-yellow-500"
                            : [
                                "validating",
                                "normalizing",
                                "planning",
                                "compiling",
                                "verifying",
                                "success",
                              ].includes(status)
                            ? "text-green-400 animate-pulse"
                            : "text-gray-600"
                        }`}
                      >
                        {[
                          "typing_system_block",
                          "typing_runtime_block",
                          "typing_dependency_block",
                          "typing_capability_block",
                          "typing_telemetry_block",
                          "typing_rendering_block",
                          "parsing",
                        ].includes(status)
                          ? "ANALYZING"
                          : [
                              "validating",
                              "normalizing",
                              "planning",
                              "compiling",
                              "verifying",
                              "success",
                            ].includes(status)
                          ? "✓ VALIDATED"
                          : "PENDING"}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                      <div className="text-gray-400">Compile Output</div>
                      <div className={`mt-1 font-bold ${status === "success" ? "text-green-400" : status === "compiling" ? "text-indigo-400 animate-bounce" : "text-gray-600"}`}>
                        {status === "success" ? "✓ NEXT.JS READY" : status === "compiling" ? "GENERATING" : "PENDING"}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-800">
                      <div className="text-gray-400">Framework</div>
                      <div className="mt-1 font-bold text-gray-300">Next.js 15</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic App Preview Card sliding in at completion state */}
              <div className={`mt-6 p-4 rounded-xl border transition-all duration-500 ${
                status === "success" 
                  ? "bg-purple-950/20 border-purple-500/40 translate-y-0 opacity-100" 
                  : "bg-gray-800/10 border-gray-800/40 translate-y-4 opacity-30 pointer-events-none"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-mono text-gray-300 font-bold">Generated Build Output Panel</span>
                </div>
                <p className="text-xs text-gray-400">
                  AI compiled target code structure safely matches specified variables without structural mutation logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Grid Section */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Project Showcase Section
              </h2>
              <p className="mt-2 text-purple-300 font-mono text-sm">
                Iterated rendering module outputs for active structural entities
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-xs font-mono text-gray-400 flex items-center gap-4">
              <div>Total Objects: <span className="text-purple-400 font-bold">{projectCount}</span></div>
              <div className="w-px h-4 bg-gray-800"></div>
              <div>Completed: <span className="text-green-400 font-bold">{completedProjectCount}</span></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-[#111827] rounded-[16px] border border-gray-800 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-purple-400 tracking-wider bg-purple-500/10 px-2.5 py-1 rounded-full">
                      {project.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Revised linkable title header */}
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.url ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline inline-flex items-center gap-1.5"
                      >
                        {project.title}
                        <ExternalLink className="w-4 h-4 text-gray-500 inline group-hover:text-purple-400 transition-colors" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Revised bottom section with explicit links */}
                <div className="mt-6 pt-4 border-t border-gray-800/80 space-y-3">
                  <div className="text-xs text-gray-400 font-mono">
                    <span className="text-gray-500 block mb-1">Architecture stack:</span>
                    {project.stack}
                  </div>
                  
                  {project.url && (
                    <div className="pt-2">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 w-fit transition-colors"
                      >
                        Visit Live Demo &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed SML Architecture Technical Reference Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/40 border-y border-gray-900">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Understanding Software Modeling Language (SML)
              </h2>
              <p className="text-gray-400 leading-relaxed">
                SML describes the structure and behavior of software in a compiler-friendly format. In the hand-tracking project, SML defines the browser runtime, camera access, MediaPipe dependency, telemetry model, and canvas rendering rules before the AI compiler generates the working Next.js application.
              </p>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-500/20 text-purple-400 rounded">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Strict Structural Verification</h4>
                    <p className="text-xs text-gray-400">All entities must validate standard object inheritance declarations before compile phase triggers code synthesis steps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-500/20 text-purple-400 rounded">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Separation of Logical Layering</h4>
                    <p className="text-xs text-gray-400">Clearly isolates infrastructure variables (technical runtimes) from operational flow mechanisms (workflows).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B0F19] p-6 rounded-[16px] border border-gray-800 font-mono text-xs text-purple-300 space-y-4">
              <div className="text-gray-500 border-b border-gray-800 pb-2">
                // Hand Tracking SML Construct Matrix
              </div>

              <div>
                <span className="text-blue-400">declare</span> -&gt; system [HandMovementDashboard]
              </div>

              <div>
                <span className="text-sky-400">declare</span> -&gt; runtime [BrowserRuntime]
              </div>

              <div>
                <span className="text-emerald-400">declare</span> -&gt; dependency [MediaPipeTasksVision]
              </div>

              <div>
                <span className="text-yellow-400">declare</span> -&gt; capability [CameraAccess]
              </div>

              <div>
                <span className="text-pink-400">declare</span> -&gt; object [HandTelemetry]
              </div>

              <div>
                <span className="text-purple-400">declare</span> -&gt; rendering [HandSkeletonOverlay]
              </div>

              <div>
                <span className="text-indigo-400">compile</span> -&gt; working_hand_tracking_dashboard
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Location Summary Grid Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">Let's Connect</h2>
            <p className="text-gray-400">
              Interested in experimental AI architectures, structured compilers, or modern declarative design environments? Reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="mailto:gallanojurdel@gmail.com"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full text-white transition-all transform hover:scale-105"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/secretcrew2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full text-white transition-all transform hover:scale-105"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/cytyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full text-white transition-all transform hover:scale-105"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/cytyy.yyy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full text-white transition-all transform hover:scale-105"
                title="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/cytyy.yy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full text-white transition-all transform hover:scale-105"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs font-mono text-gray-500 pt-4">
              System Instance Profile Context: {portfolioProjects.length} Verified Components Active
            </div>
          </div>
        </section>
      </main>

      {/* Footer System Branding Layout */}
      <footer className="bg-[#060911] border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>&copy; 2026 Jurdel Gallano. Built completely using verified SML standards.</div>
          <div className="flex items-center gap-2 text-purple-400">
            <span>Next.js 15 App Router Deployment Target</span>
          </div>
        </div>
      </footer>
    </div>
  );
}