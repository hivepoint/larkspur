package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class ModuleInfomation implements Serializable {
    private static final long serialVersionUID = 6913592724123084882L;

    private int versionMajor;
    private int versionMinor;
    private int versionDot;
    private String id;
    private String name;
    private String state;

    public ModuleInfomation() {
    }

    public ModuleInfomation(int versionMajor, int versionMinor, int versionDot, String id, String name, String state) {
        super();
        this.versionMajor = versionMajor;
        this.versionMinor = versionMinor;
        this.versionDot = versionDot;
        this.id = id;
        this.name = name;
        this.state = state;
    }

    public int getVersionMajor() {
        return versionMajor;
    }

    public void setVersionMajor(int versionMajor) {
        this.versionMajor = versionMajor;
    }

    public int getVersionMinor() {
        return versionMinor;
    }

    public void setVersionMinor(int versionMinor) {
        this.versionMinor = versionMinor;
    }

    public int getVersionDot() {
        return versionDot;
    }

    public void setVersionDot(int versionDot) {
        this.versionDot = versionDot;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
