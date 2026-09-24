function ActionButton({ icon, label, onClick }) {
  return (
    <button className="action-button" onClick={onClick}>
      <div className="action-icon">{icon}</div>
      <span className="action-label">{label}</span>
    </button>
  );
}

export default ActionButton;