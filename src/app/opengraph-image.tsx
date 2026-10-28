import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const dynamic = "force-static";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1f1ef",
          padding: "72px 80px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 18,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#646460",
          }}
        >
          Portfolio
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              margin: 0,
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#20201e",
              lineHeight: 1.05,
            }}
          >
            {site.fullName}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 26,
              display: "flex",
              flexDirection: "column",
              fontWeight: 500,
              color: "#646460",
              lineHeight: 1.3,
            }}
          >
            <span>Full-stack development · QA &amp; testing</span>
            <span>IoT &amp; embedded systems · AI engineering</span>
          </p>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: 16,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#646460",
          }}
        >
          {site.tagline}
        </p>
      </div>
    ),
    { ...size },
  );
}
