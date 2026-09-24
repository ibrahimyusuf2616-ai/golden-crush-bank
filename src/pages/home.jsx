import { ArrowUp, ArrowDown, Building2, MoreHorizontal, FileText, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import ActionButton from "../components/actionButton";
import InvoiceCard from "../components/invoiceCard";
import BottomNav from "../components/bottomNav";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      <Header
        variant="dashboard"
        greeting="Good afternoon"
        name="Abdulwaris"
        avatarInitials="AA"
        onBellClick={() => {}}
      />

      <div className="balance-card">
        <div className="balance-card-top">
          <span>Total balance</span>
          <span className="balance-card-tag">....4472</span>
        </div>
        <h1 className="balance-amount">USD 2,450,500</h1>
        <p className="balance-change">▲ 3.2% this month</p>
        <hr />
        <div className="balance-card-bottom">
          <div>
            <p className="label">ACCOUNT NAME</p>
            <p className="value">ABDULWARIS ABDULRAHMAN</p>
          </div>
          <div>
            <p className="label">GOLDEN CRUSH BANK</p>
            <p className="value premium">Premium</p>
          </div>
        </div>
      </div>

      <div className="action-row">
        <ActionButton icon={<ArrowUp size={20} />} label="Send" onClick={() => {}} />
        <ActionButton icon={<ArrowDown size={20} />} label="Receive" onClick={() => {}} />
        <ActionButton icon={<Building2 size={20} />} label="Invoice" onClick={() => navigate("/create-invoice")} />
        <ActionButton icon={<MoreHorizontal size={20} />} label="More" onClick={() => {}} />
      </div>

      <div className="section-heading">
        <h3>Recent activity</h3>
        <span className="see-all">see all</span>
      </div>

      <InvoiceCard
        icon={<FileText size={16} />}
        title="Invoice - Web Design"
        subtitle="Sent today, 2:12 pm"
        amount="USD 50,000"
        type="incoming"
      />
      <InvoiceCard
        icon={<CreditCard size={16} />}
        title="Airtime top-up"
        subtitle="Yesterday, 6:40 pm"
        amount="USD 2,000"
        type="outgoing"
      />
      <InvoiceCard
        icon={<Building2 size={16} />}
        title="Rent - GTA Apartment"
        subtitle="mon, 9:00 AM"
        amount="USD 22,000"
        type="outgoing"
      />

      <BottomNav />
    </div>
  );
}

export default Home;