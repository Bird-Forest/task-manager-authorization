import { NavLink } from 'react-router-dom';
import { NavMenu } from './Navigation.styled';
import { Header } from 'components/AppBar/AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
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
            <button>LogOut</button>
          </>
        ) : (
          <>
            <NavLink to="/register" className="navigate">
              Register
            </NavLink>
            <NavLink to="/login" className="navigate">
              Login
            </NavLink>
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
