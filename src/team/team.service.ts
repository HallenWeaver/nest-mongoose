import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './interfaces/team.interface';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) { }

  async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async findByName(teamName: string): Promise<Team> {
    return this.teamModel.findOne({ name: teamName }, (err, obj) => {
      if (err) console.log(err);
    }).exec();
  }

  async updateTeam(updateTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamModel.findOneAndUpdate({name: updateTeamDto.name}, updateTeamDto, (err, obj) => {
      if(err) console.log(err);
    }).exec();
  }

  async deleteTeamByName(teamName: string): Promise<Team> {
    return this.teamModel.findOneAndDelete({name: teamName}, (err, obj) => {
      if(err) console.log(err);
    }).exec();
  }
}
