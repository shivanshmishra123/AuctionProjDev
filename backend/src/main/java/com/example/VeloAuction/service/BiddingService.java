@Service
public class BiddingService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    @Autowired
    private KafkaTemplate<String, AuctionEvent> kafkaTemplate;
    private final DefaultRedisScript<Long> script;
    public BiddingService() {
        this.script = new DefaultRedisScript<>();
        this.script.setScriptSource(new ResourceScriptSource(new ClassPathResource("scripts/bid.lua")));
        this.script.setResultType(Long.class);
    }
    private static final String BID_KEY_PREFIX = "auction:bid:";
    public void placeBid(String auctionId, Double amount,String userId) {
        String key = "auction:bid:" + auctionId;
        // The execution is atomic!
        Long result = redisTemplate.execute(script, Collections.singletonList(key), amount.toString(), userId);
        if (result == 1) {
            // If Redis update is successful:
        AuctionEvent event = new AuctionEvent(
            UUID.randomUUID().toString(),
            auctionId,
            userId,
            amount,
            "BID_PLACED",
            System.currentTimeMillis()
        );

        // Send to Kafka "velo-auction-logs" topic
        kafkaTemplate.send("velo-auction-logs", event);

        // SUCCESS: Trigger the WebSocket broadcast here to update everyone
        } else {
            // FAILURE: Handle the "else" condition
            // Send a targeted WebSocket message to THIS user only: "Bid too low!"
        }
    }
}

