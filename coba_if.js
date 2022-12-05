function scoreChecker(score) {
    let result;
    // TODO
    if(score>=90){
     result = "Selamat! Anda mendapatkan nilai A.";
     console.log(result);
    }
    if(score>=80 && score<=89){
     result = "Anda mendapatkan nilai B.";
     console.log(result);
    }
    if(score>=70 && score<=79){
     result = "Anda mendapatkan nilai C.";
     console.log(result);
    }
    if(score>=60 && score<=69){
      result = "Anda mendapatkan nilai D.";
      console.log(result);
    }
    if(score<60){
      result = "Anda mendapatkan nilai E.";
      console.log(result);
    }
  
    // Jangan hapus kode ini
    return result;
  }
  scoreChecker(65);