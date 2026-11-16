const VARIANT_SPECS = [
  {
    id: "gen1_na",
    name: "Gen 1 (2001–2004): XL, XT — 4JA1 2.5L Naturally Aspirated",
    engineCode: "4JA1",
    engine: "4JA1 2.5L Direct Injection OHV Diesel (85 hp @ 3,900 rpm | 185 Nm @ 2,000 rpm)",
    trans: "5-Speed Manual (Isuzu MUA5)",
    fluids: "Engine Oil: 5.2L (15W-40 CI-4) | M/T Oil: 2.9L (15W-40 or 75W-90 GL-4) | Rear Diff: 2.3L (85W-90 GL-5) | Coolant: 7.5L",
    torque: "Drain Plug: 42 Nm | Wheel Lug Nuts: 118 Nm | Valve Clearance: 0.40 mm (Cold Intake & Exhaust)",
    notes: "All-gear timing train (no timing belt). Mechanical Bosch VE rotary injection pump; check fuel cut solenoid and glow plug relay."
  },
  {
    id: "gen1_turbo",
    name: "Gen 1 (2001–2004): XTO, XUV, XUVi — 4JA1-T 2.5L Turbo",
    engineCode: "4JA1-T",
    engine: "4JA1-T 2.5L Low-Charge Turbo Direct Injection (87–90 hp @ 3,900 rpm | 195 Nm)",
    trans: "5-Speed Manual (MUA5) / 4-Speed Jatco Automatic (XTO / XUVi)",
    fluids: "Engine Oil: 5.5L (15W-40 CI-4) | A/T Fluid: 6.5L (Dexron III) | M/T Oil: 2.9L | Rear Diff: 2.3L (85W-90 GL-5) | Coolant: 7.8L",
    torque: "Drain Plug: 42 Nm | Wheel Lug Nuts: 118 Nm | Valve Clearance: 0.40 mm (Cold)",
    notes: "Allow 30–60 seconds turbo cool-down idle after highway climbs. Inspect turbo oil feed/return pipes during 5,000 km PMS."
  },
  {
    id: "gen2",
    name: "Gen 2 (2005–2009): Sportivo, XTi, XT, XL — 4JA1-T Euro 2",
    engineCode: "4JA1-T",
    engine: "4JA1-T 2.5L Turbo Direct Injection (Euro 2 Spec)",
    trans: "5-Speed Manual (MUA5) / 4-Speed Jatco Automatic (Sportivo & XTi)",
    fluids: "Engine Oil: 5.5L (15W-40 CI-4) | A/T Fluid: 6.5L (Dexron III) | Rear Diff: 2.3L (85W-90 GL-5) | Coolant: 8.0L (Dual A/C)",
    torque: "Drain Plug: 42 Nm | Wheel Lug Nuts: 118 Nm | Rear U-Bolts: 100 Nm | Valve Clearance: 0.40 mm (Cold)",
    notes: "Clean EGR valve & intake manifold every 20,000 km to prevent soot buildup and black smoke."
  },
  {
    id: "gen3",
    name: "Gen 3 (2010–2014): Sportivo X, XUV, XT, XL — 4JA1-T Euro 2",
    engineCode: "4JA1-T",
    engine: "4JA1-T 2.5L Turbo Direct Injection (Euro 2)",
    trans: "5-Speed Manual (MUA5) / 4-Speed Automatic",
    fluids: "Engine Oil: 5.5L (15W-40 CI-4/CJ-4) | A/T Fluid: 6.5L (Dexron III) | Rear Diff: 2.3L (85W-90 GL-5) | Coolant: 8.0L",
    torque: "Drain Plug: 42 Nm | Wheel Lug Nuts: 118 Nm | Valve Clearance: 0.40 mm (Cold)",
    notes: "Inspect auxiliary electric condenser fan motor brushes and front upper/lower greaseable ball joints."
  },
  {
    id: "gen4",
    name: "Gen 4 (2015–2017): Sportivo X, XUV, XT, XL — Euro 4 / 4JK1-TC",
    engineCode: "4JK1-TC",
    engine: "4JA1-L Euro 4 EGR+Cat / 4JK1-TC 2.5L VGS Turbo CRDi (Selected Export/Late Specs)",
    trans: "5-Speed Manual / 4-Speed & 5-Speed Automatic",
    fluids: "4JA1-L: 5.5L 15W-40 CJ-4 | 4JK1-TC CRDi: 6.5L 5W-30/10W-40 API CJ-4/CK-4 | Rear Diff: 2.3L GL-5 | Coolant: 8.2L",
    torque: "Drain Plug: 42 Nm | Wheel Lug Nuts: 118 Nm | 4JK1-TC Glow Plugs: 15–18 Nm",
    notes: "Strictly use Euro 4 low-sulfur diesel and replace primary + secondary fuel water separator filters every 10,000–15,000 km."
  }
];

const MAINTENANCE_CHECKLISTS = [
  {
    id: "chk-daily",
    interval: "daily",
    badge: "Daily & Long-Trip Inspection",
    title: "Pre-Drive & Provincial Highway Safety Check",
    tasks: [
      { id: "d1", title: "Check tire inflation pressure & sidewall condition (cold)", meta: "Front: 30–32 psi | Rear: 35–40 psi (loaded). Verify spare tire carrier lock." },
      { id: "d2", title: "Test brake pedal firmness, handbrake clicks (5–7 clicks) & brake lights", meta: "Soft pedal indicates air in lines or leaking wheel cylinder/master cylinder." },
      { id: "d3", title: "Inspect engine oil dipstick & radiator coolant reservoir level", meta: "Ensure oil sits between MIN and MAX marks on level ground." },
      { id: "d4", title: "Verify horn, headlamps, signal lights, wipers & windshield washer fluid", meta: "Essential before long provincial trips or night driving." }
    ]
  },
  {
    id: "chk-first",
    interval: "first",
    badge: "First Check (1,000 – 5,000 km)",
    title: "Break-In, Post-Rebuild & First Service Check",
    tasks: [
      { id: "t1", title: "Drain break-in engine oil & replace OEM Oil Filter", meta: "Capacity: 5.2L (4JA1) / 5.5L (4JA1-T). Torque drain plug: 42 Nm." },
      { id: "t2", title: "Inspect cylinder head & valve cover half-moon seal for weeping", meta: "Re-torque valve cover bolts evenly (8–10 Nm) if minor seepage appears." },
      { id: "t3", title: "Re-torque rear leaf spring U-bolts, lug nuts & chassis bolts", meta: "Wheel lug nuts: 118 Nm (12 kg-m). Rear U-bolts: 100 Nm." },
      { id: "t4", title: "Check alternator, power steering & A/C V-belt deflection", meta: "Deflection: 8–10 mm under 10 kg thumb pressure." },
      { id: "t5", title: "Bleed fuel water separator & top up 50/50 Ethylene Glycol coolant", meta: "Verify zero air pockets in upper radiator hose." }
    ]
  },
  {
    id: "chk-monthly",
    interval: "monthly",
    badge: "Monthly / BLOWBAGETS",
    title: "Monthly Owner Preventive Routine",
    tasks: [
      { id: "t6", title: "Battery terminals, electrolyte & alternator charging voltage", meta: "3SMF / N70ZL battery. Charging voltage at idle with A/C on: 13.8V–14.4V." },
      { id: "t7", title: "Drain water from Fuel Filter / Water Separator sedimenter", meta: "Loosen bottom drain cock, pump hand primer until clean diesel flows." },
      { id: "t8", title: "Inspect under-chassis for oil, ATF, power steering or coolant drips", meta: "Check rear axle pinion seal, oil pan gasket, and steering gearbox." },
      { id: "t9", title: "Test Glow Plug pre-heat timer & cold morning start", meta: "Normal pre-heat indicator duration: 3–6 seconds." }
    ]
  },
  {
    id: "chk-quarterly",
    interval: "quarterly",
    badge: "Quarterly (Every 5,000 km / 3 Months)",
    title: "5,000 km Preventive Maintenance Service (PMS)",
    tasks: [
      { id: "t10", title: "Replace Engine Oil (15W-40 API CI-4/CJ-4) & Oil Filter", meta: "OEM Filter: 8-97148270-0 (4JA1/4JA1-T). Pre-fill filter with clean oil." },
      { id: "t11", title: "Clean Air Filter element with compressed air (inside-out)", meta: "Replace every 15,000–20,000 km or sooner in dusty conditions." },
      { id: "t12", title: "Grease front ball joints, tie rod ends & propeller shaft U-joints", meta: "Use Lithium Complex EP2 NLGI #2 grease via zerk fittings." },
      { id: "t13", title: "Inspect front disc brake pads & rear drum brake shoe thickness", meta: "Minimum pad lining: 2.0 mm | Minimum drum shoe lining: 1.5 mm." },
      { id: "t14", title: "Check brake & clutch hydraulic fluid levels (DOT 3 / DOT 4)", meta: "Inspect clutch slave cylinder boot for fluid leaks." }
    ]
  },
  {
    id: "chk-semi",
    interval: "semi",
    badge: "Semi-Annual (10,000 – 20,000 km)",
    title: "Intermediate Fuel, Valve & A/C Service",
    tasks: [
      { id: "t15", title: "Replace Spin-On Fuel Filter & Air Cleaner Element", meta: "OEM Fuel Filter: 8-94369299-3. Prime fuel system until firm." },
      { id: "t16", title: "Clean EGR Valve & Intake Manifold passages (2005–2017)", meta: "Eliminates black smoke under load and restores throttle response." },
      { id: "t17", title: "Adjust Intake & Exhaust Valve Tappet Clearance (Cold Engine)", meta: "4JA1 / 4JA1-T spec: 0.40 mm (0.016 in) cold." },
      { id: "t18", title: "Clean dual-blower A/C evaporator & wash condenser core fins", meta: "Prevents high A/C head pressure and cabin cooling drop." }
    ]
  },
  {
    id: "chk-major",
    interval: "major",
    badge: "Major PMS (40,000 – 80,000 km / 2 Years)",
    title: "Drivetrain Fluids, Bearings & Injection Overhaul",
    tasks: [
      { id: "t19", title: "Replace Transmission Fluid (M/T MUA5 or A/T Jatco)", meta: "M/T: 2.9L 15W-40 or 75W-90 GL-4 | A/T: 6.5L Dexron III ATF + strainer clean." },
      { id: "t20", title: "Replace Rear Differential Gear Oil (SAE 85W-90 API GL-5)", meta: "Capacity: 2.3L hypoid gear oil." },
      { id: "t21", title: "Flush Radiator Coolant & test 82°C Thermostat + 0.9 bar Cap", meta: "Capacity: 7.5L–8.2L 50/50 Ethylene Glycol coolant." },
      { id: "t22", title: "Flush Brake/Clutch Fluid & Repack Front Wheel Bearings", meta: "Use high-temp lithium bearing grease + new inner hub oil seals." },
      { id: "t23", title: "Calibrate Injection Pump & Injector Nozzle Pop-Pressure (80k km)", meta: "4JA1 2-stage injector opening pressure: 185 bar (1st stage)." }
    ]
  }
];

const PARTS_CATALOG = [
  { name: "Engine Oil (15W-40 API CI-4 / CJ-4 Diesel)", code: "ISUZU-15W40-6L", system: "Fluids & Lubricants", engines: ["4JA1", "4JA1-T"], spec: "5.2L (4JA1) / 5.5L (4JA1-T)", notes: "Change every 5,000 km (mineral) or 7,500–10,000 km (semi-synthetic)." },
  { name: "CRDi Synthetic Diesel Oil (5W-30 / 10W-40 API CJ-4/CK-4)", code: "ISUZU-CRDI-7L", system: "Fluids & Lubricants", engines: ["4JK1-TC"], spec: "6.5L (4JK1-TC VGS Turbo)", notes: "Required for late Euro 4 4JK1-TC engines." },
  { name: "Automatic Transmission Fluid (Dexron III)", code: "ATF-DEX3-7L", system: "Fluids & Lubricants", engines: ["4JA1-T", "4JK1-TC"], spec: "6.5L–7.0L (Jatco 4-Speed A/T)", notes: "For XTO, XUVi, XTi, and Sportivo Automatic models." },
  { name: "Manual Transmission Oil (MUA5)", code: "15W40-MUA5-3L", system: "Fluids & Lubricants", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "2.9L (Isuzu MUA5 5-Speed M/T)", notes: "Isuzu specifies 15W-40 motor oil or 75W-90 GL-4." },
  { name: "Rear Differential Gear Oil (SAE 85W-90 GL-5)", code: "GL5-85W90-3L", system: "Fluids & Lubricants", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "2.3L Rear Axle Differential", notes: "Replace every 40,000 km or after flood wading." },
  { name: "OEM Oil Filter (4JA1 / 4JA1-T)", code: "8-97148270-0", system: "Filters", engines: ["4JA1", "4JA1-T"], spec: "Spin-on Full Flow Filter", notes: "Equivalents: Vic C-512 / Baldwin B7131 / Fleetguard LF3644." },
  { name: "OEM Oil Filter (4JK1-TC CRDi)", code: "8-98165071-0", system: "Filters", engines: ["4JK1-TC"], spec: "CRDi High-Efficiency Spin-on", notes: "Equivalents: Vic C-527 / Sakura C-1539." },
  { name: "OEM Fuel Filter / Water Separator (4JA1 / 4JA1-T)", code: "8-94369299-3", system: "Filters", engines: ["4JA1", "4JA1-T"], spec: "Spin-on with bottom sensor thread", notes: "Equivalents: Vic FC-503 / Sakura FC-1503." },
  { name: "CRDi Primary & Secondary Fuel Filter Kit", code: "8-98159693-0", system: "Filters", engines: ["4JK1-TC"], spec: "2-Micron Water Separator Cartridge", notes: "Equivalents: Vic FC-531 / Sakura EF-1511." },
  { name: "Air Filter Element (Round / Panel)", code: "8-97104272-0", system: "Filters", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Heavy-duty pleated media", notes: "Equivalents: Vic A-563 / Sakura A-1518." },
  { name: "Timing Gear Train Set (Crank, Cam, Idler, Pump)", code: "4JA1-GEAR-SET", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T"], spec: "All-gear drive (Zero Timing Belt)", notes: "Lasts 300,000+ km; inspect idler gear thrust washer on overhaul." },
  { name: "Valve Cover Gasket & Half-Moon Seal", code: "8-97136154-0", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T"], spec: "Molded NBR Rubber", notes: "Replace when adjusting valve clearance (0.40 mm cold)." },
  { name: "Alternator / Fan V-Belt (Matched Pair)", code: "8-97180199-0", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T"], spec: "Cogged V-Belt 13x1090 / 13x1100", notes: "Keep a spare pair in the vehicle for long trips." },
  { name: "A/C Compressor V-Belt", code: "8-94362755-0", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Cogged V-Belt 13x1225 / 13x1250", notes: "Check tension every 5,000 km." },
  { name: "Water Pump Assembly", code: "8-97105012-0", system: "Cooling System", engines: ["4JA1", "4JA1-T"], spec: "Cast impeller with gasket", notes: "Inspect weep hole for coolant residue every 20,000 km." },
  { name: "Thermostat (82°C Opening Temp)", code: "8-97300787-0", system: "Cooling System", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "82°C Wax Pellet + Jiggle Valve", notes: "Never delete thermostat; maintains optimal 82–88°C operating temp." },
  { name: "Silicone Fan Clutch Assembly", code: "8-97129735-0", system: "Cooling System", engines: ["4JA1", "4JA1-T"], spec: "Visco-drive thermal clutch", notes: "Refill with 10,000 cSt silicone oil or replace if free-spinning when hot." },
  { name: "Aluminum-Copper Radiator (M/T or A/T)", code: "8-97233592-0", system: "Cooling System", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "2-Row / 3-Row with A/T cooler", notes: "Use 0.9 bar radiator cap and 50/50 coolant." },
  { name: "Front Disc Brake Pads (Set of 4)", code: "8-97134716-0", system: "Brakes & Wheel Bearings", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Semi-metallic / Ceramic", notes: "Equivalents: Bendix DB1276 / Akebono AN-432WK." },
  { name: "Rear Drum Brake Shoes (Set of 4)", code: "8-97034092-0", system: "Brakes & Wheel Bearings", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "254mm x 50mm Drum Lining", notes: "Clean brake dust & adjust star-wheel every 10,000 km." },
  { name: "Front Wheel Bearings (Inner & Outer) + Hub Seal", code: "30207 / 30205", system: "Brakes & Wheel Bearings", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Tapered Roller Bearings + Seal", notes: "Repack with high-temp grease every 40,000 km." },
  { name: "Upper & Lower Ball Joints (Left & Right)", code: "8-97102823-0", system: "Suspension & Steering", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Greaseable heavy-duty joint", notes: "Inspect for vertical play every 10,000 km." },
  { name: "Idler Arm, Pitman Arm & Tie Rod Ends", code: "8-94459480-0", system: "Suspension & Steering", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Steering linkage set", notes: "Eliminates steering play and wandering." },
  { name: "Front & Rear Gas Shock Absorbers", code: "KYB-344200 / 344201", system: "Suspension & Steering", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "Twin-tube Gas / Oil", notes: "KYB Excel-G or Gas-A-Just recommended." },
  { name: "Clutch Disc, Pressure Plate & Release Bearing", code: "8-97066345-0", system: "Drivetrain & Clutch", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "240mm 24-Spline Clutch Kit", notes: "Exedy Japan or Isuzu OEM." },
  { name: "Propeller Shaft Center Bearing & Cross U-Joints", code: "8-94328800-0", system: "Drivetrain & Clutch", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "GMB GUT-21 / Center Support", notes: "Grease every 5,000 km." },
  { name: "Glow Plugs (Set of 4 - 11V Quick-Glow)", code: "8-97143674-1", system: "Electrical & Glow Plugs", engines: ["4JA1", "4JA1-T", "4JK1-TC"], spec: "11V Quick-Glow Tip", notes: "Replace as a matched set of 4." },
  { name: "Alternator with Rear Vacuum Pump (70A–90A)", code: "8-97189113-0", system: "Electrical & Glow Plugs", engines: ["4JA1", "4JA1-T"], spec: "12V IC Regulator + Brake Vacuum Pump", notes: "Inspect rear vacuum pump oil hoses for cracks." }
];

const TROUBLESHOOTING_GUIDES = [
  {
    symptom: "Engine Overheating (Temperature Gauge Above Half)",
    severity: "Critical — Stop Driving Immediately",
    steps: [
      "1. Check coolant level in radiator & overflow reservoir once engine cools (never open hot cap).",
      "2. Spin the radiator fan blade by hand (engine OFF): if it spins effortlessly when hot, the silicone fan clutch needs refilling or replacement.",
      "3. Check V-belt tension on water pump & alternator (8–10 mm deflection).",
      "4. Inspect radiator core fins for mud/debris blockage and test thermostat opening at 82°C."
    ]
  },
  {
    symptom: "Hard Starting in the Morning / White Smoke on Crank",
    severity: "Moderate — Glow / Fuel System",
    steps: [
      "1. Listen for the glow plug relay click when turning key to ON; verify 11V reaches the glow plug busbar for 3–6 seconds.",
      "2. Test individual glow plug resistance with a multimeter (healthy plug: 0.5–1.5 ohms; open circuit = dead plug).",
      "3. Pump the fuel filter hand primer 10–15 times before cranking: if engine starts easily after priming, replace fuel primer assembly or leaking return hoses (air intrusion)."
    ]
  },
  {
    symptom: "Excessive Black Smoke on Acceleration / Uphill",
    severity: "Moderate — Air / EGR / Fuel Ratio",
    steps: [
      "1. Inspect and blow out or replace a clogged Air Filter element.",
      "2. Remove and clean carbon soot from the EGR valve and intake manifold (2005–2017 models).",
      "3. Check turbocharger intercooler/intake hoses for boost leaks or splits.",
      "4. If persistent above 80,000 km, have injection nozzles pop-tested at 185 bar."
    ]
  },
  {
    symptom: "Hard Brake Pedal (Loss of Power Brake Assist)",
    severity: "Safety Critical — Vacuum System",
    steps: [
      "1. Inspect the rubber vacuum hose and oil feed/return lines at the back of the alternator (where the Crosswind vacuum pump is mounted).",
      "2. Check the one-way vacuum check valve leading to the brake booster.",
      "3. Measure vacuum pump output with a gauge (should pull 20–25 inHg at idle)."
    ]
  }
];

// Persistent State
let state = {
  version: localStorage.getItem("cg_version") || "all",
  interval: "all",
  currentOdo: Number(localStorage.getItem("cg_current_odo") || 0),
  completed: JSON.parse(localStorage.getItem("cg_completed") || "{}"),
  logs: JSON.parse(localStorage.getItem("cg_service_logs") || "[]"),
  fuelLogs: JSON.parse(localStorage.getItem("cg_fuel_logs") || "[]"),
  onboarded: localStorage.getItem("cg_onboarded") === "true",
  theme: localStorage.getItem("cg_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
};

// Toast Helper
const toastEl = document.getElementById("toast");
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

// Onboarding
const onboardingBanner = document.getElementById("onboardingBanner");
if (!state.onboarded) onboardingBanner.classList.remove("hidden");
document.getElementById("dismissOnboardingBtn").addEventListener("click", () => {
  state.onboarded = true;
  localStorage.setItem("cg_onboarded", "true");
  onboardingBanner.classList.add("hidden");
});

// Theme
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("cg_theme", theme);
}
applyTheme(state.theme);
document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme(state.theme);
  showToast(`Theme: ${state.theme} mode`);
});

// Variant Selector
const versionSelect = document.getElementById("versionSelect");
versionSelect.value = state.version;
versionSelect.addEventListener("change", (e) => {
  state.version = e.target.value;
  localStorage.setItem("cg_version", state.version);
  updateDashboard();
  renderSpecs();
});

// Odometer Input & Dashboard Calculation
const currentOdoInput = document.getElementById("currentOdoInput");
if (state.currentOdo > 0) currentOdoInput.value = state.currentOdo;

document.getElementById("updateOdoBtn").addEventListener("click", () => {
  const val = Number(currentOdoInput.value);
  if (val >= 0) {
    state.currentOdo = val;
    localStorage.setItem("cg_current_odo", String(val));
    updateDashboard();
    showToast(`Odometer updated to ${val.toLocaleString()} km`);
  }
});

function updateDashboard() {
  // Variant subtitle
  const selectedVariant = VARIANT_SPECS.find(v => v.id === state.version);
  document.getElementById("selectedSpecSub").textContent = selectedVariant
    ? selectedVariant.name
    : "2001–2017 · All Engines & Variants (4JA1, 4JA1-T, 4JK1-TC)";

  // Readiness Counter (Fixed: counts all tasks accurately)
  let totalTasks = 0;
  let doneTasks = 0;
  MAINTENANCE_CHECKLISTS.forEach(group => {
    group.tasks.forEach(t => {
      totalTasks++;
      if (state.completed[t.id]) doneTasks++;
    });
  });
  const pct = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);
  document.getElementById("kpiReadinessCount").textContent = `${doneTasks} / ${totalTasks}`;
  document.getElementById("kpiReadinessPct").textContent = `${pct}% checked`;
  document.getElementById("progressFill").style.width = `${pct}%`;
  document.getElementById("progressBarWrap").setAttribute("aria-valuenow", pct);

  // Last Service & 5,000 km PMS Reminder
  const sortedLogs = [...state.logs].sort((a, b) => Number(b.odo) - Number(a.odo));
  const latestLog = sortedLogs[0];
  const alertBox = document.getElementById("pmsAlertBox");
  const alertText = document.getElementById("pmsAlertText");

  if (latestLog) {
    const lastOdo = Number(latestLog.odo);
    const nextDueOdo = lastOdo + 5000;
    document.getElementById("kpiLastService").textContent = `${lastOdo.toLocaleString()} km`;
    document.getElementById("kpiLastDate").textContent = `${latestLog.date} · ${latestLog.type}`;
    document.getElementById("kpiNextMaintenance").textContent = `${nextDueOdo.toLocaleString()} km`;

    const activeOdo = Math.max(state.currentOdo, lastOdo);
    const remaining = nextDueOdo - activeOdo;

    if (remaining <= 0) {
      document.getElementById("kpiDueStatus").textContent = `OVERDUE by ${Math.abs(remaining).toLocaleString()} km`;
      alertBox.className = "alert-box danger";
      alertText.textContent = `OVERDUE PMS ALERT: Your 5,000 km oil & filter service was due at ${nextDueOdo.toLocaleString()} km (${Math.abs(remaining).toLocaleString()} km overdue).`;
    } else if (remaining <= 1000) {
      document.getElementById("kpiDueStatus").textContent = `Due in ${remaining.toLocaleString()} km`;
      alertBox.className = "alert-box warning";
      alertText.textContent = `UPCOMING PMS REMINDER: Only ${remaining.toLocaleString()} km left before your ${nextDueOdo.toLocaleString()} km oil & filter change.`;
    } else {
      document.getElementById("kpiDueStatus").textContent = `${remaining.toLocaleString()} km remaining`;
      alertBox.className = "alert-box success";
      alertText.textContent = `On Schedule: Next 5,000 km oil & filter PMS due at ${nextDueOdo.toLocaleString()} km (${remaining.toLocaleString()} km remaining).`;
    }
  } else {
    document.getElementById("kpiLastService").textContent = "Not logged";
    document.getElementById("kpiLastDate").textContent = "Add entry in Service History";
    const nextDefault = state.currentOdo > 0 ? Math.ceil((state.currentOdo + 1) / 5000) * 5000 : 5000;
    document.getElementById("kpiNextMaintenance").textContent = `${nextDefault.toLocaleString()} km`;
    document.getElementById("kpiDueStatus").textContent = "5,000 km / 3-month cycle";
    alertBox.className = "alert-box info";
    alertText.textContent = "PMS Reminder: Log your last oil change in Service History to activate automatic 5,000 km countdown and overdue alerts.";
  }

  // Repair Cost Tracker (Monthly & Yearly)
  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth();
  let yearlyTotal = 0;
  let monthlyTotal = 0;
  let totalParts = 0;
  let totalLabor = 0;

  state.logs.forEach(item => {
    const p = Number(item.partsCost || 0);
    const l = Number(item.laborCost || 0);
    const sum = p + l;
    totalParts += p;
    totalLabor += l;
    const d = new Date(item.date);
    if (!isNaN(d)) {
      if (d.getFullYear() === curYear) {
        yearlyTotal += sum;
        if (d.getMonth() === curMonth) monthlyTotal += sum;
      }
    }
  });

  document.getElementById("kpiYearlyCost").textContent = `₱${yearlyTotal.toLocaleString()}`;
  document.getElementById("kpiMonthlyCost").textContent = `This month: ₱${monthlyTotal.toLocaleString()}`;

  const costSummaryEl = document.getElementById("costSummaryContent");
  if (costSummaryEl) {
    costSummaryEl.innerHTML = `
      <div class="task-item"><div class="task-label"><span class="task-title">This Month (${now.toLocaleString("default", { month: "long" })} ${curYear})</span><span class="task-meta">₱${monthlyTotal.toLocaleString()}</span></div></div>
      <div class="task-item"><div class="task-label"><span class="task-title">Year-to-Date (${curYear})</span><span class="task-meta">₱${yearlyTotal.toLocaleString()}</span></div></div>
      <div class="task-item"><div class="task-label"><span class="task-title">Lifetime Parts vs. Labor Split</span><span class="task-meta">Parts: ₱${totalParts.toLocaleString()} | Labor: ₱${totalLabor.toLocaleString()} | Total: ₱${(totalParts + totalLabor).toLocaleString()}</span></div></div>
    `;
  }
}

// Render Checklists
const checklistContainer = document.getElementById("checklistContainer");
function renderChecklists() {
  const filtered = MAINTENANCE_CHECKLISTS.filter(g => state.interval === "all" || g.interval === state.interval);
  checklistContainer.innerHTML = filtered.map(group => {
    const itemsHtml = group.tasks.map(task => {
      const checked = !!state.completed[task.id];
      return `
        <li class="task-item ${checked ? "done" : ""}">
          <input type="checkbox" class="task-checkbox" id="${task.id}" data-task-id="${task.id}" ${checked ? "checked" : ""} />
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
  updateDashboard();
}

checklistContainer.addEventListener("change", (e) => {
  if (e.target.matches(".task-checkbox")) {
    state.completed[e.target.dataset.taskId] = e.target.checked;
    localStorage.setItem("cg_completed", JSON.stringify(state.completed));
    renderChecklists();
    if (e.target.checked) showToast("Checklist item completed!");
  }
});

document.getElementById("resetChecklistBtn").addEventListener("click", () => {
  state.completed = {};
  localStorage.removeItem("cg_completed");
  renderChecklists();
  showToast("Checklist progress reset.");
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

// Parts Compatibility Checker
const partSearchInput = document.getElementById("partSearchInput");
const partEngineFilter = document.getElementById("partEngineFilter");
const partCategoryFilter = document.getElementById("partCategoryFilter");
const partsContainer = document.getElementById("partsContainer");

function renderParts() {
  const q = partSearchInput.value.trim().toLowerCase();
  const eng = partEngineFilter.value;
  const cat = partCategoryFilter.value;

  const matches = PARTS_CATALOG.filter(p => {
    const matchEng = eng === "all" || p.engines.includes(eng);
    const matchCat = cat === "all" || p.system === cat;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.notes.toLowerCase().includes(q);
    return matchEng && matchCat && matchQ;
  });

  if (matches.length === 0) {
    partsContainer.innerHTML = `<div class="card"><p class="card-title">No compatible parts matched</p><p class="muted-text">Try clearing the search box or switching Engine filter back to All Engines.</p></div>`;
    return;
  }

  partsContainer.innerHTML = matches.map(p => `
    <article class="part-card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
        <span class="part-code">${p.code}</span>
        <span class="badge">${p.engines.join(" / ")}</span>
      </div>
      <h3 class="card-title">${p.name}</h3>
      <p style="margin:0;font-size:0.875rem;"><strong>System:</strong> ${p.system} · <strong>Spec:</strong> ${p.spec}</p>
      <p class="muted-text" style="margin:0;">${p.notes}</p>
    </article>
  `).join("");
}

partSearchInput.addEventListener("input", renderParts);
partEngineFilter.addEventListener("change", renderParts);
partCategoryFilter.addEventListener("change", renderParts);

// Service History, PDF Report & JSON Backup/Restore
const logDateInput = document.getElementById("logDate");
if (logDateInput) logDateInput.value = new Date().toISOString().split("T")[0];
const serviceLogList = document.getElementById("serviceLogList");

function renderServiceLogs() {
  if (state.logs.length === 0) {
    serviceLogList.innerHTML = `<article class="card"><p class="card-title">No maintenance records logged yet</p><p class="muted-text">Add your last oil change or repair above to enable 5,000 km PMS reminders, expense tracking, and PDF/JSON backups.</p></article>`;
    return;
  }

  serviceLogList.innerHTML = state.logs.map((entry, idx) => {
    const total = Number(entry.partsCost || 0) + Number(entry.laborCost || 0);
    return `
      <article class="card">
        <div class="card-header">
          <div>
            <span class="badge">${Number(entry.odo).toLocaleString()} km · ₱${total.toLocaleString()}</span>
            <h4 class="card-title" style="margin-top:8px;">${entry.type}</h4>
          </div>
          <button class="btn btn-outline btn-sm" data-delete-log="${idx}">Delete</button>
        </div>
        <p style="margin:0;font-size:0.875rem;"><strong>Date:</strong> ${entry.date} | <strong>Parts:</strong> ₱${Number(entry.partsCost || 0).toLocaleString()} · <strong>Labor:</strong> ₱${Number(entry.laborCost || 0).toLocaleString()}</p>
        <p class="muted-text" style="margin-top:4px;">${entry.notes || "Completed per Isuzu PMS schedule."}</p>
      </article>
    `;
  }).join("");
}

document.getElementById("serviceLogForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const odoVal = Number(document.getElementById("logOdo").value);
  const entry = {
    date: document.getElementById("logDate").value,
    odo: odoVal,
    type: document.getElementById("logType").value,
    partsCost: Number(document.getElementById("logPartsCost").value || 0),
    laborCost: Number(document.getElementById("logLaborCost").value || 0),
    notes: document.getElementById("logNotes").value.trim()
  };
  state.logs.unshift(entry);
  if (odoVal > state.currentOdo) {
    state.currentOdo = odoVal;
    currentOdoInput.value = odoVal;
    localStorage.setItem("cg_current_odo", String(odoVal));
  }
  localStorage.setItem("cg_service_logs", JSON.stringify(state.logs));
  document.getElementById("logNotes").value = "";
  renderServiceLogs();
  updateDashboard();
  showToast("Service record saved & dashboard updated!");
});

serviceLogList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-delete-log]");
  if (!btn) return;
  state.logs.splice(Number(btn.dataset.deleteLog), 1);
  localStorage.setItem("cg_service_logs", JSON.stringify(state.logs));
  renderServiceLogs();
  updateDashboard();
  showToast("Service record deleted.");
});

document.getElementById("clearLogsBtn").addEventListener("click", () => {
  state.logs = [];
  localStorage.removeItem("cg_service_logs");
  renderServiceLogs();
  updateDashboard();
  showToast("All service records cleared.");
});

// PDF / Print Report
document.getElementById("exportPdfBtn").addEventListener("click", () => {
  window.print();
});

// Backup & Restore JSON
document.getElementById("exportJsonBtn").addEventListener("click", () => {
  const backupData = {
    app: "Crosswind Garage Pro",
    exportedAt: new Date().toISOString(),
    version: state.version,
    currentOdo: state.currentOdo,
    completed: state.completed,
    logs: state.logs,
    fuelLogs: state.fuelLogs
  };
  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `crosswind-garage-backup-${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("JSON backup downloaded!");
});

document.getElementById("importJsonInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (imported.logs) state.logs = imported.logs;
      if (imported.completed) state.completed = imported.completed;
      if (imported.fuelLogs) state.fuelLogs = imported.fuelLogs;
      if (typeof imported.currentOdo === "number") {
        state.currentOdo = imported.currentOdo;
        currentOdoInput.value = state.currentOdo;
        localStorage.setItem("cg_current_odo", String(state.currentOdo));
      }
      localStorage.setItem("cg_service_logs", JSON.stringify(state.logs));
      localStorage.setItem("cg_completed", JSON.stringify(state.completed));
      localStorage.setItem("cg_fuel_logs", JSON.stringify(state.fuelLogs));
      renderChecklists();
      renderServiceLogs();
      renderFuelLogs();
      updateDashboard();
      showToast("Backup restored successfully!");
    } catch {
      showToast("Invalid JSON backup file.");
    }
  };
  reader.readAsText(file);
});

// Fuel Consumption Calculator
const fuelResultBox = document.getElementById("fuelResultBox");
const fuelHistoryList = document.getElementById("fuelHistoryList");

function renderFuelLogs() {
  if (state.fuelLogs.length === 0) {
    fuelHistoryList.innerHTML = `<li class="task-item"><div class="task-label"><span class="task-title">No fill-ups logged yet</span><span class="task-meta">Typical Isuzu Crosswind 4JA1/4JA1-T economy: 11–14 km/L city, 15–18 km/L highway.</span></div></li>`;
    return;
  }
  fuelHistoryList.innerHTML = state.fuelLogs.slice(0, 6).map(f => `
    <li class="task-item">
      <div class="task-label">
        <span class="task-title">${f.kmPerLiter} km/L (${f.distance} km / ${f.liters} L)</span>
        <span class="task-meta">${f.date}${f.costPerKm ? ` · ₱${f.costPerKm}/km` : ""}</span>
      </div>
    </li>
  `).join("");
}

document.getElementById("fuelCalcForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const dist = Number(document.getElementById("fuelDistance").value);
  const lit = Number(document.getElementById("fuelLiters").value);
  const price = Number(document.getElementById("fuelPrice").value || 0);
  if (dist <= 0 || lit <= 0) return;

  const kmPerLiter = (dist / lit).toFixed(2);
  const costPerKm = price > 0 ? ((lit * price) / dist).toFixed(2) : null;

  fuelResultBox.classList.remove("hidden");
  fuelResultBox.textContent = `Fuel Economy: ${kmPerLiter} km/L${costPerKm ? ` · Fuel Cost: ₱${costPerKm} per km` : ""}`;

  state.fuelLogs.unshift({
    date: new Date().toISOString().split("T")[0],
    distance: dist,
    liters: lit,
    kmPerLiter,
    costPerKm
  });
  localStorage.setItem("cg_fuel_logs", JSON.stringify(state.fuelLogs));
  renderFuelLogs();
  showToast(`Logged ${kmPerLiter} km/L!`);
});

document.getElementById("clearFuelBtn").addEventListener("click", () => {
  state.fuelLogs = [];
  localStorage.removeItem("cg_fuel_logs");
  fuelResultBox.classList.add("hidden");
  renderFuelLogs();
  showToast("Fuel history cleared.");
});

// Troubleshooting Guide
function renderTroubleshooting() {
  document.getElementById("troubleshootContainer").innerHTML = TROUBLESHOOTING_GUIDES.map(g => `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${g.severity}</span>
          <h3 class="card-title" style="margin-top:8px;">${g.symptom}</h3>
        </div>
      </div>
      <ul class="task-list">
        ${g.steps.map(s => `<li class="task-item"><div class="task-label"><span class="task-meta" style="color:var(--text);font-size:0.875rem;">${s}</span></div></li>`).join("")}
      </ul>
    </article>
  `).join("");
}

// Specifications by Engine, Year & Transmission
function renderSpecs() {
  const list = state.version === "all" ? VARIANT_SPECS : VARIANT_SPECS.filter(v => v.id === state.version);
  document.getElementById("specsContainer").innerHTML = list.map(v => `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${v.engineCode}</span>
          <h3 class="card-title" style="margin-top:8px;">${v.name}</h3>
        </div>
      </div>
      <p style="font-size:0.875rem;"><strong>Engine:</strong> ${v.engine}</p>
      <p style="font-size:0.875rem;"><strong>Transmission:</strong> ${v.trans}</p>
      <p style="font-size:0.875rem;"><strong>Fluid Capacities:</strong> ${v.fluids}</p>
      <p style="font-size:0.875rem;"><strong>Torque &amp; Valve Specs:</strong> ${v.torque}</p>
      <p class="muted-text"><strong>Service Manual Note:</strong> ${v.notes}</p>
    </article>
  `).join("");
}

// Navigation Routing
function switchView(viewName, updateHash = true) {
  const valid = ["maintenance", "parts", "history", "costs", "troubleshoot", "specs"];
  const target = valid.includes(viewName) ? viewName : "maintenance";

  document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(`view-${target}`).classList.remove("hidden");

  document.querySelectorAll(".mod-btn, .bottom-btn").forEach(btn => {
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

document.querySelectorAll(".mod-btn, .bottom-btn").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

window.addEventListener("hashchange", () => {
  const h = window.location.hash.replace("#", "");
  if (h) switchView(h, false);
});

// PWA Install, Online Status & Service Worker Auto-Update Notification
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

const offlineBadge = document.getElementById("offlineBadge");
function updateOnlineStatus() {
  const online = navigator.onLine;
  offlineBadge.textContent = online ? "Online" : "Offline Ready";
  offlineBadge.className = `status-pill ${online ? "online" : "offline"}`;
}
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("./service-worker.js?v=4");
      reg.addEventListener("updatefound", () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            document.getElementById("updateBanner").classList.remove("hidden");
          }
        });
      });
      reg.update();
    } catch {}
  });
}

document.getElementById("reloadAppBtn").addEventListener("click", () => {
  window.location.reload();
});

// Initial Render
renderChecklists();
renderParts();
renderServiceLogs();
renderFuelLogs();
renderTroubleshooting();
renderSpecs();
updateDashboard();
updateOnlineStatus();
if (window.location.hash) switchView(window.location.hash.replace("#", ""), false);
