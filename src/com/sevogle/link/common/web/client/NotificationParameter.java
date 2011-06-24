package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class NotificationParameter implements Serializable {
    private static final long serialVersionUID = -4508569758042493930L;

    public enum Type {
        BOOLEAN, DOUBLE, INTEGER, LONG, STRING;

    }

    private Type type;
    private Boolean vBoolean = null;
    private Double vDouble = null;
    private Integer vInteger = null;
    private Long vLong = null;
    private String vString = null;
    private String name;

    public NotificationParameter() {

    }

    private NotificationParameter(String name, Type type) {
        if (name == null) {
            throw new IllegalArgumentException("Name cannot be null.");
        }
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public boolean getBoolValue() throws InvalidTypeException {
        if (type != Type.BOOLEAN) {
            throw new InvalidTypeException("This object is of type: " + type);
        }
        return vBoolean;
    }

    public double getDoubleValue() throws InvalidTypeException {
        if (type != Type.DOUBLE) {
            throw new InvalidTypeException("This object is of type: " + type);
        }
        return vDouble;
    }

    public int getIntValue() throws InvalidTypeException {
        if (type != Type.INTEGER) {
            throw new InvalidTypeException("This object is of type: " + type);
        }
        return vInteger;
    }

    public long getLongValue() throws InvalidTypeException {
        if (type != Type.LONG) {
            throw new InvalidTypeException("This object is of type: " + type);
        }
        return vLong;
    }

    public String getStringValue() throws InvalidTypeException {
        if (type != Type.STRING) {
            throw new InvalidTypeException("This object is of type: " + type);
        }
        return vString;
    }

    @Override
    public String toString() {
        switch (type) {
        case BOOLEAN:
            return vBoolean.toString();
        case DOUBLE:
            return vDouble.toString();
        case INTEGER:
            return vInteger.toString();
        case LONG:
            return vLong.toString();
        case STRING:
            return vString;
        }
        throw new IllegalStateException("Unknown type: " + type);
    }

    public static class InvalidTypeException extends RuntimeException {
        private static final long serialVersionUID = -5764337715203494630L;

        public InvalidTypeException(String message) {
            super(message);
        }

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
