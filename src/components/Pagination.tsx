import { ChevronLeft, ChevronRight, SliceIcon } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const DOTS = "...";

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {

const getVisiblePages = (): (number | string)[] => {
  const pages: (number | string)[] = [];

  // если страниц мало — показываем всё
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const windowSize = 3; // СКОЛЬКО ЧИСЕЛ В СЕРЕДИНЕ
  let start = currentPage - Math.floor(windowSize / 2);
  let end = start + windowSize - 1;

  // левый край
  if (start < 2) {
    start = 2;
    end = start + windowSize - 1;
  }

  // правый край
  if (end > totalPages - 1) {
    end = totalPages - 1;
    start = end - windowSize + 1;
  }

  // 1 всегда есть
  pages.push(1);

  // центральное окно
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // правое троеточие
  pages.push("...");

  // последняя всегда есть
  pages.push(totalPages);

  return pages;
};


  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {getVisiblePages().map((page, index) => (
          <button
            key={`${page}-${index}`} // безопасный ключ (DOTS может повторяться)
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={typeof page === "string"}
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm text-gray-400 font-medium ${
              page === currentPage
                ? "bg-primary "
                : "bg-secondary  hover:bg-muted"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-muted-foreground text-sm">
        Показано {startItem}-{endItem} из {totalItems.toLocaleString("ru-RU")} пользователей
      </p>
    </div>
  );
};

export default Pagination;
