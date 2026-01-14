interface Column {
  key: string
  label: string
}

interface DataTableProps {
  columns: Column[]
  data: Record<string, string | number | boolean | null | undefined>[]
}

export default function DataTable({ columns, data }: DataTableProps) {
  return (
    <div 
      className="overflow-x-auto rounded-lg border shadow-sm -mx-3 sm:mx-0"
      style={{ 
        borderColor: '#E5E5E5',
        backgroundColor: 'var(--light-background)'
      }}
    >
      <div className="min-w-full inline-block align-middle">
        <table className="w-full min-w-[640px]">
          <thead 
            className="border-b"
            style={{ 
              borderColor: '#E5E5E5',
              backgroundColor: '#F9FAFB'
            }}
          >
            <tr>
              {columns.map((column) => (
                <th 
                  key={column.key} 
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-left text-xs sm:text-sm font-semibold whitespace-nowrap"
                  style={{ 
                    color: 'var(--dark-heading)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E5E5E5' }}>
            {data.length > 0 ? (
              data.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="transition-colors duration-200"
                  style={{ backgroundColor: '#FFFFFF' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                >
                  {columns.map((column) => (
                    <td 
                      key={column.key} 
                      className="px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm"
                      style={{ 
                        color: 'var(--text-dark)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      <div className="truncate max-w-[200px] sm:max-w-none">
                        {row[column.key] !== null && row[column.key] !== undefined 
                          ? String(row[column.key]) 
                          : '—'}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan={columns.length} 
                  className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 text-center text-xs sm:text-sm"
                  style={{ 
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}