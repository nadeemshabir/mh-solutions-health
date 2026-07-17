
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text,
  equipment_type text,
  service_type text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.quote_submissions TO anon, authenticated;
GRANT ALL ON public.quote_submissions TO service_role;
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request a quote"
  ON public.quote_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
