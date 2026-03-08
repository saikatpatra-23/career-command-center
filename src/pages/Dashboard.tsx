import { FileText, UserCheck, ScanSearch, Rocket, TrendingUp, Mail, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Resume Status", value: "Optimized", icon: FileText, color: "text-success" },
  { label: "Naukri Profile Score", value: "78/100", icon: BarChart3, color: "text-primary" },
  { label: "LinkedIn Score", value: "65/100", icon: TrendingUp, color: "text-info" },
  { label: "Jobs Applied (7d)", value: "42", icon: Rocket, color: "text-primary" },
  { label: "HR Invites", value: "7", icon: Mail, color: "text-warning" },
  { label: "Automation", value: "Active", icon: Zap, color: "text-success" },
];

const actions = [
  { label: "Build Resume", icon: FileText, path: "/resume-builder" },
  { label: "Optimize Profile", icon: UserCheck, path: "/profile-optimizer" },
  { label: "Run ATS Check", icon: ScanSearch, path: "/ats-checker" },
  { label: "Start Smart Apply", icon: Rocket, path: "/smart-apply" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="section-subtitle mt-1">Your career command center</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className={`h-4 w-4 ${s.color}`} />
            </div>
            <span className="text-2xl font-bold">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Weekly Progress */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="section-title">Weekly Progress</h2>
        <div className="space-y-3">
          {[
            { label: "Applications Target", value: 42, max: 50 },
            { label: "Profile Completion", value: 78, max: 100 },
            { label: "Resume Score", value: 85, max: 100 },
          ].map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium">{item.value}/{item.max}</span>
              </div>
              <Progress value={(item.value / item.max) * 100} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="section-title mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {actions.map((a) => (
            <Button
              key={a.label}
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 hover:border-primary/50 hover:bg-primary/5"
              onClick={() => navigate(a.path)}
            >
              <a.icon className="h-5 w-5 text-primary" />
              <span>{a.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
