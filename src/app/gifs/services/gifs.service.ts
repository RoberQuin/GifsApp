import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string='0AMRZ1U8DfyJmfsB9McEisk9NEHLZFyQ'
  private servicioUrl:string='http://api.giphy.com/v1/gifs'
  private _historial:string[]=[];
  public resultados:Gif[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private htto:HttpClient){
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[];
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!);
    // }
    this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[];
  }

  buscarGifs(query:string=''){
    query=query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);

      //Grabar cosas en el localstorage
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    
    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',query)
    .set('limit','10');

    console.log(`${this.servicioUrl}/search`,{params})
    this.htto.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe((resp)=>{
      this.resultados=resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
  }
}
