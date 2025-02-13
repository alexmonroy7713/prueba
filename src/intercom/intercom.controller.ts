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
  submit(@Body() body: any) {
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
