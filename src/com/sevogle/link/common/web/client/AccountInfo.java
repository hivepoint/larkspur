package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class AccountInfo implements Serializable {
    private static final long serialVersionUID = -3262705772517555144L;
    private String _id;
    private UserName name;
    private boolean admin;
    private List<Extension> extensions = new ArrayList<Extension>();

    public AccountInfo() {

    }

    public AccountInfo(String id, UserName name, boolean admin) {
        setId(id);
        setName(name);
        setAdmin(admin);
    }

    public String getId() {
        return _id;
    }

    public void setId(String value) {
        _id = value;
    }

    public void setName(UserName name) {
        this.name = name;
    }

    public UserName getName() {
        return name;
    }

    public List<Extension> getExtensions() {
        return extensions;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean value) {
        admin = value;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((_id == null) ? 0 : _id.hashCode());
        result = prime * result + (admin ? 1231 : 1237);
        result = prime * result + ((extensions == null) ? 0 : extensions.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
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
        AccountInfo other = (AccountInfo) obj;
        if (_id == null) {
            if (other._id != null) {
                return false;
            }
        } else if (!_id.equals(other._id)) {
            return false;
        }
        if (admin != other.admin) {
            return false;
        }
        if (extensions == null) {
            if (other.extensions != null) {
                return false;
            }
        } else if (!extensions.equals(other.extensions)) {
            return false;
        }
        if (name == null) {
            if (other.name != null) {
                return false;
            }
        } else if (!name.equals(other.name)) {
            return false;
        }
        return true;
    }
}
