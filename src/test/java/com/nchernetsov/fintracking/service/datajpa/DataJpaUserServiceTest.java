package com.nchernetsov.fintracking.service.datajpa;

import com.nchernetsov.fintracking.DepositTestData;
import com.nchernetsov.fintracking.model.User;
import com.nchernetsov.fintracking.service.AbstractJpaUserServiceTest;
import com.nchernetsov.fintracking.util.exception.NotFoundException;
import org.junit.Test;
import org.springframework.test.context.ActiveProfiles;

import java.util.Arrays;

import static com.nchernetsov.fintracking.Profiles.DATAJPA;
import static com.nchernetsov.fintracking.UserTestData.*;

@ActiveProfiles(DATAJPA)
public class DataJpaUserServiceTest extends AbstractJpaUserServiceTest {

    @Test
    public void testGetWithMeals() throws Exception {
        User user = service.getWithDeposits(USER_ID);
        MATCHER.assertEquals(USER, user);
        DepositTestData.MATCHER.assertCollectionEquals(Arrays.asList(DepositTestData.DEPOSIT1), user.getDeposits());
    }

    @Test(expected = NotFoundException.class)
    public void testGetWithDepositsNotFound() throws Exception {
        service.getWithDeposits(1);
    }
}