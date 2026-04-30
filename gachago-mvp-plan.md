# Gachago MVP Plan — Anime Card / Blind Box Reveal

**เวอร์ชัน:** 1.0  
**วันที่:** 30 เมษายน 2569  
**สถานะ:** MVP Execution Plan  
**เป้าหมายหลัก:** พิสูจน์ว่า animation เปิดการ์ด/กล่องสุ่มช่วยเพิ่ม conversion, repeat purchase, และ social sharing ได้จริง ก่อนขยายเป็นแพลตฟอร์มเต็มรูปแบบ

---

## 1. Executive Summary

Gachago MVP คือเว็บ gacha ขนาดเล็กสำหรับตลาดไทยที่เน้นประสบการณ์ “เปิดการ์ดหรือกล่องสุ่มแบบ cinematic animation” เป็นแกนหลัก ผู้ใช้สามารถเข้าสู่ระบบ เลือก pack/box ชำระเงิน เปิด animation เพื่อดูผลลัพธ์ และเก็บผลไว้ใน collection ได้

MVP นี้จะยังไม่ทำ battle, leaderboard, tournament, marketplace, trading, original IP, multi-country expansion หรือระบบ community ขนาดใหญ่ จุดประสงค์คือทดสอบ product-market fit ของประสบการณ์เปิดสุ่มก่อน

### 1.1 MVP Positioning

> “เว็บเปิดการ์ด/กล่องสุ่มที่สนุกที่สุดในไทย ด้วย animation ที่น่าดู น่าแชร์ และโปร่งใสเรื่องอัตราการสุ่ม”

### 1.2 Core Bet

สมมติฐานหลักที่ MVP ต้องพิสูจน์:

1. ผู้ใช้ยอมจ่ายเพื่อประสบการณ์เปิด pack/box ออนไลน์ หาก animation สนุกและผลลัพธ์ชัดเจน
2. 3D/2.5D reveal เพิ่ม perceived value และ retention ได้มากกว่าหน้า reveal ธรรมดา
3. ผู้ใช้ไทยต้องการจ่ายผ่าน PromptPay/QR มากกว่าบัตรเครดิต
4. กลุ่ม anime / TCG / blind box สามารถเริ่มจาก niche เล็กและขยาย category ได้
5. การเปิดเผย odds และ audit trail ช่วยเพิ่มความเชื่อมั่น

---

## 2. MVP Scope

### 2.1 สิ่งที่ต้องมีใน MVP

| Area | Feature | เหตุผล |
|---|---|---|
| Auth | LINE Login + Email fallback | ลด friction สำหรับผู้ใช้ไทย |
| Shop | รายการ pack/box 1-2 หมวด | เริ่มเล็กเพื่อคุม inventory และ legal |
| Product Detail | ราคา, odds, reward pool, stock | ความโปร่งใสและ conversion |
| Payment | PromptPay QR ผ่าน payment provider | ช่องทางหลักของตลาดไทย |
| Pack Ownership | ซื้อแล้วได้ unopened pack ในบัญชี | แยกจ่ายเงินออกจาก reveal |
| Reveal Experience | Animation เปิดการ์ด/กล่องสุ่ม | USP หลัก |
| Gacha Engine | Server-side random + audit log | ลดความเสี่ยงโกง/บั๊ก |
| Collection | แสดง item ที่เปิดได้ | ทำให้ผู้ใช้กลับมาดูซ้ำ |
| Fulfillment Request | ขอจัดส่งสินค้ากายภาพแบบ manual/semi-auto | ใช้งานจริงโดยไม่สร้างระบบใหญ่เกิน |
| Admin | จัดการ product, odds, stock, order, fulfillment | จำเป็นต่อ operation |
| Basic Analytics | funnel, purchase, reveal, repeat | ใช้ตัดสินใจหลัง MVP |

### 2.2 สิ่งที่ไม่ทำใน MVP

| ไม่ทำ | เหตุผล |
|---|---|
| Battle Opening | เพิ่ม legal risk และ real-time complexity |
| Leaderboard | ยังไม่จำเป็นต่อการพิสูจน์ purchase/reveal loop |
| Trading / Marketplace | เพิ่ม fraud, tax, moderation, dispute |
| Original IP | ใช้เวลาผลิตสูง ยังไม่จำเป็นต่อ MVP |
| Mobile App Native | เว็บ mobile-first เพียงพอ |
| Multi-category 8 หมวด | กระจาย inventory และ marketing เกินไป |
| Print-on-demand licensed cards | เสี่ยง IP สูง หากไม่มีสิทธิ์ชัดเจน |
| Regional Expansion | ต้องพิสูจน์ไทยก่อน |

---

## 3. Product Strategy

### 3.1 เริ่มจาก 1-2 Category เท่านั้น

ตัวเลือกที่แนะนำ:

| Option | รายละเอียด | ข้อดี | ข้อควรระวัง |
|---|---|---|---|
| Anime Blind Box | กล่องสุ่ม character / art toy ที่มีสินค้ากายภาพจริง | เหมาะกับ animation, เข้าใจง่าย | ต้องตรวจสิทธิ์สินค้าและภาพ |
| TCG Pack | การ์ดสะสมจาก distributor | demand ชัด | ใช้ภาพ/ชื่อ IP ต้องระวัง |
| Original Mystery Card | การ์ดดีไซน์เอง/commission art | คุม IP เอง | ต้องสร้าง demand เอง |

**คำแนะนำ MVP:** เริ่มด้วย `Anime Blind Box` หรือ `Original Mystery Card` ก่อน หากสิทธิ์ของ TCG ยังไม่ชัด เพราะลดความเสี่ยง IP และทำ animation ได้อิสระกว่า

### 3.2 MVP Product Types

| Product | ราคา | จำนวนรางวัล | เหมาะสำหรับ |
|---|---:|---:|---|
| Starter Box | ฿99-149 | 1 item | first purchase |
| Standard Box | ฿199-299 | 1 item | repeat purchase |
| Premium Box | ฿499-699 | 1 item + higher rare chance | collector |

### 3.3 Reward Rarity

| Rarity | Rate ตัวอย่าง | Visual Treatment |
|---|---:|---|
| Common | 70% | soft glow, quick reveal |
| Rare | 22% | colored burst, stronger sound |
| Super Rare | 7% | full-screen particles |
| Secret | 1% | cinematic pause, gold/iridescent effect |

> หมายเหตุ: rate ต้องมาจากต้นทุนจริงและผ่าน legal review ก่อนเปิดขาย

---

## 4. MVP User Journey

```text
Visitor
  -> เปิดหน้า Shop
  -> ดู pack/box + odds
  -> Login ด้วย LINE หรือ Email
  -> เลือกสินค้า
  -> ชำระเงินด้วย PromptPay QR
  -> ได้ unopened pack/box
  -> กด Open
  -> Server สุ่มผลและบันทึก audit
  -> เล่น animation reveal
  -> แสดง item ที่ได้
  -> item เข้า Collection
  -> ขอจัดส่งเมื่อพร้อม
```

### 4.1 First Purchase Flow

1. ผู้ใช้เข้าหน้า shop จาก TikTok/LINE/IG
2. เห็น product card พร้อมราคาและ preview animation
3. กดดูรายละเอียดเพื่อเห็น reward pool และ odds
4. Login
5. Checkout ด้วย PromptPay QR
6. Payment success แล้ว pack อยู่ในหน้า “รอเปิด”
7. กดเปิด pack
8. ระบบสุ่มผลก่อน animation
9. Animation เล่นจนจบ
10. แสดงผลและปุ่ม share/save

### 4.2 Returning User Flow

1. เปิดเว็บจาก LINE rich menu
2. เห็น unopened pack หรือ collection ล่าสุด
3. ซื้อซ้ำหรือเปิด pack ที่ยังไม่ได้เปิด
4. ขอจัดส่งสินค้าที่สะสมไว้

---

## 5. Reveal Animation Strategy

Animation คือหัวใจของ MVP ต้องทำให้ “น่าดูซ้ำ น่าแชร์ และไม่หนักเครื่อง”

### 5.1 Animation Modes

| Mode | ใช้กับ | เทคโนโลยี | เหตุผล |
|---|---|---|---|
| 2.5D Reveal | มือถือทั่วไป | CSS/Canvas/Framer Motion | เร็วและเสถียร |
| Lightweight 3D | มือถือกลาง-สูง/Desktop | React Three Fiber | สร้าง premium feel |
| Static Fallback | เครื่องช้า/WebGL ไม่รองรับ | ภาพ + transition | ลด drop-off |

**MVP Recommendation:** ทำ 2.5D ให้ดีมากก่อน แล้วเพิ่ม 3D เฉพาะอุปกรณ์ที่รองรับ

### 5.2 Reveal Sequence

```text
0.0s - 0.8s   Scene intro: background darkens, product floats in
0.8s - 1.8s   Box/card pack shake with haptic-style motion
1.8s - 2.5s   Light leak appears from seam
2.5s - 3.2s   Burst: lid/card flips open
3.2s - 4.4s   Silhouette of reward appears
4.4s - 5.2s   Rarity color reveal
5.2s - 6.5s   Final item display
6.5s+         CTA: collect, share, open another
```

### 5.3 Rarity Visual Language

| Rarity | Color | Motion | Sound |
|---|---|---|---|
| Common | silver/white | clean flip | soft tap |
| Rare | blue/cyan | sparkle sweep | bright chime |
| Super Rare | magenta/gold | particle burst | rising shimmer |
| Secret | gold/rainbow | slow pause + explosion | deep hit + shimmer |

### 5.4 Performance Rules

1. Animation must start within 500ms after result API returns
2. Total reveal should be 5-8 seconds, skippable after first 2 seconds
3. Asset budget for reveal page should target under 3-5MB initial load
4. Use reduced animation mode for low-end devices
5. Never determine result on the client

---

## 5.5 Responsive Experience — Mobile, Tablet, Desktop

MVP ต้องรองรับ 3 form factors ตั้งแต่แรก เพราะพฤติกรรมผู้ใช้ต่างกัน:

- **Mobile:** ช่องทางหลักจาก TikTok, LINE, Instagram ใช้สำหรับซื้อและเปิด pack ทันที
- **Tablet:** เหมาะกับ browsing, collection management, และเปิด reveal แบบจอใหญ่ขึ้น
- **Desktop:** เหมาะกับ admin, collection review, checkout ที่ต้องดู odds/reward pool รายละเอียด และ content creator ที่อัดจอ

### 5.5.1 Breakpoints

| Device | Width | Primary Use | Layout Principle |
|---|---:|---|---|
| Mobile S | 320-374px | LINE browser, low-end Android | single column, compact controls |
| Mobile M/L | 375-767px | main consumer flow | full-screen reveal, bottom CTA |
| Tablet | 768-1023px | browse + reveal + collection | centered reveal stage, 2-column shop |
| Desktop | 1024-1439px | browse, compare, admin | constrained content, side panels |
| Wide Desktop | 1440px+ | admin/content creator | max-width layouts, avoid stretched UI |

### 5.5.2 Reveal Layout by Device

| Device | Reveal Treatment | CTA Placement | Notes |
|---|---|---|---|
| Mobile | 9:16 stage, pack centered, bottom action panel | sticky/bottom | priority target |
| Tablet Portrait | 9:16 stage centered with safe margins | below stage or right rail | keep animation size stable |
| Tablet Landscape | stage left, result/controls right | right rail | good for shared viewing |
| Desktop | phone-like reveal frame centered or split with details | side panel | do not stretch pack to full desktop width |
| Wide Desktop | reveal frame + reward pool/history sidebars | side panels | useful for streamers/admin QA |

### 5.5.3 Page Layout Rules

| Screen | Mobile | Tablet | Desktop |
|---|---|---|---|
| Shop | 1-column product list | 2-column grid | 3-column grid with filters |
| Product Detail | image → price → odds → CTA | image + purchase panel | image/reward preview left, odds/purchase right |
| Checkout | one-step QR/status | QR + order summary | QR/status + detailed order summary |
| My Packs | card list | 2-column grid | grid + filters |
| Reveal | full-screen 9:16 | centered 9:16 | phone-frame or split reveal |
| Result | card first, actions bottom | card + summary | summary panel + collection actions |
| Collection | 2-column compact grid | 3-4 columns | dense grid + filters/sidebar |
| Admin | limited support only | usable tables | primary admin target |

### 5.5.4 Responsive Implementation Rules

1. Use mobile-first CSS and progressively add tablet/desktop layout.
2. Reveal animation must keep stable aspect ratio; never stretch to fill desktop width.
3. Use container constraints: mobile `100%`, tablet `max-width: 430-520px` for reveal, desktop `max-width: 1120-1280px` for pages.
4. Important CTAs must stay reachable by thumb on mobile.
5. Text must not overflow inside pack labels, buttons, cards, or rarity badges.
6. Product/reward images must use fixed aspect ratios to avoid layout shift.
7. Desktop should show more information, not bigger decorative UI.
8. Admin screens can be desktop-first, but must remain readable on tablet.

### 5.5.5 Device Performance Targets

| Device Class | Reveal Mode | Target |
|---|---|---|
| Low-end mobile | static/low-motion 2D | no crash, interaction under 100ms |
| Mid mobile | 2.5D Framer Motion | 30-60 FPS |
| High-end mobile | 2.5D + particles | 60 FPS target |
| Tablet | 2.5D + richer particles | 60 FPS target |
| Desktop | 2.5D or optional lightweight 3D | 60 FPS target |

### 5.5.6 QA Viewports

ต้องตรวจอย่างน้อย:

| Viewport | Purpose |
|---|---|
| 360x740 | small Android / LINE browser |
| 390x844 | modern iPhone baseline |
| 430x932 | large iPhone / Android flagship |
| 768x1024 | tablet portrait |
| 1024x768 | tablet landscape |
| 1280x800 | laptop |
| 1440x900 | desktop |

---

## 6. Legal & Compliance Guardrails

ต้องให้ทนายไทยตรวจแยกก่อนเปิดรับเงินจริง เอกสารนี้ไม่ถือเป็นคำแนะนำทางกฎหมาย

### 6.1 Legal Questions ก่อน MVP

| คำถาม | ต้องได้คำตอบก่อน launch |
|---|---|
| การขายกล่องสุ่มออนไลน์เข้าข่ายกฎหมายใดบ้าง | การพนัน, คุ้มครองผู้บริโภค, ขายตรง/ตลาดแบบตรง, promotion |
| ต้องมีใบอนุญาตหรือจดทะเบียนอะไร | ตรวจจากหน่วยงานจริง ไม่อ้างจากแผนเดิม |
| ต้องแสดง odds แบบไหน | ราย product, rarity, reward pool, stock |
| จำกัดอายุหรือ spending limit หรือไม่ | โดยเฉพาะกลุ่มผู้เยาว์ |
| ใช้ภาพ/ชื่อ/โลโก้ IP ได้แค่ไหน | ต้องมีสิทธิ์เป็นลายลักษณ์อักษร |
| Fulfillment และ refund ต้องเขียนอย่างไร | ลด dispute และ complaint |

### 6.2 MVP Compliance Checklist

- แสดงราคาเต็มก่อนจ่าย
- แสดง odds และ reward pool ก่อนซื้อ
- แสดง stock หรือจำนวนรางวัลคงเหลือ หากมีผลต่อ odds
- มี terms, privacy policy, refund policy
- มี audit log ทุกการสุ่ม
- มี purchase limit ต่อวันสำหรับ account ใหม่
- มีช่องทางติดต่อ support ชัดเจน
- ไม่ใช้คำสื่อว่า “ลงทุน”, “กำไร”, “คืนทุน”, หรือ “ขายต่อได้ราคา”
- ไม่ทำ reward ที่แลกกลับเป็นเงินจริงใน MVP

---

## 7. Business Model MVP

### 7.1 Revenue

รายได้หลักใน MVP:

1. Box/Pack sales
2. Shipping fee เมื่อผู้ใช้ขอจัดส่ง

ยังไม่ทำ:

1. Marketplace fee
2. Ads
3. KOL revenue share ที่ซับซ้อน
4. Subscription

### 7.2 Unit Economics Template

| รายการ | ตัวอย่าง Standard Box |
|---|---:|
| Price | ฿249 |
| COGS เฉลี่ย | ฿90 |
| Payment fee | ฿5-10 |
| Packaging allocation | ฿8 |
| Support/ops allocation | ฿5 |
| Gross margin ก่อน shipping | ฿136-141 |

Shipping ควรแยกคิด:

| Shipping Model | วิธีคิด |
|---|---|
| Ship now | ลูกค้าจ่ายค่าส่งทันที |
| Hold and combine | เก็บใน collection แล้วรวมส่งทีหลัง |
| Free shipping threshold | ส่งฟรีเมื่อยอดสะสมถึงขั้นต่ำ |

### 7.3 MVP Financial Targets

| Metric | Target 30 วันแรก |
|---|---:|
| Visitors | 10,000 |
| Signup conversion | 8-12% |
| First purchase conversion | 2-4% |
| Paid users | 200-400 |
| Repeat purchase within 14 days | 20-30% |
| Average order value | ฿200-350 |
| Refund/complaint rate | < 2% |

---

## 8. Technology MVP

### 8.1 Recommended Stack

| Layer | Technology | เหตุผล |
|---|---|---|
| Frontend | Next.js + React + TypeScript | ทำเว็บเร็วและ SEO ได้ |
| Animation | Framer Motion + CSS/Canvas | MVP เสถียรกว่า full 3D |
| Optional 3D | React Three Fiber | ใช้เฉพาะ reveal บางแบบ |
| Backend | Next.js Route Handlers / Server Actions | ลด infra complexity |
| Database | Supabase Postgres | เร็วสำหรับ MVP |
| Auth | Supabase Auth + LINE Login | เหมาะกับไทย |
| Payment | Stripe/2C2P/Omise PromptPay | เลือกจาก fee และ onboarding จริง |
| Storage | Supabase Storage / Cloudflare R2 | เก็บภาพ reward และ animation assets |
| Monitoring | Sentry + basic analytics | ตรวจ error และ funnel |

### 8.2 Core Data Model

```sql
products
- id
- sku
- name
- type                -- card_pack, blind_box
- price_satang
- stock
- is_active
- image_url

reward_items
- id
- product_id
- name
- rarity
- image_url
- stock
- weight
- is_active

orders
- id
- user_id
- status              -- pending, paid, cancelled, refunded
- total_satang
- payment_provider
- payment_reference
- created_at

user_packs
- id
- user_id
- product_id
- order_id
- status              -- unopened, opened
- opened_at

gacha_results
- id
- user_pack_id
- user_id
- product_id
- reward_item_id
- random_value
- server_seed_hash
- server_seed_revealed
- client_seed
- nonce
- created_at

user_collection
- id
- user_id
- reward_item_id
- quantity
- first_obtained_at

shipping_requests
- id
- user_id
- status              -- requested, packing, shipped, delivered, cancelled
- address_snapshot
- tracking_number
- created_at
```

### 8.3 Gacha Engine Requirements

1. ตรวจว่า user เป็นเจ้าของ unopened pack จริง
2. ใช้ transaction หรือ lock เพื่อกันเปิดซ้ำ
3. สุ่มบน server เท่านั้น
4. บันทึก result ก่อนส่งกลับ frontend
5. เพิ่มของเข้า collection ใน transaction เดียวกัน
6. เก็บ audit log พร้อม seed/hash/nonce
7. API ต้อง idempotent ถ้าผู้ใช้ refresh

---

## 9. MVP Screens

| Screen | รายละเอียด |
|---|---|
| Home/Shop | แสดง product ที่เปิดขาย, teaser animation |
| Product Detail | ราคา, odds, reward pool, CTA ซื้อ |
| Checkout | เลือก payment, แสดง QR, รอสถานะ |
| My Packs | pack ที่ซื้อแล้วและยังไม่เปิด |
| Reveal | full-screen animation |
| Result | item, rarity, share/open another |
| Collection | รายการของที่มี, duplicate count |
| Shipping Request | เลือก item, ที่อยู่, ค่าส่ง |
| Account | profile, order history |
| Admin | product, reward, stock, order, fulfillment |

---

## 10. 8-Week Roadmap

### Week 1 — Legal/IP/Scope Lock

- เลือก category แรก
- ตรวจสิทธิ์สินค้าและภาพที่ใช้
- ให้ legal review flow การขายสุ่ม
- lock MVP scope และ KPI
- ทำ wireframe หลักสำหรับ mobile, tablet, desktop

### Week 2 — Foundation

- ตั้ง Next.js project
- ตั้ง Supabase schema
- ตั้ง auth
- ทำ admin skeleton
- ทำ product/reward seed data
- ตั้ง responsive tokens, breakpoints, container rules

### Week 3 — Shop + Checkout

- Shop page
- Product detail พร้อม odds
- Order creation
- PromptPay payment integration sandbox
- Webhook payment success
- responsive shop/product/checkout layout

### Week 4 — Pack Ownership + Gacha Engine

- user_packs
- open pack API
- transaction/idempotency
- result audit log
- collection update

### Week 5 — Reveal Animation V1

- 2.5D reveal sequence
- rarity effects
- mobile/tablet/desktop reveal layouts
- mobile performance pass
- fallback mode
- result screen

### Week 6 — Collection + Fulfillment

- collection grid
- item detail
- shipping request flow
- admin fulfillment queue
- support/order history
- tablet/desktop collection density and filters

### Week 7 — QA + Analytics

- funnel analytics
- payment edge cases
- duplicate open prevention
- low-stock behavior
- responsive browser testing across mobile, tablet, desktop
- security review

### Week 8 — Soft Launch

- invite 50-100 beta users
- run limited inventory drop
- monitor conversion and complaints
- collect feedback
- decide go/no-go for public launch

---

## 11. MVP Success Criteria

MVP ถือว่าผ่าน หากภายใน 30 วันหลัง soft launch:

| Metric | Pass Criteria |
|---|---:|
| First purchase conversion | >= 2% จาก visitors |
| Repeat purchase | >= 20% ของ paid users |
| Reveal completion rate | >= 90% |
| Payment success rate | >= 95% |
| Complaint/refund rate | < 2% |
| Share intent click | >= 10% ของ reveal results |
| Gross margin | >= 35% ก่อน fixed cost |

MVP ควรหยุด/ปรับ หาก:

- legal review ไม่ผ่าน
- IP rights ไม่ชัด
- payment dispute สูง
- conversion ต่ำกว่า 1% แม้ traffic ตรงกลุ่ม
- animation ทำให้ drop-off สูงหรือเครื่องมือถือส่วนใหญ่เล่นไม่ได้

---

## 12. Post-MVP Expansion

ทำหลังจาก KPI ผ่านเท่านั้น:

1. เพิ่ม category ที่สอง
2. เพิ่ม 3D reveal premium สำหรับ rare/secret
3. เพิ่ม LINE Messaging API notification
4. เพิ่ม loyalty แบบไม่เกี่ยวกับ gambling/reward cash-out
5. เพิ่ม seasonal drop
6. เพิ่ม limited original art card
7. พิจารณา leaderboard แบบ collection-only หลัง legal review

---

## 13. Immediate Next Steps

1. เลือก MVP category แรก: Anime Blind Box, TCG Pack, หรือ Original Mystery Card
2. ตรวจสิทธิ์ IP และเอกสาร supplier
3. ให้ทนายไทยทำ legal memo สำหรับ random product sale
4. ทำ prototype reveal animation 1 แบบใน 3-5 วัน
5. ทำ landing/shop mockup และทดสอบกับกลุ่มเป้าหมาย 10-20 คน
6. คำนวณ unit economics จากต้นทุนสินค้าจริง
7. เริ่ม build MVP ตาม roadmap 8 สัปดาห์
