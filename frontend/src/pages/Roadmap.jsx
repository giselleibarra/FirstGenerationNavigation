const roadmapSteps = [
    {
        title: "Explore",
        date: "Summer/Fall · August–September",
        icon: "⌕",
        description: "Build your college list, review CSU/UC requirements, research scholarships, ask teachers about recommendation letters",
        tasks: [
            "Narrow your college list to 5–10 schools.",
            "Research required tests, fees, test dates, registration deadlines, application due dates, and financial aid forms and deadlines.",
            "Check which transcripts and recommendations each school needs.",
            "Ask a counselor about application or test fee waivers if cost is a barrier."
        ]
    },
    {
        title: "Prepare",
        date: "October",
        icon: "✎",
        description: "Gather your necessary documents, start FAFSA, work on applications, review deadlines",
        tasks: [
            "Send SAT scores where required or helpful, following each college’s testing policy.",
            "Check FAFSA and CSS Profile opening dates and deadlines; these typically open in the fall.",
            "Write first essay drafts and prepare early decision, early action, or rolling-admission applications."
        ]
    },
    {
        title: "Apply",
        date: "November-Winter",
        icon: "✍︎",
        description: "Submit applications, complete the FAFSA, and apply for scholarships. Keep track of deadlines, follow up with recommenders, and make sure every piece of your application tells your story clearly.",
        tasks: [
            "Aim to complete at least one college application by Thanksgiving.",
            "Ask your counselor how to submit transcripts.",
            "Winter: regular application deadlines are typically January 1–March 1; verify each college’s date.",
            "Request that your high school send an official transcript when required."
        ]
    },
    {
        title: "Decide",
        date: "Spring",
        icon: "⚖",
        description: "Compare acceptance letters, review financial aid packages, and weigh the total cost of each option. Choose the school that best supports your goals, budget, and well-being.",
        tasks: [
            "Stay active in school, whether you are waitlisted or already accepted.",
            "Visit your final-choice college before accepting, if possible.",
            "Tell colleges whether you accept or decline admission and/or financial aid by their deadlines—often May 1.",
            "After receiving your admission letter, send your enrollment deposit by the college’s deadline."
        ]
    },
    {
        title: "Enroll",
        date: "Summer",
        icon: "☑",
        description: "Confirm your spot, complete orientation, and prepare for move-in. Review course placement, housing details, and campus resources so you feel ready to start strong on day one.",
        tasks: [
            "Attend orientation to ease the transition to college and meet people before move-in.",
            "Contact your roommate, get to know each other, and coordinate what to bring.",
            "Prepare to pay your tuition bill, including tuition and fees, housing, and a meal plan if you will live on campus.",
            "Set up your student account or student ID, university email address, and access to your student portal."
        ],
        link: {
            label: "Read more: Summer Before College ↗",
            url: "https://bigfuture.collegeboard.org/pay-for-college/get-help-paying-for-college/what-to-do-summer-before-college"
        }
    }
];

const Roadmap = () => {
    return (
        <main className="roadmap-page">
            <div className="roadmap-container">
                <h1>Your College Roadmap</h1>
                <p className="roadmap-subtitle">
                    What you should be doing and when
                </p>

                <div className="roadmap-timeline">
                    {roadmapSteps.map((step, index) => (
                        <div className="roadmap-step" key={index}>
                            <div className="roadmap-marker">
                                <span>{step.icon}</span>
                            </div>

                            <div className="roadmap-card">
                                <div className="roadmap-card-header">
                                    <div className="roadmap-card-title">
                                        <span className="roadmap-card-icon">
                                            {step.icon}
                                        </span>
                                        <h2>{step.title}</h2>
                                    </div>

                                    <span className="roadmap-date">
                                        {step.date}
                                    </span>
                                </div>

                                <p className="roadmap-description">
                                    {step.description}
                                </p>

                                <ul className="roadmap-tasks">
                                    {step.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                    ))}
                                </ul>

                                {step.link && (
                                    <a
                                        href={step.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="roadmap-link"
                                    >
                                        {step.link.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="roadmap-footer">
                    <p>
                        Planning guide: deadlines, financial aid opening dates, and response/deposit dates vary by school and application plan. Confirm them with each college and the current FAFSA/CSS Profile guidance.
                    </p>

                    <a
                        href="https://bigfuture.collegeboard.org/plan-for-college/apply-to-college/college-application-timeline-12th-grade"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more: College Board’s 12th-grade application timeline ↗
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Roadmap;