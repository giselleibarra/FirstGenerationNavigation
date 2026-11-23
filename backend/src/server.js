import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import scholarshipsRoutes from "./routes/scholarshipsRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// middleware 
app.use(express.json()); // this middleware will parse the JSON bodies: req.body
app.use(rateLimiter);


app.use("/api/notes", notesRoutes)
app.use("/api/scholarships", scholarshipsRoutes);


if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../../frontend/dist");

    app.use(express.static(frontendPath));

    app.get("*", (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT)
    });
});


