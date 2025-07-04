import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'sidnei.ferrari1@gmail.com',
      name: 'Sidnei Ferrari',
      whatsApp: 'https://api.whatsapp.com/send?phone=5511944751920&text=Ol%C3%A1,%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
      linkedin: 'https://www.linkedin.com/in/sidnei-ferrari-dos-santos-190147360/',
    }

    return profile;
  }
}
