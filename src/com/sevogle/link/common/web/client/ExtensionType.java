package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ExtensionType implements Serializable {
    private static final long serialVersionUID = 3496559850043528693L;

    private String _id;
    public static final String ID = "_id";
    private String name;
    private String description;
    private String urlBase;
    private String urlExtension = "extension";
    private String token;
    public static final String TOKEN = "token";
    private final List<Capability> capabilities = new ArrayList<Capability>();

    public ExtensionType() {
    }

    public ExtensionType(String id, String name, String description, String urlBase, String token) {
        _id = id;
        this.name = name;
        this.description = description;
        this.urlBase = urlBase;
        this.token = token;
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        _id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlBase() {
        return urlBase;
    }

    public void setUrlBase(String url) {
        urlBase = url;
    }

    public String getUrlExtension() {
        return urlExtension;
    }

    public void setUrlExtension(String urlExtension) {
        this.urlExtension = urlExtension;
    }

    public List<Capability> getCapabilities() {
        return capabilities;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}