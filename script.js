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
    badge: "Daily & Long-Trip",
    title: "Pre-Drive & Provincial Highway Inspection",
    tasks: [
      { id: "d1", title: "Check tire inflation pressure & sidewall condition (cold)", meta: "Front: 30–32 psi | Rear: 35–40 psi (loaded). Verify spare tire carrier lock." },
      { id: "d2", title: "Test brake pedal firmness, handbrake clicks (5–7 clicks) & brake lights", meta: "Soft pedal indicates air in lines or leaking wheel/master cylinder." },
      { id: "d3", title: "Inspect engine oil dipstick & radiator coolant reservoir level", meta: "Ensure oil sits between MIN and MAX marks on level ground." },
      { id: "d4", title: "Verify horn, headlamps, signal lights, wipers & washer fluid", meta: "Essential before long provincial trips or night driving." }
    ]
  },
  {
    id: "chk-first",
    interval: "first",
    badge: "First Check (1k–5k km)",
    title: "Break-In, Post-Rebuild & First Service",
    tasks: [
      { id: "t1", title: "Drain break-in engine oil & replace OEM Oil Filter", meta: "Capacity: 5.2L (4JA1) / 5.5L (4JA1-T). Torque drain plug: 42 Nm." },
      { id: "t2", title: "Inspect cylinder head & valve cover half-moon seal", meta: "Re-torque valve cover bolts evenly (8–10 Nm) if minor seepage appears." },
      { id: "t3", title: "Re-torque rear leaf spring U-bolts, lug nuts & chassis bolts", meta: "Wheel lug nuts: 118 Nm (12 kg-m). Rear U-bolts: 100 Nm." },
      { id: "t4", title: "Check alternator, power steering & A/C V-belt deflection", meta: "Deflection: 8–10 mm under 10 kg thumb pressure." },
      { id: "t5", title: "Bleed fuel water separator & top up 50/50 Coolant", meta: "Verify zero air pockets in upper radiator hose." }
    ]
  },
  {
    id: "chk-monthly",
    interval: "monthly",
    badge: "Monthly / BLOWBAGETS",
    title: "Monthly Owner Preventive Routine",
    tasks: [
      { id: "t6", title: "Battery terminals, electrolyte & alternator charging voltage", meta: "3SMF / N70ZL battery. Charging voltage at idle with A/C on: 13.8V–14.4V." },
      { id: "t7", title: "Drain water from Fuel Filter / Water Separator", meta: "Loosen bottom drain cock, pump hand primer until clean diesel flows." },
      { id: "t8", title: "Inspect under-chassis for oil, ATF, power steering or coolant drips", meta: "Check rear axle pinion seal, oil pan gasket, and steering gearbox." },
      { id: "t9", title: "Test Glow Plug pre-heat timer & cold morning start", meta: "Normal pre-heat indicator duration: 3–6 seconds." }
    ]
  },
  {
    id: "chk-quarterly",
    interval: "quarterly",
    badge: "Quarterly (5,000 km)",
    title: "5,000 km Preventive Maintenance Service (PMS)",
    tasks: [
      { id: "t10", title: "Replace Engine Oil (15W-40 API CI-4/CJ-4) & Oil Filter", meta: "OEM Filter: 8-97148270-0 (4JA1/4JA1-T). Pre-fill filter with clean oil." },
      { id: "t11", title: "Clean Air Filter element with compressed air (inside-out)", meta: "Replace every 15,000–20,000 km or sooner in dusty conditions." },
      { id: "t12", title: "Grease front ball joints, tie rod ends & propeller U-joints", meta: "Use Lithium Complex EP2 NLGI #2 grease via zerk fittings." },
      { id: "t13", title: "Inspect front disc brake pads & rear drum brake shoes", meta: "Minimum pad lining: 2.0 mm | Minimum drum shoe lining: 1.5 mm." },
      { id: "t14", title: "Check brake & clutch hydraulic fluid levels (DOT 3 / DOT 4)", meta: "Inspect clutch slave cylinder boot for fluid leaks." }
    ]
  },
  {
    id: "chk-semi",
    interval: "semi",
    badge: "Semi-Annual (10k–20k km)",
    title: "Intermediate Fuel, Valve & A/C Service",
    tasks: [
      { id: "t15", title: "Replace Spin-On Fuel Filter & Air Cleaner Element", meta: "OEM Fuel Filter: 8-94369299-3. Prime fuel system until firm." },
      { id: "t16", title: "Clean EGR Valve & Intake Manifold passages (2005–2017)", meta: "Eliminates black smoke under load and restores throttle response." },
      { id: "t17", title: "Adjust Intake & Exhaust Valve Tappet Clearance (Cold)", meta: "4JA1 / 4JA1-T spec: 0.40 mm (0.016 in) cold." },
      { id: "t18", title: "Clean dual-blower A/C evaporator & condenser fins", meta: "Prevents high A/C head pressure and cabin cooling drop." }
    ]
  },
  {
    id: "chk-major",
    interval: "major",
    badge: "Major PMS (40k–80k km)",
    title: "Drivetrain Fluids, Bearings & Injection Overhaul",
    tasks: [
      { id: "t19", title: "Replace Transmission Fluid (M/T MUA5 or A/T Jatco)", meta: "M/T: 2.9L 15W-40 or 75W-90 GL-4 | A/T: 6.5L Dexron III ATF + strainer clean." },
      { id: "t20", title: "Replace Rear Differential Gear Oil (SAE 85W-90 GL-5)", meta: "Capacity: 2.3L hypoid gear oil." },
      { id: "t21", title: "Flush Radiator Coolant & test 82°C Thermostat + 0.9 bar Cap", meta: "Capacity: 7.5L–8.2L 50/50 Ethylene Glycol coolant." },
      { id: "t22", title: "Flush Brake/Clutch Fluid & Repack Front Wheel Bearings", meta: "Use high-temp lithium bearing grease + new inner hub oil seals." },
      { id: "t23", title: "Calibrate Injection Pump & Injector Nozzle Pop-Pressure (80k)", meta: "4JA1 2-stage injector opening pressure: 185 bar (1st stage)." }
    ]
  }
];

const PARTS_CATALOG = [
  { name: "Engine Oil (15W-40 API CI-4 / CJ-4 Diesel)", code: "ISUZU-15W40-6L", system: "Fluids & Lubricants", engines: ["4JA1", "4JA1-T"], verified: true, spec: "5.2L (4JA1) / 5.5L (4JA1-T)", equivalents: "Delo Gold Ultra, Rimula R4 X, Petron Rev-X", notes: "Change every 5,000 km (mineral) or 7,500–10,000 km (semi-synthetic)." },
  { name: "CRDi Synthetic Diesel Oil (5W-30 / 10W-40 CJ-4/CK-4)", code: "ISUZU-CRDI-7L", system: "Fluids & Lubricants", engines: ["4JK1-TC"], verified: true, spec: "6.5L (4JK1-TC VGS Turbo)", equivalents: "Isuzu Besco 10W-40, Mobil Delvac 1", notes: "Required for late Euro 4 4JK1-TC engines." },
  { name: "Automatic Transmission Fluid (Dexron III)", code: "ATF-DEX3-7L", system: "Fluids & Lubricants", engines: ["4JA1-T", "4JK1-TC"], verified: true, spec: "6.5L–7.0L (Jatco 4-Speed A/T)", equivalents: "Caltex Texamatic 1888, ZIC ATF Dexron III", notes: "For XTO, XUVi, XTi, and Sportivo Automatic models." },
  { name: "Manual Transmission Oil (MUA5)", code: "15W40-MUA5-3L", system: "Fluids & Lubricants", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "2.9L (Isuzu MUA5 5-Speed M/T)", equivalents: "SAE 15W-40 Motor Oil or 75W-90 GL-4", notes: "Isuzu manual specifies 15W-40 motor oil for smooth synchro shifts." },
  { name: "Rear Differential Gear Oil (SAE 85W-90 GL-5)", code: "GL5-85W90-3L", system: "Fluids & Lubricants", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "2.3L Rear Axle Differential", equivalents: "Caltex Thuban GL-5, Shell Spirax S2 A", notes: "Replace every 40,000 km or after flood wading." },
  { name: "OEM Oil Filter (4JA1 / 4JA1-T)", code: "8-97148270-0", system: "Filters", engines: ["4JA1", "4JA1-T"], verified: true, spec: "Spin-on Full Flow Filter", equivalents: "Vic C-512, Baldwin B7131, Fleetguard LF3644", notes: "Always pre-fill filter with fresh engine oil before installation." },
  { name: "OEM Oil Filter (4JK1-TC CRDi)", code: "8-98165071-0", system: "Filters", engines: ["4JK1-TC"], verified: true, spec: "CRDi High-Efficiency Spin-on", equivalents: "Vic C-527, Sakura C-1539", notes: "For 2015–2017 4JK1-TC variants." },
  { name: "OEM Fuel Filter / Water Separator (4JA1 / 4JA1-T)", code: "8-94369299-3", system: "Filters", engines: ["4JA1", "4JA1-T"], verified: true, spec: "Spin-on with bottom sensor thread", equivalents: "Vic FC-503, Sakura FC-1503", notes: "Replace every 10,000–15,000 km and prime system after install." },
  { name: "CRDi Primary & Secondary Fuel Filter Kit", code: "8-98159693-0", system: "Filters", engines: ["4JK1-TC"], verified: false, spec: "2-Micron Water Separator Cartridge", equivalents: "Vic FC-531, Sakura EF-1511", notes: "Verify housing thread pitch on late 2016–2017 export units before purchase." },
  { name: "Air Filter Element (Round / Panel)", code: "8-97104272-0", system: "Filters", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Heavy-duty pleated media", equivalents: "Vic A-563, Sakura A-1518", notes: "Blow out every 5,000 km; replace every 15,000–20,000 km." },
  { name: "Timing Gear Train Set (Crank, Cam, Idler, Pump)", code: "4JA1-GEAR-SET", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T"], verified: true, spec: "All-gear drive (Zero Timing Belt)", equivalents: "Isuzu Genuine Japan", notes: "Lasts 300,000+ km; inspect idler gear thrust washer on overhaul." },
  { name: "Valve Cover Gasket & Half-Moon Seal", code: "8-97136154-0", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T"], verified: true, spec: "Molded NBR Rubber", equivalents: "Isuzu Genuine / Stone Japan", notes: "Replace when adjusting valve clearance (0.40 mm cold)." },
  { name: "Alternator / Fan V-Belt (Matched Pair)", code: "8-97180199-0", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T"], verified: true, spec: "Cogged V-Belt 13x1090 / 13x1100", equivalents: "Bando RPF-3430, Mitsuboshi REMF-6430", notes: "Keep a spare pair in the trunk for provincial trips." },
  { name: "A/C Compressor V-Belt", code: "8-94362755-0", system: "Engine & Valvetrain", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Cogged V-Belt 13x1225 / 13x1250", equivalents: "Bando RPF-3490, Mitsuboshi REMF-6490", notes: "Check tension every 5,000 km." },
  { name: "Water Pump Assembly", code: "8-97105012-0", system: "Cooling System", engines: ["4JA1", "4JA1-T"], verified: true, spec: "Cast impeller with gasket", equivalents: "GMB GWI-45A, Aisin WPG-015", notes: "Inspect weep hole for coolant residue every 20,000 km." },
  { name: "Thermostat (82°C Opening Temp)", code: "8-97300787-0", system: "Cooling System", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "82°C Wax Pellet + Jiggle Valve", equivalents: "Tama WV56I-82", notes: "Never delete thermostat; maintains optimal 82–88°C operating temp." },
  { name: "Silicone Fan Clutch Assembly", code: "8-97129735-0", system: "Cooling System", engines: ["4JA1", "4JA1-T"], verified: true, spec: "Visco-drive thermal clutch", equivalents: "Aisin FCI-002", notes: "Refill with 10,000 cSt silicone oil or replace if free-spinning when hot." },
  { name: "Aluminum-Copper Radiator (M/T or A/T)", code: "8-97233592-0", system: "Cooling System", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "2-Row / 3-Row with A/T cooler", equivalents: "Evercool / Denso", notes: "Use 0.9 bar radiator cap and 50/50 coolant." },
  { name: "Front Disc Brake Pads (Set of 4)", code: "8-97134716-0", system: "Brakes & Wheel Bearings", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Semi-metallic / Ceramic", equivalents: "Bendix DB1276, Akebono AN-432WK", notes: "Minimum lining thickness: 2.0 mm." },
  { name: "Rear Drum Brake Shoes (Set of 4)", code: "8-97034092-0", system: "Brakes & Wheel Bearings", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "254mm x 50mm Drum Lining", equivalents: "Bendix BS1715, FBK FN4437", notes: "Clean brake dust & adjust star-wheel every 10,000 km." },
  { name: "Front Wheel Bearings (Inner & Outer) + Hub Seal", code: "30207 / 30205", system: "Brakes & Wheel Bearings", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Tapered Roller Bearings + Seal", equivalents: "Koyo / NSK / Timken 30207 & 30205", notes: "Repack with high-temp grease every 40,000 km." },
  { name: "Upper & Lower Ball Joints (Left & Right)", code: "8-97102823-0", system: "Suspension & Steering", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Greaseable heavy-duty joint", equivalents: "555 Japan SB-5311 / SB-5312", notes: "Inspect for vertical play every 10,000 km." },
  { name: "Idler Arm, Pitman Arm & Tie Rod Ends", code: "8-94459480-0", system: "Suspension & Steering", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Steering linkage set", equivalents: "555 Japan SI-5310 / SE-5311", notes: "Eliminates steering play and wandering." },
  { name: "Front & Rear Gas Shock Absorbers", code: "KYB-344200 / 344201", system: "Suspension & Steering", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "Twin-tube Gas / Oil", equivalents: "KYB Excel-G / Gas-A-Just", notes: "Improves XUV and Sportivo ride stability." },
  { name: "Clutch Disc, Pressure Plate & Release Bearing", code: "8-97066345-0", system: "Drivetrain & Clutch", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "240mm 24-Spline Clutch Kit", equivalents: "Exedy ISD136U + ISC598", notes: "Replace pilot bearing and rear main oil seal while transmission is down." },
  { name: "Propeller Shaft Center Bearing & Cross U-Joints", code: "8-94328800-0", system: "Drivetrain & Clutch", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "GMB GUT-21 / Center Support", equivalents: "GMB GUT-21, Koyo", notes: "Grease every 5,000 km." },
  { name: "Glow Plugs (Set of 4 - 11V Quick-Glow)", code: "8-97143674-1", system: "Electrical & Glow Plugs", engines: ["4JA1", "4JA1-T", "4JK1-TC"], verified: true, spec: "11V Quick-Glow Tip", equivalents: "NGK Y-732J, Denso DG-211", notes: "Replace as a matched set of 4." },
  { name: "Alternator with Rear Vacuum Pump (70A–90A)", code: "8-97189113-0", system: "Electrical & Glow Plugs", engines: ["4JA1", "4JA1-T"], verified: true, spec: "12V IC Regulator + Brake Vacuum Pump", equivalents: "Hitachi LR170 / LR190", notes: "Inspect rear vacuum pump oil hoses for cracks." }
];

const TROUBLESHOOTING_GUIDES = [
  {
    symptom: "Engine Overheating (Temp Gauge Above 1/2)",
    severity: "Critical — Stop Driving",
    steps: [
      "1. Safely pull over and let engine cool completely before checking radiator & overflow levels.",
      "2. Spin fan blade by hand (engine OFF): effortless free-spinning when hot means weak silicone fan clutch.",
      "3. Check V-belt deflection (8–10 mm) and inspect radiator fins for mud/debris blockage.",
      "4. Test 82°C thermostat opening and 0.9 bar radiator cap seal."
    ]
  },
  {
    symptom: "Hard Cold Starting / White Exhaust Smoke",
    severity: "Moderate — Glow / Fuel System",
    steps: [
      "1. Confirm glow plug relay clicks ON and delivers 11V to the busbar for 3–6 seconds.",
      "2. Test glow plug resistance (0.5–1.5 ohms = good; infinite = open/dead plug).",
      "3. Pump fuel filter hand primer 10–15 times before cranking: if it starts right up, replace leaking return hoses or primer pump."
    ]
  },
  {
    symptom: "Black Smoke on Acceleration / Uphill",
    severity: "Moderate — Air / EGR / Fuel",
    steps: [
      "1. Clean or replace a restricted Air Filter element.",
      "2. Remove and clean carbon soot from EGR valve and intake manifold (2005–2017).",
      "3. Inspect turbo intake hoses for boost leaks; pop-test injectors at 185 bar if over 80,000 km."
    ]
  },
  {
    symptom: "Hard Brake Pedal (No Power Assist)",
    severity: "Safety Critical — Vacuum Pump",
    steps: [
      "1. Inspect the vacuum hose and oil lines on the vacuum pump mounted behind the alternator.",
      "2. Test one-way check valve at the brake booster (should pull 20–25 inHg at idle)."
    ]
  }
];

const OBD_CODES = [
  { code: "P0380", title: "Glow Plug / Heater Circuit 'A' Malfunction", fix: "Inspect 60A Glow fusible link, glow relay, and test all 4 glow plugs for open circuit." },
  { code: "P0401", title: "Exhaust Gas Recirculation (EGR) Flow Insufficient", fix: "Clean carbon buildup inside EGR valve, EGR cooler passages, and check vacuum solenoid." },
  { code: "P0087", title: "Fuel Rail / System Pressure Too Low (4JK1-TC)", fix: "Replace clogged primary/secondary fuel filters, bleed air, and inspect Suction Control Valve (SCV)." },
  { code: "P0234", title: "Turbocharger Overboost Condition", fix: "Check VGS turbo actuator linkage for sticking carbon and inspect boost pressure sensor." },
  { code: "P0118", title: "Engine Coolant Temperature (ECT) Circuit High", fix: "Check ECT sensor connector at thermostat housing for broken wire or corroded pins." },
  { code: "P0500", title: "Vehicle Speed Sensor (VSS) Malfunction", fix: "Inspect speed sensor wiring on the transmission tail housing." }
];

const FUSE_MAP = [
  { name: "GLOW (60A Fusible Link — Engine Bay)", circuit: "Glow Plug Pre-Heat Relay & Busbar", note: "If glow indicator won't light and hard cold start occurs, test continuity." },
  { name: "MAIN / ALT (80A–100A Fusible Link — Engine Bay)", circuit: "Main Battery Charging & Ignition Bus", note: "Blown if battery terminals were reversed during jump-start." },
  { name: "COND FAN / A/C (20A–30A — Engine Bay)", circuit: "Front Condenser Electric Fan & Compressor Clutch", note: "Check if A/C blows warm in traffic." },
  { name: "HEAD LH / RH (15A each — Engine Bay)", circuit: "Low & High Beam Headlamps", note: "Separate left and right fuses for safety redundancy." },
  { name: "HORN / STOP (15A — Engine Bay)", circuit: "Horn & Brake Stop Lamps", note: "On A/T models, blown STOP fuse also locks shifter in Park." },
  { name: "WIPER / WASHER (20A — Cabin Fuse Box)", circuit: "Windshield Wipers & Washer Motor", note: "Located behind lower driver-side dash cover." },
  { name: "CIG / ACC / RADIO (15A — Cabin Fuse Box)", circuit: "12V Accessory Socket, Stereo & Power Mirrors", note: "First fuse to check if 12V tire inflator stops working." },
  { name: "ROOM / DOME (10A — Cabin Fuse Box)", circuit: "Cabin Dome Lights & Door Courtesy Lamps", note: "Check if interior lights fail to turn on." }
];

const EMERGENCY_GUIDES = [
  {
    title: "1. Engine Overheating Emergency",
    badge: "Immediate Action",
    steps: [
      "Switch OFF the A/C immediately and turn cabin heater blower to MAX (helps draw heat from coolant).",
      "Pull safely off the road, shift to Neutral/Park, and let engine idle for 1–2 minutes if coolant is not spraying out; shut off engine if gauge hits Red.",
      "DO NOT open the radiator cap while hot. Wait at least 30–45 minutes until upper hose is cool to the touch before inspecting coolant."
    ]
  },
  {
    title: "2. Brake Failure / Spongy Pedal Response",
    badge: "Safety Critical",
    steps: [
      "Pump the brake pedal rapidly 3–4 times to build residual hydraulic pressure.",
      "Downshift progressively to lower gears (4th -> 3rd -> 2nd; or D -> 2 -> L on Automatic) to use diesel engine braking.",
      "Gradually pull the handbrake/parking brake while holding the release button so rear wheels do not lock abruptly; steer toward a safe shoulder."
    ]
  },
  {
    title: "3. Tire Blowout at Highway Speed",
    badge: "Control Protocol",
    steps: [
      "Grip the steering wheel firmly with both hands—DO NOT slam the brakes.",
      "Ease off the accelerator smoothly and allow the vehicle to decelerate naturally until stable.",
      "Turn on hazard lights, pull onto level ground, chock the opposite diagonal wheel, and use jack stands/solid base before changing the tire."
    ]
  },
  {
    title: "4. Engine Won't Start / Dead Battery",
    badge: "No-Start Triage",
    steps: [
      "Clicking sound only: Weak battery or loose terminal. Clean terminals and jump-start (Red + to +, Black - to engine block ground).",
      "Cranks fast but won't fire: Pump the fuel filter hand primer 15 times until stiff, wait for glow indicator, and crank.",
      "A/T shifter stuck in Park: Insert key/screwdriver into the Shift Lock override slot beside the gear selector."
    ]
  },
  {
    title: "5. Smoke or Electrical Burning Smell",
    badge: "Fire Prevention",
    steps: [
      "Pull over immediately, turn ignition OFF, and evacuate all passengers away from traffic.",
      "If safe and smoke is minor, disconnect the negative (-) battery terminal with a 10mm wrench.",
      "Never open the hood fully if flames are visible—use an ABC fire extinguisher aimed at the base of the fire."
    ]
  },
  {
    title: "6. Roadside Breakdown Kit Checklist",
    badge: "Trunk Essentials",
    steps: [
      "Early Warning Device (EWD triangles), high-visibility vest, LED flashlight, and ABC fire extinguisher.",
      "Heavy-duty jumper cables, 12V tire inflator, tire plug kit, wheel chocks, and hydraulic bottle jack + lug wrench.",
      "Spare V-belt set (8-97180199-0), 2L premixed coolant, 1L 15W-40 engine oil, 10mm/12mm/14mm wrenches, and spare 10A/15A/20A fuses."
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
  resaleLogs: JSON.parse(localStorage.getItem("cg_resale_logs") || "[]"),
  batteryStatus: localStorage.getItem("cg_battery_status") || "Not measured",
  theme: localStorage.getItem("cg_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
};

const toastEl = document.getElementById("toast");
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

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

// Odometer Update
const currentOdoInput = document.getElementById("currentOdoInput");
if (state.currentOdo > 0) currentOdoInput.value = state.currentOdo;
document.getElementById("updateOdoBtn").addEventListener("click", () => {
  const val = Number(currentOdoInput.value);
  if (val >= 0) {
    state.currentOdo = val;
    localStorage.setItem("cg_current_odo", String(val));
    updateDashboard();
    showToast(`Odometer updated: ${val.toLocaleString()} km`);
  }
});

// Update HUD & Dashboard
function updateDashboard() {
  const selectedVariant = VARIANT_SPECS.find(v => v.id === state.version);
  document.getElementById("selectedSpecSub").textContent = selectedVariant
    ? `${selectedVariant.name} · Manual tracking`
    : "2001–2017 · All Models · Manual tracking (No live OBD sensor)";

  // Accurate Task Count
  const allTasks = MAINTENANCE_CHECKLISTS.flatMap(g => g.tasks);
  const doneCount = allTasks.filter(t => !!state.completed[t.id]).length;
  const totalCount = allTasks.length;
  const pct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);

  document.getElementById("hudMaintenanceCount").textContent = `${doneCount} / ${totalCount} checked`;
  document.getElementById("hudMaintenancePct").textContent = `${pct}% readiness`;
  document.getElementById("progressFill").style.width = `${pct}%`;
  document.getElementById("progressBarWrap").setAttribute("aria-valuenow", pct);

  // Next Unfinished Task Hint
  const nextTask = allTasks.find(t => !state.completed[t.id]);
  document.getElementById("nextUnfinishedHint").textContent = nextTask
    ? `Next unchecked: ${nextTask.title}`
    : "All 23 maintenance & inspection items completed!";

  // HUD Tire & Coolant status derived from daily checklist
  document.getElementById("hudTires").textContent = state.completed["d1"] ? "Checked ✓" : "Not checked";
  document.getElementById("hudCoolant").textContent = state.completed["d3"] ? "Checked ✓" : "Not checked";
  document.getElementById("hudBattery").textContent = state.batteryStatus;

  // PMS Reminder System
  const sortedLogs = [...state.logs].sort((a, b) => Number(b.odo) - Number(a.odo));
  const latestLog = sortedLogs[0];
  const alertBox = document.getElementById("pmsAlertBox");
  const alertText = document.getElementById("pmsAlertText");

  if (latestLog) {
    const lastOdo = Number(latestLog.odo);
    const nextDue = lastOdo + 5000;
    const activeOdo = Math.max(state.currentOdo, lastOdo);
    const remaining = nextDue - activeOdo;
    document.getElementById("hudNextPms").textContent = `${nextDue.toLocaleString()} km`;

    if (remaining <= 0) {
      document.getElementById("hudPmsSub").textContent = `OVERDUE by ${Math.abs(remaining).toLocaleString()} km`;
      alertBox.className = "alert-box danger alert-flex";
      alertText.textContent = `OVERDUE PMS: 5,000 km oil & filter change was due at ${nextDue.toLocaleString()} km.`;
    } else if (remaining <= 1000) {
      document.getElementById("hudPmsSub").textContent = `Due in ${remaining.toLocaleString()} km`;
      alertBox.className = "alert-box warning alert-flex";
      alertText.textContent = `UPCOMING PMS: ${remaining.toLocaleString()} km left before ${nextDue.toLocaleString()} km oil change.`;
    } else {
      document.getElementById("hudPmsSub").textContent = `${remaining.toLocaleString()} km remaining`;
      alertBox.className = "alert-box success alert-flex";
      alertText.textContent = `Last service at ${lastOdo.toLocaleString()} km (${latestLog.date}). Next due at ${nextDue.toLocaleString()} km.`;
    }
  } else {
    const nextDefault = state.currentOdo > 0 ? Math.ceil((state.currentOdo + 1) / 5000) * 5000 : 5000;
    document.getElementById("hudNextPms").textContent = `${nextDefault.toLocaleString()} km`;
    document.getElementById("hudPmsSub").textContent = "Every 5,000 km / 3 mo";
    alertBox.className = "alert-box info alert-flex";
    alertText.textContent = "Log your last oil change to start your 5,000 km countdown.";
  }

  // Fuel & Repair Cost HUD (Displays "No records" instead of ₱0 when empty)
  if (state.fuelLogs.length > 0) {
    document.getElementById("hudFuel").textContent = `${state.fuelLogs[0].kmPerLiter} km/L`;
  } else {
    document.getElementById("hudFuel").textContent = "No data";
  }

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
    totalParts += p;
    totalLabor += l;
    const d = new Date(item.date);
    if (!isNaN(d) && d.getFullYear() === curYear) {
      yearlyTotal += (p + l);
      if (d.getMonth() === curMonth) monthlyTotal += (p + l);
    }
  });

  document.getElementById("hudRepairCost").textContent = state.logs.length === 0
    ? "Expenses: No records"
    : `YTD Spend: ₱${yearlyTotal.toLocaleString()}`;

  const costSummaryEl = document.getElementById("costSummaryContent");
  if (costSummaryEl) {
    if (state.logs.length === 0) {
      costSummaryEl.innerHTML = `<div class="task-item"><div class="task-label"><span class="task-title">No repair expenses recorded yet</span><span class="task-meta">Log parts and labor costs in History to see monthly and annual totals.</span></div></div>`;
    } else {
      costSummaryEl.innerHTML = `
        <div class="task-item"><div class="task-label"><span class="task-title">This Month (${now.toLocaleString("default", { month: "long" })} ${curYear})</span><span class="task-meta">₱${monthlyTotal.toLocaleString()}</span></div></div>
        <div class="task-item"><div class="task-label"><span class="task-title">Year-to-Date (${curYear})</span><span class="task-meta">₱${yearlyTotal.toLocaleString()}</span></div></div>
        <div class="task-item"><div class="task-label"><span class="task-title">Lifetime Parts vs. Labor</span><span class="task-meta">Parts: ₱${totalParts.toLocaleString()} · Labor: ₱${totalLabor.toLocaleString()}</span></div></div>
      `;
    }
  }
}

// Continue Inspection & Quick Log Oil Change Buttons
document.getElementById("continueInspectionBtn").addEventListener("click", () => {
  state.interval = "all";
  document.querySelectorAll(".pill").forEach(p => {
    const isAll = p.dataset.interval === "all";
    p.classList.toggle("active", isAll);
    p.setAttribute("aria-pressed", isAll);
  });
  renderChecklists();
  switchView("maintain");
  const firstUnchecked = document.querySelector(".task-checkbox:not(:checked)");
  if (firstUnchecked) {
    const row = firstUnchecked.closest(".task-item");
    row.classList.add("highlight-task");
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => row.classList.remove("highlight-task"), 2500);
  } else {
    showToast("All maintenance tasks are already checked!");
  }
});

document.getElementById("logOilQuickBtn").addEventListener("click", () => {
  switchView("history");
  document.getElementById("logOdo").focus();
});

// Checklists Render
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
            <h3 class="card-title" style="margin-top:6px;">${group.title}</h3>
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
    if (e.target.checked) showToast("Task checked off!");
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

// Parts Finder + Copy OEM + Detail Modal + Compatibility Badge
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
    const matchQ = !q ||
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.equivalents.toLowerCase().includes(q) ||
      p.notes.toLowerCase().includes(q);
    return matchEng && matchCat && matchQ;
  });

  if (matches.length === 0) {
    partsContainer.innerHTML = `<div class="card"><p class="card-title">No compatible parts found</p><p class="muted-text">Try clearing search text or switching Engine filter to All Engines.</p></div>`;
    return;
  }

  partsContainer.innerHTML = matches.map((p, idx) => {
    const statusBadge = p.verified
      ? `<span class="badge badge-success">Compatible · Verified</span>`
      : `<span class="badge badge-warn">Not Verified · Check Fit</span>`;
    return `
      <article class="part-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;">
          <span class="part-code">${p.code}</span>
          ${statusBadge}
        </div>
        <h3 class="card-title">${p.name}</h3>
        <p style="margin:0;font-size:0.8125rem;"><strong>Engines:</strong> ${p.engines.join(", ")} · <strong>Spec:</strong> ${p.spec}</p>
        <p class="muted-text" style="margin:0;"><strong>Cross-Ref:</strong> ${p.equivalents}</p>
        <div class="responsive-btn-grid" style="margin-top:6px;">
          <button class="btn btn-outline btn-sm" data-copy-oem="${p.code}">Copy OEM #</button>
          <button class="btn btn-ghost btn-sm" data-part-detail="${idx}">View Specs</button>
        </div>
      </article>
    `;
  }).join("");

  // Store filtered list for modal lookup
  window.__filteredParts = matches;
}

partsContainer.addEventListener("click", async (e) => {
  const copyBtn = e.target.closest("[data-copy-oem]");
  if (copyBtn) {
    const code = copyBtn.dataset.copyOem;
    try {
      await navigator.clipboard.writeText(code);
      showToast(`Copied OEM #: ${code}`);
    } catch {
      showToast(`OEM #: ${code}`);
    }
    return;
  }

  const detailBtn = e.target.closest("[data-part-detail]");
  if (detailBtn && window.__filteredParts) {
    const part = window.__filteredParts[Number(detailBtn.dataset.partDetail)];
    if (!part) return;
    openPartModal(part);
  }
});

// Part Detail Modal
const partModal = document.getElementById("partModal");
let currentModalOem = "";
function openPartModal(part) {
  currentModalOem = part.code;
  document.getElementById("modalPartEngine").textContent = `${part.engines.join(" / ")} · ${part.verified ? "Verified Fit" : "Not Verified"}`;
  document.getElementById("modalPartTitle").textContent = part.name;
  document.getElementById("modalPartBody").innerHTML = `
    <div class="task-item"><div class="task-label"><span class="task-title">OEM Part Number</span><span class="task-meta" style="font-family:var(--font-mono);color:var(--primary);font-weight:700;">${part.code}</span></div></div>
    <div class="task-item"><div class="task-label"><span class="task-title">System &amp; Specification</span><span class="task-meta">${part.system} · ${part.spec}</span></div></div>
    <div class="task-item"><div class="task-label"><span class="task-title">Replacement Cross-Reference</span><span class="task-meta">${part.equivalents}</span></div></div>
    <div class="task-item"><div class="task-label"><span class="task-title">Installation &amp; Maintenance Notes</span><span class="task-meta">${part.notes}</span></div></div>
  `;
  partModal.classList.remove("hidden");
}

function closePartModal() {
  partModal.classList.add("hidden");
}
document.getElementById("closeModalBtn").addEventListener("click", closePartModal);
document.getElementById("modalCloseFooterBtn").addEventListener("click", closePartModal);
partModal.addEventListener("click", (e) => {
  if (e.target === partModal) closePartModal();
});
document.getElementById("modalCopyOemBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentModalOem);
    showToast(`Copied OEM #: ${currentModalOem}`);
  } catch {
    showToast(`OEM #: ${currentModalOem}`);
  }
});

partSearchInput.addEventListener("input", renderParts);
partEngineFilter.addEventListener("change", renderParts);
partCategoryFilter.addEventListener("change", renderParts);

// Service History, JSON Backup/Restore & PDF Report
const logDateInput = document.getElementById("logDate");
if (logDateInput) logDateInput.value = new Date().toISOString().split("T")[0];
const serviceLogList = document.getElementById("serviceLogList");

function renderServiceLogs() {
  if (state.logs.length === 0) {
    serviceLogList.innerHTML = `<article class="card"><p class="card-title">No maintenance records yet</p><p class="muted-text">Add your last oil change or repair above to enable 5,000 km reminders, expense totals, and JSON/PDF backups.</p></article>`;
    return;
  }

  serviceLogList.innerHTML = state.logs.map((entry, idx) => {
    const total = Number(entry.partsCost || 0) + Number(entry.laborCost || 0);
    return `
      <article class="card">
        <div class="card-header">
          <div>
            <span class="badge">${Number(entry.odo).toLocaleString()} km${total > 0 ? ` · ₱${total.toLocaleString()}` : ""}</span>
            <h4 class="card-title" style="margin-top:6px;">${entry.type}</h4>
          </div>
          <button class="btn btn-outline btn-sm" data-delete-log="${idx}">Delete</button>
        </div>
        <p style="margin:0;font-size:0.8125rem;"><strong>Date:</strong> ${entry.date} | <strong>Parts:</strong> ₱${Number(entry.partsCost || 0).toLocaleString()} · <strong>Labor:</strong> ₱${Number(entry.laborCost || 0).toLocaleString()}</p>
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
  showToast("Service record saved!");
});

serviceLogList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-delete-log]");
  if (!btn) return;
  state.logs.splice(Number(btn.dataset.deleteLog), 1);
  localStorage.setItem("cg_service_logs", JSON.stringify(state.logs));
  renderServiceLogs();
  updateDashboard();
  showToast("Service record removed.");
});

document.getElementById("clearLogsBtn").addEventListener("click", () => {
  state.logs = [];
  localStorage.removeItem("cg_service_logs");
  renderServiceLogs();
  updateDashboard();
  showToast("Service history cleared.");
});

document.getElementById("exportPdfBtn").addEventListener("click", () => window.print());

document.getElementById("exportJsonBtn").addEventListener("click", () => {
  const backupData = {
    app: "Crosswind Garage v5",
    exportedAt: new Date().toISOString(),
    version: state.version,
    currentOdo: state.currentOdo,
    completed: state.completed,
    logs: state.logs,
    fuelLogs: state.fuelLogs,
    resaleLogs: state.resaleLogs,
    batteryStatus: state.batteryStatus
  };
  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `crosswind-garage-backup-${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("JSON backup exported!");
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
      if (imported.resaleLogs) state.resaleLogs = imported.resaleLogs;
      if (imported.batteryStatus) state.batteryStatus = imported.batteryStatus;
      if (typeof imported.currentOdo === "number") {
        state.currentOdo = imported.currentOdo;
        currentOdoInput.value = state.currentOdo;
        localStorage.setItem("cg_current_odo", String(state.currentOdo));
      }
      localStorage.setItem("cg_service_logs", JSON.stringify(state.logs));
      localStorage.setItem("cg_completed", JSON.stringify(state.completed));
      localStorage.setItem("cg_fuel_logs", JSON.stringify(state.fuelLogs));
      localStorage.setItem("cg_resale_logs", JSON.stringify(state.resaleLogs));
      localStorage.setItem("cg_battery_status", state.batteryStatus);
      renderChecklists();
      renderServiceLogs();
      renderFuelLogs();
      renderResaleLogs();
      updateDashboard();
      showToast("Backup restored successfully!");
    } catch {
      showToast("Invalid JSON backup file.");
    }
  };
  reader.readAsText(file);
});

// Fuel Economy Calculator
const fuelResultBox = document.getElementById("fuelResultBox");
const fuelHistoryList = document.getElementById("fuelHistoryList");

function renderFuelLogs() {
  if (state.fuelLogs.length === 0) {
    fuelHistoryList.innerHTML = `<li class="task-item"><div class="task-label"><span class="task-title">No fill-ups logged yet</span><span class="task-meta">Reference: 4JA1/4JA1-T averages 11–14 km/L city, 15–18 km/L highway.</span></div></li>`;
    return;
  }
  fuelHistoryList.innerHTML = state.fuelLogs.slice(0, 5).map(f => `
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
  fuelResultBox.textContent = `Fuel Economy: ${kmPerLiter} km/L${costPerKm ? ` · ₱${costPerKm}/km` : ""}`;

  state.fuelLogs.unshift({
    date: new Date().toISOString().split("T")[0],
    distance: dist,
    liters: lit,
    kmPerLiter,
    costPerKm
  });
  localStorage.setItem("cg_fuel_logs", JSON.stringify(state.fuelLogs));
  renderFuelLogs();
  updateDashboard();
  showToast(`Saved ${kmPerLiter} km/L!`);
});

document.getElementById("clearFuelBtn").addEventListener("click", () => {
  state.fuelLogs = [];
  localStorage.removeItem("cg_fuel_logs");
  fuelResultBox.classList.add("hidden");
  renderFuelLogs();
  updateDashboard();
  showToast("Fuel logs cleared.");
});

// Vehicle Resale Value Log
const resaleHistoryList = document.getElementById("resaleHistoryList");
function renderResaleLogs() {
  if (state.resaleLogs.length === 0) {
    resaleHistoryList.innerHTML = `<li class="task-item"><div class="task-label"><span class="task-title">No valuation entries saved</span><span class="task-meta">Record estimated market value and condition upgrades to track resale readiness.</span></div></li>`;
    return;
  }
  resaleHistoryList.innerHTML = state.resaleLogs.slice(0, 5).map(r => `
    <li class="task-item">
      <div class="task-label">
        <span class="task-title">₱${Number(r.value).toLocaleString()} · ${r.condition}</span>
        <span class="task-meta">${r.date}${r.note ? ` · ${r.note}` : ""}</span>
      </div>
    </li>
  `).join("");
}

document.getElementById("resaleForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = Number(document.getElementById("resaleEstimate").value);
  if (val <= 0) return;
  state.resaleLogs.unshift({
    date: new Date().toISOString().split("T")[0],
    value: val,
    condition: document.getElementById("resaleCondition").value,
    note: document.getElementById("resaleNote").value.trim()
  });
  localStorage.setItem("cg_resale_logs", JSON.stringify(state.resaleLogs));
  document.getElementById("resaleNote").value = "";
  renderResaleLogs();
  showToast("Valuation entry saved!");
});

// Vehicle Tools: Battery Voltage Checker, OBD-II Codes, Fuse Map
document.getElementById("checkVoltBtn").addEventListener("click", () => {
  const rest = Number(document.getElementById("voltRestInput").value);
  const charge = Number(document.getElementById("voltChargeInput").value);
  const box = document.getElementById("voltResultBox");

  if (!rest && !charge) {
    showToast("Enter resting or charging voltage first.");
    return;
  }

  let messages = [];
  let statusSummary = "Measured";

  if (rest > 0) {
    if (rest >= 12.5) {
      messages.push(`Resting ${rest}V: Battery Healthy (100% charge).`);
      statusSummary = `${rest}V Healthy`;
    } else if (rest >= 12.1) {
      messages.push(`Resting ${rest}V: Low Charge (~50%) — recharge or load-test battery.`);
      statusSummary = `${rest}V Low`;
    } else {
      messages.push(`Resting ${rest}V: Weak / Sulfated Battery (<12.1V) — replacement likely needed.`);
      statusSummary = `${rest}V Weak`;
    }
  }

  if (charge > 0) {
    if (charge >= 13.8 && charge <= 14.5) {
      messages.push(`Charging ${charge}V: Alternator Output Normal.`);
      statusSummary = `${charge}V Charging OK`;
    } else if (charge < 13.8) {
      messages.push(`Charging ${charge}V: Undercharging — check alternator belt tension, brushes, or IC regulator.`);
      statusSummary = `${charge}V Undercharging`;
    } else {
      messages.push(`Charging ${charge}V: Overcharging (>14.5V) — faulty IC voltage regulator.`);
      statusSummary = `${charge}V Overcharging`;
    }
  }

  box.className = "alert-box success";
  box.innerHTML = messages.join("<br>");
  state.batteryStatus = statusSummary;
  localStorage.setItem("cg_battery_status", statusSummary);
  updateDashboard();
});

const obdSearchInput = document.getElementById("obdSearchInput");
const obdList = document.getElementById("obdList");
function renderObdCodes() {
  const q = obdSearchInput.value.trim().toLowerCase();
  const matches = OBD_CODES.filter(c => !q || c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || c.fix.toLowerCase().includes(q));
  obdList.innerHTML = matches.map(c => `
    <li class="task-item"><div class="task-label"><span class="task-title">${c.code} — ${c.title}</span><span class="task-meta">${c.fix}</span></div></li>
  `).join("");
}
obdSearchInput.addEventListener("input", renderObdCodes);

const fuseSearchInput = document.getElementById("fuseSearchInput");
const fuseList = document.getElementById("fuseList");
function renderFuses() {
  const q = fuseSearchInput.value.trim().toLowerCase();
  const matches = FUSE_MAP.filter(f => !q || f.name.toLowerCase().includes(q) || f.circuit.toLowerCase().includes(q) || f.note.toLowerCase().includes(q));
  fuseList.innerHTML = matches.map(f => `
    <li class="task-item"><div class="task-label"><span class="task-title">${f.name}</span><span class="task-meta">${f.circuit} · ${f.note}</span></div></li>
  `).join("");
}
fuseSearchInput.addEventListener("input", renderFuses);

// Troubleshooting, Specs & Emergency Center
function renderTroubleshooting() {
  document.getElementById("troubleshootContainer").innerHTML = TROUBLESHOOTING_GUIDES.map(g => `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${g.severity}</span>
          <h3 class="card-title" style="margin-top:6px;">${g.symptom}</h3>
        </div>
      </div>
      <ul class="task-list">
        ${g.steps.map(s => `<li class="task-item"><div class="task-label"><span class="task-meta" style="color:var(--text);font-size:0.85rem;">${s}</span></div></li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderSpecs() {
  const list = state.version === "all" ? VARIANT_SPECS : VARIANT_SPECS.filter(v => v.id === state.version);
  document.getElementById("specsContainer").innerHTML = list.map(v => `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${v.engineCode}</span>
          <h3 class="card-title" style="margin-top:6px;">${v.name}</h3>
        </div>
      </div>
      <p style="font-size:0.85rem;margin:4px 0;"><strong>Engine:</strong> ${v.engine}</p>
      <p style="font-size:0.85rem;margin:4px 0;"><strong>Transmission:</strong> ${v.trans}</p>
      <p style="font-size:0.85rem;margin:4px 0;"><strong>Fluids:</strong> ${v.fluids}</p>
      <p style="font-size:0.85rem;margin:4px 0;"><strong>Torque &amp; Valves:</strong> ${v.torque}</p>
      <p class="muted-text">${v.notes}</p>
    </article>
  `).join("");
}

function renderEmergencyCenter() {
  document.getElementById("emergencyContainer").innerHTML = EMERGENCY_GUIDES.map(e => `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${e.badge}</span>
          <h3 class="card-title" style="margin-top:6px;">${e.title}</h3>
        </div>
      </div>
      <ul class="task-list">
        ${e.steps.map(s => `<li class="task-item"><div class="task-label"><span class="task-meta" style="color:var(--text);font-size:0.85rem;">${s}</span></div></li>`).join("")}
      </ul>
    </article>
  `).join("");
}

// Navigation Routing (9 Views)
function switchView(viewName, updateHash = true) {
  const valid = ["dashboard", "maintain", "parts", "history", "costs", "diagnose", "tools", "specs", "emergency"];
  const target = valid.includes(viewName) ? viewName : "dashboard";

  document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(`view-${target}`).classList.remove("hidden");

  document.querySelectorAll(".mod-btn, .bottom-btn").forEach(btn => {
    const active = btn.dataset.view === target;
    btn.classList.toggle("active", active);
    if (btn.hasAttribute("aria-selected")) btn.setAttribute("aria-selected", active);
    if (btn.classList.contains("bottom-btn")) {
      if (active) {
        btn.setAttribute("aria-current", "page");
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        btn.removeAttribute("aria-current");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (updateHash && window.location.hash !== `#${target}`) {
    history.pushState(null, "", `#${target}`);
  }
}

document.querySelectorAll(".mod-btn, .bottom-btn").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

document.querySelectorAll("[data-jump]").forEach(btn => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.jump;
    switchView(view);
    if (btn.dataset.interval) {
      state.interval = btn.dataset.interval;
      document.querySelectorAll(".pill").forEach(p => {
        const match = p.dataset.interval === state.interval;
        p.classList.toggle("active", match);
        p.setAttribute("aria-pressed", match);
      });
      renderChecklists();
    }
  });
});

window.addEventListener("hashchange", () => {
  const h = window.location.hash.replace("#", "");
  if (h) switchView(h, false);
});

// PWA Install, Online Status & Service Worker Auto-Update
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
      const reg = await navigator.serviceWorker.register("./service-worker.js?v=5");
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener("statechange", () => {
          if (nw.state === "installed" && navigator.serviceWorker.controller) {
            document.getElementById("updateBanner").classList.remove("hidden");
          }
        });
      });
      reg.update();
    } catch {}
  });
}

document.getElementById("reloadAppBtn").addEventListener("click", () => window.location.reload());

// Initial Render
renderChecklists();
renderParts();
renderServiceLogs();
renderFuelLogs();
renderResaleLogs();
renderObdCodes();
renderFuses();
renderTroubleshooting();
renderSpecs();
renderEmergencyCenter();
updateDashboard();
updateOnlineStatus();
if (window.location.hash) switchView(window.location.hash.replace("#", ""), false);
