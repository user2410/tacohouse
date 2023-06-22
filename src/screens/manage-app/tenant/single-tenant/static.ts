export const invoiceStatusColor = {
  paid: {
      text: 'Paid',
      backgroundColor: '#98ed7d',
      textColor: '#000',
  },
  overdue: {
      text: 'Overdue',
      backgroundColor: '#c00d0d',
      textColor: '#fff',
  },
  pending: {
      text: 'Pending',
      backgroundColor: '#eeec62',
      textColor: '#000',
  },
}

export const history = [
  {
      id: 1,
      date: '30/5/2022',
      status: invoiceStatusColor.overdue,
      money: 10000000,
  },
  {
      id: 2,
      date: '12/6/2023',
      status: invoiceStatusColor.paid,
      money: 12300000,
  },
  {
      id: 3,
      date: '12/7/2023',
      status: invoiceStatusColor.pending,
      money: 13400000,
  },
]