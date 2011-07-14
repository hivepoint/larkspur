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
        messageId = linkMessageId;
    }

    public String getProtocolSpecificId() {
        return protocolSpecificId;
    }

    public void setProtocolSpecificId(String protocolSpecificId) {
        this.protocolSpecificId = protocolSpecificId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((messageId == null) ? 0 : messageId.hashCode());
        result = prime * result + ((protocolSpecificId == null) ? 0 : protocolSpecificId.hashCode());
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
        RelatedMessageDescriptor other = (RelatedMessageDescriptor) obj;
        if (messageId == null) {
            if (other.messageId != null) {
                return false;
            }
        } else if (!messageId.equals(other.messageId)) {
            return false;
        }
        if (protocolSpecificId == null) {
            if (other.protocolSpecificId != null) {
                return false;
            }
        } else if (!protocolSpecificId.equals(other.protocolSpecificId)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "RelatedMessageDescriptor [" + (messageId != null ? "messageId=" + messageId + ", " : "")
                + (protocolSpecificId != null ? "protocolSpecificId=" + protocolSpecificId : "") + "]";
    }

}
