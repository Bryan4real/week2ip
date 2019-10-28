function akan() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  // let cc = parseInt(year.slice(0, 2));
  // let yy = parseInt(year.slice(2, 4));
  let sex = document.getElementById("gender").value;
  let mname = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let fname = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  // let fml =( ( (cc/4) - 2 * (cc - 1)) + ((5*yy/4) ) + ((26*(month+1)/10)) + day )% 7;
  // let bdate = fml.toFixed(0);
  // let bd = bdate - 1;
  // let date = Math.abs(bd);
  if (day < 1 || day > 31) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  if (month < 1 || month > 12) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  if (year < 1900 || year > 2090) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }
  if (month == 2 && day < 1 || day > 29) {
    return  document.getElementById("result").innerHTML = "Enter Valid Date";
  }

  let gdate = new Date(`${year}-${month}-${day}`);
  let b = gdate.getDay();

  console.log(b);



  if (sex == "male"){
    return  document.getElementById("result").innerHTML = mname[b];
  }
  if (sex == "female")
  {
      return  document.getElementById("result").innerHTML = fname[b];
    }
}
