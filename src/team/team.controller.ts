import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './interfaces/team.interface';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async findAllTeams(): Promise<Team[]> {
    return this.teamService.findAll();
  }

  @Get('/:teamName')
  async findTeamByName(@Param('teamName') teamName): Promise<Team> {
    return this.teamService.findByName(teamName);
  }

  @Post()
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    await this.teamService.createTeam(createTeamDto);
  }

  @Put()
  async updateTeam(@Body() createTeamDto: CreateTeamDto) {
    await this.teamService.updateTeam(createTeamDto);
  }

  @Delete('/:teamName')
  async deleteTeamByName(@Param('teamName') teamName): Promise<any> {
    await this.teamService.deleteTeamByName(teamName);
  }
}