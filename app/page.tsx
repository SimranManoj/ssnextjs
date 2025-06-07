import Image from "next/image";
import Link from "next/link";

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
        <Image src="/ai-learning.jpg" alt="AI Learning" width={800} height={400} className="banner-image" />

        <div className="feature-box">
          <h3>🔐 User Login & Dashboard</h3>
          <p>Sign in to track your progress and access personalized tools.</p>
          <Link href="#">Go to Dashboard</Link>
        </div>

        <div className="feature-box">
          <h3>🧠 Skill Gap Analyzer</h3>
          <p>Take our quiz to identify where you need to improve.</p>
          <Link href="#">Start Quiz</Link>
        </div>

        <div className="feature-box">
          <h3>🤖 AI-Powered Course Recommendation</h3>
          <p>Get smart recommendations based on your unique profile.</p>
          <button>View Recommendations</button>
        </div>

        <div className="feature-box">
          <h3>🗺️ Career Path Roadmaps</h3>
          <p>Explore various career journeys and required skills in AI.</p>
          <Link href="#">View Roadmaps</Link>
        </div>

        <div className="feature-box">
          <h3>🚀 Startup Finder by Skills</h3>
          <p>Find real startups that need your skillset.</p>
          <Link href="#">Explore Startups</Link>
        </div>

        <div className="feature-box">
          <h3>📅 Upcoming Events & Hackathons</h3>
          <p>Never miss an opportunity to network and grow.</p>
          <Link href="#">View Events</Link>
        </div>

        <div className="feature-box">
          <h3>🔔 Notification / Alert System</h3>
          <p>Receive alerts about new courses, skills, and job matches.</p>
          <button>Enable Notifications</button>
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
