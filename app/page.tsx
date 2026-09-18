const projects = [
  {
    number: "01",
    eyebrow: "FEATURED / ACTIVE",
    title: "Enterprise AI Platform",
    description:
      "A production-oriented AI workspace for building agents that retrieve knowledge, use external tools, and execute evaluated, multi-step workflows.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "OpenAI API",
      "LangGraph",
      "PostgreSQL/pgvector",
    ],
    details: [
      "Implemented agent tool-calling loops with bounded execution, source citations, and integrations for web search, Google Drive, and Gmail drafts.",
      "Built document ingestion and hybrid semantic–keyword retrieval using local embeddings and PostgreSQL/pgvector.",
      "Developed versioned workflows with automated evaluations, human-calibrated grading, and publication approval gates.",
      "Added resilient background execution with Celery, Redis, checkpoint recovery, and real-time run monitoring.",
    ],
    status: "In active development",
    href: "https://github.com/Wei-cyber/Sovereignty",
  },
  {
    number: "02",
    eyebrow: "FEATURED / ACTIVE",
    title: "Agent-Native Collaboration Studio",
    description:
      "Local-first 3D modeling studio where one person and a WebMCP-capable browser agent can edit the same live scene",
    stack: ["TypeScript", "React", "Three.js", "React Three Fiber", "WebMCP", "Zustand", "IndexedDB", "Vite", "Wrangler", "Playwright"],
    details: [
      "Registered structured WebMCP tools that let browser agents inspect scenes, find objects, and perform validated modeling operations.",
      "Routed human and agent edits through the same command layer for autosave, activity history, conflict detection, and undo/redo.",
      "Implemented parametric primitives, PBR materials, grouping, non-destructive Boolean operations, atomic multi-step transactions, and JSON/GLB import and export.",
      "Added unit and browser tests covering scene commands, WebMCP registration, tool execution, cancellation, concurrent-edit rebasing, and interface regressions."
    ],
    status: "Completed project",
    href: "https://github.com/Wei-cyber/SynMod",
    demo: {
      embedUrl: "https://www.youtube-nocookie.com/embed/L7lu2ggAZJg",
      watchUrl: "https://www.youtube.com/watch?v=L7lu2ggAZJg",
    },
  },
  {
    number: "03",
    eyebrow: "DATA ENGINEERING",
    title: "Amazon product intelligence",
    description:
      "Tracks Amazon product listings (price, search rank, reviews) over time",
    stack: ["Python", "Airflow", "Dash", "Docker", "ETL"],
    details: [
      "Built an ETL platform that ingests product pricing and search-ranking data from external APIs via Airflow-scheduled workflows, with built-in data validation, and presents trends through an interactivedashboard supporting pricing analysis, competitive monitoring, and ranking-volatility detection",
      "Implemented scheduled workflows using Airflow, API integration, data validation, and analytical visualizations",
      "Containerized components with Docker for reproducible deployment and development.",
    ],
    status: "Completed project",
    href: "https://github.com/Wei-cyber/productIntelligence",
  },
  {
    number: "04",
    eyebrow: "ML / RESEARCH",
    title: "Remote Sensing & ML Research",
    description:
      "Python data pipelines and TensorFlow-based image segmentation supporting remote sensing and vegetation mapping research at York University.",
    stack: ["Python", "TensorFlow", "Image Segmentation", "Geospatial Data", "LiDAR"],
    details: [
      "Built end-to-end pipelines that transformed field measurements, geospatial data, and LiDAR datasets into structured machine-learning inputs.",
      "Translated research objectives into image segmentation workflows, from dataset preparation to model evaluation and experimental analysis.",
      "Worked with researchers and domain experts to resolve data-quality issues, document methods, and present findings.",
    ],
    status: "Research experience",
    href: "#experience",
  },
];

const skills = [
  ["Languages", "Python · SQL · C · JavaScript"],
  ["AI / ML", "TensorFlow · PyTorch · LLM APIs · RAG · Embeddings"],
  ["Data / Cloud", "Airflow · BigQuery · GCP · PostgreSQL · Docker"],
  ["Engineering", "Git · REST APIs · Linux · x86-64 · Data Pipelines"],
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 14L14 4M7 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="Back to top">
          Junwei Quan
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <a href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button button-small" href="/resume.pdf">
            Resume
          </a>
        </div>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" />
          Toronto, Canada · Open to opportunities
        </div>

        <div className="hero-grid">
          <div>
            <p className="section-label">Software & AI Builder</p>
            <h1>
              Building reliable
              <br />
              AI systems and
              <br />
              data infrastructure.
            </h1>
          </div>

          <div className="hero-copy">
            <p>
              Computer Science graduate with experience in Python, machine
              learning research, cloud data engineering, and agentic AI
              application development.
            </p>

            <div className="hero-actions">
              <a className="button" href="#projects">
                View selected work
              </a>
              <a className="text-link" href="mailto:jewaytran@gmail.com">
                Get in touch <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          <span>York University · B.Sc. (Hons) Computer Science</span>
          <span>Python · AI · Backend · Data</span>
        </div>
      </section>

      <section className="section page-shell" id="projects">
        <div className="section-heading-row">
          <div>
            {/* <p className="section-label">SELECTED WORK</p> */}
            <h2>Projects</h2>
          </div>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.eyebrow}</span>
              </div>

              <div className="project-main">
                <div className="project-title-block">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-details">
                  <div className="detail-list">
                    {project.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>

                  <div className="project-footer">
                    <div className="tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a className="project-link" href={project.href}>
                      {project.number === "04" ? "View experience" : "Case study"}
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>

              {project.demo && (
                <div className="project-demo">
                  <div className="project-demo-heading">
                    <h4>Project demo</h4>
                    <a
                      className="text-link"
                      href={project.demo.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube <ArrowIcon />
                    </a>
                  </div>
                  <iframe
                    className="project-demo-player"
                    src={project.demo.embedUrl}
                    title={`${project.title} demo video`}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}

              <div className="project-status">
                <span>{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell" id="about">
        <div className="about-grid">
          <div>
            <p className="section-label">ABOUT</p>
            <h2>
              I work at the intersection of AI, backend systems, and data.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I&apos;m a Computer Science graduate from York University focused
              on building software that turns complex AI and data workflows
              into reliable systems.
            </p>
            <p>
              My experience ranges from LiDAR and computer-vision research to
              cloud data pipelines and agentic AI applications that combine
              LLMs, retrieval, tools, and external services.
            </p>
            <p>
              I&apos;m especially interested in production AI systems: how
              agents retrieve context, make decisions, use tools, execute
              reliably, and can be evaluated and observed.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map(([label, value]) => (
            <div className="skill-row" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta page-shell">
        <p className="section-label">LET&apos;S CONNECT</p>
        <div className="cta-grid">
          <h2>
            Looking for Software,
            <br />
            AI, and Data Engineering
            <br />
            opportunities.
          </h2>

          <div className="cta-actions">
            <a className="button button-inverse" href="mailto:jewaytran@gmail.com">
              Email me
            </a>
            <a className="text-link text-link-light" href="https://www.linkedin.com/in/junweiq/">
              LinkedIn <ArrowIcon />
            </a>
            <a className="text-link text-link-light" href="https://github.com/Wei-cyber">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer page-shell">
        <span>© 2026 JQ</span>
      </footer>
    </main>
  );
}
