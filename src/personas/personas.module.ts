import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [PersonasService],
  controllers: [PersonasController],
  imports: [PersonasModule, HttpModule]
})
export class PersonasModule { }
