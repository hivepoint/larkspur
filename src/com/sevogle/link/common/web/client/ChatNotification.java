package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.sevogle.link.common.web.client.NotificationParameter.NotificationParameterName;

public class ChatNotification implements Serializable {
    private static final long serialVersionUID = 2622775668112024634L;

    public enum ChatNotificationType {
        MOVE_CHAT_TO_FEED;
    }

    public enum ChatMovedToFeedParams implements NotificationParameterName {
        OLD_FEED_ID("oldFeedId"), NEW_FEED_ID("newFeedId");

        private String paramName;

        private ChatMovedToFeedParams(String paramName) {
            this.paramName = paramName;
        }

        @Override
        public String getParamName() {
            return paramName;
        }
    }

    private ChatNotificationType type;
    private List<NotificationParameter> parameters = new ArrayList<NotificationParameter>();

    public ChatNotification() {
    }

    public ChatNotification(ChatNotificationType type) {
        this.type = type;
    }

    public ChatNotification(ChatNotificationType type, NotificationParameter... parameter) {
        this.type = type;
        if (parameter != null) {
            for (NotificationParameter p : parameter) {
                parameters.add(p);
            }
        }
    }

    public ChatNotificationType getType() {
        return type;
    }

    public void setType(ChatNotificationType type) {
        this.type = type;
    }

    public List<NotificationParameter> getParameters() {
        return parameters;
    }

    public List<NotificationParameter> getParameters(NotificationParameterName name) {
        List<NotificationParameter> result = new ArrayList<NotificationParameter>();
        for (NotificationParameter p : parameters) {
            if (p.getName().equals(name.getParamName())) {
                result.add(p);
            }
        }
        return result;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((parameters == null) ? 0 : parameters.hashCode());
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
        ChatNotification other = (ChatNotification) obj;
        if (parameters == null) {
            if (other.parameters != null) {
                return false;
            }
        } else if (!parameters.equals(other.parameters)) {
            return false;
        }
        if (type != other.type) {
            return false;
        }
        return true;
    }

}
