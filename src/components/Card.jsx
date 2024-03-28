import PropTypes from "prop-types";

const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired, // children prop'unun bir React öğesi olması gerektiğini belirtiyoruz
  bg: PropTypes.string, // bg prop'unun bir string olması gerektiğini belirtiyoruz
};
export default Card;
