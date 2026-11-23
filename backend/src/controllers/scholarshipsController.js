import Scholarship from "../models/Scholarship.js";

export async function getAllScholarships(req, res) {
    try {
        const scholarships = await Scholarship.find().sort({ createdAt: -1 }); // newest note first
        res.status(200).json(scholarships);
    } catch (error) {
        console.error("Error in getAllScholarships controller", error);

        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getScholarshipById(req, res) {
    try {
        const scholarship = await Scholarship.findById(req.params.id);
        if (!scholarship) return res.status(404).json({ message: "Scholarship not found!" });
        res.status(200).json(scholarship);
    } catch (error) {
        console.error("Error in getScholarshipById controller", error);

        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createScholarship(req, res) {
    try {
        const { 
            name,
            eligibility,
            amount,
            category,
            applicationUrl,
            deadline
         } = req.body;
        const scholarship = new Scholarship({ 
            name,
            eligibility,
            amount,
            category,
            applicationUrl,
            deadline
         });

        const savedScholarship = await scholarship.save();
        res.status(201).json(savedScholarship);
    } catch (error) {
        console.error("Error in createScholarship controller", error);

        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateScholarship(req, res) {
    try {
        const { 
            name,
            eligibility,
            amount,
            category,
            applicationUrl,
            deadline
         } = req.body;
        const updatedScholarship = await Scholarship.findByIdAndUpdate(
            req.params.id, 
            { 
                name,
                eligibility,
                amount,
                category,
                applicationUrl,
                deadline
             },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedScholarship) return res.status(404).json({ message: "Scholarship not found" });
        res.status(200).json(updatedScholarship);
    } catch (error) {
        console.error("Error in updateScholarship controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteScholarship(req, res) {
    try {
        const deletedScholarship = await Scholarship.findByIdAndDelete(req.params.id);
        if (!deletedScholarship) return res.status(404).json({ message: "Scholarship not found" });
        res.status(200).json({ message: "Scholarship deleted successfully!" });
    } catch (error) {
        console.error("Error in deleteScholarship controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}