import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://localhost:27017/wetube",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
)

const db = mongoose.connection;
const handleOpen = () => console.log("✅  Connected To DB");
const handleError = (error) => console.log(`❌ Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);