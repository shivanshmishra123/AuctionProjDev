package com.veloauction.repository;

import com.veloauction.model.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
    // Fetch logs for a specific auction, sorted by newest first
    List<AuditLog> findByAuctionIdOrderByCreatedAtDesc(String auctionId);
}