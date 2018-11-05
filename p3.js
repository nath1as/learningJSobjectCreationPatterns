var invoice = {
  phone: 3000,
  internet: 6500,
};
var payment = {
  phone: 1300,
  internet: 5500,
};
var invoiceTotal = invoice.phone + invoice.internet;
var paymentTotal = payment.phone + payment.internet;
var remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // 6800
console.log(remainingDue);         // 2700

function createInvoice(services) {
  services = services || {};
  var invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
  };
  invoice.total = function() {
    return this.phone + this.internet;
  };
  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));   

