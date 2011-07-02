package com.sevogle.link.common.web.client;

public class EventParameter extends VariantParameter {
    private static final long serialVersionUID = -8596291866322770444L;

    public EventParameter() {
    }

    private EventParameter(String name, Type type) {
        super(name, type);
    }

    public static EventParameter createParameter(String name, boolean valueBool) {
        EventParameter dp = new EventParameter(name, Type.BOOLEAN);
        dp.vBoolean = valueBool;
        return dp;
    }

    public static EventParameter createParameter(String name, double valueDouble) {
        EventParameter dp = new EventParameter(name, Type.DOUBLE);
        dp.vDouble = valueDouble;
        return dp;
    }

    public static EventParameter createParameter(String name, int valueInt) {
        EventParameter dp = new EventParameter(name, Type.INTEGER);
        dp.vInteger = valueInt;
        return dp;
    }

    public static EventParameter createParameter(String name, long valueLong) {
        EventParameter dp = new EventParameter(name, Type.LONG);
        dp.vLong = valueLong;
        return dp;
    }

    public static EventParameter createParameter(String name, String valueString) {
        if (valueString == null) {
            throw new IllegalArgumentException("Value cannot be null");
        }
        EventParameter dp = new EventParameter(name, Type.STRING);
        dp.vString = valueString;
        return dp;
    }

    public final static class ExtensionEventParameters {
        public final static String EXTENSION_ID = "extensionId";
    }

    public final static class MessageEventParameters {

    }

    public final static class ConversationEventParameters {

    }
}
