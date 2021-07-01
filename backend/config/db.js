import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB Connected: ${connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDb;
