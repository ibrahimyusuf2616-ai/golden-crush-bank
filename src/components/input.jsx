function Input({ label, icon, type = "text", ...props }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input type={type} className="main-input" {...props} />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
    </div>
  );
}

export default Input;