package com.nchernetsov.fintracking.service;

import com.nchernetsov.fintracking.model.Deposit;
import com.nchernetsov.fintracking.util.exception.NotFoundException;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;

import static com.nchernetsov.fintracking.DepositTestData.*;
import static com.nchernetsov.fintracking.UserTestData.ADMIN_ID;
import static com.nchernetsov.fintracking.UserTestData.NCh_ID;
import static com.nchernetsov.fintracking.UserTestData.USER_ID;

public abstract class AbstractDepositServiceTest extends AbstractServiceTest {

    @Autowired
    protected DepositService service;

    @Test
    public void moneyNotNullTest() {
        Deposit deposit = service.get(NCh_DEPOSIT1_ID, NCh_ID);
        Assert.assertNotNull(deposit.getMoney());
    }

    @Test
    public void testDelete() throws Exception {
        service.delete(NCh_DEPOSIT1_ID, NCh_ID);
        MATCHER.assertCollectionEquals(Arrays.asList(NCh_DEPOSIT2), service.getAll(NCh_ID));
    }

    @Test
    public void testDeleteNotFound() throws Exception {
        thrown.expect(NotFoundException.class);
        service.delete(NCh_DEPOSIT1_ID, 1);
    }

    @Test
    public void testSave() throws Exception {
        Deposit created = getCreated();
        service.save(created, NCh_ID);
        MATCHER.assertCollectionEquals(Arrays.asList(created, NCh_DEPOSIT1, NCh_DEPOSIT2), service.getAll(NCh_ID));
    }

    @Test
    public void testGet() throws Exception {
        Deposit actual = service.get(NCh_DEPOSIT1_ID, NCh_ID);
        MATCHER.assertEquals(NCh_DEPOSIT1, actual);
    }

    @Test
    public void testGetNotFound() throws Exception {
        thrown.expect(NotFoundException.class);
        service.get(NCh_DEPOSIT1_ID, USER_ID);
    }

    @Test
    public void testUpdate() throws Exception {
        Deposit updated = getUpdated();
        service.update(updated, USER_ID);
        MATCHER.assertEquals(updated, service.get(DEPOSIT1_ID, USER_ID));
    }

    @Test
    public void testUpdateNotFound() throws Exception {
        thrown.expect(NotFoundException.class);
        thrown.expectMessage("Not found entity with id=" + DEPOSIT1_ID);
        service.update(DEPOSIT1, ADMIN_ID);
    }

    @Test
    public void testGetAll() throws Exception {
        MATCHER.assertCollectionEquals(Arrays.asList(NCh_DEPOSIT1, NCh_DEPOSIT2), service.getAll(NCh_ID));
    }

}
