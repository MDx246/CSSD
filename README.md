# SteriIC CSSD MVP

เว็บต้นแบบระบบ CSSD สำหรับทดลอง workflow หน่วยจ่ายกลาง โดยตั้งใจให้เป็น MVP ที่เปิดดูได้ทันทีโดยไม่ต้องติดตั้ง backend

## ฟังก์ชันในรุ่นนี้

- Login demo ด้วย `admin/admin`
- โครงเมนูหลัก 23 กลุ่มตามระบบ CSSD demo
- Master Data แบบ mock สำหรับหน่วยงาน, Set, เครื่องมือ, รายการใน Set, วัสดุ, เครื่อง CSSD และผู้ใช้
- Dashboard สถิติจ่ายปีงบประมาณ 2566 จากไฟล์ Excel ตัวอย่าง
- รับเข้า/ตรวจรับ set
- เปลี่ยนสถานะ workflow: รับเข้า, ล้าง, แพ็ก, อบฆ่าเชื้อ, พร้อมจ่าย, จ่ายแล้ว
- เบิก/จ่าย/คืนแบบ mock request
- คลัง CSSD พร้อมแจ้ง stock ต่ำกว่า min
- Sticker/Barcode mock print
- รายงานพื้นฐาน, Asset/PM และ role checklist

## วิธีเปิด

เปิดไฟล์ `index.html` ใน browser ได้โดยตรง หรือรัน static server:

```bash
python3 -m http.server 5173
```

แล้วเปิด `http://localhost:5173`

## หมายเหตุสำหรับการต่อยอด

โครงนี้ยังเป็น frontend-only และเก็บข้อมูลใน `localStorage` เพื่อใช้สาธิต flow ก่อน รุ่น production ควรเพิ่ม backend, database, password hashing, role permission, audit log และ printer integration
