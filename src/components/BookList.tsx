import { useState } from "react";
import DynamicTable from "./DynamicTable";


export default function BookList() {
    const [selectedBook, setSelectedBook] = useState<number | null>(null)

    const books = [
        {
          id: 1,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          genre: 'Fantasy',
          year: 1954,
          description:
            'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.',
        },
        {
          id: 2,
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          genre: 'Fiction',
          year: 1960,
          description:
            'To Kill a Mockingbird is a novel by Harper Lee. It was published in 1960 and became an instant classic of American literature. The story is set in the fictional town of Maycomb, Alabama, during the Great Depression, and follows young Scout Finch as she observes her father, lawyer Atticus Finch, navigate racial injustice.',
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          genre: 'Dystopian',
          year: 1949,
          description:
            '1984 is a dystopian novel by George Orwell. It depicts a totalitarian society where critical thought is suppressed under the rule of Big Brother. The story follows the life of Winston Smith, a low-ranking member of the ruling Party, as he rebels against the oppressive regime.',
        },
        // Add more books as needed
      ];

      const handleBookClick = (id: number) => {
        setSelectedBook(id);
      }


    return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col gap-4">
        <DynamicTable
          data={books}
          columns={['ID','Author', 'Title', 'Genre', 'Year', 'Action']}
          onRowClick={handleBookClick}
          selectedRow={selectedBook}
        />
      </div>
    </section>
  );
}