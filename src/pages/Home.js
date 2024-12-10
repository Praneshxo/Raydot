import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';

const Home = ({ onFileUpload }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        onFileUpload(files);
    };

    return (
    <div>
        <div
            className={`file-drop-zone ${isDragging ? 'dragging' : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <i className="fa fa-cloud-upload fa-3x">
            <FontAwesomeIcon icon={faCloudArrowUp} className="upload" />
            </i>
            <p>Drag and drop files here</p>
        </div>
        <div className='box'>
            
        </div>
    </div>
    );
};

export default Home;