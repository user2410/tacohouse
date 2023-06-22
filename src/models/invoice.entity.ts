export enum InvoiceStatus {
  paid = "paid",
  overdue = "overdue",
  pending = "pending",
}

export type InvoiceEntity = {
  id: number,
  tenantId: number,
  tenantName: string, // if can get tenant data from db name and avatar can remove
  tenantAvatar?: string,
  room: string,
  status: InvoiceStatus,
  balanceDue: number,
  dueDate: number, // date of month 
}