public interface AuctionItemRepository extends JpaRepository<AuctionItem, Long> {
    // Custom query to find only active auctions
    List<AuctionItem> findByStartTimeBeforeAndEndTimeAfter(LocalDateTime now1, LocalDateTime now2);
}