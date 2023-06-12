import { DisplayOption, DisplayToggleProps } from "../types/displayToggleTypes";



function DisplayToggle({ onDisplayChange }: DisplayToggleProps) {
  const handleOptionChange = (option: DisplayOption) => {
    onDisplayChange(option);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Bookify!</h1>
      <p className="text-gray-600 text-center mb-8">
        Discover a world of knowledge and imagination through our extensive collection of authors and books.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Authors</h2>
          <p className="text-gray-600 mb-6">
            Explore a list of talented authors and their works. Discover their biographies, achievements, and more.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handleOptionChange(DisplayOption.Authors)}
          >
            Select
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Books</h2>
          <p className="text-gray-600 mb-6">
            Dive into a collection of fascinating books spanning various genres. Find your next captivating read.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handleOptionChange(DisplayOption.Books)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayToggle;
