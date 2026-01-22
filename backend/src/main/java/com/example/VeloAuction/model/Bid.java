
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "bids",
    indexes = {
        @Index(name = "idx_bid_auction", columnList = "auction_item_id"),
        @Index(name = "idx_bid_user", columnList = "user_id")
    }
)
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false)
    private LocalDateTime bidTime;

    /* -------------------- Relationships -------------------- */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "auction_item_id", nullable = false)
    private AuctionItem auctionItem;

    /* -------------------- Lifecycle Logic -------------------- */

    @PrePersist
    public void prePersist() {
        if (bidTime == null) {
            this.bidTime = LocalDateTime.now();
        }
    }

    /* -------------------- Getters & Setters -------------------- */

    public Long getId() {
        return id;
    }

    public Double getAmount() {
        return amount;
    }
    
    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDateTime getBidTime() {
        return bidTime;
    }

    public User getUser() {
        return user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }

    public AuctionItem getAuctionItem() {
        return auctionItem;
    }
    
    public void setAuctionItem(AuctionItem auctionItem) {
        this.auctionItem = auctionItem;
    }
}
