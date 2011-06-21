package com.sevogle.link.common.web.client.gmailext;

import java.io.Serializable;

import com.sevogle.link.common.web.client.Credentials;

/**
 * TODO: abovill: 2011-07-01 this class should go away or somewhere else.
 */
public class GmailCredentials implements Serializable {
    private static final long serialVersionUID = -7383395744013722090L;

    public enum CredentialType {
        OAUTH, CREDENTIAL;
    }

    private CredentialType type = CredentialType.OAUTH;
    private Credentials credentials = null;
    private String emailAddress = null;
    private int port = 0;
    private String server = null;
    private boolean useSSL = true;

    public CredentialType getType() {
        return type;
    }

    public void setType(CredentialType type) {
        this.type = type;
    }

    public Credentials getCredentials() {
        return credentials;
    }

    public void setCredentials(Credentials credentials) {
        this.credentials = credentials;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setServer(String server) {
        this.server = server;
    }

    public String getServer() {
        return server;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public int getPort() {
        return port;
    }

    public void setUseSSL(boolean useSSL) {
        this.useSSL = useSSL;
    }

    public boolean isUseSSL() {
        return useSSL;
    }
}
