const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "currentlythisisthesecretpasswordshuuush", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://christpheresguerra_db_user:tUmj7QxvoeCTSGNC@cluster0.7tlgub7.mongodb.net/Skeleton"||
    MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '2021') +
    '/mernproject' 
    }
    export default config
   