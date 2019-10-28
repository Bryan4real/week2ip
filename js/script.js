function akan() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let cc = parseInt(year.slice(0, 2));
  let yy = parseInt(year.slice(2, 4));
  let sex = document.getElementById("gender").value;
  // let fml =( ( (cc/4) - 2 * (cc - 1)) + ((5*yy/4) ) + ((26*(month+1)/10)) + day )% 7;
  // let bdate = fml.toFixed(0);
  // let bd = bdate - 1;
  // let date = Math.abs(bd);
  // console.log(bdate);
  let gdate = new Date(`${year}-${month}-${day}`);
  let b = gdate.getDay();
  console.log(b);

    // return document.getElementById("res").innerHTML= bdate;
    let mname = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let fname = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if (sex == "male"){
    return  document.getElementById("result").innerHTML = mname[b];
  }
  if (sex == "female")
  {
      return  document.getElementById("result").innerHTML = fname[b];
    }
}
