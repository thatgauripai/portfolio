import "./CoursesAchievements.css";
import { motion } from "framer-motion";

export default function CoursesAchievements() {
  return (
    <div className="courses-container">
      <motion.h1 
        className="page-title"
        data-aos="fade-down"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Courses & Achievements
      </motion.h1>

      {/* SKILLS SECTION */}
      

      {/* CERTIFICATES SECTION */}
      <SectionCard title="Certificates">
        <CertificateCard
          title="AWS Cloud Engineer"
          duration="Aug 2024 – Mar 2025"
          issuer="Issued by Amrita Viswa Vidyapeetham, Coimbatore"
          description="This course provided hands-on experience with cloud computing concepts and AWS services like EC2, S3, Lambda, and CloudFormation. I learned how to design scalable, fault-tolerant architectures, manage cloud security, automate infrastructure using IaC, and monitor application performance using AWS-native tools."
          image="/aws_certificate.jpg"
          alt="AWS Certificate"
        />

        <CertificateCard
          title='AI Journey with PyTorch Workshop'
          duration='March 2025'
          issuer='Organized by IETE Amrita Student Forum'
          description='Gained hands-on experience in deep learning using PyTorch, covering essential AI concepts, model development, training, and optimization techniques. Helped deepen my practical understanding of machine learning tools.'
          image='/pytorch_certificate.jpg'
          alt='PyTorch Workshop Certificate'
          delay={100}
        />
      </SectionCard>

      {/* HACKATHON SECTION */}
      <SectionCard title="Hackathons">
        <CertificateCard
          title="Sustainovate'25 Hackathon"
          duration="March 31, 2025"
          issuer="Organized by NEXINTEL SYNERGY PVT LTD"
          description="Participated as a solo developer in the Sustainovate'25 hackathon under the theme of 'fitness'. Designed and submitted MoodFit – a mental wellness platform built using Next.js and Tailwind CSS to promote mental health and emotional well-being."
          image="/sustainovate_certificate.jpg"
          alt="Sustainovate Hackathon Certificate"
        />
      </SectionCard>

      {/* VOLUNTEER EXPERIENCE SECTION */}
      <SectionCard title="Volunteer Experience">
        <p>
          Participated in a meaningful <strong>Seedball Plantation Initiative</strong> focused on environmental conservation. I helped prepare seedballs by selecting and packing seeds into nutrient-rich soil, contributing to natural afforestation efforts.
        </p>
        <p>
          This experience helped me understand sustainable reforestation methods, and I look forward to more opportunities to create a positive impact.
        </p>
        <div className="image-box" data-aos="zoom-in">
          <img src="/voluteer_certificate.jpg" alt="Volunteer Certificate" />
        </div>
      </SectionCard>
    </div>
  );
}

// Section wrapper
function SectionCard({ title, children }) {
  return (
    <section className="card" data-aos="fade-up">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Certificate/Experience entry
function CertificateCard({ title, duration, issuer, description, image, alt, delay = 0 }) {
  return (
    <article className="cert-section" data-aos="fade-right" data-aos-delay={delay}>
      <p>
        <strong>{title}</strong> <br />
        {duration} <br />
        <em>{issuer}</em>
      </p>
      <p>{description}</p>
      <motion.div 
        className="image-box"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={image} alt={alt} />
      </motion.div>
    </article>
  );
}

/* TECHNICAL SKILLS SECTION */
<section className="card" data-aos="fade-up">
  <h2>Technical Skills</h2>
  <div className="skills-table">
    {/* Languages */}
    <div className="skill-row">
      <div className="skill-label">Languages</div>
      <div className="skill-bubbles">
        <span className="bubble">C</span>
        <span className="bubble">C++</span>
        <span className="bubble"><img src="/icons/python.png" alt="Python" />Python</span>
        <span className="bubble">Java</span>
      </div>
    </div>

    {/* Tools/Tech */}
    <div className="skill-row">
      <div className="skill-label">Tools / Tech</div>
      <div className="skill-bubbles">
        <span className="bubble">Git</span>
        <span className="bubble">VS Code</span>
        <span className="bubble">Linux</span>
        <span className="bubble">MySQL</span>
      </div>
    </div>

    {/* Concepts */}
    <div className="skill-row">
      <div className="skill-label">Concepts</div>
      <div className="skill-bubbles">
        <span className="bubble">Data Structures</span>
        <span className="bubble">OOP</span>
        <span className="bubble">DBMS</span>
        <span className="bubble">Operating Systems</span>
      </div>
    </div>

    {/* Frameworks/Libraries */}
    <div className="skill-row">
      <div className="skill-label">Frameworks / Libraries</div>
      <div className="skill-bubbles">
        <span className="bubble">React.js</span>
        <span className="bubble">Next.js</span>
        <span className="bubble">TailwindCSS</span>
        <span className="bubble">Bootstrap</span>
        <span className="bubble">JavaScript</span>
        <span className="bubble">NodeJS</span>
        <span className="bubble">Flutter</span>
        <span className="bubble">React Native</span>
        <span className="bubble">Express.js</span>
      </div>
    </div>
  </div>
</section>
