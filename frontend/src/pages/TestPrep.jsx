const studyResources = [
    {
        name: "Khan Academy",
        description: "SAT lessons, videos, and skill practice.",
        url: "https://www.khanacademy.org/test-prep/digital-sat"
    },
    {
       name: "College Board Bluebook",
       description: "Official full-length digital SAT practice tests.",
       url: "https://bluebook.collegeboard.org/students/practice" 
    },
    {
        name: "Official ACT practice",
        description: "Free practice questions, tests, and study guides.",
        url: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html"
    }
];

const paidResources = [
    {
        name: "UWorld · SAT & ACT",
        description: "Question banks with detailed answer explanations.",
        url: "https://collegeprep.uworld.com/"
    },
    {
        name: "The Princeton Review · SAT",
        description: "Structured courses and tutoring options.",
        url: "https://www.princetonreview.com/college/sat-test-prep"
    },
    {
        name: "Kaplan · ACT",
        description: "On-demand and instructor-led prep options.",
        url: "https://www.kaptest.com/act"
    }
];

const faqs = [
    {
        question: "What do standardized tests actually measure?",
        answer: "They are used for measuring student progress against a national or state benchmark, evaluating curriculum effectiveness, and identifying learning gaps"
    },
    {
        question: "How important are standardized test scores for college?",
        answer: "It is important to consider whether a school has gone test-optional or test-blind because students with low test scores may benefit from either option. Test-Blind: Colleges will not consider standardized test scores at all even if they are submitted. Test-optional: Scores can be submitted and will be considered. Students with higher test scores may be more competitive applicants to these schools as their scores can strengthen their application."
    },
    {
        question: "How do I prepare for standardized tests effectively?",
        answer: "Taking diagnostic tests or practice tests to identify learning gaps and a starting point, creating balanced study schedules, and using targeted standardized test prep resources."
    },
    {
        question: "What is high stakes testing, and why does it matter?",
        answer: "High-stakes tests are tests with significant and direct impacts on students, teachers, or schools that provide school and district accountability while measuring student progress."
    },
    {
        question: "How do I manage test anxiety?",
        answer: "Preparing for the test to reduce uncertainty, deep breathing, positive self-talk, and reframing the test to help regulate your nervous system before, during, and after the test, as well as getting enough sleep, eating well, and having a morning routine."
    }
];

const timeline = [
    {
        title: "October: Last ACT for early birds",
        description: "If you are applying to colleges Early Action or Early Decision this is the latest you can take the ACT. Often it is better to take the test in September to be safe.",
        note: "Remember to register a month in advance."
    },
    {
        title: "November: Last SAT for early birds",
        description: "If applying for Early Action or Early Decision this is the last opportunity to take the SAT. However, this may be too late depending on where you are applying so it is safer to take the test in October.",
        note: "Check your colleges' score deadlines."
    },
    {
        title: "December: Last SAT and ACT",
        description: "For Regular Decision applicants the very last dates for both standardized tests are in December. Usually this is a last resort for anyone who is still unhappy with their scores or for people who have not taken the test at all. However, it takes a few weeks to get scores so it may be cutting it too close for some deadlines.",
        note: "Confirm that your scores will arrive on time."
    }
];

const testTips = [
    {
        title: "Pace yourself",
        description: "Pace yourself smartly, do not spend too much time on one difficult question. Every minute matters!"
    },
    {
        title: "Start with what you know",
        description: "Answer the questions you know first and mark/skip questions that will take longer then come back if there is still enough time."
    },
    {
        title: "Practice like it’s test day",
        description: "Practice under real test conditions using official practice tests, timing each section, and following the flow of the test."
    },
    {
        title: "Read carefully",
        description: "Check what the question is actually asking. Many test mistakes come from misunderstanding the question so slow down just enough to read carefully."
    },
    {
        title: "Make an educated guess",
        description: "Guess strategically and do not leave points on the table! There is no penalty for wrong answers so unanswered questions are missed opportunities."
    },
    {
        title: "Prepare your body and mind",
        description: "Prepare your body and mind before test day. Get enough sleep the night before, eat a balanced breakfast, and arrive early to give yourself time to settle in."
    }
];

const TestPrep = () => {
    return (
        <main className="test-prep-page">
            <div className="test-prep-container">
                <h1>A little prep. A lot more confidence.</h1>
                <p className="test-prep-intro">
                    Know what’s on each test, then find the prep that works for you. Start with the free options.
                </p>

                <div className="test-prep-grid">
                    <div className="test-prep-card">
                        <div className="test-card-header">
                            <h2>SAT</h2>
                            <span>Digital  •  400–1600 score</span>
                        </div>

                        <h3>Reading & Writing</h3>
                        <p>
                            Short passages, evidence, vocabulary in context, grammar, and effective expression.
                        </p>

                        <h3>Math</h3>
                        <p>
                            Algebra, advanced math, problem-solving & data analysis, geometry, and trigonometry. Calculator allowed throughout.
                        </p>
                    </div>

                    <div className="test-prep-card">
                        <div className="test-card-header">
                            <h2>ACT</h2>
                            <span>Core composite  •  1–36 score</span>
                        </div>

                        <h3>English, Math, & Reading</h3>
                        <p>
                            Grammar and writing; algebra, geometry, and trigonometry; reading comprehension and evidence.
                        </p>

                        <h3>Optional: Science & Writing</h3>
                        <p>
                            Science covers data and scientific reasoning; Writing is an essay. Check college requirements. Neither affects the core composite.
                        </p>
                    </div>
                </div>

                <section className="test-prep-section">
                    <h2>Build your study plan</h2>
                    <p className="section-description">
                        Take a practice test, focus on your weak spots, and practice a little each week.
                    </p>

                    <div className="test-prep-grid">
                        <div className="test-prep-card">
                            <h3>Start here · Free</h3>

                            {studyResources.map((resource) => (
                                <div className="test-resource" key={resource.name}>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {resource.name} ↗
                                    </a>
                                    <p>{resource.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="test-prep-card">
                            <h3>More support · Paid</h3>

                            {paidResources.map((resource) => (
                                <div className="test-resource" key={resource.name}>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {resource.name} ↗
                                    </a>
                                    <p>{resource.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="test-prep-note">
                        Before you pay: compare current pricing and free trials. Check each college’s testing policy and the official test sites for updates.
                    </p>
                </section>

                <section className="test-prep-section">
                    <h2>Test Prep Resources</h2>

                    <div className="test-prep-card test-faq-card">
                        <h3>5 FAQs</h3>

                        {faqs.map((faq) => (
                            <div className="test-faq" key={faq.question}>
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))}

                        <a
                            href="https://www.petersons.com/blog/standardized-tests-5-common-faqs-every-student-and-parent-should-know/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read more: Peterson’s ↗
                        </a>
                    </div>
                </section>

                <section className="test-prep-section">
                    <h2>Timeline</h2>

                    <div className="test-timeline-warning">
                        Plan ahead: these are general planning guidelines, not guaranteed last test dates. Check each college’s application and score-receipt deadlines and the current SAT/ACT calendar.
                    </div>

                    <div className="test-timeline-grid">
                        {timeline.map((item) => (
                            <div className="test-prep-card" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.note}</p>
                            </div>
                        ))}
                    </div>

                    <a
                        className="test-more-link"
                        href="https://www.collegexpress.com/articles-and-advice/test-prep/articles/test-taking-tips/standardized-test-timeline-high-school-students-what-take-and-when/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more: CollegeXpress ↗
                    </a>
                </section>

                <section className="test-prep-section">
                    <h2>Test taking tips</h2>

                    <div className="test-prep-grid">
                        {testTips.map((tip, index) => (
                            <div className="test-prep-card" key={tip.title}>
                                <h3>
                                    <span className="tip-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {tip.title}
                                </h3>
                                <p>{tip.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="test-prep-note">
                        For the digital SAT, return to marked questions before that module ends; you cannot go back to an earlier module.
                    </p>

                    <a 
                        className="test-more-link"
                        href="https://www.mathnasium.com/blog/top-test-taking-tips-standardized-tests"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more: Mathnasium ↗
                    </a>
                </section>
            </div>
        </main>
    );
};

export default TestPrep;