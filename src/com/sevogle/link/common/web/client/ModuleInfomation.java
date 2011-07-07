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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((state == null) ? 0 : state.hashCode());
        result = prime * result + versionDot;
        result = prime * result + versionMajor;
        result = prime * result + versionMinor;
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
        ModuleInfomation other = (ModuleInfomation) obj;
        if (id == null) {
            if (other.id != null) {
                return false;
            }
        } else if (!id.equals(other.id)) {
            return false;
        }
        if (name == null) {
            if (other.name != null) {
                return false;
            }
        } else if (!name.equals(other.name)) {
            return false;
        }
        if (state == null) {
            if (other.state != null) {
                return false;
            }
        } else if (!state.equals(other.state)) {
            return false;
        }
        if (versionDot != other.versionDot) {
            return false;
        }
        if (versionMajor != other.versionMajor) {
            return false;
        }
        if (versionMinor != other.versionMinor) {
            return false;
        }
        return true;
    }
}
