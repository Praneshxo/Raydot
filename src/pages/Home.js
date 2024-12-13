import React from 'react';
import './Home.css';
import Calendar from './Calendar'; 
import human from '../images/human.png';


function Home() {
    
    return (
    <div className='Home-main'>
          <div className="app-container">
      {/* Sidebar */}
     <div className="sidebar">
          <div className='pt-re'>
        <h2>GASTROCHECK</h2>
        <ul className="organ-list">
          <li className="organ-item">
            <span>Liver</span> <span>Normal</span>
          </li>
          <hr></hr>
          <li className="organ-item">
            <span>Large Intestine (Colon)</span> <span>Normal</span>
          </li>
          <hr></hr>
          <li className="organ-item highlighted">
            <span>Gallbladder</span>{" "}
            <span>Biliary Dyskinesia (Impaired Bile Flow)</span>
          </li>
          <hr></hr>
          <li className="organ-item highlighted">
            <span>Stomach</span> <span>Erosive Gastritis (Moderate Severity)</span>
          </li>
          <hr></hr>
          <li className="organ-item">
            <span>Small Intestine</span> <span>No Abnormal Findings Detected</span>
          </li>
          <hr></hr>
          <li className="organ-item">
            <span>Pancreas</span> <span>Normal Function</span>
          </li>
          <hr></hr>
          <li className="organ-item highlighted">
            <span>Esophagus</span> <span>Mild Esophagitis</span>
          </li>
          <hr></hr>
          <li className="organ-item">
            <span>Duodenum</span> <span>No Inflammation</span>
          </li>
          <hr></hr>
        </ul>
        </div>
      
        <div className="treatment-section">
          <h3>Treatment</h3>
          <p>
            <strong>Dr. Sarah Bennett</strong> - 16 Aug 2024
          </p>
          <p>
            To manage biliary dyskinesia and erosive gastritis, dietary adjustments including
            a low-fat regimen are recommended. Regular physical activity can promote digestive health.
          </p>
        </div>
        
      </div>

      {/* Center Image */}
      <div className="center-body">
      <img src={human} className='human' alt="Profile" />
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="appointment-section">
          <h3>Book an appointment</h3>
          <p>Specialization: Gastroenterologist</p>
          <div className="calendar">
            <p>November 2024</p>
            {/* Simplified calendar */}
            <div className="dates-grid">

              <Calendar />
            </div>
          </div>
        </div>
       <div className='doc-cont'> 
          <div className="doctors-section">
          <h3>Doctors</h3>
          <ul>
            <li>Dr. Alan Thompson - Gastroenterologist</li>
            <li>Dr. Michael Roberts - Gastroenterologist</li>
            <li>Dr. Sarah Bennett - General Practitioner</li>
            <li>Dr. Emily Carter - Nutritionist</li>
            <li>Dr. James Parker - General Practitioner</li>
            <li>Dr. Christopher Davis - Surgeon</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
 

    </div>
    );
};

export default Home;