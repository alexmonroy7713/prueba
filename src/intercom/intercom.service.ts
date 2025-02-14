import { Injectable } from '@nestjs/common';
  

 
 
@Injectable()

export class IntercomService {

 
  
  getInitialCanvas() {
    return {
      canvas: {
        content: {
          components: [
            {
              type: 'text',
              id: 'header',
              text: '🩺 Eleonor - Registro Médico',
              align: 'center',
              style: 'header',
            },
            {
              type: 'input',
              id: 'patient_name',
              label: '👤 Nombre del paciente',
              placeholder: 'Ingrese el nombre completo',
            },
            {
              type: 'textarea',
              id: 'symptoms',
              label: '📝 Síntomas y diagnóstico',
              placeholder: 'Describa los síntomas y diagnóstico del paciente...',
            },
            {
              type: 'single-select',
              id: 'disease',
              label: '🏥 Enfermedad diagnosticada',
              options: [
                { type: 'option', id: 'gripe', text: 'Gripe' },
                { type: 'option', id: 'diabetes', text: 'Diabetes' },
                { type: 'option', id: 'hipertension', text: 'Hipertensión' },
                { type: 'option', id: 'asma', text: 'Asma' },
                { type: 'option', id: 'covid19', text: 'COVID-19' },
              ],
            },
            {
              type: 'textarea',
              id: 'prescription',
              label: '💊 Medicación recetada',
              placeholder: 'Escriba la medicación, dosis y duración...',
            },
            {
              type: 'button',
              label: '🎤 Grabar Nota de Voz',
              style: 'secondary',
              id: 'voice_record',
              action: {
                type: 'submit',
              },
            },
            {
              type: 'button',
              label: '📝 Guardar Receta',
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

      mensaje :"ss",
      
      canvas: {
        content: {
          components: [
            {
              type: 'text',
              id: 'confirmation',
              text: '✅ Receta guardada con éxito',
              align: 'center',
              style: 'header',
            },
            {
              type: 'button',
              label: '➕ Crear Nueva Receta',
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
