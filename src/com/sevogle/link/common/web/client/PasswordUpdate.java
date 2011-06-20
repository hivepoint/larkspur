package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class PasswordUpdate implements Serializable {
    private static final long serialVersionUID = -9213894646399963412L;
    private String oldPassword;
    private String newPassword;

    public PasswordUpdate() {

    }

    public PasswordUpdate(String oldPassword, String newPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

}
