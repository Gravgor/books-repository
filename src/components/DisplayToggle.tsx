import { DisplayOption, DisplayToggleProps } from "../types/displayToggleTypes";

export default function DisplayToggle({ onDisplayChange }: DisplayToggleProps) {
  const handleOptionChange = (option: DisplayOption) => {
    onDisplayChange(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Bookify!</h1>
      <p className="text-gray-600 mb-8 text-center">
        Explore a world of knowledge and inspiration through our vast collection of programming books and renowned authors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Authors</h2>
          <p className="text-gray-600 mb-6">
            Discover talented authors who have contributed their expertise to the programming world. Explore their biographies, achievements, and insights.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={() => handleOptionChange(DisplayOption.Authors)}
          >
            Select
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Books</h2>
          <p className="text-gray-600 mb-6">
            Immerse yourself in a collection of captivating programming books across various genres. Find your next source of knowledge and inspiration.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={() => handleOptionChange(DisplayOption.Books)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
