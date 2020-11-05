import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../models/asignatura';

@Pipe({
  name: 'filtroAsignatura'
})
export class FiltroAsignaturaPipe implements PipeTransform {

  transform(asignaturas: Asignatura[],  searchText: string): any {
    if (searchText === undefined || searchText === '' ) return asignaturas;
      return asignaturas.filter(p =>
      p.codAsignatura.toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1);
  
    }
  

}
