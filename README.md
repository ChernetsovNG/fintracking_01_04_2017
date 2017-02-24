Для запуска приложения можно использовать команду:

mvn clean package -DskipTests=true org.codehaus.cargo:cargo-maven2-plugin:1.5.0:run

Чтобы выполнить все тесты:

mvn clean package org.codehaus.cargo:cargo-maven2-plugin:1.5.0:run