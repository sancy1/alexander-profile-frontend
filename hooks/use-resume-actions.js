
// hooks/use-resume-actions.js
import { useCallback } from 'react';

const RESUME_PATH = '/resume.pdf'; // Path to your resume in the public directory
const RESUME_FILENAME = 'Alexander_Cyril_Resume.pdf'; // Suggested filename for download

export const useResumeActions = () => {

  // Function to download the resume
  const downloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []); // Empty dependency array means this function is memoized and won't change on re-renders

  // Function to view the resume in the browser
  const viewResume = useCallback(() => {
    // Open the PDF directly in a new tab/window
    // The browser's built-in PDF viewer will handle this
    window.open(RESUME_PATH, '_blank');
  }, []);

  return { downloadResume, viewResume };
};