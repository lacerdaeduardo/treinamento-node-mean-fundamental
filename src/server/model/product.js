import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
    price: {type: Number, default: 0},
    brand: {type: String},
    description: {type: String},
    createdAt: {type: Date, default: Date.now()}    
});

export default mongoose.model('Product', productSchema);