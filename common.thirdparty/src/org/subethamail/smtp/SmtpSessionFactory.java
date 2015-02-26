package org.subethamail.smtp;

import java.io.IOException;
import java.net.Socket;

import org.subethamail.smtp.server.SMTPServer;
import org.subethamail.smtp.server.ServerThread;
import org.subethamail.smtp.server.Session;

public interface SmtpSessionFactory {
    public Session createSession(SMTPServer server, ServerThread serverThread, Socket socket) throws IOException;
}
