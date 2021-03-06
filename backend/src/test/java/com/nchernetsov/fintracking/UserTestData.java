package com.nchernetsov.fintracking;

import com.nchernetsov.fintracking.matcher.ModelMatcher;
import com.nchernetsov.fintracking.model.Role;
import com.nchernetsov.fintracking.model.User;

import java.util.Objects;

import static com.nchernetsov.fintracking.model.BaseEntity.START_SEQ;

public class UserTestData {
    public static final int USER_ID = START_SEQ;
    public static final int ADMIN_ID = START_SEQ + 1;
    public static final int NCh_ID = START_SEQ + 2;

    public static final User USER = new User(USER_ID, "User", "user@gmail.com", "user111", Role.ROLE_USER);
    public static final User ADMIN = new User(ADMIN_ID, "Admin", "admin@gmail.com", "admin11", Role.ROLE_ADMIN, Role.ROLE_USER);
    public static final User N_Ch = new User(NCh_ID, "N_Chernetsov", "n.chernetsov86@gmail.com", "morganae7", Role.ROLE_ADMIN, Role.ROLE_USER);

    public static final ModelMatcher<User> MATCHER = ModelMatcher.of(User.class,
            (expected, actual) -> expected == actual ||
                    (Objects.equals(expected.getPassword(), actual.getPassword())
                            && Objects.equals(expected.getId(), actual.getId())
                            && Objects.equals(expected.getName(), actual.getName())
                            && Objects.equals(expected.getEmail(), actual.getEmail())
                            && Objects.equals(expected.isEnabled(), actual.isEnabled())
                            && Objects.equals(expected.getRoles(), actual.getRoles())
                    )
    );

}
