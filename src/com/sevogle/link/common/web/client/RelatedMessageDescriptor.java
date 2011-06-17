package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class RelatedMessageDescriptor implements Serializable {
    private static final long serialVersionUID = -4348037062142063351L;
    private String messageId;
    private String protocolSpecificId;

    public RelatedMessageDescriptor() {
    }

    public RelatedMessageDescriptor(String messageId, String protocolSpecificId) {
        this.messageId = messageId;
        this.protocolSpecificId = protocolSpecificId;
    }

    public String getLinkMessageId() {
        return messageId;
    }

    public void setLinkMessageId(String linkMessageId) {
        this.messageId = linkMessageId;
    }

    public String getProtocolSpecificId() {
        return protocolSpecificId;
    }

    public void setProtocolSpecificId(String protocolSpecificId) {
        this.protocolSpecificId = protocolSpecificId;
    }
}
