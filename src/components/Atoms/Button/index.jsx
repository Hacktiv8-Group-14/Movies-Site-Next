import PropTypes from "prop-types";

export default function Button(props) {
  const { onClick, children, className, type, disabled } = props;
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onclick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  disabled: false,
  type: "",
};
