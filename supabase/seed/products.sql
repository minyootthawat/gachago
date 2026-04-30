insert into public.products (sku, name, description, type, price_satang, stock)
values
  ('MVP-STARTER-BOX', 'Starter Reveal Box', 'A first blind box for MVP testing.', 'blind_box', 14900, 100),
  ('MVP-STANDARD-BOX', 'Standard Anime Box', 'Main MVP reveal box.', 'blind_box', 29900, 60)
on conflict (sku) do nothing;

