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
      fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
        .then((response) => response.json())
        .then((data) => {
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
                  publishedDate: item.volumeInfo.publishedDate || "",
                  pageCount: item.volumeInfo.pageCount || 0
                }
              };
              return book;
            });
            setBooks(formattedBooks);
          }
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchBooks();
  }, []);

  const handleBookClick = (id: string) => {
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
