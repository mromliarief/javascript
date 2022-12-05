// OOP
class Mail {
    constructor(author) {
      this.from = author;
      this._contacts = [];
    }
  
    sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
    }
    
    showAllContacts() {
      return this._contacts;
    }
  }
  
  class WhatsApp extends Mail {
    constructor(author) {
      super(author);
      this.username = 'dicoding';
      this.isBusinessAccount = true;
    }
    myProfile() {
      return `my name ${this.username}, is ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    }
  }
  
  const wa1 = new WhatsApp('080111000222');
  console.log(wa1.myProfile());

  // Object composition
  // [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

// [2] create object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });
  
  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih
pe1.isValid();

// OOP JS (Petani Kode)
var car = {
    // properti
    type: "Fiat", 
    model: "500", 
    color: "White",

    // method
    start: function(){
        console.log("ini method start");
    },
    drive: function(){
        console.log("ini method drive");
    },
    brake: function(){
        console.log("ini method brake");
    },
    stop: function(){
        console.log("ini method stop");
    }
    
};

console.log(car.type);
console.log(car.color);

car.start();
car.drive();
