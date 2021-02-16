import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${connection.connection.host}`)
        } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1) //exit withi failure
    }
}

export default connectDB