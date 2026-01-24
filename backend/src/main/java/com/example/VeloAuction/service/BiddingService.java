@Service
public class BiddingService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    private static final String BID_KEY_PREFIX = "auction:bid:";
    public boolean validateAndPlaceBid(String auctionId, Double bidAmount) {
        String key = BID_KEY_PREFIX + auctionId;
        // 1. Get the current highest bid from Redis
        Double currentHighest = (Double) redisTemplate.opsForValue().get(key);
        // 2. Validation Logic
        if (currentHighest != null && bidAmount <= currentHighest) {
            return false; // Bid is too low
        }
        // 3. Atomic Update (Note: In high concurrency, we'd use a Lua script here)
        redisTemplate.opsForValue().set(key, bidAmount);
        // 4. TODO: Send to Kafka for Audit/DB persistence
        return true;
    }
}
