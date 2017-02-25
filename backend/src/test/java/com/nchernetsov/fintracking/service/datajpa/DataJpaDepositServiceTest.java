package com.nchernetsov.fintracking.service.datajpa;

import com.nchernetsov.fintracking.UserTestData;
import com.nchernetsov.fintracking.model.Deposit;
import com.nchernetsov.fintracking.service.AbstractDepositServiceTest;
import com.nchernetsov.fintracking.util.exception.NotFoundException;
import org.junit.Test;
import org.springframework.test.context.ActiveProfiles;

import static com.nchernetsov.fintracking.DepositTestData.*;
import static com.nchernetsov.fintracking.Profiles.DATAJPA;
import static com.nchernetsov.fintracking.UserTestData.NCh_ID;
import static com.nchernetsov.fintracking.UserTestData.USER_ID;

@ActiveProfiles(DATAJPA)
public class DataJpaDepositServiceTest extends AbstractDepositServiceTest {

    @Test
    public void testGetWithUser() throws Exception {
        Deposit userDeposit = service.getWithUser(DEPOSIT1_ID, USER_ID);
        MATCHER.assertEquals(DEPOSIT1, userDeposit);
        UserTestData.MATCHER.assertEquals(UserTestData.USER, userDeposit.getUser());
    }

    @Test(expected = NotFoundException.class)
    public void testGetWithUserNotFound() throws Exception {
        service.getWithUser(DEPOSIT1_ID, NCh_ID);
    }

}



