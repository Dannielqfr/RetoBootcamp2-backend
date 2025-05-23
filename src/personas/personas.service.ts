import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PersonasService {
    async getPeople(count: number = 10) {
    const url = `https://randomuser.me/api/?results=${count}`;
    const response = await axios.get(url);
    const users = response.data.results;

    return users.map((user: any) => ({
      nombre: `${user.name.first} ${user.name.last}`,
      genero: user.gender,
      ubicacion: `${user.location.city}, ${user.location.country}`,
      correo: user.email,
      fechaNacimiento: user.dob.date,
      foto: user.picture.large,
    }));
  }
}
