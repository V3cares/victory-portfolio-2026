import { useState } from "react";
import cocred from "./assets/cocred.png";
import exhibit1 from "./assets/exhibit1.png";
import exhibit2 from "./assets/exhibit2.png";
import exhibit3 from "./assets/exhibit3.jpeg";



const projects = [
  {
    number: "01",
    type: "Eatry platform",
    title: "Chowcred",
    image: cocred,
    imageAlt: "Young & Gifted learning platform screenshot",
    description:
      "A registration website for getting meals on loan, eat now and pay later",
    tags: ["HTML5", "CSS3", "JavaScript", "Figma"],
    link: "https://chowcred.netlify.app/",
    linkLabel: "Visit project",
  },
  {
    number: "02",
    type: "Technology brand",
    title: "V3Cares Technologies",
    image: exhibit1,
    imageAlt: "V3Cares Technologies website screenshot",
    description:
      "V3Cares Technologies is a technology company that builds modern websites, mobile applications, and digital solutions to help businesses grow and turn ideas into reality. We also provide coding education and mentorship to empower the next generation of developers.",
    tags: ["React Js", "Brand", "UI/UX"],
    link: "https://v3cares.netlify.app/",
    linkLabel: "Visit website",
  },
  {
    number: "03",
    type: "DOD Solutions Brand",
    title: "DOD Solutions Brand",
    image: exhibit2,
    imageAlt: "Developer portfolio website screenshot",
    description:
      "A technology brand focused on building digital experiences and helping turn ideas into useful online products",
    tags: ["HTML5", "CSS3", "UI/UX"],
    link: "https://dodsolutions.netlify.app/",
    linkLabel: "Current website",
  },
];


const skills = [
  { title: "Frontend development", text: "HTML, CSS, JavaScript, React, responsive layouts" },
  { title: "Data Analysis", text: "Excel, SQL, PHP, Data mining, Data Visualization, Data cleansing"},
  { title: "Interface building", text: "Turning ideas and designs into accessible web experiences" },
  { title: "Teaching & mentorship", text: "Helping beginners learn by practising and building projects" },
  { title: "Creative problem-solving", text: "Breaking complex ideas into clear, manageable steps" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Victory home">
          <span className="brand-mark">V.</span>
          <span>VICTORY<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span>
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Skills", "#skills"],
            ["Mentorship", "#mentorship"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"></span> WEB DEVELOPER · CODING TUTOR</p>
            <h1>I build for the web.<br />I teach others to <span className="accent">build, too.</span></h1>
            <p className="hero-intro">
              I'm Victory, a developer and coding tutor who enjoys turning ideas into
              useful digital experiences and helping aspiring developers find their feet in tech.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="button button-quiet" href="#mentorship">Learn with me <Arrow /></a>
            </div>
            <div className="hero-meta">
              <span><i className="meta-line"></i> Building the future with your ideas, one line at a time</span>
              <span className="hero-location">Based in Nigeria · Open to opportunities</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative code-inspired graphic">
            <div className="art-glow"></div>
            <div className="code-window">
              <div className="window-bar">
                <span className="window-dot red"></span><span className="window-dot yellow"></span><span className="window-dot green"></span>
                <span className="window-title">about-me.jsx</span>
              </div>
              <div className="code-content">
                <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
                <p className="indent"><span className="code-red">name</span>: <span className="code-green">"Victory"</span>,</p>
                <p className="indent"><span className="code-red">focus</span>: <span className="code-green">"Web development"</span>,</p>
                <p className="indent"><span className="code-red">mission</span>: <span className="code-green">"Teach & build"</span>,</p>
                <p className="indent"><span className="code-red">mindset</span>: <span className="code-green">"Keep learning"</span></p>
                <p>{'}'};</p>
                <div className="code-divider"></div>
                <p><span className="code-purple">function</span> <span className="code-blue">buildTheFuture</span>() {'{'}</p>
                <p className="indent"><span className="code-purple">return</span> <span className="code-green">"ideas → impact"</span>;</p>
                <p>{'}'}</p>
                <p className="code-cursor">▍</p>
              </div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-symbol">{"</>"}</span> Learning by building</div>
            <div className="floating-chip chip-bottom"><span className="chip-dot"></span> Curiosity-driven developer</div>
            <div className="art-index">01 / INTRODUCTION</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> Scroll to explore</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <p>MY WORK SITS AT THE INTERSECTION OF</p>
            <div className="strip-items"><span>Code</span><b>×</b><span>Meet</span><b>×</b><span>Creativity</span></div>
          </div>
        </section>

        <section className="section section-wrap about-section" id="about">
          <div className="section-label"><span>01</span> / A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2>Technology is powerful.<br /><span className="muted-heading">Sharing what you learn makes it even more powerful.</span></h2>
            <div className="about-copy">
              <p>
                I enjoy building websites and web applications that are clear, responsive,
                and useful. I’m continuously sharpening my frontend skills, exploring better
                ways to solve problems, and learning through hands-on projects.
              </p>
              <p>
                I also teach beginners how to code. I believe a person’s starting point
                should not define how far they can go — with guidance, practice, and
                consistency, more people can find a place in technology.
              </p>
              <a className="text-link" href="#contact">A little more about working together <Arrow /></a>
            </div>
          </div>
          <div className="values-row">
            <div><span className="value-number">01</span><h3>Build with purpose</h3><p>Start with the problem and create something that genuinely helps.</p></div>
            <div><span className="value-number">02</span><h3>Stay a student</h3><p>Keep learning, keep experimenting, and keep improving the craft.</p></div>
            <div><span className="value-number">03</span><h3>Grow together</h3><p>Share knowledge and make the path easier for the next person.</p></div>
          </div>
        </section>

       
<section className="section work-section" id="work">
  <div className="section-wrap">
    <div className="section-heading">
      <div>
        <div className="section-label">
          <span>02</span> / SELECTED WORK
        </div>
        <h2>
          Ideas made <span className="accent">real.</span>
        </h2>
      </div>
      <p>
        A few projects and platforms connected to my work in development
        and coding education.
      </p>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className="project-visual">
            <span className="project-count">
              {project.number} / 03
            </span>

            <a
              className="project-image-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title}`}
            >
              <img
                className="project-image"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
              <span className="image-overlay">
                View project ↗
              </span>
            </a>

            <span className="project-type">{project.type}</span>
          </div>

          <div className="project-info">
            <div className="project-title-row">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.linkLabel}: ${project.title}`}
              >
                <Arrow />
              </a>
            </div>

            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              className="text-link project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel} <Arrow />
            </a>
          </div>
        </article>
      ))}
    </div>

    <p className="project-note">
      Explore my projects to see my work in web development and coding education.
    </p>
  </div>
</section>

        <section className="section section-wrap skills-section" id="skills">
          <div className="section-heading">
            <div><div className="section-label"><span>03</span> / WHAT I BRING</div><h2>Skills with a <span className="accent">purpose.</span></h2></div>
            <p>I’m focused on developing practical skills that help me build better products and support other learners.</p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
                <span className="skill-arrow"><Arrow /></span>
              </div>
            ))}
          </div>
          <div className="tech-stack">
            <span className="stack-label">TOOLS & TECHNOLOGIES</span>
            {["HTML5", "CSS3", "JavaScript", "React", "Git & GitHub", "VS Code", "Figma", "Power Bi"].map(tool => <span className="stack-pill" key={tool}>{tool}</span>)}
          </div>
        </section>

        <section className="mentorship-section" id="mentorship">
          <div className="section-wrap mentorship-grid">
            <div className="mentorship-visual">
              <div className="mentor-card">
                    <img
                        className="mentor-bg"
                        src={exhibit3}
                        alt=""
                      />
              </div>
              <span className="mentor-orbit orbit-one"></span><span className="mentor-orbit orbit-two"></span>
            </div>
            <div className="mentorship-copy">
              <div className="section-label"><span>04</span> / TEACHING & MENTORSHIP</div>
              <h2>Learn today.<br /><span className="accent">Build tomorrow.</span></h2>
              <p>
                I help aspiring developers take their first steps into web development
                through beginner-friendly lessons, practice, and projects. My goal is to
                make learning feel less intimidating and more achievable.
              </p>
              <ul className="check-list">
                <li><span>✓</span> Beginner-friendly web development learning</li>
                <li><span>✓</span> Practical exercises and project-based practice</li>
                <li><span>✓</span> Encouragement to keep learning and building</li>
              </ul>
              <a className="button button-primary" href="https://youngandgifted.netlify.app/" target="_blank" rel="noreferrer">Explore Young & Gifted <Arrow /></a>
              <p className="small-note">Update this section with your current cohort dates, course details, and registration status before publishing.</p>
            </div>
          </div>
        </section>

        <section className="section section-wrap journey-section">
          <div className="section-label"><span>05</span> / THE JOURNEY</div>
          <div className="journey-grid">
            <h2>Still learning.<br /><span className="muted-heading">Still building.</span></h2>
            <div>
              <p>
                My journey in technology is ongoing. Each project, lesson, and challenge
                teaches me something new. I want to keep growing as a developer while
                helping more young people see what they can create with code.
              </p>
              <p className="journey-quote">“The goal isn't to know everything. It's to keep getting better and help someone else grow along the way.”</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>06</span> / LET'S CONNECT</div>
            <h2>Have an idea?<br />Let's <span className="accent">build it.</span></h2>
            <p>I'm open to frontend opportunities, meaningful collaborations, and conversations about teaching and technology.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:Orjiuchechukwu80@gmail.com">Email me <Arrow /></a>
              <a className="button button-outline" href="https://www.linkedin.com/in/victory-uche-707b1b319/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
            </div>
            <div className="contact-details">
              <a href="mailto:Orjiuchechukwu80@gmail.com">Orjiuchechukwu80@gmail.com</a>
              <a href="https://www.linkedin.com/in/victory-orji-707b1b319/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://github.com/V3cares" target="_black">Github <Arrow /></a>
              <a href="https://v3cares.netlify.app/" target="_blank" rel="noreferrer">V3Cares Technologies <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">V.</span><span>VICTORY<span className="brand-dot">.</span></span></a>
          <p>Designed with intention. Built with curiosity.</p>
          <span>© {new Date().getFullYear()} Victory</span>
        </div>
      </footer>
    </>
  );
}

export default App;
