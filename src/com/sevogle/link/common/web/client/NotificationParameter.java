package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class NotificationParameter extends VariantParameter implements Serializable {
    private static final long serialVersionUID = -4508569758042493930L;

    public NotificationParameter() {
        super();
    }

    private NotificationParameter(String name, Type type) {
        super(name, type);
    }

    public static NotificationParameter createParameter(String name, boolean valueBool) {
        NotificationParameter dp = new NotificationParameter(name, Type.BOOLEAN);
        dp.vBoolean = valueBool;
        return dp;
    }

    public static NotificationParameter createParameter(String name, double valueDouble) {
        NotificationParameter dp = new NotificationParameter(name, Type.DOUBLE);
        dp.vDouble = valueDouble;
        return dp;
    }

    public static NotificationParameter createParameter(String name, int valueInt) {
        NotificationParameter dp = new NotificationParameter(name, Type.INTEGER);
        dp.vInteger = valueInt;
        return dp;
    }

    public static NotificationParameter createParameter(String name, long valueLong) {
        NotificationParameter dp = new NotificationParameter(name, Type.LONG);
        dp.vLong = valueLong;
        return dp;
    }

    public static NotificationParameter createParameter(String name, String valueString) {
        if (valueString == null) {
            throw new IllegalArgumentException("Value cannot be null");
        }
        NotificationParameter dp = new NotificationParameter(name, Type.STRING);
        dp.vString = valueString;
        return dp;
    }
}
