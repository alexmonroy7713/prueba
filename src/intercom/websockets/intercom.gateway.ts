import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable() // 👈 Asegúrate de agregar esta línea
@WebSocketGateway({
  cors: {
    origin: '*', // Permitir acceso desde cualquier frontend
  },
})
export class IntercomGateway {
  @WebSocketServer()
  server: Server;

  sendFeedback(data: any) {
    this.server.emit('newFeedback', data);
  }
}
