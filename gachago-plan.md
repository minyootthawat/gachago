# Gachago — แผนโปรเจกต์แพลตฟอร์ม Gacha ออนไลน์ สำหรับตลาดไทย

**เวอร์ชัน:** 2.0 (Updated)  
**วันที่:** 30 เมษายน 2569  
**ผู้จัดทำ:** ทีมพัฒนา Gachago  
**สถานะ:** แผนเชิงกลยุทธ์ — โปรเจกต์ Vertical Integration

---

## สารบัญ

1. [Executive Summary](#1-executive-summary)
2. [Market Opportunity — Thailand](#2-market-opportunity--thailand)
3. [Business Model](#3-business-model)
4. [Products](#4-products)
5. [Customer Experience](#5-customer-experience)
6. [Marketing Strategy — Thailand](#6-marketing-strategy--thailand)
7. [Operations](#7-operations)
8. [Technology Stack](#8-technology-stack)
9. [Gacha Engine](#9-gacha-engine)
10. [Legal \& Compliance (Thailand)](#10-legal--compliance-thailand)
11. [Financial Model](#11-financial-model)
12. [Roadmap](#12-roadmap)
13. [Risk Analysis](#13-risk-analysis)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

### 1.1 ภาพรวมโปรเจกต์

**Gachago** เป็นแพลตฟอร์ม Gacha ออนไลน์ที่บูรณาการทุกองค์ประกอบธุรกิจไว้ในบริษัทเดียวกัน (Vertical Integration) ครอบคลุมตั้งแต่แพลตฟอร์มออนไลน์ สินค้าคงคลัง (Inventory) ไปจนถึงระบบ Fulfillment ภายในองค์กร โดยมุ่งเน้นการให้ประสบการณ์ "เปิดไพ่" (Card Reveal) แบบ 3 มิติที่น่าตื่นเต้น เป็นจุดแข่งขันที่แตกต่างจากคู่แข่งในตลาดไทย

แพลตฟอร์มดำเนินการบนเว็บไซต์และรองรับทั้ง Desktop และ Mobile Browser โดยผู้ใช้สามารถซื้อ Pack เปิดการ์ดดิจิทัล และเลือกรับการ์ดกายภาพ (Physical Card) ผ่านระบบจัดส่งภายในประเทศไทย

### 1.2 วิสัยทัศน์ (Vision)

> "สร้างประสบการณ์ Gacha ออนไลน์ที่น่าตื่นเต้นและโปร่งใสที่สุดในเอเชียตะวันออกเฉียงใต้ ด้วยเทคโนโลยี 3D ที่ล้ำสมัยและการบริการที่เหนือความคาดหวังของลูกค้าชาวไทย"

### 1.3 พันธกิจ (Mission)

- นำเสนอประสบการณ์การเปิด Gacha ระดับ Premium ด้วย 3D Animation ที่สวยงามและน่าตื่นเต้น
- มอบความยุติธรรมและความโปร่งใสในระบบการสุ่มผ่าน Provably Fair System
- สนับสนุนผู้ใช้ในการสะสม ค้นหา และจัดการคอลเลกชันการ์ด TCG และ Blind Box
- ให้บริการจัดส่งการ์ดกายภาพผ่านระบบ Fulfillment ภายในประเทศไทย
- สร้างระบบนิเวศที่ยุติธรรมสำหรับทั้งผู้ใช้และผู้ดำเนินการ

### 1.4 เป้าหมายทางธุรกิจ

| เป้าหมาย | ปีที่ 1 | ปีที่ 2 |
|---|---|---|
| จำนวนผู้ลงทะเบียน | 100,000 คน | 400,000 คน |
| MAU (Monthly Active Users) | 30,000 คน | 120,000 คน |
| Revenue | ฿25,000,000 | ฿120,000,000 |
| Pack Sales (ต่อเดือน) | 100,000 ชุด | 400,000 ชุด |
| จำนวนสินค้าในคลัง (SKU) | 500+ | 2,000+ |

### 1.5 Thai Market Opportunity

**ทำไมต้องตลาดไทย:**

- ตลาด TCG (Trading Card Game) ในไทยมีมูลค่ากว่า ฿3,000 ล้าน/ปี และเติบโต 20-30% ต่อปี
- Pokemon TCG และ One Piece TCG เป็นสินค้าขายดีในร้านค้าการ์ดทั่วประเทศ
- วัฒนธรรม Gacha และ Blind Box เป็นที่นิยมอย่างมากในกลุ่ม Gen Z และ Millennials
- PromptPay QR ครอบคลุม 50-60% ของธุรกรรมออนไลน์ ทำให้การชำระเงินง่ายและสะดวก
- ช่องทาง LINE และ TikTok เป็นช่องทางหลักในการเข้าถึงกลุ่มเป้าหมาย

### 1.6 Business Model: Vertical Integration

**โมเดล Vertical Integration หมายความว่า:**

| องค์ประกอบ | รายละเอียด |
|---|---|
| **แพลตฟอร์ม (Platform)** | เว็บไซต์ + แอปพลิเคชัน สำหรับซื้อขาย Gacha |
| **สินค้าคงคลัง (Inventory)** | การ์ดและ Blind Box ที่จัดเก็บในคลังของบริษัทเอง |
| **Fulfillment** | ระบบแพ็คและจัดส่งที่ดำเนินการโดยทีมของบริษัทเอง |

**ข้อดีของโมเดลนี้:**

1. **ควบคุมต้นทุนได้ดี** — ทั้ง COGS, ค่าขนส่ง, และค่าธรรมเนียมอยู่ในองค์กรเดียวกัน
2. **ควบคุมคุณภาพได้** — การจัดเก็บ การแพ็ค และการจัดส่งอยู่ภายใต้มาตรฐานเดียวกัน
3. **Margin ที่ดีกว่า** — ไม่ต้องแบ่ง Revenue ให้คู่ค้า Fulfillment หรือ Marketplace
4. **ข้อมูลครบถ้วน** — ข้อมูล Inventory และ Customer Behavior อยู่ในที่เดียวกัน
5. **ปรับตัวได้เร็ว** — ตอบสนองต่อความต้องการของตลาดได้รวดเร็ว

### 1.7 Key Differentiators (จุดแข่งขันที่แตกต่าง)

| จุดแข่งขัน | Gachago | คู่แข่ง (Pobs, ร้านค้าอื่น) |
|---|---|---|
| **3D Card Reveal** | ✓ React Three Fiber สร้างประสบการณ์ cinematic | ✗ เปิดการ์ดธรรมดา |
| **Provably Fair System** | ✓ Server-side random พร้อม verification | ✗ ไม่มีการพิสูจน์ความยุติธรรม |
| **การชำระเงิน** | ✓ PromptPay QR (1.5% fee) | ✗ ต้องใช้บัตรเครดิต (3.4% fee) |
| **Multi-Category** | ✓ Pokemon, One Piece, Dragon Ball, Blind Box | ✗ มีเพียง 1-2 หมวดหมู่ |
| **LINE Integration** | ✓ LINE Login + LINE Official Account + LINE Notify | ✗ ไม่มี Integration |
| **Physical + Digital** | ✓ การ์ดดิจิทัล + การ์ดกายภาพ | ✗ มีเพียงกายภาพ |
| **บริการลูกค้า** | ✓ LINE Chat ตอบภายใน 1 ชั่วโมง | ✗ ตอบช้าหรือไม่ตอบ |

---

## 2. Market Opportunity — Thailand

### 2.1 Thailand Gacha/Blind Box Market Size

**ขนาดตลาด:**

| หมวดหมู่ | มูลค่าตลาด (ประมาณการ) | อัตราเติบโต/ปี |
|---|---|---|
| TCG (Pokemon, One Piece, Dragon Ball) | ฿3,000-4,000 ล้าน | 20-30% |
| Blind Box / Blind Bag | ฿800-1,200 ล้าน | 25-35% |
| Anime Figures | ฿1,500-2,000 ล้าน | 15-25% |
| Art Toys / Designer Toys | ฿500-800 ล้าน | 30-40% |
| **รวม** | **฿5,800-8,000 ล้าน** | **~22%** |

**แหล่งข้อมูล:** ประมาณการจากยอดขายร้านค้าการ์ดในไทย, ข้อมูลจาก Distributor ท้องถิ่น, และแนวโน้มตลาด E-commerce

### 2.2 Target Audience (กลุ่มเป้าหมาย)

**กลุ่มหลัก:**

| กลุ่ม | อายุ | ความสนใจ | พฤติกรรมการซื้อ |
|---|---|---|---|
| **Gen Z (Core)** | 15-22 ปี | Pokemon, One Piece, Anime, Blind Box | ซื้อ 1-3 ครั้ง/เดือน, งบ ฿500-1,500/เดือน |
| **Young Millennials** | 23-30 ปี | TCG, Anime Figures, Art Toys | ซื้อ 2-5 ครั้ง/เดือน, งบ ฿1,000-3,000/เดือน |
| **Older Collectors** | 31-40 ปี | Pokemon TCG, Vintage Cards | ซื้อ 1-2 ครั้ง/เดือน, งบ ฿2,000-5,000/เดือน |

**Demographics:**

- **เพศ:** 60% ชาย, 40% หญิง
- **ที่ตั้ง:** กรุงเทพฯ 35%, ปริมณฑล 20%, ต่างจังหวัด 45%
- **อาชีพ:** นักเรียน/นักศึกษา 40%, พนักงานออฟฟิศ 35%, ธุรกิจส่วนตัว 25%
- **ช่องทางอินเทอร์เน็ต:** Mobile 85%, Desktop 15%

### 2.3 Competitive Landscape (ภูมิทัศน์การแข่งขัน)

**คู่แข่งโดยตรง (Online Gacha):**

| คู่แข่ง | จุดแข่งขัน | จุดอ่อน |
|---|---|---|
| **Pobs (พ็อบส์)** | แพลตฟอร์ม Gacha ออนไลน์ที่มีชื่อเสียง, มี Pokemon และ One Piece | ไม่มี 3D Reveal, ไม่รองรับ PromptPay, UI เก่า |
| **Card Gacha Shop (เพจ Facebook)** | บริการ Gacha ผ่านเพจ | ไม่มีระบบออนไลน์, ต้องติดต่อส่วนตัว |
| **Gashapon Online** | แพลตฟอร์มต่างประเทศ | ไม่รองรับ THB, ค่าส่งแพง, ไม่มี Thai Support |

**คู่แข่งทางอ้อม (Offline + Online Marketplace):**

| คู่แข่ง | จุดแข่งขัน | จุดอ่อน |
|---|---|---|
| **ร้านการ์ด (Card Shop)** | มีสินค้าให้เลือกมาก, ซื้อ-ขายได้โดยตรง | ไม่มีประสบการณ์ 3D, ไม่มี Gacha |
| **Shopee/Lazada** | สะดวก, มี Review | ไม่มี Gacha, ไม่มี Blind Box Experience |
| **711 / ร้านสะดวกซื้อ** | วางขาย Blind Box | สินค้าจำกัด, ไม่มี Collection System |

### 2.4 Why Now? (ทำไมต้องตอนนี้)

**ปัจจัยภายนอก:**

1. **โควิด-19 เร่งการเติบโต E-commerce** — ผู้บริโภคคุ้นเคยกับการซื้อของออนไลน์มากขึ้น
2. **TikTok และ Social Commerce** — การตลาดผ่าน TikTok สามารถเข้าถึง Gen Z ได้อย่างมีประสิทธิภาพ
3. **PromptPay QR** — โครงสร้างพื้นฐานการชำระเงินพร้อมใช้งานแล้ว
4. **ความนิยม TCG ที่เพิ่มขึ้น** — Pokemon TCG และ One Piece TCG มียอดผู้เล่นเพิ่มขึ้นอย่างต่อเนื่อง
5. **กฎหมายชัดเจน** — พ.ร.บ. ธุรกิจสินค้าจากการสุ่ม พ.ศ. 2565 ทำให้ธุรกิจ Gacha ถูกกฎหมายหากได้รับใบอนุญาต

**ปัจจัยภายใน:**

1. **ทีมมีประสบการณ์** — ทีมพัฒนามีความเชี่ยวชาญด้านเทคโนโลยี 3D และ E-commerce
2. **สินค้าคงคลังพร้อม** — มี Stock Pokemon Cards และ One Piece TCG อยู่แล้ว
3. **ระบบ Fulfillment พร้อม** — ทีมดำเนินการ Fulfillment อยู่แล้ว
4. **ต้นทุนเริ่มต้นต่ำ** — ไม่ต้องลงทุนใน Inventory และ Fulfillment ใหม่

---

## 3. Business Model

### 3.1 Vertical Integration Overview

**โมเดล Vertical Integration ของ Gachago:**

```
┌─────────────────────────────────────────────────────────────┐
│                    GACHAGO (บริษัทเดียว)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │  PLATFORM   │───▶│  INVENTORY  │───▶│ FULFILLMENT │    │
│  │             │    │             │    │             │    │
│  │ • Website   │    │ • Pokemon   │    │ • Packing   │    │
│  │ • 3D Reveal │    │ • One Piece │    │ • Shipping  │    │
│  │ • Payments  │    │ • Dragon    │    │ • Returns   │    │
│  │ • LINE      │    │   Ball      │    │             │    │
│  │ • Support   │    │ • Blind Box │    │             │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│         │                  │                  │            │
│         ▼                  ▼                  ▼            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              REVENUE (100% อยู่ในบริษัท)              │   │
│  │  • Pack Sales  • Shipping Fees  • Premium Products  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Revenue Model

**แหล่งรายได้หลัก:**

| แหล่งรายได้ | รายละเอียด | % ของรายได้รวม |
|---|---|---|
| **Pack Sales** | รายได้จากการขาย Pack (Pokemon, One Piece, etc.) | 75% |
| **Shipping Fees** | ค่าจัดส่งการ์ดกายภาพ | 10% |
| **Premium Products** | การ์ดพิเศษ, Edition จำกัด, บริการ Print-on-Demand | 10% |
| **Other** | ค่าธรรมเนียม, รายได้จากโฆษณา, KOL Partnerships | 5% |

**รายได้ต่อ Pack:**

```
Revenue per Pack = Pack Price - COGS - Payment Fee - Shipping Cost - Platform Cost
```

**ตัวอย่าง (Gold Pack ฿600):**

| รายการ | ฿ | % |
|---|---|---|
| Pack Price | 600.00 | 100% |
| COGS (สินค้า) | 210.00 | 35% |
| Payment Fee (PromptPay 1.5% + ฿2) | 11.00 | 1.8% |
| Shipping Cost (เฉลี่ย) | 40.00 | 6.7% |
| Platform Cost (Hosting, Support) | 15.00 | 2.5% |
| **Net Revenue** | **324.00** | **54%** |

### 3.3 Unit Economics

**Unit Economics ต่อ Pack:**

| Pack Type | Price | COGS (35%) | Payment Fee | Shipping | Platform Cost | Net |
|---|---|---|---|---|---|---|
| Starter (฿200) | ฿200 | ฿70 | ฿5 | ฿35 | ฿5 | ฿90 |
| Bronze (฿300) | ฿300 | ฿105 | ฿6.5 | ฿40 | ฿8 | ฿140.5 |
| Silver (฿500) | ฿500 | ฿175 | ฿9.5 | ฿40 | ฿12 | ฿263.5 |
| Gold (฿800) | ฿800 | ฿280 | ฿14 | ฿45 | ฿20 | ฿441 |
| Diamond (฿1,500) | ฿1,500 | ฿525 | ฿24.5 | ฿50 | ฿35 | ฿865.5 |

**Average Unit Economics:**

| Metric | ฿/Pack |
|---|---|
| Average Pack Price | ฿250-350 |
| Average COGS | 30-40% |
| Average Payment Fee | 1.5-2% |
| Average Shipping | ฿35-50 |
| Average Net Margin | 25-35% |

### 3.4 Why This Model Works

**เหตุผลที่ Vertical Integration เหมาะกับ Gachago:**

1. **ตลาด TCG ในไทยมี Margin สูง** — การ์ดมี Markup 100-300% จากราคาส่ง
2. **ควบคุมประสบการณ์ลูกค้าได้ทั้งหมด** — ตั้งแต่เปิดเว็บจนถึงได้รับการ์ดที่บ้าน
3. **สินค้าคงคลังเป็น Asset** — การ์ดที่ไม่ขายได้ยังมีมูลค่าคงคลัง
4. **Fulfillment สร้างความได้เปรียบ** — คู่แข่งที่พึ่งพา Fulfillment ภายนอกมีต้นทุนสูงกว่า
5. **ข้อมูลทั้งหมดอยู่ที่เดียว** — วิเคราะห์และปรับปรุงได้อย่างรวดเร็ว

---

## 4. Products

### 4.1 Phase 1: MVP Categories (เดือน 1-2)

**เปิดตัว 2 หมวดหมู่แรก:**

#### 4.1.1 Pokemon Cards (การ์ดโปเกมอน)

| รายการ | รายละเอียด |
|---|---|
| **สินค้าที่มี** | Pokemon TCG Boost Pack, ETB (Elite Trainer Box), Blister Pack |
| **Series ที่วางขาย** | Scarlet & Violet Series, Sword & Shield Series |
| **แหล่งที่มา** | Official Thai Distributor (มีสิทธิ์ขายต่อ) |
| **Price Range** | ฿150-1,200 |
| **Rarity** | Common, Uncommon, Rare, Ultra Rare, Full Art, Rainbow Rare, VMAX, VSTAR |

**Pokemon Pack Types:**

| Pack Type | ฿/Pack | จำนวนการ์ด | Rare Rate |
|---|---|---|---|
| Scarlet & Violet Booster | ฿200 | 5 ใบ | 30% Rare+ |
| Sword & Shield Booster | ฿180 | 5 ใบ | 25% Rare+ |
| ETB (Elite Trainer Box) | ฿1,200 | 10 packs + bonus | 35% Rare+ |

#### 4.1.2 One Piece TCG (การ์ดวันพีซ)

| รายการ | รายละเอียด |
|---|---|
| **สินค้าที่มี** | One Piece TCG Booster Pack, Starter Deck, Anniversary Box |
| **Series ที่วางขาย** | Romance Dawn, Paramount War, Pillars of Strength |
| **แหล่งที่มา** | Official Thai Distributor (มีสิทธิ์ขายต่อ) |
| **Price Range** | ฿180-1,500 |
| **Rarity** | Common, Uncommon, Rare, Super Rare, Secret Rare, Leader Card |

**One Piece Pack Types:**

| Pack Type | ฿/Pack | จำนวนการ์ด | Rare Rate |
|---|---|---|---|
| OP-01 Romance Dawn | ฿180 | 5 ใบ | 25% Rare+ |
| OP-02 Paramount War | ฿200 | 5 ใบ | 30% Rare+ |
| OP-03 Starter Deck | ฿500 | 50 ใบ + deck | Fixed |

### 4.2 Phase 2: Expansion (เดือน 3-6)

**ขยายเพิ่ม 5 หมวดหมู่:**

#### 4.2.3 Dragon Ball TCG (การ์ดดรากอนบอล)

| รายการ | รายละเอียด |
|---|---|
| **สินค้า** | Dragon Ball Super TCG Booster Pack, Dragon Ball Super Card Game |
| **Series** | Series 1-5 |
| **Price Range** | ฿150-1,000 |
| **Target Audience** | กลุ่มอายุ 18-35 ปี, ผู้ที่ชื่นชอบ Dragon Ball |

#### 4.2.4 Naruto/Boruto TCG

| รายการ | รายละเอียด |
|---|---|
| **สินค้า** | Naruto Shippuden TCG, Boruto Naruto Next Generations TCG |
| **Series** | ทั้งหมด |
| **Price Range** | ฿150-800 |

#### 4.2.5 Anime Figures (ตุ๊กตาอนิเมะ)

| รายการ | รายละเอียด |
|---|---|
| **ประเภท** | Scale Figure, Nendoroid, Figma, Prize Figure |
| **IP ที่ขาย** | Goku, Naruto, Luffy, Demon Slayer, Jujutsu Kaisen |
| **Price Range** | ฿500-5,000 |
| **Blind Box Option** | ฿200-500/กล่อง |

#### 4.2.6 Blind Boxes (กล่องปริศนา)

| ซีรีส์ | ฿/กล่อง | อัตราการออก Rare |
|---|---|---|
| **Sumikko Gurashi** | ฿250 | 1/12 |
| **Sanrio Characters** | ฿300 | 1/12 |
| **BTS** | ฿350 | 1/10 |
| **LINE Friends** | ฿280 | 1/12 |
| **Mochi Kawaii** | ฿200 | 1/10 |

#### 4.2.7 Art Toys / Designer Toys

| รายการ | รายละเอียด |
|---|---|
| **ประเภท** | Designer Toy, Vinyl Toy, Sofubi |
| **แบรนด์** | Kasing Lung, How2work, Momoco, Sonny Angel |
| **Price Range** | ฿800-5,000 |
| **Limited Edition** | ฿2,000-10,000 |

### 4.3 Phase 3: Original IP (เดือน 12+)

**พัฒนาสินค้า Original ของ Gachago เอง:**

#### Gachago Original Cards — "Celestial Guardians" Season 1

| รายการ | รายละเอียด |
|---|---|
| **Theme** | เทพเจ้าและผู้พิทักษ์จักรวาล |
| **จำนวนการ์ด** | 120 ใบ |
| **Art Style** | Fantasy + Thai Mythology |
| **Artist** | ทีมออกแบบ + ศิลปินภายนอก 3 คน |
| **Release** | Q1 ปีที่ 2 |
| **ราคา** | ฿150-800 |

**Roadmap สำหรับ Original IP:**

| Season | ชื่อ | จำนวนการ์ด | Release |
|---|---|---|---|
| S1 | Celestial Guardians | 120 | Q1 Y2 |
| S2 | Neon Warriors | 100 | Q3 Y2 |
| S3 | Shōnen Spirits | 110 | Q1 Y3 |

---

## 5. Customer Experience

### 5.1 User Journey

**ขั้นตอนการใช้งาน Gachago:**

```
┌────────────────────────────────────────────────────────────────────┐
│                     USER JOURNEY — GACHAGO                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐ │
│  │  SIGN UP │────▶│  BROWSE  │────▶│ PURCHASE │────▶│  3D      │ │
│  │          │     │  SHOP    │     │  PACK    │     │  REVEAL  │ │
│  │ LINE     │     │          │     │          │     │          │ │
│  │ Login    │     │ Pokemon  │     │ PromptPay│     │ Animation│ │
│  │          │     │ One Piece│     │ QR Code  │     │ Effects  │ │
│  └──────────┘     └──────────┘     └──────────┘     └──────────┘ │
│       │                │                │                │        │
│       │                │                │                ▼        │
│       │                │                │         ┌──────────┐     │
│       │                │                │         │COLLECTION│     │
│       │                │                │         │          │     │
│       │                │                │         │ Digital  │     │
│       │                │                │         │ Cards    │     │
│       │                │                │         └──────────┘     │
│       │                │                │                │        │
│       │                │                │                ▼        │
│       │                │                │         ┌──────────┐     │
│       │                │                │         │ SHIPPING │     │
│       │                │                │         │(Optional)│     │
│       │                │                │         │          │     │
│       │                │                │         │ Physical │     │
│       │                │                │         │ Card     │     │
│       └────────────────┴────────────────┴─────────┴──────────┘     │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

#### Step 1: Sign Up (ลงทะเบียน)

**ช่องทางการลงทะเบียน:**

| ช่องทาง | รายละเอียด |
|---|---|
| **LINE Login** | ปุ่ม "เข้าสู่ระบบด้วย LINE" — วิธีหลัก |
| **Email/Password** | สำหรับผู้ที่ไม่มี LINE |
| **Facebook Login** | ทางเลือกสำรอง |

**ข้อมูลที่เก็บ:**

- LINE User ID, Display Name, Profile Picture
- Email (หากลงทะเบียนด้วย Email)
- หมายเลขโทรศัพท์ (สำหรับจัดส่ง)

**Welcome Bonus:**

- แต่ละผู้ใช้ใหม่ได้รับ Starter Pack ฟรี 1 ครั้ง
- สามารถเปิดได้ทันทีโดยไม่ต้องชำระเงิน

#### Step 2: Browse Shop (เลือกดูร้านค้า)

**หน้าร้านค้าแสดง:**

- หมวดหมู่สินค้า (Pokemon, One Piece, Dragon Ball, etc.)
- Pack Types พร้อมราคาและจำนวนการ์ด
- ส่วนลด Combo (ซื้อ 3 แพ็ค ลด 5%, ซื้อ 10 แพ็ค ลด 15%)
- สินค้าขายดี (Best Sellers)
- สินค้าใหม่ (New Arrivals)

**Filter & Search:**

- กรองตามหมวดหมู่, ราคา, ความนิยม
- ค้นหาด้วยชื่อสินค้า

#### Step 3: Purchase Pack (ซื้อแพ็ค)

**วิธีการชำระเงิน:**

| วิธี | ค่าธรรมเนียม | เวลาในการยืนยัน |
|---|---|---|
| **PromptPay QR** (แนะนำ) | 1.5% + ฿2 | ทันที |
| **TrueMoney Wallet** | 2% | ทันที |
| **Credit Card (Visa/Mastercard)** | 3.4% | ทันที |
| **LINE Pay** | 2% | ทันที |

**Flow การซื้อ:**

```
1. เลือก Pack → กดปุ่ม "ซื้อเลย"
2. เลือกจำนวน (1, 3, 10 แพ็ค)
3. เลือกวิธีชำระเงิน
4. แสดง QR Code (PromptPay) หรือ Redirect ไปยัง Payment Gateway
5. ยืนยันการชำระเงิน
6. Pack ปรากฏใน Collection พร้อมสถานะ "รอเปิด" (Unopened)
7. ส่ง Notification ผ่าน LINE Notify
```

**Combo Discount:**

| จำนวนแพ็ค | ส่วนลด | ตัวอย่าง (฿200/pack) |
|---|---|---|
| 1 | 0% | ฿200 |
| 3 | 5% | ฿570 (ประหยัด ฿30) |
| 10 | 15% | ฿1,700 (ประหยัด ฿300) |

#### Step 4: 3D Card Reveal (เปิดการ์ด 3 มิติ)

**ประสบการณ์การเปิด Gacha แบบ 3 มิติ:**

1. **เลือก Pack ที่ต้องการเปิด** — แสดง Pack ที่ยังไม่ได้เปิด
2. **กดปุ่ม "เปิด Pack"** — เปลี่ยนหน้าจอเป็น Fullscreen 3D
3. **ระบบสุ่ม Server-side** — กำหนดผลลัพธ์ก่อนแสดง Animation
4. **Animation เริ่มต้น** — 3D Pack ปรากฏบนหน้าจอ

#### Step 5: Collection (คอลเลกชัน)

**ฟีเจอร์คอลเลกชัน:**

| ฟีเจอร์ | รายละเอียด |
|---|---|
| **Grid View** | แสดงการ์ดทั้งหมดในรูปแบบ Grid |
| **Filter** | กรองตาม Rarity, Category, Series |
| **Sort** | เรียงตามชื่อ, วันที่ได้รับ, Rarity |
| **Search** | ค้นหาด้วยชื่อการ์ด |
| **Card Detail** | ดูรายละเอียดเต็มของการ์ดแต่ละใบ |
| **Duplicate Counter** | นับจำนวนการ์ดซ้ำ |
| **Completion Progress** | แสดง % การสะสมครบชุด |

#### Step 6: Shipping (การจัดส่ง — Optional)

**สำหรับผู้ที่ต้องการการ์ดกายภาพ:**

1. เลือกการ์ดดิจิทัลที่ต้องการสั่งพิมพ์
2. เลือกประเภทวัสดุ (Standard, Holofoil, Premium)
3. ใส่ที่อยู่จัดส่ง
4. ชำระค่าพิมพ์ + ค่าจัดส่ง
5. ระบบส่งออร์เดอร์ไปยัง Fulfillment Center
6. ติดตามสถานะผ่าน LINE Notify

### 5.2 3D Card Reveal Experience (Detailed)

**ประสบการณ์ 3D Card Reveal คือจุดแข่งขันที่สำคัญที่สุดของ Gachago**

#### 5.2.1 Animation Sequence (ลำดับขั้นตอน Animation)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    3D CARD REVEAL SEQUENCE                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. INTRO (0-1s)                                                    │
│     ┌─────────────────────────────────────┐                        │
│     │         ╔═══════════════╗           │                        │
│     │         ║  GACHAGO LOGO ║           │                        │
│     │         ╚═══════════════╝           │                        │
│     │              ✨ glow ✨              │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  2. PACK APPEAR (1-2s)                                              │
│     ┌─────────────────────────────────────┐                        │
│     │      ┌───────────────────┐          │                        │
│     │      │                   │          │                        │
│     │      │   3D PACK MODEL   │  ↗ float │                        │
│     │      │                   │          │                        │
│     │      └───────────────────┘          │                        │
│     │           ✨ sparkles ✨              │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  3. PACK SHAKE (2-4s)                                                │
│     ┌─────────────────────────────────────┐                        │
│     │      ┌───────────────────┐          │                        │
│     │      │   ╭─────────────╮ │          │                        │
│     │      │   │   SHAKING!   │ │ ← vibrate                        │
│     │      │   ╰─────────────╯ │          │                        │
│     │      │        💨💨💨       │          │                        │
│     │      └───────────────────┘          │                        │
│     │          🔊 sound effect             │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  4. PACK BREAK (4-4.5s)                                             │
│     ┌─────────────────────────────────────┐                        │
│     │              💥 BOOM!                 │                        │
│     │           particles explode          │                        │
│     │                                     │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  5. CARD REVEAL (4.5-6.5s)                                          │
│     ┌─────────────────────────────────────┐                        │
│     │                                     │                        │
│     │         ┌─────────────┐             │                        │
│     │         │             │             │                        │
│     │         │   3D CARD   │◄── rotates  │                        │
│     │         │             │             │                        │
│     │         └─────────────┘             │                        │
│     │              ↘ slide in             │                        │
│     │                                     │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  6. RARITY SPLASH (6.5-7.5s)                                        │
│     ┌─────────────────────────────────────┐                        │
│     │                                     │                        │
│     │         ★ RARE ★                    │                        │
│     │        [color burst]                │                        │
│     │                                     │                        │
│     │                                     │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  7. CARD DETAIL (7.5-10.5s)                                         │
│     ┌─────────────────────────────────────┐                        │
│     │                                     │                        │
│     │      ┌───────────────────┐         │                        │
│     │      │                   │         │                        │
│     │      │   FULL ART CARD   │         │                        │
│     │      │                   │         │                        │
│     │      │   name / stats /   │         │                        │
│     │      │   description      │         │                        │
│     │      └───────────────────┘         │                        │
│     │           [360° rotatable]         │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
│  8. COLLECT (10.5-11s)                                              │
│     ┌─────────────────────────────────────┐                        │
│     │                                     │                        │
│     │   card flies ──► [collection icon] │                        │
│     │                                     │                        │
│     └─────────────────────────────────────┘                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 5.2.2 Rarity Effects (เอฟเฟกต์ตามระดับ Rare)

| Rarity | Background Color | Particle Effect | Sound Effect | Duration |
|---|---|---|---|---|
| **Common** | เทาเงิน (#C0C0C0) | ไม่มี | ตั๊วะเบาๆ | 8s |
| **Uncommon** | เขียวมรกต (#50C878) | ✨ sparkle เล็กน้อย | ตั๊วะ + กระพริบ | 9s |
| **Rare** | น้ำเงินไฟ (#1E90FF) | ⭐ star particles | เสียง shine ดัง | 10s |
| **Ultra Rare** | ม่วงเข้ม (#9400D3) | 🌠 meteor shower | เสียง epic + echo | 12s |
| **Legendary** | ทอง (#FFD700) | ✨ full screen glow | เสียงฟลุต + boom | 15s |

#### 5.2.3 Why 3D Reveal is the USP

**เหตุผลที่ 3D Card Reveal เป็นจุดแข่งขันที่แตกต่าง:**

1. **ประสบการณ์ที่ไม่เหมือนใคร** — ไม่มีแพลตฟอร์ม Gacha ไทยรายอื่นที่มี 3D Animation
2. **ความตื่นเต้น** — Animation ทำให้การเปิด Pack มีความตื่นเต้นเหมือนเปิดของขวัญจริง
3. **Social Sharing** — ผู้ใช้อยากแชร์ประสบการณ์เปิด Legendary บน TikTok/Instagram
4. **Memory Creation** — ประสบการณ์ 3D ทำให้ผู้ใช้จดจำแพลตฟอร์มได้ดี
5. **เพิ่ม Perceived Value** — การ์ดที่ได้รับมีคุณค่ามากขึ้นเพราะวิธีการได้มาที่น่าตื่นเต้น

**ตัวอย่าง Viral Content ที่คาดหวัง:**

- "เปิด Pokemon Legendary บน Gachago" — TikTok video
- "Pack Opening สุด Epic" — YouTube review โดย KOL
- "รีวิว Gachago 3D Reveal" — Instagram Reel

---

## 6. Marketing Strategy — Thailand

### 6.1 Channels (ช่องทางการตลาด)

**ลำดับความสำคัญของช่องทาง:**

| ช่องทาง | ลำดับ | % งบประมาณ | กลุ่มเป้าหมาย |
|---|---|---|---|
| **TikTok** | 1 (Primary) | 40% | Gen Z, Gen Alpha |
| **Instagram** | 2 | 25% | Millennials, Gen Z |
| **LINE Official Account** | 3 | 15% | ทุกกลุ่ม |
| **Facebook** | 4 | 10% | กลุ่ม 25+ |
| **YouTube** | 5 | 10% | TCG Collectors |

#### 6.1.1 TikTok (ช่องทางหลัก)

**กลยุทธ์ TikTok:**

| ประเภทคอนเทนต์ | ตัวอย่าง | ความถี่ |
|---|---|---|
| **3D Reveal Clip** | คลิปเปิด Pack สุด Epic, Legendary Pull | 3-5 คลิป/สัปดาห์ |
| **Behind the Scene** | ขั้นตอนการจัดส่ง, การแพ็คของ | 1-2 คลิป/สัปดาห์ |
| **Challenge** | #GachagoPullChallenge, #เปิดการ์ดดรากอนบอล | แคมเปญรายเดือน |
| **UGC** | คอนเทนต์จากผู้ใช้ | แชร์ต่อเมื่อมีคุณภาพ |
| **KOL Collab** | รีวิวโดย KOL | 2-4 คลิป/เดือน |

**TikTok Best Practices:**

- คลิปสั้น 15-60 วินาที
- ใช้เสียงประกอบ (Sound-on)
- Hook ใน 3 วินาทีแรก
- CTA: "เปิด Pack บน Gachago ดูสิ!"

#### 6.1.2 Instagram

**กลยุทธ์ Instagram:**

| ประเภทคอนเทนต์ | รายละเอียด |
|---|---|
| **Feed Posts** | รูปการ์ดสวยๆ, Collection Showcase, Product Photos |
| **Instagram Reels** | 3D Reveal Clips, Product Unboxing |
| **Stories** | Poll, Q&A, Countdown, Behind the Scene |
| **IGTV** | รีวิวการ์ดยาว 5-10 นาที |

**Visual Identity:**

- สีหลัก: ไพ่ทอง (#FFD700) + ม่วงเข้ม (#9400D3)
- Aesthetic: Premium, Collectible, Exciting
- Font: Bold, Modern

#### 6.1.3 LINE Official Account

**ฟังก์ชัน LINE Official Account:**

| ฟังก์ชัน | รายละเอียด |
|---|---|
| **Rich Menu** | เมนูลัด: เปิดร้าน, คอลเลกชัน, ติดตามออร์เดอร์ |
| **Broadcast** | ส่งข้อความถึงผู้ติดตามทั้งหมด |
| **Auto Reply** | ตอบคำถามที่พบบ่อย |
| **LINE Chat** | ช่องทางติดต่อ Customer Service |

**LINE Notify Integration:**

- แจ้งเตือนเมื่อ Pack พร้อมเปิด
- แจ้งสถานะจัดส่ง
- แจ้งโปรโมชันพิเศษ

#### 6.1.4 Facebook

**กลยุทธ์ Facebook:**

- Community Building: กลุ่ม Facebook สำหรับ TCG Collectors
- Facebook Live: Live Opening Event
- Facebook Ads: Retargeting, Lookalike Audience
- Shop: Facebook Shop สำหรับดูสินค้า

### 6.2 KOL Strategy (กลยุทธ์ KOL)

**กลุ่มเป้าหมาย KOL:**

| ประเภท KOL | ตัวอย่าง | จำนวน | งบต่อคน |
|---|---|---|---|
| **Gaming YouTubers** | ช่องที่เล่น Pokemon, TCG | 5-10 คน | ฿10,000-50,000 |
| **TCG Collectors** | รีวิวการ์ด, Collection | 10-20 คน | ฿5,000-20,000 |
| **Anime/Manga Reviewers** | รีวิว Anime, วิเคราะห์ | 5-10 คน | ฿5,000-15,000 |
| **Blind Box Collectors** | เปิด Blind Box, สะสม | 5-10 คน | ฿5,000-15,000 |
| **Micro KOL (1K-10K followers)** | คนทั่วไป | 50-100 คน | ฿1,000-5,000 + Free Pack |

**KOL Campaign Flow:**

```
1. คัดเลือก KOL ที่เหมาะสม (Audience Match, Engagement Rate)
2. ส่งสินค้าให้ KOL ทดลอง (Product Seeding)
3. KOL สร้างคอนเทนต์ (Review, Unboxing, Gameplay)
4. Gachago ส่ง Free Pack เพิ่มเติม (เฉพาะกรณีที่คอนเทนต์ดี)
5. ติดตามผล (Views, Engagement, Conversions)
6. วิเคราะห์ ROI และปรับกลยุทธ์
```

### 6.3 Launch Plan (แผนการเปิดตัว)

#### Phase 3.1: Soft Launch (เดือน 2-3)

**วัตถุประสงค์:** ทดสอบระบบ, หา Bug, เก็บ Feedback

| กิจกรรม | รายละเอียด |
|---|---|
| **Internal Testing** | ทีมพัฒนา + ครอบครัว + เพื่อน (50-100 คน) |
| **Beta Users** | ผู้ใช้ที่สมัคร Waitlist (500-1,000 คน) |
| **KOL Seeding** | แจก Free Pack ให้ KOL 10-20 คน |
| **Limited-time Offer** | ซื้อ 1 แพ็ค ฟรี 1 แพ็ค (แต่จำกัดจำนวน) |

#### Phase 3.2: Official Launch (เดือน 3-4)

**วัตถุประสงค์:** เปิดตัวอย่างเป็นทางการ, สร้าง Brand Awareness

| กิจกรรม | รายละเอียด |
|---|---|
| **Launch Event** | งานเปิดตัว Online (Live Facebook/TikTok) |
| **Big Campaign** | Launch Promotion — ส่วนลด 20% สำหรับ Week แรก |
| **KOL Push** | รีวิวจาก KOL 20-30 คนพร้อมกัน |
| **LINE Broadcast** | แจ้งข่าวไปยัง LINE Official Account ทั้งหมด |
| **TikTok Challenge** | #GachagoLaunch, #เปิดการ์ดครั้งแรก |

#### Phase 3.3: Sustained Growth (เดือน 4+)

**วัตถุประสงค์:** รักษาการเติบโต, เพิ่ม Retention

| กิจกรรม | ความถี่ |
|---|---|
| **Seasonal Promotion** | ลดราคา, กิจกรรมพิเศษ (วันเกิด, สิ้นปี) |
| **New Category Launch** | เพิ่ม Dragon Ball, Naruto ทุกเดือน |
| **Tournament Event** | จัด TCG Tournament ออนไลน์ |
| **Loyalty Program** | คะแนนสะสม, ส่วนลดสำหรับลูกค้าเก่า |
| **Referral Program** | แนะนำเพื่อนได้ Free Pack |

---

## 7. Operations

### 7.1 Warehouse & Fulfillment

**โครงสร้าง Fulfillment:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FULFILLMENT FLOW                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  [ONLINE ORDER]                                                     │
│       │                                                             │
│       ▼                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐          │
│  │   PAYMENT   │────▶│  INVENTORY  │────▶│   PACKING   │          │
│  │ CONFIRMED   │     │   CHECK     │     │   CENTER    │          │
│  └─────────────┘     └─────────────┘     └─────────────┘          │
│       │                   │                    │                   │
│       │                   │                    ▼                   │
│       │                   │            ┌─────────────┐              │
│       │                   │            │  QUALITY    │              │
│       │                   │            │   CHECK     │              │
│       │                   │            └─────────────┘              │
│       │                   │                    │                   │
│       │                   │                    ▼                   │
│       │                   │            ┌─────────────┐              │
│       │                   │            │  SHIPPING   │              │
│       │                   │            │  COURIER    │              │
│       │                   │            └─────────────┘              │
│       │                   │                    │                   │
│       ▼                   ▼                    ▼                   │
│  ┌─────────────────────────────────────────────────────┐           │
│  │                  DELIVERY TO CUSTOMER               │           │
│  └─────────────────────────────────────────────────────┘           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 7.1.1 Inventory Management (การจัดการสินค้าคงคลัง)

**ระบบ Inventory:**

| รายการ | รายละเอียด |
|---|---|
| **Real-time Tracking** | ระบบอัปเดต Stock ทุกครั้งที่มี Order |
| **Low Stock Alert** | แจ้งเตือนเมื่อ Stock ต่ำกว่า Minimum |
| **Reorder Point** | กำหนดจุดที่ต้องสั่งซื้อใหม่ |
| **Batch Tracking** | ติดตาม Lot Number ของสินค้า |
| **Expiry Management** | ติดตามวันหมดอายุ (ถ้ามี) |

**Safety Stock Policy:**

| ประเภทสินค้า | Minimum Stock | Reorder Quantity |
|---|---|---|
| Pokemon Booster | 50 ชุด | 200 ชุด |
| One Piece Booster | 50 ชุด | 200 ชุด |
| Blind Box | 30 กล่อง | 100 กล่อง |
| Anime Figure | 10 ชิ้น | 30 ชิ้น |

#### 7.1.2 Packing & Shipping (การแพ็คและจัดส่ง)

**มาตรฐานการแพ็ค:**

| ประเภทสินค้า | วิธีการแพ็ค |
|---|---|
| **Booster Pack** | ซองกระดาษแข็ง + Bubble Wrap + ซองจดหมาย |
| **ETB / Box** | กล่องเดิม + Bubble Wrap + กล่องใหญ่ |
| **Blind Box** | กล่องเดิม + Bubble Wrap + ซองป้องกันการกด |
| **Figure** | Bubble Wrap + กล่องโฟม (Foam) + กล่องนอก |

**Packing SLA:**

| ขั้นตอน | เวลา |
|---|---|
| Order ได้รับ → Packed | 1 วันทำการ |
| Packed → Shipped | 1 วันทำการ |
| รวม: Order → Dispatched | 2 วันทำการ |

#### 7.1.3 Courier Partners (ขนส่งพันธมิตร)

| ขนส่ง | เหมาะสำหรับ | ค่าจัดส่ง | เวลาจัดส่ง |
|---|---|---|---|
| **Kerry Express** | ทั่วประเทศ (เร็ว) | ฿40-80 | 1-2 วัน |
| **Thailand Post EMS** | ต่างจังหวัด | ฿35-70 | 2-3 วัน |
| **Flash Express** | ประหยัด | ฿30-60 | 2-3 วัน |
| **J&T Express** | ทั่วประเทศ | ฿35-65 | 2-3 วัน |

**Shipping Options:**

| ตัวเลือก | ค่าจัดส่ง | เวลา | Tracking |
|---|---|---|---|
| **Standard** | ฿35-50 | 3-5 วัน | ✓ |
| **Express** | ฿60-100 | 1-2 วัน | ✓ |
| **Same Day** (กรุงเทพฯ เท่านั้น) | ฿120-150 | 4-6 ชม. | ✓ |

#### 7.1.4 Fulfillment SLA

| Metric | เป้าหมาย |
|---|---|
| Order Fulfillment Rate | 98% ภายใน 2 วันทำการ |
| Shipping Accuracy | 99.5% |
| Damage Rate | < 0.5% |
| Customer Satisfaction | > 4.5/5 |

### 7.2 Customer Service

#### 7.2.1 Channel (ช่องทาง)

| ช่องทาง | เวลาให้บริการ | ความเร็วตอบ |
|---|---|---|
| **LINE Chat** (หลัก) | 09:00-22:00 ทุกวัน | < 1 ชั่วโมง |
| **Facebook Messenger** | 09:00-22:00 ทุกวัน | < 2 ชั่วโมง |
| **Email** | 24/7 | < 24 ชม. |
| **Phone** | 10:00-18:00 วันจันทร์-ศุกร์ | ทันที (ในเวลาทำการ) |

#### 7.2.2 Response Time SLA

| ประเภทคำถาม | เวลาตอบ | เวลาแก้ไข |
|---|---|---|
| **ทั่วไป (ถาม-ตอบ)** | 1 ชม. | — |
| **ปัญหาการสั่งซื้อ** | 2 ชม. | 24 ชม. |
| **ปัญหาการจัดส่ง** | 2 ชม. | 48 ชม. |
| **ปัญหาการชำระเงิน** | 4 ชม. | 24 ชม. |
| **Complaint/ร้องเรียน** | 30 นาที | 72 ชม. |

#### 7.2.3 Return/Refund Policy

**นโยบายการคืนสินค้า:**

| กรณี | นโยบาย |
|---|---|
| **สินค้าผิด/ชำรุด** | คืนเงินเต็มจำนวน หรือ ส่งสินค้าใหม่แทน |
| **สินค้าไม่ตรงกับที่สั่ง** | คืนเงินเต็มจำนวน หรือ ส่งสินค้าที่ถูกต้องแทน |
| **ลูกค้าเปลี่ยนใจ** | ไม่รับคืน (สินค้า Gacha เป็น Digital หรือ Opens Sealed) |
| **Digital Product Error** | คืนเงินเต็มจำนวน หรือ ส่งสินค้าใหม่แทน |

**กระบวนการขอคืนเงิน:**

```
1. ลูกค้าติดต่อผ่าน LINE Chat
2. แจ้งหมายเลข Order และปัญหา
3. CS ตรวจสอบและอนุมัติ
4. คืนเงินผ่าน PromptPay (1-3 วันทำการ)
5. หรือส่งสินค้าใหม่แทน
```

---

## 8. Technology Stack

> 📄 **รายละเอียดเต็ม:** ดู [gachago-tech-stack.md](./gachago-tech-stack.md) สำหรับ Deep Dive

### 8.1 Overview

| Layer | Technology | Purpose | Notes |
|---|---|---|---|
| **Frontend** | Next.js 15 (App Router) + React 19 | SSR/SSG, Server Components | เลือกเพราะ SEO + performance |
| **3D Rendering** | React Three Fiber + Drei + postprocessing | 3D Card Reveal Animations | USP หลัก |
| **State** | Zustand (client) + TanStack Query (server) | Global + Server state | เบา กว่า RTK |
| **Database** | Supabase (PostgreSQL) | Primary database | Thailand region มี |
| **Auth** | Supabase Auth + LINE Login | User authentication | LINE primary for TH |
| **Realtime** | Supabase Realtime | Battle rooms, Live order | No separate WS server |
| **Edge Functions** | Supabase Edge Functions | Gacha engine | Low latency, edge TH |
| **Payments** | Stripe (PromptPay QR) + LINE Pay | Checkout | Stripe primary 2% |
| **Animations** | Framer Motion + GSAP | UI + 3D timelines | Framer UI, GSAP complex |
| **Styling** | Tailwind CSS v4 + CSS Variables | Design System | CSS-native cascade |
| **Hosting** | Vercel | Frontend + Edge Middleware | Next.js optimized |
| **CDN** | Cloudflare | Asset Delivery + DDoS | Thailand PoP มี |
| **Monitoring** | Sentry + Vercel Analytics | Error + Performance | Free tier พอ |
| **3D Models** | .glb files (Pack, Card, Effects) | 3D assets | CDN delivery |

### 8.2 Frontend Architecture

#### 8.2.1 Tech Stack

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "typescript": "^5.6.0",
    "@tanstack/react-query": "^5.56.0",
    "zustand": "^5.0.0",
    "three": "^0.170.0",
    "@react-three/fiber": "^8.17.0",
    "@react-three/drei": "^9.117.0",
    "@react-three/postprocessing": "^2.16.0",
    "framer-motion": "^11.9.0",
    "gsap": "^3.12.5",
    "tailwindcss": "^4.0.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.447.0",
    "embla-carousel-react": "^8.3.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "stripe": "^17.0.0",
    "@sentry/nextjs": "^8.0.0"
  }
}
```

**ทำไมไม่ใช้ Redux Toolkit?**
- Gachago มี global state ไม่ซับซ้อน (cart, modals, battle room)
- TanStack Query จัดการ server state หมดแล้ว
- Zustand มี bundle size เล็กกว่า RTK เยอะ
- KeyZaa ใช้ RTK เพราะ convention, Gachago เป็น project ใหม่เลือกได้

#### 8.2.2 Folder Structure

```
app/
├── (main)/                        # Route group หลัก
│   ├── page.tsx                   # Landing page
│   ├── shop/
│   │   ├── page.tsx               # Shop listing
│   │   └── [category]/            # Category detail
│   ├── collection/
│   │   ├── page.tsx               # Collection grid
│   │   └── [cardId]/              # Card detail modal
│   ├── battle/
│   │   ├── page.tsx               # Battle lobby
│   │   ├── [roomId]/              # Battle room
│   │   └── leaderboard/           # Leaderboard
│   ├── reveal/
│   │   └── [packId]/              # 3D pack reveal
│   ├── order/
│   │   ├── page.tsx               # Order list
│   │   └── [orderId]/             # Order detail
│   └── account/
│       ├── page.tsx               # Profile
│       ├── badges/                # Badge collection
│       └── settings/              # Settings
├── (auth)/
│   ├── login/                     # LINE + Google + Email
│   └── callback/                  # OAuth callback
├── (admin)/                       # Admin dashboard
│   ├── dashboard/
│   ├── orders/
│   ├── inventory/
│   ├── packs/
│   └── analytics/
├── api/
│   ├── webhooks/stripe/           # Stripe webhooks
│   └── ...                        # Server Actions แทน API routes
└── layout.tsx                     # Root layout

components/
├── ui/                            # Base components (Button, Card, Modal)
├── gacha/                         # Gacha-specific
│   ├── PackCard.tsx
│   ├── PackReveal.tsx             # 3D reveal
│   ├── CardGrid.tsx
│   ├── CardDetail.tsx
│   └── RarityBadge.tsx
├── battle/
│   ├── BattleLobby.tsx
│   ├── BattleRoom.tsx
│   ├── Leaderboard.tsx
│   └── PlayerCard.tsx
├── shop/
│   ├── ProductCard.tsx
│   ├── CartDrawer.tsx
│   └── CheckoutForm.tsx
└── layout/
    ├── Header.tsx
    ├── BottomNav.tsx              # Mobile only
    └── Sidebar.tsx                # Desktop only

stores/                            # Zustand stores
├── ui-store.ts                    # Modals, drawers
├── cart-store.ts                  # Cart items
├── battle-store.ts                # Battle room state
└── user-store.ts                  # User preferences

lib/
├── supabase/                      # Supabase client + types
├── stripe/                        # Stripe utilities
├── api/                           # TanStack Query hooks
│   ├── use-packs.ts
│   ├── use-collection.ts
│   ├── use-orders.ts
│   └── use-battle.ts
├── gacha/                         # Gacha engine logic
│   ├── probability.ts
│   ├── provably-fair.ts
│   └── pity.ts
└── utils.ts                       # cn(), formatPrice, etc.

public/
├── models/                        # 3D .glb files
│   ├── pack-pokemon.glb
│   ├── pack-onepiece.glb
│   ├── card-blank.glb
│   └── effects/
│       ├── sparkles.glb
│       └── confetti.glb
└── images/                        # Static images
```

#### 8.2.3 Design Tokens (CSS Variables)

```css
/* app/globals.css */
@theme {
  /* Colors - Primary */
  --color-primary: #FF2D7B;
  --color-primary-hover: #E6266E;
  --color-secondary: #00D4FF;
  
  /* Colors - Background */
  --color-bg-dark: #0A0A1A;
  --color-bg-elevated: #1A0A2E;
  --color-bg-card: #1A1A24;
  
  /* Colors - Rarity */
  --color-rarity-common: #8A8A9A;
  --color-rarity-uncommon: #00E676;
  --color-rarity-rare: #2196F3;
  --color-rarity-sr: #FFD700;
  --color-rarity-ur: #9C27B0;
  --color-rarity-legendary: #FF1744;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #FF2D7B 0%, #7C3AED 100%);
  --gradient-gold: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  
  /* Fonts */
  --font-display: 'Prompt', sans-serif;
  --font-body: 'IBM Plex Sans Thai', sans-serif;
  
  /* Shadows */
  --shadow-rarity-ur: 0 0 40px rgba(156, 39, 176, 0.6);
  --shadow-rarity-legendary: 0 0 60px rgba(255, 23, 68, 0.8);
}
```

### 8.3 Backend & Database

#### 8.3.1 Supabase Architecture

```
┌─────────────────────────────────────────────────────┐
│ Supabase                                            │
├─────────────────────────────────────────────────────┤
│ PostgreSQL     → Thailand region มี                   │
│ Auth           → LINE, Google, Email                 │
│ Realtime       → Battle rooms + Live order tracking  │
│ Storage         → Card images, Pack images           │
│ Edge Functions → Gacha engine (Edge — low latency)   │
│ Vector         → Future: AI card search             │
└─────────────────────────────────────────────────────┘
```

**ทำไม Supabase Edge Functions สำหรับ Gacha?**
- Thailand region ทำให้ latency ต่ำมากสำหรับ users ในไทย
- Gacha logic ต้อง server-side เท่านั้น (ห้าม client-side)
- Edge function = ไม่ต้อง manage server

#### 8.3.2 Database Schema (Key Tables)

```sql
-- profiles (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  line_user_id TEXT UNIQUE,
  phone TEXT,
  battle_points INTEGER DEFAULT 0,
  total_packs_opened INTEGER DEFAULT 0,
  rank TEXT DEFAULT 'bronze',  -- bronze, silver, gold, platinum, diamond
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- products (Packs)
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  name_th TEXT NOT NULL,
  category TEXT NOT NULL,  -- pokemon, onepiece, naruto, blindbox
  series TEXT,
  price_satang INTEGER NOT NULL,
  card_count INTEGER NOT NULL,
  stock INTEGER DEFAULT 0,
  is_limited BOOLEAN DEFAULT FALSE,
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE
);

-- cards (Card catalog)
CREATE TABLE public.cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  name_th TEXT NOT NULL,
  rarity TEXT NOT NULL,  -- common, uncommon, rare, sr, ur, legendary
  category TEXT NOT NULL,
  image_url TEXT,
  power_level INTEGER DEFAULT 1  -- for battle system
);

-- user_cards (User's collection)
CREATE TABLE public.user_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  card_id UUID REFERENCES cards(id) ON DELETE CASCADE,
  quantity INTEGER DEFAULT 1,
  obtained_from TEXT,  -- gacha, trade, reward
  UNIQUE(user_id, card_id)
);

-- gacha_audit (Provably Fair)
CREATE TABLE public.gacha_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  product_id UUID REFERENCES products(id),
  server_seed_hash TEXT NOT NULL,  -- SHA256
  client_seed TEXT,
  random_value NUMERIC NOT NULL,  -- 0.0000 - 1.0000
  result_card_id UUID REFERENCES cards(id),
  provably_fair_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- battle_rooms
CREATE TABLE public.battle_rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_code TEXT UNIQUE NOT NULL,
  room_type TEXT NOT NULL,  -- duel, squad, tournament, freeroll
  status TEXT DEFAULT 'waiting',
  max_players INTEGER DEFAULT 2,
  entry_points INTEGER DEFAULT 0,
  winner_id UUID REFERENCES profiles(id)
);

-- leaderboard_daily
CREATE TABLE public.leaderboard_daily (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  rank INTEGER NOT NULL,
  battle_points INTEGER DEFAULT 0,
  packs_opened INTEGER DEFAULT 0,
  date DATE NOT NULL,
  UNIQUE(user_id, date)
);
```

#### 8.3.3 RLS (Row Level Security)

```sql
-- Profiles: public read, own write
CREATE POLICY "Public profiles viewable" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Orders: only owner can see
CREATE POLICY "Users view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users create own orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Collection: only owner can see
CREATE POLICY "Users view own collection" ON user_cards FOR SELECT USING (auth.uid() = user_id);

-- Battle rooms: public read, participants write
CREATE POLICY "Battle rooms are public" ON battle_rooms FOR SELECT USING (true);
CREATE POLICY "Anyone can create battle room" ON battle_rooms FOR INSERT WITH CHECK (true);
```

### 8.4 Gacha Engine (Edge Function)

```typescript
// supabase/functions/gacha-open/index.ts
// Runs at edge — low latency for Thai users

Deno.serve(async (req) => {
  const { packId, userId, clientSeed } = await req.json()
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )
  
  // 1. Get pack + card distribution
  const { data: pack } = await supabase
    .from('products')
    .select('*, product_cards(*, cards(*))')
    .eq('id', packId)
    .single()
  
  // 2. Server-side randomness (Provably Fair)
  const serverSeed = crypto.randomUUID()
  const serverSeedHash = await hash256(serverSeed)
  const randomValue = await generateSecureRandom()
  
  // 3. Select card by probability
  const card = selectCardByProbability(pack.product_cards, randomValue)
  
  // 4. Audit log
  await supabase.from('gacha_audit').insert({
    user_id: userId,
    product_id: packId,
    server_seed_hash: serverSeedHash,
    client_seed: clientSeed,
    random_value: randomValue,
    result_card_id: card.id,
  })
  
  // 5. Add to collection
  await supabase.rpc('add_card_to_collection', {
    p_user_id: userId,
    p_card_id: card.id,
    p_pack_id: packId,
  })
  
  return Response.json({
    card,
    serverSeedHash,  // Client can verify later
  })
})
```

### 8.5 Payments

#### 8.5.1 Thailand Payment Methods

| Method | Share | Fee | Settlement | เลือก |
|--------|-------|-----|------------|-------|
| **QR PromptPay** | 50-60% | 1.5-2% | T+1 | ✅ Primary |
| LINE Pay | 20-25% | 2% | T+1 | ✅ Secondary |
| Credit Card | 15-20% | 3.4% | T+2 | ❌ เลี่ยง |
| True Money | 5% | 3% | T+1 | ❌ ไม่แนะนำ |

**ทำไม Stripe?**
- Unified API สำหรับ PromptPay + Card + LINE Pay
- Dashboard ดี, dispute handling มีให้
- มี Thai entity
- ถ้าต้องการลด fee เป็น 1.5% ใช้ 2C2P แทนได้

#### 8.5.2 Payment Flow

```
User clicks "ซื้อ"
       │
       ▼
Create Stripe PaymentIntent (PromptPay)
       │
       ▼
Show QR code to user
       │
       ▼
User scans with mobile banking app
       │
       ▼
Stripe webhook: payment_intent.succeeded
       │
       ▼
Supabase Edge: mark order paid
       │
       ▼
Supabase Edge: trigger gacha reveal OR fulfillment
```

### 8.6 Real-time (Battle Rooms)

```typescript
// use-battle-room.ts
const channel = supabase
  .channel(`battle:${roomId}`)
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'battle_rooms',
    filter: `id=eq.${roomId}`
  }, handleRoomUpdate)
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'battle_participants'
  }, handlePlayerUpdate)
  .broadcast('pack_result', {
    event: 'pack_opened'
  }, handlePackResult)
  .subscribe()
```

### 8.7 Deployment & Infrastructure

```
┌─────────────────────────────────────────────────────────────────┐
│ DEPLOYMENT ARCHITECTURE                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Cloudflare (CDN + DDoS)                                          │
│       │                                                           │
│       ▼                                                           │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              Vercel (Frontend + Edge Middleware)           │  │
│  │  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐  │  │
│  │  │ Landing (SSG) │  │ Shop (SSR)     │  │ Reveal (CSR) │  │  │
│  │  │ Collection    │  │ Battle (SSR+WS)│  │ 3D Canvas    │  │  │
│  │  └────────────────┘  └────────────────┘  └──────────────┘  │  │
│  └────────────────────────────────────────────────────────────┘  │
│       │                                                           │
│       ▼                                                           │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              Supabase                                        │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐  │  │
│  │  │ Postgres │  │ Auth     │  │ Realtime  │  │ Edge FN │  │  │
│  │  │ Thailand │  │ LINE     │  │ Battle   │  │ Gacha   │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └─────────┘  │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**ค่าใช้จ่ายต่อเดือน (เริ่มต้น):**

| Service | Plan | Cost |
|---|---|---|
| Vercel | Pro | ฿700 ($20) |
| Supabase | Pro | ฿875 ($25) |
| Cloudflare | Free | ฿0 |
| Sentry | Free | ฿0 |
| Domain (.gg) | Annual | ฿430 ($12/yr) |
| **รวม/เดือน** | | **฿1,575 ($45)** |

> 💡 ถ้างบจำกัด: Supabase Free (500MB) + Vercel Free = **฿430/เดือน** (domain เท่านั้น)

### 8.8 Monitoring

```typescript
// Sentry - Error tracking
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
})

// Key Metrics
const metrics = {
  LCP: '< 2.5s',           // Largest Contentful Paint
  FID: '< 100ms',           // First Input Delay
  CLS: '< 0.1',             // Cumulative Layout Shift
  packOpenTime: '< 3s',      // Time from click to reveal
  cardRevealTime: '< 1s',   // Card animation
  battleSyncTime: '< 500ms' // Realtime sync
}
```

---

**หมายเหตุ:** รายละเอียดเต็มของ Tech Stack, Code Examples, API Spec, Database Schema ทั้งหมด อยู่ใน [gachago-tech-stack.md](./gachago-tech-stack.md)

---

## 9. Gacha Engine

### 9.1 Odds Structure

#### 9.1.1 Per Category/Rarity Tables

**Pokemon Cards:**

| Rarity | Symbol | Base Rate | With Pity |
|---|---|---|---|
| Common | C | 70% | 70% |
| Uncommon | UC | 25% | 25% |
| Rare | R | 4% | 4% |
| Ultra Rare | UR | 0.8% | 0.8% |
| Full Art / Rainbow | FA/RR | 0.15% | 0.15% |
| VMAX / VSTAR | V | 0.05% | 0.05% |

**One Piece TCG:**

| Rarity | Symbol | Base Rate | With Pity |
|---|---|---|---|
| Common | C | 65% | 65% |
| Uncommon | UC | 25% | 25% |
| Rare | R | 7% | 7% |
| Super Rare | SR | 2% | 2% |
| Secret Rare | SCR | 0.5% | 0.5% |
| Leader | L | 0.5% | 0.5% |

**Blind Box (Sumikko Gurashi):**

| Rarity | Rate |
|---|---|
| Regular (12 types) | ~8.3% each |
| Surprise | 1 in 144 |

#### 9.1.2 Pity System

**Pity Rules:**

| Category | Pity Condition | Pity Reward |
|---|---|---|
| Pokemon | ไม่ได้ Rare+ 10 packs ติดต่อกัน | Guaranteed Rare+ in next pack |
| One Piece | ไม่ได้ Rare+ 10 packs ติดต่อกัน | Guaranteed Rare+ in next pack |
| Blind Box | ไม่ได้ Limited 20 boxes ติดต่อกัน | Guaranteed Limited in next box |

**Pity Implementation:**

```typescript
// Check pity before random
const pityKey = `pity_${userId}_${category}`;
const pityCount = await redis.get(pityKey);

if (pityCount >= 10) {
  // Force Rare+ pull
  result = weightedRandom(rarePlusCards, weights);
  await redis.set(pityKey, 0);
} else {
  // Normal random
  result = weightedRandom(allCards, weights);
  
  // Check result rarity
  if (result.rarity === 'C' || result.rarity === 'UC') {
    await redis.incr(pityKey);
  } else {
    await redis.set(pityKey, 0);
  }
}
```

### 9.2 Technical Implementation

#### 9.2.1 Server-side Random

**Flow:**

```
1. User clicks "Open Pack"
2. Frontend calls /api/gacha/open with order_id
3. Backend checks:
   - User owns this pack (not already opened)
   - Payment is confirmed
   - Not a duplicate request (idempotency)
4. Backend generates random result:
   a. Generate random seed (crypto.randomBytes)
   b. Use seed to pick card based on odds table
   c. Store result in gacha_results table
5. Return result to frontend
6. Frontend plays 3D animation showing the result
7. After animation, frontend calls /api/gacha/verify
8. Backend marks result as "revealed"
```

**Random Generation Code:**

```typescript
// app/api/gacha/open/route.ts
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
  const { orderId, userId } = await request.json();
  
  // 1. Verify user owns this unopened pack
  const { data: order } = await supabase
    .from('orders')
    .select('*, order_items(*, products(*))')
    .eq('id', orderId)
    .eq('user_id', userId)
    .single();
  
  if (!order || order.gacha_opened) {
    return Response.json({ error: 'Invalid order' }, { status: 400 });
  }
  
  // 2. Generate random seed
  const seed = crypto.randomBytes(32).toString('hex');
  
  // 3. Determine rarity using weighted random
  const rarity = weightedRandom([
    { rarity: 'C', weight: 70 },
    { rarity: 'UC', weight: 25 },
    { rarity: 'R', weight: 4 },
    { rarity: 'UR', weight: 0.8 },
    { rarity: 'V', weight: 0.05 },
  ]);
  
  // 4. Pick random card from that rarity pool
  const { data: card } = await supabase
    .from('cards')
    .select('*')
    .eq('category', order.order_items[0].products.category)
    .eq('rarity', rarity)
    .order('RANDOM()', { ascending: false })
    .limit(1)
    .single();
  
  // 5. Store result
  const { data: result } = await supabase
    .from('gacha_results')
    .insert({
      order_id: orderId,
      user_id: userId,
      card_id: card.id,
      rarity,
      random_seed: seed,
      verified: false,
    })
    .select()
    .single();
  
  // 6. Mark order as gacha_opened
  await supabase
    .from('orders')
    .update({ gacha_opened: true })
    .eq('id', orderId);
  
  return Response.json({ resultId: result.id, card });
}
```

#### 9.2.2 Verification Page

**Verification Endpoint:**

```typescript
// app/api/gacha/verify/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const resultId = searchParams.get('resultId');
  
  const { data: result } = await supabase
    .from('gacha_results')
    .select('*, cards(*)')
    .eq('id', resultId)
    .single();
  
  return Response.json({
    resultId: result.id,
    cardId: result.card_id,
    cardName: result.cards.name_th,
    rarity: result.rarity,
    seed: result.random_seed,
    verified: result.verified,
    timestamp: result.created_at,
  });
}
```

**Verification Page UI:**

```
┌─────────────────────────────────────────────┐
│         ✅ GACHA RESULT VERIFIED            │
├─────────────────────────────────────────────┤
│                                             │
│  Result ID: abc123...                       │
│  Card: Charizard VMAX                       │
│  Rarity: VMAX                              │
│  Category: Pokemon                         │
│  Seed: 0xdef456...                         │
│  Timestamp: 2024-04-30 10:30:00 UTC        │
│                                             │
│  ✓ This result was generated server-side   │
│  ✓ Random seed is cryptographically secure │
│  ✓ Result cannot be modified after reveal   │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 10. Legal & Compliance (Thailand)

### 10.1 Required Licenses

#### 10.1.1 พ.ร.บ. ธุรกิจสินค้าจากการสุ่ม พ.ศ. 2565 (DBD)

**ความเป็นมา:**

พระราชบัญญัติธุรกิจสินค้าจากการสุ่ม พ.ศ. 2565 มีผลบังคับใช้เมื่อวันที่ 25 พฤษภาคม 2565 โดยกำหนดให้ผู้ประกอบธุรกิจสินค้าจากการสุ่มต้องได้รับใบอนุญาตจากกรมพัฒนาธุรกิจการค้า (DBD) ก่อนดำเนินกิจการ

**คำจำกัดความ:**

> "สินค้าจากการสุ่ม" หมายความว่า สินค้าที่ผู้ประกอบธุรกิจจัดให้ผู้บริโภคได้รับสินค้าหรือบริการโดยผลของการสุ่ม ไม่ว่าจะเป็นการสุ่มด้วยเครื่องจักรหรือวิธีอื่นใด และผู้บริโภคไม่ทราบผลที่จะได้รับก่อนชำระค่าสินค้าหรือบริการ

**ใบอนุญาตที่ต้องได้รับ:**

| ประเภท | รายละเอียด |
|---|---|
| **ใบอนุญาตประกอบธุรกิจสินค้าจากการสุ่ม** | ยื่นขอที่ DBD |
| **ประเภทใบอนุญาต** | ใบอนุญาตประเภทที่ 1 (สินค้าจากการสุ่มในลักษณะเครื่องจักร) หรือ ประเภทที่ 2 (สินค้าจากการสุ่มในลักษณะอื่น) |
| **ระยะเวลาใบอนุญาต** | 5 ปี (ต่ออายุได้) |

**ข้อกำหนดที่ต้องปฏิบัติ:**

1. **แสดงข้อมูลให้ผู้บริโภคทราบ** — อัตราส่วน ประเภท ราคา ของสินค้าที่จะได้รับ
2. **ระบบการสุ่มต้องเป็นธรรม** — ใช้ระบบคอมพิวเตอร์ที่ได้มาตรฐาน
3. **มีมาตรการคุ้มครองผู้บริโภค** — นโยบายคืนเงิน เรียกร้องสินไหมทดแทน
4. **รายงานต่อ DBD** — รายงานผลการดำเนินงานทุกปี

**ค่าธรรมเนียม:**

| รายการ | ค่าธรรมเนียม |
|---|---|
| ค่าธรรมเนียมใบอนุญาต | ฿10,000-50,000 (ขึ้นอยู่กับประเภท) |
| ค่าต่ออายุใบอนุญาต | ฿5,000-25,000 |

**กำหนดการยื่นขอ:**

- ระยะเวลาพิจารณา: 30-60 วัน
- ควรยื่นขอก่อนเริ่มดำเนินการ 90 วัน

#### 10.1.2 PDPA Compliance (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล)

**ข้อกำหนด PDPA ที่ต้องปฏิบัติ:**

| หมวด | ข้อกำหนด |
|---|---|
| **การเก็บข้อมูล** | ต้องได้รับความยินยอม (Consent) จากเจ้าของข้อมูลก่อน |
| **วัตถุประสงค์** | แจ้งวัตถุประสงค์ในการเก็บข้อมูลให้เจ้าของข้อมูลทราบ |
| **การใช้ข้อมูล** | ใช้ข้อมูลเท่าที่จำเป็น และตามวัตถุประสงค์ที่แจ้งไว้ |
| **การเก็บรักษา** | เก็บรักษาข้อมูลอย่างปลอดภัย ไม่เก็บเกินจำเป็น |
| **สิทธิ์เจ้าของข้อมูล** | เจ้าของข้อมูลมีสิทธิ์เข้าถึง แก้ไข ลบข้อมูลได้ |
| **การแจ้งเหตุละเมิด** | ต้องแจ้ง สพม. ภายใน 72 ชม. หากเกิดการละเมิด |

**สิ่งที่ต้องมี:**

1. **Privacy Policy** — นโยบายความเป็นส่วนตัวที่เข้าใจง่าย
2. **Consent Form** — แบบฟอร์มขอความยินยอม
3. **Data Protection Officer (DPO)** — ผู้รับผิดชอบข้อมูลส่วนบุคคล (หากจำเป็น)
4. **ระบบจัดการคำขอ** — รองรับสิทธิ์เจ้าของข้อมูล

#### 10.1.3 ใบอนุญาตอื่นที่อาจเกี่ยวข้อง

| ใบอนุญาต | ความจำเป็น | หน่วยงาน |
|---|---|---|
| ใบอนุญาตประกอบธุรกิจ E-commerce | ไม่จำเป็น (มีนิติบุคคลแล้ว) | — |
| ใบอนุญาตขนส่ง | ไม่จำเป็น (ใช้ Courier ภายนอก) | — |
| ใบอนุญาตส่งเสริมการค้า | หากมีโปรโมชัน | กรมการค้าภายใน |
| VAT Registration | หากรายได้เกิน ฿1.8 ล้าน/ปี | กรมสรรพากร |

### 10.2 IP/Legal Strategy

#### 10.2.1 Official Licensed Products Only

**นโยบาย:**

Gachago จะจำหน่ายเฉพาะสินค้าที่ได้รับลิขสิทธิ์อย่างถูกต้องจากเจ้าของ IP เท่านั้น

**IP ที่จะจำหน่าย:**

| IP | เจ้าของ | สิทธิ์ที่มี |
|---|---|---|
| Pokemon TCG | The Pokemon Company / Magic find | Resale Rights จาก Distributor |
| One Piece TCG | Bandai / Bandai Namco | Resale Rights จาก Distributor |
| Dragon Ball TCG | Bandai / Shueisha | Resale Rights จาก Distributor |
| Naruto/Boruto TCG | Shueisha / Bandai | Resale Rights จาก Distributor |
| Sumikko Gurashi | San-X | Resale Rights จาก Distributor |
| Sanrio Characters | Sanrio | Resale Rights จาก Distributor |

#### 10.2.2 Authorized Distributors

**รายชื่อ Distributor ที่ได้รับการยืนยัน:**

| Distributor | IP ที่จัดจำหน่าย | Website |
|---|---|---|
| **Banpresto Thailand** | Dragon Ball, Naruto | banpresto.co.th |
| **Magic Find** | Pokemon TCG | magicfind.com |
| **Bandai Namco Thailand** | One Piece TCG | bandainamcoth.com |
| **Gashapon World** (ตัวอย่าง) | Sanrio, Sumikko | gashaponworld.co.th |

**เอกสารที่ต้องเก็บรักษา:**

- สัญญาอนุญาตจำหน่าย (Resale Agreement)
- ใบรับรองการเป็นตัวแทนจำหน่าย (Authorized Dealer Certificate)
- ใบเสร็จ/Invoice จาก Distributor
- ภาพสินค้าที่ได้รับอนุญาตให้ใช้

#### 10.2.3 Anti-Counterfeit Policy

**มาตรการป้องกันสินค้าปลอม:**

1. **ซื้อจากแหล่งที่ได้รับการรับรอง** — สั่งซื้อจาก Distributor ที่ได้รับการยืนยันเท่านั้น
2. **ตรวจสอบสินค้า** — ตรวจสอบความถูกต้องของสินค้าทุกชิ้นก่อนจัดส่ง
3. **เก็บเอกสาร** — เก็บหลักฐานการซื้อขายทุกฉบับ
4. **แจ้งเตือน** — หากพบสินค้าปลอม แจ้งเจ้าของ IP ทันที

---

## 11. Financial Model

### 11.1 Startup Costs

**รายละเอียดต้นทุนเริ่มต้น:**

| หมวด | รายการ | ฿ (ต่ำสุด) | ฿ (สูงสุด) |
|---|---|---|---|
| **Platform Development** | | | |
| | Website + 3D System | 300,000 | 500,000 |
| | Mobile Optimization | 50,000 | 100,000 |
| | Payment Integration | 30,000 | 50,000 |
| | LINE Integration | 20,000 | 30,000 |
| | QA + Testing | 30,000 | 50,000 |
| | **Subtotal Dev** | **430,000** | **730,000** |
| **Legal/Compliance** | | | |
| | DBD License | 50,000 | 100,000 |
| | Legal Advisor | 30,000 | 50,000 |
| | PDPA Compliance | 20,000 | 30,000 |
| | **Subtotal Legal** | **100,000** | **180,000** |
| **Marketing Launch** | | | |
| | KOL Partnerships | 100,000 | 200,000 |
| | Social Media Ads | 50,000 | 100,000 |
| | Launch Campaign | 50,000 | 100,000 |
| | Content Creation | 30,000 | 50,000 |
| | **Subtotal Marketing** | **230,000** | **450,000** |
| **Operations** | | | |
| | Inventory Initial | 0* | 0* |
| | Warehouse Setup | 0** | 0** |
| | **Subtotal Operations** | **0** | **0** |
| **Contingency (10%)** | | 70,000 | 140,000 |
| **TOTAL STARTUP** | | **830,000** | **1,500,000** |

*หมายเหตุ: ต้นทุน Inventory และ Warehouse อยู่ในทีมที่มีอยู่แล้ว จึงไม่นับรวม

**ทำไมต้นทุนต่ำกว่าประมาณการเดิม:**

1. **ไม่ต้องซื้อ Inventory ใหม่** — มี Stock อยู่แล้ว
2. **ไม่ต้องสร้าง Fulfillment ใหม่** — ทีม Fulfillment มีอยู่แล้ว
3. **ใช้ Supabase แทน Backend แยก** — ลดค่า Server
4. **Template/Framework พร้อม** — Next.js เป็น Open Source

### 11.2 Unit Economics

**ต้นทุนและ Margin ต่อ Pack:**

| Pack Type | Price | COGS (35%) | Payment Fee | Shipping | Platform | Net Margin |
|---|---|---|---|---|---|---|
| Starter (฿200) | ฿200 | ฿70 | ฿5 | ฿35 | ฿5 | ฿90 (45%) |
| Bronze (฿300) | ฿300 | ฿105 | ฿6.5 | ฿40 | ฿8 | ฿140.5 (47%) |
| Silver (฿500) | ฿500 | ฿175 | ฿9.5 | ฿40 | ฿12 | ฿263.5 (53%) |
| Gold (฿800) | ฿800 | ฿280 | ฿14 | ฿45 | ฿20 | ฿441 (55%) |
| Diamond (฿1,500) | ฿1,500 | ฿525 | ฿24.5 | ฿50 | ฿35 | ฿865.5 (58%) |

**Average Unit Economics:**

| Metric | ฿/Pack |
|---|---|
| Average Pack Price | ฿300-400 |
| Average COGS | 30-40% |
| Average Payment Fee | 1.5-2% |
| Average Shipping | ฿35-50 |
| Average Net Margin | 40-50% |

### 11.3 Revenue Projections

**คาดการณ์รายได้:**

| เดือน | ผู้ใช้ใหม่ | MAU | Packs/เดือน | รายได้/เดือน |
|---|---|---|---|---|
| 3 | 5,000 | 2,000 | 1.5 | ฿600,000 |
| 6 | 15,000 | 8,000 | 1.25 | ฿2,500,000 |
| 9 | 35,000 | 20,000 | 1.5 | ฿7,500,000 |
| 12 | 65,000 | 35,000 | 1.75 | ฿15,000,000 |
| Y2 Q1 | 100,000 | 60,000 | 2.0 | ฿30,000,000 |
| Y2 Q4 | 200,000 | 100,000 | 2.5 | ฿60,000,000 |
| **Year 1 Total** | — | — | ~100,000 | **฿25,000,000** |
| **Year 2 Total** | — | — | ~500,000 | **฿120,000,000** |

**สมมติฐาน:**

- Average Pack Price: ฿250
- Growth Rate: 20-30% ต่อเดือนในปีแรก
- Retention Rate: 60% (MAU/Registered Users)
- Average Packs per User per Month: 1.5-2.5

### 11.4 Break-even Analysis

**ต้นทุนคงที่ต่อเดือน:**

| รายการ | ฿/เดือน |
|---|---|
| Hosting (Vercel) | 5,000 |
| Supabase | 3,000 |
| Customer Service | 30,000 |
| Marketing | 50,000 |
| Legal/Compliance | 10,000 |
| Admin | 20,000 |
| **รวม** | **118,000** |

**Break-even Calculation:**

| Pack Type | Net Margin | Packs ที่ต้องขาย/เดือน |
|---|---|---|
| Starter (฿90) | ฿90 | 1,400 |
| Average (฿140) | ฿140 | 850 |
| Mixed (฿150 avg) | ฿150 | 800 |

**Break-even Point:** ~800-1,400 packs/month

**Timeline:**

- เดือน 1-2: ขายได้ 300-500 packs (ขาดทุน)
- เดือน 3-4: ขายได้ 1,000-2,000 packs (ใกล้ Break-even)
- เดือน 5+: ขายได้ 2,000+ packs (กำไร)

### 11.5 Profit & Loss Projection (Year 1)

**P&L Statement:**

| รายการ | เดือน 1-3 | เดือน 4-6 | เดือน 7-9 | เดือน 10-12 |
|---|---|---|---|---|
| **รายได้** | | | | |
| Pack Sales | 450,000 | 1,875,000 | 5,625,000 | 11,250,000 |
| Shipping Fees | 60,000 | 250,000 | 750,000 | 1,500,000 |
| Other | 15,000 | 62,500 | 187,500 | 375,000 |
| **รวมรายได้** | **525,000** | **2,187,500** | **6,562,500** | **13,125,000** |
| **ต้นทุนขาย** | | | | |
| COGS | 180,000 | 750,000 | 2,250,000 | 4,500,000 |
| Payment Fees | 10,000 | 42,000 | 126,000 | 252,000 |
| Shipping Cost | 65,000 | 270,000 | 810,000 | 1,620,000 |
| **รวมต้นทุนขาย** | **255,000** | **1,062,000** | **3,186,000** | **6,372,000** |
| **Gross Profit** | **270,000** | **1,125,500** | **3,376,500** | **6,753,000** |
| **ค่าใช้จ่าย** | | | | |
| Marketing | 150,000 | 250,000 | 300,000 | 400,000 |
| Ops & CS | 100,000 | 120,000 | 150,000 | 180,000 |
| Tech & Hosting | 20,000 | 20,000 | 25,000 | 30,000 |
| Admin | 50,000 | 60,000 | 70,000 | 80,000 |
| **รวมค่าใช้จ่าย** | **320,000** | **450,000** | **545,000** | **690,000** |
| **EBITDA** | **(50,000)** | **675,500** | **2,831,500** | **6,063,000** |
| **EBITDA Margin** | -10% | 31% | 43% | 46% |

---

## 10.5 Leaderboard System

### 10.5.1 Overview

ระบบ Leaderboard เป็นฟีเจอร์ที่เพิ่มความตื่นเต้นและแรงจูงใจให้ผู้ใช้ในการสะสมการ์ดและเข้าร่วม Battle Opening ระบบแบ่งออกเป็น 3 ประเภทหลัก:

### 10.5.2 Collection Leaderboard

|| ประเภท | รายละเอียด | Points ||
|---|---|---|---|
| **Cards Owned** | จำนวนการ์ดทั้งหมดในคอลเลกชัน | +1 ต่อการ์ด |
| **Set Completion** | เปอร์เซ็นต์การ์ดครบชุด | +10 ต่อ 1% |
| **UR Count** | จำนวน Ultra Rare ที่สะสมได้ | +50 ต่อใบ |
| **L Count** | จำนวน Legendary ที่สะสมได้ | +100 ต่อใบ |

### 10.5.3 Battle Leaderboard

|| ประเภท | รายละเอียด ||
|---|---|---|
| **Battle Points** | คะแนนรวมจากการเข้าร่วม Battle | ดูด้านล่าง |
| **Weekly BP** | คะแนน Battle ประจำสัปดาห์ | รีเซ็ตทุกวันจันทร์ |
| **Monthly BP** | คะแนน Battle ประจำเดือน | รีเซ็ตทุกเดือน |
| **All-time BP** | คะแนน Battle ตลอดกาล | ไม่รีเซ็ต |

### 10.5.4 Rarity Leaderboard

|| ประเภท | Points ||
|---|---|---|
| **UR Count** | จำนวน Ultra Rare ที่สะสมได้ | +50 ต่อใบ |
| **L Count** | จำนวน Legendary ที่สะสมได้ | +100 ต่อใบ |
| **Luckiest Player** | อัตราส่วน UR/L ต่อจำนวน Pack ที่ซื้อ | คำนวณพิเศษ |

### 10.5.5 Battle Points System

ระบบคะแนน Battle Points ออกแบบมาเพื่อให้รางวัลผู้เล่นที่เข้าร่วม Battle Opening อย่างสม่ำเสมอ โดยไม่มีการใช้เงินจริงในการซื้อคะแนน คะแนนทั้งหมดได้มาจากการเล่นและรางวัลจาก Battle Opening เท่านั้น

|| Action | Points ||
|---|---|---|
| **JOIN** | เข้าร่วม Battle Room | +10 |
| **WIN** | ชนะ Battle | +50 |
| **TOP_3** | เข้าสู่ Top 3 | +25 |
| **PLAY** | เล่น Battle (ต่อครั้ง) | +5 |
| **STREAK_BONUS** | เล่นต่อเนื่อง 3 วัน | +10 |

### 10.5.6 Leaderboard Types

|| ประเภท | ระยะเวลา | รางวัล ||
|---|---|---|---|
| **Daily** | รีเซ็ตทุกวัน เที่ยงคืน | Badge ประจำวัน |
| **Weekly** | รีเซ็ตทุกวันจันทร์ | Frame + 500 BP |
| **Monthly** | รีเซ็ตทุกเดือน | Frame + Title + 2000 BP |
| **All-time** | ไม่รีเซ็ต | Exclusive Title + Background |
| **Season** | ทุก 3 เดือน | Limited Badge + Physical Card |

### 10.5.7 Profile Display

ผู้ใช้สามารถแสดงผลงานบนโปรไฟล์ได้:

|| ฟีเจอร์ | รายละเอียด ||
|---|---|---|
| **Rank** | อันดับปัจจุบันในแต่ละ Leaderboard | |
| **Win Rate** | สัดส่วนชนะต่อเล่นทั้งหมด | |
| **Streak** | จำนวนวันที่เล่นต่อเนื่อง | |
| **Badges** | เข็มกลัดที่ได้รับ | แสดงได้สูงสุด 5 อันดับ |
| **Battle Stats** | สถิติ Battle ทั้งหมด | Win/Loss/Top3 |

### 10.5.8 Cosmetic Rewards

ผู้เล่นได้รับรางวัลตามอันดับและประเภท Leaderboard:

**Frames (กรอบโปรไฟล์):**

|| อันดับ | Frame ||
|---|---|---|
| #1 | Gold Frame |
| #2-5 | Silver Frame |
| #6-20 | Bronze Frame |
| Top 100 | Basic Frame |

**Titles (ชื่อที่แสดง):**

|| เงื่อนไข | Title ||
|---|---|---|
| อันดับ 1 All-time | "Legend" |
| Top 10 All-time | "Champion" |
| Top 50 All-time | "Master" |
| เล่น 100+ Battles | "Battle Master" |
| ชนะ 50+ Battles | "Champion" |
| เปิด UR 100+ ใบ | "UR Hunter" |

**Badges (เข็มกลัด):**

|| Badge | เงื่อนไข ||
|---|---|---|
| 🔥 On Fire | ชนะต่อเนื่อง 5 ครั้ง |
| ⭐ First Blood | ชนะ Battle แรก |
| 👑 Champion | อันดับ 1 Weekly |
| 🎯 Lucky | เปิด UR ใน 3 Pack แรก |
| 💎 Collection Complete | ครบทุกการ์ดในชุด |

**Backgrounds (พื้นหลังโปรไฟล์):**

|| Background | เงื่อนไข ||
|---|---|---|
| Gold Gradient | อันดับ 1 Season |
| Galaxy | Top 10 Season |
| Forest | เล่นครบ 30 วัน |
| Ocean | เข้าร่วม 50+ Battles |

### 10.5.9 Implementation Notes

**Supabase + Redis Integration:**

|| องค์ประกอบ | รายละเอียด ||
|---|---|---|
| **Supabase** | เก็บข้อมูล User Profiles, Collection Stats, Battle History | |
| **Redis** | Cache Leaderboard Rankings, Real-time Updates | |
| **Sync Strategy** | Sync กับ Supabase ทุก 5 นาที + Event-driven updates | |
| **Fallback** | หาก Redis ล่ม ใช้ Supabase เป็น Backup | |
| **Indexes** | สร้าง Index บน user_id, category, timestamp สำหรับ Query ที่เร็ว | |

---

## 10.6 Battle Opening System

### 10.6.1 Concept Overview

**Battle Opening** คือฟีเจอร์ที่ผู้เล่นหลายคน (2-10 คน) เข้าร่วมห้องเดียวกัน ทุกคนซื้อ Pack ชนิดเดียวกัน และเปิดพร้อมกันแบบ Real-time โดยผู้ที่ได้คะแนนรวมสูงสุดจะได้รับรางวัล Cosmetic เท่านั้น

### 10.6.2 Battle Room Types

|| ประเภท | จำนวนผู้เล่น | ราคา Pack | รางวัล Winner ||
|---|---|---|---|---|
| **1v1 Duel** | 2 | ฿200-500 | +100 BP |
| **Squad Battle** | 4 | ฿300-800 | +150 BP |
| **Tournament** | 8-16 | ฿500-1,500 | +300 BP |
| **Free Roll** | 2-10 | ฟรี (เฉพาะ Welcome Pack) | Badge |

### 10.6.3 How to Determine Winner

คำนวณคะแนนจากการ์ดที่เปิดได้:

|| Rarity | Points ||
|---|---|---|
| **UR (Ultra Rare)** | 100 คะแนน |
| **L (Legendary)** | 50 คะแนน |
| **R (Rare)** | 10 คะแนน |
| **C (Common)** | 1 คะแนน |

**ตัวอย่าง:** เปิดได้ 2 UR + 1 L + 3 R + 4 C = (2×100) + (1×50) + (3×10) + (4×1) = **274 คะแนน**

### 10.6.4 Rewards (Cosmetics Only — NO Real Money)

**Battle Points:**

|| อันดับ | Battle Points ||
|---|---|---|
| #1 (Winner) | +100 |
| #2 | +75 |
| #3 | +50 |
| #4-10 | +25 |

**Badges (เข็มกลัด):**

|| Badge | เงื่อนไข ||
|---|---|---|
| ⭐ First Blood | ชนะ Battle แรก |
| 🔥 On Fire | ชนะต่อเนื่อง 3 ครั้ง |
| 👑 Champion | ชนะ Tournament |
| 🏆 Battle Master | ชนะ 50 Battles |
| 💎 Rare Opener | เปิด UR ใน Battle |

**Profile Frames:**

|| Frame | เงื่อนไข ||
|---|---|---|
| 🏅 Gold Frame | ชนะ 10+ Battles |
| 🥈 Silver Frame | ชนะ 5+ Battles |
| 🥉 Bronze Frame | ชนะ 1+ Battle |

**Titles:**

|| Title | เงื่อนไข ||
|---|---|---|
| Battle Master | ชนะ 50 Battles |
| Legend | อันดับ 1 All-time BP |
| Champion | ชนะ Tournament |
| Warrior | เข้าร่วม 100+ Battles |

**Exclusive Cards:**

|| Card | เงื่อนไข | สถานะ ||
|---|---|---|---|
| Battle Master Gold | ชนะ 100 Battles | Non-transferable |
| Champion Silver | ชนะ Tournament 10 ครั้ง | Non-transferable |
| Legend Bronze | อันดับ 1 Season 3 ครั้ง | Non-transferable |

### 10.6.5 Battle Points System Explained

ระบบ Battle Points ออกแบบมาเพื่อให้รางวัลผู้เล่นที่เข้าร่วม Battle Opening อย่างสม่ำเสมอ:

|| Action | Points | รายละเอียด ||
|---|---|---|---|
| **JOIN** | +10 | เข้าร่วม Battle Room |
| **WIN** | +50 | ชนะ Battle |
| **TOP_3** | +25 | เข้าอันดับ 3 อันดับแรก |
| **PLAY** | +5 | เล่น Battle (ต่อครั้ง) |
| **STREAK_BONUS** | +10 | เล่นต่อเนื่อง 3 วัน |

### 10.6.6 No Real Money — All Cosmetics

**สำคัญ:** Battle Opening ไม่มีการใช้เงินจริงในการแข่งขัน คะแนนทั้งหมดได้มาจาก:

- การเข้าร่วม Battle (ไม่ใช่การซื้อ)
- ผลการเปิด Pack (ซึ่งผู้เล่นซื้อเองอยู่แล้ว)
- รางวัลจากการแข่งขัน

### 10.6.7 Legal Compliance Explanation

**เหตุผลที่ Battle Opening ไม่ต้องได้รับใบอนุญาต พ.ร.บ. ธุรกิจสินค้าจากการสุ่ม:**

1. **ไม่มีการสุ่มในการแข่งขัน** — การสุ่มเกิดขึ้นเมื่อซื้อ Pack (ซึ่งต้องมีใบอนุญาตอยู่แล้ว)
2. **ไม่มีการพนัน** — ผู้เล่นไม่ได้วางเดิมพันด้วยเงินจริง
3. **รางวัลเป็น Cosmetic เท่านั้น** — ไม่มีมูลค่าเงิน
4. **คะแนนได้มาจากการเล่น** — ไม่สามารถซื้อได้ด้วยเงินจริง

### 10.6.8 Technical Requirements (WebSocket for Real-time Sync)

|| องค์ประกอบ | รายละเอียด ||
|---|---|---|
| **Protocol** | WebSocket (Supabase Realtime) |
| **Events** | `player_joined`, `battle_started`, `card_revealed`, `battle_ended`, `score_updated` |
| **Sync** | ทุกคนเห็นการ์ดเปิดพร้อมกัน |
| **Latency Target** | < 100ms |
| **Fallback** | Polling ทุก 1 วินาที หาก WebSocket ล่ม |

---

## 12. Roadmap

### 12.1 Phase 1 (เดือน 0-1): Foundation

**เป้าหมาย:** วางรากฐานทางกฎหมายและเทคนิค

| กิจกรรม | รายละเอียด | ผู้รับผิดชอบ |
|---|---|---|
| **DBD License Application** | ยื่นขอใบอนุญาต พ.ร.บ. ธุรกิจสินค้าจากการสุ่ม | Legal Team |
| **Company Structure Setup** | จดทะเบียนบริษัท, เปิดบัญชีธนาคาร | Finance |
| **Platform Architecture** | ออกแบบ System Architecture, Database Schema | Tech Lead |
| **Supplier Agreements** | ทำสัญญากับ Distributor ของ Pokemon, One Piece | Business Dev |
| **Supabase Setup** | สร้าง Project, Database, Auth | Backend Dev |
| **Initial Inventory Order** | สั่งซื้อ Stock Pokemon และ One Piece สำหรับ Launch | Operations |
| **LINE Developer Account** | สมัคร LINE Login, LINE Official Account, LINE Notify | Tech Lead |

**Milestone:** ใบอนุญาต DBD ได้รับการอนุมัติ, Platform Architecture พร้อม

### 12.2 Phase 2 (เดือน 3-4): Leaderboard System

**เป้าหมาย:** เพิ่มระบบ Leaderboard เพื่อเพิ่ม Engagement

|| กิจกรรม | รายละเอียด | ผู้รับผิดชอบ ||
|---|---|---|---|
| **Redis Setup** | ติดตั้งและ Config Redis สำหรับ Leaderboard | Backend Dev |
| **Collection Leaderboard** | Cards Owned, Set Completion, UR/L Count | Backend Dev |
| **Battle Leaderboard** | Battle Points, Weekly/Monthly/All-time | Backend Dev |
| **Rarity Leaderboard** | UR Count, L Count, Luckiest Player | Backend Dev |
| **Leaderboard API** | Endpoints สำหรับดึงข้อมูล Ranking | Backend Dev |
| **Profile Display** | แสดง Rank, Win Rate, Streak, Badges | Frontend Dev |
| **Cosmetic Rewards** | Frames, Titles, Badges, Backgrounds | Frontend Dev |
| **Leaderboard UI** | หน้าแสดง Ranking พร้อม Filter | Frontend Dev |

**Milestone:** Leaderboard พร้อมใช้งาน, Redis Cache Active

### 12.3 Phase 3 (เดือน 5-6): Battle Opening System

**เป้าหมาย:** เพิ่มฟีเจอร์ Battle Opening สำหรับ Real-time Competition

|| กิจกรรม | รายละเอียด | ผู้รับผิดชอบ ||
|---|---|---|---|
| **WebSocket Setup** | Supabase Realtime สำหรับ Real-time Events | Backend Dev |
| **Battle Room Types** | 1v1 Duel, Squad Battle, Tournament, Free Roll | Backend Dev |
| **Battle Points System** | ระบบคะแนนและการคำนวณผู้ชนะ | Backend Dev |
| **Real-time Card Reveal** | Sync การเปิด Pack ระหว่างผู้เล่น | Frontend Dev |
| **Battle UI** | ห้อง Battle, Scoreboard, Animation | Frontend Dev |
| **Reward System** | Badges, Frames, Titles, Exclusive Cards | Backend Dev |
| **Legal Review** | ตรวจสอบว่าไม่เข้าข่าย พ.ร.บ. ธุรกิจสินค้าจากการสุ่ม | Legal |

**Milestone:** Battle Opening พร้อมใช้งาน, WebSocket Latency < 100ms

### 12.4 Phase 4 (เดือน 7-9): Ranked Battle + Tournament

**เป้าหมาย:** เพิ่มระบบ Ranked และ Tournament สำหรับ Competitive Play

|| กิจกรรม | รายละเอียด | ผู้รับผิดชอบ ||
|---|---|---|---|
| **Ranked System** | ระบบ Rank (Bronze/Silver/Gold/Diamond) | Backend Dev |
| **Matchmaking** | จับคู่ผู้เล่นตาม Rank | Backend Dev |
| **Tournament Mode** | Single Elimination, Double Elimination | Backend Dev |
| **Season System** | Season เปลี่ยนทุก 3 เดือน | Backend Dev |
| **Tournament UI** | Bracket Display, Match History | Frontend Dev |
| **Ranked Rewards** | Season Rewards, Rank Icons | Frontend Dev |

**Milestone:** Ranked + Tournament พร้อมสำหรับ Competitive Scene

### 12.5 Phase 5 (เดือน 10-12): Scale + More Categories

**เป้าหมาย:** ขยายหมวดหมู่และเพิ่มการเติบโต

|| เดือน | กิจกรรม ||
|---|---|
| **เดือน 10** | เพิ่ม Dragon Ball TCG + Art Toys Category |
| **เดือน 11** | เพิ่ม Naruto/Boruto TCG + Anime Figures |
| **เดือน 12** | เพิ่ม Blind Box (Sumikko, Sanrio) + Loyalty Program |

**Growth Metrics (เป้าหมาย):**

|| Metric | เดือน 6 | เดือน 12 ||
|---|---|---|---|
| Registered Users | 20,000 | 70,000 |
| MAU | 10,000 | 40,000 |
| Monthly Packs | 8,000 | 40,000 |
| Revenue | ฿2.5M | ฿15M |
| Categories | 4 | 8 |

### 12.6 Phase 6 (เดือน 12+): Regional Expansion

**เป้าหมาย:** ขยายสู่ตลาดอาเซียน

|| ลำดับ | ตลาด | เป้าหมาย ||
|---|---|---|---|
| 1 | **สิงคโปร์** | Q1 ปีที่ 2 |
| 2 | **มาเลเซีย** | Q2 ปีที่ 2 |
| 3 | **อินโดนีเซีย** | Q3 ปีที่ 2 |
| 4 | **เวียดนาม** | Q4 ปีที่ 2 |

**การขยายตลาดแต่ละประเทศ:**

|| กิจกรรม | รายละเอียด ||
|---|---|---|
| **Localization** | แปลภาษา, ปรับการชำระเงิน (GrabPay, GoPay) ||
| **Legal Compliance** | ขอใบอนุญาตท้องถิ่น ||
| **Supplier Setup** | ทำสัญญากับ Distributor ท้องถิ่น ||
| **Marketing** | หา KOL ท้องถิ่น, ปรับ Platform ||
| **Fulfillment** | จัดตั้ง Warehouse ในประเทศนั้นๆ ||

---

## 13. Risk Analysis

### 13.1 Business Risks

#### 13.1.1 Market Adoption Risk

**ความเสี่ยง:** ผู้ใช้อาจไม่ยอมรับแพลตฟอร์มใหม่

**ระดับ:** ปานกลาง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Soft Launch ก่อน** | ทดสอบกับกลุ่มเล็กๆ ก่อนเปิดตัวเต็มรูปแบบ |
| **Free Pack Giveaway** | แจก Starter Pack ฟรีให้ลองใช้ |
| **KOL Credibility** | ร่วมมือกับ KOL ที่มีอิทธิพลในวงการ |
| **Referral Program** | แนะนำเพื่อนได้ Free Pack |
| **Responsive UX** | ปรับปรุงตาม Feedback ของผู้ใช้อย่างต่อเนื่อง |

#### 13.1.2 Competition from Pobs

**ความเสี่ยง:** Pobs หรือคู่แข่งอื่นอาจตอบโต้ด้วยราคา

**ระดับ:** สูง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **3D Experience** | เน้น 3D Card Reveal ที่คู่แข่งไม่มี |
| **Multi-Category** | มีหลายหมวดหมู่มากกว่าคู่แข่ง |
| **Better UX** | ออกแบบ UX ที่ดีกว่า, ใช้งานง่ายกว่า |
| **Customer Service** | ตอบเร็ว, บริการดีกว่า |
| **PromptPay** | รองรับ PromptPay ที่คู่แข่งอาจไม่มี |

#### 13.1.3 Supply Chain Issues

**ความเสี่ยง:** Distributor ขาด Stock, สินค้าล่าช้า

**ระดับ:** ปานกลาง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Multiple Distributors** | ทำสัญญากับ Distributor หลายราย |
| **Safety Stock** | รักษา Stock เพียงพอ 2-3 เดือน |
| **Early Ordering** | สั่ง Stock ล่วงหน้า 2-3 เดือน |
| **Category Rotation** | หากสินค้าขาด หมุนเข้าหมวดอื่น |

### 13.2 Legal Risks

#### 13.2.1 DBD License Rejection

**ความเสี่ยง:** ใบอนุญาตถูกปฏิเสธหรือล่าช้า

**ระดับ:** ปานกลาง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Early Application** | ยื่นขอก่อนเริ่มพัฒนา 3-4 เดือน |
| **Legal Consultation** | ปรึกษาทนายที่มีประสบการณ์ |
| **Complete Documentation** | เตรียมเอกสารครบถ้วน |
| **Backup Plan** | พิจารณาลงทุนในประเทศที่กฎหมายชัดเจนกว่า |

#### 13.2.2 IP Infringement Claims

**ความเสี่ยง:** ถูกกล่าวหาว่าละเมิดลิขสิทธิ์

**ระดับ:** ต่ำ (หากทำตามแผน)

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Official Distributors Only** | ซื้อจาก Distributor ที่ได้รับการรับรองเท่านั้น |
| **Documentation** | เก็บสัญญาและใบรับรองไว้ทุกฉบับ |
| **Legal Review** | ให้ทนายตรวจสอบสัญญาก่อนเซ็น |
| **Counter-Notification** | เตรียมแผนตอบโต้หากถูกกล่าวหาผิด |

#### 13.2.3 PDPA Violations

**ความเสี่ยง:** ถูกปรับหรือถูกฟ้องจากการละเมิด PDPA

**ระดับ:** ปานกลาง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Privacy Policy** | มี Privacy Policy ที่ชัดเจน |
| **Consent Flow** | ขอ Consent ก่อนเก็บข้อมูล |
| **Data Minimization** | เก็บเฉพาะข้อมูลที่จำเป็น |
| **Security Measures** | เข้ารหัสข้อมูล, ใช้ HTTPS |
| **DPO** | แต่งตั้ง DPO หากจำเป็น |

### 13.3 Technical Risks

#### 13.3.1 3D Performance on Mobile

**ความเสี่ยง:** Animation ช้าหรือกระตุกบนมือถือบางรุ่น

**ระดับ:** ปานกลาง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Performance Testing** | ทดสอบบนอุปกรณ์จริงหลายรุ่น |
| **LOD (Level of Detail)** | ลดความละเอียด Model บนมือถือ |
| **Progressive Loading** | โหลดส่วนแรกก่อน แล้วค่อยโหลดเพิ่ม |
| **Fallback** | มี Fallback เป็น 2D Animation หาก 3D มีปัญหา |
| **WebGL Support Check** | ตรวจสอบก่อนเปิด 3D |

#### 13.3.2 Payment Failures

**ความเสี่ยง:** การชำระเงินล้มเหลว, Stripe/PromptPay ล่ม

**ระดับ:** ต่ำ

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Multiple Payment Methods** | มีหลายวิธีชำระเงิน |
| **Retry Logic** | ระบบ Retry อัตโนมัติหากล้มเหลว |
| **Manual Verification** | CS ตรวจสอบและ Approve กรณีพิเศษ |
| **Payment Status Webhook** | ใช้ Webhook ตรวจสอบสถานะแทน Polling |

#### 13.3.3 Bot Abuse

**ความเสี่ยง:** มี Bot เข้ามาเปิด Pack หลายครั้งเพื่อหาข้อได้เปรียบ

**ระดับ:** ปานกลาง

**มาตรการรับมือ:**

| กลยุทธ์ | รายละเอียด |
|---|---|
| **Rate Limiting** | จำกัดจำนวนคำขอต่อนาที |
| **CAPTCHA** | ใช้ CAPTCHA สำหรับ Action ที่สำคัญ |
| **Device Fingerprinting** | ตรวจจับ Bot ผ่าน Device Info |
| **Account Age** | จำกัดการซื้อสำหรับ Account ใหม่ |
| **Anomaly Detection** | ระบบตรวจจับพฤติกรรมผิดปกติ |

---

## 14. Appendices

### Appendix A: Glossary

| คำศัพท์ | คำอธิบาย |
|---|---|
| **Gacha** | ระบบสุ่มของรางวัลในเกมหรือแพลตฟอร์ม คล้ายการหยิบของจากกล่องปริศนา |
| **Blind Box** | กล่องปริศนาที่ไม่ทราบว่าข้างในมีอะไรจนกว่าจะเปิด |
| **TCG** | Trading Card Game — เกมการ์ดแลกเปลี่ยน เช่น Pokemon TCG, One Piece TCG |
| **Pack** | ซองการ์ดหรือชุดของรางวัลที่ซื้อเพื่อเปิดสุ่ม |
| **Booster Pack** | ซองการ์ดที่มีการ์ดหลายใบ สุ่มจาก Pool |
| **Rarity** | ระดับความหายากของการ์ด (Common, Rare, Legendary) |
| **Provably Fair** | ระบบที่พิสูจน์ความยุติธรรมได้ด้วย Cryptography |
| **PromptPay** | ระบบชำระเงินด้วย QR Code ของไทย |
| **LINE Official Account** | บัญชี Official บน LINE สำหรับธุรกิจ |
| **DBD** | กรมพัฒนาธุรกิจการค้า — หน่วยงานที่ออกใบอนุญาต Gacha |
| **PDPA** | พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 |
| **Supabase** | Backend-as-a-Service ที่ใช้ PostgreSQL |
| **React Three Fiber** | React renderer สำหรับ Three.js |
| **NFT** | Non-Fungible Token — สินทรัพย์ดิจิทัลที่ไม่สามารถทดแทนได้ |
| **KOL** | Key Opinion Leader — ผู้มีอิทธิพลในโซเชียลมีเดีย |

### Appendix B: Card Data Sample

**Pokemon Cards:**

```json
[
  {
    "card_id": "PKM-SV-001",
    "name_th": " pikachu",
    "name_en": "Pikachu",
    "rarity": "R",
    "category": "Pokemon",
    "series": "Scarlet & Violet",
    "power": 70,
    "element": "Lightning",
    "card_type": "Basic",
    "image_url": "https://storage.gachago.com/cards/pikachu-r.png"
  },
  {
    "card_id": "PKM-SV-002",
    "name_th": "Charizard VMAX",
    "name_en": "Charizard VMAX",
    "rarity": "UR",
    "category": "Pokemon",
    "series": "Scarlet & Violet",
    "power": 320,
    "element": "Fire",
    "card_type": "VMAX",
    "image_url": "https://storage.gachago.com/cards/charizard-vmax.png"
  },
  {
    "card_id": "PKM-SV-003",
    "name_th": "Mewtwo VSTAR",
    "name_en": "Mewtwo VSTAR",
    "rarity": "UR",
    "category": "Pokemon",
    "series": "Scarlet & Violet",
    "power": 280,
    "element": "Psychic",
    "card_type": "VSTAR",
    "image_url": "https://storage.gachago.com/cards/mewtwo-vstar.png"
  }
]
```

**One Piece TCG:**

```json
[
  {
    "card_id": "OP-OP01-001",
    "name_th": "Monkey D. Luffy",
    "name_en": "Monkey D. Luffy",
    "rarity": "L",
    "category": "One Piece",
    "series": "OP-01 Romance Dawn",
    "power": 5000,
    "type": "Leader",
    "attribute": "STRAW HAT PIRATES",
    "image_url": "https://storage.gachago.com/cards/luffy-l.png"
  },
  {
    "card_id": "OP-OP01-002",
    "name_th": "Roronoa Zoro",
    "name_en": "Roronoa Zoro",
    "rarity": "SR",
    "category": "One Piece",
    "series": "OP-01 Romance Dawn",
    "power": 5000,
    "type": "Character",
    "attribute": "STRAW HAT PIRATES",
    "image_url": "https://storage.gachago.com/cards/zoro-sr.png"
  }
]
```

### Appendix C: Database Schema

```sql
-- ============================================
-- GACHAGO DATABASE SCHEMA
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- AUTH & USERS
-- ============================================

-- Profiles (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  display_name TEXT,
  email TEXT,
  line_user_id TEXT UNIQUE,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PRODUCTS & INVENTORY
-- ============================================

-- Categories
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name_th TEXT NOT NULL,
  name_en TEXT NOT NULL,
  image_url TEXT,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku TEXT UNIQUE NOT NULL,
  name_th TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_th TEXT,
  description_en TEXT,
  category_id UUID REFERENCES categories(id),
  price INTEGER NOT NULL,  -- satang
  cost INTEGER NOT NULL,  -- satang
  stock INTEGER DEFAULT 0,
  image_url TEXT,
  images TEXT[],  -- array of image URLs
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product Variants (for packs with different rarities)
CREATE TABLE public.product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  rarity TEXT NOT NULL,
  weight INTEGER NOT NULL DEFAULT 1,  -- probability weight
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ORDERS & PAYMENTS
-- ============================================

-- Orders
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
  total INTEGER NOT NULL,  -- satang
  payment_method TEXT,
  payment_id TEXT,
  shipping_address JSONB,
  shipping_fee INTEGER DEFAULT 0,
  notes TEXT,
  gacha_opened BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order Items
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price INTEGER NOT NULL,  -- satang
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Payments
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  amount INTEGER NOT NULL,  -- satang
  method TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_reference TEXT,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- GACHA ENGINE
-- ============================================

-- Cards (for gacha results)
CREATE TABLE public.cards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  card_id TEXT UNIQUE NOT NULL,  -- e.g., "PKM-SV-001"
  product_id UUID REFERENCES products(id),
  name_th TEXT NOT NULL,
  name_en TEXT NOT NULL,
  rarity TEXT NOT NULL CHECK (rarity IN ('C', 'UC', 'R', 'UR', 'L')),
  image_url TEXT,
  power INT,
  attributes JSONB,  -- flexible attributes
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gacha Results
CREATE TABLE public.gacha_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  user_id UUID REFERENCES auth.users(id),
  product_id UUID REFERENCES products(id),
  card_id UUID REFERENCES cards(id),
  rarity TEXT NOT NULL,
  sequence_number INT,  -- 1st card, 2nd card, etc.
  random_seed TEXT NOT NULL,
  random_value NUMERIC,  -- 0-1 random value used
  verified BOOLEAN DEFAULT FALSE,
  revealed BOOLEAN DEFAULT FALSE,
  revealed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Pity Counter
CREATE TABLE public.user_pity (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),
  pity_count INT DEFAULT 0,
  last_pity_reset TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, category_id)
);

-- ============================================
-- USER COLLECTION
-- ============================================

-- User Cards (collection)
CREATE TABLE public.user_cards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id UUID REFERENCES cards(id),
  grade TEXT DEFAULT 'Mint' CHECK (grade IN ('Mint', 'Near Mint', 'Played', 'Damaged')),
  source_order_id UUID REFERENCES orders(id),
  acquired_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SHIPPING & FULFILLMENT
-- ============================================

-- Shipping Orders
CREATE TABLE public.shipping_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  user_id UUID REFERENCES auth.users(id),
  courier TEXT NOT NULL,  -- 'kerry', 'thaipost', 'flash'
  tracking_number TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'picked', 'in_transit', 'delivered', 'returned', 'failed')),
  estimated_delivery DATE,
  shipped_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ANALYTICS & LOGGING
-- ============================================

-- Gacha Analytics
CREATE TABLE public.gacha_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  product_id UUID REFERENCES products(id),
  card_id UUID REFERENCES cards(id),
  rarity TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_gacha_results_user_id ON gacha_results(user_id);
CREATE INDEX idx_gacha_results_order_id ON gacha_results(order_id);
CREATE INDEX idx_cards_rarity ON cards(rarity);
CREATE INDEX idx_cards_product_id ON cards(product_id);
CREATE INDEX idx_user_cards_user_id ON user_cards(user_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_is_active ON products(is_active);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE gacha_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_cards ENABLE ROW LEVEL SECURITY;

-- Users can only see their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Users can only see their own orders
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

-- Users can only see their own gacha results
CREATE POLICY "Users can view own gacha results" ON gacha_results
  FOR SELECT USING (auth.uid() = user_id);

-- Users can only see their own collection
CREATE POLICY "Users can view own collection" ON user_cards
  FOR SELECT USING (auth.uid() = user_id);
```

### Appendix D: API Endpoints

#### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/line` | LINE Login callback |
| POST | `/api/auth/register` | Email registration |
| POST | `/api/auth/login` | Email login |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/session` | Get current session |
| GET | `/api/auth/profile` | Get user profile |
| PATCH | `/api/auth/profile` | Update user profile |

#### Products

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | List all products |
| GET | `/api/products/[id]` | Get product detail |
| GET | `/api/categories` | List categories |
| GET | `/api/categories/[slug]/products` | Products by category |

#### Gacha

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/gacha/open` | Open a pack (trigger gacha) |
| GET | `/api/gacha/verify/[id]` | Verify gacha result |
| GET | `/api/gacha/history` | User's gacha history |
| GET | `/api/gacha/collection` | User's card collection |

#### Orders

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/orders` | List user's orders |
| GET | `/api/orders/[id]` | Get order detail |
| POST | `/api/orders` | Create new order |
| PATCH | `/api/orders/[id]/status` | Update order status (admin) |

#### Payments

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/payment/create-checkout` | Create Stripe checkout session |
| POST | `/api/payment/promptpay-qr` | Generate PromptPay QR |
| POST | `/api/payment/webhook` | Stripe webhook handler |
| POST | `/api/payment/confirm` | Confirm payment manually |
| GET | `/api/payment/history` | User's payment history |

#### Shipping

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/shipping/create` | Create shipping order |
| GET | `/api/shipping/[id]/track` | Track shipment |
| GET | `/api/shipping/rates` | Get shipping rates |

#### Admin

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/admin/orders` | List all orders |
| GET | `/api/admin/products` | Manage products |
| POST | `/api/admin/products` | Create product |
| PATCH | `/api/admin/products/[id]` | Update product |
| GET | `/api/admin/inventory` | View inventory |
| PATCH | `/api/admin/inventory/[id]` | Update inventory |
| GET | `/api/admin/analytics` | View analytics |

### Appendix E: Performance Benchmarks

#### Target Performance Metrics

| Metric | Target | Measurement |
|---|---|---|
| **Page Load Time (LCP)** | < 2.5s | Google Lighthouse |
| **Time to First Byte (TTFB)** | < 200ms | WebPageTest |
| **First Contentful Paint (FCP)** | < 1.8s | Google Lighthouse |
| **3D Animation Frame Rate** | 60 FPS | Chrome DevTools |
| **API Response Time** | < 300ms (p95) | APM |
| **Uptime** | 99.9% | Uptime monitoring |
| **Error Rate** | < 0.1% | Sentry |
| **Checkout Conversion** | > 3% | Analytics |

#### Load Testing Targets

| Scenario | Concurrent Users | Target Response |
|---|---|---|
| Homepage | 1,000 | < 1s |
| Shop Page | 500 | < 2s |
| Gacha Open | 100 | < 3s |
| Payment Checkout | 50 | < 5s |
| Collection View | 300 | < 1.5s |

#### Browser Support

| Browser | Version | Support |
|---|---|---|
| Chrome | 90+ | ✓ Full Support |
| Safari | 14+ | ✓ Full Support |
| Firefox | 88+ | ✓ Full Support |
| Edge | 90+ | ✓ Full Support |
| Samsung Internet | 14+ | ✓ Full Support |
| LINE Browser | Latest | ✓ Full Support |
| UC Browser | Latest | ⚠️ Partial (3D may not work) |

#### Mobile Device Targets

| Device Category | Examples | Target Performance |
|---|---|---|
| **High-end** | iPhone 13+, Samsung S21+ | 60 FPS 3D |
| **Mid-range** | iPhone 11, Samsung A52 | 30-60 FPS 3D |
| **Low-end** | iPhone 8, Samsung A10 | Fallback to 2D |
| **Tablet** | iPad 9th Gen | 60 FPS 3D |

---

**จัดทำโดย:** ทีมพัฒนา Gachago  
**วันที่:** 30 เมษายน 2569  
**เวอร์ชัน:** 2.0  
**สถานะ:** อนุมัติสำหรับดำเนินการ
