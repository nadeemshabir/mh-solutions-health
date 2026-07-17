import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter your phone").max(20),
  organization: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5, "Add a short message").max(1500),
});

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't send your message. Please try again.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your message and will get back within one business hour.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" required type="tel" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" required type="email" />
        <Field label="Hospital / Clinic" name="organization" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirement…"
        />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="gradient-hero border-0 text-primary-foreground shadow-elegant"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
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
