import { History, Mail, Building, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const runs = [
  { date: "Mar 7, 2026", found: 48, applied: 42, skipped: 6 },
  { date: "Mar 6, 2026", found: 55, applied: 50, skipped: 5 },
  { date: "Mar 5, 2026", found: 32, applied: 28, skipped: 4 },
  { date: "Mar 4, 2026", found: 41, applied: 38, skipped: 3 },
  { date: "Mar 3, 2026", found: 60, applied: 52, skipped: 8 },
];

const invites = [
  { company: "Google India", role: "Senior PM", recruiter: "Priya Sharma", status: "New" },
  { company: "Razorpay", role: "Product Lead", recruiter: "Amit Verma", status: "Viewed" },
  { company: "Swiggy", role: "Group PM", recruiter: "Neha Gupta", status: "New" },
  { company: "Atlassian", role: "Senior PM", recruiter: "Ravi Kumar", status: "Replied" },
  { company: "Zomato", role: "Product Manager", recruiter: "Sneha Jain", status: "New" },
  { company: "PhonePe", role: "Lead PM", recruiter: "Karan Mehta", status: "Viewed" },
  { company: "CRED", role: "Senior PM", recruiter: "Ananya Das", status: "New" },
];

const statusColor: Record<string, string> = {
  New: "bg-primary/20 text-primary",
  Viewed: "bg-warning/20 text-warning",
  Replied: "bg-success/20 text-success",
};

export default function RunHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Run History</h1>
        <p className="section-subtitle mt-1">Track your automation runs and recruiter invites</p>
      </div>

      <Tabs defaultValue="runs">
        <TabsList className="bg-muted">
          <TabsTrigger value="runs">
            <History className="h-4 w-4 mr-1.5" /> Run History
          </TabsTrigger>
          <TabsTrigger value="inbox">
            <Mail className="h-4 w-4 mr-1.5" /> Recruiter Inbox
            <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">7</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="runs" className="mt-4">
          <div className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead><Clock className="h-3.5 w-3.5 inline mr-1" />Date</TableHead>
                  <TableHead>Jobs Found</TableHead>
                  <TableHead>Applied</TableHead>
                  <TableHead>Skipped</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {runs.map((r) => (
                  <TableRow key={r.date} className="border-border">
                    <TableCell className="font-medium">{r.date}</TableCell>
                    <TableCell>{r.found}</TableCell>
                    <TableCell className="text-success">{r.applied}</TableCell>
                    <TableCell className="text-muted-foreground">{r.skipped}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="inbox" className="mt-4">
          <div className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead><Building className="h-3.5 w-3.5 inline mr-1" />Company</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead><User className="h-3.5 w-3.5 inline mr-1" />Recruiter</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invites.map((inv, i) => (
                  <TableRow key={i} className="border-border">
                    <TableCell className="font-medium">{inv.company}</TableCell>
                    <TableCell>{inv.role}</TableCell>
                    <TableCell className="text-muted-foreground">{inv.recruiter}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[inv.status]}`}>
                        {inv.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
