import React from 'react';
import './Hcare.css';

const Hcare = () => {
  // Example data for the grid
  const patientInfo = {
    name: "John Doe",
    age: 35,
    diseases: ["Hypertension", "Diabetes"],
    dietPlan: [
      { day: "Monday", meal: "Grilled chicken, steamed vegetables, and quinoa" },
      { day: "Tuesday", meal: "Salmon, brown rice, and broccoli" },
      { day: "Wednesday", meal: "Turkey wrap with spinach and avocado" },
    ],
    healthcareAdvice: [
      "Stay hydrated!",
      "Walk at least 30 minutes daily.",
      "Limit sugar intake.",
    ],
    funnyMessages: [
      "An apple a day keeps the doctor away, but only if you aim well!",
      "Laughter is the best medicine, but if you have a sore throat, try soup.",
    ],
  };

  return (
    <div className="bento-container">
      <h1 className="bento-title">Patient Health Dashboard</h1>

      <div className="bento-grid">
        {/* Patient Details */}
        <div className="bento-item patient-info large-item">
          <h2>Patient Details</h2>
          <p><strong>Name:</strong> {patientInfo.name}</p>
          <p><strong>Age:</strong> {patientInfo.age}</p>
          <p><strong>Diseases:</strong> {patientInfo.diseases.join(", ")}</p>
          <img src="/images/patient.png" alt="Patient" className="bento-image" />
        </div>

        {/* Diet Plan */}
        <div className="bento-item diet-plan">
          <h2>Diet Plan</h2>
          <ul>
            {patientInfo.dietPlan.map((item, index) => (
              <li key={index}><strong>{item.day}:</strong> {item.meal}</li>
            ))}
          </ul>
          <img src="/images/diet.png" alt="Diet Plan" className="bento-image" />
        </div>

        {/* Healthcare Advice */}
        <div className="bento-item healthcare-advice">
          <h2>Healthcare Advice</h2>
          <ul>
            {patientInfo.healthcareAdvice.map((advice, index) => (
              <li key={index}>{advice}</li>
            ))}
          </ul>
          <img src="/images/healthcare.png" alt="Healthcare" className="bento-image" />
        </div>

        {/* Funny Messages */}
        <div className="bento-item funny-messages small-item">
          <h2>Funny Messages</h2>
          <ul>
            {patientInfo.funnyMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          <img src="/images/funny.png" alt="Funny" className="bento-image" />
        </div>

        {/* Placeholder for additional information */}
        <div className="bento-item additional-info large-item">
          <h2>Additional Info</h2>
          <p>Stay tuned for more personalized tips and resources!</p>
          <div className="chart-placeholder">
            <h3>Activity Progress</h3>
            <img src="/images/chart.png" alt="Progress Chart" className="bento-chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hcare;

/* BentoGrid.css */
