// intercom.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { IntercomService } from './intercom.service';
import { ExtraesDatos } from 'src/funcion';

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

    // Extraer los valores enviados por el usuario
    const patientName = body.input_values?.patient_name || 'Sin nombre';
    const symptoms = body.input_values?.symptoms || 'No especificado';
    const disease = body.input_values?.disease || 'No especificado';
    const prescription = body.input_values?.prescription || 'No especificado';
    const componentId = body.component_id;

    const datosAExtraer = {
      patientName,
      symptoms,
      disease,
      prescription,
      componentId
    };
    if (body.component_id === 'submit_button') {
      const extraidos = ExtraesDatos(datosAExtraer);
    }

      
 

 

    // body.component_id nos indica qué botón se presionó
    if (body.component_id === 'submit_button') {
      // Si viene del botón "Enviar", devolvemos el Canvas final
      return this.intercomService.getFinalCanvas();
    } else {
      // Si viene del botón "Enviar otro" u otro componente, reiniciamos
      return this.intercomService.getInitialCanvas();
    }
  }
  
}
