  class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
  
  // TODO: 1
  const user = {
      name:"John",
      age:18,
    }
    const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (!isOffline) {
        reject(new NetworkError('Gagal mendapatkan data dari internet'));
      }
      resolve({ name: 'John', age: 18 });
    }, 500);
    })
  };
    const success = resolved => {
        console.log(resolved);
    }
     
    const failed = rejection => {
        console.log(rejection);
    }
    fetchingUserFromInternet().then(success,failed);
  
  // TODO: 2
  const gettingUserName = async () => {
    try {
      const user= await fetchingUserFromInternet(false);
      return user.name;
    } catch (error) {
      return error.message;
    }
  };