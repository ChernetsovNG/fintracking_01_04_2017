package com.nchernetsov.fintracking;

import org.springframework.context.support.GenericXmlApplicationContext;

import java.util.Arrays;

import static com.nchernetsov.fintracking.TestUtil.mockAuthorize;
import static com.nchernetsov.fintracking.UserTestData.USER;

public class SpringMain {

    public static void main(String[] args) {
        try (GenericXmlApplicationContext appCtx = new GenericXmlApplicationContext()) {
            appCtx.getEnvironment().setActiveProfiles(Profiles.getActiveDbProfile(), Profiles.DB_IMPLEMENTATION);
            appCtx.load("spring/spring-app.xml", "spring/mock.xml");
            appCtx.refresh();

            mockAuthorize(USER);

            System.out.println("Bean definition names: " + Arrays.toString(appCtx.getBeanDefinitionNames()));

        }
    }

}

