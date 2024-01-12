import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  code = '';
  output='';
  codification(){
    window.alert('-'+ this.code +'-');
    const authEndpoint = `http://127.0.0.1:8000/ejecutar_programa?codigo=${this.code}`;
    // Encabezados para la solicitud POST
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Realizar la solicitud POST para obtener el token
    this.http.post(authEndpoint,  httpOptions)
      .subscribe((response: any) => {
        response.resultado=this.output;
      }, (error) => {
        console.error('Error:', error);
      });
  }
}
