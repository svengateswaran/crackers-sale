<html>
<head>
  <title>Crackers Sale</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/script.js"></script> 
</head>
<body>
  <header> 
  <img class="header_images header_image_left" src="images/sparklers_icon.png">
  PyroTech Traders
  <img id="discount_image" src="images/50_off.png">
  </header>
  <div id="container">
  <div id="content-container">
  <div id="product-list">
  <div class="heading"> Product List </div>
  <table id="content">
    <tr> <th>S.No</th> <th>Name of Crackers</th> <th>Num Pcs</th> <th>Per Rate</th> <th>Qty</th> <th>Amount</th> </tr>
    <tr> <td class="numbers">1</td>
         <td class="description">Standard Bomb Rockets</td>
         <td class="numbers">10</td>
         <td class="numbers">490 </td>
         <td class="numbers"><input class="in_qty" type="text" onkeyup="QuantityChange(this)" value="" autocomplete="off"> </td>
         <td class="numbers"></td>  </tr>

    <tr> <td class="numbers">2</td>
         <td class="description">Standard Crackling Sparklers - 50cm</td>
         <td class="numbers">20</td>
         <td class="numbers">778 </td>
         <td class="numbers"><input class="in_qty" type="text" onkeyup="QuantityChange(this)" value="" autocomplete="off"></td>
         <td class="numbers"></td>  </tr>
    <tr> <td colspan=4>Total</td>
         <td class="numbers"></td> <td class="numbers"></td> </tr>
    <tr> <td colspan=5>Discount (20%)</td>
         <td class="numbers"></td> </tr>
    <tr> <td colspan=5>Final Total</td>
         <td class="numbers"></td> </tr>
  </table>
  <input type="button" value="Add to Cart" onclick="AddToCart()">
  </div>
  
  <div id="cart">
  <div class="heading"> Cart </div>
  <table id="cart-table">
    <tr> <th>S.No</th> <th>Name of Crackers</th> <th>Num Pcs</th> <th>Per Rate</th> <th>Qty</th> <th>Amount</th> </tr>
    <tr> <td colspan=4>Total</td>
         <td class="numbers"></td> <td class="numbers"></td> </tr>
    <tr> <td colspan=5>Discount (20%)</td>
         <td class="numbers"></td> </tr>
    <tr> <td colspan=5>Final Total</td>
         <td class="numbers"></td> </tr>
  </table>
  
  <input type="button" value="Checkout" onclick="Checkout()">
  <br>
  <input type="button" value="Back To Home" onclick="GoToHome()">
  </div>

  <div id="contact">
  <div class="heading"> Contact Information </div>
    <table id="contact-table">
      <tr> <td> Name </td>
           <td> <input type="text" id="customer-name"> </td> </tr>
      <tr> <td> Phone </td>
           <td> <input type="text" id="customer-phone"> </td> </tr>
      <tr> <td> Email </td>
           <td> <input type="text" id="customer-email"> </td> </tr>
      <tr> <td> Address </td>
           <td> <input type="text" id="customer-address"> </td> </tr>
    </table>

    <input type="button" value="Place Order" onclick="PlaceOrder()">
    <br>
    <input type="button" value="Back To Home" onclick="GoToHome()">
    <input type="button" value="Back To Cart" onclick="GoToCart()">
  </div>

  <div id="result">
  <div class="heading"> Order Status </div>
     <div id="order-status">Order Status</div>
  <br>
  <input type="button" value="Back To Home" onclick="GoToHome()">
  </div>

  </div>
  </div>
  <footer> Copyrights © PyroTech Traders 2020</footer>

</body>
</html>
