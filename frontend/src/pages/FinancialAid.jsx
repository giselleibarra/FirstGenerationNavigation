import { useState } from "react";

const checklistItems = [
    "Your Social Security Number ",
    "If you’re not a US citizen - your Alien Registration Number",
    "Federal income tax returns ",
    "Records of child support received",
    "Your current balance of cash, savings, and checking accounts",
    "Bank statements and records of investments (if applicable)",
    "Records of net worth of investments, businesses, and farms",
    "Records of untaxed income (if applicable)",
    "Account username and passwords to log in to StudentAid.gov"
];

const resources = [
    {
        title: "FAFSA Submission Summary: What You Need To Know",
        url: "https://studentaid.gov/articles/fafsa-submission-summary/"
    },
    {
        title: "Student Checklist for 12th Grade:",
        url: "https://studentaid.gov/resources/prepare-for-college/checklists/12th-grade"
    },
    {
        title: "Resource page from federal student aid:",
        url: "https://studentaid.gov/resources"
    },
    {
        title: "Account registration:",
        url: "https://studentaid.gov/fsa-id/create-account/launch"
    },
    {
        title: "Aid estimator:",
        url: "https://studentaid.gov/aid-estimator/"
    }
];

const faqs = [
    {
        question: "How do I answer the “Current Total of Cash Savings, and Checking Accounts” question?",
        answers: [
            "Add the account balances of your cash, savings, and checking accounts as of the day you submit the FAFSA form",
            "If balance is negative or zero enter 0 as total current balance",
        ],
    },
    {
        question: "What is the Earned Income Tax Credit, and how do I know if I received one?",
        answers: [
            "It is a federal benefit that offers qualifying individuals a tax credit based on income earned from work",
            "If you filed a 2026 federal tax return and received the EITC it will be listed on IRS Form 1040 line 27",
        ],
    },
    {
        question: "Did you file or will you file an IRS Form 1040 or 1040-NR?",
        answers: [
            "Most US citizens or permanent residents use Form 1040 to file the annual income tax return",
            "Taxpayers who aren’t citizens or permanent residents use 1040-NR",
        ],
    },
    {
        question: "How do I answer the “Current Net Worth of Investments, Including Real Estate” question?",
        answers: [
            "Net worth of your current investments is the amount of money left over after subtracting the debt from the value of each investment",
            "For example: If you own an investment property woth $200,000 and still owe $150,000 on it, its net woth is $50,000. You would report the $50,000, not the full $200,000",
        ],
    },
    {
        question: "What does “date of residency” mean?",
        answers: [
            "If you were born in this state and haven’t moved out of state since, enter the month and year you were born",
            "If you were born in this state, moved out of state, and then returned, enter the month and year you started living in the state again",
            "If you weren’t born in this state enter the month and year you started living in the state",
        ],
    },
    {
        question: "What is a Federal School Code and how can I find my school’s code?",
        answers: [
            "Find the Federal School Code by using the School Search tool: https://studentaid.gov/fafsa-apply/colleges ",
        ],
    },
    {
        question: "How do I check the status of my FAFSA form?",
        answers: [
            "Log in and find your application status in “My Activity”",
        ],
    }
];

const FinancialAid = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const toggleItem = (index) => {
        setCheckedItems((previous) =>
        previous.includes(index)
            ? previous.filter((item) => item !== index)
            : [...previous, index]
        );
    };

    return (
        <main className="financial-aid">
            <div className="financial-aid-container">
                <h1>Financial Aid</h1>

                <div className="financial-aid-columns">
                    <section>
                        <span className="section-label">What you'll need</span>

                        <div className="financial-checklist">
                            {checklistItems.map((item, index) => (
                                <label className="checklist-item" key={index}>
                                    <span>{item}</span>
                                    <input
                                        type="checkbox"
                                        checked={checkedItems.includes(index)}
                                        onChange={() => toggleItem(index)}
                                    />
                                </label>
                            ))}
                        </div>

                        <div className="financial-note">
                            <div className="financial-note-icon">☆</div>
                            <p>
                              If you’re a dependent student then your parents will need most of the information above.
                            </p>
                        </div>
                    </section>

                    <section>
                        <span className="section-label">Links to Resources</span>

                        <div className="financial-resources">
                            {resources.map((resource, index) => (
                                <div className="resource-item" key={index}>
                                    <h3>{resource.title}</h3>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span aria-hidden="true">🔗</span>
                                        {resource.url}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="faq-section">
                    <span className="section-label">FAQs</span>

                    <div className="faq-box">
                        {faqs.map((faq, index) => (
                            <div className="finaincial-faq" key={index}>
                                <h3>
                                    <span className="faq-star">☆</span>
                                    {faq.question}
                                </h3>

                                <ul>
                                    {faq.answers.map((answer, answerIndex) => (
                                        <li key={answerIndex}>{answer}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default FinancialAid;