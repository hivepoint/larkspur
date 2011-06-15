package com.sevogle.link.common.web.client;

import java.io.Serializable;

import com.sevogle.link.common.web.client.Message.BlockType;

public class NormativeBlockDescriptor implements Serializable {
    private static final long serialVersionUID = 1427773323283986046L;
    private String id;
    private long sizeBytes;
    private BlockType type;

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

    public BlockType getType() {
        return type;
    }

    public void setType(BlockType type) {
        this.type = type;
    }

}