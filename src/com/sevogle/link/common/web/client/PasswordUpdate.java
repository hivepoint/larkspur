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
        //TODO: kduffie: Are these clear text or base64?
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((newPassword == null) ? 0 : newPassword.hashCode());
        result = prime * result + ((oldPassword == null) ? 0 : oldPassword.hashCode());
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
        PasswordUpdate other = (PasswordUpdate) obj;
        if (newPassword == null) {
            if (other.newPassword != null) {
                return false;
            }
        } else if (!newPassword.equals(other.newPassword)) {
            return false;
        }
        if (oldPassword == null) {
            if (other.oldPassword != null) {
                return false;
            }
        } else if (!oldPassword.equals(other.oldPassword)) {
            return false;
        }
        return true;
    }

}
