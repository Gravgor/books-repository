import { useNavigate } from "react-router-dom";
import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate";

export default function Authors() {
  useBreadcrumbUpdate();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
