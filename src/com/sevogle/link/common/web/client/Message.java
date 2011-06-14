package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("unused")
public class Message {
    public enum MessageSource {
        Inbound, Outbound;
    }

    private String id = "";
    public static final String ID = "id";

    private MessageSource messageSource = MessageSource.Inbound;
    public static final String MESSAGE_SOURCE = "messageSource";

    private long sent;
    public static final String SENT = "sent";

    private String parent;

    private List<String> children = new ArrayList<String>();

    /** Related non-child/parent relationships */
    private List<String> related = new ArrayList<String>();

    private String channel;

    private AddressDescriptor from;

    private AddressDescriptor replyTo;

    private List<AddressDescriptor> to;

    private List<AddressDescriptor> cc;

    private List<AddressDescriptor> bcc;

    private String subject;

    private List<ContentDescriptor> contentObjects;

    private List<AttachmentDescriptor> attachments;

    public class ContentDescriptor implements Serializable {
        private String id;
        private String type;
        private String summary; //???
    }

    public class AttachmentDescriptor implements Serializable {
        private String id;
        private String name;
        private String type;
    }

    public class AddressDescriptor implements Serializable {
        private URI contactURI;
        private String linkContactId;
        private String personalName;

    }
}
