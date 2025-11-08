document.getElementById("msgBtn").addEventListener("click", async () => {
  const res = await fetch("/api/message");
  const data = await res.json();
  document.getElementById("apiMsg").textContent = data.message;
});
