import { Controller, Get, Logger, Query } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonaDto } from './dto/persona.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Controller('personas')
export class PersonasController {
  private readonly logger = new Logger(PersonasService.name);
  constructor(private readonly personasService: PersonasService, private readonly httpService: HttpService) { }

  @Get()
  async getPersonas(): Promise<PersonaDto[]> {
    this.logger.log('Obteniendo 10 personas aleatorias...');
    const { data } = await firstValueFrom(this.httpService.get('https://randomuser.me/api/?results=10'));
    return data.results.map((p: any) => ({
      name: `${p.name.first} ${p.name.last}`,
      gender: p.gender,
      location: `${p.location.city}, ${p.location.country}`,
      email: p.email,
      birthdate: p.dob.date,
      picture: p.picture.medium,
    }));
  }

}
