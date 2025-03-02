    const outputArea = document.getElementById("outputArea");
    if (outputArea) {
        try {
            //要素を取得
            const outName = localStorage.getItem("name");
            const outGender = localStorage.getItem("gender");
            const outAge = localStorage.getItem("age");
            const outSpecoality = localStorage.getItem("specoality");
            const outSkills = localStorage.getItem("skills");
            const outPr = localStorage.getItem("pr");
            //分岐させる
            if (outName || outGender || outAge || outSpecoality || outSkills || outPr) {
                // 氏名
                const nameP = document.createElement("div");
                //横並び
                nameP.style.display = "flex";
                nameP.style.alignItems = "center";
                //pタグを挿入
                const nameLabelSpan = document.createElement("p");
                nameLabelSpan.classList.add("name-label");
                nameLabelSpan.textContent = "氏名: ";
                nameP.appendChild(nameLabelSpan);
                //spanタグでlocalDtorageから取ってきたものを表示する
                const nameSpan = document.createElement("span");
                nameSpan.classList.add("name-value");
                nameSpan.textContent = outName ?? "未設定";
                nameP.appendChild(nameSpan);
                outputArea.appendChild(nameP);

                // 性別
                const genderP = document.createElement("div");
                genderP.style.display = "flex";
                genderP.style.alignItems = "center";
                const genderLabelSpan = document.createElement("p");
                genderLabelSpan.classList.add("gender-label");
                genderLabelSpan.textContent = "性別: ";
                genderP.appendChild(genderLabelSpan);
                const genderSpan = document.createElement("span");
                genderSpan.classList.add("gender-value");
                genderSpan.textContent = outGender ?? "未設定";
                genderP.appendChild(genderSpan);
                outputArea.appendChild(genderP);

                // 年齢
                const ageP = document.createElement("div");
                ageP.style.display = "flex";
                ageP.style.alignItems = "center";
                const ageLabelSpan = document.createElement("p");
                ageLabelSpan.classList.add("age-label");
                ageLabelSpan.textContent = "年齢: ";
                ageP.appendChild(ageLabelSpan);
                const ageSpan = document.createElement("span");
                ageSpan.classList.add("age-value");
                ageSpan.textContent = outAge ?? "未設定";
                ageP.appendChild(ageSpan);
                outputArea.appendChild(ageP);

                // 特技
                const specoalityP = document.createElement("div");
                specoalityP.style.display = "flex";
                specoalityP.style.alignItems = "center";
                const specoalityLabelSpan = document.createElement("p");
                specoalityLabelSpan.classList.add("specoality-label");
                specoalityLabelSpan.textContent = "特技: ";
                specoalityP.appendChild(specoalityLabelSpan);
                const specoalitySpan = document.createElement("span");
                specoalitySpan.classList.add("specoality-value");
                specoalitySpan.textContent = outSpecoality ?? "未設定";
                specoalityP.appendChild(specoalitySpan);
                outputArea.appendChild(specoalityP);

                // スキル
                const skillsP = document.createElement("div");
                skillsP.style.display = "flex";
                skillsP.style.alignItems = "center";
                const skillsLabelSpan = document.createElement("p");
                skillsLabelSpan.classList.add("skills-label");
                skillsLabelSpan.textContent = "スキル: ";
                skillsP.appendChild(skillsLabelSpan);
                const skillsSpan = document.createElement("span");
                skillsSpan.classList.add("skills-value");
                skillsSpan.textContent = outSkills ?? "未設定";
                skillsP.appendChild(skillsSpan);
                outputArea.appendChild(skillsP);

                // 自己 PR
                const prP = document.createElement("div");
                prP.style.display = "flex";
                prP.style.alignItems = "center";
                const prLabelSpan = document.createElement("p");
                prLabelSpan.classList.add("pr-label");
                prLabelSpan.textContent = "自己PR: ";
                prP.appendChild(prLabelSpan);
                const prSpan = document.createElement("span");
                prSpan.classList.add("pr-value");
                prSpan.textContent = outPr ?? "未設定";
                prP.appendChild(prSpan);
                outputArea.appendChild(prP);
            } else {
                outputArea.textContent = "データが見つかりませんでした。";
            }
        } catch (e) {
            console.error("ローカルストレージからのデータ取得中にエラーが発生しました:", e);
            outputArea.textContent = "データの取得に失敗しました。";
        }
    } else {
        console.error("outputArea 要素が見つかりません。");
    };