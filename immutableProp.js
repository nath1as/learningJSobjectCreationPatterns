function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
    },
  });
}

var me = newPerson('Shane Riley');
me.log();
