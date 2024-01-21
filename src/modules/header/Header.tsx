import SiteLogo from "../icons/SiteLogo";
import ArrowDown from "../icons/ArrowDown";
import Button from "../button/Button";
import "./header.scss";
export default function Header() {
  const navLists = [
    { name: "Products", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Pricing", href: "#" },
  ];
  return (
    <header className="header">
      <div className="header__logo">
        <SiteLogo />
        <h2>
          ClearLink<span>.</span>
        </h2>
      </div>
      <nav className="header__navs">
        <ul className="header__navs-lists">
          {navLists.map((list, i) => (
            <li key={i}>
              {list.name} <ArrowDown />
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__button">
        <Button type="none-fill" text="Talk to sales" />
        <Button type="fill" text="Sign up for free" />
      </div>
    </header>
  );
}
