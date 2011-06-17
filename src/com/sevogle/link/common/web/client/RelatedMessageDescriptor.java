package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class RelatedMessageDescriptor implements Serializable {
    private static final long serialVersionUID = -4348037062142063351L;
    private String linkMessageId;
    private String protocolSpecificId;

    public RelatedMessageDescriptor() {
    }

    public RelatedMessageDescriptor(String linkMessageId, String protocolSpecificId) {
        this.linkMessageId = linkMessageId;
        this.protocolSpecificId = protocolSpecificId;
    }

    public String getLinkMessageId() {
        return linkMessageId;
    }

    public void setLinkMessageId(String linkMessageId) {
        this.linkMessageId = linkMessageId;
    }

    public String getProtocolSpecificId() {
        return protocolSpecificId;
    }

    public void setProtocolSpecificId(String protocolSpecificId) {
        this.protocolSpecificId = protocolSpecificId;
    }
}
