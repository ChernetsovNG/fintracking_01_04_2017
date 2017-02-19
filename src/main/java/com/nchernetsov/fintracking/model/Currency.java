package com.nchernetsov.fintracking.model;

import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;

@Embeddable
public class Currency {

    @Transient
    private Money money;

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
        if (money == null) {
            money = Money.of(CurrencyUnit.getInstance(currencyCode), amount);
        }
        return money;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
        this.money = Money.of(CurrencyUnit.getInstance(currencyCode), amount);
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        this.money = Money.of(CurrencyUnit.getInstance(currencyCode), amount);
    }

    @Override
    public String toString() {
        return (amount + " " + currencyCode);
    }
}
