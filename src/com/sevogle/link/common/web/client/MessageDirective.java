package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class MessageDirective implements Serializable {
    private static final long serialVersionUID = -768530870508302229L;
    private boolean readyForDelivery;
    private boolean deliveryCompleted;

    public MessageDirective() {

    }

    public boolean isReadyForDelivery() {
        return readyForDelivery;
    }

    public void setReadyForDelivery(boolean readyForDelivery) {
        this.readyForDelivery = readyForDelivery;
    }

    public boolean isDeliveryCompleted() {
        return deliveryCompleted;
    }

    public void setDeliveryCompleted(boolean deliveryCompleted) {
        this.deliveryCompleted = deliveryCompleted;
    }

    public MessageDirective(boolean readyForDelivery, boolean deliveryCompleted) {
        super();
        this.readyForDelivery = readyForDelivery;
        this.deliveryCompleted = deliveryCompleted;
    }
}
