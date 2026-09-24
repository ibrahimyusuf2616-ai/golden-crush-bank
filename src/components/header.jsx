import { ChevronLeft, Bell } from "lucide-react";

function Header({ variant = "back", title, onBack, avatarInitials, greeting, name, onBellClick }) {
  if (variant === "dashboard") {
    return (
      <div className="header dashboard-header">
        <div className="header-profile">
          <div className="avatar">{avatarInitials}</div>
          <div>
            <p className="greeting">{greeting}</p>
            <h2 className="name">{name}</h2>
          </div>
        </div>
        <button className="bell-button" onClick={onBellClick}>
          <Bell size={35} />
        </button>
      </div>
    );
  }

  return (
    <div className="header back-header">
      <button className="back-button" onClick={onBack}>
        <ChevronLeft size={20} />
      </button>
      {title && <h2 className="header-title">{title}</h2>}
    </div>
  );
}

export default Header;