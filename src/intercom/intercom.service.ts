// intercom.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class IntercomService {
  // Canvas inicial (equivalente a initialCanvas)
  getInitialCanvas() {
    return {
      canvas: {
        content: {
          components: [
            {
              type: 'text',
              id: 'feedback',
              text: 'Déjenos sus comentarios:',
              align: 'center',
              style: 'header',
            },
            {
              type: 'textarea',
              id: 'description',
              label: 'Descripción',
              placeholder: '',
            },
            {
              type: 'single-select',
              id: 'csat',
              label: '¿Cómo calificaría su satisfacción con nuestro producto?',
              options: [
                { type: 'option', id: 'insatisfecho', text: 'Insatisfecho' },
                { type: 'option', id: 'neutral', text: 'Neutral' },
                { type: 'option', id: 'satisfecho', text: 'Satisfecho' },
              ],
            },
            {
              type: 'button',
              label: 'Enviar',
              style: 'primary',
              id: 'submit_button',
              action: {
                type: 'submit',
              },
            },
          ],
        },
      },
    };
  }

  // Canvas final (equivalente a finalCanvas)
  getFinalCanvas() {
    return {
      canvas: {
        content: {
          components: [
            {
              type: 'text',
              id: 'gracias',
              text: '¡Gracias por tus comentarios!',
              align: 'center',
              style: 'header',
            },
            {
              type: 'button',
              label: 'Enviar otro',
              style: 'primary',
              id: 'refresh_button',
              action: {
                type: 'submit',
              },
            },
          ],
        },
      },
    };
  }
}
