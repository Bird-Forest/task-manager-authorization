// Использование библиотеки React-Responsive: Ты можешь использовать библиотеку React-Responsive, чтобы определить, какой компонент показывать на основе ширины экрана. Вот пример кода:
// import React from 'react';
// import Responsive from 'react-responsive';
// import React, { useState, useEffect } from 'react';

// export function Menu() {
//   const Mobile = ({ children }) => (
//     <Responsive maxWidth={767} children={children} />
//   );
//   const Tablet = ({ children }) => (
//     <Responsive minWidth={768} maxWidth={991} children={children} />
//   );

//   return (
//     <div>
//       <Mobile>
//         <BurgerMenu />
//       </Mobile>
//       <Tablet>
//         <Navigation />
//       </Tablet>
//     </div>
//   );
// }

// export function Burger() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth < 768);
//     }

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return <div>{isMobile ? <BurgerMenu /> : <Navigation />}</div>;
// }
