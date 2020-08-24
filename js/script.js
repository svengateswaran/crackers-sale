function CalculateTotal() {
  var content_table = document.getElementById("content");
  var qty_total = 0;
  var amount_total = 0;
  var num_rows = content_table.rows.length;
  for (var i = 1; i < num_rows - 3; i++) {
    qty_cell = content_table.rows[i].cells[4].childNodes[0].value;
    amount_cell = content_table.rows[i].cells[5].innerHTML;
    if (qty_cell != "" && amount_cell != "") {
      qty_total += parseInt(qty_cell);
      amount_total += parseFloat(amount_cell);
    }
  }

  content_table.rows[num_rows-3].cells[1].innerHTML = qty_total;
  content_table.rows[num_rows-3].cells[2].innerHTML = amount_total.toFixed(2);

  var discount = 20 / 100.0;
  var discount_amount = discount * amount_total;
  var discount_total = amount_total - discount_amount;
  content_table.rows[num_rows-2].cells[1].innerHTML = discount_amount.toFixed(2);
  content_table.rows[num_rows-1].cells[1].innerHTML = discount_total.toFixed(2) ;
}

function QuantityChange(current_node) {
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
  document.getElementById(disapper_div).style.display = "None";
  document.getElementById(appear_div).style.display = "block";
}

function CopyRowFromContentToCart(content_row, cart_row) {
  for (var i = 0; i < content_row.cells.length; i++) {
    cart_row_cell = cart_row.insertCell(i);
    if (i != 1)  {
      cart_row_cell.classList.add("numbers");
    }
    if (i == 4) {
      cart_row_cell.innerHTML = content_row.cells[i].childNodes[0].value;
    } else {
      cart_row_cell.innerHTML = content_row.cells[i].innerHTML;
    }
  }
}

function ClearCart() {
  var cart_table = document.getElementById("cart-table");
  var num_cart_rows = cart_table.rows.length;
  for (var i = 1; i < num_cart_rows - 3; i++) {
    cart_table.deleteRow(1);
  }
}

function AddToCart() {
  ToggleDivDisplay("product-list", "cart");

  ClearCart();

  var content_table = document.getElementById("content");
  var cart_table = document.getElementById("cart-table");

  var num_content_rows = content_table.rows.length;
  for (var i = 1; i < num_content_rows - 3; i++) {
    var amount_cell = content_table.rows[i].cells[5].innerHTML;
    if (amount_cell != "") {
      var content_row = content_table.rows[i];
      var cart_row = cart_table.insertRow(cart_table.rows.length-3);
      CopyRowFromContentToCart(content_row, cart_row);
    }
  }

  var num_cart_rows = cart_table.rows.length;

  cart_table.rows[num_cart_rows-3].cells[1].innerHTML =
                  content_table.rows[num_content_rows-3].cells[1].innerHTML;
  cart_table.rows[num_cart_rows-3].cells[2].innerHTML =
                  content_table.rows[num_content_rows-3].cells[2].innerHTML;

  cart_table.rows[num_cart_rows-2].cells[1].innerHTML =
                  content_table.rows[num_content_rows-2].cells[1].innerHTML;
  cart_table.rows[num_cart_rows-1].cells[1].innerHTML =
                  content_table.rows[num_content_rows-1].cells[1].innerHTML;
}

function Checkout() {
  ToggleDivDisplay("cart", "contact");
  var cart_table = document.getElementById("cart-table")
  var cart_table_json = JSON.stringify(cart_table);
  console.log(cart_table_json);
}

function PlaceOrder() {
  ToggleDivDisplay("contact", "result");

  var cart_table = $("#cart-table");
  var cart_table_str = $(cart_table[0]).clone().wrap('<div>').parent().html();

  var customer_name = document.getElementById("customer-name").value;
  var customer_phone = document.getElementById("customer-phone").value;
  var customer_email = document.getElementById("customer-email").value;
  var customer_address = document.getElementById("customer-address").value;

  $.post("order.php", { 
    name: customer_name,
    phone: customer_phone,
    email: customer_email,
    address: customer_address,
    cart_table: cart_table_str,
    }, function(data, status){
      $("#order-status").html(data);
  });
}

function GoToHome() {
  document.getElementById("product-list").style.display = "block";
  document.getElementById("cart").style.display = "None";
  document.getElementById("contact").style.display = "None";
  document.getElementById("result").style.display = "None";
}

function GoToCart() {
  document.getElementById("product-list").style.display = "None";
  document.getElementById("cart").style.display = "block";
  document.getElementById("contact").style.display = "None";
  document.getElementById("result").style.display = "None";
}