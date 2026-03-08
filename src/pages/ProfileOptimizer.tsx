import { Copy, Edit, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}

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
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Optimizer</h1>
        <p className="section-subtitle mt-1">AI-generated content for your profiles</p>
      </div>

      <Tabs defaultValue="naukri" className="w-full">
        <TabsList className="bg-muted">
          <TabsTrigger value="naukri">Naukri Profile</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="naukri" className="space-y-4 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Check className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">Generated based on your resume and job preferences</span>
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
