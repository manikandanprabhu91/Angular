import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable()
export class FileUploadServiceService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/from-data'
    })
  };
  
url:any="http://localhost:9080/api/repo/assignment/v1/auth/csv-file-upload";
  constructor(private http: HttpClient) {
   
   }
   getTableDetails(uploadFile:File){
    console.log(uploadFile)
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('key', "file");
    console.log(formData)
      return this.http.post(this.url,uploadFile,this.httpOptions)
  }
}
