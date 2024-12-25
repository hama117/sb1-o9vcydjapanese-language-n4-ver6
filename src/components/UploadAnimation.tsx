import React from 'react';
import { Upload } from 'lucide-react';

interface Props {
  isUploading: boolean;
}

export const UploadAnimation: React.FC<Props> = ({ isUploading }) => {
  return (
    <div className={`transition-transform duration-700 ${isUploading ? 'animate-bounce' : ''}`}>
      <Upload 
        className={`w-8 h-8 ${
          isUploading 
            ? 'text-blue-600 animate-pulse' 
            : 'text-blue-500'
        }`} 
      />
    </div>
  );
};