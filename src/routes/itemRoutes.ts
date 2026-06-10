import express from "express";

import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
 
  getDoctorInvoices,
} from "../controllers/invoiceController";
import  validateRequest  from "../middleware/validate";
import { createInvoiceSchema } from "../validators/invoiceValidator";

const router = express.Router();

router.post("/", validateRequest(createInvoiceSchema), createInvoice);

router.get("/", getInvoices);

router.get("/id/:id", getInvoiceById);

router.put("/id/:id", updateInvoice);
router.delete("/id/:id", deleteInvoice);



export default router;