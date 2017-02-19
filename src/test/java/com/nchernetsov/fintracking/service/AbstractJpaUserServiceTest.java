package com.nchernetsov.fintracking.service;

import com.nchernetsov.fintracking.repository.JpaUtil;
import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;

abstract public class AbstractJpaUserServiceTest extends AbstractUserServiceTest {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private JpaUtil jpaUtil;

    @Before
    @Override
    public void setUp() throws Exception {
        super.setUp();
        jpaUtil.clear2ndLevelHibernateCache();
    }
}


