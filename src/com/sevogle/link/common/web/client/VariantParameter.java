package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class VariantParameter implements Serializable {
    private static final long serialVersionUID = 1257344365880141234L;

    public enum Type {
        BOOLEAN, DOUBLE, INTEGER, LONG, STRING;
    }

    protected Type type;
    protected Boolean vBoolean = null;
    protected Double vDouble = null;
    protected Integer vInteger = null;
    protected Long vLong = null;
    protected String vString = null;
    protected String name;

    public VariantParameter() {
    }

    protected VariantParameter(String name, Type type) {
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
}
