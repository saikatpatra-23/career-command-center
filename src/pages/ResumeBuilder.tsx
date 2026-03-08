import { Bot, User, Send, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const messages = [
  { role: "ai", text: "Hi Rahul! I'll help you build an ATS-optimized resume. Let's start — what's your current job title?" },
  { role: "user", text: "Senior Product Manager at Flipkart" },
  { role: "ai", text: "Great! How many years of experience do you have in product management?" },
  { role: "user", text: "8 years, started as a business analyst" },
  { role: "ai", text: "Perfect. Can you describe 2-3 key achievements in your current role? Use metrics if possible." },
];

const progressItems = [
  { label: "Contact Info", done: true },
  { label: "Summary", done: true },
  { label: "Experience", done: false },
  { label: "Skills", done: false },
  { label: "Education", done: false },
];

export default function ResumeBuilder() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Resume Builder</h1>
        <p className="section-subtitle mt-1">AI-powered resume creation</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat */}
        <div className="lg:col-span-2 glass-card flex flex-col h-[600px]">
          <div className="p-4 border-b border-border">
            <h3 className="font-medium text-sm">AI Resume Assistant</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center ${
                  msg.role === "ai" ? "bg-primary/20" : "bg-muted"
                }`}>
                  {msg.role === "ai" ? (
                    <Bot className="h-4 w-4 text-primary" />
                  ) : (
                    <User className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className={`max-w-[75%] px-4 py-2.5 rounded-xl text-sm ${
                  msg.role === "ai"
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Typing indicator */}
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-muted px-4 py-3 rounded-xl flex gap-1">
                <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-pulse-glow" />
                <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-pulse-glow [animation-delay:0.3s]" />
                <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-pulse-glow [animation-delay:0.6s]" />
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border flex gap-2">
            <Input placeholder="Type your response..." className="flex-1" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-medium">Resume Progress</h3>
            <Progress value={40} className="h-2" />
            <p className="text-xs text-muted-foreground">2 of 5 sections complete</p>
            <div className="space-y-2">
              {progressItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <div className={`h-2 w-2 rounded-full ${item.done ? "bg-success" : "bg-muted-foreground/30"}`} />
                  <span className={item.done ? "text-foreground" : "text-muted-foreground"}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full" size="lg">
            <FileText className="h-4 w-4 mr-2" /> Generate Resume
          </Button>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" /> Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
