//要素の取得
const inputName = document.getElementById("name");
const genderInputs = document.getElementsByName("gender");
const ageSelect = document.getElementById("ageSelect");
const specoalityInput = document.getElementById("specoality");
const skillInput = document.getElementById("skills");
const prINput = document.getElementById("pr");


//Buttonの要素を習得
const submitButton = document.getElementById("submitButton");


//Buttonを押した後に要素を取得する

submitButton.addEventListener("click",function(){
    const inputNameValue = inputName.value;
    const genderInputsValue = document.querySelector('input[name="gender"]:checked').value;
    const ageSelectValue = ageSelect.value;
    const specoalityInputValue =specoalityInput.value;
    const skillInputValue = skillInput.value;
    const prInputValue = prINput.value;
    
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