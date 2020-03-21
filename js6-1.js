const filter = document.querySelector("#filter");  
filter.addEventListener('keyup', filterCustomer ) ;  

console.log("filter");
document.addEventListener('DOMContentLoaded',CustomerC1); 
document.getElementById("targt").addEventListener("click",function(e){
  e.preventDefault();
  const customerUI = new CustomerUI() ;
  LocalStorage.removeCustomer(e.target.parentElement.previousElementSibling.textContent,e.target)
  customerUI.deletTheCustomer(e.target);
  //customerUI.showAlert("تم حذف العميل بنجاح" , "success" )
  console.log(e.target.parentElement.previousElementSibling.textContent)

});

class LocalStorage {

  static L(){
  let Customer;   
        if (localStorage.getItem('Customer') === null ) {  
          Customer = [];    
        } else{                
          Customer = JSON.parse(localStorage.getItem('Customer')) ; 
        };
        console.log(Customer.length)
        return Customer.length;
      }

    static getCustomer(){
      let Customer;   
      if (localStorage.getItem('Customer') === null ) {  
        Customer = [];    
      } else{                
        Customer = JSON.parse(localStorage.getItem('Customer')) ; 
      };
      return Customer ;
    }

    static displayCustomer(){
        const Customers = LocalStorage.getCustomer();
        const CustomersUI = new CustomerUI();
        Customers.forEach(function(Customer){
          CustomersUI.addCustomerToList(Customer);
        })
    }

    static addCustomer(Customer){
      const Customers = LocalStorage.getCustomer();
      Customers.push(Customer);
      localStorage.setItem("Customer",JSON.stringify(Customers));
    }

    static removeCustomer(IDnumber,target){
      
      if (target.className === "Cbtn Cbtn-danger jahez") {
        const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.IDnumber == IDnumber ){
          Customer.status = "جاهز"; 
        }
        localStorage.setItem("Customer",JSON.stringify(Customers));
        window.location.reload();

      });
      } 
      if (target.className === "Cbtn Cbtn-danger tmaltslen") {
        const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.IDnumber == IDnumber ){
          Customer.status = "تم التسليم"; 
        }
        localStorage.setItem("Customer",JSON.stringify(Customers));
        window.location.reload();
      });
      } 
      

    }

   

}
var IDnumber = LocalStorage.L();
console.log(IDnumber);
class Customer {
constructor (name,mobile,price1,price2,priceB,theDate,DeliveryIn,Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Details9,Details10,Details11,Notes,status,IDnumber){
  let d = new Date(); ///
  let mm = d.getMonth() +1 ;
  let dd = d.getDate() ;
  let yy = d.getFullYear();
  let ms = " - ";
  let ss = ":";
  let sm = " / ";
  let t = d.getHours() ;
  let mn = d.getMinutes() ;
  let theDatee = dd + sm + mm + sm + yy ;
  //  console.log(theDate) ;
  let i = document.getElementById("price1").value ;
  let l = document.getElementById("price2").value; 
  let o = document.getElementById("priceB") ; 
  let priceB1 =  o.value = i - l;
  var IDnumber = LocalStorage.L();

  

  this.name = name;
  this.mobile = mobile;
  this.price1 = price1;
  this.price2 = price2;
  this.priceB = priceB1;
  this.theDate = theDatee;
  this.DeliveryIn = DeliveryIn;
  this.Details1 = Details1;
  this.Details2 = Details2;
  this.Details3 = Details3;
  this.Details4 = Details4;
  this.Details5 = Details5;
  this.Details6 = Details6;
  this.Details7 = Details7;
  this.Details8 = Details8;
  this.Details9 = Details9;
  this.Details10 = Details10;
  this.Details11 = Details11;
  this.Notes = Notes ; 
  this.status = "قيد التجهيز";
  this.IDnumber = IDnumber;

} };
class CustomerUI {
  addCustomerToList(theCustomer){
    const div = document.getElementById("targt");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div") ;
    const div4 = document.createElement("div");
    div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
    div2.className = "tile" ;
    div3.className = "wrapper" 
    
    div4.innerHTML = `<div class="header">${theCustomer.name}</div>
    <div class="dates">
        <div class="start"> <strong>تاريخ التسليم</strong> ${theCustomer.DeliveryIn}</div>
        <div class="ends"><strong>تاريخ الطلب</strong> ${theCustomer.theDate}</div>
    </div>
    <div class="stats">
        <div><strong>العدد</strong> ${theCustomer.Details1}</div>
        <div><strong>نوع القماش</strong> ${theCustomer.Details8}</div>
        <div><strong>الطول</strong> ${theCustomer.Details2}</div>
        <div><strong>الكتف</strong> ${theCustomer.Details3}</div>
        <div><strong>طول الكم</strong> ${theCustomer.Details4}</div>
        <div><strong>وسع الصدر</strong>${theCustomer.Details5}</div>
        <div><strong>الرقبة</strong>${theCustomer.Details6}</div>
        <div><strong>وسع اليدين</strong>${theCustomer.Details7}</div>
        <div><strong>الظهر</strong>${theCustomer.Details9}</div>
        <div><strong>نوع الرقبة</strong>${theCustomer.Details10}</div>
        <div><strong>نوع الصدر</strong>${theCustomer.Details11}</div>
        
        <div><strong>حالة الطلب</strong> <p class="blllokk" > ${theCustomer.status}</p></div>
    </div>
    
    <div class="stats">
        <div><strong class="blllok" >الباقي</strong>${theCustomer.priceB}</div>
        <div><strong>العربون</strong> ${theCustomer.price2}</div>
        <div><strong>المبلغ</strong>${theCustomer.price1}</div>
    </div>
    <div class="header">${theCustomer.Notes}</div>
    <div class="header">${theCustomer.mobile}</div>
    <div class="header">${theCustomer.IDnumber}</div>

    
    <div class="footer">
        <a href="#" id="jahez" class="Cbtn Cbtn-primary jahez">جاهز</a>
        <a href="#" id="prent" class="Cbtn Cbtn-primary tmaltslen">تم التسليم</a>
        <a href="#" id="prent" class="Cbtn Cbtn-primary">طباعة</a>
    
    </div>` ;
   
    
    div.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
  }
  ClearValue(){
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("price1").value = ""; 
    document.getElementById("price2").value = ""; 
    document.getElementById("priceB").value= "";
    document.getElementById("theDate").value = ""; 
    document.getElementById("DeliveryIn").value = "";
    document.getElementById("Details1").value = "";
    document.getElementById("Details2").value = "";
    document.getElementById("Details3").value = "";
    document.getElementById("Details4").value = "";
    document.getElementById("Details5").value = "";
    document.getElementById("Details6").value = "";
    document.getElementById("Details7").value = "";
    document.getElementById("Details8").value = "";
    document.getElementById("Details9").value = "";
    document.getElementById("Details10").value = "";
    document.getElementById("Details11").value = "";
    document.getElementById("Notes").value = "";
  }
  showAlert(message,className){
    const div = document.createElement("div");
    const con = document.querySelector(".container")
    const form = document.querySelector("#student-form")

    div.className = `alrt ${className}`;
    div.appendChild(document.createTextNode(message))
    con.insertBefore(div,form)

    setTimeout(function(){
        document.querySelector(".alrt").remove();

    },3000)

  }

  deletTheCustomer(target) {
      if (target.className === "Cbtn Cbtn-danger deleteC") {
        target.parentElement.parentElement.remove()      
      } 
      if (target.className === "Cbtn Cbtn-primary jahez") {
        console.log("olll")
      } 

  }


}



function CustomerC1(){
  const are = document.getElementById("cs1"); 
  if (are.innerHTML === "الطلبات التي قيد التجهيز" ) { 
    let Customer;   
    console.log("if f3ln")
    if (localStorage.getItem('Customer') === null ) {  
      Customer = [];   
    } else{                
      Customer = JSON.parse(localStorage.getItem('Customer')) ;  
    };
    const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.status == "قيد التجهيز" ){
          const div = document.getElementById("targt");
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const div3 = document.createElement("div") ;
          const div4 = document.createElement("div");
          div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
          div2.className = "tile" ;
          div3.className = "wrapper" 
          
          div4.innerHTML = `<div class="header">${Customer.name}</div>
          <div class="dates">
              <div class="start"> <strong>تاريخ التسليم</strong> ${Customer.DeliveryIn}</div>
              <div class="ends"><strong>تاريخ الطلب</strong> ${Customer.theDate}</div>
          </div>
          <div class="stats">
              <div><strong>العدد</strong> ${Customer.Details1}</div>
              <div><strong>نوع القماش</strong> ${Customer.Details8}</div>
              <div><strong>الطول</strong> ${Customer.Details2}</div>
              <div><strong>الكتف</strong> ${Customer.Details3}</div>
              <div><strong>طول الكم</strong> ${Customer.Details4}</div>
              <div><strong>وسع الصدر</strong>${Customer.Details5}</div>
              <div><strong>الرقبة</strong>${Customer.Details6}</div>
              <div><strong>وسع اليدين</strong>${Customer.Details7}</div>
              <div><strong>الظهر</strong>${Customer.Details9}</div>
              <div><strong>نوع الرقبة</strong>${Customer.Details10}</div>
              <div><strong>نوع الصدر</strong>${Customer.Details11}</div>
              
              <div><strong>حالة الطلب</strong> <p class="blllokk" > ${Customer.status}</p></div>
          </div>
          
          <div class="stats">
              <div><strong class="blllok" >الباقي</strong>${Customer.priceB}</div>
              <div><strong>العربون</strong> ${Customer.price2}</div>
              <div><strong>المبلغ</strong>${Customer.price1}</div>
          </div>
          <div class="header">${Customer.Notes}</div>
          <div class="header">${Customer.mobile}</div>
          <div class="header">${Customer.IDnumber}</div>
          
          
          <div class="footer">
              <a href="#" id="jahez" class="Cbtn Cbtn-danger jahez">جاهز</a>
              <a href="#" id="prent" class="Cbtn Cbtn-primary">طباعة</a>
          
          </div>` ;
          
          
          div.appendChild(div1);
          div1.appendChild(div2);
          div2.appendChild(div3);
          div3.appendChild(div4);          

        }
        localStorage.setItem("Customer",JSON.stringify(Customers));

      });
    

  };
  if (are.innerHTML === "الطلبات الجاهزة" ) { 
    let Customer;   
    if (localStorage.getItem('Customer') === null ) {  
      Customer = [];   
    } else{                
      Customer = JSON.parse(localStorage.getItem('Customer')) ;  
    };
    const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.status == "جاهز" ){
          const div = document.getElementById("targt");
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const div3 = document.createElement("div") ;
          const div4 = document.createElement("div");
          div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
          div2.className = "tile" ;
          div3.className = "wrapper" 
          
          div4.innerHTML = `<div class="header">${Customer.name}</div>
          <div class="dates">
              <div class="start"> <strong>تاريخ التسليم</strong> ${Customer.DeliveryIn}</div>
              <div class="ends"><strong>تاريخ الطلب</strong> ${Customer.theDate}</div>
          </div>
          <div class="stats">
              <div><strong>العدد</strong> ${Customer.Details1}</div>
              <div><strong>نوع القماش</strong> ${Customer.Details8}</div>
              <div><strong>الطول</strong> ${Customer.Details2}</div>
              <div><strong>الكتف</strong> ${Customer.Details3}</div>
              <div><strong>طول الكم</strong> ${Customer.Details4}</div>
              <div><strong>وسع الصدر</strong>${Customer.Details5}</div>
              <div><strong>الرقبة</strong>${Customer.Details6}</div>
              <div><strong>وسع اليدين</strong>${Customer.Details7}</div>
              <div><strong>الظهر</strong>${Customer.Details9}</div>
              <div><strong>نوع الرقبة</strong>${Customer.Details10}</div>
              <div><strong>نوع الصدر</strong>${Customer.Details11}</div>
              
              <div><strong>حالة الطلب</strong> <p class="blllokk" > ${Customer.status}</p></div>
          </div>
          
          <div class="stats">
              <div><strong class="blllok" >الباقي</strong>${Customer.priceB}</div>
              <div><strong>العربون</strong> ${Customer.price2}</div>
              <div><strong>المبلغ</strong>${Customer.price1}</div>
          </div>
          <div class="header">${Customer.Notes}</div>
          <div class="header">${Customer.mobile}</div>
          <div class="header">${Customer.IDnumber}</div>
          
          
          <div class="footer">
              <a href="#" id="prent" class="Cbtn Cbtn-danger tmaltslen">تم التسليم</a>
              <a href="#" id="prent" class="Cbtn Cbtn-primary">طباعة</a>
          
          </div>` ;
          
          
          div.appendChild(div1);
          div1.appendChild(div2);
          div2.appendChild(div3);
          div3.appendChild(div4);          

        }
        
        localStorage.setItem("Customer",JSON.stringify(Customers));

      });
    

  };
  if (are.innerHTML === "الطلبات التي تم تسليمها" ) { 
    let Customer;   
    if (localStorage.getItem('Customer') === null ) {  
      Customer = [];   
    } else{                
      Customer = JSON.parse(localStorage.getItem('Customer')) ;  
    };
    const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.status == "تم التسليم" ){
          const div = document.getElementById("targt");
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const div3 = document.createElement("div") ;
          const div4 = document.createElement("div");
          div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
          div2.className = "tile" ;
          div3.className = "wrapper" 
          
          div4.innerHTML = `<div class="header">${Customer.name}</div>
          <div class="dates">
              <div class="start"> <strong>تاريخ التسليم</strong> ${Customer.DeliveryIn}</div>
              <div class="ends"><strong>تاريخ الطلب</strong> ${Customer.theDate}</div>
          </div>
          <div class="stats">
              <div><strong>العدد</strong> ${Customer.Details1}</div>
              <div><strong>نوع القماش</strong> ${Customer.Details8}</div>
              <div><strong>الطول</strong> ${Customer.Details2}</div>
              <div><strong>الكتف</strong> ${Customer.Details3}</div>
              <div><strong>طول الكم</strong> ${Customer.Details4}</div>
              <div><strong>وسع الصدر</strong>${Customer.Details5}</div>
              <div><strong>الرقبة</strong>${Customer.Details6}</div>
              <div><strong>وسع اليدين</strong>${Customer.Details7}</div>
              <div><strong>الظهر</strong>${Customer.Details9}</div>
              <div><strong>نوع الرقبة</strong>${Customer.Details10}</div>
              <div><strong>نوع الصدر</strong>${Customer.Details11}</div>
              
              <div><strong>حالة الطلب</strong> <p class="blllokk" > ${Customer.status}</p></div>
          </div>
          
          <div class="stats">
              <div><strong class="blllok" >الباقي</strong>${Customer.priceB}</div>
              <div><strong>العربون</strong> ${Customer.price2}</div>
              <div><strong>المبلغ</strong>${Customer.price1}</div>
          </div>
          <div class="header">${Customer.Notes}</div>
          <div class="header">${Customer.mobile}</div>
          <div class="header">${Customer.IDnumber}</div>
          
          
          <div class="footer">

              <a href="#" id="prent" class="Cbtn Cbtn-primary">طباعة</a>
          
          </div>` ;
          
          
          div.appendChild(div1);
          div1.appendChild(div2);
          div2.appendChild(div3);
          div3.appendChild(div4);          

        }
        
        localStorage.setItem("Customer",JSON.stringify(Customers));

      });
    

  };
  if (are.innerHTML === "جميع الطلبات" ) { 
    let Customer;   
    if (localStorage.getItem('Customer') === null ) {  
      Customer = [];   
    } else{                
      Customer = JSON.parse(localStorage.getItem('Customer')) ;  
    };
    const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
  
          const div = document.getElementById("targt");
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const div3 = document.createElement("div") ;
          const div4 = document.createElement("div");
          div1.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
          div2.className = "tile" ;
          div3.className = "wrapper" 
          
          div4.innerHTML = `<div class="header">${Customer.name}</div>
          <div class="dates">
              <div class="start"> <strong>تاريخ التسليم</strong> ${Customer.DeliveryIn}</div>
              <div class="ends"><strong>تاريخ الطلب</strong> ${Customer.theDate}</div>
          </div>
          <div class="stats">
              <div><strong>العدد</strong> ${Customer.Details1}</div>
              <div><strong>نوع القماش</strong> ${Customer.Details8}</div>
              <div><strong>الطول</strong> ${Customer.Details2}</div>
              <div><strong>الكتف</strong> ${Customer.Details3}</div>
              <div><strong>طول الكم</strong> ${Customer.Details4}</div>
              <div><strong>وسع الصدر</strong>${Customer.Details5}</div>
              <div><strong>الرقبة</strong>${Customer.Details6}</div>
              <div><strong>وسع اليدين</strong>${Customer.Details7}</div>
              <div><strong>الظهر</strong>${Customer.Details9}</div>
              <div><strong>نوع الرقبة</strong>${Customer.Details10}</div>
              <div><strong>نوع الصدر</strong>${Customer.Details11}</div>
              
              <div><strong>حالة الطلب</strong> <p class="blllokk" > ${Customer.status}</p></div>
          </div>
          
          <div class="stats">
              <div><strong class="blllok" >الباقي</strong>${Customer.priceB}</div>
              <div><strong>العربون</strong> ${Customer.price2}</div>
              <div><strong>المبلغ</strong>${Customer.price1}</div>
          </div>
          <div class="header">${Customer.Notes}</div>
          <div class="header filter">${Customer.mobile}</div>
          <div class="header">${Customer.IDnumber}</div>
          
          
          <div class="footer">

              <a href="#" id="prent" class="Cbtn Cbtn-primary">طباعة</a>
          
          </div>` ;
          
          
          div.appendChild(div1);
          div1.appendChild(div2);
          div2.appendChild(div3);
          div3.appendChild(div4);          

     
        
        localStorage.setItem("Customer",JSON.stringify(Customers));

      });
    

  };
}

function filterCustomer(e) {  
  const keyFilte = e.target.value.toLowerCase();   
  document.querySelectorAll(".wrapper").forEach(function(customer){
    const itemText = customer.firstChild.textContent;
    if(itemText.indexOf(keyFilte) != -1 ){
      customer.style.display = "block";     //// اذا لم يجد تطابق اي ان النتيجة 0 فسوف يغير من السي اس اس العنصر ويخفيه 
      } else {                               
        customer.style.display = "none" ;   //// اذا لم وجد تطابق اي ان النتيجة 1 او اكثر فسوف يغير من السي اس اس العنصر ويظهره 
      }

  });
} ;