import "./PersonalHistory.css";

export default function PersonalHistory() {
  return (
    <div className="history-container">
      <h1 className="page-title">My Personal History</h1>

      {/* FAMILY BACKGROUND */}
      <section className="card" data-aos="fade-up">
        <h2>Family & Upbringing</h2>
        <p>
          I come from a warm and supportive family that has always encouraged me to pursue my interests with confidence. Growing up in a healthy and nurturing environment taught me the values of empathy, discipline, and curiosity. Whether it was school projects, competitions, or social work, my family always stood by me, cheering me on and inspiring me to give my best.
        </p>
      </section>

      {/* SCHOOL LIFE */}
      <section className="card" data-aos="fade-up">
        <h2>School Journey</h2>
        <p>
          My school days were filled with both academic learning and vibrant co-curricular involvement. I actively participated in <strong>Model United Nations (MUNs)</strong>, youth parliaments, and literary fests that helped me develop strong communication, public speaking, and critical thinking skills. These events not only shaped my confidence but also exposed me to different perspectives and ideas from a young age.
        </p>
      </section>

      {/* ACADEMIC RECORD */}
      <section className="card" data-aos="fade-up">
        <h2>Academic Milestones</h2>
        <ul>
          <li><strong>10th Grade:</strong> 96.4%</li>
          <li><strong>12th Grade:</strong> 88.4%</li>
        </ul>
        <p>
          These results reflect not just academic performance, but the discipline and determination I carried throughout my school journey. I always believed in balancing studies with passion-driven activities.
        </p>
      </section>

      {/* MY GOALS */}
      <section className="card" data-aos="fade-up">
        <h2>My Goals</h2>
        <p>
          As I move forward in my academic and professional journey, I aspire to become a skilled and impactful full-stack developer. I aim to work on meaningful tech solutions that create real-world impact — especially in areas like mental health, education, and sustainability. My short-term goals include contributing to open-source, building personal projects, and deepening my understanding of system design and cloud computing. In the long run, I envision myself leading development teams and driving innovation with empathy and purpose.
        </p>
      </section>
    </div>
  );
}
