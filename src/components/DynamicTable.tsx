import { DynamicTableProps } from "../types/dynamicTableTypes";

function DynamicTable({ data, onRowClick, selectedRow }: DynamicTableProps) {
  if (data.length === 0) {
    return <p className="ml-2">No books available.</p>;
  }

  const columns = ["Title", "Author", "Published Date", "Page Count"];

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
          </tr>
        </thead>
        <tbody>
          {data.map((book) => (
            <tr
              key={book.id}
              className={`${selectedRow === book.id ? "bg-indigo-100" : ""}`}
              onClick={() => onRowClick(book.id)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {book.volumeInfo.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.volumeInfo.authors.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.volumeInfo.publishedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.volumeInfo.pageCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
