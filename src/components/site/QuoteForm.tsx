import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EQUIPMENT } from "@/components/site/equipment";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(20),
  organization: z.string().trim().max(150).optional(),
  equipment_type: z.string().trim().max(100).optional(),
  service_type: z.string().trim().max(50).optional(),
  message: z.string().trim().max(1500).optional(),
});

const SERVICES = ["New Purchase", "Installation", "AMC / CMC", "Repair", "Spare Parts", "Other"];

export function QuoteForm({ defaultEquipment, defaultService }: { defaultEquipment?: string; defaultService?: string } = {}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [equipment, setEquipment] = useState<string>(defaultEquipment ?? "");
  const [service, setService] = useState<string>(defaultService ?? "");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(fd.entries()),
      equipment_type: equipment,
      service_type: service,
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("quote_submissions").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't submit your request. Please try again.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will share a detailed quote within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" required type="tel" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" required type="email" />
        <Field label="Hospital / Clinic" name="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label>Equipment type</Label>
          <Select value={equipment} onValueChange={setEquipment}>
            <SelectTrigger>
              <SelectValue placeholder="Select equipment" />
            </SelectTrigger>
            <SelectContent>
              {EQUIPMENT.map((e) => (
                <SelectItem key={e.slug} value={e.name}>{e.name}</SelectItem>
              ))}
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Service needed</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">Additional details</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Quantity, model, configuration or timeline…" />
      </div>
      <Button type="submit" disabled={submitting} className="gradient-hero border-0 text-primary-foreground shadow-elegant">
        {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting…</> : "Request a Quote"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Pricing is configuration-dependent. We'll respond within 24 hours with a detailed quotation.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}