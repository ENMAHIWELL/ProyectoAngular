import { Component, OnInit } from '@angular/core';

//Crear una interfaz
interface Tarjeta{
  titulo:string;
  subtitulo: string;
  imagenes: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MI primer app en angular';
  public ArregloTargeta : Tarjeta []= []; //variable de tipo arreglo
  card: any;

  ngOnInit(): void { // Es un metodo de tipo void que se inicializa cuando se ejecuta la pagina
    this.ArregloTargeta= [ // cargamos datos al arreglo
      {titulo: 'Video 1', subtitulo: 'Botas de ante negro', imagenes: "./assets/imagenes/im 1.jpg"}, 
      {titulo: 'Video 2', subtitulo: 'Blanco con perlas', imagenes: "./assets/imagenes/im 2.jpeg"},
      {titulo: 'Video 3', subtitulo: 'Negro con estoperoles', imagenes: "./assets/imagenes/im 5.jpg"},
      {titulo: 'Video 4', subtitulo: 'Nude', imagenes: "./assets/imagenes/im 7.jpg"},
      {titulo: 'Video 5', subtitulo: 'Classic LouBoutine', imagenes: "./assets/imagenes/im 8.jpg"},
 
    ]
  }
}

