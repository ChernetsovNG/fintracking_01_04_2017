package com.nchernetsov.fintracking;

import com.nchernetsov.fintracking.matcher.ModelMatcher;
import com.nchernetsov.fintracking.model.Currency;
import com.nchernetsov.fintracking.model.Deposit;
import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import java.time.Month;
import java.util.Arrays;
import java.util.List;

import static com.nchernetsov.fintracking.model.BaseEntity.START_SEQ;
import static java.time.LocalDate.of;

public class DepositTestData {
    public static final ModelMatcher<Deposit> MATCHER = ModelMatcher.of(Deposit.class);

    public static final int DEPOSIT1_ID = START_SEQ + 3;
    public static final int NCh_DEPOSIT1_ID = START_SEQ + 4;
    public static final int NCh_DEPOSIT2_ID = START_SEQ + 5;

    public static final Deposit DEPOSIT1 = new Deposit(DEPOSIT1_ID, "Тестовый банк", "Тестовый вклад",
            of(2017, Month.JANUARY, 15), 180, new Currency(Money.of(CurrencyUnit.getInstance("USD"), 4000)), 3.5, "Комментарий");

    public static final Deposit NCh_DEPOSIT1 = new Deposit(NCh_DEPOSIT1_ID, "Кредит Европа банк", "Летнее предложение на 1 год",
            of(2016, Month.AUGUST, 11), 368, new Currency(Money.of(CurrencyUnit.getInstance("RUB"), 200000)), 10.5, "Комментарий к вкладу 1");

    public static final Deposit NCh_DEPOSIT2 = new Deposit(NCh_DEPOSIT2_ID, "Траст", "Вклад",
            of(2016, Month.DECEMBER, 12), 250, new Currency(Money.of(CurrencyUnit.getInstance("EUR"), 5000)), 5, "Комментарий к вкладу 2");

    public static final List<Deposit> DEPOSITS = Arrays.asList(NCh_DEPOSIT2, NCh_DEPOSIT1, DEPOSIT1);

    public static Deposit getCreated() {
        return new Deposit(null, "Новый банк", "Созданный вклад",
                of(2015, Month.JUNE, 1), 365, new Currency(Money.of(CurrencyUnit.getInstance("RUB"), 10000)), 10.0, "No comment");
    }

    public static Deposit getUpdated() {
        return new Deposit(DEPOSIT1_ID, "Тестовый банк", "Обновлённый вклад",
                DEPOSIT1.getOpenDate(), 180, new Currency(Money.of(CurrencyUnit.getInstance("USD"), 5000)), 5.0, "Обновлённый комментарий");
    }
}
