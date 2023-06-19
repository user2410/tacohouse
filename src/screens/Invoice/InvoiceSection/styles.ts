
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
        tenantName: 'Bá Kiến',
        room: 'P201',
        status: InvoiceStatus.paid,
        balanceDue: 1252000,
        dueDate: 15,
    },
    {
        id: 2,
        tenantId: 4,
        tenantName: 'Trinh Van Quyet',
        room: 'P205',
        status: InvoiceStatus.overdue,
        balanceDue: 1452000,
        dueDate: 15,
    },
    {
        id: 3,
        tenantId: 4,
        tenantName: 'Trinh Van Quyet',
        room: 'P205',
        status: InvoiceStatus.pending,
        balanceDue: 1852000,
        dueDate: 12,
    },
    {
        id: 4,
        tenantId: 2,
        tenantName: 'Phía Sau Bầu Trời Là Cả 1 Mùa Nước Mắt',
        room: 'P201',
        status: InvoiceStatus.overdue,
        balanceDue: 1822000,
        dueDate: 15,
    },
    {
        id: 5,
        tenantId: 2,
        tenantName: 'Lão Hạc và con chó Vàng',
        room: 'P208',
        status: InvoiceStatus.pending,
        balanceDue: 1452000,
        dueDate: 15,
    },
    {
        id: 6,
        tenantId: 2,
        tenantName: 'Giàng A Lử',
        room: 'P301',
        status: InvoiceStatus.paid,
        balanceDue: 1281000,
        dueDate: 15,
    },
]