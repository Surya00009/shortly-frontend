import "./AnalyticsCard.css";

function AnalyticsCard({ icon, title, value, description }) {

    return (

        <div className="analytics-card">

            <div className="card-icon">

                {icon}

            </div>

            <h3>{title}</h3>

            <h1>{value}</h1>

            <p>{description}</p>

        </div>

    );

}

export default AnalyticsCard;