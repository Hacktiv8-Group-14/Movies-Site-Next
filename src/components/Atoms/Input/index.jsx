import PropTypes from "prop-types";

export default function Input(props) {
  const { type, className, placeholder, onChange, value } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "",
  className: "",
  onChange: () => {},
  placeholder: "input",
};
