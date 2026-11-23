import { useEffect, useState } from "react";
import ScholarshipCard from "../components/ScholarshipCard"

const ScholarshipsPage = () => {
    const [scholarships, setScholarships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                const response = await fetch("/api/scholarships");

                if (!response.ok) {
                    throw new Error("Failed to fetch scholarships");
                }

                const data = await response.json();
                setScholarships(data);
            } catch (error) {
                console.error("Error fetching scholarships:", error);
                setError("Unable to load scholarships.");
            } finally {
                setLoading(false);
            }
        };

        fetchScholarships();
    }, []);

    const filteredScholarships = scholarships.filter((scholarship) => {
        const matchesSearch = 
            scholarship.name.toLowerCase().includes(search.toLowerCase()) ||
            scholarship.eligibility.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" ||
            scholarship.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="scholarships-page">
            <div className="scholarships-container">
                <h1>Scholarship Opportunities</h1>

                <p>
                    Explore scholarships to help fund your college journey.
                </p>

                <div className="scholarship-filters">
                    <input
                        type="text"
                        placeholder="Search by keyword or scholarship name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {["All", "Merit-Based", "Need-Based", "First-Generation", "STEM", "Essay", "Random"].map(
                        (category) => (
                            <button
                                key={category}
                                className={selectedCategory === category ? "active" : ""}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        )
                    )}
                </div>

                {loading && <p>Loading scholarships...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && (
                    <div className="scholarship-grid">
                        {filteredScholarships.map((scholarship) => (
                            <ScholarshipCard
                                key={scholarship._id}
                                name={scholarship.name}
                                eligibility={scholarship.eligibility}
                                amount={scholarship.amount}
                                type={scholarship.category}
                                applicationUrl={scholarship.applicationUrl}
                                deadline={scholarship.deadline}
                            />
                        ))}
                        {filteredScholarships.length === 0 && (
                            <p>No scholarships found. Try another search or category.</p>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
};

export default ScholarshipsPage