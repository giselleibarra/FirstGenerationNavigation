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

                <section className="aid-types-section">
                    <h2>Different types of aid</h2>
                    <p className="aid-types-subtitle">
                        Understand what you receive, what you repay, and what you earn.
                    </p>

                    <div className="aid-type-card">
                        <h3>Grants</h3>
                        <p>
                            Financial aid that generally does not have to be repaid. Some grants have conditions you must meet.
                        </p>

                        <div className="aid-detail-row">
                            <h4>Federal Pell Grant</h4>
                            <p>For undergraduate students with financial need.</p>
                        </div>

                        <div className="aid-detail-row">
                            <h4>
                                Federal Supplemental Educational Opportunity Grant (FSEOG)
                            </h4>
                            <p>
                                For undergraduates with exceptional financial need at participating schools.
                            </p>
                        </div>

                        <div className="aid-detail-row">
                            <h4>TEACH Grant</h4>
                            <div>
                                <p>
                                    Teacher Education Assistance for College and Higher Education grants support eligible undergraduate and graduate students preparing to become teachers.
                                </p>
                                <p>
                                    You must agree to teach full-time in a high-need field at a qualifying low-income school or educational service agency for at least four school years within eight years after leaving your program. If you do not meet the service requirements, the grant converts to a Direct Unsubsidized Loan and must be repaid with interest.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://studentaid.gov/understand-aid/types/grants/teach"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Check the TEACH Grant service requirements ↗
                        </a>
                    </div>

                    <div className="aid-type-card">
                        <h3>Loans</h3>
                        <p>Borrowed money for college or career school. Loans must be repaid with interest.</p>

                        <div className="aid-detail-row">
                            <h4>Direct Subsidized Loan</h4>
                            <p>
                                For undergraduate students with financial need. The U.S. Department of Education generally pays the interest while you are enrolled at least half-time and during eligible deferment periods.
                            </p>
                        </div>

                        <div className="aid-detail-row">
                            <h4>Direct Unsubsidized Loan</h4>
                            <p>
                                For undergraduate and graduate students. You are responsible for all interest, including while you are in school.
                            </p>
                        </div>

                        <div className="aid-detail-row">
                            <h4>Direct PLUS Loan</h4>
                            <div>
                                <p>
                                For eligible parents of dependent undergraduates. Borrowers are responsible for all interest.
                                </p>
                                <p>
                                    Graduate/professional PLUS loans: new borrowing ended July 1, 2026, except for qualifying continuing students under limited transition rules. Check current eligibility before planning to use Grad PLUS.
                                </p>
                            </div>
                        </div>

                        <a 
                            href="https://studentaid.gov/understand-aid/types/loans/plus/grad"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read the current Grad PLUS eligibility and transition rules ↗
                        </a>

                        <div className="aid-detail-row">
                            <h4>Federal Perkins Loan · discontinued</h4>
                            <div>
                                <p>A former school-issued federal loan for undergraduate and graduate students. No new Perkins Loans have been made since 2017.</p>
                                <p>
                                    For existing borrowers, interest generally did not accrue during eligible in-school, grace, or deferment periods. This is not a new aid option.
                                </p>
                            </div>
                        </div>

                        <div className="aid-detail-row">
                            <h4>Private student loans</h4>
                            <p>
                                Credit-based loans from banks, credit unions, or online lenders. Rates, repayment terms, and protections vary by lender.
                            </p>
                        </div>

                        <a
                            href="https://studentaid.gov/understand-aid/types/loans"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Review current federal student loan options ↗Review current federal student loan options ↗ 
                        </a>
                    </div>

                    <div className="aid-type-card">
                        <h3>Federal Work-Study</h3>
                        <p>
                            A federal work program for undergraduate and graduate students at participating schools.
                        </p>
                        <p>
                            You earn money through a work-study job to help pay for school. Work-study is earned through work—not a grant or loan paid to you upfront.
                        </p>
                    </div>

                    <div className="aid-reminder">
                        <h3>Before you plan your aid</h3>
                        <p>
                            Eligibility and program rules can change. The linked overview includes older loan information; use current Federal Student Aid guidance and confirm details with your school’s financial aid office.
                        </p>
                        <a
                            href="https://studentaid.gov/sites/default/files/types-of-aid.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View the supplied Federal Student Aid overview ↗
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default FinancialAid;