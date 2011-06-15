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
    private List<Capability> capabilities = new ArrayList<Capability>();

    public ExtensionType() {
    }

    public ExtensionType(String id, String name, String description, String urlBase) {
        _id = id;
        this.name = name;
        this.description = description;
        this.urlBase = urlBase;
    }

    public String getId() {
        return _id;
    }

    public void set_id(String id) {
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

}
