import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileSelectorPopup: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click(); // Trigger a click event on the file input
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      // Handle file upload, e.g., read the file content
      console.log('File selected:', file);
    }
  };

  return (
    <div className="container">
<input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".csv"
            />
    </div>
  );
};

export default FileSelectorPopup;
