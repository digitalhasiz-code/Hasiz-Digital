-- ==============================================================================
-- HASIZ DIGITAL ENGINEERING STUDIO — ENTERPRISE DATABASE SECURITY SCHEMA
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/vtvyedjsggeazppendmg/sql
-- ==============================================================================

-- 1. Create Inquiries Table with Strict Constraint Validations
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (length(trim(full_name)) between 2 and 120),
  email text not null check (length(trim(email)) between 5 and 140 and email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  company_name text check (length(company_name) <= 150),
  service text not null check (length(service) <= 100),
  budget text check (length(budget) <= 60),
  timeline text check (length(timeline) <= 60),
  website_url text check (length(website_url) <= 250),
  project_description text not null check (length(trim(project_description)) between 15 and 4500),
  form_name text default 'Main Contact / Start a Project Form' check (length(form_name) <= 120),
  target_email text default 'digitalhasiz@gmail.com',
  status text default 'new' check (status in ('new', 'reviewed', 'in_progress', 'archived', 'spam')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Safe Alterations for Pre-existing Tables
alter table public.inquiries add column if not exists form_name text default 'Main Contact / Start a Project Form';
alter table public.inquiries add column if not exists target_email text default 'digitalhasiz@gmail.com';
alter table public.inquiries add column if not exists status text default 'new';

-- 3. Hardened Row Level Security (RLS)
alter table public.inquiries enable row level security;

-- Drop prior permissive policies if any
drop policy if exists "Allow public insert of inquiries" on public.inquiries;
drop policy if exists "Allow authenticated users to view inquiries" on public.inquiries;
drop policy if exists "Deny all public updates" on public.inquiries;
drop policy if exists "Deny all public deletes" on public.inquiries;

-- Policy A: Anon (public) can ONLY insert new inquiries.
-- No anon user or bot can ever read, dump, modify, or delete existing rows.
create policy "Allow public insert of inquiries"
on public.inquiries
for insert
to anon
with check (true);

-- Policy B: Only authenticated studio administrators can read inquiries
create policy "Allow authenticated users to view inquiries"
on public.inquiries
for select
to authenticated
using (true);

-- Policy C: Only authenticated studio administrators can update or archive inquiries
create policy "Allow authenticated users to update inquiries"
on public.inquiries
for update
to authenticated
using (true);

-- Policy D: Only authenticated studio administrators can delete inquiries
create policy "Allow authenticated users to delete inquiries"
on public.inquiries
for delete
to authenticated
using (true);

-- 4. Create Index on creation date for fast dashboard sorting
create index if not exists idx_inquiries_created_at on public.inquiries (created_at desc);
create index if not exists idx_inquiries_email on public.inquiries (email);
