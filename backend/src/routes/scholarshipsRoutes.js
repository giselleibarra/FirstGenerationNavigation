import express from "express";
import { createScholarship, deleteScholarship, getAllScholarships, updateScholarship, getScholarshipById } from "../controllers/scholarshipsController.js";

const router = express.Router();

router.get("/", getAllScholarships);
router.get("/:id", getScholarshipById);
router.post("/", createScholarship);
router.put("/:id", updateScholarship);
router.delete("/:id", deleteScholarship);

export default router;






