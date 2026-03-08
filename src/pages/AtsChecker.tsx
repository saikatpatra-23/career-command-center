import { ScanSearch, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const scores = [
  { label: "Skills Match", value: 82 },
  { label: "Title Match", value: 90 },
  { label: "Experience Match", value: 75 },
  { label: "Salary Match", value: 95 },
  { label: "Location Match", value: 100 },
  { label: "Education Match", value: 70 },
];

const missingKeywords = ["Kubernetes", "Terraform", "CI/CD", "System Design"];
const foundKeywords = ["Product Management", "Agile", "A/B Testing", "SQL", "Roadmap", "Stakeholder Management", "OKRs", "Analytics"];

export default function AtsChecker() {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">ATS Checker</h1>
        <p className="section-subtitle mt-1">Match your resume against any job description</p>
      </div>

      {/* Input */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="section-title">Paste Job Description</h2>
        <Textarea
          placeholder="Paste the full job description here..."
          rows={6}
          className="resize-none"
        />
        <Button size="lg" onClick={() => setAnalyzed(true)}>
          <ScanSearch className="h-4 w-4 mr-2" /> Analyze Match
        </Button>
      </div>

      {analyzed && (
        <>
          {/* Overall Score */}
          <div className="glass-card p-6 text-center space-y-3">
            <p className="text-sm text-muted-foreground">Overall ATS Match Score</p>
            <p className="text-6xl font-bold gradient-text">85%</p>
            <p className="text-sm text-success font-medium">Strong Match — You should apply</p>
          </div>

          {/* Score Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scores.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                  <span className="text-sm font-semibold">{s.value}%</span>
                </div>
                <Progress value={s.value} className="h-2" />
              </div>
            ))}
          </div>

          {/* Keywords */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <h3 className="font-medium text-sm">Missing Keywords</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {missingKeywords.map((kw) => (
                  <Badge key={kw} variant="destructive" className="font-normal">{kw}</Badge>
                ))}
              </div>
            </div>
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <h3 className="font-medium text-sm">Found Keywords</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {foundKeywords.map((kw) => (
                  <Badge key={kw} variant="secondary" className="font-normal">{kw}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <h2 className="section-title">Recommendations</h2>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Add Kubernetes and Terraform experience to your skills section</li>
              <li>• Include CI/CD pipeline management in your work experience</li>
              <li>• Mention System Design in your profile summary</li>
              <li>• Your experience level is a strong match — highlight leadership</li>
            </ul>
          </div>

          {/* Optimized Headline */}
          <div className="glass-card p-5 space-y-2">
            <h3 className="font-medium text-sm">Optimized Naukri Headline</h3>
            <p className="text-sm text-foreground bg-muted p-3 rounded-lg">
              Senior Product Manager | 8+ Yrs | Agile, A/B Testing, SQL, OKRs | Flipkart, Razorpay | Seeking PM Leadership Roles
            </p>
          </div>
        </>
      )}
    </div>
  );
}
