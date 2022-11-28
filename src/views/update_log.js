const page = document.createElement("template");
page.innerHTML = `
<div id="update-log" class="page">
    <h1>更新日誌</h1>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                2022/11/19 v0.0.0
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul>
                <li>建立主頁內容</li>
                <li>學習 git、github 基本操作與指令，並成功push到github</li>                    
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2022/11/27 v0.0.1
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul>
                <li>新增 navbar</li>
                <li>新增頁面 #主頁</li>
                <li>新增頁面 #關於我</li>
                <li>創意 jquery製作SPA架構</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                2022/11/28 v0.0.2
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul>
                <li>新增頁面 #更新日誌</li>
                <li>更新 #關於我</li>
                <li>TODO: 寫一段可以簡易製作更新日誌的插件</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            2022/11/28 v0.0.3
        </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
            <li>更新 自製文章模組化管理</li>
            </ul>
        </div>
        </div>
    </div>
    </div>                 
</div>
`;
export default page;
