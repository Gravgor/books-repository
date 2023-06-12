export interface AuthorCardProps {
    name: string;
  }
  
 export interface Author {
    name: string;
    books: Book[];
  }
  
  export interface Book {
    id: string;
      title: string;
      publishedDate: string;
      pageCount: number;
  }