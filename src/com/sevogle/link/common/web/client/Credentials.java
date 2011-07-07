package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.io.UnsupportedEncodingException;

public class Credentials implements Serializable {
    private static final long serialVersionUID = 806572979865932753L;

    private String userid;
    public static final String USERID = "userid";

    private String base64Password;

    public Credentials() {

    }

    public Credentials(String userid) {
        this.userid = userid;
    }

    public String getUserId() {
        return userid;
    }

    public String getEncodedPassword() {
        return base64Password;
    }

    public String getClearTextPassword() {
        if (base64Password == null) {
            return null;
        }
        try {
            return new String(Base64.decode(base64Password), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

    public void setUserId(String userid) {
        this.userid = userid;
    }

    public void setClearTextPassword(String clearTextPassword) {
        try {
            base64Password = Base64.encode(clearTextPassword.getBytes("UTF-8"));
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

    public void setEncodedPassword(String encodedPassword) {
        base64Password = encodedPassword;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((base64Password == null) ? 0 : base64Password.hashCode());
        result = prime * result + ((userid == null) ? 0 : userid.hashCode());
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
        Credentials other = (Credentials) obj;
        if (base64Password == null) {
            if (other.base64Password != null) {
                return false;
            }
        } else if (!base64Password.equals(other.base64Password)) {
            return false;
        }
        if (userid == null) {
            if (other.userid != null) {
                return false;
            }
        } else if (!userid.equals(other.userid)) {
            return false;
        }
        return true;
    }

}
