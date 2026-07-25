import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
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
          background: "#F8F5F0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "#183B5B",
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          MJ
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#183B5B",
            marginBottom: 16,
          }}
        >
          Malcom Johnson
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            color: "#5E8D89",
            marginBottom: 28,
          }}
        >
          Business Development Representative
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#635C56",
            maxWidth: 820,
          }}
        >
          Building relationships that create inbound and outbound pipeline.
        </div>
      </div>
    ),
    { ...size }
  );
}
