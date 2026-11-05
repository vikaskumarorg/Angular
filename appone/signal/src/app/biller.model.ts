export interface Biller {
  id: number;
  name: string;
  category: string;
}

export const BillersData =[
   { id: 1, name: 'Electricity Board', category: 'Utilities' },
    { id: 2, name: 'Water Supply', category: 'Utilities' },
    { id: 3, name: 'Mobile Recharge', category: 'Telecom' },
  ]