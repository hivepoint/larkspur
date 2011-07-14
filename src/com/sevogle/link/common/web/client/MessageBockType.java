package com.sevogle.link.common.web.client;

public enum MessageBockType {
    BODY("body"), QUOTED("quoted"), NESTED_QUOTED("nestedQuoted");

    private final String value;

    MessageBockType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MessageBockType fromValue(String v) {
        for (MessageBockType c : MessageBockType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }
}
