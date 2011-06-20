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
    public static final String CHANNEL_ID = "channels.typeId";
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((_id == null) ? 0 : _id.hashCode());
        result = prime * result + ((channels == null) ? 0 : channels.hashCode());
        result = prime * result + ((config == null) ? 0 : config.hashCode());
        result = prime * result + ((configReturnUrl == null) ? 0 : configReturnUrl.hashCode());
        result = prime * result + ((configUrl == null) ? 0 : configUrl.hashCode());
        result = prime * result + (enabled ? 1231 : 1237);
        result = prime * result + ((lastError == null) ? 0 : lastError.hashCode());
        result = prime * result + (int) (lastUpdated ^ (lastUpdated >>> 32));
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        result = prime * result + ((typeId == null) ? 0 : typeId.hashCode());
        result = prime * result + ((typeName == null) ? 0 : typeName.hashCode());
        result = prime * result + ((userId == null) ? 0 : userId.hashCode());
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
        Extension other = (Extension) obj;
        if (_id == null) {
            if (other._id != null) {
                return false;
            }
        } else if (!_id.equals(other._id)) {
            return false;
        }
        if (channels == null) {
            if (other.channels != null) {
                return false;
            }
        } else if (!channels.equals(other.channels)) {
            return false;
        }
        if (config == null) {
            if (other.config != null) {
                return false;
            }
        } else if (!config.equals(other.config)) {
            return false;
        }
        if (configReturnUrl == null) {
            if (other.configReturnUrl != null) {
                return false;
            }
        } else if (!configReturnUrl.equals(other.configReturnUrl)) {
            return false;
        }
        if (configUrl == null) {
            if (other.configUrl != null) {
                return false;
            }
        } else if (!configUrl.equals(other.configUrl)) {
            return false;
        }
        if (enabled != other.enabled) {
            return false;
        }
        if (lastError == null) {
            if (other.lastError != null) {
                return false;
            }
        } else if (!lastError.equals(other.lastError)) {
            return false;
        }
        if (lastUpdated != other.lastUpdated) {
            return false;
        }
        if (name == null) {
            if (other.name != null) {
                return false;
            }
        } else if (!name.equals(other.name)) {
            return false;
        }
        if (status != other.status) {
            return false;
        }
        if (typeId == null) {
            if (other.typeId != null) {
                return false;
            }
        } else if (!typeId.equals(other.typeId)) {
            return false;
        }
        if (typeName == null) {
            if (other.typeName != null) {
                return false;
            }
        } else if (!typeName.equals(other.typeName)) {
            return false;
        }
        if (userId == null) {
            if (other.userId != null) {
                return false;
            }
        } else if (!userId.equals(other.userId)) {
            return false;
        }
        return true;
    }

}
