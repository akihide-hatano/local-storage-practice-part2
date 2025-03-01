//outPutAreaの有無の確認
    const outputArea = document.getElementById("outputArea");
    if (outputArea) {
     
    try {
    //localStageから要素を取ってくる
        const outName = localStorage.getItem("name");
        const outGender = localStorage.getItem("gender");
        const outAge = localStorage.getItem("age");
        const outSpecoality = localStorage.getItem("specoality");
        const outSkills = localStorage.getItem("skills");
        const outPr = localStorage.getItem("pr");

        if (outName || outGender || outAge || outSpecoality || outSkills || outPr) {
            //p要素を作成し、outputAreaに追加する
            const nameP = document.createElement("p");
            nameP.textContent = `氏名: ${outName ?? "未設定"}`;
            outputArea.appendChild(nameP);
            //年齢をoutputAreaに追加する。
            const genderP = document.createElement("p");
            genderP.textContent =`年齢:${outGender ?? "未設定"}`;
            outputArea.appendChild(genderP);

        } else {
            outputArea.textContent = "データが見つかりませんでした。";
        }
    } catch (e) {
        console.error("ローカルストレージからのデータ取得中にエラーが発生しました:", e);
        outputArea.textContent = "データの取得に失敗しました。";
    };
}