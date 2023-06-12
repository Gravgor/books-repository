
interface DynamicTableProps {
  data: { [key: string]: string | number }[];
  columns: string[];
  onRowClick: (id: number) => void;
  selectedRow: number | null;
}

function DynamicTable({ data, columns, onRowClick, selectedRow }: DynamicTableProps) {
  if (data.length === 0) {
    return <p className="ml-2">No books available.</p>;
  }

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
          {data.map((row) => (
            <tr
              key={row.id}
              className={`${selectedRow === row.id ? 'bg-indigo-100' : ''}`}
              onClick={() => onRowClick(row.id as number)}
            >
              {columns.map((column, index) => (
                <td
                  key={`${row.id}-${column}`}
                  className={`px-6 py-4 whitespace-nowrap${index === columns.length - 1 ? ' text-right' : ''}`}
                >
                  {index === columns.length - 1 ? (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                      onClick={() => onRowClick(row.id as number)}
                    >
                      Learn More
                    </button>
                  ) : (
                    row[column.toLowerCase()]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
