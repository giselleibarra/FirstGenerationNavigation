const ScholarshipCard = ({ name, eligibility, amount, type, applicationUrl, deadline }) => {
    return (
        <div className="scholarship-card">
            <h3>{name}</h3>

            <p className="scholarship-eligibility">
                Eligibility: {eligibility}
            </p>

            <div className="scholarship-details">
                <div>
                    <span>Award</span>
                    <p>{amount}</p>
                </div>

                <div>
                    <span>Type</span>
                    <p>{type}</p>
                </div>

                {deadline && (
                    <div>
                        <span>Dealine</span>
                        <p>
                            {new Date(deadline).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "UTC"
                            })}
                        </p>
                    </div>
                )}
            </div>

            {applicationUrl && applicationUrl !== "https://example.com" && (
                <a
                    href={applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-button"
                >
                    Apply
                </a>
            )}
        </div>
    );
};

export default ScholarshipCard