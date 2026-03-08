import { Compass, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function RoleClarity() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Role Clarity</h1>
        <p className="section-subtitle mt-1">Discover the right role for your skills</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="glass-card p-6 space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="h-5 w-5 text-primary" />
            <h2 className="section-title">Tell us about your work</h2>
          </div>

          <div className="space-y-2">
            <Label>What do you do on a daily basis?</Label>
            <Textarea placeholder="Describe your typical workday..." rows={3} />
          </div>
          <div className="space-y-2">
            <Label>What do colleagues ask your help with?</Label>
            <Textarea placeholder="Areas where people seek your expertise..." rows={3} />
          </div>
          <div className="space-y-2">
            <Label>What kind of work do you enjoy most?</Label>
            <Textarea placeholder="Tasks that energize you..." rows={3} />
          </div>
          <div className="space-y-2">
            <Label>Years of experience</Label>
            <Input type="number" placeholder="e.g. 8" />
          </div>
          <div className="space-y-2">
            <Label>Target role (optional)</Label>
            <Input placeholder="e.g. Engineering Manager" />
          </div>
          <Button size="lg" className="w-full" onClick={() => setShowResults(true)}>
            Analyze My Role Fit
          </Button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-4">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="section-title">Recommended Role</h2>
              </div>
              <p className="text-2xl font-bold">Senior Product Manager</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className="font-medium text-success">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Salary Range</p>
                  <p className="font-semibold">₹28–45 LPA</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Demand</p>
                  <p className="font-semibold text-success">High</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h3 className="font-medium">Alternate Roles</h3>
              {["Group Product Manager", "Product Lead", "Director of Product"].map((role) => (
                <div key={role} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm">{role}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>

            <div className="glass-card p-6 space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Next Steps</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Update your resume with PM-specific impact metrics</li>
                <li>• Get certified in Product Analytics (Google, Mixpanel)</li>
                <li>• Build a portfolio of case studies</li>
                <li>• Network with hiring managers on LinkedIn</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
