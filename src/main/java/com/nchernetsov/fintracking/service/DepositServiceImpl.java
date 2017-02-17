package com.nchernetsov.fintracking.service;

import com.nchernetsov.fintracking.model.Deposit;
import com.nchernetsov.fintracking.repository.DepositRepository;
import com.nchernetsov.fintracking.util.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;

import java.util.Collection;

import static com.nchernetsov.fintracking.util.ValidationUtil.checkNotFoundWithId;

public class DepositServiceImpl implements DepositService {

    @Autowired
    private DepositRepository repository;

    @Override
    public Deposit get(int id, int userId) throws NotFoundException {
        return checkNotFoundWithId(repository.get(id, userId), id);
    }

    @Override
    public void delete(int id, int userId) throws NotFoundException {
        checkNotFoundWithId(repository.delete(id, userId), id);
    }

    @Override
    public Collection<Deposit> getAll(int userId) {
        return repository.getAll(userId);
    }

    @Override
    public Deposit update(Deposit deposit, int userId) throws NotFoundException {
        Assert.notNull(deposit, "deposit must not be null");
        return checkNotFoundWithId(repository.save(deposit, userId), deposit.getId());
    }

    @Override
    public Deposit save(Deposit deposit, int userId) {
        Assert.notNull(deposit, "deposit must not be null");
        return repository.save(deposit, userId);
    }

    @Override
    public Deposit getWithUser(int id, int userId) {
        return checkNotFoundWithId(repository.getWithUser(id, userId), id);
    }
}

