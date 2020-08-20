function CalculateTotal() {
  var content_table = document.getElementById("content");
  var qty_total = 0;
  var amount_total = 0;
  var num_rows = content_table.rows.length;
  for (var i = 1; i < num_rows - 3; i++) {
    console.log(content_table.rows[i].cells[4].childNodes.length);
    qty_cell = content_table.rows[i].cells[4].childNodes[0].value;
    amount_cell = content_table.rows[i].cells[5].innerHTML;
    if (qty_cell != "" && amount_cell != "") {
      qty_total += parseInt(qty_cell);
      amount_total += parseFloat(amount_cell);
    }
  }

  console.log(content_table.rows[num_rows-3].cells[1].tagName);
  content_table.rows[num_rows-3].cells[1].innerHTML = qty_total;
  content_table.rows[num_rows-3].cells[2].innerHTML = amount_total.toFixed(2);

  var discount = 20 / 100.0;
  var discount_amount = discount * amount_total;
  var discount_total = amount_total - discount_amount;
  content_table.rows[num_rows-2].cells[1].innerHTML = discount_amount.toFixed(2);
  content_table.rows[num_rows-1].cells[1].innerHTML = discount_total.toFixed(2) ;
}

function QuantityChange(current_node) {
  console.log("QuantityChange");
  var childnodes = current_node.parentNode.parentNode.childNodes;
  var per_rate = parseFloat(childnodes[childnodes.length-6].innerHTML);
  var qty_cell = current_node.value;
  var amount_cell = childnodes[childnodes.length-2];
  if (qty_cell != "") {
    var qty = parseFloat(qty_cell);
    var amount = qty * per_rate;
    amount_cell.innerHTML = amount.toFixed(2);
  } else {
    amount_cell.innerHTML = "";
  }
  CalculateTotal();
}

function ToggleDivDisplay(disapper_div, appear_div) {
  /*
  document.getElementById(disapper_div).style.display = "None";
  document.getElementById(appear_div).style.display = "block";
  */
}

function AddToCart() {
  ToggleDivDisplay("product-list", "cart");
}

function Checkout() {
  ToggleDivDisplay("cart", "contact");
}

function PlaceOrder() {
  ToggleDivDisplay("contact", "result");
  var customer_name = document.getElementById("customer-name").value;
  var customer_phone = document.getElementById("customer-phone").value;
  var customer_email = document.getElementById("customer-email").value;
  var customer_address = document.getElementById("customer-address").value;
  $.post("order.php", { 
    name: customer_name,
    phone: customer_phone,
    email: customer_email,
    address: customer_address
    }, function(data, status){
      $("#order-status").html(data);
  });
}

function GoToHome() {
  /*
  document.getElementById("product-list").style.display = "block";
  document.getElementById("cart").style.display = "None";
  document.getElementById("contact").style.display = "None";
  document.getElementById("result").style.display = "None";
  */
}