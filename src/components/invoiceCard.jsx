function InvoiceCard({ icon, title, subtitle, amount, type = "outgoing" }) {
  return (
    <div className="invoice-card">
      <div className="invoice-card-left">
        <div className="invoice-card-icon">{icon}</div>
        <div>
          <p className="invoice-card-title">{title}</p>
          <p className="invoice-card-subtitle">{subtitle}</p>
        </div>
      </div>
      <p className={`invoice-card-amount ${type}`}>
        {type === "incoming" ? "+" : "-"}{amount}
      </p>
    </div>
  );
}

export default InvoiceCard;