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

}
