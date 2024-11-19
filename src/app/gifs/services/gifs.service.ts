import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string='0AMRZ1U8DfyJmfsB9McEisk9NEHLZFyQ'
  private _historial:string[]=[];
  public resultados:any[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private htto:HttpClient){

  }

  buscarGifs(query:string=''){
    query=query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
    }
    console.log(this._historial);

    this.htto.get(`http://api.giphy.com/v1/gifs/search?api_key=`+this.apiKey+`&q=${query}&limit=10`)
    .subscribe((resp:any)=>{
      console.log(resp.data);
      this.resultados=resp.data;
    })
  }
}
