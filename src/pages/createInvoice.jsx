import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";

function CreateInvoice() {
  const [amount, setAmount] = useState("");
  const [billTo, setBillTo] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [invoiceCode, setInvoiceCode] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    navigate("/invoice-sent", {
      state: { amount, billTo, clientName, description, invoiceCode, dueDate },
    });
  };

  return (
    <div className="page create-invoice-page">
      <Header variant="back" title="Create invoice" onBack={() => navigate(-1)} />

      <form onSubmit={handleSend}>
        <Input label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Input label="Bill to (replace email)" type="email" value={billTo} onChange={(e) => setBillTo(e.target.value)} />
        <Input label="Client / customer name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
        <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <div className="invoice-row">
          <Input label="Invoice code" value={invoiceCode} onChange={(e) => setInvoiceCode(e.target.value)} />
          <Input label="Due date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>

        <div className="invoice-summary">
  <div><span>Subtotal</span><span>USD {amount || "0.00"}</span></div>
  <div><span>Service fee</span><span>USD 0.00</span></div>
  <hr />
  <div className="total"><span>Total due</span><span>USD {amount || "0.00"}</span></div>
</div>
        <Button type="submit" variant="yellow">Premium & send invoice</Button>
      </form>
    </div>
  );
}

export default CreateInvoice;