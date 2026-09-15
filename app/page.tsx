const projects = [
  {
    number: "01",
    eyebrow: "FEATURED / ACTIVE",
    title: "Agentic AI Platform",
    description:
      "A production-oriented AI workspace for agents that retrieve context, use tools, interact with external services, and execute multi-step workflows.",
    stack: ["Python", "OpenAI API", "RAG", "Tool Calling", "Vector DB"],
    details: [
      "Implemented the core tool loop for model → tool call → tool result → final response.",
      "Added web search, page extraction, and document-upload backend capabilities.",
      "Designing retrieval, evaluation, observability, and workflow execution as the next system layers.",
    ],
    status: "In active development",
    href: "#",
  },
  {
    number: "02",
    eyebrow: "DATA ENGINEERING",
    title: "Retail Sales Analytics Pipeline",
    description:
      "Cloud data pipeline that moves retail event data from ingestion through transformation, analytics modeling, and dashboard delivery.",
    stack: ["Python", "Airflow", "BigQuery", "GCP", "Docker"],
    details: [
      "Built ingestion from source data into Google Cloud Storage.",
      "Orchestrated Python ETL jobs with Cloud Composer / Airflow.",
      "Structured bronze, silver, and analytics layers in BigQuery for downstream analysis.",
    ],
    status: "Completed project",
    href: "#",
  },
  {
    number: "03",
    eyebrow: "ML / RESEARCH",
    title: "Remote Sensing & ML Research",
    description:
      "Research engineering work on Python pipelines, LiDAR datasets, image segmentation, and understory vegetation mapping at York University.",
    stack: ["Python", "PyTorch", "Computer Vision", "LiDAR"],
    details: [
      "Prepared structured datasets from field measurements and LiDAR sources.",
      "Supported segmentation experiments and model evaluation workflows.",
      "Collaborated across geomatics, remote sensing, and forest ecology research.",
    ],
    status: "Research experience",
    href: "#experience",
  },
];

const skills = [
  ["Languages", "Python · SQL · C · JavaScript"],
  ["AI / ML", "PyTorch · LLM APIs · RAG · Embeddings · Tool Calling"],
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
          D / T
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
            <p className="section-label">SOFTWARE & AI ENGINEER</p>
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
            <p className="section-label">SELECTED WORK</p>
            <h2>Projects that show how I build.</h2>
          </div>
          <p className="section-intro">
            A focused selection spanning agentic AI, cloud data systems, and
            machine-learning research.
          </p>
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
                      {project.number === "03" ? "View experience" : "Case study"}
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-status">
                <span>{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell" id="experience">
        <div className="section-heading-row">
          <div>
            <p className="section-label">EXPERIENCE</p>
            <h2>Research engineering experience.</h2>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-aside">
            <p>York University</p>
            <span>May 2024 — Apr 2025</span>
          </div>

          <div className="experience-main">
            <div>
              <p className="role">Research Assistant</p>
              <h3>
                Machine learning, data pipelines, and remote sensing research.
              </h3>
            </div>

            <div className="experience-points">
              <p>
                Built Python pipelines for field measurements and LiDAR
                datasets supporting machine-learning research in remote
                sensing.
              </p>
              <p>
                Prepared labeled and structured datasets for image
                segmentation and understory vegetation mapping.
              </p>
              <p>
                Supported model evaluation, literature review, technical
                reporting, and interdisciplinary research collaboration.
              </p>
            </div>
          </div>
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

        <div className="education-grid">
          <div>
            <p className="section-label">EDUCATION</p>
          </div>

          <div className="education-items">
            <div>
              <strong>B.Sc. (Hons), Computer Science</strong>
              <span>York University · 2026</span>
            </div>
            <div>
              <strong>B.Sc., Psychology</strong>
              <span>York University</span>
            </div>
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
        <span>© 2026 Junwei Quan</span>
      </footer>
    </main>
  );
}
