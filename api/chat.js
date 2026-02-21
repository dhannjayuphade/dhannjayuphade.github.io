export default function handler(req, res) {
  try {
    return res.status(200).json({ reply: "API BASIC OK ✅" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
