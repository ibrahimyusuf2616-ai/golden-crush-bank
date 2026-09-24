import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Button from "../components/button";

function InvoiceSent() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // fallback values in case someone lands here directly without state
  const { amount = "0.00", billTo = "", clientName = "", invoiceCode = "" } = state || {};

  return (
    <div className="page invoice-sent-page">
      <div className="success-icon">
        <CheckCircle size={40} color="#34A853" />
      </div>
      <h1>Invoice sent</h1>
      <p>Your invoice for USD {amount} has been emailed to {billTo}</p>

      <div className="invoice-summary-card">
  <div className="invoice-summary-top">
    <span>INVOICE</span>
    <span className="invoice-code">{invoiceCode}</span>
  </div>
  <h2><span className="usd-label">USD</span> {amount}</h2>
  <hr />
  <div><span>Billed to</span><span>{clientName}</span></div>
  <div><span>Email</span><span>{billTo}</span></div>
  <div><span>Status</span><span className="status-sent">Sent</span></div>
</div>
      <Button variant="yellow" onClick={() => navigate("/home")}>Back to home</Button>
      <Button variant="outline" onClick={() => {}}>View invoice PDF</Button>
    </div>
  );
}

export default InvoiceSent;