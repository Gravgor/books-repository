import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../store/actions/breadcrumbAction";
import { Author, AuthorCardProps } from "../types/authorCardTypes";

export default function AuthorCard({ name }: AuthorCardProps) {
  const [author, setAuthor] = useState<Author | null>(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(name)}`
        );
        const data = await response.json();
        if (data.items) {
          const books = data.items;
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

  const handleBookClick = (bookName: string, id: string) => {
    dispatch(setBreadcrumbs([{ label: "Books", url: "/books" }, { label: bookName, url: `/books/${id}` }]));
    navigate(`/books/${id}`);
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
                <tr className="hover:bg-indigo-100 transition-all" key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.publishedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base">{book.volumeInfo.pageCount || "N/A"}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:px-4 rounded text-xs sm:text-sm"
                      onClick={() => handleBookClick(book.volumeInfo.title, book.id)}
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
