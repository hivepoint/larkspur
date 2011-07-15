package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.sevogle.link.common.web.client.NotificationParameter.NotificationParameterName;
import com.sevogle.link.common.web.client.NotificationParameter.UnknownParamNameException;

public class MessageNotification implements Serializable {
    private static final long serialVersionUID = -768530870508302229L;

    public enum MessageNotificationType {
        PROCESSING_COMPLETE, READY_FOR_PROCESSING, MESSAGE_UPDATED, DELIVERY_PROBLEMS;
    }

    public enum DeliveryProblemParams implements NotificationParameterName {

        DELIVERY_PROBLEM_MESSAGE("msgDeliveryProblem");

        String paramName;

        private DeliveryProblemParams(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    public enum MessageUpdatedParam implements NotificationParameterName {
        NEW_PARENT_PROTOCAL_SPECIFIC_ID_STRING("newParentProtocalId"), //
        NEW_PARENT_LINK_ID_STRING("newParentLinkId"), //
        FROM_PERSONAL_NAME_STRING("newFromPersonalName"), //
        FROM_CONTACT_URI_STRING("newContactURI"), //
        FROM_IS_ME_BOOLEAN("newIsMeFlag"), //
        PROTOCAL_SPECIFIC_ID("newProtocolSpecificId"), //
        NEW_SEEN_VALUE_BOOLEAN("newSeenValueBoolean");

        String paramName;

        private MessageUpdatedParam(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }

        public static MessageUpdatedParam parseFromParamName(String paramName) throws UnknownParamNameException {
            for (MessageUpdatedParam param : MessageUpdatedParam.values()) {
                if (param.getParamName().equals(paramName)) {
                    return param;
                }
            }
            throw new UnknownParamNameException(paramName);
        }
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

    public List<NotificationParameter> getParametersByName(String name) {
        ArrayList<NotificationParameter> list = new ArrayList<NotificationParameter>();
        for (NotificationParameter p : parameters) {
            if (p.getName().equals(name)) {
                list.add(p);
            }
        }
        return list;
    }

    public boolean hasParameterByName(String name) {
        for (NotificationParameter p : parameters) {
            if (p.getName().equals(name)) {
                return true;
            }
        }
        return false;
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
