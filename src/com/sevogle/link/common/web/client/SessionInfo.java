package com.sevogle.link.common.web.client;

import java.io.Serializable;

public abstract class SessionInfo implements Serializable {
    private static final long serialVersionUID = 5877694828407129667L;

    protected String _id;
    public static final String ID = "_id";
    protected boolean signedIn;
    protected long timestamp;
    protected String lastError;

    public SessionInfo() {
    }

    public SessionInfo(String session, boolean signedIn, long timestamp, String lastError) {
        setId(session);
        setSignedIn(signedIn);
        setTimestamp(timestamp);
        setLastError(lastError);
    }

    public boolean isSignedIn() {
        return signedIn;
    }

    public void setSignedIn(boolean signedIn) {
        this.signedIn = signedIn;
    }

    public String getId() {
        return _id;
    }

    public void setId(String _id) {
        this._id = _id;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public void setLastError(String lastError) {
        this.lastError = lastError;
    }

    public String getLastError() {
        return lastError;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((_id == null) ? 0 : _id.hashCode());
        result = prime * result + ((lastError == null) ? 0 : lastError.hashCode());
        result = prime * result + (signedIn ? 1231 : 1237);
        result = prime * result + (int) (timestamp ^ (timestamp >>> 32));
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
        SessionInfo other = (SessionInfo) obj;
        if (_id == null) {
            if (other._id != null) {
                return false;
            }
        } else if (!_id.equals(other._id)) {
            return false;
        }
        if (lastError == null) {
            if (other.lastError != null) {
                return false;
            }
        } else if (!lastError.equals(other.lastError)) {
            return false;
        }
        if (signedIn != other.signedIn) {
            return false;
        }
        if (timestamp != other.timestamp) {
            return false;
        }
        return true;
    }

}
