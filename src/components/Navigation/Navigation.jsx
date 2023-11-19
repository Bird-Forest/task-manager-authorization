import { NavLink } from 'react-router-dom';
import { Header, NavMenu } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <Header>
      <NavMenu>
        <NavLink to="/" className="navigate">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/tasks" className="navigate">
              Tasks
            </NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            {/* <NavLink to="/register" className="navigate">
              Register
            </NavLink>
            <NavLink to="/login" className="navigate">
              Login
            </NavLink> */}
            <AuthNav />
          </>
        )}
      </NavMenu>
    </Header>
  );
};

//  <Header>
//       <NavMenu>
//         <NavLink to="/" className="navigate">
//           Home
//         </NavLink>
//         {isLoggedIn ? (
//           <>
//             <NavLink to="/tasks" className="navigate">
//               Tasks
//             </NavLink>
//             <button>Log Out</button>
//           </>
//         ) : (
//           <>
//             <NavLink to="/register" className="navigate">
//               Register
//             </NavLink>
//             <NavLink to="/login" className="navigate">
//               Login
//             </NavLink>
//           </>
//         )}
//       </NavMenu>
//     </Header>
