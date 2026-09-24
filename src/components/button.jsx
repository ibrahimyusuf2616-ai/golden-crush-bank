function Button({ children, variant = "yellow", type = "button", onClick, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`main-button ${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;