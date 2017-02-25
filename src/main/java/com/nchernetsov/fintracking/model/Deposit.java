package com.nchernetsov.fintracking.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.Range;
import org.hibernate.validator.constraints.SafeHtml;
import org.joda.money.Money;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@NamedQueries({
        @NamedQuery(name = Deposit.ALL_SORTED, query = "SELECT d FROM Deposit d WHERE d.user.id=:userId ORDER BY d.closeDate"),
        @NamedQuery(name = Deposit.DELETE, query = "DELETE FROM Deposit d WHERE d.id=:id AND d.user.id=:userId")
})
@Entity
@Table(name = "deposits")
public class Deposit extends BaseEntity {
    public static final String ALL_SORTED = "Deposit.getAll";
    public static final String DELETE = "Deposit.delete";

    @Column(name = "bank_name", nullable = false)
    @NotBlank
    private String bankName;

    @Column(name = "deposit_name", nullable = false)
    @NotBlank
    private String depositName;

    @Column(name = "open_date", nullable = false)
    @NotNull
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate openDate;

    @Column(name = "close_date", nullable = false)
    @NotNull
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate closeDate;

    @Column(name = "duration_day", nullable = false)
    @NotNull
    @Range(min = 1)
    private int durationDay;

    @Embedded
    private Currency currency;

    @Column(name = "percent", nullable = false)
    private double percent;

    @Column(name = "comment", nullable = false)
    @NotBlank
    @SafeHtml
    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    public Deposit() {
    }

    public Deposit(String bankName, String depositName, LocalDate openDate, int durationDay,
                   Currency currency, double percent, String comment) {
        this(null, bankName, depositName, openDate, durationDay, currency, percent, comment);
    }

    public Deposit(Integer id, String bankName, String depositName, LocalDate openDate,
                   int durationDay, Currency currency, double percent, String comment) {
        super(id);
        this.bankName = bankName;
        this.depositName = depositName;
        this.openDate = openDate;
        this.durationDay = durationDay;
        this.currency = currency;
        this.percent = percent;
        this.comment = comment;

        closeDate = openDate.plusDays(durationDay);
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getDepositName() {
        return depositName;
    }

    public void setDepositName(String depositName) {
        this.depositName = depositName;
    }

    public LocalDate getOpenDate() {
        return openDate;
    }

    public void setOpenDate(LocalDate openDate) {
        this.openDate = openDate;
    }

    public LocalDate getCloseDate() {
        return closeDate;
    }

    public int getDurationDay() {
        return durationDay;
    }

    public void setDurationDay(int durationDay) {
        this.durationDay = durationDay;
    }

    public Currency getCurrency() {
        return currency;
    }

    public Money getMoney() { return currency.getMoney(); }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public double getPercent() {
        return percent;
    }

    public void setPercent(double percent) {
        this.percent = percent;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Deposit{" +
                "id=" + getId() +
                ", bankName='" + bankName + '\'' +
                ", depositName='" + depositName + '\'' +
                ", openDate=" + openDate +
                ", durationDay=" + durationDay +
                ", currency=" + currency +
                ", percent=" + percent +
                ", comment='" + comment + '\'' +
                '}';
    }
}

