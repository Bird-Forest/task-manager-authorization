import { useDispatch } from 'react-redux';
// import { useAuth } from 'hooks';
// import { TaskCounter } from 'components/Counter/TaskCounter';
import StatusFilter from 'components/Filter/StatusFilter';
import { logoutThunk } from 'redux/operations';
import { BtnLogOut, WrapUserMenu } from './UserMenu.styled';
// import { GrLogout } from 'react-icons/gr';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <WrapUserMenu>
      <StatusFilter />
      <BtnLogOut type="button" onClick={() => dispatch(logoutThunk())}>
        <ImExit className="icon-out" />
      </BtnLogOut>
    </WrapUserMenu>
  );
};
