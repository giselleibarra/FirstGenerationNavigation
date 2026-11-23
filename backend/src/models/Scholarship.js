import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        eligibility: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        applicationUrl: {
            type: String,
        },
        deadline: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
export default Scholarship;