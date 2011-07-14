package com.sevogle.link.common.web.client;

public enum EventType {
    EXTENSION_ADDED, EXTENSION_UPDATED, EXTENSION_DELETED, //
    MESSAGE_ADDED_TO_FEED, MESSAGE_UPDATED, MESSAGE_REMOVED_FROM_FEED, MESSAGE_ADDED_TO_CHAT, //
    CHAT_ADDED_TO_FEED, CHAT_MOVED_TO_FEED, CHAT_REMOVED_FROM_FEED, //
    FEED_ADDED, FEED_REMOVED, FEED_UPDATED, FEED_LIST_UPDATED;
}
