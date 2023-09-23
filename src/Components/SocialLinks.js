const SocialLinks = ({ href, className, childClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={childClass}>
        <i className={className}></i>
      </a>
    </li>
  );
};
export default SocialLinks;
