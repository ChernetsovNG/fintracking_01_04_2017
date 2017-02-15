DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS deposits;
DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS global_seq;

CREATE SEQUENCE global_seq START 100000;

CREATE TABLE users
(
  id         INTEGER PRIMARY KEY DEFAULT nextval('global_seq'),
  name       VARCHAR NOT NULL,
  email      VARCHAR NOT NULL,
  password   VARCHAR NOT NULL,
  registered TIMESTAMP DEFAULT now(),
  enabled    BOOL DEFAULT TRUE
);
CREATE UNIQUE INDEX users_unique_email_idx ON users (email);

CREATE TABLE user_roles
(
  user_id INTEGER NOT NULL,
  role    VARCHAR,
  CONSTRAINT user_roles_idx UNIQUE (user_id, role),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE deposits (
  id            INTEGER PRIMARY KEY DEFAULT nextval('global_seq'),
  user_id       INTEGER NOT NULL,
  bank_name     VARCHAR NOT NULL,
  deposit_name  VARCHAR NOT NULL,
  open_date     DATE NOT NULL,
  duration_day  INTEGER NOT NULL,
  currency      VARCHAR(3) NOT NULL,
  money_amount_hundred  BIGINT NOT NULL,  -- В сотых долях (копейки, центы и т.п.)
  percent       FLOAT NOT NULL,
  comment       TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX deposits_unique_user_idx ON deposits(user_id)
