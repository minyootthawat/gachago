alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.user_packs enable row level security;
alter table public.gacha_results enable row level security;
alter table public.user_collection enable row level security;
alter table public.shipping_requests enable row level security;

create policy "Products are public" on public.products
  for select using (is_active = true);

create policy "Rewards are public for active products" on public.reward_items
  for select using (
    is_active = true and exists (
      select 1 from public.products
      where products.id = reward_items.product_id and products.is_active = true
    )
  );

create policy "Users view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users view own orders" on public.orders
  for select using (auth.uid() = user_id);

create policy "Users view own packs" on public.user_packs
  for select using (auth.uid() = user_id);

create policy "Users view own gacha results" on public.gacha_results
  for select using (auth.uid() = user_id);

create policy "Users view own collection" on public.user_collection
  for select using (auth.uid() = user_id);

create policy "Users view own shipping requests" on public.shipping_requests
  for select using (auth.uid() = user_id);

