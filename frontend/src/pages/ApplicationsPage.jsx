import "./Applications.css"

const applicationPathways = [
    {
        title: "CSU System",
        subtitle: "California State University",
        portal: "Cal State Apply",
        portalUrl: "https://www.calstate.edu/apply",
        deadline: "Oct 1 - Nov 30",
        tips: [
            "Admissions are based purely on your GPA and completed A-G high school courses.",
            "No personal statements, essays, or teacher recommendations are needed.",
            "Check if your local CSU campus offers guaranteed priority admission for your high school.",
            "You can apply for up to 4 campuses completely free with the built-in fee waiver."
        ],
        resourceText: "CSU application resources ↗",
        resourceUrl: "https://www.calstate.edu/apply/Pages/resources.aspx"
    },
    {
        title: "UC System",
        subtitle: "University of California",
        portal: "UC Application",
        portalUrl: "https://apply.universityofcalifornia.edu/",
        deadline: "Oct 1 - November 30",
        tips: [
            "You must answer 4 out of 8 Personal Insight Questions (PIQs) — start drafting these early!",
            "No letters of recommendation are needed unless specifically requested later.",
            "Self-report all your grades. You won't need to send official transcripts until you enroll.",
            "The application fee waiver automatically covers up to 4 campuses if you qualify."
        ],
        resourceText: "UC application guide ↗",
        resourceUrl: "https://admission.universityofcalifornia.edu/how-to-apply/"
    },
    {
        title: "Private & Independent",
        subtitle: "Common App / Coalition",
        portal: "Common Application",
        portalUrl: "https://www.commonapp.org/",
        deadline: "Varies (Usually Jan 1 - Jan 15)",
        tips: [
            "Requires one main Common App personal statement plus school-specific short essays.",
            "You will need 1 to 2 letters of recommendation from core academic teachers and your counselor.",
            "Weigh Early Action (non-binding) versus Regular Decision timelines carefully.",
            "Ask your counselor for a Common App Fee Waiver if you qualify to avoid application costs."
        ],
        resourceText: "Common App application guide ↗",
        resourceUrl: "https://www.commonapp.org/apply"
    }
];

const ApplicationsPage = () => {
    return (
        <main className="applications-page">
            <div className="applications-container">
                <div className="applications-heading">
                    <span className="applications-badge">
                        STEP-BY-STEP PATHWAYS
                    </span>
                    <h1>Application Pathways</h1>
                </div>

                <div className="application-cards">
                    {applicationPathways.map((pathway) => (
                        <article className="application-card" key={pathway.title}>
                            <div className="application-card-heading">
                                <h2>{pathway.title}</h2>
                                <p>{pathway.subtitle}</p>
                            </div>

                            <div className="application-info">
                                <p>
                                    <span aria-hidden="true">🔗‍️</span> Portal:{" "}
                                    <a
                                        href={pathway.portalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pathway.portal}
                                    </a>
                                </p>
                                <p>
                                    <span aria-hidden="true">📅</span> Deadline:{" "}
                                    <strong>{pathway.deadline}</strong>
                                </p>
                            </div>

                            <div className="application-tips">
                                <h3>
                                    <span aria-hidden="true">✧</span> Application Tips
                                </h3>
                                <ul>
                                    {pathway.tips.map((tip) => (
                                        <li key={tip}>{tip}</li>
                                    ))}
                                </ul>
                            </div>

                            <a 
                                className="application-resource"
                                href={pathway.resourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {pathway.resourceText}
                            </a>
                        </article>
                    ))}
                </div>

                <div className="application-reminder">
                    <div className="reminder-icon" aria-hidden="true">
                        ♡
                    </div>
                    <p>
                        Application fees shouldn’t stand in your way—ask your counselor if you qualify for fee waivers.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default ApplicationsPage;