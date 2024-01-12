import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const url = 'http://127.0.0.1:8000/ejecutar_programa';

    const params = new HttpParams()
      .set('codigo', this.code);

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response && response.resultado) {
          this.output = response.resultado
        } else {
          console.error('Error:', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
      );
  }
  si(){
    this.code = this.code + 'si(condicion){codigo}';
  }
  sino(){
    this.code = this.code + 'sino{codigo}';
  }
  para(){
    this.code = this.code + 'para(condicion){codigo}';
  }
  mientras(){
    this.code = this.code + 'mietras(condicion){codigo}';
  }
  print(){
    this.code = this.code + 'print(variable);';
  }
  asignacion(){
    this.code = this.code + `variable:='a';`;
  }
  int(){
    this.code = this.code + `int a;`;
  }
  base(){
    this.code = this.code + `#importar <stdio.h> int main(){codigo}`;
  }
  stop(){
    this.code = '';
    this.output = '';
  }
}
