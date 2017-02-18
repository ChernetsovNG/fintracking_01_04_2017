package com.nchernetsov.fintracking.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Currency {

    @Column(name = "money_amount_hundred", nullable = false)
    private long amount;

    @Column(name = "currency", nullable = false, length = 3)
    private String currencyCode;

    public Currency() {
    }

    //Валюта приходит в "рублях", а хранится в таблице в "копейках"
    public Currency(double amount, String currencyCode) {
        this.amount = (long) (amount * 100);
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
        return ((double) amount / 100) + " " + currencyCode;
    }
}
