package com.sevogle.link.common.web.client;

public enum MessageSource {
    INBOUND("inbound"), OUTBOUND("outbound");

    private final String value;

    MessageSource(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MessageSource fromValue(String v) {
        for (MessageSource c : MessageSource.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }
}
