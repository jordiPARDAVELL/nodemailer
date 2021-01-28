import { Component } from '@angular/core';
import {MessageService} from '../../services/message.service'

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  

  mostrar = true;

  historia: any = {
    mensaje:'El  Corporativo de  Telecomunicaciones Cemirts está enfocado en servicios informáticos rede de telecomunicaciones mantenimiento preventivo y correctivo a  equipos de cómputo, porte técnico, papelería y artículos de limpieza.' ,
mensajes:"El  Corporativo de  Telecomunicaciones Cemirts se dio a la tarea de expandir su empresa a  nivel nacional y global "

  };
  
  constructor(public MessageService: MessageService) { }

  contactForm(form) {
    this.MessageService.sendMessage(form).subscribe(() => {
    alert("cita enviada " ) 
     
    })
     
    }
    
}
