package com.nchernetsov.fintracking.service.jpa;

import com.nchernetsov.fintracking.service.AbstractJpaUserServiceTest;
import org.springframework.test.context.ActiveProfiles;

import static com.nchernetsov.fintracking.Profiles.JPA;

@ActiveProfiles(JPA)
public class JpaUserServiceTest extends AbstractJpaUserServiceTest {
}
