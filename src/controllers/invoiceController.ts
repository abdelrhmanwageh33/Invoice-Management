import { Request, Response } from "express";
import Invoice from "../model/Invoices";
// Create a new invoice
export const createInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoice = new Invoice(req.body);

    await invoice.save();

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: "Error creating invoice",
      error,
    });
  }
};


// Get all invoices
export const getInvoices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const filter :any={};
    if(req.query.doctorName){
     filter.doctorName = {
    $regex: req.query.doctorName,
    $options: "i"
  };
    }
    if(req.query.paymentType){
      filter.paymentType=req.query.paymentType as string;
    }
    const invoices = await Invoice.find(filter);

    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching invoices",
      error,
    });
  }
};
// Get a single invoice by ID
export const getInvoiceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoice = await Invoice.findById(req.params.id);

    if (!invoice) {
      res.status(404).json({
        message: "Invoice not found",
      });
      return;
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching invoice",
      error,
    });
  }
};

// Update an invoice by ID

export const updateInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!invoice) {
      res.status(404).json({
        message: "Invoice not found",
      });
      return;
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: "Error updating invoice",
      error,
    });
  }
};
 // Delete an invoice by ID
export const deleteInvoice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoice = await Invoice.findByIdAndDelete(
      req.params.id
    );

    if (!invoice) {
      res.status(404).json({
        message: "Invoice not found",
      });
      return;
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({
      message: "Error deleting invoice",
      error,
    });
  }
};


export const getDoctorInvoices= async(
  req: Request,
  res: Response
): Promise<void> => {
  try{
    const doctorName = req.query.doctorName  as string;
    const invoices = await Invoice.find({ doctorName: doctorName });
    res.status(200).json(invoices);
  }catch(error){
    res.status(500).json({
      message: "Error fetching doctor's invoices",
      error,
    });
  }
}