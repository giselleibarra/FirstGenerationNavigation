const termsSections = [
    {
        title: "Academics & coursework",
        terms: [
            {
                name: "Credit",
                description: [
                    "A unit that measures completed coursework. A course might be worth 4 credits; when you pass, those credits count toward your total.",
                    "Credits affect class standing, tuition load, aid status, and progress toward graduation."
                ]
            },
            {
                name: "Major",
                description: [
                    "Your main subject and the field you earn your degree in—for example, Computer Science, Business, or Civil Engineering.",
                    "Your major shapes required courses, career preparation, and sometimes admission requirements."
                ]
            },
            {
                name: "Minor",
                description: [
                    "An optional, smaller area of study you complete alongside your major.",
                    "It can add useful skills without the workload of a second major."
                ]
            },
            {
                name: "Concentration",
                description: [
                    "A specialized path within your major, such as Accounting within a Business major."
                ]
            },
            {
                name: "Prerequisite",
                description: [
                    "A course you must complete before taking another course. You may need to pass with a specific grade, such as a C or higher.",
                    "Missing prerequisites can delay registration or graduation."
                ]
            },
            {
                name: "Elective",
                description: [
                    "A class you choose from approved options. For example, you might take Drawing to meet an Area C elective requirement.",
                    "Electives help you explore interests or build career-relevant skills."
                ]
            },
            {
                name: "Syllabus",
                description: [
                    "Your course roadmap: a guide to assignments, grading, attendance policies, and what the instructor expects."
                ]
            }
        ]
    },
    {
        title: "Types of colleges & quality",
        terms: [
            {
                name: "Community college",
                description: [
                    "A typically lower-cost option for general education, transfer pathways, and career training.",
                    "You can earn certificates and associate degrees."
                ]
            },
            {
                name: "Four-year college",
                description: [
                    "A school focused on undergraduate study.",
                    "You can earn a bachelor’s degree; some also offer master’s degrees."
                ]
            },
            {
                name: "University",
                description: [
                    "A school offering a broad range of programs, research, and advanced study.",
                    "Degrees can include bachelor’s, master’s, doctoral, and professional degrees."
                ]
            },
            {
                name: "Technical or career college",
                description: [
                    "A school that prepares you for a specific trade or applied career.",
                    "Programs may lead to certificates, diplomas, or associate degrees."
                ]
            },
            {
                name: "Accredited",
                description: [
                    "An outside accrediting agency has reviewed a school or program and found that it meets defined standards."
                ]
            }
        ]
    },
    {
        title: "Course levels & enrollment",
        terms: [
            {
                name: "100-level course",
                description: [
                    "An introductory or survey course, usually for first-year students or students new to the subject."
                ]
            },
            {
                name: "200-level course",
                description: [
                    "An intermediate, lower-division course, usually for first- or second-year students."
                ]
            },
            {
                name: "300-level course",
                description: [
                    "An upper-division course, usually for juniors, seniors, or students accepted into a major."
                ]
            },
            {
                name: "400-level course",
                description: [
                    "An advanced undergraduate course, usually for advanced majors or students nearing graduation."
                ]
            },
            {
                name: "500-level course",
                description: [
                    "At many schools, a graduate-level course for graduate students or approved advanced undergraduates."
                ]
            },
            {
                name: "Full-time",
                description: [
                    "At many colleges, taking at least 12 credits per semester as an undergraduate. Half-time is often 6 credits.",
                    "Aid rules vary: federal student loans generally require at least half-time enrollment, while some grants may be available below half-time. Check your school’s exact credit and aid requirements."
                ]
            }
        ]
    },
    {
        title: "Applications & decisions",
        terms: [
            {
                name: "Early decision",
                description: [
                    "An early, binding application plan. Apply to one school under early decision; if admitted, you generally commit to enroll and withdraw other applications.",
                    "Best for a clear first-choice school you can afford without comparing aid offers. Review the school’s agreement and financial-aid provisions."
                ]
            },
            {
                name: "Early action",
                description: [
                    "An early, nonbinding plan: you can receive a decision early without committing right away. Many plans let you apply to multiple schools.",
                    "Good for keeping options open and reducing stress. Some schools have restrictive early-action rules, so check each policy."
                ]
            },
            {
                name: "Deferral",
                description: [
                    "Your application moves to a later review round. It is not a rejection.",
                    "Send updates only if the school allows or requests them."
                ]
            },
            {
                name: "Waitlist",
                description: [
                    "You may be offered admission later if space becomes available."
                ]
            }
        ]
    }
];

const TermsPage = () => {
    return (
        <main className="terms-page">
            <div className="terms-container">
                <h1>Most Confusing College Terms</h1>
                <p className="terms-intro">
                    College has its own language. Here are 22 terms, explained simply.
                </p>

                {termsSections.map((section, sectionIndex) => (
                    <section className="terms-section" key={section.title}>
                        <h2>
                            <span className="terms-section-num">
                                {String(sectionIndex + 1).padStart(2, "0")}
                            </span>
                            {section.title}
                        </h2>

                        <div className="terms-grid">
                            {section.terms.map((term) => (
                                <div className="term-card" key={term.name}>
                                    <h3>{term.name}</h3>

                                    {term.description.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <div className="terms-note">
                    <h3>A quick note</h3>
                    <p>
                        Course numbers, enrollment rules, and admissions policies vary by college. Always check the school’s catalog, financial aid office, or admissions website.
                    </p>
                    <a
                        href="https://research.com/student-guides/college-process-guides/the-most-confusing-college-terms-explained-simply"
                        terget="_blank"
                        rel="noopener noreferrer"
                    >
                        More terms at Researchncom →
                    </a>
                </div>
            </div>
        </main>
    );
};

export default TermsPage;