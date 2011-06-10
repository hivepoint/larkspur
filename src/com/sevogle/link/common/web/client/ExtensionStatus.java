package com.sevogle.link.common.web.client;

public enum ExtensionStatus {
    OK("ok"), PENDING("pending"), ERROR("error");

    private final String value;

    ExtensionStatus(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ExtensionStatus fromValue(String v) {
        for (ExtensionStatus c : ExtensionStatus.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
