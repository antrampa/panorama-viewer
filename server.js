const express = require("express");
const app = express();
const path = require("path");

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ Ensure Express serves all files inside "public/libs/"
app.use("/libs", express.static(path.join(__dirname, "public/libs")));

// ✅ Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
