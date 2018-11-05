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
  var services = services || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      var i;

      for (i = 0; i < payments.length; i += 1) {
        this.addPayment(payments[i]);
      }
    },

    paymentTotal: function() {
      var totalPaid = 0;
      var i;

      for (i = 0; i < this.payments.length; i += 1) {
        totalPaid += this.payments[i].total();
      };

      return totalPaid;
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

// function invoiceTotal(invoices) {
//   var total = 0;
//   var i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

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

function createPayment(services) {
  services = services || {};
  var payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };
  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };
  return payment;
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // 24000

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();
