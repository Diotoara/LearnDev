export function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fff5f5, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px",
        fontFamily: "'Noto Sans JP', sans-serif"
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          padding: "40px",
          width: "80%",
          maxWidth: "900px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          border: "1px solid #f5dada"
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            color: "#b91c1c",
            letterSpacing: "5px",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          ダッシュボード
        </h1>
        <h3
          style={{
            fontSize: "20px",
            color: "#444",
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          This is the dashboard page
        </h3>

        {/* Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "40px"
          }}
        >
          <div
            style={{
              background: "#fff0f0",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid #f2caca",
              boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)"
            }}
          >
            <h2 style={{ color: "#b91c1c", marginBottom: "10px" }}>統計</h2>
            <p style={{ color: "#555" }}>Some placeholder data here…</p>
          </div>

          <div
            style={{
              background: "#fefefe",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid #ddd",
              boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)"
            }}
          >
            <h2 style={{ color: "#444", marginBottom: "10px" }}>アクティビティ</h2>
            <p style={{ color: "#555" }}>Recent activity logs appear here…</p>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px"
          }}
        >
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "10px",
              background: "#b91c1c",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            開始
          </button>
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "10px",
              background: "#f8f8f8",
              color: "#444",
              border: "1px solid #ddd",
              cursor: "pointer",
              fontSize: "16px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
            }}
          >
            設定
          </button>
        </div>

        {/* Long Page Feel */}
        <div
          style={{
            height: "600px",
            background: "linear-gradient(to bottom, #fff, #fdf2f2)",
            borderRadius: "15px",
            border: "1px solid #f0dcdc",
            padding: "30px",
            textAlign: "center",
            color: "#666"
          }}
        >
          <p>Additional dashboard content goes here…</p>
        </div>
      </div>
    </div>
  );
}
