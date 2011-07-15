package com.sevogle.link.common.web.client;

public class EventParameter extends VariantParameter {
    private static final long serialVersionUID = -8596291866322770444L;

    public interface EventParameterName extends ParamName {
    }

    public EventParameter() {
    }

    private EventParameter(EventParameterName name, Type type) {
        super(name, type);
    }

    public static EventParameter createParameter(EventParameterName name, boolean valueBool) {
        EventParameter dp = new EventParameter(name, Type.BOOLEAN);
        dp.vBoolean = valueBool;
        return dp;
    }

    public static EventParameter createParameter(EventParameterName name, double valueDouble) {
        EventParameter dp = new EventParameter(name, Type.DOUBLE);
        dp.vDouble = valueDouble;
        return dp;
    }

    public static EventParameter createParameter(EventParameterName name, int valueInt) {
        EventParameter dp = new EventParameter(name, Type.INTEGER);
        dp.vInteger = valueInt;
        return dp;
    }

    public static EventParameter createParameter(EventParameterName name, long valueLong) {
        EventParameter dp = new EventParameter(name, Type.LONG);
        dp.vLong = valueLong;
        return dp;
    }

    public static EventParameter createParameter(EventParameterName name, String valueString) {
        if (valueString == null) {
            throw new IllegalArgumentException("Value cannot be null");
        }
        EventParameter dp = new EventParameter(name, Type.STRING);
        dp.vString = valueString;
        return dp;
    }

    public enum ExtensionEventParameters implements EventParameterName {
        EXTENSION_ID("extensionId");
        private final String paramName;

        private ExtensionEventParameters(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    public enum FeedEventParameters implements EventParameterName {
        FEED_ID("feedId");
        private final String paramName;

        private FeedEventParameters(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    public enum MessageFeedEventParameters implements EventParameterName {
        FEED_ID("feedId"), MESSAGE_ID("messageId");
        private final String paramName;

        private MessageFeedEventParameters(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    public enum ConversationFeedEventParameters implements EventParameterName {
        FEED_ID("feedId"), CONV_ID("conversationId");
        private final String paramName;

        private ConversationFeedEventParameters(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    public enum MessageConversationEventParameters implements EventParameterName {
        MESSAGE_ID("messageId"), CONV_ID("conversationId");
        private final String paramName;

        private MessageConversationEventParameters(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    public enum MessageUpdatedParameters implements EventParameterName {
        SEEN("seen"), FROM("from"), PARENT("parent"), PROTOCOL_SPECIFIC_ID("protocolSpecificId");
        private final String paramName;

        private MessageUpdatedParameters(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }
}
