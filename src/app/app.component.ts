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
    this.code = `#importar <errno.h>  #importar <unistd.h>  #importar <stdio.h>  #importar <string.h>  #importar <stdlib.h>  #importar <signal.h>  #importar <pthread.h>   int a;  int b;      int main()  {	 b = 0;	 a = 2; 	 si ((a < 2))  	 { 		 a = 2; 	 } 	 sino 	 { 	 si(a==2) 	 { 			 a=a+2; 	 } 	 } 	 EscribirF(a); 		 b = 2; 		 	 EscribirF(b); 	 Escribir(a*b); 	 	 retornar 1;  }`;
  }
  para(){
    this.code =`#importar <errno.h>  #importar <unistd.h>  #importar <stdio.h>  #importar <string.h>  #importar <stdlib.h>  #importar <signal.h>  #importar <pthread.h>   int a;  int n;  int main()  { 	 a = 0; 	 n=3; 	 para(a=0;a<n;a=a+1;) 	 { 	  EscribirF(a) } 	   retornar 1;  }`;
  }
  mientras(){
    this.code =  '#importar <errno.h>  #importar <unistd.h>  #importar <stdio.h>  #importar <string.h>  #importar <stdlib.h>  #importar <signal.h>  #importar <pthread.h>    int i;   int main()  { 	 i=0; mientras(i<5) 	 { 	 i=i+1; 	 } 	 EscribirF(i); 	 	 return 1;  }';
  }
  print(){
    this.code =  `#importar <errno.h>  #importar <unistd.h>  #importar <stdio.h>  #importar <string.h>  #importar <stdlib.h>  #importar <signal.h>  #importar <pthread.h>    char x;   int main()  { 	  x = 'c'; 	 EscribirF(x);   return 1;  }`;
  }
  asignacion(){
    this.code =  `#importar <errno.h>  #importar <unistd.h>  #importar <stdio.h>  #importar <string.h>  #importar <stdlib.h>  #importar <signal.h>  #importar <pthread.h>   int a;  int b;  int main()  { 	  a=56; EscribirF(a); 	 b = 2; 	 int d; 	 d = a*b; 	 EscribirF(b); 	 Escribir(d); 	 return 1;  }`;
  }
  int(){
    this.code =  `#importar <errno.h>  #importar <unistd.h>  #importar <stdio.h>  #importar <string.h>  #importar <stdlib.h>  #importar <signal.h>  #importar <pthread.h>   int a;    int main()  { 	  a=56; EscribirF(a); 	 return 1;  }`;
  }
  stop(){
    this.code = '';
    this.output = '';
  }
}
