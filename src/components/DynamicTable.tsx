import { DynamicTableProps } from "../types/dynamicTableTypes";
import { useNavigate } from "react-router";

function DynamicTable({ data, onRowClick, selectedRow }: DynamicTableProps) {
    const navigate = useNavigate();

    if (data.length === 0) {
        return <p className="ml-2">No books available.</p>;
    }

    const handleBookClick = (bookName: string) => {
        navigate(`/books/${bookName}`);
    };

    const columns = ["ID", "Title", "Author", "Published Date", "Page Count"];

    const handleAuthorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const author = e.currentTarget.textContent;
        navigate(`/authors/${author}`);
    };

    return (
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
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((book) => (
                        <tr
                            key={book.id}
                            className={`${selectedRow === book.id ? "bg-indigo-100" : ""}`}
                        >
                            <td className="px-6 py-4 whitespace-nowrap">{book.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.volumeInfo.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {book.volumeInfo.authors.map((author, index) => (
                                    <span key={index}>
                                        {index > 0 && ", "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700"
                                            onClick={(e) => {
                                                handleAuthorClick(e);
                                            }}
                                        >
                                            {author}
                                        </a>
                                    </span>
                                ))}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.volumeInfo.publishedDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.volumeInfo.pageCount}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleBookClick(book.volumeInfo.title)}
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

export default DynamicTable;
