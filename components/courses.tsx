"use client";

import useCourses from "@/hook/useCourseCount";
 // 🔄 fix incorrect import
import Link from "next/link";

export default function Courses() {
  const { courses, loading } = useCourses();

  return (
    <div className="courses-list">
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        courses.map((course) => (
          <Link href={`/course/${course.id}`} key={course.id}>
            <div className="course-card">
              <h4>{course.title}</h4>
              <p>By: {course.author}</p>
              <p>₹{course.amount}</p>
              <p>👁️ {course.views} | ⭐ {course.reviews} | ❤️ {course.likes}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
