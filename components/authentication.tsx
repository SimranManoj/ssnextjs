"use client";

import useNotificationToggle from "@/hook/useNotificationToggle";
import Link from "next/link";

export default function Authentication() {
  const { enabled, toggle } = useNotificationToggle();

  return (
    <>

      <div className="feature-box">
        <h3>🔔 Notification / Alert System</h3>
        <p>{enabled ? "Notifications are ON" : "Notifications are OFF"}</p>
        <button onClick={toggle}>
          {enabled ? "Disable" : "Enable"} Notifications
        </button>
      </div>

      <div className="feature-box">
        <h3>📝 AI Resume Builder</h3>
        <p>Create a professional resume based on your skills and experience.</p>
        <button>Build Resume</button>
      </div>
    </>
  );
}
