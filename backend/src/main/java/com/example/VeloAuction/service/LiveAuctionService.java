package com.veloauction.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class LiveAuctionService {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void sendOutbidNotice(String username, Long auctionId, Double amount) {
        messagingTemplate.convertAndSendToUser(
            username, 
            "/queue/outbid", 
            Map.of("message", "Outbid! New price: $" + amount, "id", auctionId)
        );
    }
}