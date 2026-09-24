import { NavLink } from "react-router-dom";
import { Home, CreditCard, BarChart3, User } from "lucide-react";

const navItems = [
  { to: "/home", icon: Home },
  { to: "/cards", icon: CreditCard },
  { to: "/stats", icon: BarChart3 },
  { to: "/profile", icon: User },
];

function BottomNav() {
  return (
    <div className="bottom-nav">
      {navItems.map(({ to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <Icon size={20} />
        </NavLink>
      ))}
    </div>
  );
}

export default BottomNav;