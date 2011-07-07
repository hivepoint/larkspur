package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class Feed implements Serializable {
    private static final long serialVersionUID = -6542447577539679695L;

    private String _id;
    public static final String ID = "_id";
    private String userId;
    private String name;
    private FeedStyle style;
    private boolean newChatDefault;
    private int feedIndex;

    public boolean isNewChatDefault() {
        return newChatDefault;
    }

    public void setNewChatDefault(boolean newChatDefault) {
        this.newChatDefault = newChatDefault;
    }

    public Feed() {
    }

    public Feed(String _id, String userId, String name, FeedStyle style, boolean newChatDefault) {
        super();
        this._id = _id;
        this.userId = userId;
        this.name = name;
        this.style = style;
        this.newChatDefault = newChatDefault;
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

    public int getFeedIndex() {
        return feedIndex;
    }

    public void setFeedIndex(int feedIndex) {
        this.feedIndex = feedIndex;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((_id == null) ? 0 : _id.hashCode());
        result = prime * result + feedIndex;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + (newChatDefault ? 1231 : 1237);
        result = prime * result + ((style == null) ? 0 : style.hashCode());
        result = prime * result + ((userId == null) ? 0 : userId.hashCode());
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
        Feed other = (Feed) obj;
        if (_id == null) {
            if (other._id != null) {
                return false;
            }
        } else if (!_id.equals(other._id)) {
            return false;
        }
        if (feedIndex != other.feedIndex) {
            return false;
        }
        if (name == null) {
            if (other.name != null) {
                return false;
            }
        } else if (!name.equals(other.name)) {
            return false;
        }
        if (newChatDefault != other.newChatDefault) {
            return false;
        }
        if (style != other.style) {
            return false;
        }
        if (userId == null) {
            if (other.userId != null) {
                return false;
            }
        } else if (!userId.equals(other.userId)) {
            return false;
        }
        return true;
    }
}
