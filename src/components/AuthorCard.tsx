import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { Author, AuthorCardProps, Book } from "../types/authorCardTypes";


export default function AuthorCard({ name }: AuthorCardProps) {
  const [author, setAuthor] = useState<Author | null>(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(name)}`
        );
        const data = await response.json();
        if (data.items) {
          const books = data.items.map((item: { volumeInfo: Book }) => item.volumeInfo);
          setAuthor({ name, books });
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  const handleBookClick = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  const columns = ["ID", "Title", "Published Date", "Page Count", "Action"];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 ml-2">Books that {name} has written</h1>
      {isLoading ? (
        <Loading />
      ) : (
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
              </tr>
            </thead>
            <tbody>
              {author?.books.map((book, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.publishedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {book.pageCount ? book.pageCount : "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleBookClick(book.title)}
                    >
                      Learn More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
