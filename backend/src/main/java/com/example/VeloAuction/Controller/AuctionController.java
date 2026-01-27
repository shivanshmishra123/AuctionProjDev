@RestController
@RequestMapping("/api/auctions")
@CrossOrigin(origins = "http://localhost:3000")
public class AuctionController {

    @Autowired
    private AuctionItemRepository repository;

    @GetMapping
    public List<AuctionItem> getAllAuctions() {
        return repository.findAll();
    }

    @PostMapping
    public AuctionItem createAuction(@RequestBody AuctionItem item) {
        return repository.save(item);
    }
}