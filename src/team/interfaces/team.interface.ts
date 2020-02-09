import { Document } from "mongoose";

export interface Team extends Document{
	_id: number;
	name: string,
	country: string,
	city: string,
	state?: string,
	isActive: boolean,
	foundationDate: Date,
	emblem: string,
	webpage: string
}