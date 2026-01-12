document.addEventListener("DOMContentLoaded", function () {
    const dataForm = document.getElementById("dataForm");
    const dataInput = document.getElementById("dataInput");
    const dataList = document.getElementById("dataList");

    loadStoredData();

    dataForm.addEventListener("submit", function (e){
        e.preventDefault();
        const data = dataInput.value.trim();
        if (data !== ""){
            addToLocalStorage(data);
            loadStoredData();
            dataInput.value = "";
        }else {
            alert("please Enter the Data");
            dataInput.focus();
        }
    });

    //Add new Data to LocalStorage;

    function addToLocalStorage(data){
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        storedData.push(data);
        localStorage.setItem("myData",JSON.stringify(storedData));
    }
    //Load All Data From LocalStorage:
    function loadStoredData() {
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        dataList.innerHTML = "";
        storedData.forEach((data, index)=> {
            // const li = document.createElement("li");
            // li.textContent = data;
            // dataList.appendChild(li);

            let output = `<li>${data}<div>
            <button class="btnEdit" data-index='${index}'>Edit</button>
            <button class="btnDelete" data-index='${index}'>Delete</button>
            </div>
            <li>
            `;
            dataList.innerHTML += output;
        });
        const delButtons = document.querySelectorAll(".btnDelete");
        delButtons.forEach((btn)=>{
            btn.addEventListener("click", deleteData);
        });
        
         const editButtons = document.querySelectorAll(".btnEdit");
        editButtons.forEach((btn)=>{
            btn.addEventListener("click", editData);
        });
    }

    //To Delete the Data From LocalStorage:
    function deleteData(){
        if (confirm("Are You Sure to Delete")){
        const index = this.dataset.index;
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        storedData.splice(index, 1);
        localStorage.setItem("myData", JSON.stringify(storedData));
        loadStoredData();
        }
    }

    //to Modify User Data
    function editData() {
        const index = this.dataset.index;
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        const newData = prompt("Edit Username", storedData[index]); 
        if (newData !== null){
            storedData[index] = newData.trim();
            localStorage.setItem("myData", JSON.stringify(storedData));
            loadStoredData();
        }
    }
});