CREATE TABLE maintenance_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  variant_code VARCHAR(32) NOT NULL,
  odometer_km INTEGER NOT NULL,
  service_type VARCHAR(128) NOT NULL,
  notes TEXT,
  service_date DATE NOT NULL
);
