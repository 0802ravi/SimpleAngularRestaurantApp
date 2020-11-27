import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
alert:boolean=false
  constructor(private rseto :RestoService) { }
  addResto=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(' '),
    address: new FormControl(' ')
  })

  ngOnInit(): void {
  }
  collectResto()
  {
    
    this.rseto.saveResto(this.addResto.value).subscribe((result)=>{this.alert=true
    })
    
  }
  closeAlert()
  {
    this.alert=false
    this.addResto.reset({})
  }

}
