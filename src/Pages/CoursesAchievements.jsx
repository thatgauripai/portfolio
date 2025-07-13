import "./CoursesAchievements.css";

export default function CoursesAchievements() {
  return (
    <div className="courses-container">
      <h1 className="page-title" data-aos="fade-down">Courses & Achievements</h1>

      {/* SKILLS */}
      <section className="card" data-aos="fade-up">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C, C++, Python, Java</li>
          <li><strong>Tools/Tech:</strong> Git, VS Code, Linux, MySQL</li>
          <li><strong>Concepts:</strong> Data Structures, OOP, DBMS, Operating Systems</li>
          <li><strong>Frameworks/Libraries:</strong> React.js, Next.js, TailwindCSS, Bootstrap, JavaScript, NodeJS, Flutter, React Native, Node.js, Express.js</li>
        </ul>
      </section>

      {/* CERTIFICATES */}
      <section className="card" data-aos="fade-up">
        <h2>Certificates</h2>

        {/* AWS Certificate */}
        <div className="cert-section" data-aos="fade-right">
          <p>
            <strong>AWS Cloud Engineer</strong> <br />
            Aug 2024 – Mar 2025 <br />
            <em>Issued by Amrita Viswa Vidyapeetham, Coimbatore</em>
          </p>
          <p>
            This course provided hands-on experience with cloud computing concepts and AWS services like EC2, S3, Lambda, and CloudFormation. I learned how to design scalable, fault-tolerant architectures, manage cloud security, automate infrastructure using Infrastructure as Code (IaC), and monitor application performance using AWS-native tools. The certification helped me understand real-world cloud deployments and DevOps practices.
          </p>
          <div className="image-box">
            <img
              src="/aws_certificate.jpg"
              alt="AWS Certificate"
            />
          </div>
        </div>

        {/* PyTorch Certificate */}
        <div className="cert-section" data-aos="fade-right" data-aos-delay="100">
          <p>
            <strong>AI Journey with PyTorch Workshop</strong> <br />
            March 2025 <br />
            <em>Organized by IETE Amrita Student Forum</em>
          </p>
          <p>
            Participated in the <strong>"Torch it up – AI Journey with PyTorch"</strong> workshop organized by IETE Amrita Student Forum. Gained hands-on experience in deep learning using PyTorch, covering essential AI concepts, model development, training, and optimization techniques. The workshop helped deepen my practical understanding of machine learning tools.
          </p>
          <div className="image-box">
            <img
              src="/pytorch_certificate.jpg"
              alt="PyTorch Workshop Certificate"
            />
          </div>
        </div>
      </section>

      {/* HACKATHONS */}
      <section className="card" data-aos="fade-up">
        <h2>Hackathons</h2>
        <p>
          <strong>Sustainovate'25 Hackathon</strong> <br />
          March 31, 2025 <br />
          <em>Organized by NEXINTEL SYNERGY PVT LTD</em>
        </p>
        <p>
          Participated as a solo developer in the <strong>Sustainovate'25</strong> hackathon under the theme of "fitness". I designed and submitted the <strong>MoodFit</strong> project – a mental wellness platform that allows users to track their emotional well-being, engage in journaling, and access motivational content. The project was built using Next.js and Tailwind CSS, with an emphasis on self-care and mental health awareness through tech.
        </p>
        <div className="image-box">
          <img
            src="/sustainovate_certificate.jpg"
            alt="Sustainovate Hackathon Certificate"
          />
        </div>
      </section>

      {/* VOLUNTEER EXPERIENCE */}
      <section className="card" data-aos="fade-up">
        <h2>Volunteer Experience</h2>
        <p>
          I had the opportunity to participate in a meaningful <strong>Seedball Plantation Initiative</strong> focused on environmental conservation. I prepared seedballs by carefully selecting and packing seeds into nutrient-rich soil. These were stored and later distributed by other volunteers to encourage natural afforestation.
        </p>
        <p>
          This experience deepened my understanding of sustainable reforestation methods. Contributing to this initiative was a fulfilling experience, and I look forward to more opportunities to create a positive impact.
        </p>
        <div className="image-box">
          <img
            src="/voluteer_certificate.jpg"
            alt="Volunteer Certificate"
          />
        </div>
      </section>
    </div>
  );
}
