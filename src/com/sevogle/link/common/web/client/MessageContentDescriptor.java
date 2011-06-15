package com.sevogle.link.common.web.client;

import java.io.Serializable;

import com.sevogle.link.common.web.client.Message.ContentDisposition;

public class MessageContentDescriptor implements Serializable {
    private static final long serialVersionUID = -959748997080357708L;
    private String linkContentId;
    private String contentID;
    private String contentType;
    private ContentDisposition disposition;
    private long sizeBytes;

    public String getLinkContentId() {
        return linkContentId;
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

    public ContentDisposition getDisposition() {
        return disposition;
    }

    public void setDisposition(ContentDisposition disposition) {
        this.disposition = disposition;
    }

    public long getSizeBytes() {
        return sizeBytes;
    }

    public void setSizeBytes(long sizeBytes) {
        this.sizeBytes = sizeBytes;
    }
}