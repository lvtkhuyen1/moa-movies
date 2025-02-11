// "use client";

// import { useEffect, useState } from "react";
// import Pagination from "./Pagination";
// import Header from "../Header";
// import HeaderCard from "../HeaderCard";
// import Footer from "../Footer";

// interface CategoryProps {
//   category: string;
// }
// const ITEMS_PER_PAGE = 20;

// export default function Category({ category }: CategoryProps) {
//   const [movies, setMovies] = useState<MovieType[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//    useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await handleFetchMovies(currentPage, ITEMS_PER_PAGE);
//         if (res.success) {
//           const filteredMovies = res.data.movies.filter(
//             (movie) => movie.cate_id.toString() === category
//           );
//           setMovies({ filteredMovies } as any);
//           setTotalPages(Math.ceil(res.data.total / ITEMS_PER_PAGE));
//         }
//       } catch (error) {
//         console.error('Failed to fetch movies:', error);
//       }
//     };

//     fetchMovies();
//   }, [category, currentPage]);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const handlePageClick = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <>
//       <div className="mx-4">
//         <div className="bg-black absolute left-0 w-10" />
//         <div className="flex items-center gap-2 mt-4">
//           <Image alt="" src={MovieIcon} height={20} />
//           <span className="font-bold text-xl">{category}</span>
//         </div>
//         <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {movies.map((movie, index) => (
//             <CardMovie
//               movieImage={movie.image}
//               movieName={movie.des}
//               movieTitle={movie.title}
//               key={index}
//             />
//           ))}
//         </div>
//         <div className="mt-6 flex justify-center items-center space-x-4">
//           <Pagination
//             label="<"
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//           />

//           {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//             (page) => (
//               <Pagination
//                 key={page}
//                 label={page.toString()}
//                 onClick={() => handlePageClick(page)}
//                 isActive={page === currentPage}
//               />
//             )
//           )}

//           <Pagination
//             label=">"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
