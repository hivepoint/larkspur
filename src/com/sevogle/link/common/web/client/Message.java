package com.sevogle.link.common.web.client;

import java.util.ArrayList;
import java.util.List;

public class Message extends MessageDB {
    private static final long serialVersionUID = 639004942928196861L;

    private List<String> children = new ArrayList<String>();
    private List<String> conversations = new ArrayList<String>();

    public Message() {
    }

    public Message(String _id, String userId, String channelId, String protocolSpecificId, MessageSource messageSource,
            long sent, long received, String subjectNormalized, String subjectRaw, RelatedMessageDescriptor parent,
            AddressDescriptor from, AddressDescriptor replyTo, String preamble, boolean seen) {
        super(_id, userId, MessageState.DRAFT, channelId, protocolSpecificId, messageSource, sent, received,
                subjectNormalized, subjectRaw, parent, from, replyTo, preamble, seen);
    }

    public List<String> getChildren() {
        return children;
    }

    public List<String> getConversations() {
        return conversations;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((children == null) ? 0 : children.hashCode());
        result = prime * result + ((conversations == null) ? 0 : conversations.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!super.equals(obj)) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Message other = (Message) obj;
        if (children == null) {
            if (other.children != null) {
                return false;
            }
        } else if (!children.equals(other.children)) {
            return false;
        }
        if (conversations == null) {
            if (other.conversations != null) {
                return false;
            }
        } else if (!conversations.equals(other.conversations)) {
            return false;
        }
        return true;
    }

}
