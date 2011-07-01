package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Event implements Serializable {
    private static final long serialVersionUID = 8896281957596120602L;

    private long _id;
    public static final String ID = "_id";
    private long timestamp;
    public static final String TIMESTAMP = "timestamp";

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

    public Event(long id, long timestamp, EventType eventType) {
        super();
        _id = id;
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
}
