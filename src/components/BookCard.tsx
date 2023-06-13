import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/bookCardTypes";
import NotFound from "./NotFound";

interface BookCardProps {
  id: string;
}

export default function BookCard({ id }: BookCardProps) {
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();
        if (data) {
          const bookData = data;
          const bookInfo: Book = {
            id: bookData.id,
            volumeInfo: {
              title: bookData.volumeInfo.title,
              subtitle: bookData.volumeInfo.subtitle,
              description: bookData.volumeInfo.description,
              authors: bookData.volumeInfo.authors || [],
              publishedDate: bookData.volumeInfo.publishedDate || "N/A",
              pageCount: bookData.volumeInfo.pageCount || 0,
              language: bookData.volumeInfo.language,
              imageLinks: bookData.volumeInfo.imageLinks,
              previewLink: bookData.volumeInfo.previewLink,
            },
          };
          setBook(bookInfo);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAuthorClick = (authorName: string) => {
    navigate(`/authors/${encodeURIComponent(authorName)}`);
  };

  const handleBookClick = () => {
    if (!book) return;
    window.open(book.volumeInfo.previewLink, "_blank");
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!book) {
    return <NotFound />;
  }

  const { title, subtitle, authors, description, publishedDate, pageCount, imageLinks } = book.volumeInfo;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        {imageLinks && (
          <img
            src={imageLinks.thumbnail}
            alt={title}
            className="w-32 h-auto mr-4"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold mb-1">{title}</h1>
          {subtitle && <h2 className="text-xl font-bold mb-2">{subtitle}</h2>}
          <p className="text-gray-600">
            Authors:{" "}
            {authors.map((author, index) => (
              <span key={index}>
                {index > 0 && ", "}
                <button
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => handleAuthorClick(author)}
                >
                  {author}
                </button>
              </span>
            ))}
          </p>
          <p className="text-gray-600">Language: {book.volumeInfo.language.toUpperCase()}</p>
        </div>
      </div>
      <p className="text-gray-600">Description: {description || "N/A"}</p>
      <p className="text-gray-600">Published Date: {publishedDate}</p>
      <p className="text-gray-600">Page Count: {pageCount}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleBookClick}
      >
        Go to Book
      </button>
    </div>
  );
}
