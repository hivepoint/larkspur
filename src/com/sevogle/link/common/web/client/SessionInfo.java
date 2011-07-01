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

}
