-- Supabase Schema for HASIZ Digital Engineering Studio
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/vtvyedjsggeazppendmg/sql)

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company_name text,
  service text not null,
  budget text,
  timeline text,
  website_url text,
  project_description text not null,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.inquiries enable row level security;

-- Policy to allow public submissions (inserts) from the contact form
create policy "Allow public insert of inquiries"
on public.inquiries
for insert
to anon
with check (true);

-- Policy to allow authenticated studio members to read inquiries
create policy "Allow authenticated users to view inquiries"
on public.inquiries
for select
to authenticated
using (true);

