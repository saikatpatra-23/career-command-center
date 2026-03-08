import { Mail, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const tones = ["Professional", "Confident", "Concise"];

const sampleOutput = {
  subject: "Application for Senior Product Manager — Rahul M. | 8+ Years | Ex-Flipkart",
  body: `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Product Manager role at your organization. With 8+ years of experience in product management at companies like Flipkart and Razorpay, I bring a proven track record of building scalable products that drive business growth.

In my current role at Flipkart, I led the seller platform product roadmap impacting 500K+ sellers, increased conversion rates by 35% through data-driven UX improvements, and launched 3 new product verticals generating ₹50Cr ARR.

Key highlights:
• Deep expertise in B2C and B2B SaaS product management
• Strong analytical skills with hands-on SQL, A/B testing, and product analytics
• Proven leadership managing cross-functional teams of 12+ members
• Track record of delivering measurable business outcomes

I am excited about the opportunity to bring my experience in product strategy, user research, and growth optimization to your team. I would welcome the chance to discuss how I can contribute to your product vision.

Best regards,
Rahul M.`,
  wordCount: 168,
};

export default function CoverLetterGenerator() {
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [generated, setGenerated] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Cover Letter Generator</h1>
        <p className="section-subtitle mt-1">AI-crafted cover letters in seconds</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="glass-card p-6 space-y-5">
          <div className="space-y-2">
            <Label>Job Description</Label>
            <Textarea placeholder="Paste the job description here..." rows={8} className="resize-none" />
          </div>
          <div className="space-y-2">
            <Label>Tone</Label>
            <div className="flex gap-2">
              {tones.map((t) => (
                <Button
                  key={t}
                  variant={selectedTone === t ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTone(t)}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <Button size="lg" className="w-full" onClick={() => setGenerated(true)}>
            <Mail className="h-4 w-4 mr-2" /> Generate Cover Letter
          </Button>
        </div>

        {/* Output */}
        {generated && (
          <div className="space-y-4">
            <div className="glass-card p-5 space-y-2">
              <h3 className="font-medium text-sm text-muted-foreground">Email Subject</h3>
              <p className="text-sm font-medium">{sampleOutput.subject}</p>
            </div>
            <div className="glass-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm">Cover Letter</h3>
                <span className="text-xs text-muted-foreground">{sampleOutput.wordCount} words</span>
              </div>
              <pre className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
                {sampleOutput.body}
              </pre>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Copy className="h-4 w-4 mr-2" /> Copy
              </Button>
              <Button variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
