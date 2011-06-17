package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class NormativeBlockDescriptor implements Serializable {
    private static final long serialVersionUID = 1427773323283986046L;
    private String id;
    private long sizeBytes;
    private MessageBockType type;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getSizeBytes() {
        return sizeBytes;
    }

    public void setSizeBytes(long sizeBytes) {
        this.sizeBytes = sizeBytes;
    }

    public MessageBockType getType() {
        return type;
    }

    public void setType(MessageBockType type) {
        this.type = type;
    }

}