const SocialLinks = ({ href, className, childClass }) => {
  return (
    <li>
      <a href={href} className={childClass}>
        <i className={className}></i>
      </a>
    </li>
  );
};
export default SocialLinks;
