import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../service/cart-service.service';
import {HttpServiceService} from '../http-service.service';
import {ActivatedRoute} from  '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList :any;
  productsList:any;
 id:any;

  constructor(private cartService:CartServiceService,private http:HttpServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
     // let cid=this.route.snapshot.paramMap.get('id');
      let request ={
        "cat_id":this.route.snapshot.paramMap.get('id')
        
       
        
      }
      //console.log(this.category1);
     this.http.postRequestWithToken('api/product/getProductsByCategory',request).subscribe(data=>{
        this.productsList = data
        if(this.productsList.length == 0){
          alert("No Product is found..");
        }
     },error=>{
       alert("Error in login "+error);
     })
   //this.route.queryParams.filter(params => params.category)
  //  this.route.queryParams
  //  .subscribe(params => {
  //    console.log(params); // { orderby: "price" }
  //    this.category1 = params.name;
     //console.log(this.category1); // price
  //  });
 
  }
  

  addCart(cartProductObj){
    var cartObj = {
      "productId":cartProductObj.id,
      "qty":"1",
      "price":cartProductObj.price
    }
    this.cartService.addCart(cartObj);
  }
 

}