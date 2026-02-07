import Experience3D from "@/components/Experience3D";
import ContactForm from "@/components/ContactForm";
import { portfolioData } from "@/data/portfolioData";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Experience3D />

            <div className={styles.content}>
                {/* Navigation / Header */}
                <header className={styles.header}>
                    <h2 className={styles.logo}>AAK.</h2>
                    <nav>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact" className={styles.cta}>Contact</a>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>
                            Building Digital <br />
                            <span className={styles.gradientText}>Experiences</span>
                        </h1>
                        <p className={styles.subtitle}>
                            {portfolioData.personal.bio}
                        </p>
                        <div className={styles.heroButtons}>
                            <a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
                            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>Github</a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className={styles.section}>
                    <h3>About Me</h3>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h4>Education</h4>
                            <ul className={styles.list}>
                                {portfolioData.education.map((edu, index) => (
                                    <li key={index}>
                                        <strong>{edu.degree}</strong>
                                        <span>{edu.institution}</span>
                                        <small>{edu.year}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>Soft Skills</h4>
                            <ul className={styles.tags}>
                                {portfolioData.skills.soft.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className={styles.section}>
                    <h3>Technical Expertise</h3>
                    <div className={styles.skillsGrid}>
                        {portfolioData.skills.technical.map((skill, index) => (
                            <div key={index} className={styles.skillCard}>
                                <div className={styles.skillIcon} /> {/* Placeholder for icon */}
                                <h4>{skill}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Industry Awareness / GitHub Strength */}
                <section className={styles.section}>
                    <h3>Industry Awareness</h3>
                    <div className={styles.grid}>
                        <div className={styles.wideCard}>
                            <h4>GitHub Strength</h4>
                            <ul className={styles.checkList}>
                                {portfolioData.githubStrength.map((point, index) => (
                                    <li key={index}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.githubLinkContainer}>
                                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                                    Visit My GitHub Profile 🔗
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section className={styles.section}>
                    <h3>Certifications & Learning</h3>
                    <div className={styles.grid}>
                        {portfolioData.certifications.map((cert, index) => (
                            <div key={index} className={styles.card}>
                                <h4>{cert.name}</h4>
                                <span className={styles.platform}>{cert.platform}</span>
                                <small className={styles.certType}>{cert.type}</small>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className={styles.section}>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactInfo}>
                            <h3>Let's Work Together</h3>
                            <p>Have a project in mind? Reach out to me via email or fill out the form.</p>
                            <div className={styles.contactDetails}>
                                <p>📧 {portfolioData.personal.email}</p>
                                <p>📍 {portfolioData.personal.location}</p>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </section>

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Ahmad Abdullah Khan. Made with Next.js & Three.js</p>
                </footer>
            </div>
        </main>
    );
}
