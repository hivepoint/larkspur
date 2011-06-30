package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class MessageNotification implements Serializable {
    private static final long serialVersionUID = -768530870508302229L;

    public enum MessageNotificationType {
        PROCESSING_COMPLETE, READY_FOR_PROCESSING, SEEN_UPDATED, PARENT_ID_UPDATED, FROM_UPDATED;
    }

    public static final class ParentIdUpdatedParams {
        public static final String NEW_PARENT_ID_STRING = "newParentIdString";
    }

    public static final class SeenUpdatedParams {
        public static final String NEW_SEEN_VALUE_BOOLEAN = "newSeenValueBoolean";
    }

    public static final class FromAddressUpdatedParams {
        public static final String PERSONAL_NAME_STRING = "newFromPersonalName";
        public static final String CONTACT_URI_STRING = "newContactURI";
        public static final String IS_ME_BOOLEAN = "newIsMeFlag";
    }

    private MessageNotificationType type;
    private NotificationParameter[] parameters;

    public MessageNotification() {

    }

    public MessageNotification(MessageNotificationType type) {
        this.type = type;
    }

    public MessageNotification(MessageNotificationType type, NotificationParameter... parameter) {
        this.type = type;
        parameters = parameter;
    }

    public MessageNotificationType getType() {
        return type;
    }

    public NotificationParameter[] getParameters() {
        return parameters;
    }
}
