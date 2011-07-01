package com.sevogle.link.common.web.client;

public class UserSessionInfo extends SessionInfo {
    private static final long serialVersionUID = 1113551276001860924L;
    private AccountInfo accountInfo = new AccountInfo();

    public UserSessionInfo() {
        super();
    }

    public UserSessionInfo(String session, boolean signedIn, long timestamp, String lastError, AccountInfo accountInfo) {
        super(session, signedIn, timestamp, lastError);
        setAccountInfo(accountInfo);
    }

    @Override
    public String toString() {
        return "SessionInfo [_id=" + _id + ", signedIn=" + signedIn + ", timestamp=" + timestamp + ", lastError="
                + lastError + ", accountInfo=" + accountInfo + "]";
    }

    public void setAccountInfo(AccountInfo accountInfo) {
        this.accountInfo = accountInfo;
    }

    public AccountInfo getAccountInfo() {
        return accountInfo;
    }

}
