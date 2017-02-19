package com.nchernetsov.fintracking.service.jpa;

import com.nchernetsov.fintracking.service.AbstractDepositServiceTest;
import org.springframework.test.context.ActiveProfiles;

import static com.nchernetsov.fintracking.Profiles.JPA;

@ActiveProfiles(JPA)
public class JpaDepositServiceTest extends AbstractDepositServiceTest {
}

