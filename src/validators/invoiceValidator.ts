import {z} from "zod";


export const createInvoiceSchema=z.object({
    doctorName: z.string().min(1, "Doctor name is required"),
    salesName: z.string().min(1, "Sales name is required"),
    visitDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid visit date",
    }),
    paymentType: z.string().min(1, "Payment type is required"),
    products: z.array(
        z.object({
            productName: z.string().min(1, "Product name is required"),
            quantity: z.number().min(0, "Quantity must be a positive number"),
            price: z.number().min(0, "Price must be a positive number"),
        })
    ),
    totalAmount: z.number().min(0, "Total amount must be a positive number"),

});
