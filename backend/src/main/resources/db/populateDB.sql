DELETE FROM user_roles;
DELETE FROM users;
ALTER SEQUENCE global_seq RESTART WITH 100000;

INSERT INTO users (name, email, password)
VALUES ('User', 'user@gmail.com', 'user111');

INSERT INTO users (name, email, password)
VALUES ('Admin', 'admin@gmail.com', 'admin11');

INSERT INTO users (name, email, password)
VALUES ('N_Chernetsov', 'n.chernetsov86@gmail.com', 'morganae7');

INSERT INTO user_roles (role, user_id) VALUES
  ('ROLE_USER', 100000),
  ('ROLE_ADMIN', 100001),
  ('ROLE_USER', 100001),
  ('ROLE_ADMIN', 100002),
  ('ROLE_USER', 100002);

INSERT INTO deposits (user_id, bank_name, deposit_name, open_date, close_date, duration_day, currency, money_amount, percent, comment) VALUES
  (100000, 'Тестовый банк', 'Тестовый вклад', '2017-01-15', '2017-07-14', 180, 'USD', 4000, 3.5, 'Комментарий'),
  (100002, 'Кредит Европа банк', 'Летнее предложение на 1 год', '2016-08-11', '2017-08-14', 368, 'RUB', 200000, 10.5, 'Комментарий к вкладу 1'),
  (100002, 'Траст', 'Вклад', '2016-12-12', '2017-08-19', 250, 'EUR', 5000, 5.0, 'Комментарий к вкладу 2');


