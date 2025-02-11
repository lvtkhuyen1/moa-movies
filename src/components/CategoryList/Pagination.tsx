"use client";
interface PaginationProps {
  totalPages: number;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
}

// const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
export default function Pagination({
  label,
  onClick,
  disabled = false,
  isActive = false,
}: PaginationProps) {
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`pagination-btn ${
        disabled ? "pagination-btn" : isActive ? "active" : ""
      }`}
    >
      {label}
    </button>
  );
}

{
  /* <div className="flex gap-2 justify-center mt-4">
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        {"|<"}
      </button>

      <button
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>

      <button
        className="pagination-btn"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">|"}
      </button>
    </div> */
}
