function validate() {
				/*Show first name */
				temp = document.getElementById("outputName");
				temp.innerHTML = document.intro.firstName.value;
				/*Show last name */
				temp = document.getElementById("outputLastName");
				temp.innerHTML = document.intro.lastName.value;
				/*Show Phone*/
				temp = document.getElementById("outputPhone");
				temp.innerHTML = document.intro.phone.value;				
				/*Show Level*/
				temp = document.getElementById("outputLevels");
				temp.innerHTML = document.intro.levels.value;	
				/*Show Console*/
				temp = document.getElementById("outputConsole");
				temp.innerHTML = document.intro.console.value;	
				/*Show GameStyle*/
				var values = [].filter.call(document.getElementsByName('gametype'), 
				function(myList) {
					return myList.checked;
					})
				.map(function(myList) {
					return myList.value;
				});
				document.getElementById('checkboxlist').innerText = JSON.stringify(values);
				return false;
		}