import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="mb-6 bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="container px-5 mx-auto md:px-0">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
