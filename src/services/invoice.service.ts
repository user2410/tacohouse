import { InvoiceEntity, InvoiceStatus } from "@models/invoice.entity";
import { timeout } from "./settings";

let mockInvoiceSection : InvoiceEntity[] = [
  {
    id: 1,
    tenantId: 2,
    tenantName: 'Trinh Thanh Cong Danh Toai',
    room: 'P201',
    status: InvoiceStatus.paid,
    balanceDue: 1452000,
    dueDate: 15,
  },
  {
    id: 2,
    tenantId: 4,
    tenantName: 'Trinh Van Quyet',
    room: 'P205',
    status: InvoiceStatus.paid,
    balanceDue: 1452000,
    dueDate: 15,
  },
]

export class InvoiceService {
  static async getInvoices() : Promise<InvoiceEntity[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockInvoiceSection);
      }, timeout);
    })
  }
}