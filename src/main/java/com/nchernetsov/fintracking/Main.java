package com.nchernetsov.fintracking;

import com.nchernetsov.fintracking.model.Currency;

public class Main {
    public static void main(String[] args) {
        Currency rub = new Currency(91.25, "RUB");
        System.out.println(rub);
    }

}
