export class CreateTeamDto {
	readonly _id: number;
  readonly name: string;
	readonly country: string;
	readonly city: string;
	readonly state: string;
	readonly isActive: boolean;
	readonly foundationDate: Date;
	readonly emblem: string;
	readonly webpage: string
}