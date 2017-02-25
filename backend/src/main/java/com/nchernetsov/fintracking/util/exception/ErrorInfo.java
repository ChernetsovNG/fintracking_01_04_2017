package com.nchernetsov.fintracking.util.exception;


public class ErrorInfo {
    public final String url;
    public final String cause;
    public final String[] details;

    public ErrorInfo(CharSequence url, Throwable ex) {
        this(url, ex.getClass().getSimpleName(), ex.getLocalizedMessage());
    }

    public ErrorInfo(CharSequence url, String cause, String... details) {
        this.url = url.toString();
        this.cause = cause;
        this.details = details;
    }
}

