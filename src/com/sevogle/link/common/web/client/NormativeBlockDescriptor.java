package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class NormativeBlockDescriptor implements Serializable {
    private static final long serialVersionUID = 1427773323283986046L;
    private String id;
    private long sizeBytes;
    private MessageBockType type;

    public NormativeBlockDescriptor() {

    }

    public NormativeBlockDescriptor(String id, long sizeBytes, MessageBockType type) {
        this.id = id;
        this.sizeBytes = sizeBytes;
        this.type = type;
    }

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

    @Override
    public String toString() {
        return "NormativeBlockDescriptor: " + id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + (int) (sizeBytes ^ (sizeBytes >>> 32));
        result = prime * result + ((type == null) ? 0 : type.hashCode());
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
        NormativeBlockDescriptor other = (NormativeBlockDescriptor) obj;
        if (id == null) {
            if (other.id != null) {
                return false;
            }
        } else if (!id.equals(other.id)) {
            return false;
        }
        if (sizeBytes != other.sizeBytes) {
            return false;
        }
        if (type != other.type) {
            return false;
        }
        return true;
    }

}