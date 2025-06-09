// app/hooks/useNotificationToggle.ts
import { useState } from "react";

export default function useNotificationToggle() {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => setEnabled((prev) => !prev);

  return { enabled, toggle };
}