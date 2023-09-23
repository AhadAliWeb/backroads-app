import logo from "../images/logo.svg";
import { listItems, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {listItems.map((item) => {
            return <PageLinks key={item.id} {...item} childClass="nav-link" />;
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLinks key={link.id} {...link} childClass="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
