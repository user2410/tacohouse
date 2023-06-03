
enum InvoiceStatus {
    paid = "paid",
    overdue = "overdue",
    pending = "pending",
}

export interface InvoiceItemProps {
    id: number,
    tenantId: number,
    tenantName: string, // if can get tenant data from db name and avatar can remove
    tenantAvatar?: string,
    room: string,
    status: InvoiceStatus,
    balanceDue: number,
    dueDate: number, // date of month 
}

export interface InvoiceSectionProps {
    data: Array<InvoiceItemProps>,
}


export const mockInvoiceSection = [
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