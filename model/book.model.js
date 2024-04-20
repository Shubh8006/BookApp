import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    Name:String,
    Price:Number,
    Category:String,
    Image:String,
    Title:String
})

const Book= mongoose.model("Book", bookSchema);
export default Book;