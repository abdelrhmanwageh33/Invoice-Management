import mongoose from "mongoose";
const invoiceSchema = new mongoose.Schema({
  doctorName: {
    type: String, 
    required: true,  
  },
  salesName:{
    type: String,
    required: true,
  },
  visitDate:{
    type: Date,
    required: true,
  },
  paymentType:{
    type: String,
    required: true,
  },
  products:[
    {
      productName: { 
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true  
    } ,
    price: {
        type: Number,
        required: true  
    } 
  }
  ],
  totalAmount: {
    type: Number,
    required: true,
  }
})

const Invoice = mongoose.model("Invoice",invoiceSchema)
export default Invoice

