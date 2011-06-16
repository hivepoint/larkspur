package com.sevogle.link.common.web.client;

public enum FeedStyle {
    CHAT("chat"), CONVERSATION_LIST("conversationList");

    private final String value;

    FeedStyle(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static FeedStyle fromValue(String v) {
        for (FeedStyle c : FeedStyle.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }
}
