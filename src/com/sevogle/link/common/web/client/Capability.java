package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class Capability implements Serializable {
    private static final long serialVersionUID = -322423013841036249L;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
