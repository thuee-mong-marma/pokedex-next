import { cn } from "@/lib/utils";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
  currentPage: number;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageWindow = 5;
  let startPage, endPage;

  if (totalPages <= pageWindow) {
    // Total pages less than page window size, show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // More pages than the page window size
    // Calculate start and end pages
    if (currentPage <= Math.floor(pageWindow / 2)) {
      startPage = 1;
      endPage = pageWindow;
    } else if (currentPage + Math.floor(pageWindow / 2) >= totalPages) {
      startPage = totalPages - pageWindow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(pageWindow / 2);
      endPage = currentPage + Math.floor(pageWindow / 2);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="py-10">
      <ul className="flex gap-4 justify-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={cn(
              "bg-neutral-200 font-medium py-2 px-4 rounded-md cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 ease-in-out",
              currentPage == number-1 ? "bg-black text-white" : ""
            )}
            onClick={(event) => {
              event.preventDefault();
              paginate(number-1);
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
