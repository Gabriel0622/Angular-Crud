import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados:Empleado[];
  constructor(private empleadosServicio: EmpleadoService,private router:Router) { }

  ngOnInit(): void {
   this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadosServicio.obtenerListaEmpleados().subscribe(dato =>{
      this.empleados = dato;
    })
  }
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarEmpleado(id:number){
    this.empleadosServicio.eliminarEmpleado(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerEmpleados();
    })
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }
  

}
