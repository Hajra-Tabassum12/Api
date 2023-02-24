import mongoose from "mongoose"

const connectDB = async (url, dbname) => {

    try {
        await mongoose.connect(url + dbname)
        console.log(`successful`);
    } catch (error) {
        console.log(error);
    }

}
export default connectDB;
