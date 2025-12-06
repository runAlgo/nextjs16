// app/loading.tsx
export default function GlobalLoader() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <h2>Loading...</h2>
      <div className="spinner">⏳</div>
    </div>
  );
}
