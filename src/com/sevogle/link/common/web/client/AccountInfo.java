package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class AccountInfo implements Serializable {
    private static final long serialVersionUID = -3262705772517555144L;
    private String _id;
    private UserName name;
    private boolean admin;
    private final List<Extension> extensions = new ArrayList<Extension>();

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
}
