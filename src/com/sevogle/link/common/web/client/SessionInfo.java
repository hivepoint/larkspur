package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class SessionInfo implements Serializable {
    private static final long serialVersionUID = 1113551276001860924L;

    private String _id;
    public static final String ID = "_id";
    private boolean signedIn;
    private long timestamp;
    private String lastError;
    private AccountInfo accountInfo = new AccountInfo();

    public SessionInfo() {

    }

    public SessionInfo(String session, boolean signedIn, long timestamp, String lastError, AccountInfo accountInfo) {
        setId(session);
        setSignedIn(signedIn);
        setTimestamp(timestamp);
        setLastError(lastError);
        setAccountInfo(accountInfo);
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

    public void setAccountInfo(AccountInfo accountInfo) {
        this.accountInfo = accountInfo;
    }

    public AccountInfo getAccountInfo() {
        return accountInfo;
    }

}
