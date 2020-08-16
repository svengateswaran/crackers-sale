function CalculateTotal() {
  var content_table = document.getElementById("content");
  var qty_total = 0;
  var amount_total = 0;
  var num_rows = content_table.rows.length;
  for (var i = 1; i < num_rows - 1; i++) {
    qty_cell = content_table.rows[i].cells[4].childNodes[0].value;
    amount_cell = content_table.rows[i].cells[5].innerHTML;
    if (qty_cell != "" && amount_cell != "") {
      qty_total += parseInt(qty_cell);
      amount_total += parseInt(amount_cell);
    }
  }

  qty_total_cell = content_table.rows[num_rows-1].cells[1];
  qty_total_cell.innerHTML = qty_total;
  amount_total_cell = content_table.rows[num_rows-1].cells[2];
  amount_total_cell.innerHTML = amount_total;
}

function qtyChange(current_node) {
  console.log("qtyChange");
  var childnodes = current_node.parentNode.parentNode.childNodes;
  var per_rate = parseInt(childnodes[childnodes.length-6].innerHTML);
  var qty_cell = current_node.value;
  var amount = childnodes[childnodes.length-2];
  if (qty_cell != "") {
    var qty = parseInt(qty_cell);
    amount.innerHTML = qty * per_rate;
  } else {
    amount.innerHTML = "";
  }
  CalculateTotal();
}
