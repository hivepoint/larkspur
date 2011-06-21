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
}