import { Injectable } from '@angular/core';
import {NgbDateStruct,NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  // metodo para validar que un campo no este vacio y sean letras.

  validarTexto (valor : number | string ) : boolean {
    if((valor != null) &&(valor !== '')) {
      if(!this.esNumero(valor)) {
        return true
      }else {
        return false
      }

    }else {
      return false
    }

  }

  //devuelve true si es un numero

  esNumero(numero: string | number): boolean {

    if(numero != null && numero !== '') {
      if (numero.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  // devuelve true si es un email

  esEmail(email : string) : boolean {
    if(email != null && email !== '') {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
    } else {
      return false
    }
   }

   // devuelve true si el campo no esta vacio

   esCampoVacio (valor : number | string) : boolean {
    if(valor != null && valor !== '') {
      return false
    } else {
      return true
    }
   }

   // devuelvo true si las contraseñas son iguales

   validarPasswords (pass1 : number | string, pass2 : number | string ) : boolean {
    if(!this.esCampoVacio(pass1) && this.esCampoVacio(pass2) && pass1 == pass2) {
      return true
    } else {
      return false
    }
   }
   // devuelve true si tiene formato url
  esUrl(valor : string) : boolean {
    let url;

    try {
      url = new URL(valor);
      if(url) {
        return true
      }else {
        return false
      }
    } catch (_) {
      return false;
    }
  }

  esFecha(fecha : NgbDateStruct) : boolean {
    let fechaFinal : Date
    try {
      fechaFinal  = new Date(fecha.year, fecha.month - 1, fecha.day)
      if(fechaFinal) {
        return true
      }else {
        return false
      }
    }catch (_) {
      return false
    }
  }

}
