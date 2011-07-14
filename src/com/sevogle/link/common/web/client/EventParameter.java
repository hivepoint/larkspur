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

    public final static class FeedEventParameters {
        public static final String FEED_ID = "feedId";
    }

    public static final class MessageFeedEventParameters {
        public static final String FEED_ID = "feedId";
        public static final String MESSAGE_ID = "messageId";
    }

    public static final class ConversationFeedEventParameters {
        public static final String FEED_ID = "feedId";
        public static final String CONV_ID = "conversationId";
    }

    public final static class MessageConversationEventParameters {
        public static final String MESSAGE_ID = "messageId";
        public static final String CONV_ID = "conversationId";
    }

    public final static class MessageUpdatedParameters {
        public static final String SEEN = "seen";
        public static final String FROM = "from";
        public static final String PARENT = "parent";
    }
}
