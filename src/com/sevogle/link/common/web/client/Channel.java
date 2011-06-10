package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.List;

public class Channel implements Serializable {
    private static final long serialVersionUID = 6468974880246528492L;

    private String typeId;
    private String typeName;
    private String userName;
    private String address;
    private String status;
    private String lastError;
    private String config;
    private List<Capability> capabilities;

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLastError() {
        return lastError;
    }

    public void setLastError(String lastError) {
        this.lastError = lastError;
    }

    public String getConfig() {
        return config;
    }

    public void setConfig(String config) {
        this.config = config;
    }

    public List<Capability> getCapabilities() {
        return capabilities;
    }

}
