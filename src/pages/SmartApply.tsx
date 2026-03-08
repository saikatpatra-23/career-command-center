import { Rocket, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function SmartApply() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Smart Apply</h1>
        <p className="section-subtitle mt-1">Automate your Naukri job applications</p>
      </div>

      <Tabs defaultValue="configure">
        <TabsList className="bg-muted">
          <TabsTrigger value="configure">Configure</TabsTrigger>
          <TabsTrigger value="download">Download Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="configure" className="mt-4">
          <div className="glass-card p-6 space-y-5 max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="h-5 w-5 text-primary" />
              <h2 className="section-title">Application Filters</h2>
            </div>

            <div className="space-y-2">
              <Label>Job Keywords</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {["Product Manager", "Program Manager", "Product Lead"].map((kw) => (
                  <Badge key={kw} variant="secondary">{kw} ×</Badge>
                ))}
              </div>
              <Input placeholder="Add keyword..." />
            </div>

            <div className="space-y-2">
              <Label>Locations</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {["Bangalore", "Hyderabad", "Remote"].map((loc) => (
                  <Badge key={loc} variant="secondary">{loc} ×</Badge>
                ))}
              </div>
              <Input placeholder="Add location..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Min Experience (yrs)</Label>
                <Input type="number" placeholder="5" />
              </div>
              <div className="space-y-2">
                <Label>Max Experience (yrs)</Label>
                <Input type="number" placeholder="12" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Min Salary (LPA)</Label>
                <Input type="number" placeholder="20" />
              </div>
              <div className="space-y-2">
                <Label>Max Jobs Per Run</Label>
                <Input type="number" placeholder="50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Domains to Avoid</Label>
              <Input placeholder="e.g. staffing, recruitment agencies" />
            </div>

            <Button size="lg" className="w-full">
              <Rocket className="h-4 w-4 mr-2" /> Save & Start Applying
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="download" className="mt-4">
          <div className="glass-card p-8 text-center space-y-4 max-w-md mx-auto">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Download className="h-8 w-8 text-primary" />
            </div>
            <h2 className="section-title">Download Automation Package</h2>
            <p className="text-sm text-muted-foreground">
              Download the browser extension and automation scripts to run Smart Apply on your machine.
            </p>
            <Button size="lg">
              <Download className="h-4 w-4 mr-2" /> Download Package
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
