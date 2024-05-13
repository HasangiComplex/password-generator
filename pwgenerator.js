
let password = ""

const characterSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+=-".split(
    ""
  );




  function generatePwd(){
    
    let arrayPwd  = [];
    let pwd  = [];
    let Password = "";
    fourPwd = [];

        for(let i= 0 ; i<8;i++){
            let indexOfArrayElements = Math.floor(Math.random()*characterSet.length)
            pwd.push(characterSet[indexOfArrayElements]);
        }
   
        arrayPwd.push(pwd);
 
        let  PasswordArr = arrayPwd[0];

   
        for (let j=0;j < PasswordArr.length ; j++){
            Password +=PasswordArr[j];
        }
        console.log(Password)
        
  }


  function generateFourPwd(){
    for(let i=0;i<4 ; i++){
       generatePwd();
    }
  }