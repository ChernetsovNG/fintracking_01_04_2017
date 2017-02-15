package com.nchernetsov.fintracking.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Currency {

    @Column(name = "money_amount_hundred", nullable = false)
    private long amount;

    @Column(name = "currency", nullable = false, length = 3)
    private String currencyCode;

    public Currency(long amount, String currencyCode) {
        this.amount = amount;
        this.currencyCode = currencyCode;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
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
        return amount + " " + currencyCode;
    }
}
