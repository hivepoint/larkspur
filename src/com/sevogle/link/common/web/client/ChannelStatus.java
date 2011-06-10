package com.sevogle.link.common.web.client;

public enum ChannelStatus {
    OK("ok"), ERROR("error");

    private final String value;

    ChannelStatus(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ChannelStatus fromValue(String v) {
        for (ChannelStatus c : ChannelStatus.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }
}
