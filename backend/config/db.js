import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://00a20j50:anuj1212@cluster0.jvzh9.mongodb.net/zomato-clone').then(()=>console.log("DB Connected"));
}