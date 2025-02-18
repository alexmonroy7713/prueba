

export async function getDiseases(): Promise<any> {
    const url = "https://hook.us1.make.com/88w29h3pcwetqbbm16tp1sudcu8hdn1q"; // Reemplaza con la URL del Webhook de Make

   
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        let textResponse = await response.text();

        console.log("🔹 Respuesta cruda del Webhook:", JSON.stringify(textResponse));

        // Eliminar caracteres invisibles al inicio y al final
        textResponse = textResponse.replace(/^\uFEFF/, '').trim();

        // **Solución clave**: Eliminar caracteres invisibles después del cierre `]`
        textResponse = textResponse.replace(/[\u200B-\u200D\uFEFF]/g, '');

        console.log("🔹 Respuesta después de limpiar:", JSON.stringify(textResponse));

        return JSON.parse(textResponse);
    } catch (error) {
        console.error("❌ Error fetching diseases:", error);
        return []; // Manejo de error seguro
    }
}
