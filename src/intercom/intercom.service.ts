import { Injectable } from '@nestjs/common';
import { IntercomGateway } from './websockets/intercom.gateway';
import { getDiseases } from 'src/funcion';

  

 
 
@Injectable()

export class IntercomService {
  constructor(private readonly intercomGateway: IntercomGateway) {}

  // Método para procesar feedback y enviarlo al frontend en tiempo real
  processFeedback(feedback: any) {
    console.log('Nuevo feedback recibido:', feedback);
    this.intercomGateway.sendFeedback(feedback);
  }

  

 
  
async getInitialCanvas() {
  try {
    // Llamamos al endpoint para obtener enfermedades dinámicamente
    const diseases = await getDiseases();

    // Transformamos los datos en formato compatible con `options`
    const diseaseOptions = diseases.map((disease: any) => ({
      type: "option",
      id: disease.name.toLowerCase().replace(/\s+/g, "_"), 
      text: disease.name,
    // Mostrar más información
  }));

    return {
        canvas: {
            content: {
                components: [
                    {
                        type: "text",
                        id: "header",
                        text: "🩺 Eleonor - Registro Médico",
                        align: "center",
                        style: "header"
                    },
                    {
                        type: "input",
                        id: "patient_name",
                        label: "👤 Nombre del paciente",
                        placeholder: "Ingrese el nombre completo"
                    },
                    {
                        type: "textarea",
                        id: "symptoms",
                        label: "📝 Síntomas y diagnóstico",
                        placeholder: "Describa los síntomas y diagnóstico del paciente..."
                    },
                    {
                      type: "dropdown",
                      id: "disease",
                      label: "🏥 Enfermedad diagnosticada",
                      options: diseaseOptions,
                      
                  },
                 
                    {
                        type: "textarea",
                        id: "prescription",
                        label: "💊 Medicación recetada",
                        placeholder: "Escriba la medicación, dosis y duración..."
                    },
                    {
                        type: "button",
                        label: "🎤 Grabar Nota de Voz",
                        style: "secondary",
                        id: "voice_record",
                        action: {
                            type: "submit"
                        }
                    },
                    {
                        type: "button",
                        label: "📝 Guardar Receta",
                        style: "primary",
                        id: "submit_button",
                        action: {
                            type: "submit"
                        }
                    }
                ]
            }
        }
    };
} catch (error) {
    console.error("Error fetching diseases:", error);
    return { canvas: { content: { components: [] } } }; // En caso de error, retorna un canvas vacío
}

   

 

  }

  // Canvas final (equivalente a finalCanvas)
  getFinalCanvas() {
    return {

  
      
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
