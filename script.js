const CROSSWIND_VERSIONS = [
  {
    id: "gen1",
    name: "Gen 1 (2001–2004): XL, XT, XTO, XUV, XUVi",
    engine: "4JA1 2.5L Direct Injection NA (85 hp) & 4JA1-T Low-Charge Turbo (87–90 hp)",
    trans: "5-Speed Manual (MUA5) / 4-Speed Jatco Automatic (XTO / XUVi)",
    highlights: "Timing gear-driven valvetrain (no timing belt), mechanical Bosch VE rotary injection pump, rear leaf springs, torsion bar front suspension.",
    keyNotes: "Use 15W-40 CI-4/CH-4 mineral or semi-synthetic diesel oil. Inspect injection pump fuel cut solenoid & glow plug relay."
  },
  {
    id: "gen2",
    name: "Gen 2 (2005–2009): Sportivo, XTi, XT, XL",
    engine: "4JA1-T 2.5L Turbo Direct Injection (Euro 2)",
    trans: "5-Speed Manual / 4-Speed Automatic (Sportivo & XTi)",
    highlights: "Redesigned multi-reflector headlamps, tire-on-back spare carrier on Sportivo, upgraded dual-aircon evaporator & condenser.",
    keyNotes: "Inspect turbocharger oil feed/return lines for weeping; clean EGR valve every 20,000 km."
  },
  {
    id: "gen3",
    name: "Gen 3 (2010–2014): Sportivo X, XUV, XT, XL",
    engine: "4JA1-T 2.5L Turbo Direct Injection (Euro 2)",
    trans: "5-Speed Manual / 4-Speed Automatic",
    highlights: "Projector headlights (Sportivo X), integrated roof rails, 2-DIN entertainment system, revised instrument cluster.",
    keyNotes: "Check auxiliary electric condenser fan motor brushes and front upper/lower ball joints."
  },
  {
    id: "gen4",
    name: "Gen 4 (2015–2017): Sportivo X, XUV, XT, XL (Final Run)",
    engine: "4JA1-L / 4JK1-TC 2.5L VGS Turbo CRDi (Selected Late Export/Euro 4 Specs)",
    trans: "5-Speed Manual / 4-Speed Automatic",
    highlights: "LED daytime running lights, Euro 4 emissions compliance (EGR + catalytic converter), final facelift before Isuzu Traviz / mu-X transition.",
    keyNotes: "For CRDi/Euro 4 units: strictly use Euro 4 low-sulfur diesel and replace primary + secondary fuel water separator filters on schedule."
  }
];

const MAINTENANCE_CHECKLISTS = [
  {
    id: "chk-first",
    interval: "first",
    badge: "First Check (1,000 – 5,000 km)",
    title: "Break-In, Post-Rebuild & First Service Check",
    variants: ["all", "gen1", "gen2", "gen3", "gen4"],
    tasks: [
      { id: "t1", title: "Drain break-in engine oil & replace OEM Oil Filter", meta: "Capacity: 5.2L (4JA1) / 5.5L (4JA1-T with filter). Torque drain plug: 40–45 Nm." },
      { id: "t2", title: "Inspect cylinder head & valve cover gasket torque", meta: "Check for initial thermal expansion seepage around valve cover half-moon seal." },
      { id: "t3", title: "Re-torque suspension U-bolts, lug nuts & chassis bolts", meta: "Wheel lug nuts: 118 Nm (12 kg-m). Rear leaf spring U-bolts: 95–110 Nm." },
      { id: "t4", title: "Check alternator, power steering & A/C V-belt deflection", meta: "Deflection should be 8–10 mm under 10 kg thumb pressure." },
      { id: "t5", title: "Bleed fuel sedimenter / water separator & check radiator coolant level", meta: "Ensure 50/50 Ethylene Glycol pre-mixed coolant in reservoir." }
    ]
  },
  {
    id: "chk-monthly",
    interval: "monthly",
    badge: "Monthly / BLOWBAGETS",
    title: "Monthly Owner Inspection & Preventive Routine",
    variants: ["all", "gen1", "gen2", "gen3", "gen4"],
    tasks: [
      { id: "t6", title: "Battery terminals, electrolyte level & alternator charging voltage", meta: "3SMF / N70ZL battery. Idle voltage: 13.8V–14.4V with A/C on." },
      { id: "t7", title: "Check Engine Oil dipstick & Coolant expansion tank", meta: "Inspect on level ground before cold start; verify zero oil-in-coolant emulsification." },
      { id: "t8", title: "Drain water from Fuel Filter / Water Separator", meta: "Loosen bottom drain cock, pump primer until clean diesel flows, retighten." },
      { id: "t9", title: "Tire pressure, tread wear & spare tire carrier lock", meta: "Front: 30–32 psi | Rear: 35–40 psi (loaded). Rotate every 10,000 km." },
      { id: "t10", title: "Test Glow Plug pre-heat indicator & cold start cranking", meta: "Normal glow timer cycle: 3–6 seconds before cranking." }
    ]
  },
  {
    id: "chk-quarterly",
    interval: "quarterly",
    badge: "Quarterly (Every 3 Months / 5,000 km)",
    title: "5,000 km Preventive Maintenance Service (PMS)",
    variants: ["all", "gen1", "gen2", "gen3", "gen4"],
    tasks: [
      { id: "t11", title: "Replace Engine Oil (15W-40 API CI-4/CJ-4) & Oil Filter", meta: "OEM Part: 8-97148270-0 (4JA1/4JA1-T). Always pre-fill new filter." },
      { id: "t12", title: "Clean Air Filter element with compressed air (inside-out)", meta: "Replace every 15,000–20,000 km or sooner in dusty provincial driving." },
      { id: "t13", title: "Grease front suspension ball joints, tie rods & propeller shaft U-joints", meta: "Use Lithium Complex EP2 NLGI #2 grease via zerk fittings." },
      { id: "t14", title: "Inspect front disc brake pads & rear drum brake shoe thickness", meta: "Minimum pad lining: 2.0 mm; minimum drum shoe lining: 1.5 mm." },
      { id: "t15", title: "Check clutch master/slave cylinder & brake fluid levels (DOT 3/4)", meta: "Inspect rubber boots for brake fluid weeping." }
    ]
  },
  {
    id: "chk-semi",
    interval: "semi",
    badge: "Semi-Annual (Every 6 Months / 10,000–20,000 km)",
    title: "10,000 km – 20,000 km Intermediate Service",
    variants: ["all", "gen1", "gen2", "gen3", "gen4"],
    tasks: [
      { id: "t16", title: "Replace Spin-On Fuel Filter & Air Cleaner Element", meta: "OEM Fuel Filter: 8-94369299-3 / 8-97071348-0. Prime fuel line after install." },
      { id: "t17", title: "Clean EGR Valve & Intake Manifold passages (Gen 2–4)", meta: "Prevents black smoke, sluggish acceleration, and soot buildup." },
      { id: "t18", title: "Inspect & adjust valve tappet clearance (Cold Engine)", meta: "4JA1 / 4JA1-T Intake & Exhaust clearance: 0.40 mm (0.016 in) cold." },
      { id: "t19", title: "Check A/C dual-blower evaporator, cabin filter & condenser fins", meta: "Clean condenser core with low-pressure water to prevent high-head pressure." },
      { id: "t20", title: "Inspect shock absorbers, leaf spring bushings & stabilizer links", meta: "Replace cracked rubber shackle bushings to eliminate rear clunking." }
    ]
  },
  {
    id: "chk-major",
    interval: "major",
    badge: "Major PMS (Every 40,000 – 80,000 km / 2 Years)",
    title: "Heavy Overhaul & Drivetrain Fluid Renewal",
    variants: ["all", "gen1", "gen2", "gen3", "gen4"],
    tasks: [
      { id: "t21", title: "Drain & replace Transmission Fluid (M/T or A/T)", meta: "Manual (MUA5): 2.9L SAE 15W-40 engine oil or 75W-90 GL-4 | Automatic (Jatco): 6.5L Dexron III ATF + strainer clean." },
      { id: "t22", title: "Drain & replace Rear Differential Gear Oil", meta: "Capacity: 2.2L–2.5L SAE 85W-90 or 80W-90 API GL-5 Hypoid Gear Oil." },
      { id: "t23", title: "Flush Radiator Coolant & test Thermostat (82°C) + Radiator Cap (0.9 bar)", meta: "Capacity: ~7.5L–8.0L with rear heater/auxiliary lines." },
      { id: "t24", title: "Flush Brake & Clutch Hydraulic Fluid + Repack Front Wheel Bearings", meta: "Use high-temp lithium wheel bearing grease; replace inner hub oil seals." },
      { id: "t25", title: "Calibrate Injection Pump & Nozzle Pop-Pressure (Every 80,000 km)", meta: "4JA1 two-stage injector opening pressure: 185 bar (1st stage)." }
    ]
  }
];

const PARTS_CATALOG = [
  { name: "Engine Oil (15W-40 API CI-4 / CJ-4 Diesel)", code: "ISUZU-15W40-6L", system: "Fluids & Lubricants", spec: "5.2L (4JA1) / 5.5L (4JA1-T Turbo)", notes: "Change every 5,000 km (mineral) or 7,500–10,000 km (semi-synthetic)." },
  { name: "Automatic Transmission Fluid (Dexron III)", code: "ATF-DEX3-7L", system: "Fluids & Lubricants", spec: "6.5L–7.0L (Jatco 4-Speed A/T)", notes: "For XTO, XUVi, XTi, and Sportivo Automatic models. Drain & fill every 40,000 km." },
  { name: "Manual Transmission Oil (MUA5)", code: "15W40-MUA5-3L", system: "Fluids & Lubricants", spec: "2.9L (Isuzu MUA5 5-Speed M/T)", notes: "Isuzu specifies 15W-40 motor oil or 75W-90 GL-4 for smooth synchro engagement." },
  { name: "Rear Differential Gear Oil (SAE 85W-90 GL-5)", code: "GL5-85W90-3L", system: "Fluids & Lubricants", spec: "2.3L Rear Axle Differential", notes: "Replace every 40,000 km or immediately after deep flood wading." },
  { name: "Long-Life Premixed Coolant (50/50)", code: "LLC-5050-8L", system: "Fluids & Lubricants", spec: "7.8L Total Cooling System", notes: "Silicate-free Ethylene Glycol; never run pure tap water." },
  { name: "OEM Oil Filter (4JA1 / 4JA1-T)", code: "8-97148270-0", system: "Filters", spec: "Spin-on Full Flow Filter", notes: "Replacement equivalents: Vic C-512 / Baldwin B7131 / Fleetguard LF3644." },
  { name: "OEM Fuel Filter / Water Separator Element", code: "8-94369299-3", system: "Filters", spec: "Spin-on with bottom sensor thread", notes: "Equivalents: Vic FC-503 / Sakura FC-1503. Replace every 10,000–15,000 km." },
  { name: "Air Filter Element (Round / Panel)", code: "8-97104272-0", system: "Filters", spec: "Heavy-duty pleated media", notes: "Equivalents: Vic A-563 / Sakura A-1518." },
  { name: "Timing Gear Train Set (Crank, Cam, Idler, Pump)", code: "4JA1-GEAR-SET", system: "Engine & Valvetrain", spec: "All-gear drive (Zero Timing Belt)", notes: "Built to last 300,000+ km; inspect idler gear thrust washer during major overhaul." },
  { name: "Valve Cover Gasket & Half-Moon Seal", code: "8-97136154-0", system: "Engine & Valvetrain", spec: "Molded NBR Rubber", notes: "Replace whenever adjusting valve clearance (0.40 mm cold)." },
  { name: "Alternator / Fan V-Belt (Matched Pair)", code: "8-97180199-0", system: "Engine & Valvetrain", spec: "Cogged V-Belt 13x1090 / 13x1100", notes: "Keep a spare set in the trunk for long provincial trips." },
  { name: "A/C Compressor V-Belt", code: "8-94362755-0", system: "Engine & Valvetrain", spec: "Cogged V-Belt 13x1225 / 13x1250", notes: "Check tension every 5,000 km to prevent compressor clutch slip." },
  { name: "Water Pump Assembly (4JA1 / 4JA1-T)", code: "8-97105012-0", system: "Cooling System", spec: "Cast impeller with gasket", notes: "Inspect weep hole for coolant residue every 20,000 km." },
  { name: "Thermostat (82°C Opening Temp)", code: "8-97300787-0", system: "Cooling System", spec: "82°C Wax Pellet + Jiggle Valve", notes: "Never delete thermostat; 4JA1 requires stable 82–88°C operating temp." },
  { name: "Silicone Fan Clutch Assembly", code: "8-97129735-0", system: "Cooling System", spec: "Visco-drive thermal clutch", notes: "Refill with 10,000 cSt silicone fluid or replace if fan spins freely when hot." },
  { name: "2-Row / 3-Row Aluminum-Copper Radiator", code: "8-97233592-0", system: "Cooling System", spec: "M/T or A/T (with built-in ATF cooler)", notes: "Flush & rod out every 2 years; use 0.9 bar radiator cap." },
  { name: "Front Disc Brake Pads (Set of 4)", code: "8-97134716-0", system: "Brakes & Wheel Bearings", spec: "Semi-metallic / Ceramic low-dust", notes: "Equivalents: Bendix DB1276 / Akebono AN-432WK." },
  { name: "Rear Drum Brake Shoes (Set of 4)", code: "8-97034092-0", system: "Brakes & Wheel Bearings", spec: "254mm x 50mm Drum Lining", notes: "Clean brake dust & adjust star-wheel self-adjuster every 10,000 km." },
  { name: "Front Wheel Bearings (Inner & Outer) + Hub Seal", code: "30207 / 30205", system: "Brakes & Wheel Bearings", spec: "Tapered Roller Bearings + Oil Seal", notes: "Repack with high-temp grease every 40,000 km." },
  { name: "Upper & Lower Ball Joints (Left & Right)", code: "8-97102823-0", system: "Suspension & Steering", spec: "Greaseable heavy-duty joint", notes: "Critical safety item: inspect for vertical play every 10,000 km." },
  { name: "Idler Arm, Pitman Arm & Tie Rod Ends", code: "8-94459480-0", system: "Suspension & Steering", spec: "Steering linkage assembly", notes: "Eliminates steering wheel play and wandering at highway speed." },
  { name: "Front & Rear Gas-Charged Shock Absorbers", code: "KYB-344200 / 344201", system: "Suspension & Steering", spec: "Twin-tube Gas / Oil", notes: "Upgrade to KYB Gas-A-Just or Excel-G for improved XUV/Sportivo ride control." },
  { name: "Clutch Disc, Pressure Plate & Release Bearing", code: "8-97066345-0", system: "Drivetrain & Clutch", spec: "240mm 24-Spline Clutch Kit", notes: "Recommended brands: Exedy Japan or Isuzu OEM." },
  { name: "Propeller Shaft Center Bearing & Cross U-Joints", code: "8-94328800-0", system: "Drivetrain & Clutch", spec: "GMB GUT-21 / Center Support", notes: "Grease U-joints every 5,000 km; prevents driveline vibration at 60–80 km/h." },
  { name: "Glow Plugs (Set of 4 - 11V Quick-Glow)", code: "8-97143674-1", system: "Electrical & Glow Plugs", spec: "11V Ceramic/Metal Tip", notes: "Replace as a matched set of 4 if cold morning starting becomes rough." },
  { name: "Alternator with Rear Vacuum Pump (70A–90A)", code: "8-97189113-0", system: "Electrical & Glow Plugs", spec: "12V IC Regulator + Brake Booster Pump", notes: "Check vacuum pump oil hose for cracks (loss of brake assist if hose splits)." }
];

let state = {
  version: localStorage.getItem("cw_version") || "all",
  interval: "all",
  completed: JSON.parse(localStorage.getItem("cw_completed") || "{}"),
  logs: JSON.parse(localStorage.getItem("cw_service_logs") || "[]"),
  onboarded: localStorage.getItem("cw_onboarded") === "true",
  theme: localStorage.getItem("cw_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
};

const versionSelect = document.getElementById("versionSelect");
const checklistContainer = document.getElementById("checklistContainer");
const versionsContainer = document.getElementById("versionsContainer");
const partsContainer = document.getElementById("partsContainer");
const serviceLogList = document.getElementById("serviceLogList");
const progressFill = document.getElementById("progressFill");
const progressBarWrap = document.getElementById("progressBarWrap");
const completedCount = document.getElementById("completedCount");
const progressPercent = document.getElementById("progressPercent");
const offlineBadge = document.getElementById("offlineBadge");
const toastEl = document.getElementById("toast");
const onboardingBanner = document.getElementById("onboardingBanner");

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

if (!state.onboarded) {
  onboardingBanner.classList.remove("hidden");
}
document.getElementById("dismissOnboardingBtn").addEventListener("click", () => {
  state.onboarded = true;
  localStorage.setItem("cw_onboarded", "true");
  onboardingBanner.classList.add("hidden");
});

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("cw_theme", theme);
}
applyTheme(state.theme);

document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme(state.theme);
  showToast(`Switched to ${state.theme} mode`);
});

versionSelect.value = state.version;
versionSelect.addEventListener("change", (e) => {
  state.version = e.target.value;
  localStorage.setItem("cw_version", state.version);
  renderChecklists();
  renderVersions();
});

function renderChecklists() {
  const filtered = MAINTENANCE_CHECKLISTS.filter(group => {
    const matchInterval = state.interval === "all" || group.interval === state.interval;
    const matchVersion = state.version === "all" || group.variants.includes(state.version);
    return matchInterval && matchVersion;
  });

  let totalTasks = 0;
  let doneTasks = 0;

  checklistContainer.innerHTML = filtered.map(group => {
    const itemsHtml = group.tasks.map(task => {
      totalTasks++;
      const isChecked = !!state.completed[task.id];
      if (isChecked) doneTasks++;
      return `
        <li class="task-item ${isChecked ? "done" : ""}">
          <input type="checkbox" class="task-checkbox" id="${task.id}" data-task-id="${task.id}" ${isChecked ? "checked" : ""} />
          <label class="task-label" for="${task.id}">
            <span class="task-title">${task.title}</span>
            <span class="task-meta">${task.meta}</span>
          </label>
        </li>
      `;
    }).join("");

    return `
      <article class="card">
        <div class="card-header">
          <div>
            <span class="badge">${group.badge}</span>
            <h3 class="card-title" style="margin-top:8px;">${group.title}</h3>
          </div>
        </div>
        <ul class="task-list">${itemsHtml}</ul>
      </article>
    `;
  }).join("");

  const pct = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);
  progressFill.style.width = `${pct}%`;
  progressBarWrap.setAttribute("aria-valuenow", pct);
  completedCount.textContent = `${doneTasks} / ${totalTasks} tasks completed`;
  progressPercent.textContent = `${pct}%`;
}

checklistContainer.addEventListener("change", (e) => {
  if (e.target.matches(".task-checkbox")) {
    const id = e.target.dataset.taskId;
    state.completed[id] = e.target.checked;
    localStorage.setItem("cw_completed", JSON.stringify(state.completed));
    renderChecklists();
    if (e.target.checked) showToast("Maintenance task checked off!");
  }
});

document.getElementById("resetChecklistBtn").addEventListener("click", () => {
  state.completed = {};
  localStorage.removeItem("cw_completed");
  renderChecklists();
  showToast("All checklist items reset.");
});

document.querySelectorAll(".pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach(p => {
      p.classList.remove("active");
      p.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    state.interval = btn.dataset.interval;
    renderChecklists();
  });
});

function renderVersions() {
  const list = state.version === "all"
    ? CROSSWIND_VERSIONS
    : CROSSWIND_VERSIONS.filter(v => v.id === state.version);

  versionsContainer.innerHTML = list.map(v => `
    <article class="card">
      <div class="card-header">
        <h3 class="card-title">${v.name}</h3>
      </div>
      <p><strong>Engine:</strong> ${v.engine}</p>
      <p><strong>Transmission:</strong> ${v.trans}</p>
      <p><strong>Key Architecture:</strong> ${v.highlights}</p>
      <p class="muted-text" style="margin-top:8px;"><strong>Maintenance Focus:</strong> ${v.keyNotes}</p>
    </article>
  `).join("");
}

const partSearchInput = document.getElementById("partSearchInput");
const partCategoryFilter = document.getElementById("partCategoryFilter");

function renderParts() {
  const q = partSearchInput.value.trim().toLowerCase();
  const cat = partCategoryFilter.value;

  const matches = PARTS_CATALOG.filter(item => {
    const matchCat = cat === "all" || item.system === cat;
    const matchQuery = !q ||
      item.name.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.spec.toLowerCase().includes(q) ||
      item.notes.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  if (matches.length === 0) {
    partsContainer.innerHTML = `<div class="card"><p class="card-title">No matching parts found</p><p class="muted-text">Try searching by OEM part number (e.g., 8-97148270-0), system name, or fluid grade, or reset the system filter to All Systems.</p></div>`;
    return;
  }

  partsContainer.innerHTML = matches.map(p => `
    <article class="part-card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
        <span class="part-code">${p.code}</span>
        <span class="badge">${p.system}</span>
      </div>
      <h3 class="card-title">${p.name}</h3>
      <p style="margin:0;font-size:0.875rem;"><strong>Spec / Capacity:</strong> ${p.spec}</p>
      <p class="muted-text" style="margin:0;">${p.notes}</p>
    </article>
  `).join("");
}

partSearchInput.addEventListener("input", renderParts);
partCategoryFilter.addEventListener("change", renderParts);

const logDateInput = document.getElementById("logDate");
if (logDateInput) {
  logDateInput.value = new Date().toISOString().split("T")[0];
}

function renderServiceLogs() {
  if (state.logs.length === 0) {
    serviceLogList.innerHTML = `
      <article class="card">
        <p class="card-title">No service records logged yet</p>
        <p class="muted-text">Use the form above after an oil change or PMS visit to store your Crosswind's maintenance history right on your phone.</p>
      </article>
    `;
    return;
  }

  serviceLogList.innerHTML = state.logs.map((entry, idx) => `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${Number(entry.odo).toLocaleString()} km</span>
          <h4 class="card-title" style="margin-top:8px;">${entry.type}</h4>
        </div>
        <button class="btn btn-outline btn-sm" data-delete-log="${idx}" aria-label="Delete service entry">Delete</button>
      </div>
      <p style="margin:0;font-size:0.875rem;"><strong>Date:</strong> ${entry.date}</p>
      <p class="muted-text" style="margin-top:4px;">${entry.notes || "Standard PMS completed."}</p>
    </article>
  `).join("");
}

document.getElementById("serviceLogForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const entry = {
    date: document.getElementById("logDate").value,
    odo: document.getElementById("logOdo").value,
    type: document.getElementById("logType").value,
    notes: document.getElementById("logNotes").value.trim()
  };
  state.logs.unshift(entry);
  localStorage.setItem("cw_service_logs", JSON.stringify(state.logs));
  document.getElementById("logNotes").value = "";
  renderServiceLogs();
  showToast("Service entry saved offline!");
});

serviceLogList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-delete-log]");
  if (!btn) return;
  const idx = Number(btn.dataset.deleteLog);
  state.logs.splice(idx, 1);
  localStorage.setItem("cw_service_logs", JSON.stringify(state.logs));
  renderServiceLogs();
  showToast("Service entry removed.");
});

document.getElementById("clearLogsBtn").addEventListener("click", () => {
  state.logs = [];
  localStorage.removeItem("cw_service_logs");
  renderServiceLogs();
  showToast("Service log history cleared.");
});

function switchView(viewName, updateHash = true) {
  const validViews = ["checklists", "versions", "parts", "servicelog"];
  const target = validViews.includes(viewName) ? viewName : "checklists";

  document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(`view-${target}`).classList.remove("hidden");

  document.querySelectorAll(".tab-btn, .bottom-btn").forEach(btn => {
    const active = btn.dataset.view === target;
    btn.classList.toggle("active", active);
    if (btn.hasAttribute("aria-selected")) btn.setAttribute("aria-selected", active);
    if (btn.classList.contains("bottom-btn")) {
      if (active) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    }
  });

  if (updateHash && window.location.hash !== `#${target}`) {
    history.pushState(null, "", `#${target}`);
  }
}

document.querySelectorAll(".tab-btn, .bottom-btn").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

window.addEventListener("hashchange", () => {
  const hashView = window.location.hash.replace("#", "");
  if (hashView) switchView(hashView, false);
});

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add("hidden");
});

function updateOnlineStatus() {
  const online = navigator.onLine;
  offlineBadge.textContent = online ? "Online" : "Offline Ready";
  offlineBadge.className = `status-pill ${online ? "online" : "offline"}`;
}
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

// Register Service Worker v3 & purge any old v1/v2 caches
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("./service-worker.js?v=3");
      reg.update();
    } catch (err) {}
  });
}

renderChecklists();
renderVersions();
renderParts();
renderServiceLogs();
updateOnlineStatus();
if (window.location.hash) {
  switchView(window.location.hash.replace("#", ""), false);
}
