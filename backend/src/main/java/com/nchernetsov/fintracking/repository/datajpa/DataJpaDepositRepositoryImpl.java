package com.nchernetsov.fintracking.repository.datajpa;

import com.nchernetsov.fintracking.model.Deposit;
import com.nchernetsov.fintracking.repository.DepositRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class DataJpaDepositRepositoryImpl implements DepositRepository {

    @Autowired
    private CrudDepositRepository crudDepositRepository;

    @Autowired
    private CrudUserRepository crudUserRepository;

    @Override
    @Transactional
    public Deposit save(Deposit deposit, int userId) {
        if (!deposit.isNew() && get(deposit.getId(), userId) == null) {
            return null;
        }
        deposit.setUser(crudUserRepository.getOne(userId));
        return crudDepositRepository.save(deposit);
    }

    @Override
    public boolean delete(int id, int userId) {
        return crudDepositRepository.delete(id, userId) != 0;
    }

    @Override
    public Deposit get(int id, int userId) {
        Deposit deposit = crudDepositRepository.findOne(id);
        return deposit != null && deposit.getUser().getId() == userId ? deposit : null;
    }

    @Override
    public List<Deposit> getAll(int userId) {
        return crudDepositRepository.getAll(userId);
    }

    @Override
    public Deposit getWithUser(int id, int userId) {
        return crudDepositRepository.getWithUser(id, userId);
    }
}


