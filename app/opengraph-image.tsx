import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#030712",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 85% 15%, rgba(139,92,246,0.22), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3B82F6",
            fontFamily: "monospace",
          }}
        >
          {profile.role} · {profile.tagline}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
            color: "#F8FAFF",
          }}
        >
          {profile.name}
        </div>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "row", gap: 16 }}>
          {["FastAPI", "PostgreSQL", "RabbitMQ", "Claude API"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 22,
                fontFamily: "monospace",
                color: "#8B95A8",
                border: "1px solid #1E293B",
                borderRadius: 8,
                padding: "8px 18px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
