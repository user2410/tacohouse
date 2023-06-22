let tenants : TenantEntity[] = [
  {
    id: '1',
    citizenNumber: '123456789',
    userName: "Nguyễn Chí Phèo",
    userBuilding: 'A1',
    address: 'So 1 Dai Co Viet, Hai Ba Trung, Ha Noi',
    phoneNumber: "0912345678",
    userRoom: 'P302',
  },
  {
    id: '2',
    citizenNumber: '123456789',
    userName: "Nguyễn Thị Nở",
    userBuilding: 'A1',
    address: 'So 1 Dai Co Viet, Hai Ba Trung, Ha Noi',
    phoneNumber: "0912345679",
    userRoom: 'P301',
  },
  {
    id: '3',
    citizenNumber: '123456789',
    userName: "Nguyễn Chí Phèo",
    userBuilding: 'A1',
    address: 'So 1 Dai Co Viet, Hai Ba Trung, Ha Noi',
    phoneNumber: "0912345678",
    userRoom: 'P302',
  },
  {
    id: '4',
    citizenNumber: '123456789',
    userName: "Nguyễn Thị Nở",
    userBuilding: 'A1',
    address: 'So 1 Dai Co Viet, Hai Ba Trung, Ha Noi',
    phoneNumber: "0912345679",
    userRoom: 'P301',
  },
  {
    id: '5',
    citizenNumber: '123456789',
    userName: "Nguyễn Chí Phèo",
    userBuilding: 'A1',
    address: 'So 1 Dai Co Viet, Hai Ba Trung, Ha Noi',
    phoneNumber: "0912345678",
    userRoom: 'P302',
  },
  {
    id: '6',
    citizenNumber: '123456789',
    userName: "Nguyễn Thị Nở",
    userBuilding: 'A1',
    address: 'So 1 Dai Co Viet, Hai Ba Trung, Ha Noi',
    phoneNumber: "0912345679",
    userRoom: 'P301',
  },
];

export class TenantService {
  static async getTenants(): Promise<TenantEntity[]> {
    return tenants;
  }

  static async getTenantById(id: string): Promise<TenantEntity | undefined> {
    return tenants.find(tenant => tenant.id === id);
  }
}
