@Service
public class AuditConsumerService {

    @Autowired
    private AuditLogRepository auditLogRepository;

    @KafkaListener(topics = "velo-auction-logs", groupId = "audit-group")
    public void consume(AuctionEvent event) {
        AuditLog log = new AuditLog();
        log.setAuctionId(event.getAuctionId());
        log.setUserId(event.getBidderId());
        log.setAmount(event.getBidAmount());
        log.setAction(event.getEventType());
        log.setCreatedAt(new LocalDateTime());

        auditLogRepository.save(log);
        System.out.println("Audit Log Persisted for Auction: " + event.getAuctionId());
    }
}