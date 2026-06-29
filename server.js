const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});