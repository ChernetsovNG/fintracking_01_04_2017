package com.nchernetsov.fintracking.model;

import org.joda.money.CurrencyUnit;
import org.joda.money.Money;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;

//Wrapper class to persist in database money_amount and currency_code
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
        this.money = Money.of(CurrencyUnit.getInstance(currencyCode), amount);
        this.amount = amount;
        this.currencyCode = currencyCode;
    }

    public Money getMoney() {
        return money;
    }

    public void setMoney(Money money) {
        this.money = money;
        this.amount = money.getAmount().doubleValue();
        this.currencyCode = money.getCurrencyUnit().getCurrencyCode();
    }

    @Override
    public String toString() {
        return (amount + " " + currencyCode);
    }
}
