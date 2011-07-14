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

    protected VariantParameter(VariantParameter.ParamName name, Type type) {
        if (name == null) {
            throw new IllegalArgumentException("Name cannot be null.");
        }
        this.name = name.getParamName();
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
            return name + ":" + vBoolean.toString();
        case DOUBLE:
            return name + ":" + vDouble.toString();
        case INTEGER:
            return name + ":" + vInteger.toString();
        case LONG:
            return name + ":" + vLong.toString();
        case STRING:
            return name + ":" + vString;
        }
        throw new IllegalStateException("Unknown type: " + type);
    }

    public static class InvalidTypeException extends RuntimeException {
        private static final long serialVersionUID = -5764337715203494630L;

        public InvalidTypeException(String message) {
            super(message);
        }
    }

    public interface ParamName {
        String getParamName();
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((type == null) ? 0 : type.hashCode());
        result = prime * result + ((vBoolean == null) ? 0 : vBoolean.hashCode());
        result = prime * result + ((vDouble == null) ? 0 : vDouble.hashCode());
        result = prime * result + ((vInteger == null) ? 0 : vInteger.hashCode());
        result = prime * result + ((vLong == null) ? 0 : vLong.hashCode());
        result = prime * result + ((vString == null) ? 0 : vString.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        VariantParameter other = (VariantParameter) obj;
        if (name == null) {
            if (other.name != null) {
                return false;
            }
        } else if (!name.equals(other.name)) {
            return false;
        }
        if (type != other.type) {
            return false;
        }
        if (vBoolean == null) {
            if (other.vBoolean != null) {
                return false;
            }
        } else if (!vBoolean.equals(other.vBoolean)) {
            return false;
        }
        if (vDouble == null) {
            if (other.vDouble != null) {
                return false;
            }
        } else if (!vDouble.equals(other.vDouble)) {
            return false;
        }
        if (vInteger == null) {
            if (other.vInteger != null) {
                return false;
            }
        } else if (!vInteger.equals(other.vInteger)) {
            return false;
        }
        if (vLong == null) {
            if (other.vLong != null) {
                return false;
            }
        } else if (!vLong.equals(other.vLong)) {
            return false;
        }
        if (vString == null) {
            if (other.vString != null) {
                return false;
            }
        } else if (!vString.equals(other.vString)) {
            return false;
        }
        return true;
    }

}
