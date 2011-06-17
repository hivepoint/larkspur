package com.sevogle.link.common.web.client;

public enum MessageState {
    DRAFT("draft"), PENDING_DELIVERY("pendingDelivery"), DELIVERED("delivered");

    private final String value;

    MessageState(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MessageState fromValue(String v) {
        for (MessageState c : MessageState.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }
}
