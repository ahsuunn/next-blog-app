import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://themalique1910:malikahsan@cluster0.cnalp.mongodb.net/blog-app')
    console.log("DB Connected");
} 