"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import CourseDetailAnalytics from "@/app/components/CourseDetailAnalytics";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseByFieldId = async () => {
      try {
        const q = query(collection(db, "courses"), where("id", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setCourse(querySnapshot.docs[0].data());
        } else {
          console.error("Course not found with id field:", id);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseByFieldId();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <main className="course-detail">
      <CourseDetailAnalytics /> {/* Logs to Firebase Analytics */}

      <h2>{course.title}</h2>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Author:</strong> {course.author}</p>
      <p><strong>Amount:</strong> ₹{course.amount}</p>
      <p><strong>Views:</strong> {course.views}</p>
      <p><strong>Reviews:</strong> {course.reviews}</p>
      <p><strong>Likes:</strong> {course.likes}</p>
    </main>
  );
}
