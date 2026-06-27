const initialState = {
  loggedIn: false,
  user: null,
  route: "dashboard",
  sidebarOpen: false,
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
  ]
};

let state = loadState();

const menus = [
  ["dashboard", "DB", "Dashboard"],
  ["receive", "IN", "รับเข้า / ตรวจรับ"],
  ["workflow", "WF", "Workflow CSSD"],
  ["dispatch", "DO", "เบิก / จ่าย / คืน"],
  ["stock", "ST", "คลัง CSSD"],
  ["stickers", "QR", "Sticker / Barcode"],
  ["reports", "RP", "รายงาน"],
  ["assets", "PM", "Asset / PM"],
  ["settings", "US", "ผู้ใช้ / ตั้งค่า"]
];

const statusFlow = ["รับเข้า", "ล้าง", "แพ็ก", "อบฆ่าเชื้อ", "พร้อมจ่าย", "จ่ายแล้ว"];

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
    stock: stockPage,
    stickers: stickersPage,
    reports: reportsPage,
    assets: assetsPage,
    settings: settingsPage
  };
  return (pages[state.route] || dashboardPage)();
}

function dashboardPage() {
  const counts = Object.fromEntries(statusFlow.map(status => [status, state.sets.filter(item => item.status === status).length]));
  return `
    ${pageHeader("Dashboard", "ภาพรวมงาน CSSD วันนี้", `<button class="btn blue" data-route="receive">รับเข้า set</button>`)}
    <section class="metrics">
      <div class="metric"><span class="muted">รับเข้าวันนี้</span><b>${state.sets.length}</b><span>รายการ</span></div>
      <div class="metric"><span class="muted">กำลังดำเนินการ</span><b>${counts["รับเข้า"] + counts["ล้าง"] + counts["แพ็ก"] + counts["อบฆ่าเชื้อ"]}</b><span>รายการ</span></div>
      <div class="metric"><span class="muted">พร้อมจ่าย</span><b>${counts["พร้อมจ่าย"]}</b><span>รายการ</span></div>
      <div class="metric"><span class="muted">Stock ต่ำกว่า min</span><b>${lowStock().length}</b><span>รายการ</span></div>
    </section>
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>คิวงานล่าสุด</h2><button class="btn ghost" data-route="workflow">ดูทั้งหมด</button></div>
        <div class="table-wrap">${setsTable(state.sets.slice(0, 5), true)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>สถานะ Workflow</h2></div>
        <div class="panel-body workflow">
          ${statusFlow.map((status, index) => `
            <div class="step">
              <span class="step-num">${index + 1}</span>
              <div><strong>${status}</strong><p class="muted">${counts[status]} รายการ</p></div>
              ${badge(status)}
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function receivePage() {
  return `
    ${pageHeader("รับเข้า / ตรวจรับ", "บันทึกรายการ set จากหน่วยงานและส่งเข้าสู่คิว CSSD")}
    <section class="grid-2">
      <div class="panel">
        <div class="panel-head"><h2>ฟอร์มรับเข้า</h2></div>
        <div class="panel-body">
          <form class="form-grid" data-action="add-set">
            <div class="field">
              <label>ชื่อ Set</label>
              <input class="input" name="name" placeholder="เช่น Major Set" required>
            </div>
            <div class="field">
              <label>หน่วยงาน</label>
              <select class="select" name="department">
                <option>OR</option><option>ER</option><option>OPD</option><option>Ward 4</option><option>ICU</option>
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
  if (["พร้อมจ่าย", "จ่ายแล้ว", "พร้อมใช้", "ปกติ"].includes(text)) color = "green";
  if (["ล้าง", "แพ็ก", "เตรียมจ่าย", "ใกล้ PM"].includes(text)) color = "amber";
  if (["รับเข้า", "อบฆ่าเชื้อ", "รออนุมัติ", "เต็มสิทธิ์", "ปฏิบัติงาน", "หน่วยงาน"].includes(text)) color = "blue";
  if (["ต่ำกว่า min"].includes(text)) color = "red";
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
      state.route = button.dataset.route;
      state.sidebarOpen = false;
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
}

render();
