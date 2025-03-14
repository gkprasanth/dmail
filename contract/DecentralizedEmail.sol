// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract DecentralizedEmail {
    // Struct to represent an email
    struct Email {
        address sender; // The address of the sender
        address receiver; // The address of the receiver
        string subject; // The subject of the email
        string content; // The content/body of the email
        uint256 timestamp; // When the email was sent
        string imageHash; // Hash for image (IPFS or similar)
    }

    // Mapping of recipient address to their inbox of emails
    mapping(address => Email[]) private inbox;
    // Mapping of sender address to their sent emails
    mapping(address => Email[]) private sentEmails;

    // Event emitted when an email is sent
    event EmailSent(address indexed sender, address indexed receiver, string subject);

    /**
     * @dev Sends an email to the specified receiver.
     * @param receiver The address of the email recipient.
     * @param subject The subject of the email.
     * @param content The content/body of the email.
     * @param imageHash The hash of the attached image.
     */
    function sendEmail(address receiver, string memory subject, string memory content, string memory imageHash) public {
        // Create a new email struct including the receiver
        Email memory newEmail = Email({
            sender: msg.sender,
            receiver: receiver, // Store the receiver's address
            subject: subject,
            content: content,
            timestamp: block.timestamp,
            imageHash: imageHash
        });

        // Add the email to the recipient's inbox
        inbox[receiver].push(newEmail);
        // Add the email to the sender's sent emails
        sentEmails[msg.sender].push(newEmail);

        // Emit the event
        emit EmailSent(msg.sender, receiver, subject);
    }

    /**
     * @dev Fetches the inbox of the caller.
     * @return An array of emails in the caller's inbox.
     */
    function getInbox() public view returns (Email[] memory) {
        return inbox[msg.sender];
    }

    /**
     * @dev Fetches all sent emails of the caller.
     * @return An array of emails sent by the caller.
     */
    function getSentEmails() public view returns (Email[] memory) {
        return sentEmails[msg.sender];
    }
}
