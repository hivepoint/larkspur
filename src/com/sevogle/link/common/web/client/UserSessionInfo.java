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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((accountInfo == null) ? 0 : accountInfo.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!super.equals(obj)) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        UserSessionInfo other = (UserSessionInfo) obj;
        if (accountInfo == null) {
            if (other.accountInfo != null) {
                return false;
            }
        } else if (!accountInfo.equals(other.accountInfo)) {
            return false;
        }
        return true;
    }

}
