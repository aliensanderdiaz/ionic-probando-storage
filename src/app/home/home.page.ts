import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensajes = []

  constructor(
    private storageService: StorageService
  ) {}

  agregar() {
    this.mensajes.push('Hola')
  }

  set() {
    this.storageService.set('saludo', 'hola')
    this.mensajes.push('añadido')
  }

  async get() {
    let value = await this.storageService.get('saludo')
    this.mensajes.push(value)
  }

  reset() {
    this.mensajes = []
  }

}
