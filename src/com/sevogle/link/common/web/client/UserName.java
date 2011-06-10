package com.sevogle.link.common.web.client;

import java.io.Serializable;

public class UserName implements Serializable, Comparable<UserName> {
    private static final long serialVersionUID = 7403965352458072211L;
    private String fullName;
    private String lastName;
    private String initials;

    public UserName() {

    }

    public UserName(String fullName, String lastName, String initials) {
        this.fullName = fullName;
        this.lastName = lastName;
        this.initials = initials;
    }

    public UserName(String fullname) {
        parseFullName(fullname);
    }

    public void parseFullName(String fullName) {
        if (fullName == null) {
            this.fullName = null;
            return;
        }
        if (fullName.matches("\\S+\\@\\S+")) {
            // email address
            this.fullName = fullName.substring(0, fullName.indexOf('@'));
        } else if (fullName.matches("\\S+\\,\\s+\\S.*")) {
            // inverted name, e.g., Smith, John A.
            String parts[] = fullName.split("\\,", 2);
            this.fullName = parts[1].trim() + " " + parts[0];
            lastName = parts[0];
        } else {
            // normal forward order name
            this.fullName = fullName;
        }
        String parts[] = this.fullName.trim().split("[\\s\\_\\.]+");
        // Take the last part that starts with a letter as the short form
        if (lastName == null) {
            for (int i = parts.length - 1; i >= 0; i--) {
                String part = parts[i];
                if (part.length() > 0 && Character.isLetter(part.charAt(0))) {
                    lastName = part;
                    break;
                }
            }
        }
        StringBuilder initBldr = new StringBuilder();
        for (int i = 0; i < parts.length && i < 4; i++) {
            if (i > 0 && !Character.isLetter(parts[i].charAt(0))) {
                break;
            }
            initBldr.append(parts[i].charAt(0));
        }
        initials = initBldr.toString();
    }

    public String getFullName() {
        return fullName;
    }

    public void setShortFormName(String shortFormName) {
        lastName = shortFormName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public String getInitials() {
        return initials;
    }

    public String getBestFullName() {
        if (fullName != null) {
            return fullName;
        }
        if (lastName != null) {
            return lastName;
        }
        return initials;
    }

    @Override
    public int compareTo(UserName o) {
        if (o == null) {
            return 1;
        }
        int result = compareStrings(lastName, o.lastName);
        if (result != 0) {
            return result;
        }
        return compareStrings(fullName, o.fullName);
    }

    private int compareStrings(String s1, String s2) {
        if (s1 == null && s2 == null) {
            return 0;
        } else if (s1 == null) {
            return -1;
        } else if (s2 == null) {
            return 1;
        } else {
            return s1.compareToIgnoreCase(s2);
        }
    }

    public String getBestInitials() {
        if (initials == null || initials.isEmpty()) {
            return getBestLastName();
        }
        return initials;
    }

    public String getBestLastName() {
        if (lastName == null || lastName.isEmpty()) {
            return getBestFullName();
        }
        return lastName;
    }

    @Override
    public String toString() {
        return getBestFullName();
    }
}
