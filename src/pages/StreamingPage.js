// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PaymentForm from './PaymentForm';
// import { decodeToken } from 'react-jwt';
// import Header from '../Header';

// function StreamingPage({ userId, isAuthenticated,
//   animationFromDb,
//   moviesFromDb,
//   showSearchList,
//   handleCloseSearchList,
//   handleSearchSubmit,
// }) {
//   const [paid, setPaid] = useState(false);
//   const [showErrorMessage, setShowErrorMessage] = useState(false);

//   useEffect(() => {

//     axios.get(`/check-payment/${userId}`)
//       .then((response) => {
//         setPaid(response.data.paid);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [userId]);

//   useEffect(() => {
//     const userToken = localStorage.getItem('userToken');

//     if (userToken) {
//       const decodedToken = decodeToken(userToken);
//       if (decodedToken && decodedToken.paid) {
//         setPaid(true);
//       }
//     }
//   }, []);

//   const handleStreaming = () => {

//     if (paid && isAuthenticated) {

//       console.log('Streaming...');
//     } else if (!isAuthenticated) {
//       alert('Please log in to access streaming.');
//     } else {
//       setShowErrorMessage(true);
//     }
//   };

//   const handlePaymentSuccess = () => {

//     setPaid(true);

//   };

//   return (
//     <>
//       <Header
//         showSearchList={showSearchList}
//         handleSearchSubmit={handleSearchSubmit}
//         handleCloseSearchList={handleCloseSearchList}
//         moviesFromDb={moviesFromDb}
//         animationFromDb={animationFromDb}
//       />
//       {showErrorMessage && (
//         <p>You need to make a payment to access streaming.</p>
//       )}
//       {paid ? (
//         <div className="w-full h-screen bg-gradient-to-b from-[#020d18] to-[#111827] p-4">
//         <h2 className="text-[1.75rem] font-bold mb-4">Stream movie</h2>
//         {movie?.stream_link && (
//           <div className="min-w-[280px] max-w-[400px] h-[220px] sm:min-w-[350px] sm:max-w-[400px] sm:h-[240px] lg:min-w-[460px] lg:max-w-[480px] lg:h-[300px] bg-slate-300 rounded-xl mb-5 sm:mb-[50px]">
//             <iframe
//               width="100%"
//               height="100%"
//               className="rounded-xl"
//               src={movie?.stream_link}
//               title="YouTube video player"
//               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         )}

//         {!movie?.stream_link && (
//           <div className="min-w-[280px] max-w-[400px] h-[220px] sm:min-w-[350px] sm:max-w-[400px] sm:h-[240px] lg:min-w-[460px] lg:max-w-[480px] lg:h-[300px] bg-slate-600 rounded-xl mb-5 sm:mb-[50px] flex justify-center items-center text-slate-800 font-bold text-[1.3rem]">
//             <p>Not available</p>
//           </div>
//         )}

//       </div>
//       ) : (
//         <div>
//           <p>Please make a payment to access streaming.</p>
//           {isAuthenticated && <PaymentForm userId={userId} onPaymentSuccess={handlePaymentSuccess} />}
//         </div>
//       )}
//     </>
//   );
// }

// export default StreamingPage;
