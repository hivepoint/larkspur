package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.sevogle.link.common.web.client.EventParameter.EventParameterName;

public class Event implements Serializable {
    private static final long serialVersionUID = 8896281957596120602L;

    private long _id;
    public static final String ID = "_id";
    private long timestamp;
    public static final String TIMESTAMP = "timestamp";

    private long generationId;
    private EventType eventType;
    private List<EventParameter> parameters = new ArrayList<EventParameter>();

    private AccountInfo account;
    private Extension extension;
    private Feed feed;
    private Conversation conversation;
    private Message message;
    private UserSessionInfo session;
    private Channel channel;

    public Event() {
    }

    public Event(long timestamp, EventType eventType) {
        super();
        this.timestamp = timestamp;
        this.eventType = eventType;
    }

    public long getId() {
        return _id;
    }

    public void setId(long id) {
        _id = id;
    }

    public EventType getEventType() {
        return eventType;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public AccountInfo getAccount() {
        return account;
    }

    public void setAccount(AccountInfo accountInfo) {
        account = accountInfo;
    }

    public Extension getExtension() {
        return extension;
    }

    public void setExtension(Extension extension) {
        this.extension = extension;
    }

    public Feed getFeed() {
        return feed;
    }

    public void setFeed(Feed feed) {
        this.feed = feed;
    }

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }

    public UserSessionInfo getSession() {
        return session;
    }

    public void setSession(UserSessionInfo session) {
        this.session = session;
    }

    public void setChannel(Channel channel) {
        this.channel = channel;
    }

    public Channel getChannel() {
        return channel;
    }

    public List<EventParameter> getParameters() {
        return parameters;
    }

    public EventParameter getParameterByName(EventParameterName name) {
        String paramName = name.getParamName();
        for (EventParameter param : parameters) {
            if (param.getName().equals(paramName)) {
                return param;
            }
        }
        return null;
    }

    public long getGenerationId() {
        return generationId;
    }

    public void setGenerationId(long generationId) {
        this.generationId = generationId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (_id ^ (_id >>> 32));
        result = prime * result + ((account == null) ? 0 : account.hashCode());
        result = prime * result + ((channel == null) ? 0 : channel.hashCode());
        result = prime * result + ((conversation == null) ? 0 : conversation.hashCode());
        result = prime * result + ((eventType == null) ? 0 : eventType.hashCode());
        result = prime * result + ((extension == null) ? 0 : extension.hashCode());
        result = prime * result + ((feed == null) ? 0 : feed.hashCode());
        result = prime * result + (int) (generationId ^ (generationId >>> 32));
        result = prime * result + ((message == null) ? 0 : message.hashCode());
        result = prime * result + ((parameters == null) ? 0 : parameters.hashCode());
        result = prime * result + ((session == null) ? 0 : session.hashCode());
        result = prime * result + (int) (timestamp ^ (timestamp >>> 32));
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
        Event other = (Event) obj;
        if (_id != other._id) {
            return false;
        }
        if (account == null) {
            if (other.account != null) {
                return false;
            }
        } else if (!account.equals(other.account)) {
            return false;
        }
        if (channel == null) {
            if (other.channel != null) {
                return false;
            }
        } else if (!channel.equals(other.channel)) {
            return false;
        }
        if (conversation == null) {
            if (other.conversation != null) {
                return false;
            }
        } else if (!conversation.equals(other.conversation)) {
            return false;
        }
        if (eventType != other.eventType) {
            return false;
        }
        if (extension == null) {
            if (other.extension != null) {
                return false;
            }
        } else if (!extension.equals(other.extension)) {
            return false;
        }
        if (feed == null) {
            if (other.feed != null) {
                return false;
            }
        } else if (!feed.equals(other.feed)) {
            return false;
        }
        if (generationId != other.generationId) {
            return false;
        }
        if (message == null) {
            if (other.message != null) {
                return false;
            }
        } else if (!message.equals(other.message)) {
            return false;
        }
        if (parameters == null) {
            if (other.parameters != null) {
                return false;
            }
        } else if (!parameters.equals(other.parameters)) {
            return false;
        }
        if (session == null) {
            if (other.session != null) {
                return false;
            }
        } else if (!session.equals(other.session)) {
            return false;
        }
        if (timestamp != other.timestamp) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Event [timestamp=" + timestamp + ", " + (eventType != null ? "eventType=" + eventType + ", " : "")
                + (parameters != null ? "parameters=" + parameters + ", " : "") + "_id=" + _id + ", generationId="
                + generationId + ", " + (account != null ? "account=" + account + ", " : "")
                + (extension != null ? "extension=" + extension + ", " : "") + (feed != null ? "feed=" + feed + ", " : "")
                + (conversation != null ? "conversation=" + conversation + ", " : "")
                + (message != null ? "message=" + message + ", " : "")
                + (session != null ? "session=" + session + ", " : "") + (channel != null ? "channel=" + channel : "") + "]";
    }
}
