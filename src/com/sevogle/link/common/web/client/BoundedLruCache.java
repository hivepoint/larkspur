package com.sevogle.link.common.web.client;

import java.util.LinkedHashMap;
import java.util.Map;

public class BoundedLruCache<KEY, TYPE> extends LinkedHashMap<KEY, TYPE> {
    private static final long serialVersionUID = 2171946279068594105L;
    private static final int DEFAULT_INITIAL_CAPACITY = 100;

    private static final float DEFAULT_LOAD_FACTOR = 0.75F;

    private final int bound;

    public BoundedLruCache(final int bound) {
        super(DEFAULT_INITIAL_CAPACITY, DEFAULT_LOAD_FACTOR, true);
        this.bound = bound;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<KEY, TYPE> eldest) {
        return size() > bound;
    }

}
