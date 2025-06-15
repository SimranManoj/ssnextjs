"use client";

import useCourseCount from "@/hook/useCourseCount";
import Link from "next/link";


export default function Courses() {
  const courseCount = useCourseCount();

  return (
    <>
      <div className="feature-box">
        <h3>🧠 Skill Gap Analyzer</h3>
        <p>Take our quiz to identify where you need to improve.</p>
        <Link href="#">Start Quiz</Link>
      </div>

      <div className="feature-box">
        <h3>🤖 AI-Powered Course Recommendation</h3>
        <p>
          {courseCount !== null
            ? `We found ${courseCount} personalized courses for you!`
            : "Loading course recommendations..."}
        </p>
        <button>View Recommendations</button>
      </div>

      {/* Add rest of the components here... */}
    </>
  );
}
