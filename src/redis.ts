import RedisStore  from "connect-redis"
import Redis from "ioredis"


const redis = new Redis({
    host:'redis'
});

// Initialize store.
const redisStore   =  new RedisStore({
    client:redis,
})
export default redisStore