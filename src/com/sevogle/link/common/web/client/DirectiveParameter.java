package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class DirectiveParameter implements Serializable {
    private static final long serialVersionUID = -4508569758042493930L;

    public enum Type {
        BOOLEAN(Boolean.class), DOUBLE(Double.class), INTEGER(Integer.class), LONG(Long.class), STRING(String.class);

        private final Class<?> clazz;

        private Type(Class<?> clazz) {
            this.clazz = clazz;
        }

    }

    private Type type;
    private Boolean vBoolean = null;
    private Double vDouble = null;
    private Integer vInteger = null;
    private Long vLong = null;
    private String vString = null;
    private String name;

    public DirectiveParameter() {

    }

    private DirectiveParameter(String name, Type type) {
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

    public static DirectiveParameter createParameter(String name, boolean valueBool) {
        DirectiveParameter dp = new DirectiveParameter(name, Type.BOOLEAN);
        dp.vBoolean = valueBool;
        return dp;
    }

    public static DirectiveParameter createParameter(String name, double valueDouble) {
        DirectiveParameter dp = new DirectiveParameter(name, Type.DOUBLE);
        dp.vDouble = valueDouble;
        return dp;
    }

    public static DirectiveParameter createParameter(String name, int valueInt) {
        DirectiveParameter dp = new DirectiveParameter(name, Type.INTEGER);
        dp.vInteger = valueInt;
        return dp;
    }

    public static DirectiveParameter createParameter(String name, long valueLong) {
        DirectiveParameter dp = new DirectiveParameter(name, Type.LONG);
        dp.vLong = valueLong;
        return dp;
    }

    public static DirectiveParameter createParameter(String name, String valueString) {
        if (valueString == null) {
            throw new IllegalArgumentException("Value cannot be null");
        }
        DirectiveParameter dp = new DirectiveParameter(name, Type.STRING);
        dp.vString = valueString;
        return dp;
    }
}
