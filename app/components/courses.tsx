"use client";

import Link from "next/link";
import useCourses from "../hook/useCourses";

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
