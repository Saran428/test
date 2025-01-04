

    function resultFun(){

        let a = document.getElementById('typeEmailX').value;

        let b = document.getElementById('typePasswordX').value;

        if((a == 18)&&(b == 8)){
                    let c = document.getElementById('result') ;
                    c.textContent = "Hello Dhanusri Are You There ?"
        }else{
            let c = document.getElementById('result') ;
            c.textContent = "Please Enter your Correct Date & Month"
        }
    }
