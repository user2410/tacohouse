export interface TenantItemProps {
    id: number,
    userName: string,
    phoneNumber: string,
    userRoom: string,
};

export interface TenantSectionProps {
    data: Array<TenantItemProps>,
}