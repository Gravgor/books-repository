export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      subtitle?: string;
      description?: string;
      authors: string[];
      publishedDate: string;
      pageCount: number;
      language: string;
      imageLinks?: {
        thumbnail: string;
      };
      previewLink: string;
    };
  }