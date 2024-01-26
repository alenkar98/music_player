import { useState } from 'react';
import './musicUploadForm.css';

export default function MusicUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSaveFile = () => {
    if (selectedFile) {
      setIsUploading(true);
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            console.log(selectedFile.name + ' uploaded successfully');
            clearInterval(interval);
            setIsUploading(false);
            setSelectedFile(null);
            setUploadProgress(0);
          }
          return newProgress;
        });
      }, 500);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className={'upload'}>
      <input
        type="file"
        id="file-input"
        className={'input'}
        name="filename"
        accept={'.mp3,.wav'}
        onChange={handleFileChange}
      />
      <label className="file-input-label" htmlFor="file-input">
        {selectedFile ? selectedFile.name : 'Select a File'}
      </label>
      <label
        className={selectedFile ? 'file-input-label' : 'disabled'}
        onClick={selectedFile ? handleSaveFile : () => {}}
      >
        {isUploading ? `Uploading ${uploadProgress}%` : 'Upload'}
      </label>
    </div>
  );
}
