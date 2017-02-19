package com.nchernetsov.fintracking.model;

import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Currency {

    @Column(name = "money_amount", nullable = false)
    private double amount;

    @Column(name = "currency", nullable = false)
    private String currencyCode;

    public Currency() {
    }

    public Currency(double amount, String currencyCode) {
        this.amount = amount;
        this.currencyCode = currencyCode;
    }

    public Money getMoney() {
        return Money.of(CurrencyUnit.getInstance(currencyCode), amount);
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    @Override
    public String toString() {
        return (amount + " " + currencyCode);
    }
}
