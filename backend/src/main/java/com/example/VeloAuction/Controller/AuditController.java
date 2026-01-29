package com.veloauction.controller;

import com.veloauction.model.AuditLog;
import com.veloauction.repository.AuditLogRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auctions")
@CrossOrigin(origins = "*") // Adjust for your frontend port
public class AuditController {

    private final AuditLogRepository auditLogRepository;

    public AuditController(AuditLogRepository auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    @GetMapping("/{auctionId}/audit")
    public List<AuditLog> getAuditTrail(@PathVariable String auctionId) {
        return auditLogRepository.findByAuctionIdOrderByCreatedAtDesc(auctionId);
    }
}