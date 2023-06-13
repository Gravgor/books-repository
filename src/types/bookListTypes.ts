export interface IBookListProps {
  id: string;
  kind: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    publishedDate?: string;
    pageCount?: number | string;
  };
}
