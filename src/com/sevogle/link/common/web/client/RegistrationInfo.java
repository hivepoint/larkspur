package com.sevogle.link.common.web.client;

public class RegistrationInfo extends Credentials {
    private static final long serialVersionUID = 3271329388683864997L;
    private String invitationCode;

    public RegistrationInfo() {

    }

    public RegistrationInfo(String userid, String encodedPassword, String invitationCode) {
        super(userid);
        setEncodedPassword(encodedPassword);
        this.invitationCode = invitationCode;
    }

    public String getInvitationCode() {
        return invitationCode;
    }

    public void setInvitationCode(String invitationCode) {
        this.invitationCode = invitationCode;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((invitationCode == null) ? 0 : invitationCode.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!super.equals(obj)) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        RegistrationInfo other = (RegistrationInfo) obj;
        if (invitationCode == null) {
            if (other.invitationCode != null) {
                return false;
            }
        } else if (!invitationCode.equals(other.invitationCode)) {
            return false;
        }
        return true;
    }

}
