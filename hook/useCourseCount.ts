// app/hooks/useCourseCount.ts
import { useState, useEffect } from "react";

export default function useCourseCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = () => {
      setTimeout(() => {
        setCount(42); // Simulate API
      }, 1000);
    };

    fetchCount();
  }, []);

  return count;
}
