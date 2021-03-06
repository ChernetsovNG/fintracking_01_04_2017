package com.nchernetsov.fintracking.matcher;

import com.nchernetsov.fintracking.web.json.JsonUtil;
import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;

abstract public class TestMatcher<T> extends BaseMatcher<String> {
    protected T expected;

    public TestMatcher(T expected) {
        this.expected = expected;
    }

    @Override
    public boolean matches(Object actual) {
        return compare(expected, (String) actual);
    }

    abstract protected boolean compare(T expected, String actual);

    @Override
    public void describeTo(Description description) {
        description.appendText(JsonUtil.writeValue(expected));
    }
}
