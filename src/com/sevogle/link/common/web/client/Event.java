package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class Event implements Serializable {
    private static final long serialVersionUID = 8896281957596120602L;

    public enum EventType {
        OBJECT_ADDED, OBJECT_UPDATED, OBJECT_REMOVED, MESSAGE_APPENDED_TO_FEED, MESSAGE_INSERTED_INTO_FEED, MESSAGES_REMOVED_FROM_FEED, CONVERSATION_INSERTED_INTO_FEED, CONVERSATION_MOVED_IN_FEED, CONVERSATION_REMOVED_FROM_FEED, MESSAGE_APPENDED_TO_CONVERSATION, MESSAGE_INSERTED_INTO_CONVERSATION, MESSAGE_REMOVED_FROM_CONVERSATION
    }

    public enum ObjectType {
        NONE, ACCOUNT, EXTENSION, FEED, CONVERSATION, MESSAGE, SESSION
    }

    private String _id;
    private long timestamp;
    private EventType eventType;
    private ObjectType objectType;
    private AccountInfo account;
    private Extension extension;
    private Feed feed;
    private Conversation conversation;
    private Message message;
    private SessionInfo session;
    private Channel channel;

    public Event() {

    }

    public String getId() {
        return _id;
    }

    public void setId(String _id) {
        this._id = _id;
    }

    public ObjectType getObjectType() {
        return objectType;
    }

    public void setObjectType(ObjectType objectType) {
        this.objectType = objectType;
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

    public SessionInfo getSession() {
        return session;
    }

    public void setSession(SessionInfo session) {
        this.session = session;
    }

    public void setChannel(Channel channel) {
        this.channel = channel;
    }

    public Channel getChannel() {
        return channel;
    }
}
