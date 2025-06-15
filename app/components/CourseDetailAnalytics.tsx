"use client";

import { useEffect } from "react";
import { analytics } from "@/app/utils/firebase";
import { logEvent } from "firebase/analytics";

export default function CourseDetailAnalytics() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "course_viewed", {
        screen: "CourseDetailPage",
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  return null;
}
