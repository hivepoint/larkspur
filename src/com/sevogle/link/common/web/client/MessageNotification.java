package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.Arrays;

public class MessageNotification implements Serializable {
    private static final long serialVersionUID = -768530870508302229L;

    public enum MessageNotificationType {
        PROCESSING_COMPLETE, READY_FOR_PROCESSING, SEEN_UPDATED, PARENT_ID_UPDATED, FROM_UPDATED, DELIVERY_PROBLEMS;
    }

    public static final class DeliveryProblemParams {

        public static final String DELIVERY_PROBLEM_MESSAGE = "msgDeliveryProblem";

    }

    public static final class ParentIdUpdatedParams {
        public static final String NEW_PARENT_ID_STRING = "newParentIdString";
        public static final String NEW_LINK_PARENT_ID_STRING = "newLinkParentId";
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
    private NotificationParameter[] parameters = new NotificationParameter[0];

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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + Arrays.hashCode(parameters);
        result = prime * result + ((type == null) ? 0 : type.hashCode());
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
        MessageNotification other = (MessageNotification) obj;
        if (!Arrays.equals(parameters, other.parameters)) {
            return false;
        }
        if (type != other.type) {
            return false;
        }
        return true;
    }
}
