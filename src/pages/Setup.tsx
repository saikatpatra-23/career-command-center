import { Bell, Lock, Briefcase, Copy, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Setup() {
  const [notifCode] = useState("COS-RHL-7X2K9");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Setup</h1>
        <p className="section-subtitle mt-1">Configure your CareerOS workspace</p>
      </div>

      {/* Notification Setup */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="section-title">Notification Setup</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Use this code to connect your WhatsApp or Telegram for job alerts.
        </p>
        <div className="flex items-center gap-3">
          <code className="px-4 py-2.5 bg-muted rounded-lg text-sm font-mono text-foreground">
            {notifCode}
          </code>
          <Button variant="outline" size="sm">
            <Copy className="h-3.5 w-3.5 mr-1.5" /> Copy
          </Button>
          <Button size="sm">
            <Send className="h-3.5 w-3.5 mr-1.5" /> Send Test
          </Button>
        </div>
      </div>

      {/* Naukri Credentials */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          <h2 className="section-title">Naukri Credentials</h2>
        </div>
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
            <Lock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground">
              Your credentials are encrypted with AES-256 and never stored in plain text. Used only for automated job applications.
            </p>
          </div>
        </div>
      </div>

      {/* Job Preferences */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="section-title">Job Preferences</h2>
        </div>
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <Label>Preferred Cities</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Bangalore", "Hyderabad", "Pune"].map((city) => (
                <Badge key={city} variant="secondary" className="cursor-pointer">
                  {city} ×
                </Badge>
              ))}
            </div>
            <Input placeholder="Add a city..." />
          </div>
          <div className="space-y-2">
            <Label>Minimum Salary (LPA)</Label>
            <Input type="number" placeholder="e.g. 18" />
          </div>
          <div className="space-y-2">
            <Label>Work Mode</Label>
            <div className="flex gap-2">
              {["Remote", "Hybrid", "Office"].map((mode) => (
                <Button
                  key={mode}
                  variant={mode === "Remote" ? "default" : "outline"}
                  size="sm"
                >
                  {mode}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button size="lg">Save Preferences</Button>
    </div>
  );
}
