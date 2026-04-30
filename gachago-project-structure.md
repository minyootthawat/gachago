# Gachago Project Structure

**เป้าหมาย:** โครงสร้างนี้ออกแบบสำหรับ MVP ที่เน้น shop, payment, pack ownership, reveal animation, collection, fulfillment และ admin โดยยังไม่รวม battle/leaderboard/marketplace

---

## 1. Recommended Stack

| Layer | Choice |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| UI State | Zustand เฉพาะ state ฝั่ง client |
| Server State | TanStack Query หรือ Server Components ตามหน้า |
| Database | Supabase Postgres |
| Auth | Supabase Auth + LINE Login |
| Payment | PromptPay provider ผ่าน server webhook |
| Animation | Framer Motion + Canvas/WebGL optional |
| Monitoring | Sentry + analytics events |

---

## 2. Top-Level Structure

```text
gachago/
├── app/
├── components/
├── features/
├── lib/
├── server/
├── supabase/
├── public/
├── styles/
├── tests/
├── docs/
├── scripts/
├── types/
├── middleware.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Design Rule

ใช้ `features/` เป็นแกนหลักของ business domain และให้ `app/` เป็น routing layer เท่านั้น หน้าใน `app/` ควรเรียก component หรือ server action จาก feature ที่เกี่ยวข้อง ไม่เขียน business logic ยาวใน page file

---

## 3. App Router Structure

```text
app/
├── layout.tsx
├── page.tsx                         # redirect หรือหน้า shop หลัก
├── globals.css
├── (public)/
│   ├── shop/
│   │   ├── page.tsx
│   │   └── [productId]/
│   │       └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── refund-policy/
│       └── page.tsx
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── callback/
│       └── route.ts
├── (user)/
│   ├── packs/
│   │   └── page.tsx
│   ├── reveal/
│   │   └── [userPackId]/
│   │       └── page.tsx
│   ├── collection/
│   │   ├── page.tsx
│   │   └── [itemId]/
│   │       └── page.tsx
│   ├── orders/
│   │   ├── page.tsx
│   │   └── [orderId]/
│   │       └── page.tsx
│   ├── shipping/
│   │   └── new/
│   │       └── page.tsx
│   └── account/
│       └── page.tsx
├── admin/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── [productId]/
│   │       └── page.tsx
│   ├── rewards/
│   │   └── page.tsx
│   ├── orders/
│   │   └── page.tsx
│   ├── fulfillment/
│   │   └── page.tsx
│   └── analytics/
│       └── page.tsx
└── api/
    ├── payments/
    │   ├── checkout/
    │   │   └── route.ts
    │   └── webhook/
    │       └── route.ts
    ├── gacha/
    │   ├── open/
    │   │   └── route.ts
    │   └── verify/
    │       └── [resultId]/
    │           └── route.ts
    └── health/
        └── route.ts
```

### Route Group Intent

| Group | Purpose |
|---|---|
| `(public)` | ไม่ต้อง login เช่น shop, legal pages |
| `(auth)` | login/callback |
| `(user)` | ต้อง login |
| `admin` | ต้องเป็น admin role |
| `api` | webhook, gacha open, health check |

---

## 4. Feature Modules

```text
features/
├── auth/
│   ├── components/
│   ├── actions.ts
│   ├── queries.ts
│   └── types.ts
├── shop/
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductDetail.tsx
│   │   └── OddsTable.tsx
│   ├── actions.ts
│   ├── queries.ts
│   ├── mappers.ts
│   └── types.ts
├── checkout/
│   ├── components/
│   │   ├── CheckoutButton.tsx
│   │   ├── PaymentQrPanel.tsx
│   │   └── PaymentStatus.tsx
│   ├── actions.ts
│   ├── payment-provider.ts
│   └── types.ts
├── packs/
│   ├── components/
│   │   ├── UserPackCard.tsx
│   │   └── UserPackList.tsx
│   ├── actions.ts
│   ├── queries.ts
│   └── types.ts
├── reveal/
│   ├── components/
│   │   ├── RevealStage.tsx
│   │   ├── RevealScene2D.tsx
│   │   ├── RevealScene3D.tsx
│   │   ├── RarityBurst.tsx
│   │   ├── ResultCard.tsx
│   │   └── SkipRevealButton.tsx
│   ├── hooks/
│   │   ├── useRevealTimeline.ts
│   │   └── useDeviceRevealMode.ts
│   ├── animation-tokens.ts
│   ├── reveal-machine.ts
│   └── types.ts
├── gacha/
│   ├── engine/
│   │   ├── open-pack.ts
│   │   ├── weighted-random.ts
│   │   ├── provably-fair.ts
│   │   └── idempotency.ts
│   ├── audit.ts
│   └── types.ts
├── collection/
│   ├── components/
│   │   ├── CollectionGrid.tsx
│   │   ├── CollectionItemCard.tsx
│   │   ├── CollectionFilters.tsx
│   │   └── CollectionItemDetail.tsx
│   ├── actions.ts
│   ├── queries.ts
│   └── types.ts
├── fulfillment/
│   ├── components/
│   │   ├── ShippingRequestForm.tsx
│   │   └── FulfillmentStatusBadge.tsx
│   ├── actions.ts
│   ├── queries.ts
│   └── types.ts
├── admin/
│   ├── components/
│   │   ├── AdminNav.tsx
│   │   ├── ProductEditor.tsx
│   │   ├── RewardEditor.tsx
│   │   ├── OrderTable.tsx
│   │   └── FulfillmentQueue.tsx
│   ├── actions.ts
│   ├── queries.ts
│   └── types.ts
└── analytics/
    ├── events.ts
    ├── track.ts
    └── types.ts
```

### Feature File Rules

| File | Rule |
|---|---|
| `components/` | React UI เฉพาะ feature นั้น |
| `actions.ts` | Server actions หรือ mutations |
| `queries.ts` | Data fetching functions |
| `types.ts` | Types เฉพาะ domain |
| `mappers.ts` | แปลง DB row เป็น view model |
| `engine/` | Logic ที่ test ได้โดยไม่พึ่ง UI |

---

## 5. Shared Components

```text
components/
├── ui/
│   ├── Button.tsx
│   ├── Dialog.tsx
│   ├── Drawer.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Tabs.tsx
│   ├── Toast.tsx
│   └── Badge.tsx
├── layout/
│   ├── AppHeader.tsx
│   ├── MobileNav.tsx
│   ├── PageShell.tsx
│   └── AuthGuard.tsx
├── feedback/
│   ├── EmptyState.tsx
│   ├── ErrorState.tsx
│   ├── LoadingState.tsx
│   └── Skeleton.tsx
└── legal/
    ├── OddsDisclosure.tsx
    └── PurchaseNotice.tsx
```

Shared components ต้องไม่มี business logic ของ gacha หรือ payment ถ้าต้องรู้จัก product/order/userPack ให้ย้ายไป `features/`

---

## 6. Server Layer

```text
server/
├── auth/
│   ├── require-user.ts
│   ├── require-admin.ts
│   └── session.ts
├── db/
│   ├── client.ts
│   ├── admin-client.ts
│   └── types.generated.ts
├── payments/
│   ├── create-payment-intent.ts
│   ├── verify-webhook.ts
│   └── providers/
│       ├── stripe.ts
│       ├── omise.ts
│       └── mock.ts
├── security/
│   ├── rate-limit.ts
│   ├── request-id.ts
│   └── validate-origin.ts
└── config/
    ├── env.ts
    └── constants.ts
```

### Server Rules

1. `admin-client.ts` ใช้ service role ได้เฉพาะ server-side เท่านั้น
2. payment webhook ต้อง verify signature ก่อนอัปเดต order
3. gacha open API ต้องใช้ transaction/idempotency
4. ห้าม expose cost, internal stock allocation, service role key ไป client

---

## 7. Supabase Structure

```text
supabase/
├── migrations/
│   ├── 0001_initial_schema.sql
│   ├── 0002_rls_policies.sql
│   ├── 0003_gacha_functions.sql
│   └── 0004_admin_views.sql
├── seed/
│   ├── categories.sql
│   ├── products.sql
│   └── rewards.sql
├── functions/
│   └── payment-webhook/
└── README.md
```

### Core Tables

```text
profiles
products
reward_items
orders
order_items
payments
user_packs
gacha_results
user_collection
shipping_requests
analytics_events
admin_audit_logs
```

### Database Rules

1. ทุก table ที่มี `user_id` ต้องมี RLS
2. admin writes ต้องผ่าน server action หรือ admin route
3. gacha result ต้อง append-only หลังสร้างแล้ว
4. stock decrement ต้องอยู่ใน transaction เดียวกับ result creation
5. เก็บ `created_at`, `updated_at` ใน table สำคัญ

---

## 8. Public Assets

```text
public/
├── images/
│   ├── products/
│   ├── rewards/
│   ├── placeholders/
│   └── brand/
├── animation/
│   ├── particles/
│   ├── textures/
│   └── sprites/
├── models/
│   ├── box.glb
│   └── card.glb
└── sounds/
    ├── common.mp3
    ├── rare.mp3
    ├── super-rare.mp3
    └── secret.mp3
```

### Asset Rules

1. อย่า commit licensed image ที่ไม่มีสิทธิ์ใช้งาน
2. ตั้งชื่อไฟล์ด้วย slug ไม่ใช้ชื่อภาษาไทย
3. บีบอัดภาพก่อนใช้จริง
4. 3D models ต้องมี fallback เป็นภาพ/2D
5. sounds ต้องมี toggle mute และเคารพ browser autoplay policy

---

## 9. Styles

```text
styles/
├── tokens.css
├── responsive.css
├── reveal.css
└── admin.css
```

### Token Groups

```text
--color-bg
--color-surface
--color-text
--color-primary
--color-rarity-common
--color-rarity-rare
--color-rarity-super-rare
--color-rarity-secret
--shadow-reveal
--duration-reveal-fast
--duration-reveal-normal
```

### Responsive Tokens

```text
--breakpoint-mobile-s: 320px
--breakpoint-mobile-m: 375px
--breakpoint-tablet: 768px
--breakpoint-desktop: 1024px
--breakpoint-wide: 1440px
--container-page: 1120px
--container-wide: 1280px
--container-reveal-mobile: 430px
--container-reveal-tablet: 520px
```

### Responsive Component Rules

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| ProductGrid | 1 column | 2 columns | 3 columns + filters |
| ProductDetail | stacked | 2 columns | media/reward left, purchase/odds right |
| RevealStage | full-screen 9:16 | centered 9:16 | phone-frame or split with details |
| CollectionGrid | 2 columns | 3-4 columns | dense grid + sidebar filters |
| AdminTables | read-only/minimal | usable | primary layout |

Reveal-specific rule: keep the reveal stage in a stable phone-like aspect ratio on tablet/desktop. Do not stretch the pack/card to fill wide screens.

---

## 10. Types

```text
types/
├── database.ts
├── env.ts
├── money.ts
├── rarity.ts
└── api.ts
```

Shared types เท่านั้นที่ควรอยู่ใน `types/` ถ้า type ใช้เฉพาะ feature ให้เก็บไว้ใน `features/*/types.ts`

---

## 11. Tests

```text
tests/
├── unit/
│   ├── weighted-random.test.ts
│   ├── provably-fair.test.ts
│   └── money.test.ts
├── integration/
│   ├── open-pack.test.ts
│   ├── payment-webhook.test.ts
│   └── order-flow.test.ts
├── e2e/
│   ├── purchase-and-open.spec.ts
│   ├── collection.spec.ts
│   ├── admin-fulfillment.spec.ts
│   └── responsive.spec.ts
└── fixtures/
    ├── products.ts
    ├── rewards.ts
    └── viewports.ts
```

### MVP Test Priorities

1. เปิด pack ซ้ำไม่ได้
2. จ่ายเงินสำเร็จแล้วสร้าง user pack ถูกต้อง
3. webhook ปลอมไม่ผ่าน
4. weighted random รวม weight ถูกต้อง
5. result ถูกบันทึกก่อน animation แสดง
6. collection เพิ่ม quantity ถูกต้อง
7. admin ไม่สามารถเข้าด้วย user ปกติ
8. reveal/shop/product ไม่ overflow ใน 360, 390, 430, 768, 1024, 1280, 1440 widths
9. desktop reveal ไม่ถูก stretch เกิน phone-frame/container ที่กำหนด

---

## 12. Scripts

```text
scripts/
├── seed-dev.ts
├── generate-db-types.ts
├── check-env.ts
├── audit-odds.ts
└── compress-assets.ts
```

---

## 13. Environment Variables

```text
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=

PAYMENT_PROVIDER=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

LINE_CHANNEL_ID=
LINE_CHANNEL_SECRET=

SENTRY_DSN=
```

### Env Rules

1. `NEXT_PUBLIC_*` เท่านั้นที่ไป client ได้
2. service role และ payment secrets ต้องอยู่ server เท่านั้น
3. มี `check-env.ts` เพื่อ fail fast ตอน start/build

---

## 14. Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Component | PascalCase | `RevealStage.tsx` |
| Hook | camelCase with use | `useRevealTimeline.ts` |
| Server action | verb phrase | `createOrder`, `openUserPack` |
| DB table | snake_case plural | `user_packs` |
| Route segment | kebab-case | `refund-policy` |
| File utility | kebab-case | `weighted-random.ts` |
| CSS variables | kebab-case | `--color-rarity-secret` |

---

## 15. Import Boundaries

Allowed:

```text
app/* -> features/*, components/*, server/*
features/* -> components/ui, lib/*, server/* when server-only
components/ui -> lib/utils only
server/* -> lib/*, types/*
```

Avoid:

```text
components/ui -> features/*
features/shop -> features/gacha internals
client components -> server/admin-client
app/page.tsx -> direct SQL-heavy logic
```

---

## 16. First Scaffold Checklist

1. Create Next.js + TypeScript project
2. Add Tailwind and base tokens
3. Add Supabase client/server clients
4. Create initial migrations
5. Implement shop read flow
6. Implement auth guard
7. Implement mock payment provider first
8. Implement gacha engine with tests
9. Implement reveal animation V1
10. Add responsive shop/product/reveal layouts
11. Verify mobile, tablet, desktop viewports
12. Replace mock payment with real sandbox provider
