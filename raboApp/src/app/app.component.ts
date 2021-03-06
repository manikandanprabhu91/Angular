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
  responseData:any
  constructor(private FileUploadServiceService:FileUploadServiceService){}
  ngOnInit(){

  }
  fileUpload(file:any){
    const target: DataTransfer = <DataTransfer>(file.target);
    this.uploadFile = target.files[0];
    console.log(file);
  }
  fileSubmit(){
   this.FileUploadServiceService.uploadFile(this.uploadFile).subscribe(data=>{
     this.responseData=data;
    this.tableShow=true
    })
    
  }
}
