package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.List;

public class Extension implements Serializable {
    private static final long serialVersionUID = -7108123887499099278L;

    private String _id;
    public static final String ID = "_id";
    private String typeId;
    private String typeName;
    private String name;
    private ExtensionStatus status;
    private String lastError;
    private long lastUpdated;
    private String config;
    private String configUrl;
    private String configReturnUrl;
    private List<Channel> channels;
    private boolean enabled = false;
    private String userId;
    public static final String USERID = "userId";

    public Extension() {

    }

    public Extension(String id, String userId, String typeId, String typeName, String name, ExtensionStatus status,
            String lastError, long lastUpdated, String config, String configUrl, String configReturnUrl, boolean enabled) {
        setId(id);
        setTypeId(typeId);
        setTypeName(typeName);
        setName(name);
        setStatus(status);
        setLastError(lastError);
        setLastUpdated(lastUpdated);
        setConfig(config);
        setConfigUrl(configUrl);
        setConfigReturnUrl(configReturnUrl);
        setEnabled(enabled);
        setUserId(userId);
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        _id = id;
    }

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ExtensionStatus getStatus() {
        return status;
    }

    public void setStatus(ExtensionStatus status) {
        this.status = status;
    }

    public String getLastError() {
        return lastError;
    }

    public void setLastError(String lastError) {
        this.lastError = lastError;
    }

    public long getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(long lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public String getConfig() {
        return config;
    }

    public void setConfig(String config) {
        this.config = config;
    }

    public String getConfigUrl() {
        return configUrl;
    }

    public void setConfigUrl(String configUrl) {
        this.configUrl = configUrl;
    }

    public String getConfigReturnUrl() {
        return configReturnUrl;
    }

    public void setConfigReturnUrl(String configReturnUrl) {
        this.configReturnUrl = configReturnUrl;
    }

    public List<Channel> getChannels() {
        return channels;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

}
