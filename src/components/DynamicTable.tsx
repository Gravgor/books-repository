import { DynamicTableProps } from "../types/dynamicTableTypes";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function DynamicTable({ data, onRowClick, selectedRow }: DynamicTableProps) {
  const navigate = useNavigate();
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);

  useEffect(() => {
    setHighlightedRow(selectedRow);
  }, [selectedRow]);

  if (data.length === 0) {
    return <p className="ml-2">No books available.</p>;
  }

  const handleBookClick = (bookName: string) => {
    navigate(`/books/${bookName}`);
  };

  const handleRowClick = (rowId: string) => {
    if (rowId === selectedRow) {
      onRowClick(null);
    } else {
      onRowClick(rowId);
    }
  };

  const columns = ["ID", "Title", "Author", "Published Date", "Page Count", "Categories"];

  const handleAuthorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const author = e.currentTarget.textContent;
    navigate(`/authors/${author}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((book) => (
            <tr
              key={book.id}
              className={`${
                highlightedRow === book.id ? "bg-indigo-100 hover:bg-indigo-100 transition-all" : "hover:bg-indigo-100 transition-all"
              }`}
              onClick={() => handleRowClick(book.id)}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">
                {book.volumeInfo.authors.map((author, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm"
                      onClick={(e) => {
                        handleAuthorClick(e);
                      }}
                    >
                      {author}
                    </a>
                  </span>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.publishedDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.pageCount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.categories}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:px-4 rounded text-xs sm:text-sm"
                  onClick={() => handleBookClick(book.volumeInfo.title)}
                >
                  Learn More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
