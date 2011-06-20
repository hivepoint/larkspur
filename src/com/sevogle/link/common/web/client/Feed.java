package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Feed implements Serializable {
    private static final long serialVersionUID = -6542447577539679695L;

    private String _id;
    public static final String ID = "_id";
    private String userId;
    private String name;
    private FeedStyle style;
    private final List<Message> messages = new ArrayList<Message>();
    private final List<Conversation> conversations = new ArrayList<Conversation>();

    public Feed() {
    }

    public Feed(String _id, String userId, String name, FeedStyle style) {
        super();
        this._id = _id;
        this.userId = userId;
        this.name = name;
        this.style = style;
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        _id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public FeedStyle getStyle() {
        return style;
    }

    public void setStyle(FeedStyle style) {
        this.style = style;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public List<Conversation> getConversations() {
        return conversations;
    }

}
