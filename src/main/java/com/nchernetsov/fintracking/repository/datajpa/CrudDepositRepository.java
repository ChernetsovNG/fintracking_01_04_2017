package com.nchernetsov.fintracking.repository.datajpa;

import com.nchernetsov.fintracking.model.Deposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface CrudDepositRepository extends JpaRepository<Deposit, Integer> {

    @Modifying
    @Transactional
    @Query("DELETE FROM Deposit d WHERE d.id=:id AND d.user.id=:userId")
    int delete(@Param("id") int id, @Param("userId") int userId);

    @Override
    Deposit save(Deposit iter);

    @Query("SELECT d FROM Deposit d WHERE d.user.id=:userId")
    List<Deposit> getAll(@Param("userId") int userId);

    @Query("SELECt d FROM Deposit d JOIN FETCH d.user WHERE d.id=?1 AND d.user.id=?2")
    Deposit getWithUser(int id, int userId);
}

