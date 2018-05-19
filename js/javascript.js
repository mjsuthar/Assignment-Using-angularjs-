function Submit(){
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('number').value;
		var web = document.getElementById('web').value;
		var DOB = document.getElementById('dob').value;
		var regWeb = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/; 
		
		// name validation
		if(name == '' || name == null){
			document.getElementById('resultName').innerHTML = " Please Enter Name";
		}else if(/^[A-Za-z\s]+$/.test(name)){
			document.getElementById('resultName').innerHTML = name;
		}else{
			document.getElementById('resultName').innerHTML = " Invalid Name";
		}
		
		//email validation
		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(email == '' || email == null){
			document.getElementById('resultEmail').innerHTML = " Please Enter Email";
		}else if(pattern.test(email)){
			document.getElementById('resultEmail').innerHTML = email;
		}else{
			document.getElementById('resultEmail').innerHTML = " Invalid Email";
		}
		
		//Phone Number validation
		if(phone == '' || phone == null){
			document.getElementById('resultPhone').innerHTML = " Please Enter Phone";
		}else if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)){
			document.getElementById('resultPhone').innerHTML = phone;
		}else{
			document.getElementById('resultPhone').innerHTML = "Invalid Phone No";
		}
		
		//Web address validation
		if(web == '' || web == null){
			document.getElementById('resultWeb').innerHTML = " empty Web address";
		}else if(regWeb.test(web)){
			document.getElementById('resultWeb').innerHTML = web;
		}else{
			document.getElementById('resultWeb').innerHTML = " Invalid Web url";
		}
		
		//Date of Birth validation
		var d = new Date();
		var year = Number(DOB.substr(0,4));
		var month = Number(DOB.substr(5,2)) - 1;
		var day = Number(DOB.substr(8,2));
		if(DOB.length == 0){
			document.getElementById('resultDOB').innerHTML = "Please insert Date of Birth";
		}else if(year < d.getFullYear()){
				document.getElementById('resultDOB').innerHTML = DOB;		
		}else if(year == d.getFullYear()){
			if(month < d.getMonth()){
				document.getElementById('resultDOB').innerHTML = DOB;
			}else if(month == d.getMonth()){
				if(day <= d.getDate()){
					document.getElementById('resultDOB').innerHTML = DOB;
				}else{
					document.getElementById('resultDOB').innerHTML = "Invalid Date";
				}
			}else{
				document.getElementById('resultDOB').innerHTML = "Invalid Date";
			}
		}else{
			document.getElementById('resultDOB').innerHTML = "Invalid Date";
		}
		/*document.getElementById("fillDetails").style.display = "none";
		document.getElementById("outputs").style.display = "block";
		*/
	}