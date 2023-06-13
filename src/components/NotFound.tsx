import { useNavigate } from "react-router";


export default function NotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg text-gray-600">The requested page could not be found.</p>
          <button
            className="mt-4 text-blue-500 hover:text-blue-700"
            onClick={handleGoBack}
          >
            Go back to last page
          </button>
        </div>
      );
}