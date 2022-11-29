import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-firend',
  templateUrl: './view-firend.component.html',
  styleUrls: ['./view-firend.component.css']
})
export class ViewFirendComponent {

constructor(private api:ServiceService){

  api.fetchFriend().subscribe(

    (response)=>{

      this.friends = response;
    }
  )
}
  friends : any = []
  

}
