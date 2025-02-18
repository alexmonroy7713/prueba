// intercom.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { IntercomService } from './intercom.service';


@Controller('intercom')
export class IntercomController {
  constructor(private readonly intercomService: IntercomService) {}

  // Endpoint que Intercom llama para "inicializar" la app
  @Post('initialize')
  initialize() {
 
    // Retornamos el Canvas inicial
    return this.intercomService.getInitialCanvas();
  }

  // Endpoint que Intercom llama cuando se hace "submit" desde algún botón
  @Post('submit')
   async submit(@Body() body: any) {
    console.log('Datos recibidos de Intercom:', body);

    const feedbackData = {
      patientName: body.input_values?.patient_name || '',
      symptoms: body.input_values?.symptoms || '',
      disease: body.input_values?.disease || '',
      prescription: body.input_values?.prescription || '',
      componentId: body.component_id,
    };

    // Enviar feedback al frontend en tiempo real
    // body.component_id nos indica qué botón se presionó
    // Si viene del botón "Enviar", devolvemos el Canvas final
     if (body.component_id === 'submit_button'){
       await  this.intercomService.processFeedback(feedbackData);
       return this.intercomService.getFinalCanvas();
       

    }
    
    else {
      // Si viene del botón "Enviar otro" u otro componente, reiniciamos
      return this.intercomService.getInitialCanvas();
    }
  }
  
}
