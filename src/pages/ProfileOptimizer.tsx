import { Copy, Edit, Check, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface SectionCardProps {
  title: string;
  content: string;
}

function SectionCard({ title, content }: SectionCardProps) {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-sm">{title}</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Copy className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
            <Edit className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
}

interface ChatMessage {
  role: "ai" | "user";
  text: string;
}

const initialMessages: ChatMessage[] = [
  { role: "ai", text: "Hi! I've analyzed your resume. To generate better Naukri & LinkedIn profiles, tell me anything your resume doesn't cover — like key projects, leadership impact, certifications, or specific achievements you'd like highlighted." },
];

const naukriSections = [
  { title: "Profile Headline", content: "Senior Product Manager | 8+ Years in B2C & B2B SaaS | Ex-Flipkart, Razorpay | Data-Driven Growth Leader" },
  { title: "Profile Summary", content: "Results-driven Product Manager with 8+ years of experience building scalable B2C and B2B products. Led cross-functional teams of 15+ at Flipkart, driving 40% increase in user engagement. Expertise in product strategy, A/B testing, data analytics, and go-to-market execution. Passionate about solving complex user problems with simple, elegant solutions." },
  { title: "Top Skills to Add", content: "Product Strategy, Roadmap Planning, A/B Testing, SQL, User Research, Agile/Scrum, Stakeholder Management, OKRs, Data Analytics, Growth Hacking" },
  { title: "Skills to Remove", content: "MS Office, Basic Computer Skills, Typing, Internet Browsing — these are outdated and reduce profile quality." },
  { title: "Employment Description", content: "• Led product roadmap for Flipkart's seller platform, impacting 500K+ sellers\n• Increased conversion rates by 35% through data-driven UX redesign\n• Managed $2M annual budget and a team of 12 engineers and designers\n• Launched 3 new product verticals generating ₹50Cr ARR in 18 months" },
];

const linkedinSections = [
  { title: "Headline Suggestions", content: "Senior Product Manager @ Flipkart | Building Products That Scale | B2C × B2B SaaS | Ex-Razorpay" },
  { title: "About Section", content: "I build products that millions of people use every day.\n\nOver the past 8 years, I've had the privilege of working at companies like Flipkart and Razorpay, where I led product teams to ship features that directly impacted business growth.\n\nWhat I bring to the table:\n→ Deep expertise in product-led growth\n→ Data-driven decision making\n→ Cross-functional leadership\n→ User empathy and design thinking\n\nLet's connect if you're building something exciting." },
  { title: "Skills to Add", content: "Product Management, Product Strategy, B2B SaaS, Growth Marketing, SQL, Figma, Jira, Product Analytics, User Research, Agile Methodology" },
  { title: "Experience Bullets", content: "• Drove 40% increase in monthly active users through personalized recommendation engine\n• Reduced customer churn by 25% with proactive engagement features\n• Spearheaded cross-functional initiative resulting in 2x faster release cycles" },
  { title: "Recommendation Request", content: "Hi [Name],\n\nI hope you're doing well! I really enjoyed working with you on [project]. Would you be open to writing a brief LinkedIn recommendation about our collaboration? I'd be happy to return the favor.\n\nThanks so much!" },
];

export default function ProfileOptimizer() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: "user", text: input.trim() };
    setMessages((prev) => [
      ...prev,
      userMsg,
      { role: "ai", text: "Thanks! I'll incorporate that into your profile suggestions. You can keep adding more details or switch to the Naukri/LinkedIn tabs to see your optimized content." },
    ]);
    setInput("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Optimizer</h1>
        <p className="section-subtitle mt-1">Chat with AI, then view generated profile content</p>
      </div>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
          <TabsTrigger value="naukri">Naukri Profile</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn Profile</TabsTrigger>
        </TabsList>

        {/* AI Chat Tab */}
        <TabsContent value="chat" className="mt-4">
          <div className="glass-card flex flex-col h-[500px]">
            <div className="p-4 border-b border-border">
              <h3 className="font-medium text-sm">Add context beyond your resume</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Mention achievements, certifications, side projects, or anything not in your resume
              </p>
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
            </div>
            <div className="p-4 border-t border-border flex gap-2">
              <Input
                placeholder="E.g. I led a 0→1 product launch at Razorpay that isn't on my resume..."
                className="flex-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button size="icon" onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="naukri" className="space-y-4 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Check className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">Generated based on your resume and chat inputs</span>
          </div>
          {naukriSections.map((s) => (
            <SectionCard key={s.title} {...s} />
          ))}
        </TabsContent>

        <TabsContent value="linkedin" className="space-y-4 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Check className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">Optimized for LinkedIn's algorithm and recruiter search</span>
          </div>
          {linkedinSections.map((s) => (
            <SectionCard key={s.title} {...s} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
