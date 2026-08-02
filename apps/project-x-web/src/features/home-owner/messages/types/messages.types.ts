export type MessageThread = {
  id: string;
  participantName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline?: boolean;
  messages: Message[];
  propertyAddress?: string;
};

export type Message = {
  id: string;
  senderId: string;
  senderName: string;
  senderImage?: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  status?: "sent" | "delivered" | "read";
};
