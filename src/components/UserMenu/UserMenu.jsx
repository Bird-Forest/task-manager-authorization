import { useDispatch } from 'react-redux';
import StatusFilter from 'components/Filter/StatusFilter';
import { logoutThunk } from 'redux/operations';
import { BtnLogOut, WrapUserMenu } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <WrapUserMenu>
      <StatusFilter />
      <BtnLogOut type="button" onClick={() => dispatch(logoutThunk())}>
        <ImExit className="icon-out" />
      </BtnLogOut>
    </WrapUserMenu>
  );
};
