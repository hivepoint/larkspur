package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Conversation implements Serializable {
    private static final long serialVersionUID = -4294189562436423685L;
    private String _id;
    private List<AddressDescriptor> participants = new ArrayList<AddressDescriptor>();
    private String lastSubject;
    private long lastMessage;
    private int lastSenderIndex;
    private String lastMessagePreamble;
    private int numberUnread;
    private int numberMessages;

    public int getNumberUnread() {
        return numberUnread;
    }

    public void setNumberUnread(int numberUnread) {
        this.numberUnread = numberUnread;
    }

    public int getNumberMessages() {
        return numberMessages;
    }

    public void setNumberMessages(int numberMessages) {
        this.numberMessages = numberMessages;
    }

    public Conversation() {

    }

    public Conversation(String id, String lastSubject, long lastMessage, int lastSenderIndex, String lastMessagePreamble,
            int numberUnread, int numberMessages) {
        super();
        _id = id;
        this.lastSubject = lastSubject;
        this.lastMessage = lastMessage;
        this.lastSenderIndex = lastSenderIndex;
        this.lastMessagePreamble = lastMessagePreamble;
        this.numberMessages = numberMessages;
        this.numberUnread = numberUnread;
    }

    public String getId() {
        return _id;
    }

    public void setId(String value) {
        _id = value;
    }

    public List<AddressDescriptor> getParticipants() {
        return participants;
    }

    public void setParticipants(List<AddressDescriptor> participants) {
        this.participants = participants;
    }

    public String getLastSubject() {
        return lastSubject;
    }

    public void setLastSubject(String lastSubject) {
        this.lastSubject = lastSubject;
    }

    public long getLastMessage() {
        return lastMessage;
    }

    public void setLastMessage(long lastMessage) {
        this.lastMessage = lastMessage;
    }

    public int getLastSenderIndex() {
        return lastSenderIndex;
    }

    public void setLastSenderIndex(int lastSenderIndex) {
        this.lastSenderIndex = lastSenderIndex;
    }

    public String getLastMessagePreamble() {
        return lastMessagePreamble;
    }

    public void setLastMessagePreamble(String lastMessagePreamble) {
        this.lastMessagePreamble = lastMessagePreamble;
    }
}
