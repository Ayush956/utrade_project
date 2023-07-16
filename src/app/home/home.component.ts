import { JsonservicesService } from '../jsonservices.service';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  d: number[] = [
    129.9,
    23312,
    443,
    123,
    124,
    125,
    126,
    126,
    126,
    126,
    126,
  ];
  name!:string;
  open!:number;
  previous_close_price!:number;
  day_high!:number;
  day_low!:number;
  price!:number;
  last_trade_time!:string;
  _week_high!:number;
  _week_low!:number;
  ltp!:number;

  jdata:any;
  myControl = new FormControl('');
  options: string[] = ['TSLA', 'AAPL', 'V','HDB','MSFT'];

  constructor(private jsondata:JsonservicesService){
  }
  
  getvalue(val:string){
    
    this.jsondata.getjsondata(val).subscribe((data:any) => {
    this.jdata = data.data;
    this.name = this.jdata[0].name;
    this.open = this.jdata[0].day_open;
    this.previous_close_price = this.jdata[0].previous_close_price;
    this.day_high = this.jdata[0].day_high;
    this.day_low = this.jdata[0].day_low;
    this.price = this.jdata[0].price;
    this.last_trade_time =this.jdata[0].last_trade_time;
    this._week_high = this.jdata[0]["52_week_high"];
    this._week_low = this.jdata[0]["52_week_low"];
    this.ltp = (Math.round(this.price / 0.05) * 0.05);
    this.ltp.toFixed(2);
    console.log(this.name)
  });
  // console.log(this.jdata)
  // console.log(val)
  }

  openstock:boolean=false;
  showMarketDepth: boolean = false;
  showscalper:boolean=false;
  openstockfun(){
    this.openstock=true;
    this.showMarketDepth=false;
  }
  openNewComponent(): void {
    this.showMarketDepth = true;
  }
  closenewcomponent():void{
    this.showMarketDepth=false;
  }
  openscalper():void{
    this.showscalper=true;
  }
  closescalper():void{
    this.showscalper=false;
  }

}

