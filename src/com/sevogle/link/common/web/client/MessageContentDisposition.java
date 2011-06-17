package com.sevogle.link.common.web.client;

public enum MessageContentDisposition {
    NONE("none"), EMBEDDED("embedded"), ATTACHED("attached");

    private final String value;

    MessageContentDisposition(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MessageContentDisposition fromValue(String v) {
        for (MessageContentDisposition c : MessageContentDisposition.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }
}
