import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import SearchIcon from "../assets/search.svg?react";
import PersonIcon from "../assets/person.svg?react";

const Header = () => {
  return (
    <header>
      <div className="h-16 px-4 flex justify-between items-center">
        <h1>
          <img src={logo} alt="Viaja Mundo" />
        </h1>
        <nav className="hidden text-slate-950">
          <ul className="flex gap-8">
            <li>
              <a href="#">Destinos</a>
            </li>
            <li>
              <a href="#">Como Viajar</a>
            </li>
            <li>
              <a href="#">Dicas</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        <div>
          <img src={menu} />
          <div className="hidden">
            <SearchIcon />
            <button className="h-10 border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-4 text-slate-950 text-sm font-semibold">
              <PersonIcon />
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
