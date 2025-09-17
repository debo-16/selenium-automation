const Header = () => {
  return (
    <header
      className="header flex justify-between items-center h-24 bg-[#e22b9c] px-10 py-5"
      data-testid="header"
    >
      <nav className="navigation-section ">
        <ul className="flex gap-3 items-center text-amber-100 hover:text-amber-300">
          <li>Home</li>
          <li>Skills</li>
          <li>Project</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
