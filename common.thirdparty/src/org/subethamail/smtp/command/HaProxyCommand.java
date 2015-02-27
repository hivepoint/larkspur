package org.subethamail.smtp.command;

import java.io.IOException;

import org.subethamail.smtp.server.BaseCommand;
import org.subethamail.smtp.server.Session;

public class HaProxyCommand extends BaseCommand {
    public HaProxyCommand() {
        super("PROXY", "Provides original addressing", "<protocol> <src> <dst> <srcport> <dstport>");
    }

    @Override
    public void execute(String commandString, Session sess) throws IOException {
        String[] parts = commandString.split("\\s+");
        if (parts.length != 6) {
            return;
        }
        String protocol = parts[1];
        String sourceAddress = parts[2];
        String destinationAddress = parts[3];
        int sourcePort = 0;
        int destinationPort = 0;
        try {
            sourcePort = Integer.parseInt(parts[4]);
            destinationPort = Integer.parseInt(parts[5]);
        } catch (NumberFormatException e) {
        }
        sess.setHaProxyInfo(protocol, sourceAddress, destinationAddress, sourcePort, destinationPort);
    }

}
