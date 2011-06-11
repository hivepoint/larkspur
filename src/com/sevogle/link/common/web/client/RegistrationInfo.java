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
}
