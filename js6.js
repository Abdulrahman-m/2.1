
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
      
      if (target.className === "Cbtn Cbtn-primary jahez") {
        const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.IDnumber == IDnumber ){
          Customer.status = "جاهز"; 
        }
        localStorage.setItem("Customer",JSON.stringify(Customers));

      });
      } 
      if (target.className === "Cbtn Cbtn-primary tmaltslen") {
        const Customers = LocalStorage.getCustomer();
      Customers.forEach(function(Customer){
        if(Customer.IDnumber == IDnumber ){
          Customer.status = "تم التسليم"; 
        }
        localStorage.setItem("Customer",JSON.stringify(Customers));

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


document.getElementById("student-form").addEventListener("submit",function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const price1 = document.getElementById("price1").value; 
  const price2 = document.getElementById("price2").value; 
  //const priceB = document.getElementById("priceB").value; 
  //const theDate = document.getElementById("theDate").value;
  const DeliveryIn = document.getElementById("DeliveryIn").value;
  const Details1 = document.getElementById("Details1").value;
  const Details2 = document.getElementById("Details2").value;
  const Details3 = document.getElementById("Details3").value;
  const Details4 = document.getElementById("Details4").value;
  const Details5 = document.getElementById("Details5").value;
  const Details6 = document.getElementById("Details6").value;
  const Details7 = document.getElementById("Details7").value;
  const Details8 = document.getElementById("Details8").value;
  const Details9 = document.getElementById("Details9").value;
  const Details10 = document.getElementById("Details10").value;
  const Details11 = document.getElementById("Details11").value;
  const Notes = document.getElementById("Notes").value;
  var IDnumber = LocalStorage.L();
  
  const theCustomer = new Customer(name,mobile,price1,price2,priceB,theDate,DeliveryIn,Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Details9,Details10,Details11,Notes,status,IDnumber);
  
  const customerUI = new CustomerUI() ;
  if (theCustomer.name === "" || theCustomer.mobile === "" || theCustomer.price1 === ""|| theCustomer.mobile === ""|| theCustomer.Details1 === ""|| theCustomer.Details2 === ""|| theCustomer.Details3 === ""|| theCustomer.Details4 === ""|| theCustomer.Details5 === ""|| theCustomer.Details6 === ""|| theCustomer.Details7 === ""|| theCustomer.Details8 === ""|| theCustomer.Details9 === ""|| theCustomer.Details10 === ""|| theCustomer.Details11 === "") {     
    customerUI.showAlert("الرجاء اضافة كامل البيانات " , "error" )
  } else {
  customerUI.addCustomerToList(theCustomer);
 /// LocalStorage.displayCustomer()  ///  عرض جميع العملاء
 customerUI.ClearValue();    //// دالة تنظيف الفاليو بعد اضافة البيانات 
  LocalStorage.addCustomer(theCustomer);
  ///addDataLocalStorage(theCustomer);
  customerUI.showAlert("تم اضافة بيانات العميل بنجاح بنجاح " , "success" );

  console.log(theCustomer);
  };
  });
  

document.getElementById("targt").addEventListener("click",function(e){
  e.preventDefault();
  const customerUI = new CustomerUI() ;
  LocalStorage.removeCustomer(e.target.parentElement.previousElementSibling.textContent,e.target)
  customerUI.deletTheCustomer(e.target);
  customerUI.showAlert("تم حذف العميل بنجاح" , "success" )
  console.log(e.target.parentElement.previousElementSibling.textContent)

});





