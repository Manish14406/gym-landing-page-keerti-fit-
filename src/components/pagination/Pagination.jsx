function Pagination({ curPage, numPages, setCurPage }) {
  return (
    <div className="mt-20 flex justify-center gap-4">
      {Array.from({ length: numPages }).map((_, i) => (
        <button
          className={`focus flex h-12 w-12 items-center justify-center rounded-md border-2 px-4 py-2 font-bold transition-all duration-300 ${
            curPage === i
              ? "border-red bg-red text-white shadow-lg shadow-orange/30"
              : "border-matte-black bg-matte-black text-white hover:border-red hover:bg-red hover:text-white"
          }`}
          key={i}
          onClick={() => setCurPage(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination;
