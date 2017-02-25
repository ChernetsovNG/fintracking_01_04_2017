package com.nchernetsov.fintracking;

import com.nchernetsov.fintracking.model.Currency;

import java.time.LocalDate;
import java.time.Month;

public class Main {
    public static void main(String[] args) {
        Currency rub = new Currency(91.25, "RUB");
        System.out.println(rub);

        LocalDate openDate = LocalDate.of(2015, Month.JUNE, 1);
        LocalDate closeDate = openDate.plusDays(365);

        System.out.println(closeDate);
    }

}

