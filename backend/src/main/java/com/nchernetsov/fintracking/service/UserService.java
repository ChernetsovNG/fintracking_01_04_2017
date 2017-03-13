package com.nchernetsov.fintracking.service;

import com.nchernetsov.fintracking.model.User;
import com.nchernetsov.fintracking.to.UserTo;
import com.nchernetsov.fintracking.util.exception.NotFoundException;

import java.util.List;

public interface UserService {

    User save(User user);

    void delete(int id) throws NotFoundException;

    User get(int id) throws NotFoundException;

    User getByEmail(String email) throws NotFoundException;

    List<User> getAll();

    void update(User user);

    void update(UserTo userTo);

    void evictCache();

    void enable(int id, boolean enabled);

    User getWithDeposits(int id);
}

