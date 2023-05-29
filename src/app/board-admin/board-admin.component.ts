import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  usuarios: Usuario[] = [];
  showAdminButton = false;

  constructor(public usuarioService: UserService, private token: TokenStorageService){}

  ngOnInit(): void {
    this.usuarioService.getAdminBoard().subscribe((data: any) => {
      if (Array.isArray(data) && data.length > 0) {
        // La respuesta es un array válido
        this.usuarios = JSON.parse(data[0]);
      } else {
        // La respuesta es un objeto individual
        this.usuarios = JSON.parse(data);
      }
      console.log(this.usuarios);
    });
  }
}
