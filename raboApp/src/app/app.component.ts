import { Component ,OnInit} from '@angular/core';
import {FileUploadServiceService} from './service/file-upload-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'raboApp';
  tableShow:boolean=false;
  uploadFile:any
  constructor(private FileUploadServiceService:FileUploadServiceService){}
  ngOnInit(){

  }
  fileUpload(file:File){
    //const formdata: FormData = new FormData();
    //formdata.append('file', file);
    this.uploadFile= file[0];
    console.log(file)

   
  }

  fileSubmit(){
   this.FileUploadServiceService.getTableDetails(this.uploadFile).subscribe(data=>{
    this.tableShow=true
    })
    
  }
}
