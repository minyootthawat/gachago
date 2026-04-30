create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  line_user_id text unique,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique,
  name text not null,
  description text,
  type text not null check (type in ('card_pack', 'blind_box')),
  price_satang integer not null check (price_satang > 0),
  stock integer not null default 0 check (stock >= 0),
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reward_items (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  name text not null,
  rarity text not null check (rarity in ('common', 'rare', 'super_rare', 'secret')),
  image_url text,
  stock integer not null default 0 check (stock >= 0),
  weight numeric not null check (weight >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  status text not null default 'pending' check (status in ('pending', 'paid', 'cancelled', 'refunded')),
  total_satang integer not null check (total_satang >= 0),
  payment_provider text,
  payment_reference text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_packs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  product_id uuid not null references public.products(id),
  order_id uuid not null references public.orders(id),
  status text not null default 'unopened' check (status in ('unopened', 'opened')),
  opened_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.gacha_results (
  id uuid primary key default gen_random_uuid(),
  user_pack_id uuid not null unique references public.user_packs(id),
  user_id uuid not null references auth.users(id),
  product_id uuid not null references public.products(id),
  reward_item_id uuid not null references public.reward_items(id),
  random_value numeric not null,
  server_seed_hash text not null,
  server_seed_revealed text,
  client_seed text,
  nonce integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.user_collection (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  reward_item_id uuid not null references public.reward_items(id),
  quantity integer not null default 1 check (quantity > 0),
  first_obtained_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, reward_item_id)
);

create table if not exists public.shipping_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  status text not null default 'requested' check (status in ('requested', 'packing', 'shipped', 'delivered', 'cancelled')),
  address_snapshot jsonb not null,
  tracking_number text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_products_active on public.products(is_active);
create index if not exists idx_reward_items_product on public.reward_items(product_id);
create index if not exists idx_orders_user on public.orders(user_id);
create index if not exists idx_user_packs_user on public.user_packs(user_id);
create index if not exists idx_gacha_results_user on public.gacha_results(user_id);
create index if not exists idx_user_collection_user on public.user_collection(user_id);

