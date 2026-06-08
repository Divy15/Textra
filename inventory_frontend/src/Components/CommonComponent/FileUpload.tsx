import React, { useState, useRef, type ChangeEvent } from 'react';

export type AllowedFileType = 'pdf' | 'image' | 'both';

interface FileUploadProps {
  /** Mode of allowed files */
  allowedType: AllowedFileType;
  /** Dynamic API function passed from parent component */
  onUploadApi: (file: File) => Promise<void>;
  /** Optional callback when upload succeeds */
  onSuccess?: () => void;
  /** Optional callback if upload fails */
  onError?: (error: any) => void;
  /** Custom label for the upload button */
  label?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  allowedType,
  onUploadApi,
  onSuccess,
  onError,
  label = 'Select File',
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getAcceptAttribute = (): string => {
    switch (allowedType) {
      case 'pdf':
        return 'application/pdf';
      case 'image':
        return 'image/*';
      case 'both':
      default:
        return 'application/pdf, image/*';
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleCancel = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteUploaded = () => {
    setUploadedFileName(null);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      await onUploadApi(selectedFile);
      
      // Save filename to show the clean success banner state
      setUploadedFileName(selectedFile.name);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Upload failed:', error);
      if (onError) onError(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Input Label synced with parent design architecture */}
      <span className="block text-sm font-semibold mb-2 text-gray-700">
        {label}
      </span>

      <div className="w-full p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={getAcceptAttribute()}
          className="hidden"
        />

        {/* STATE 1: File successfully uploaded -> Shows delete/re-upload banner */}
        {uploadedFileName ? (
          <div className="flex items-center justify-between gap-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded shrink-0">
                SAVED
              </span>
              <p className="text-sm font-medium text-gray-700 truncate">
                {uploadedFileName}
              </p>
            </div>
            <button
              type="button"
              onClick={handleDeleteUploaded}
              className="p-1 text-gray-400 hover:text-red-500 rounded transition-colors"
              title="Remove file and upload again"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ) : !selectedFile ? (
          /* STATE 2: Empty/Initial State -> Select file target button */
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border-2 border-dashed border-gray-300 hover:border-gray-400 text-gray-600 font-medium text-sm rounded-md transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Choose Document / Photo
          </button>
        ) : (
          /* STATE 3: Staged File State -> Flexible single row layout wrapping into dual rows on small dimensions */
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Side Details */}
            <div className="flex items-center gap-3 min-w-[200px] max-w-full sm:max-w-[60%]">
              {selectedFile.name.toLowerCase().endsWith('.pdf') ? (
                <span className="text-red-500 font-bold text-xs bg-red-100 px-2 py-1 rounded shrink-0">PDF</span>
              ) : (
                <span className="text-amber-600 font-bold text-xs bg-amber-100 px-2 py-1 rounded shrink-0">IMG</span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate" title={selectedFile.name}>
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>

            {/* Right Side Control Triggers */}
            <div className="flex items-center gap-2 ml-auto sm:ml-0">
              <button
                type="button"
                disabled={isUploading}
                onClick={handleCancel}
                className="px-4 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isUploading}
                onClick={handleUpload}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white rounded-md disabled:opacity-50 transition-all min-w-[90px] justify-center"
                style={{ backgroundColor: '#C19A6B' }}
              >
                {isUploading ? (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Upload'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};