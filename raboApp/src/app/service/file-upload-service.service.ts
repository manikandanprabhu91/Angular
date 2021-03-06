import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import * as serverUrl from '../config'


@Injectable()
export class FileUploadServiceService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/from-data'
    })
  };
  
  constructor(private http: HttpClient) {}
   uploadFile(uploadFile:File){
    let apiUrl=serverUrl+"/api/repo/assignment/v1/auth/csv-file-upload"
    let fileData = new FormData();
    fileData.append('file',uploadFile);
      return this.http.post(apiUrl,fileData,this.httpOptions)
  }
}
