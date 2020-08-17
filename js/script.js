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

function qtyChange(current_node) {
  console.log("qtyChange");
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
