package com.veloauction.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuctionEvent implements Serializable {
    private String eventId;
    private String auctionId;
    private String bidderId;
    private Double bidAmount;
    private String eventType; // e.g., "BID_PLACED"
    private Long timestamp;
}