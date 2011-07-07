package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class MessageContentDescriptor implements Serializable {
    private static final long serialVersionUID = -959748997080357708L;
    private String linkContentId;
    private String contentID;
    private String contentType;
    private MessageContentDisposition disposition;
    private long sizeBytes;

    public MessageContentDescriptor() {

    }

    public String getLinkContentId() {
        return linkContentId;
    }

    public MessageContentDescriptor(String linkContentId, String contentID, String contentType,
            MessageContentDisposition disposition, long sizeBytes) {
        this.linkContentId = linkContentId;
        this.contentID = contentID;
        this.contentType = contentType;
        this.disposition = disposition;
        this.sizeBytes = sizeBytes;
    }

    public void setLinkContentId(String linkContentId) {
        this.linkContentId = linkContentId;
    }

    public String getContentID() {
        return contentID;
    }

    public void setContentID(String contentID) {
        this.contentID = contentID;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public MessageContentDisposition getDisposition() {
        return disposition;
    }

    public void setDisposition(MessageContentDisposition disposition) {
        this.disposition = disposition;
    }

    public long getSizeBytes() {
        return sizeBytes;
    }

    public void setSizeBytes(long sizeBytes) {
        this.sizeBytes = sizeBytes;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((contentID == null) ? 0 : contentID.hashCode());
        result = prime * result + ((contentType == null) ? 0 : contentType.hashCode());
        result = prime * result + ((disposition == null) ? 0 : disposition.hashCode());
        result = prime * result + ((linkContentId == null) ? 0 : linkContentId.hashCode());
        result = prime * result + (int) (sizeBytes ^ (sizeBytes >>> 32));
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
        MessageContentDescriptor other = (MessageContentDescriptor) obj;
        if (contentID == null) {
            if (other.contentID != null) {
                return false;
            }
        } else if (!contentID.equals(other.contentID)) {
            return false;
        }
        if (contentType == null) {
            if (other.contentType != null) {
                return false;
            }
        } else if (!contentType.equals(other.contentType)) {
            return false;
        }
        if (disposition != other.disposition) {
            return false;
        }
        if (linkContentId == null) {
            if (other.linkContentId != null) {
                return false;
            }
        } else if (!linkContentId.equals(other.linkContentId)) {
            return false;
        }
        if (sizeBytes != other.sizeBytes) {
            return false;
        }
        return true;
    }
}