import {
  DarkMode,
  LinksDropDown,
  Logo,
  NavSearch,
  // SignOutLink,
  // UserIcon,
} from './components';

const Navbar = () => {
  return (
    <nav className='border-b py-2'>
      <div className='container flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <Logo />
        <NavSearch />
        <div className='flex items-center gap-4'>
          <DarkMode />
          <LinksDropDown />
        </div>
        {/* <div className='flex items-center gap-4'>
          <UserIcon />
          <SignOutLink />
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;
