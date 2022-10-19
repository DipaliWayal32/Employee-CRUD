var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}



function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empId"] = document.getElementById("empId").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["Age"] = document.getElementById("Age").value;
    // formData["gender"] = document.getElementById("gender").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Age;
    // cell5 = newRow.insertCell(4);
    // cell5.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("Age").value = "";
    // document.getElementById("gender").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[3].innerHTML;
    // document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empId;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.Age;
    // selectedRow.cells[4].innerHTML = formData.gender;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}


function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }

    if (document.getElementById("empId").value == "") {
        isValid = false;
        document.getElementById("empIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("empIdValidationError").classList.contains("hide"))
            document.getElementById("empIdValidationError").classList.add("hide");
    }

    if (document.getElementById("salary").value == "") {
        isValid = false;
        document.getElementById("salaryValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("salaryValidationError").classList.contains("hide"))
            document.getElementById("salaryValidationError").classList.add("hide");
    }

    if (document.getElementById("Age").value == "") {
        isValid = false;
        document.getElementById("AgeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("AgeValidationError").classList.contains("hide"))
            document.getElementById("AgeValidationError").classList.add("hide");
    }

    if (document.getElementById("Age").value.length < 1 || empId.value.trim().length > 6)  {
        isValid = false;
        document.getElementById("empIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("empIdValidationError").classList.contains("hide"))
            document.getElementById("empIdValidationError").classList.add("hide");
    }

    
    return isValid;
}


    // function validate() {

    //     //Full Name 
    //     if (fullNameInput.value.trim() == '') {
    //         setError(fullNameInput, 'Provide Full Name');
    //     } else if (isfullNameValid(fullNameInput.value)) {
    //         setSuccess(fullNameInput);
    //     } else {
    //         setError(fullNameInput, 'Provide valid Name');
    //     }

    //     //Emp Id
    //     if (empIdInput.value.trim() == '') {
    //         setError(empIdInput, 'empId can not be empty');
    //     } else if (empIdInput.value.trim().length < 1 || empId.value.trim().length > 6) {
    //         setError(empIdInput, 'empId min 1 max 6 number');
    //     } else {
    //         setSuccess(empIdInput);
    //     }
    //     //salary
    //     if (salaryInput.value.trim() == '') {
    //         setError(salaryInput, 'Provide salary');
    //     } else if (issalaryValid(salaryInput.value)) {
    //         setSuccess(salaryInput);
    //     } else {
    //         setError(salaryInput, 'Provide valid salary');
    //     }

    //     //Age
    //     if (AgeInput.value.trim() == '') {
    //         setError(AgeInput, 'Age can not be empty');
    //     } else if (AgeInput.value.trim().length < 19 || AgeInput.value.trim().length > 60) {
    //         setError(AgeInput, 'Age min 19 max 20 number');
    //     } else {
    //         setSuccess(AgeInput);
    //     }

    // }

    // function setError(element, errorMessage) {
    //     const parent = element.parentElement;
    //     if (parent.classList.contains('success')) {
    //         parent.classList.remove('success');
    //     }
    //     parent.classList.add('error');
    //     const paragraph = parent.querySelector('p');
    //     paragraph.textContent = errorMessage;
    // }

    // function setSuccess(element) {
    //     const parent = element.parentElement;
    //     if (parent.classList.contains('error')) {
    //         parent.classList.remove('error');
    //     }
    //     parent.classList.add('success');
    // }

    



    //  unique Id **

    // program to remove duplicate value from an array

    //     var array = document.getElementsByClassName("empid");
    //     let uniqueArr = [];
    //     uniqueArr.push( "empid");
    // function getUnique(arr){

    //     // let uniqueArr = [];


    //     // loop through array 
    //     for(let i of arr) {
    //         if(uniqueArr.indexOf(i) === -1) {
    //             uniqueArr.push(i);
    //         }
    //     }
    //     console.log(uniqueArr);
    // }

    // // const array = [1, 2, 3, 2, 3];

    // // calling the function
    // // passing array argument
    // getUnique(array);





    // }
    // var uniqueObject= {};
    // uniqueObject["empId"] = document.getElementById("empId").value;
    // function removeDuplicates() {
    //    // Display the list of array objects
    //     console.log(empId);
  
    //     // Declare a new array
    //     let newArray = [];
          
    //     // Declare an empty object
    //     let uniqueObject = {};
         
    //      // Loop for the array elements
    //      for (let i in empid) {
      
    //         // Extract the title
    //         objTitle = empid[i]['title'];
  
    //         // Use the title as the index
    //         uniqueObject[objTitle] = books[i];
    //     }
    //     // Loop to push unique object into array
    //     for (i in uniqueObject) {
    //         newArray.push(uniqueObject[i]);
    //     }
          
    //     // Display the unique objects
    //     console.log(newArray);
    // }
   










