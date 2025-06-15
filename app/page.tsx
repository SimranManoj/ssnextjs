// app/page.tsx

// import Authentication from "@/components/authentication";
import Courses from "@/app/components/courses";
import { Analytics } from '@vercel/analytics/react';
// import Image from "next/image";


export default function Home() {
  return (
    <main>
     <header className="header">
  <div className="header-top">
    <div className="header-left">
      <a href="#">📊 Dashboard</a>
    </div>

    <div className="header-center">
      <h1>SkillSync</h1>
      <p>Skill Mapping & Learning App</p>
    </div>

    <div className="header-right">
      <a href="/login">👤 Login / Profile</a>
    </div>
  </div>

  {/* ✅ Search bar below heading */}
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
        {/* <Image
          src="/ai-learning.jpg"
          alt="AI Learning"
          width={800}
          height={400}
          className="banner-image"
        /> */}

        {/* 👇 Components */}
        {/* <Authentication /> */}
        <Courses />
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

      <Analytics />

      <footer className="footer">
        &copy; 2025 SkillSync | Empowering AI Learners
      </footer>
    </main>
  );
}