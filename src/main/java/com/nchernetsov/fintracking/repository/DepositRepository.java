package com.nchernetsov.fintracking.repository;

import com.nchernetsov.fintracking.model.Deposit;

import java.util.Collection;

public interface DepositRepository {
    // null if updated deposit do not belong to userId
    Deposit save(Deposit deposit, int userId);

    // false if deposit do not belong to userId
    boolean delete(int id, int userId);

    // null if deposit do not belong to userId
    Deposit get(int id, int userId);

    Collection<Deposit> getAll(int userId);

    default Deposit getWithUser(int id, int userId) {
        throw new UnsupportedOperationException();
    }
}
