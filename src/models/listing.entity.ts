import { PolicyEntity } from "./policy.entity";
import { PropertyEntity } from "./property.entity";
import { UnitEntity } from "./unit.entity";

export type ListingEntity = {
	id: string;
  creatorId: string;
  propertyId: string;
  title: string;
  description: string;

  price: number;
  securityDeposit: number;

  petsAllowed?: boolean;
  nResidents?: number;
  leaseTerm?: number;
  policies: PolicyEntity[];

  priority: number;
  active: boolean;
  
  createdAt: Date;
  updatedAt: Date;

  property: PropertyEntity;
  creator: UserEntity;
  units: UnitEntity;
} 