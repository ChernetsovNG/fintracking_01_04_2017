package com.nchernetsov.fintracking;

public class Profiles {
    public static final String
            POSTGRES = "postgres",
            H2 = "h2",
            JPA = "jpa",
            DATAJPA = "datajpa";

    public static final String DB_IMPLEMENTATION = DATAJPA;

    public static String getActiveDbProfile() {
        try {
            Class.forName("org.postgresql.Driver");
            return Profiles.POSTGRES;
        } catch (ClassNotFoundException ex) {
            try {
                Class.forName("org.h2.Driver");
                return Profiles.H2;
            } catch (ClassNotFoundException e) {
                throw new IllegalStateException("Could not resolve DB profile");
            }
        }
    }
}


