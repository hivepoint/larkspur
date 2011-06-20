package com.sevogle.link.common.web.client;

import java.util.ArrayList;
import java.util.List;

public class Message extends MessageDB {
    private static final long serialVersionUID = 639004942928196861L;

    private List<String> children = new ArrayList<String>();

    public Message() {
    }

    public Message(String _id, String userId, String channelId, String protocolSpecificId, MessageSource messageSource,
            long sent, long received, String subjectNormalized, String subjectRaw, RelatedMessageDescriptor parent,
            AddressDescriptor from, AddressDescriptor replyTo) {
        super(_id, userId, MessageState.DRAFT, channelId, protocolSpecificId, messageSource, sent, received,
                subjectNormalized, subjectRaw, parent, from, replyTo);
    }

    public List<String> getChildren() {
        return children;
    }

}
