package com.nchernetsov.fintracking.service;

import com.nchernetsov.fintracking.model.Deposit;
import com.nchernetsov.fintracking.util.exception.NotFoundException;

import java.util.Collection;

public interface DepositService {
    Deposit get(int id, int userId) throws NotFoundException;

    void delete(int id, int userId) throws NotFoundException;

    Collection<Deposit> getAll(int userId);

    Deposit update(Deposit deposit, int userId) throws NotFoundException;

    Deposit save(Deposit deposit, int userId);

    Deposit getWithUser(int id, int userId);
}




