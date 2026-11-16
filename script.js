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
    id: "overheating",
    title: "1. Engine Overheating Emergency Guide",
    badge: "Critical Warning · Stop Safely",
    warningSign: "Warning Sign: Temperature needle climbing past 1/2 mark, loss of A/C cooling, or steam from hood.",
    steps: [
      "Turn OFF the air conditioning immediately to reduce engine load, and turn the cabin heater fan to MAX to draw heat away from the engine.",
      "Signal and pull safely off the road onto level ground. Shift to Neutral/Park and engage the handbrake.",
      "If steam or coolant is spraying—or if the needle enters the Red zone—shut the engine OFF immediately.",
      "SAFETY RULE: NEVER open the radiator cap while the engine is hot. Wait 30–45 minutes until the upper radiator hose feels cool to the touch.",
      "Once cool, inspect the coolant overflow tank, check for broken V-belts, and call roadside assistance/towing if coolant is empty or leaking."
    ]
  },
  {
    id: "brakes",
    title: "2. Brake Failure Emergency Guide",
    badge: "Critical Safety · Do Not Drive",
    warningSign: "Warning Sign: Brake pedal sinks to the floor, feels unusually hard (vacuum loss), or red BRAKE warning lamp illuminates.",
    steps: [
      "Stay calm, turn on hazard lights, and pump the brake pedal firmly 3–4 times to build any remaining hydraulic pressure.",
      "Downshift progressively to lower gears (Manual: 4th -> 3rd -> 2nd; Automatic: D -> 2 -> L) to slow the Crosswind using diesel engine compression braking.",
      "Apply the handbrake/parking brake gradually while keeping the release button pressed so the rear tires do not lock and skid.",
      "Steer safely onto the shoulder or an uphill escape area.",
      "SAFETY RULE: NEVER continue driving a vehicle with suspected brake failure. Inspect brake fluid reservoir level and rear alternator vacuum pump hoses, and arrange a flatbed tow."
    ]
  },
  {
    id: "tire",
    title: "3. Tire Blowout Emergency Guide",
    badge: "Critical Control Protocol",
    warningSign: "Warning Sign: Loud bang, sudden steering pull to one side, or heavy thumping vibration.",
    steps: [
      "Grip the steering wheel firmly with both hands and keep the vehicle pointed straight—DO NOT slam on the brakes.",
      "Lift your foot off the accelerator smoothly and let the vehicle coast down naturally until speed drops below 30 km/h.",
      "Turn on hazard flashers, pull well off the traffic lane onto firm, level ground, and set your Early Warning Device (EWD) 4–10 meters behind the vehicle.",
      "Place wheel chocks against the tire diagonally opposite the flat tire before lifting.",
      "SAFETY RULE: NEVER crawl or place any body part underneath a vehicle supported only by a jack. Always use jack stands or place the spare wheel under the frame rail as a backup."
    ]
  },
  {
    id: "battery",
    title: "4. Battery Failure Emergency Guide",
    badge: "Electrical · 12V System",
    warningSign: "Warning Sign: Slow cranking, rapid clicking from starter, dim dome/headlights, or red battery charge warning light while driving.",
    steps: [
      "Turn off headlights, A/C, stereo, and 12V accessories immediately to conserve remaining battery voltage.",
      "Inspect the 3SMF / N70ZL battery terminals for loose clamps or white/green corrosion.",
      "For jump-starting: connect Red (+) clamp to dead battery (+), Red (+) to donor battery (+), Black (-) to donor battery (-), and Black (-) to an unpainted metal engine bracket on the Crosswind (away from the battery).",
      "Once started, let the engine idle for 15–20 minutes and have alternator charging voltage (13.8V–14.4V spec) tested."
    ]
  },
  {
    id: "nostart",
    title: "5. Engine Won't Start Troubleshooting",
    badge: "No-Start Triage",
    warningSign: "Warning Sign: Engine cranks normally without firing, or glow plug indicator fails to illuminate.",
    steps: [
      "Check fuel gauge and verify transmission is firmly in Park (P) or Neutral (N) on Automatic models.",
      "Turn key to ON and watch the amber Glow Plug coil light (3–6 seconds). If it does not light, check the 60A GLOW fusible link in the engine bay.",
      "Air in diesel line check: Open the hood and pump the black hand primer on top of the fuel filter 15–20 times until firm, then crank the engine.",
      "If the engine still cranks without starting after priming, stop cranking (to protect the starter motor) and call a diesel technician."
    ]
  },
  {
    id: "smoke",
    title: "6. Smoke or Burning Smell Emergency Guide",
    badge: "Critical Fire Risk",
    warningSign: "Warning Sign: Acrid electrical burning odor, melting plastic smell, or visible smoke from hood or under-dash.",
    steps: [
      "Signal and pull over immediately away from dry grass, fuel stations, or buildings.",
      "Turn the ignition key OFF immediately and evacuate all passengers to a safe distance upwind.",
      "If smoke is minor and no flames are visible, unlatch the hood and disconnect the negative (-) battery terminal using a 10mm wrench.",
      "SAFETY RULE: NEVER open the hood wide if flames are present—oxygen rush will flare the fire. Aim an ABC fire extinguisher through the grille or hood gap at the base of the fire and call 911."
    ]
  },
  {
    id: "breakdown",
    title: "7. Roadside Breakdown Action Checklist",
    badge: "Step-by-Step Protocol",
    warningSign: "Warning Sign: Any sudden mechanical loss of power, loud metallic knocking, or red oil pressure lamp.",
    steps: [
      "1. Activate hazard warning lights immediately and steer smoothly onto the rightmost shoulder or emergency bay.",
      "2. Shift to Park (A/T) or 1st/Reverse gear (M/T), pull the handbrake firmly, and turn wheels away from traffic.",
      "3. Have passengers exit on the side away from traffic and stand behind a guardrail if available.",
      "4. Place your Early Warning Device (EWD) reflector triangle behind the vehicle to alert approaching drivers.",
      "5. Log the incident symptoms & odometer in Tool 10 below and call your saved mechanic, expressway patrol, or 911."
    ]
  }
];

const EMERGENCY_PREP_ITEMS = [
  { id: "ep1", title: "Early Warning Device (EWD Red & Yellow Triangles)", meta: "LTO mandatory roadside visibility reflector" },
  { id: "ep2", title: "ABC Dry-Chemical Fire Extinguisher (1–2 kg)", meta: "Check pressure gauge needle is in the green zone" },
  { id: "ep3", title: "Hydraulic Bottle Jack, Lug Wrench & Wheel Chocks", meta: "Verify spare tire under rear floor or rear door is inflated to 35–40 psi" },
  { id: "ep4", title: "Heavy-Duty Jumper Cables & LED Flashlight", meta: "Rated 400A+ for 2.5L diesel cold cranking" },
  { id: "ep5", title: "12V Portable Tire Inflator & Tire Plug Repair Kit", meta: "Plugs into cabin 15A CIG/ACC socket" },
  { id: "ep6", title: "Spare V-Belt Set, 2L Premixed Coolant & 1L 15W-40 Oil", meta: "Verify exact belt length against your Crosswind variant manual" },
  { id: "ep7", title: "Basic Tool Roll (10mm, 12mm, 14mm Wrenches, Pliers, Spare Fuses)", meta: "10A, 15A, 20A, 30A blade fuses + electrical tape" },
  { id: "ep8", title: "First-Aid Kit, Bottled Water & Rain Poncho", meta: "Essential for highway delays or provincial travel" }
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
  emergencyContacts: JSON.parse(localStorage.getItem("cg_em_contacts") || "[]"),
  emergencyPrep: JSON.parse(localStorage.getItem("cg_em_prep") || "{}"),
  emergencyIncidents: JSON.parse(localStorage.getItem("cg_em_incidents") || "[]"),
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
    batteryStatus: state.batteryStatus,
    emergencyContacts: state.emergencyContacts,
    emergencyPrep: state.emergencyPrep,
    emergencyIncidents: state.emergencyIncidents
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
      if (imported.emergencyContacts) state.emergencyContacts = imported.emergencyContacts;
      if (imported.emergencyPrep) state.emergencyPrep = imported.emergencyPrep;
      if (imported.emergencyIncidents) state.emergencyIncidents = imported.emergencyIncidents;
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
      localStorage.setItem("cg_em_contacts", JSON.stringify(state.emergencyContacts));
      localStorage.setItem("cg_em_prep", JSON.stringify(state.emergencyPrep));
      localStorage.setItem("cg_em_incidents", JSON.stringify(state.emergencyIncidents));
      renderEmergencyCenter();
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
  const qEl = document.getElementById("emergencySearchInput");
  const catEl = document.getElementById("emergencyCategorySelect");
  const q = qEl ? qEl.value.trim().toLowerCase() : "";
  const cat = catEl ? catEl.value : "all";

  const matches = EMERGENCY_GUIDES.filter(e => {
    const matchCat = cat === "all" || e.id === cat;
    const matchQ = !q ||
      e.title.toLowerCase().includes(q) ||
      e.warningSign.toLowerCase().includes(q) ||
      e.steps.some(st => st.toLowerCase().includes(q));
    return matchCat && matchQ;
  });

  const container = document.getElementById("emergencyContainer");
  if (matches.length === 0) {
    container.innerHTML = `<article class="card"><p class="card-title">No matching emergency guide found</p><p class="muted-text">Reset the category dropdown to "All Emergency Guides" or clear the search box.</p></article>`;
  } else {
    container.innerHTML = matches.map((e, idx) => `
      <article class="card">
        <div class="card-header">
          <div>
            <span class="badge badge-danger">${e.badge}</span>
            <h3 class="card-title" style="margin-top:6px;">${e.title}</h3>
          </div>
        </div>
        <p style="font-size:0.8125rem;margin:0 0 10px;color:var(--text-muted);"><strong>${e.warningSign}</strong></p>
        <details class="em-details" ${idx === 0 || cat !== "all" || q ? "open" : ""}>
          <summary><span>Step-by-Step Safety Procedure (${e.steps.length} steps)</span><span aria-hidden="true">▾</span></summary>
          <ol class="em-step-list">
            ${e.steps.map(s => `<li>${s}</li>`).join("")}
          </ol>
        </details>
      </article>
    `).join("");
  }

  renderEmergencyContacts();
  renderEmergencyPrep();
  renderEmergencyIncidents();
}

function renderEmergencyContacts() {
  const listEl = document.getElementById("customEmergencyContactsList");
  if (!listEl) return;
  if (state.emergencyContacts.length === 0) {
    listEl.innerHTML = `<li class="task-item"><div class="task-label"><span class="task-title">No personal contacts saved yet</span><span class="task-meta">Save your trusted Isuzu diesel mechanic, towing service, or insurance hotline above for offline one-tap calling.</span></div></li>`;
    return;
  }
  listEl.innerHTML = state.emergencyContacts.map((c, idx) => `
    <li class="task-item">
      <div class="task-label">
        <span class="task-title">${c.name}</span>
        <span class="task-meta"><a href="tel:${c.phone.replace(/[^0-9+]/g, "")}">${c.phone}</a></span>
      </div>
      <button type="button" class="btn btn-outline btn-sm" data-del-em-contact="${idx}" aria-label="Delete contact">Delete</button>
    </li>
  `).join("");
}

function renderEmergencyPrep() {
  const listEl = document.getElementById("emergencyPrepList");
  const badgeEl = document.getElementById("emPrepBadge");
  if (!listEl) return;
  let checkedCount = 0;
  listEl.innerHTML = EMERGENCY_PREP_ITEMS.map(item => {
    const isChecked = !!state.emergencyPrep[item.id];
    if (isChecked) checkedCount++;
    return `
      <li class="task-item ${isChecked ? "done" : ""}">
        <input type="checkbox" class="task-checkbox" id="${item.id}" data-em-prep="${item.id}" ${isChecked ? "checked" : ""} />
        <label class="task-label" for="${item.id}">
          <span class="task-title">${item.title}</span>
          <span class="task-meta">${item.meta}</span>
        </label>
      </li>
    `;
  }).join("");
  if (badgeEl) {
    const allReady = checkedCount === EMERGENCY_PREP_ITEMS.length;
    badgeEl.className = allReady ? "badge badge-success" : "badge badge-warn";
    badgeEl.textContent = allReady ? `Verified Ready (${checkedCount}/${EMERGENCY_PREP_ITEMS.length})` : `${checkedCount}/${EMERGENCY_PREP_ITEMS.length} Packed`;
  }
}

function renderEmergencyIncidents() {
  const listEl = document.getElementById("emergencyIncidentList");
  if (!listEl) return;
  if (state.emergencyIncidents.length === 0) {
    listEl.innerHTML = `<li class="task-item"><div class="task-label"><span class="task-title">No emergency incidents recorded</span><span class="task-meta">Use the form above to log roadside warning signs, breakdowns, or temporary fixes offline.</span></div></li>`;
    return;
  }
  listEl.innerHTML = state.emergencyIncidents.map((inc, idx) => `
    <li class="task-item">
      <div class="task-label">
        <span class="task-title">${inc.category} (${inc.date}${inc.odo ? ` · ${Number(inc.odo).toLocaleString()} km` : ""})</span>
        <span class="task-meta">${inc.notes}</span>
      </div>
      <button type="button" class="btn btn-outline btn-sm" data-del-em-incident="${idx}" aria-label="Delete incident note">Delete</button>
    </li>
  `).join("");
}

// Emergency Center Event Listeners
document.getElementById("emergencySearchInput")?.addEventListener("input", renderEmergencyCenter);
document.getElementById("emergencyCategorySelect")?.addEventListener("change", renderEmergencyCenter);
document.getElementById("printEmergencyBtn")?.addEventListener("click", () => window.print());
document.getElementById("emergencyBackToTopBtn")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("emergencyContactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("emContactName").value.trim();
  const phone = document.getElementById("emContactPhone").value.trim();
  if (!name || !phone) return;
  state.emergencyContacts.unshift({ name, phone });
  localStorage.setItem("cg_em_contacts", JSON.stringify(state.emergencyContacts));
  document.getElementById("emContactName").value = "";
  document.getElementById("emContactPhone").value = "";
  renderEmergencyContacts();
  showToast("Emergency contact saved offline!");
});

document.getElementById("customEmergencyContactsList")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-del-em-contact]");
  if (!btn) return;
  state.emergencyContacts.splice(Number(btn.dataset.delEmContact), 1);
  localStorage.setItem("cg_em_contacts", JSON.stringify(state.emergencyContacts));
  renderEmergencyContacts();
  showToast("Contact removed.");
});

document.getElementById("emergencyPrepList")?.addEventListener("change", (e) => {
  if (e.target.matches("[data-em-prep]")) {
    state.emergencyPrep[e.target.dataset.emPrep] = e.target.checked;
    localStorage.setItem("cg_em_prep", JSON.stringify(state.emergencyPrep));
    renderEmergencyPrep();
  }
});

document.getElementById("resetEmPrepBtn")?.addEventListener("click", () => {
  state.emergencyPrep = {};
  localStorage.removeItem("cg_em_prep");
  renderEmergencyPrep();
  showToast("Emergency kit checklist reset.");
});

const emIncidentDateInput = document.getElementById("emIncidentDate");
if (emIncidentDateInput) emIncidentDateInput.value = new Date().toISOString().split("T")[0];

document.getElementById("emergencyIncidentForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = document.getElementById("emIncidentDate").value;
  const odo = document.getElementById("emIncidentOdo").value;
  const category = document.getElementById("emIncidentCategory").value;
  const notes = document.getElementById("emIncidentNotes").value.trim();
  if (!notes) return;
  state.emergencyIncidents.unshift({ date, odo, category, notes });
  localStorage.setItem("cg_em_incidents", JSON.stringify(state.emergencyIncidents));
  document.getElementById("emIncidentNotes").value = "";
  renderEmergencyIncidents();
  showToast("Emergency incident note saved!");
});

document.getElementById("emergencyIncidentList")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-del-em-incident]");
  if (!btn) return;
  state.emergencyIncidents.splice(Number(btn.dataset.delEmIncident), 1);
  localStorage.setItem("cg_em_incidents", JSON.stringify(state.emergencyIncidents));
  renderEmergencyIncidents();
  showToast("Incident note deleted.");
});

document.getElementById("clearEmIncidentsBtn")?.addEventListener("click", () => {
  state.emergencyIncidents = [];
  localStorage.removeItem("cg_em_incidents");
  renderEmergencyIncidents();
  showToast("Emergency incident history cleared.");
});

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
      const reg = await navigator.serviceWorker.register("./service-worker.js?v=6");
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
