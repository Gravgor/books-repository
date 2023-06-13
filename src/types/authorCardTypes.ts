export interface AuthorCardProps {
    name: string;
  }
  
 export interface Author {
    name: string;
    books: Book[];
  }
  
export interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
      title: string;
      subtitle?: string;
      authors: string[];
      publishedDate?: string;
      description?: string;
      industryIdentifiers?: {
        type: string;
        identifier: string;
      }[];
      readingModes?: {
        text: boolean;
        image: boolean;
      };
      pageCount?: number | string;
      printType?: string;
      categories?: string[];
      maturityRating?: string;
      allowAnonLogging?: boolean;
      contentVersion?: string;
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
      language?: string;
      previewLink?: string;
      infoLink?: string;
      canonicalVolumeLink?: string;
    };
    saleInfo?: {
      country?: string;
      saleability?: string;
      isEbook?: boolean;
    };
    accessInfo?: {
      country?: string;
      viewability?: string;
      embeddable?: boolean;
      publicDomain?: boolean;
      textToSpeechPermission?: string;
      epub?: {
        isAvailable?: boolean;
        downloadLink?: string;
      };
      pdf?: {
        isAvailable?: boolean;
        downloadLink?: string;
      };
      webReaderLink?: string;
      accessViewStatus?: string;
      quoteSharingAllowed?: boolean;
    };
    searchInfo?: {
      textSnippet?: string;
    };
  }