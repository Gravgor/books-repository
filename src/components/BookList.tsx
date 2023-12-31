import { useEffect, useState } from "react";
import DynamicTable from "./DynamicTable";
import { IBookListProps } from "../types/bookListTypes";
import Loading from "./Loading";

export default function BookList() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<IBookListProps[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=javascript"
        );
        const data = await response.json();
        if (data.items) {
          const formattedBooks = data.items.map((item: IBookListProps) => {
            const book: IBookListProps = {
              id: item.id,
              kind: item.kind,
              etag: item.etag,
              selfLink: item.selfLink,
              volumeInfo: {
                title: item.volumeInfo.title || "",
                authors: item.volumeInfo.authors || [],
                categories: item.volumeInfo.categories || "N/A",
                publishedDate: item.volumeInfo.publishedDate || "",
                pageCount: item.volumeInfo.pageCount || "N/A",
              },
            };
            return book;
          });
          setBooks(formattedBooks);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleBookClick = (id: string | null) => {
    setSelectedBook(id);
  };

  return (
    <section className="text-gray-600 body-font">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-4">
          <DynamicTable
            data={books}
            onRowClick={handleBookClick}
            selectedRow={selectedBook}
          />
        </div>
      )}
    </section>
  );
}
