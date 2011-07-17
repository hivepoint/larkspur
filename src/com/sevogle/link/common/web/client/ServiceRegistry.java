package com.sevogle.link.common.web.client;

public interface ServiceRegistry {

    String getLinkBaseURL();

    ExtensionType getGmailExtensionType();

    ExtensionType getTwitterExtensionType();

    ExtensionType[] getAllExtensionTypes();

    public static class ServiceRegistryImpl implements ServiceRegistry {

        private static ServiceRegistry instance = new ServiceRegistryImpl();

        public static ServiceRegistry getInstance() {
            return instance;
        }

        // TODO: this is a temp hardcoded extension
        private final ExtensionType _gmailExtension = new ExtensionType("8bc47b97-f982-4a8a-b01b-cc321e603b39",
                "Google Mail", "Extension that handles gmails", "http://localhost:24001",
                "18d85810-8651-4007-84ba-6f8d805e7d6f");

        private final ExtensionType _twitterExtension = new ExtensionType("com.sevogle.extensions.twitter", "Twitter",
                "Sevogle Twitter extension", "http://localhost:24002", "2aad2d7d-650f-4194-871e-40f23ca3dd4d");

        @Override
        public String getLinkBaseURL() {
            return "http://localhost:24000";
        }

        @Override
        public ExtensionType getGmailExtensionType() {
            return _gmailExtension;
        }

        @Override
        public ExtensionType getTwitterExtensionType() {
            return _twitterExtension;
        }

        @Override
        public ExtensionType[] getAllExtensionTypes() {
            return new ExtensionType[] { _gmailExtension, _twitterExtension };
        }

    }
}
