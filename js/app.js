//要素の取得
const inputName = document.getElementById("name");
const genderInputs = document.getElementsByName("gender");
const ageSelect = document.getElementById("ageSelect");
const specoalityInput = document.getElementById("specoality");
const skillInput = document.getElementById("skills");
const prInput = document.getElementById("pr");


//Buttonの要素を習得
const submitButton = document.getElementById("submitButton");


//Buttonを押した後に要素を取得する

submitButton.addEventListener("click",function(){
    const inputNameValue = inputName.value;
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const genderInputsValue = selectedGender?.value;
    const ageSelectValue = ageSelect.value;
    const specoalityInputValue =specoalityInput.value;
    const skillInputValue = skillInput.value;
    const prInputValue = prInput.value;

    // バリデーション
      if (!inputNameValue) {
        document.getElementById("nameError").textContent = "氏名を入力してください。";
      } else {
        document.getElementById("nameError").textContent = "";
      }
      if(!genderInputsValue){
        document.getElementById("genderError").textContent = "性別を入力してください";
      } else{
        document.getElementById("genderError").textContent = "";
      }
      if(!ageSelectValue){
        document.getElementById("ageError").textContent ="年齢を入力してください";
      }else{
        document.getElementById("ageError").textContent ="";
      }
      if(!specoalityInputValue){
        document.getElementById("specoalityError").textContent = "特技を入力してください";
      }else{
        document.getElementById("specoalityError").textContent = "";
      }
      if(!skillInputValue){
        document.getElementById("skillsError").textContent = "スキルや経験を入力してください";
      }else{
        document.getElementById("skillsError").textContent = "";
      }
      if(!prInputValue){
        document.getElementById("prError").textContent = "自己PRを入力してください";
      }else{
        document.getElementById("prError").textContent = "";
      }

      // ローカルストレージに保存
      try{
      localStorage.setItem("name", inputNameValue);
      localStorage.setItem("gender", genderInputsValue);
      localStorage.setItem("age", ageSelectValue);
      localStorage.setItem("specoality", specoalityInputValue);
      localStorage.setItem("skills", skillInputValue);
      localStorage.setItem("pr", prInputValue);
      alert("localstarageに保存しました");
      }catch(e){
        console.error("保存されていません");
        alert("保存に失敗しました");
      }

});