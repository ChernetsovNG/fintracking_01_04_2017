package com.nchernetsov.fintracking.repository.jpa;

import com.nchernetsov.fintracking.model.Deposit;
import com.nchernetsov.fintracking.model.User;
import com.nchernetsov.fintracking.repository.DepositRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

@Repository
@Transactional(readOnly = true)
public class JpaDepositRepositoryImpl implements DepositRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public Deposit save(Deposit deposit, int userId) {
        if (!deposit.isNew() && get(deposit.getId(), userId) == null) {
            return null;
        }
        deposit.setUser(em.getReference(User.class, userId));
        if (deposit.isNew()) {
            em.persist(deposit);
            return deposit;
        } else {
            return em.merge(deposit);
        }
    }

    @Override
    @Transactional
    public boolean delete(int id, int userId) {
        return em.createNamedQuery(Deposit.DELETE)
                .setParameter("id", id)
                .setParameter("userId", userId)
                .executeUpdate() != 0;
    }

    @Override
    public Deposit get(int id, int userId) {
        Deposit deposit = em.find(Deposit.class, id);
        return deposit != null && deposit.getUser().getId() == userId ? deposit : null;

    }

    @Override
    public Collection<Deposit> getAll(int userId) {
        return em.createNamedQuery(Deposit.ALL_SORTED, Deposit.class)
                .setParameter("userId", userId)
                .getResultList();
    }

}