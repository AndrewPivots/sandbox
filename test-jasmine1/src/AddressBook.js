function AddressBook() {
  this.contacts = [];
  // for async
  // this.initialComplete = false;
  //
  // this.getInitialContacts = function(cb){
  //   var self = this;
  //   setTimeout(function(){
  //     self.initialcomplete = true;
  //     if (cb){
  //       return cb();
  //     }
  //   }, 3);
  // }
}

AddressBook.prototype.addContact = function(contact){
  this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index){
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index){
  this.contacts.splice(index, 1);
}
