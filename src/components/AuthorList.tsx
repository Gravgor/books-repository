import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "./Loading";

interface Book {
  volumeInfo: {
    authors?: string[];
  };
}

export default function AuthorList() {
  const [authors, setAuthors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=inauthor:&maxResults=10"
        );
        const data = await response.json();
        if (data.items) {
          const authors = data.items
            .map((item: Book) => item.volumeInfo.authors)
            .flat()
            .filter((author: string | undefined) => author !== undefined) as string[];
          setAuthors(authors);
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  const handleLearnMore = (author: string) => {
    navigate(`/authors/${encodeURIComponent(author)}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Author</th>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr className="hover:bg-indigo-100 transition-all" key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{author}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleLearnMore(author)}
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
