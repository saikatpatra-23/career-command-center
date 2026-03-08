import {
  LayoutDashboard,
  Settings,
  FileText,
  UserCheck,
  Compass,
  ScanSearch,
  Mail,
  Rocket,
  History,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Setup", url: "/setup", icon: Settings },
  { title: "Resume Builder", url: "/resume-builder", icon: FileText },
  { title: "Profile Optimizer", url: "/profile-optimizer", icon: UserCheck },
  { title: "Role Clarity", url: "/role-clarity", icon: Compass },
  { title: "ATS Checker", url: "/ats-checker", icon: ScanSearch },
  { title: "Cover Letter", url: "/cover-letter", icon: Mail },
  { title: "Smart Apply", url: "/smart-apply", icon: Rocket },
  { title: "Run History", url: "/run-history", icon: History },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`h-screen sticky top-0 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-sidebar-border">
        <Zap className="h-6 w-6 text-primary shrink-0" />
        {!collapsed && (
          <span className="ml-2 text-lg font-bold text-foreground tracking-tight">
            Career<span className="text-primary">OS</span>
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/"}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              activeClassName=""
            >
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="h-12 flex items-center justify-center border-t border-sidebar-border text-muted-foreground hover:text-foreground transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </aside>
  );
}
