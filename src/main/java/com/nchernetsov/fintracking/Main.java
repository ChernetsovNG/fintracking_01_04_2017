package com.nchernetsov.fintracking;

import com.nchernetsov.fintracking.model.Currency;
import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import java.time.LocalDate;
import java.time.Month;

public class Main {
    public static void main(String[] args) {
        Currency rub = new Currency(Money.of(CurrencyUnit.getInstance("RUB"), 91.25));
        System.out.println(rub);

        LocalDate openDate = LocalDate.of(2015, Month.JUNE, 1);
        LocalDate closeDate = openDate.plusDays(365);

        System.out.println(closeDate);
    }

}

