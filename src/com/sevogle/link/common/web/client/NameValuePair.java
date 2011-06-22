package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class NameValuePair implements Serializable {
    private static final long serialVersionUID = 2278503567200942196L;

    private String name;
    private String value;

    public NameValuePair() {

    }

    public NameValuePair(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

}
