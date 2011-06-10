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
}
