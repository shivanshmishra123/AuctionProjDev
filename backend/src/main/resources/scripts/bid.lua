-- keys[1] = auction bid key (e.g., auction:bid:123)
-- argv[1] = new bid amount
-- argv[2] = bidder ID

local currentBid = redis.call('GET', KEYS[1])

if currentBid == nil or tonumber(ARGV[1]) > tonumber(currentBid) then
    redis.call('SET', KEYS[1], ARGV[1])
    -- Return 1 for success
    return 1
else
    -- Return 0 for failure (the "else" condition your senior mentioned)
    return 0
end