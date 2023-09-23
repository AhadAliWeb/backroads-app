const PageLinks = ({ href, text, parentClass, childClass }) => {
  return (
    <li href={href} className="nav-link">
      {text}
    </li>
  );
};
export default PageLinks;
