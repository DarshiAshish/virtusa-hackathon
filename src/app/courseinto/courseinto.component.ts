import { HttpClient } from '@angular/common/http';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-courseinto',
  templateUrl: './courseinto.component.html',
  styleUrls: ['./courseinto.component.css']
})
export class CourseintoComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient,private s:DomSanitizer) { }
    //data="";
    data =   
    
    {
      "courseImg" : "data:image/png;base64,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",
      "courseName":"ANGULAR",
      "courseType":"Frontend",
      "courseYear":"2020",
      "courseVideourl":"https://www.youtube.com/embed/6wD4V0rvlDI",
      "coursePdfurl":""
    }
    // data!:any;
    address="";
  ngOnInit(): void {
    // console.log(this.router.snapshot.params);
    // this.address=this.router.snapshot.params.name;
    // this.http.get('http://localhost:8080/details/:'+this.address,{observe:"response"}).subscribe(
    //   (response)=>{
    //   this.data=response.body;
    //   }
    // );

  
 


  }
  safeUrl: any;
  getvideo(){
    // console.log("Inside getvieo"+this.data.courseVideourl);
    // return  (this.data.courseVideourl);
  return this.s.bypassSecurityTrustResourceUrl(this.data.courseVideourl);
    
  }

}
