-- Optional SQL schema if syncing maintenance logs to a cloud database
CREATE TABLE maintenance_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  variant_code VARCHAR(32) NOT NULL,
  odometer_km INTEGER NOT NULL,
  task_id VARCHAR(32) NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
