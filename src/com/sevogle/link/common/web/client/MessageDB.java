package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MessageDB implements Serializable {
    private static final long serialVersionUID = 6546136861916164164L;

    private String _id = ""; // GUID generated by the message creator
    public static final String ID = "_id";
    private MessageState state;
    private String channelId;
    private String userId;
    public static final String USERID = "userId";
    private String protocolSpecificId;
    public static final String PROTOCOL_SPECIFIC_ID = "protocolSpecificId";
    private MessageSource messageSource;
    private long sent; // timestamp
    public static final String SENT = "sent";
    private long received;
    private String subjectNormalized;
    private String subjectRaw;
    private RelatedMessageDescriptor parent;
    private RelatedMessageDescriptor inReplyTo;
    public static final String PARENT = "parent.messageId";
    private AddressDescriptor from;
    private AddressDescriptor replyTo;
    private List<AddressDescriptor> to = new ArrayList<AddressDescriptor>();
    private List<AddressDescriptor> cc = new ArrayList<AddressDescriptor>();
    private List<AddressDescriptor> bcc = new ArrayList<AddressDescriptor>();
    private List<NormativeBlockDescriptor> normalizedMessage = new ArrayList<NormativeBlockDescriptor>();
    private List<MessageContentDescriptor> contentObjects = new ArrayList<MessageContentDescriptor>();
    private List<NameValuePair> headers = new ArrayList<NameValuePair>();
    private String preamble;
    private boolean seen;

    public MessageDB() {
    }

    public MessageDB(String _id, String userId, MessageState state, String channelId, String protocolSpecificId,
            MessageSource messageSource, long sent, long received, String subjectNormalized, String subjectRaw,
            RelatedMessageDescriptor parent, AddressDescriptor from, AddressDescriptor replyTo, String preamble, boolean seen) {
        this._id = _id;
        this.state = state;
        this.channelId = channelId;
        this.protocolSpecificId = protocolSpecificId;
        this.messageSource = messageSource;
        this.sent = sent;
        this.received = received;
        this.subjectNormalized = subjectNormalized;
        this.subjectRaw = subjectRaw;
        this.parent = parent;
        this.from = from;
        this.replyTo = replyTo;
        this.userId = userId;
        this.preamble = preamble;
        this.seen = seen;
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        _id = id;
    }

    public MessageState getState() {
        return state;
    }

    public void setState(MessageState state) {
        this.state = state;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public String getProtocolSpecificId() {
        return protocolSpecificId;
    }

    public void setProtocolSpecificId(String protocolSpecificId) {
        this.protocolSpecificId = protocolSpecificId;
    }

    public MessageSource getMessageSource() {
        if (messageSource == null) {
            //TODO: abovill 6/20/2011: Needs to be set appropriately by channel
            return MessageSource.INBOUND;
        }
        return messageSource;
    }

    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public long getSent() {
        return sent;
    }

    public void setSent(long sent) {
        this.sent = sent;
    }

    public long getReceived() {
        return received;
    }

    public void setReceived(long received) {
        this.received = received;
    }

    public String getSubjectNormalized() {
        return subjectNormalized;
    }

    public void setSubjectNormalized(String subjectNormalized) {
        this.subjectNormalized = subjectNormalized;
    }

    public String getSubjectRaw() {
        return subjectRaw;
    }

    public void setSubjectRaw(String subjectRaw) {
        this.subjectRaw = subjectRaw;
    }

    public RelatedMessageDescriptor getParent() {
        return parent;
    }

    public void setParent(RelatedMessageDescriptor parent) {
        this.parent = parent;
    }

    public AddressDescriptor getFrom() {
        return from;
    }

    public void setFrom(AddressDescriptor from) {
        this.from = from;
    }

    public AddressDescriptor getReplyTo() {
        return replyTo;
    }

    public void setReplyTo(AddressDescriptor replyTo) {
        this.replyTo = replyTo;
    }

    public List<AddressDescriptor> getTo() {
        return to;
    }

    public List<AddressDescriptor> getCc() {
        return cc;
    }

    public List<AddressDescriptor> getBcc() {
        return bcc;
    }

    public List<NormativeBlockDescriptor> getNormalizedMessage() {
        return normalizedMessage;
    }

    public List<MessageContentDescriptor> getContentObjects() {
        return contentObjects;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setPreamble(String preamble) {
        this.preamble = preamble;
    }

    public String getPreamble() {
        return preamble;
    }

    public List<NameValuePair> getHeaders() {
        return headers;
    }

    public boolean isSeen() {
        return seen;
    }

    public void setSeen(boolean seen) {
        this.seen = seen;
    }

    public RelatedMessageDescriptor getInReplyTo() {
        return inReplyTo;
    }

    public void setInReplyTo(RelatedMessageDescriptor inReplyTo) {
        this.inReplyTo = inReplyTo;
    }

    @Override
    public String toString() {
        return "MessageDB [_id=" + _id + ", state=" + state + ", channelId=" + channelId + ", userId=" + userId
                + ", protocolSpecificId=" + protocolSpecificId + ", messageSource=" + messageSource + ", sent=" + sent
                + ", received=" + received + ", subjectNormalized=" + subjectNormalized + ", subjectRaw=" + subjectRaw
                + ", parent=" + parent + ", inReplyTo=" + inReplyTo + ", from=" + from + ", replyTo=" + replyTo + ", to="
                + to + ", cc=" + cc + ", bcc=" + bcc + ", preamble=" + preamble + ", seen=" + seen + "]";
    }

}
