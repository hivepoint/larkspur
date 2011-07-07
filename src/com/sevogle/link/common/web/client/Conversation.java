package com.sevogle.link.common.web.client;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Conversation implements Serializable {
    @Override
    public String toString() {
        return "Conversation [_id=" + _id + ", lastSubject=" + lastSubject + ", lastMessage=" + lastMessage
                + ", lastSenderIndex=" + lastSenderIndex + ", lastMessagePreamble=" + lastMessagePreamble
                + ", numberUnread=" + numberUnread + ", numberMessages=" + numberMessages + "]";
    }

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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((_id == null) ? 0 : _id.hashCode());
        result = prime * result + (int) (lastMessage ^ (lastMessage >>> 32));
        result = prime * result + ((lastMessagePreamble == null) ? 0 : lastMessagePreamble.hashCode());
        result = prime * result + lastSenderIndex;
        result = prime * result + ((lastSubject == null) ? 0 : lastSubject.hashCode());
        result = prime * result + numberMessages;
        result = prime * result + numberUnread;
        result = prime * result + ((participants == null) ? 0 : participants.hashCode());
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
        Conversation other = (Conversation) obj;
        if (_id == null) {
            if (other._id != null) {
                return false;
            }
        } else if (!_id.equals(other._id)) {
            return false;
        }
        if (lastMessage != other.lastMessage) {
            return false;
        }
        if (lastMessagePreamble == null) {
            if (other.lastMessagePreamble != null) {
                return false;
            }
        } else if (!lastMessagePreamble.equals(other.lastMessagePreamble)) {
            return false;
        }
        if (lastSenderIndex != other.lastSenderIndex) {
            return false;
        }
        if (lastSubject == null) {
            if (other.lastSubject != null) {
                return false;
            }
        } else if (!lastSubject.equals(other.lastSubject)) {
            return false;
        }
        if (numberMessages != other.numberMessages) {
            return false;
        }
        if (numberUnread != other.numberUnread) {
            return false;
        }
        if (participants == null) {
            if (other.participants != null) {
                return false;
            }
        } else if (!participants.equals(other.participants)) {
            return false;
        }
        return true;
    }
}
