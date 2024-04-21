import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewModal from './ReviewModal'

const TableWithButtons: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleLoadData = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv'; // Set accepted file types
    fileInput.style.display = 'none'; // Hide the file input
    fileInput.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        // Handle file upload, e.g., read the file content
        console.log('File selected:', file);
        setDataLoaded(true);
      }
    };
    document.body.appendChild(fileInput); // Append the file input to the body
    fileInput.click(); // Trigger a click event on the file input
  };

  const handleReviewPapers = () => {
    setShowModal(true)
  };

  const handleStartResumeStop = () => {
    // Handle start/resume/stop button click
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary me-2" onClick={handleLoadData}>Load Data</button>
          <button className="btn btn-primary me-2" onClick={handleReviewPapers}>Review Papers</button>
          <button className="btn btn-primary" onClick={handleStartResumeStop}>Start/Resume/Stop</button>
        </div>
      </div>
      {dataLoaded ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Title</th>
                <th style={{ width: '50%' }}>Abstract</th>
                <th style={{ width: '10%' }}>Discarded</th>
                <th style={{ width: '10%' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {/* Render table rows here */}
              <tr>
                <td>Sample Title 1</td>
                <td>Sample Abstract 1</td>
                <td>No</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Sample Title 2</td>
                <td>Sample Abstract 2</td>
                <td>Yes</td>
                <td>6</td>
              </tr>
              {/* Add more table rows if needed */}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">No data loaded</div>
      )}
      <ReviewModal showModal={showModal} setShowModal={setShowModal} /> 
    </div>
  );
};

export default TableWithButtons;
