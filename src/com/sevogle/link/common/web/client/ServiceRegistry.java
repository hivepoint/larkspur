package com.sevogle.link.common.web.client;

public interface ServiceRegistry {

    String getLinkBaseURL();

    ExtensionType getGmailExtensionType();

    public static class ServiceRegistryImpl implements ServiceRegistry {

        private static ServiceRegistry instance = new ServiceRegistryImpl();

        public static ServiceRegistry getInstance() {
            return instance;
        }

        // TODO: this is a temp hardcoded extension
        private final ExtensionType _gmailExtension = new ExtensionType("8bc47b97-f982-4a8a-b01b-cc321e603b39",
                "Google Mail", "Extension that handles gmails", "http://localhost:24001",
                "18d85810-8651-4007-84ba-6f8d805e7d6f");

        @Override
        public String getLinkBaseURL() {
            return "http://localhost:24000/";
        }

        @Override
        public ExtensionType getGmailExtensionType() {
            return _gmailExtension;
        }

    }
}
