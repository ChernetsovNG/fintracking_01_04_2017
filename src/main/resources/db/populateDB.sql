DELETE FROM user_roles;
DELETE FROM users;
ALTER SEQUENCE global_seq RESTART WITH 100000;

INSERT INTO users (name, email, password)
VALUES ('User', 'user@gmail.com', 'user');

INSERT INTO users (name, email, password)
VALUES ('Admin', 'admin@gmail.com', 'admin');

INSERT INTO users (name, email, password)
VALUES ('N_Chernetsov', 'n.chernetsov86@gmail.com', 'morganae7');

INSERT INTO user_roles (role, user_id) VALUES
  ('ROLE_USER', 100000),
  ('ROLE_ADMIN', 100001),
  ('ROLE_USER', 100001),
  ('ROLE_ADMIN', 100002),
  ('ROLE_USER', 100002);

INSERT INTO deposits (user_id, bank_name, deposit_name, open_date, duration_day, currency, money_amount_hundred, percent, comment) VALUES
  (100000, 'Тестовый банк', 'Тестовый вклад', '2017-01-15', 180, 'USD', 400000, 3.5, 'Комментарий'),
  (100002, 'Кредит Европа Банк', 'Летнее предложение на 1 год', '2016-08-11', 368, 'RUB', 20000000, 10.5, 'Комментарий к вкладу');


