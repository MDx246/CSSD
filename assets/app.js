const initialState = {
  loggedIn: false,
  user: null,
  route: "dashboard",
  sidebarOpen: false,
  masterDataTab: "departments",
  sets: [
    { id: "SET-240627-001", name: "Major Set", department: "OR", priority: "ด่วน", status: "รับเข้า", owner: "สมชาย", updatedAt: "08:40", cycle: "ยังไม่เข้าเครื่อง" },
    { id: "SET-240627-002", name: "Dressing Set", department: "ER", priority: "ปกติ", status: "ล้าง", owner: "อรทัย", updatedAt: "09:15", cycle: "ยังไม่เข้าเครื่อง" },
    { id: "SET-240627-003", name: "Suture Set", department: "Ward 4", priority: "ปกติ", status: "แพ็ก", owner: "นพพร", updatedAt: "10:05", cycle: "AUTO-02" },
    { id: "SET-240627-004", name: "Minor Set", department: "OPD", priority: "ด่วน", status: "พร้อมจ่าย", owner: "อรทัย", updatedAt: "10:42", cycle: "AUTO-01" },
    { id: "SET-240627-005", name: "Eye Set", department: "OR", priority: "ปกติ", status: "จ่ายแล้ว", owner: "สมชาย", updatedAt: "11:20", cycle: "AUTO-01" }
  ],
  stock: [
    { code: "SUP-001", name: "Sterilization Pouch S", balance: 540, min: 300, unit: "ซอง" },
    { code: "SUP-002", name: "Indicator Tape", balance: 42, min: 50, unit: "ม้วน" },
    { code: "SUP-003", name: "Chemical Indicator Class 5", balance: 190, min: 120, unit: "ชิ้น" },
    { code: "SUP-004", name: "Wrapping Sheet 90x90", balance: 74, min: 80, unit: "ผืน" }
  ],
  requests: [
    { id: "REQ-001", department: "OR", item: "Major Set", qty: 2, status: "รออนุมัติ" },
    { id: "REQ-002", department: "ER", item: "Dressing Set", qty: 6, status: "เตรียมจ่าย" },
    { id: "REQ-003", department: "Ward 4", item: "Suture Set", qty: 3, status: "จ่ายแล้ว" }
  ],
  departments: [
    { id: "DEP-001", code: "OR", name: "ห้องผ่าตัด", type: "Critical", active: true },
    { id: "DEP-002", code: "ER", name: "ห้องฉุกเฉิน", type: "Urgent", active: true },
    { id: "DEP-003", code: "ICU", name: "หอผู้ป่วยวิกฤต", type: "Ward", active: true },
    { id: "DEP-004", code: "WARD4", name: "Ward 4", type: "Ward", active: true },
    { id: "DEP-005", code: "OPD", name: "ผู้ป่วยนอก", type: "Clinic", active: true }
  ],
  setTypes: [
    { id: "SETT-001", code: "MAJOR", name: "Major Set", sterileDays: 30, ownerDepartment: "OR", active: true },
    { id: "SETT-002", code: "MINOR", name: "Minor Set", sterileDays: 30, ownerDepartment: "OPD", active: true },
    { id: "SETT-003", code: "DRESS", name: "Dressing Set", sterileDays: 14, ownerDepartment: "ER", active: true },
    { id: "SETT-004", code: "SUTURE", name: "Suture Set", sterileDays: 30, ownerDepartment: "WARD4", active: true }
  ],
  instruments: [
    { id: "INS-001", code: "FOR-001", name: "Forceps", category: "จับเนื้อเยื่อ", unit: "ชิ้น", active: true },
    { id: "INS-002", code: "SCI-001", name: "Scissors", category: "ตัด", unit: "ชิ้น", active: true },
    { id: "INS-003", code: "CLP-001", name: "Clamp", category: "หนีบ", unit: "ชิ้น", active: true },
    { id: "INS-004", code: "NDH-001", name: "Needle Holder", category: "เย็บ", unit: "ชิ้น", active: true }
  ],
  setTemplates: [
    { id: "TPL-001", setCode: "MAJOR", instrumentCode: "FOR-001", qty: 2, required: true, active: true },
    { id: "TPL-002", setCode: "MAJOR", instrumentCode: "SCI-001", qty: 1, required: true, active: true },
    { id: "TPL-003", setCode: "MAJOR", instrumentCode: "CLP-001", qty: 4, required: true, active: true },
    { id: "TPL-004", setCode: "SUTURE", instrumentCode: "NDH-001", qty: 1, required: true, active: true }
  ],
  supplies: [
    { id: "SUPM-001", code: "SUP-001", name: "Sterilization Pouch S", unit: "ซอง", min: 300, max: 900, active: true },
    { id: "SUPM-002", code: "SUP-002", name: "Indicator Tape", unit: "ม้วน", min: 50, max: 150, active: true },
    { id: "SUPM-003", code: "SUP-003", name: "Chemical Indicator Class 5", unit: "ชิ้น", min: 120, max: 500, active: true },
    { id: "SUPM-004", code: "SUP-004", name: "Wrapping Sheet 90x90", unit: "ผืน", min: 80, max: 260, active: true }
  ],
  machines: [
    { id: "MAC-001", code: "AUTO-01", name: "Autoclave 1", type: "Sterilizer", status: "พร้อมใช้", pmDate: "2026-07-15", active: true },
    { id: "MAC-002", code: "AUTO-02", name: "Autoclave 2", type: "Sterilizer", status: "พร้อมใช้", pmDate: "2026-07-20", active: true },
    { id: "MAC-003", code: "WASH-01", name: "Washer Disinfector", type: "Washer", status: "พร้อมใช้", pmDate: "2026-07-10", active: true }
  ],
  users: [
    { id: "USR-001", username: "admin", name: "Admin CSSD", role: "Admin", department: "CSSD", active: true },
    { id: "USR-002", username: "cssd01", name: "สมชาย", role: "CSSD Staff", department: "CSSD", active: true },
    { id: "USR-003", username: "ward01", name: "อรทัย", role: "Ward User", department: "OR", active: true }
  ]
};

let state = loadState();

const menus = [
  ["request", "RQ", "เบิกของ"],
  ["consume", "CU", "ตัดใช้"],
  ["receive", "IN", "ตรวจรับ"],
  ["search", "SE", "ค้นหา"],
  ["dashboard", "DB", "Dashboard"],
  ["departmentReports", "DR", "รายงาน (หน่วยงาน)"],
  ["stickers", "QR", "พิมพ์สติ๊กเกอร์"],
  ["masterData", "MD", "เปลี่ยนข้อมูล"],
  ["verify", "CK", "ตรวจสอบ"],
  ["dispatch", "DO", "จ่ายของ"],
  ["settings", "ST", "ตั้งค่า"],
  ["resterile", "RS", "Resterile / คืน / ลบ"],
  ["cssdStock", "CS", "คลัง CSSD"],
  ["cssdReports", "CR", "รายงาน (CSSD)"],
  ["assets", "PM", "ระบบ Asset / PM"],
  ["management", "MG", "ระบบจัดการ"],
  ["stockControl", "SC", "ระบบคุม STOCK"],
  ["tracking", "TR", "ระบบติดตาม"],
  ["ai", "AI", "ระบบ AI"],
  ["monitor", "MO", "Monitor Dashboard"],
  ["manual", "MN", "คู่มือการใช้งาน"],
  ["training", "TN", "ระบบ Training"],
  ["logout", "LO", "ออกจากระบบ"]
];

const statusFlow = ["รับเข้า", "ล้าง", "แพ็ก", "อบฆ่าเชื้อ", "พร้อมจ่าย", "จ่ายแล้ว"];

const masterDataTabs = [
  ["departments", "หน่วยงาน"],
  ["setTypes", "Set"],
  ["instruments", "เครื่องมือ"],
  ["setTemplates", "รายการใน Set"],
  ["supplies", "วัสดุ"],
  ["machines", "เครื่อง CSSD"],
  ["users", "ผู้ใช้"]
];

const masterDataDefinitions = {
  departments: {
    title: "หน่วยงาน",
    subtitle: "ต้นทางและปลายทางของการส่งตรวจรับ เบิก จ่าย และคืนเครื่องมือ",
    prefix: "DEP",
    fields: [["code", "รหัส"], ["name", "ชื่อหน่วยงาน"], ["type", "ประเภท"]],
    columns: [["code", "รหัส"], ["name", "ชื่อ"], ["type", "ประเภท"], ["active", "สถานะ"]]
  },
  setTypes: {
    title: "ประเภท Set",
    subtitle: "รายการชุดเครื่องมือมาตรฐาน พร้อมอายุ sterile และหน่วยงานเจ้าของ",
    prefix: "SETT",
    fields: [["code", "รหัส"], ["name", "ชื่อ Set"], ["sterileDays", "อายุ Sterile (วัน)", "number"], ["ownerDepartment", "หน่วยงานเจ้าของ"]],
    columns: [["code", "รหัส"], ["name", "ชื่อ Set"], ["sterileDays", "อายุ Sterile"], ["ownerDepartment", "เจ้าของ"], ["active", "สถานะ"]]
  },
  instruments: {
    title: "รายการเครื่องมือ",
    subtitle: "คลังชื่อเครื่องมือกลาง ก่อนนำไปประกอบเป็น template ของแต่ละ set",
    prefix: "INS",
    fields: [["code", "รหัส"], ["name", "ชื่อเครื่องมือ"], ["category", "หมวดหมู่"], ["unit", "หน่วยนับ"]],
    columns: [["code", "รหัส"], ["name", "ชื่อ"], ["category", "หมวด"], ["unit", "หน่วย"], ["active", "สถานะ"]]
  },
  setTemplates: {
    title: "รายการใน Set",
    subtitle: "กำหนด checklist ว่าแต่ละ set ต้องมีเครื่องมืออะไร จำนวนเท่าไร",
    prefix: "TPL",
    fields: [["setCode", "รหัส Set"], ["instrumentCode", "รหัสเครื่องมือ"], ["qty", "จำนวน", "number"], ["required", "บังคับ", "boolean"]],
    columns: [["setCode", "Set"], ["instrumentCode", "เครื่องมือ"], ["qty", "จำนวน"], ["required", "บังคับ"], ["active", "สถานะ"]]
  },
  supplies: {
    title: "วัสดุสิ้นเปลือง",
    subtitle: "รายการวัสดุสำหรับ stock, ตัดใช้, min/max และ reorder",
    prefix: "SUPM",
    fields: [["code", "รหัส"], ["name", "ชื่อวัสดุ"], ["unit", "หน่วย"], ["min", "Min", "number"], ["max", "Max", "number"]],
    columns: [["code", "รหัส"], ["name", "ชื่อ"], ["unit", "หน่วย"], ["min", "Min"], ["max", "Max"], ["active", "สถานะ"]]
  },
  machines: {
    title: "เครื่อง CSSD",
    subtitle: "เครื่องอบ เครื่องล้าง และอุปกรณ์หลักที่ใช้กับรอบงานและ PM",
    prefix: "MAC",
    fields: [["code", "รหัส"], ["name", "ชื่อเครื่อง"], ["type", "ประเภท"], ["status", "สถานะ"], ["pmDate", "PM ถัดไป", "date"]],
    columns: [["code", "รหัส"], ["name", "ชื่อ"], ["type", "ประเภท"], ["status", "สถานะเครื่อง"], ["pmDate", "PM ถัดไป"], ["active", "สถานะ"]]
  },
  users: {
    title: "ผู้ใช้และสิทธิ์",
    subtitle: "ผู้ใช้งานตั้งต้นสำหรับ role permission ของระบบรุ่นจริง",
    prefix: "USR",
    fields: [["username", "Username"], ["name", "ชื่อ"], ["role", "Role"], ["department", "หน่วยงาน"]],
    columns: [["username", "Username"], ["name", "ชื่อ"], ["role", "Role"], ["department", "หน่วยงาน"], ["active", "สถานะ"]]
  }
};

const fiscalDashboard = {
  source: "1.สถิติจ่ายปีงบประมาณ2566.xlsx",
  period: "ปีงบประมาณ 2566",
  setTotal: 349684,
  setValue: 41483930,
  supplyTotal: 1714435,
  supplyValue: 31492418,
  monthly: [
    { month: "2565-10", sets: 25361, supplies: 146588 },
    { month: "2565-11", sets: 26873, supplies: 154913 },
    { month: "2565-12", sets: 27298, supplies: 149218 },
    { month: "2566-01", sets: 27526, supplies: 144181 },
    { month: "2566-02", sets: 26985, supplies: 121110 },
    { month: "2566-03", sets: 30967, supplies: 137799 },
    { month: "2566-04", sets: 28203, supplies: 129447 },
    { month: "2566-05", sets: 30148, supplies: 142271 },
    { month: "2566-06", sets: 30886, supplies: 136169 },
    { month: "2566-07", sets: 32466, supplies: 157172 },
    { month: "2566-08", sets: 31249, supplies: 149660 },
    { month: "2566-09", sets: 31722, supplies: 145907 }
  ],
  topSetItems: [
    { name: "Set Dressing กลาง", value: 9094800 },
    { name: "Set Vela", value: 4526000 },
    { name: "Set ตรวจฟัน", value: 3298350 },
    { name: "Set Single Basin", value: 1356300 },
    { name: "ชุดสวนปัสสาวะ", value: 1326200 }
  ],
  topSetDepartments: [
    { name: "ศูนย์เครื่องมือแพทย์", value: 4679680 },
    { name: "ทันตกรรม", value: 4179790 },
    { name: "OR", value: 3361570 },
    { name: "ER", value: 3274135 },
    { name: "ห้องคลอด", value: 1390120 }
  ],
  topSupplyItems: [
    { name: "สาย Suction", value: 8012820 },
    { name: "เสื้อกาวน์ใช้แล้วทิ้ง", value: 1778760 },
    { name: "ถุงมือ Sterile S", value: 1632640 },
    { name: "Top 12x12", value: 1561440 },
    { name: "ก๊อส 12x12", value: 1531300 }
  ],
  topSupplyDepartments: [
    { name: "ศูนย์เครื่องมือแพทย์", value: 3542370 },
    { name: "Micu 3", value: 2395040 },
    { name: "อายุรกรรมหญิงบน", value: 1769602 },
    { name: "TICU", value: 1561400 },
    { name: "ICU ศัลย์", value: 1520030 }
  ],
  resterileDepartments: [
    { name: "จิตเวช", qty: 134, rate: 0.3489583333333333 },
    { name: "รพ.2", qty: 74, rate: 0.16017316017316016 },
    { name: "เวชกรรมสังคม", qty: 53, rate: 0.14929577464788732 },
    { name: "ตึกสงฆ์", qty: 70, rate: 0.10057471264367816 },
    { name: "x-Ray", qty: 60, rate: 0.064034151547492 }
  ],
  machines: [
    { type: "HYDROGEN PLASMA", name: "รวม", cycles: 811, pieces: 31536 },
    { type: "HYDROGEN PLASMA", name: "เครื่อง 1", cycles: 1144, pieces: 29983 },
    { type: "HYDROGEN PLASMA", name: "เครื่อง 2", cycles: 579, pieces: 9980 },
    { type: "STEAM AUTOCLAVE", name: "รวม", cycles: 208, pieces: 57054 },
    { type: "STEAM AUTOCLAVE", name: "เครื่อง 7", cycles: 975, pieces: 81316 },
    { type: "STEAM AUTOCLAVE", name: "เครื่อง 8", cycles: 864, pieces: 51967 },
    { type: "STEAM AUTOCLAVE", name: "เครื่อง 2", cycles: 598, pieces: 53321 }
  ]
};

const moduleBlueprints = {
  request: {
    title: "เบิกของ",
    subtitle: "คำขอเบิกจากหน่วยงานและการอนุมัติรายการก่อนส่งให้ CSSD จัดเตรียม",
    metrics: [["รออนุมัติ", state.requests.filter(req => req.status === "รออนุมัติ").length], ["เตรียมจ่าย", state.requests.filter(req => req.status === "เตรียมจ่าย").length], ["จ่ายแล้ว", state.requests.filter(req => req.status === "จ่ายแล้ว").length]],
    tasks: ["สร้างใบเบิกจากหน่วยงาน", "ตรวจสอบ stock/set พร้อมจ่าย", "อนุมัติหรือปฏิเสธคำขอ", "ส่งต่อรายการไปหน้าจ่ายของ"]
  },
  consume: {
    title: "ตัดใช้",
    subtitle: "บันทึกการใช้วัสดุสิ้นเปลืองและเชื่อมกับงาน pack/load ของ CSSD",
    metrics: [["วัสดุทั้งหมด", state.stock.length], ["ต่ำกว่า min", lowStock().length], ["รอเบิกเพิ่ม", lowStock().length]],
    tasks: ["ตัดใช้ตาม set หรือ load", "ระบุ lot/วันหมดอายุ", "เชื่อม stock movement", "แจ้งเตือนเมื่อคงเหลือต่ำ"]
  },
  search: {
    title: "ค้นหา",
    subtitle: "ค้นหา set, tracking number, load, หน่วยงาน และสถานะล่าสุด",
    metrics: [["Tracking", state.sets.length], ["คำขอเบิก", state.requests.length], ["Stock", state.stock.length]],
    tasks: ["ค้นด้วย QR/Barcode", "ค้นตามหน่วยงาน", "ค้นตามรอบอบ", "เปิด timeline ย้อนหลัง"]
  },
  departmentReports: {
    title: "รายงาน (หน่วยงาน)",
    subtitle: "รายงานสำหรับ OR, ER, Ward และหน่วยงานผู้ส่ง/ผู้เบิก",
    metrics: [["หน่วยงาน", Object.keys(groupCount(state.sets, "department")).length], ["คำขอเบิก", state.requests.length], ["จ่ายแล้ว", state.requests.filter(req => req.status === "จ่ายแล้ว").length]],
    tasks: ["ประวัติการส่งเครื่องมือ", "ประวัติการขอเบิก", "รายการรอรับคืน", "สรุปปริมาณงานรายเดือน"]
  },
  masterData: {
    title: "เปลี่ยนข้อมูล",
    subtitle: "แก้ไข master data เช่น set, หน่วยงาน, เครื่องมือ และรายการวัสดุ",
    metrics: [["Set", state.sets.length], ["หน่วยงาน", Object.keys(groupCount(state.sets, "department")).length], ["วัสดุ", state.stock.length]],
    tasks: ["จัดการรายการ set", "จัดการรายการเครื่องมือใน set", "จัดการหน่วยงาน", "จัดการเครื่องอบ/อุปกรณ์"]
  },
  verify: {
    title: "ตรวจสอบ",
    subtitle: "จุดตรวจคุณภาพก่อน release, ก่อนจ่าย และเมื่อพบความผิดปกติ",
    metrics: [["รอตรวจ", state.sets.filter(item => item.status === "อบฆ่าเชื้อ").length], ["พร้อมจ่าย", state.sets.filter(item => item.status === "พร้อมจ่าย").length], ["Load fail", 0]],
    tasks: ["ตรวจผล chemical indicator", "ตรวจผล biological indicator", "ตรวจสภาพห่อ sterile", "บันทึก nonconformance"]
  },
  resterile: {
    title: "Resterile / คืน / ลบ",
    subtitle: "จัดการ set หมดอายุ คืนจากหน่วยงาน ส่งอบซ้ำ หรือยกเลิกรายการอย่างมี audit",
    metrics: [["คืนวันนี้", 0], ["รอ Resterile", 0], ["ยกเลิก", 0]],
    tasks: ["รับคืนจากหน่วยงาน", "ส่งเข้า resterile", "บันทึกเหตุผลการลบ", "เก็บ audit log ทุก action"]
  },
  cssdReports: {
    title: "รายงาน (CSSD)",
    subtitle: "รายงานบริหาร CSSD, KPI, workload, indicator และ sterilization history",
    metrics: [["Turnaround", "4.2 ชม."], ["Load วันนี้", 3], ["งานค้าง", state.sets.filter(item => item.status !== "จ่ายแล้ว").length]],
    tasks: ["รายงานปริมาณงาน", "รายงานรอบอบ", "รายงานตัวชี้วัด", "ส่งออก Excel/PDF"]
  },
  management: {
    title: "ระบบจัดการ",
    subtitle: "เครื่องมือสำหรับหัวหน้า CSSD ในการติดตามคน งาน กะ และการอนุมัติ",
    metrics: [["ผู้ปฏิบัติงาน", 3], ["กะวันนี้", 2], ["งานค้าง", state.sets.filter(item => item.status !== "จ่ายแล้ว").length]],
    tasks: ["จัดกะเจ้าหน้าที่", "มอบหมายงาน", "อนุมัติการแก้ไขข้อมูล", "ติดตาม productivity รายคน"]
  },
  stockControl: {
    title: "ระบบคุม STOCK",
    subtitle: "ควบคุม stock กลาง, lot, FEFO, min/max และการเคลื่อนไหวของวัสดุ",
    metrics: [["รายการวัสดุ", state.stock.length], ["ต่ำกว่า min", lowStock().length], ["รับเพิ่มรออนุมัติ", 0]],
    tasks: ["รับเข้าวัสดุ", "ตัดจ่ายวัสดุ", "คุม lot/วันหมดอายุ", "รายงาน stock movement"]
  },
  tracking: {
    title: "ระบบติดตาม",
    subtitle: "ติดตามตำแหน่งและสถานะ set ตั้งแต่หน่วยงานถึง CSSD และกลับสู่หน่วยงาน",
    metrics: [["กำลังดำเนินการ", state.sets.filter(item => item.status !== "จ่ายแล้ว").length], ["พร้อมจ่าย", state.sets.filter(item => item.status === "พร้อมจ่าย").length], ["จ่ายแล้ว", state.sets.filter(item => item.status === "จ่ายแล้ว").length]],
    tasks: ["แสดง timeline ราย set", "ติดตามรถ/จุดรับส่ง", "แจ้งเตือนสถานะ", "ค้นหาตำแหน่งล่าสุด"]
  },
  ai: {
    title: "ระบบ AI",
    subtitle: "พื้นที่ต่อยอด AI สำหรับคาดการณ์ workload, stock, anomaly และช่วยสรุปรายงาน",
    metrics: [["โมเดล", 0], ["แจ้งเตือน", 0], ["ข้อเสนอแนะ", 3]],
    tasks: ["พยากรณ์ปริมาณงาน", "แนะนำ stock reorder", "ตรวจจับ load ผิดปกติ", "สรุปรายงานผู้บริหาร"]
  },
  monitor: {
    title: "Monitor Dashboard",
    subtitle: "หน้าจอแสดงผลใหญ่สำหรับติดตามคิวงาน CSSD แบบ real-time",
    metrics: [["รับเข้า", state.sets.filter(item => item.status === "รับเข้า").length], ["กำลังทำ", state.sets.filter(item => ["ล้าง", "แพ็ก", "อบฆ่าเชื้อ"].includes(item.status)).length], ["พร้อมจ่าย", state.sets.filter(item => item.status === "พร้อมจ่าย").length]],
    tasks: ["จอคิวรับเข้า", "จอคิวรออบ", "จอพร้อมจ่าย", "ตั้งค่า refresh อัตโนมัติ"]
  },
  manual: {
    title: "คู่มือการใช้งาน",
    subtitle: "คู่มือ workflow, SOP และคำอธิบายหน้าจอสำหรับเจ้าหน้าที่แต่ละบทบาท",
    metrics: [["บทเรียน", 8], ["SOP", 5], ["FAQ", 12]],
    tasks: ["คู่มือ CSSD staff", "คู่มือหน่วยงาน", "SOP การรับเข้า/จ่ายของ", "คู่มือแก้ปัญหาเบื้องต้น"]
  },
  training: {
    title: "ระบบ Training",
    subtitle: "อบรมเจ้าหน้าที่ใหม่ ทบทวน SOP และเก็บประวัติ competency",
    metrics: [["หลักสูตร", 4], ["ผู้เรียน", 12], ["รอประเมิน", 2]],
    tasks: ["บทเรียนออนไลน์", "แบบทดสอบหลังเรียน", "บันทึกผลอบรม", "รายงาน competency"]
  }
};

function loadState() {
  const saved = localStorage.getItem("cssd-mvp-state");
  if (!saved) return structuredClone(initialState);
  try {
    return { ...structuredClone(initialState), ...JSON.parse(saved) };
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  localStorage.setItem("cssd-mvp-state", JSON.stringify(state));
}

function logo() {
  return `
    <div class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 7l14 7v10c0 9-5.7 15.1-14 17-8.3-1.9-14-8-14-17V14l14-7z" fill="#d8fff8"/>
        <path d="M17 24h14M24 17v14" stroke="#0f2f35" stroke-width="4" stroke-linecap="round"/>
      </svg>
    </div>
  `;
}

function render() {
  document.getElementById("app").innerHTML = state.loggedIn ? appShell() : loginScreen();
  bindEvents();
}

function loginScreen() {
  return `
    <main class="login-shell">
      <section class="login-panel">
        <div class="brand-lockup">
          ${logo()}
          <div>
            <h1>SteriIC CSSD</h1>
            <p>ระบบบริหารงานหน่วยจ่ายกลาง</p>
          </div>
        </div>
        <form class="login-form" data-action="login">
          <div class="field">
            <label for="username">Username</label>
            <input class="input" id="username" name="username" autocomplete="username" value="admin">
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input class="input" id="password" name="password" type="password" autocomplete="current-password" value="admin">
          </div>
          <button class="btn primary" type="submit">เข้าสู่ระบบ</button>
          <p class="muted">Demo account: admin / admin</p>
        </form>
      </section>
      <section class="login-visual">
        <div class="visual-copy">
          <h2>ติดตามชุดเครื่องมือจากรับเข้า จนถึงจ่ายคืนหน่วยงาน</h2>
          <p>ออกแบบสำหรับงาน CSSD ที่ต้องเห็นคิวงาน, สถานะ set, รอบอบ, stock และรายงานประจำวันในหน้าจอเดียว</p>
        </div>
      </section>
    </main>
  `;
}

function appShell() {
  return `
    <div class="app-shell">
      <aside class="sidebar ${state.sidebarOpen ? "open" : ""}">
        <div class="brand-lockup">
          ${logo()}
          <div>
            <h1>SteriIC CSSD</h1>
            <p>${state.user?.role || "CSSD Admin"}</p>
          </div>
        </div>
        <nav class="nav-list">
          ${menus.map(([route, icon, label]) => `
            <button class="nav-btn ${state.route === route ? "active" : ""}" data-route="${route}">
              <span class="icon">${icon}</span>
              <span>${label}</span>
            </button>
          `).join("")}
        </nav>
      </aside>
      <div class="main">
        <header class="topbar">
          <div class="toolbar">
            <button class="btn ghost mobile-toggle" data-action="toggle-sidebar">เมนู</button>
            <strong>${currentTitle()}</strong>
          </div>
          <div class="toolbar">
            <span class="muted">ผู้ใช้: ${state.user?.name || "Admin"}</span>
            <button class="btn ghost" data-action="logout">ออกจากระบบ</button>
          </div>
        </header>
        <main class="content">${page()}</main>
      </div>
    </div>
  `;
}

function currentTitle() {
  return menus.find(([route]) => route === state.route)?.[2] || "Dashboard";
}

function pageHeader(title, subtitle, action = "") {
  return `
    <section class="page-head">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="toolbar">${action}</div>
    </section>
  `;
}

function page() {
  const pages = {
    dashboard: dashboardPage,
    receive: receivePage,
    workflow: workflowPage,
    dispatch: dispatchPage,
    cssdStock: stockPage,
    stock: stockPage,
    stickers: stickersPage,
    reports: reportsPage,
    cssdReports: () => modulePage("cssdReports"),
    assets: assetsPage,
    settings: settingsPage,
    request: () => modulePage("request"),
    consume: () => modulePage("consume"),
    search: () => modulePage("search"),
    departmentReports: () => modulePage("departmentReports"),
    masterData: masterDataPage,
    verify: () => modulePage("verify"),
    resterile: () => modulePage("resterile"),
    management: () => modulePage("management"),
    stockControl: () => modulePage("stockControl"),
    tracking: () => modulePage("tracking"),
    ai: () => modulePage("ai"),
    monitor: () => modulePage("monitor"),
    manual: () => modulePage("manual"),
    training: () => modulePage("training")
  };
  return (pages[state.route] || dashboardPage)();
}

function modulePage(key) {
  const module = moduleBlueprints[key];
  if (!module) return dashboardPage();
  return `
    ${pageHeader(module.title, module.subtitle)}
    <section class="metrics">
      ${module.metrics.map(([label, value]) => `
        <div class="metric"><span class="muted">${label}</span><b>${value}</b><span>รายการ</span></div>
      `).join("")}
    </section>
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>ขอบเขตงานในโมดูลนี้</h2>${badge("Phase 2")}</div>
        <div class="panel-body workflow">
          ${module.tasks.map((task, index) => `
            <div class="step">
              <span class="step-num">${index + 1}</span>
              <div><strong>${task}</strong><p class="muted">เตรียมไว้เป็นหน้าจอทำงานจริงในรอบพัฒนาถัดไป</p></div>
              ${badge(index === 0 ? "โครงหลัก" : "รอพัฒนา")}
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>ข้อมูลตัวอย่าง</h2></div>
        <div class="table-wrap">${setsTable(state.sets.slice(0, 4), false)}</div>
      </div>
    </section>
  `;
}

function masterDataPage() {
  const activeKey = state.masterDataTab || "departments";
  const definition = masterDataDefinitions[activeKey] || masterDataDefinitions.departments;
  const total = masterDataTabs.reduce((sum, [key]) => sum + masterRows(key).length, 0);
  const inactive = masterDataTabs.reduce((sum, [key]) => sum + masterRows(key).filter(row => row.active === false).length, 0);
  return `
    ${pageHeader("Master Data", "ข้อมูลตั้งต้นกลางสำหรับทุก workflow ของ CSSD")}
    <section class="metrics">
      <div class="metric"><span class="muted">กลุ่มข้อมูล</span><b>${masterDataTabs.length}</b><span>กลุ่ม</span></div>
      <div class="metric"><span class="muted">รายการทั้งหมด</span><b>${total}</b><span>records</span></div>
      <div class="metric"><span class="muted">เปิดใช้งาน</span><b>${total - inactive}</b><span>records</span></div>
      <div class="metric"><span class="muted">ปิดใช้งาน</span><b>${inactive}</b><span>records</span></div>
    </section>
    <section class="panel">
      <div class="tabs" role="tablist">
        ${masterDataTabs.map(([key, label]) => `
          <button class="tab-btn ${activeKey === key ? "active" : ""}" data-master-tab="${key}" type="button">
            ${label}
            <span>${masterRows(key).length}</span>
          </button>
        `).join("")}
      </div>
      <div class="master-layout">
        <div>
          <div class="panel-head inline-head">
            <div>
              <h2>${definition.title}</h2>
              <p class="muted">${definition.subtitle}</p>
            </div>
            ${badge("Master")}
          </div>
          <div class="table-wrap">${masterDataTable(activeKey)}</div>
        </div>
        <aside class="master-form">
          <h2>เพิ่ม${definition.title}</h2>
          <p class="muted">รายการใหม่จะบันทึกใน browser นี้ก่อน รุ่น backend จะย้ายไปฐานข้อมูลกลาง</p>
          ${masterDataForm(activeKey)}
        </aside>
      </div>
    </section>
  `;
}

function dashboardPage() {
  const maxMonthly = Math.max(...fiscalDashboard.monthly.map(row => Math.max(row.sets, row.supplies)));
  return `
    ${pageHeader("Dashboard", `ภาพรวมสถิติจ่าย CSSD ${fiscalDashboard.period}`, `<button class="btn blue" data-route="cssdReports">รายงาน CSSD</button>`)}
    <section class="metrics">
      <div class="metric"><span class="muted">จ่าย Set ทั่วไป</span><b>${formatNumber(fiscalDashboard.setTotal)}</b><span>รายการ</span></div>
      <div class="metric"><span class="muted">มูลค่า Set</span><b>${formatMoney(fiscalDashboard.setValue)}</b><span>บาท</span></div>
      <div class="metric"><span class="muted">จ่ายวัสดุสิ้นเปลือง</span><b>${formatNumber(fiscalDashboard.supplyTotal)}</b><span>รายการ</span></div>
      <div class="metric"><span class="muted">มูลค่าวัสดุ</span><b>${formatMoney(fiscalDashboard.supplyValue)}</b><span>บาท</span></div>
    </section>
    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>แนวโน้มการจ่ายรายเดือน</h2>
          <p class="muted">เปรียบเทียบจำนวน Set ทั่วไปกับวัสดุสิ้นเปลืองตามเดือนในปีงบประมาณ</p>
        </div>
        ${badge("FY2566")}
      </div>
      <div class="chart-bars">
        ${fiscalDashboard.monthly.map(row => `
          <div class="month-bar">
            <div class="bar-pair">
              <span class="bar set" style="height:${Math.max(8, row.sets / maxMonthly * 100)}%" title="Set ${formatNumber(row.sets)}"></span>
              <span class="bar supply" style="height:${Math.max(8, row.supplies / maxMonthly * 100)}%" title="วัสดุ ${formatNumber(row.supplies)}"></span>
            </div>
            <strong>${monthLabel(row.month)}</strong>
            <span>${formatCompact(row.sets)} / ${formatCompact(row.supplies)}</span>
          </div>
        `).join("")}
      </div>
      <div class="chart-legend">
        <span><i class="legend-dot set"></i>Set ทั่วไป</span>
        <span><i class="legend-dot supply"></i>วัสดุสิ้นเปลือง</span>
        <span class="muted">ที่มา: ${fiscalDashboard.source}</span>
      </div>
    </section>
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>Top รายการ Set ตามมูลค่า</h2><button class="btn ghost" data-route="reports">ดูรายงาน</button></div>
        <div class="rank-list">${rankList(fiscalDashboard.topSetItems)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Top หน่วยงานใช้ Set</h2></div>
        <div class="rank-list">${rankList(fiscalDashboard.topSetDepartments)}</div>
      </div>
    </section>
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>Top วัสดุสิ้นเปลือง</h2></div>
        <div class="rank-list">${rankList(fiscalDashboard.topSupplyItems)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>หน่วยงานใช้วัสดุสูงสุด</h2></div>
        <div class="rank-list">${rankList(fiscalDashboard.topSupplyDepartments)}</div>
      </div>
    </section>
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>Resterile ตามหน่วยงาน</h2><span class="badge amber">เฝ้าระวัง</span></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>หน่วยงาน</th><th>Resterile Qty</th><th>% Qty</th></tr></thead>
            <tbody>
              ${fiscalDashboard.resterileDepartments.map(row => `
                <tr><td>${row.name}</td><td>${formatNumber(row.qty)}</td><td>${formatPercent(row.rate)}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>เครื่อง / รอบ</h2></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ประเภท</th><th>เครื่อง</th><th>รอบ</th><th>ชิ้น</th></tr></thead>
            <tbody>
              ${fiscalDashboard.machines.map(row => `
                <tr><td>${row.type}</td><td>${row.name}</td><td>${formatNumber(row.cycles)}</td><td>${formatNumber(row.pieces)}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function receivePage() {
  const departmentOptions = activeMasterRows("departments").map(item => `<option value="${item.code}">${item.code} - ${item.name}</option>`).join("");
  const setOptions = activeMasterRows("setTypes").map(item => `<option value="${item.name}">${item.code} - ${item.name}</option>`).join("");
  return `
    ${pageHeader("รับเข้า / ตรวจรับ", "บันทึกรายการ set จากหน่วยงานและส่งเข้าสู่คิว CSSD")}
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>ฟอร์มรับเข้า</h2></div>
        <div class="panel-body">
          <form class="form-grid" data-action="add-set">
            <div class="field">
              <label>ชื่อ Set</label>
              <select class="select" name="name" required>
                ${setOptions || "<option>Major Set</option>"}
              </select>
            </div>
            <div class="field">
              <label>หน่วยงาน</label>
              <select class="select" name="department">
                ${departmentOptions || "<option>OR</option><option>ER</option><option>OPD</option><option>Ward 4</option><option>ICU</option>"}
              </select>
            </div>
            <div class="field">
              <label>ความเร่งด่วน</label>
              <select class="select" name="priority"><option>ปกติ</option><option>ด่วน</option></select>
            </div>
            <div class="field">
              <label>ผู้รับงาน</label>
              <input class="input" name="owner" value="${state.user?.name || "Admin"}">
            </div>
            <div class="field full">
              <label>หมายเหตุ</label>
              <textarea class="textarea" name="note" placeholder="รายละเอียดความเสียหายหรือจำนวนชิ้น"></textarea>
            </div>
            <div class="full toolbar">
              <button class="btn primary" type="submit">บันทึกรับเข้า</button>
            </div>
          </form>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>รายการรับเข้าล่าสุด</h2></div>
        <div class="table-wrap">${setsTable(state.sets.filter(item => item.status === "รับเข้า"))}</div>
      </div>
    </section>
  `;
}

function workflowPage() {
  return `
    ${pageHeader("Workflow CSSD", "เปลี่ยนสถานะงาน ล้าง แพ็ก อบฆ่าเชื้อ และพร้อมจ่าย")}
    <section class="panel">
      <div class="panel-head">
        <h2>รายการ Set ทั้งหมด</h2>
        <span class="badge blue">${state.sets.length} รายการ</span>
      </div>
      <div class="table-wrap">${setsTable(state.sets, true)}</div>
    </section>
  `;
}

function dispatchPage() {
  return `
    ${pageHeader("เบิก / จ่าย / คืน", "จัดการคำขอเบิกและการจ่ายคืนให้หน่วยงาน", `<button class="btn primary" data-action="add-request">เพิ่มคำขอ</button>`)}
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>คำขอเบิก</h2></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>เลขที่</th><th>หน่วยงาน</th><th>รายการ</th><th>จำนวน</th><th>สถานะ</th><th></th></tr></thead>
            <tbody>
              ${state.requests.map(req => `
                <tr>
                  <td>${req.id}</td><td>${req.department}</td><td>${req.item}</td><td>${req.qty}</td><td>${badge(req.status)}</td>
                  <td><button class="btn ghost" data-request-next="${req.id}">ถัดไป</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>พร้อมจ่าย</h2></div>
        <div class="table-wrap">${setsTable(state.sets.filter(item => item.status === "พร้อมจ่าย"), true)}</div>
      </div>
    </section>
  `;
}

function stockPage() {
  return `
    ${pageHeader("คลัง CSSD", "ติดตามวัสดุสิ้นเปลืองและจุดสั่งซื้อขั้นต่ำ")}
    <section class="panel">
      <div class="panel-head"><h2>รายการ Stock</h2><span class="badge amber">ต่ำกว่า min ${lowStock().length}</span></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>รหัส</th><th>รายการ</th><th>คงเหลือ</th><th>Min</th><th>สถานะ</th><th></th></tr></thead>
          <tbody>
            ${state.stock.map(item => `
              <tr>
                <td>${item.code}</td><td>${item.name}</td><td>${item.balance} ${item.unit}</td><td>${item.min}</td>
                <td>${item.balance < item.min ? badge("ต่ำกว่า min") : badge("ปกติ")}</td>
                <td><button class="btn ghost" data-stock-add="${item.code}">รับเพิ่ม 10</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function stickersPage() {
  return `
    ${pageHeader("Sticker / Barcode", "ตัวอย่าง label สำหรับติดตาม set และรอบอบ")}
    <section class="panel">
      <div class="panel-head"><h2>พิมพ์ Label</h2></div>
      <div class="panel-body workflow">
        ${state.sets.slice(0, 4).map(item => `
          <div class="step">
            <span class="step-num">QR</span>
            <div><strong>${item.id}</strong><p class="muted">${item.name} • ${item.department} • ${item.cycle}</p></div>
            <button class="btn ghost" data-action="print-sticker">พิมพ์</button>
          </div>
        `).join("")}
        <div class="alert">ใน MVP นี้เป็น mock print เท่านั้น รุ่น backend จะเชื่อมต่อเครื่องพิมพ์ sticker ผ่าน browser print หรือ print service</div>
      </div>
    </section>
  `;
}

function reportsPage() {
  const byDept = groupCount(state.sets, "department");
  return `
    ${pageHeader("รายงาน", "รายงานปริมาณงาน CSSD และ KPI เบื้องต้น")}
    <section class="metrics">
      <div class="metric"><span class="muted">Turnaround เฉลี่ย</span><b>4.2</b><span>ชั่วโมง</span></div>
      <div class="metric"><span class="muted">จ่ายแล้ว</span><b>${state.sets.filter(item => item.status === "จ่ายแล้ว").length}</b><span>set</span></div>
      <div class="metric"><span class="muted">รอจ่าย</span><b>${state.sets.filter(item => item.status === "พร้อมจ่าย").length}</b><span>set</span></div>
      <div class="metric"><span class="muted">คำขอเบิก</span><b>${state.requests.length}</b><span>รายการ</span></div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>ปริมาณงานตามหน่วยงาน</h2></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>หน่วยงาน</th><th>จำนวน Set</th><th>สัดส่วน</th></tr></thead>
          <tbody>
            ${Object.entries(byDept).map(([dept, count]) => `<tr><td>${dept}</td><td>${count}</td><td>${Math.round(count / state.sets.length * 100)}%</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function assetsPage() {
  return `
    ${pageHeader("Asset / PM", "ทะเบียนเครื่องมือและแผนบำรุงรักษา")}
    <section class="panel">
      <div class="panel-head"><h2>เครื่องอบและอุปกรณ์หลัก</h2></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Asset</th><th>ชื่อเครื่อง</th><th>PM ถัดไป</th><th>สถานะ</th></tr></thead>
          <tbody>
            <tr><td>AST-001</td><td>Autoclave 1</td><td>2026-07-15</td><td>${badge("พร้อมใช้")}</td></tr>
            <tr><td>AST-002</td><td>Autoclave 2</td><td>2026-07-20</td><td>${badge("พร้อมใช้")}</td></tr>
            <tr><td>AST-003</td><td>Ultrasonic Cleaner</td><td>2026-07-02</td><td>${badge("ใกล้ PM")}</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function settingsPage() {
  return `
    ${pageHeader("ผู้ใช้ / ตั้งค่า", "โครงสิทธิ์ผู้ใช้สำหรับรุ่นจริง")}
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>Roles</h2></div>
        <div class="panel-body workflow">
          <div class="step"><span class="step-num">A</span><div><strong>Admin</strong><p class="muted">จัดการระบบและ master data</p></div>${badge("เต็มสิทธิ์")}</div>
          <div class="step"><span class="step-num">C</span><div><strong>CSSD Staff</strong><p class="muted">รับเข้า เปลี่ยนสถานะ จ่ายคืน</p></div>${badge("ปฏิบัติงาน")}</div>
          <div class="step"><span class="step-num">W</span><div><strong>Ward User</strong><p class="muted">ขอเบิกและติดตามสถานะ</p></div>${badge("หน่วยงาน")}</div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Security Checklist</h2></div>
        <div class="panel-body workflow">
          <div class="alert">รุ่นจริงต้องเปลี่ยนรหัส admin/admin, เปิด audit log, hash password และแยก permission รายเมนู</div>
        </div>
      </div>
    </section>
  `;
}

function rankList(rows) {
  const max = Math.max(...rows.map(row => row.value));
  return rows.map((row, index) => `
    <div class="rank-row">
      <span class="rank-num">${index + 1}</span>
      <div>
        <strong>${row.name}</strong>
        <div class="rank-track"><span style="width:${Math.max(4, row.value / max * 100)}%"></span></div>
      </div>
      <b>${formatMoney(row.value)}</b>
    </div>
  `).join("");
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("th-TH");
}

function formatMoney(value) {
  const number = Number(value || 0);
  if (number >= 1000000) return `${(number / 1000000).toLocaleString("th-TH", { maximumFractionDigits: 1 })}M`;
  return number.toLocaleString("th-TH");
}

function formatCompact(value) {
  return Intl.NumberFormat("th-TH", { notation: "compact", maximumFractionDigits: 1 }).format(Number(value || 0));
}

function formatPercent(value) {
  return `${(Number(value || 0) * 100).toLocaleString("th-TH", { maximumFractionDigits: 1 })}%`;
}

function monthLabel(value) {
  const [, month] = String(value).split("-");
  return month || value;
}

function masterDataTable(key) {
  const definition = masterDataDefinitions[key];
  const rows = masterRows(key);
  if (!rows.length) return `<div class="empty">ยังไม่มีข้อมูลตั้งต้น</div>`;
  return `
    <table>
      <thead>
        <tr>
          ${definition.columns.map(([, label]) => `<th>${label}</th>`).join("")}
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            ${definition.columns.map(([field]) => `<td>${masterCell(row[field], field)}</td>`).join("")}
            <td>
              <button class="btn ghost" data-toggle-master="${key}" data-master-id="${row.id}">
                ${row.active === false ? "เปิดใช้" : "ปิดใช้"}
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function masterDataForm(key) {
  const definition = masterDataDefinitions[key];
  return `
    <form class="form-grid master-fields" data-action="add-master" data-master-key="${key}">
      ${definition.fields.map(([name, label, type = "text"]) => `
        <div class="field ${definition.fields.length > 4 ? "" : "full"}">
          <label>${label}</label>
          ${masterFieldInput(name, type)}
        </div>
      `).join("")}
      <div class="full toolbar">
        <button class="btn primary" type="submit">บันทึกข้อมูลตั้งต้น</button>
      </div>
    </form>
  `;
}

function masterFieldInput(name, type) {
  if (type === "boolean") {
    return `
      <select class="select" name="${name}">
        <option value="true">ใช่</option>
        <option value="false">ไม่ใช่</option>
      </select>
    `;
  }
  return `<input class="input" name="${name}" type="${type}" required>`;
}

function masterCell(value, field) {
  if (field === "active") return badge(value === false ? "ปิดใช้งาน" : "เปิดใช้งาน");
  if (field === "required") return badge(value ? "บังคับ" : "ตัวเลือก");
  if (value === undefined || value === "") return "-";
  return String(value);
}

function masterRows(key) {
  return Array.isArray(state[key]) ? state[key] : [];
}

function activeMasterRows(key) {
  return masterRows(key).filter(row => row.active !== false);
}

function addMasterRecord(key, form) {
  const definition = masterDataDefinitions[key];
  if (!definition) return;
  const data = new FormData(form);
  const nextNumber = String(masterRows(key).length + 1).padStart(3, "0");
  const record = { id: `${definition.prefix}-${nextNumber}`, active: true };
  definition.fields.forEach(([name, , type = "text"]) => {
    const value = data.get(name);
    if (type === "number") record[name] = Number(value || 0);
    else if (type === "boolean") record[name] = value === "true";
    else record[name] = value;
  });
  state[key] = [record, ...masterRows(key)];
}

function toggleMasterRecord(key, id) {
  const row = masterRows(key).find(item => item.id === id);
  if (row) row.active = row.active === false;
}

function setsTable(rows, withAction = false) {
  if (!rows.length) return `<div class="empty">ยังไม่มีรายการ</div>`;
  return `
    <table>
      <thead><tr><th>Tracking</th><th>Set</th><th>หน่วยงาน</th><th>สถานะ</th><th>รอบอบ</th><th>อัปเดต</th>${withAction ? "<th></th>" : ""}</tr></thead>
      <tbody>
        ${rows.map(item => `
          <tr>
            <td><strong>${item.id}</strong></td>
            <td>${item.name}<br><span class="muted">${item.priority} • ${item.owner}</span></td>
            <td>${item.department}</td>
            <td>${badge(item.status)}</td>
            <td>${item.cycle}</td>
            <td>${item.updatedAt}</td>
            ${withAction ? `<td><button class="btn ghost" data-next-status="${item.id}">ถัดไป</button></td>` : ""}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function badge(text) {
  let color = "";
  if (["พร้อมจ่าย", "จ่ายแล้ว", "พร้อมใช้", "ปกติ", "เปิดใช้งาน", "บังคับ"].includes(text)) color = "green";
  if (["ล้าง", "แพ็ก", "เตรียมจ่าย", "ใกล้ PM"].includes(text)) color = "amber";
  if (["รับเข้า", "อบฆ่าเชื้อ", "รออนุมัติ", "เต็มสิทธิ์", "ปฏิบัติงาน", "หน่วยงาน", "Master", "ตัวเลือก"].includes(text)) color = "blue";
  if (["ต่ำกว่า min", "ปิดใช้งาน"].includes(text)) color = "red";
  return `<span class="badge ${color}">${text}</span>`;
}

function lowStock() {
  return state.stock.filter(item => item.balance < item.min);
}

function groupCount(rows, key) {
  return rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + 1;
    return acc;
  }, {});
}

function nextStatus(id) {
  const item = state.sets.find(row => row.id === id);
  if (!item) return;
  const current = statusFlow.indexOf(item.status);
  item.status = statusFlow[Math.min(current + 1, statusFlow.length - 1)];
  item.updatedAt = new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
  if (item.status === "อบฆ่าเชื้อ" && item.cycle === "ยังไม่เข้าเครื่อง") item.cycle = "AUTO-03";
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach(button => {
    button.addEventListener("click", () => {
      if (button.dataset.route === "logout") {
        state.loggedIn = false;
        state.user = null;
        saveState();
        render();
        return;
      }
      state.route = button.dataset.route;
      state.sidebarOpen = false;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-master-tab]").forEach(button => {
    button.addEventListener("click", () => {
      state.masterDataTab = button.dataset.masterTab;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-action]").forEach(element => {
    element.addEventListener("click", event => {
      const action = element.dataset.action;
      if (action === "toggle-sidebar") {
        state.sidebarOpen = !state.sidebarOpen;
        render();
      }
      if (action === "logout") {
        state.loggedIn = false;
        state.user = null;
        saveState();
        render();
      }
      if (action === "add-request") {
        state.requests.unshift({ id: `REQ-${String(state.requests.length + 1).padStart(3, "0")}`, department: "OR", item: "Major Set", qty: 1, status: "รออนุมัติ" });
        saveState();
        render();
      }
      if (action === "print-sticker") {
        window.print();
      }
    });
  });

  document.querySelectorAll('[data-action="add-master"]').forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      addMasterRecord(form.dataset.masterKey, form);
      saveState();
      render();
    });
  });

  const loginForm = document.querySelector('[data-action="login"]');
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(loginForm);
      if (data.get("username") === "admin" && data.get("password") === "admin") {
        state.loggedIn = true;
        state.user = { name: "Admin CSSD", role: "CSSD Admin" };
        saveState();
        render();
      } else {
        alert("Username หรือ Password ไม่ถูกต้อง");
      }
    });
  }

  const receiveForm = document.querySelector('[data-action="add-set"]');
  if (receiveForm) {
    receiveForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(receiveForm);
      state.sets.unshift({
        id: `SET-240627-${String(state.sets.length + 1).padStart(3, "0")}`,
        name: data.get("name"),
        department: data.get("department"),
        priority: data.get("priority"),
        status: "รับเข้า",
        owner: data.get("owner"),
        updatedAt: new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" }),
        cycle: "ยังไม่เข้าเครื่อง"
      });
      saveState();
      state.route = "workflow";
      render();
    });
  }

  document.querySelectorAll("[data-next-status]").forEach(button => {
    button.addEventListener("click", () => {
      nextStatus(button.dataset.nextStatus);
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-stock-add]").forEach(button => {
    button.addEventListener("click", () => {
      const item = state.stock.find(row => row.code === button.dataset.stockAdd);
      if (item) item.balance += 10;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-request-next]").forEach(button => {
    button.addEventListener("click", () => {
      const req = state.requests.find(row => row.id === button.dataset.requestNext);
      const flow = ["รออนุมัติ", "เตรียมจ่าย", "จ่ายแล้ว"];
      if (req) req.status = flow[Math.min(flow.indexOf(req.status) + 1, flow.length - 1)];
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-toggle-master]").forEach(button => {
    button.addEventListener("click", () => {
      toggleMasterRecord(button.dataset.toggleMaster, button.dataset.masterId);
      saveState();
      render();
    });
  });
}

render();
