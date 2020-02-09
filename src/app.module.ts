import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsModule } from './team/team.module';

@Module({
  imports: [
    TeamsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test')
  ]
})
export class AppModule {}
