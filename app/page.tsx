import Image from "next/image";
export default function Home() {
  return (
    <main>
      <header className="header">
        <h1>SkillSync</h1>
        <p>Skill Mapping & Learning App</p>
        <div className="search-box">
          <input type="text" placeholder="🔍 Search apps or courses..." />
          <button>Search</button>
        </div>
      </header>

      <section className="main-section">
        <h2>Welcome to SkillSync!</h2>
        <p>
          Identify your skill gaps and find the best learning resources to grow in the AI field.
        </p>
        <img src="/ai-learning.jpg" alt="AI Learning" className="banner-image" />

        <div className="feature-box">
          <h3>🔍 Skill Mapping</h3>
          <p>Analyze your current skills and get personalized feedback.</p>
          <a href="#">Try Skill Mapping</a>
        </div>

        <div className="feature-box">
          <h3>📚 Course Recommendation</h3>
          <p>Find the best AI courses based on your skill profile.</p>
          <button>View Courses</button>
        </div>

        <div className="feature-box">
          <h3>📊 Startup Ecosystem Dashboard</h3>
          <p>Explore trending startups and required skills in the AI industry.</p>
          <a href="#">Visit Dashboard</a>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="footer">
        &copy; 2025 SkillSync | Empowering AI Learners
      </footer>
    </main>
  );
}
