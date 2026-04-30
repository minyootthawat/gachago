# Gachago Prototype Plan

**วันที่:** 30 เมษายน 2569  
**สถานะ:** Prototype Execution Plan  
**เป้าหมาย:** เปลี่ยน scaffold ปัจจุบันให้เป็น clickable prototype ที่ demo ได้ชัดเจน ก่อนเริ่ม MVP จริงที่ใช้ auth/payment/database production

---

## 1. Prototype Goal

Prototype นี้ไม่ได้มีเป้าหมายเพื่อรับเงินจริงหรือ launch ต่อผู้ใช้ทั่วไป แต่เพื่อพิสูจน์ว่า core experience ของ Gachago น่าสนใจพอ:

```text
Shop -> Product Detail -> Mock Checkout -> Pack Reveal -> Result -> Collection
```

สิ่งที่ prototype ต้องตอบ:

1. Flow เข้าใจง่ายไหม
2. Reveal animation สนุกพอไหม
3. Layout ใช้ได้บน mobile, tablet, desktop ไหม
4. ผู้ใช้รู้ไหมว่าซื้ออะไร ได้อะไร และ odds อยู่ตรงไหน
5. Demo กับ investor/partner/KOL แล้วเห็นภาพ product ไหม

---

## 2. Prototype Scope

### 2.1 ทำใน Prototype

| Area | Scope |
|---|---|
| Shop | product cards, mock inventory, responsive grid |
| Product Detail | product hero, price, reward pool, odds, CTA |
| Checkout | mock checkout, fake payment success, no real money |
| Packs | list unopened packs from local/mock state |
| Reveal | 2.5D pack opening animation, rarity effects, result screen |
| Collection | mock/local collection after reveal |
| Orders | mock order history |
| Account | mock profile/settings panels |
| Admin | simple read-only admin preview |
| Responsive | mobile/tablet/desktop layout behavior |
| Demo Data | seeded products, rewards, orders, collection |

### 2.2 ไม่ทำใน Prototype

| ไม่ทำ | เหตุผล |
|---|---|
| Real payment | ยังไม่ผ่าน legal/compliance และไม่จำเป็นต่อ prototype |
| Production auth | ใช้ mock/session/local state พอ |
| Real fulfillment | ทำเป็น UI placeholder |
| Real stock decrement | ใช้ mock logic ก่อน |
| Battle/leaderboard | นอก scope |
| Licensed IP assets จริง | เสี่ยง IP ถ้ายังไม่มีสิทธิ์ |
| Production analytics | ใช้ console/dev event log หรือ mock analytics |

---

## 3. Prototype User Flow

### 3.1 Primary Demo Flow

```text
1. เปิด /shop
2. เลือก Starter Reveal Box
3. ดู product detail + odds
4. กด Mock checkout
5. redirect ไป /reveal/[packId]
6. กด OPEN NOW
7. ดู pack shake -> burst -> card reveal
8. ดู Congratulations result
9. กดไป Collection
10. เห็น item ที่เปิดได้
```

### 3.2 Secondary Demo Flow

```text
1. เปิด /packs
2. เห็น unopened packs
3. เปิด pack จากหน้านี้
4. กลับไปดู /orders
5. ดู account/settings mock
```

---

## 4. Prototype Data Strategy

Prototype ใช้ mock data เป็นหลัก แต่ต้องจัดโครงให้ย้ายไป Supabase ได้ง่าย

### 4.1 Mock Data Files

```text
features/demo/
├── products.ts
├── rewards.ts
├── packs.ts
├── collection.ts
├── orders.ts
└── user.ts
```

### 4.2 Required Demo Data

| Data | จำนวนขั้นต่ำ |
|---|---:|
| Products | 3 boxes |
| Rewards | 12-20 items |
| Rarity levels | 4 levels |
| Mock packs | 2 unopened, 1 opened |
| Collection items | 6-12 items |
| Orders | 3-5 orders |

### 4.3 Local State

ใช้ local state หรือ localStorage สำหรับ prototype:

- mock checkout creates pack
- reveal creates result
- result is added to collection
- orders show mock purchase history

> หมายเหตุ: localStorage ใช้เพื่อ demo เท่านั้น MVP จริงต้องย้ายไป database transaction

---

## 5. Animation Prototype

### 5.1 Reveal Sequence

```text
Idle Pack
  -> shake
  -> glow / light leak
  -> flash burst
  -> card flip
  -> rarity splash
  -> result summary
```

### 5.2 Required States

| State | Description |
|---|---|
| idle | pack ลอยเบา ๆ |
| opening | pack เขย่า |
| burst | flash + radial glow |
| reveal | card flip / slide in |
| result | congratulations screen |
| error | fallback หาก API/mock เปิดไม่ได้ |

### 5.3 Rarity Effects

| Rarity | Color | Motion |
|---|---|---|
| Common | silver | simple flip |
| Rare | cyan | sparkle sweep |
| Super Rare | magenta | particle burst |
| Secret | gold | stronger flash + longer pause |

### 5.4 Polish Checklist

- CTA กดง่ายบนมือถือ
- animation ไม่ยาวเกิน 5-8 วินาที
- มี skip หรือ open another
- result text ไม่ล้นการ์ด
- reduced motion fallback
- desktop ไม่ยืด pack เต็มจอ

---

## 6. Responsive Prototype Requirements

### 6.1 Viewports

ต้องตรวจ:

| Viewport | Expected |
|---|---|
| 360x740 | ไม่มี horizontal overflow, CTA เห็นชัด |
| 390x844 | main mobile target |
| 430x932 | large mobile |
| 768x1024 | tablet portrait |
| 1024x768 | tablet landscape |
| 1280x800 | laptop |
| 1440x900 | desktop |

### 6.2 Layout Expectations

| Page | Mobile | Tablet | Desktop |
|---|---|---|---|
| Shop | 1 column | 2 columns | 3 columns |
| Product Detail | stacked | 2 columns | 2 columns + sticky purchase |
| Reveal | full-screen phone frame | centered frame | frame + side panel |
| Collection | 2 columns | 3 columns | 4-5 columns + filters |
| Orders | stacked rows | table-like rows | table-like rows |

---

## 7. Prototype Milestones

### Milestone 1 — Demo Data + State

**Goal:** flow มี state จริงใน browser

- สร้าง `features/demo/*`
- รวม product/reward/order mock data
- เพิ่ม localStorage helper
- checkout สร้าง pack ใน localStorage
- reveal เพิ่ม item เข้า collection

**Acceptance:**

- ซื้อ mock product แล้ว pack โผล่ใน `/packs`
- reveal แล้ว item โผล่ใน `/collection`

### Milestone 2 — Reveal Polish

**Goal:** animation น่าดูพอสำหรับ demo

- ปรับ timing
- เพิ่ม rarity splash
- เพิ่ม result summary
- เพิ่ม sound toggle placeholder
- เพิ่ม skip/open another

**Acceptance:**

- ดู flow แล้วเข้าใจว่าเป็น pack opening
- animation ไม่กระตุกชัดเจนบน mobile/laptop

### Milestone 3 — Responsive Pass

**Goal:** demo ได้ทุกจอหลัก

- ปรับ shop/detail/collection/orders/account
- ตรวจ viewport list
- แก้ overflow
- ปรับ touch targets

**Acceptance:**

- ไม่มี horizontal scroll
- reveal frame ไม่ stretch บน desktop
- CTA สำคัญไม่หลุดจอ mobile

### Milestone 4 — Demo Readiness

**Goal:** เปิด demo ให้คนอื่นลองได้

- เพิ่ม demo reset button
- เพิ่ม “prototype mode” banner
- เพิ่ม seed data
- เพิ่ม basic README demo steps
- เพิ่ม E2E smoke test

**Acceptance:**

- คนที่ไม่รู้โปรเจกต์เปิด `/shop` แล้วเล่น flow ได้เอง
- reset demo ได้
- build ผ่าน

---

## 8. Suggested Timeline

| Day | Work |
|---|---|
| Day 1 | demo data + localStorage state |
| Day 2 | checkout -> packs -> reveal -> collection persistence |
| Day 3 | reveal polish + rarity effects |
| Day 4 | responsive QA pass |
| Day 5 | demo reset, README, smoke tests |

---

## 9. Prototype Acceptance Criteria

Prototype ถือว่าพร้อม demo เมื่อ:

- `/shop` แสดง product อย่างน้อย 3 รายการ
- กด mock checkout แล้วได้ unopened pack
- `/packs` แสดง pack ที่ซื้อ
- กด open แล้วเล่น animation
- result ถูกเพิ่มเข้า `/collection`
- `/orders` แสดง mock order
- responsive ผ่าน viewport หลัก
- `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build` ผ่าน
- ไม่มี real payment หรือ licensed IP asset ที่ไม่มีสิทธิ์

---

## 10. หลัง Prototype

ถ้า prototype ผ่าน feedback ค่อยเริ่ม MVP จริง:

1. Supabase auth/session
2. DB-backed products/rewards/orders/user_packs
3. Transactional gacha open
4. PromptPay sandbox
5. Admin CRUD
6. Legal-reviewed terms/odds/refund
7. Analytics funnel

