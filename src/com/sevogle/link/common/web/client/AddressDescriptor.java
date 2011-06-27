package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class AddressDescriptor implements Serializable {
    private static final long serialVersionUID = 7142344285861383648L;
    private String contactURI;
    private String linkContactId;
    private String personalName;
    //TODO kduffie: 6/15/2011:  Perhaps not the right long-term way of determining whether this represents the current user?
    private boolean me;
    private UserName name;

    public AddressDescriptor() {

    }

    public AddressDescriptor(String contactURI, String linkContactId, String personalName, boolean me) {
        this.contactURI = contactURI;
        this.linkContactId = linkContactId;
        setPersonalName(personalName);
        this.me = me;
    }

    public String getContactURI() {
        return contactURI;
    }

    public void setContactURI(String contactURI) {
        this.contactURI = contactURI;
    }

    public String getLinkContactId() {
        return linkContactId;
    }

    public void setLinkContactId(String linkContactId) {
        this.linkContactId = linkContactId;
    }

    public String getPersonalName() {
        return personalName;
    }

    public void setPersonalName(String personalName) {
        this.personalName = personalName;
    }

    public void setName(UserName name) {
        this.name = name;
    }

    public UserName getName() {
        if (name == null) {
            return new UserName(personalName);
        }
        return name;
    }

    public boolean isMe() {
        return me;
    }

    public void setMe(boolean value) {
        me = value;
    }

    @Override
    public String toString() {
        if (isMe()) {
            return "me";
        } else if (personalName == null || personalName.isEmpty()) {
            return contactURI;
        } else {
            return personalName;
        }
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((contactURI == null) ? 0 : contactURI.hashCode());
        result = prime * result + ((linkContactId == null) ? 0 : linkContactId.hashCode());
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
        AddressDescriptor other = (AddressDescriptor) obj;
        if (contactURI == null) {
            if (other.contactURI != null) {
                return false;
            }
        } else if (!contactURI.equals(other.contactURI)) {
            return false;
        }
        if (linkContactId == null) {
            if (other.linkContactId != null) {
                return false;
            }
        } else if (!linkContactId.equals(other.linkContactId)) {
            return false;
        }
        return true;
    }

}
