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

// import React, { useState } from 'react';

// function Example() {
//   const [isHidden, setIsHidden] = useState(false);

//   const handleClick = () => {
//     setIsHidden(true);
//   };

//   return (
//     <div>
//       <button onClick={() => setIsHidden(!isHidden)}>
//         {isHidden ? 'Показать' : 'Скрыть'}
//       </button>
//       {!isHidden && (
//         <div>
//           <a href="#" onClick={handleClick}>
//             Ссылка 1
//           </a>
//           <a href="#" onClick={handleClick}>
//             Ссылка 2
//           </a>
//           <a href="#" onClick={handleClick}>
//             Ссылка 3
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// <NavMenu>
//   <BtnMenu onClick={() => setIsHidden(!isHidden)}>
//     <RiMenuSearchFill className="icon-menu" />
//   </BtnMenu>
//   {!isHidden && (
//     <WrapMenu
//       style={{
//         transform: isHidden ? 'translate(0, -100%)' : 'translate(0, 0)',
//       }}
//     >
//       <NavLink to="/" className="navigate-menu" onClick={handleClick}>
//         Home
//       </NavLink>
//       <NavLink to="/tasks" className="navigate-menu" onClick={handleClick}>
//         Tasks
//       </NavLink>
//     </WrapMenu>
//   )}
//   {isLoggedIn ? (
//     <>
//       <NavLink to="/" className="navigate">
//         Home
//       </NavLink>
//       <NavLink to="/tasks" className="navigate">
//         Tasks
//       </NavLink>
//       <UserMenu />
//     </>
//   ) : (
//     <>
//       <AuthNav />
//     </>
//   )}
// </NavMenu>;
