const page = document.createElement("template");
page.innerHTML = `
<div id="about-me" class="page">
    <h1>關於我</h1>
    <div>
    經歷
        <ul>
            <li>高雄高工資訊科畢業</li>
        </ul>
    </div>
    <div>
        個人資料
        <ul>                
            <li>暱稱:Hayron竑</li>
            <li>科系:資訊工程系</li>
        </ul>
        </div>                    
    <div>
        <span style="font-size: 24px;">自我介紹:</span>
        目前是一名大學生，因為從國中開始喜歡「資訊科技」，因此高中選擇就讀資訊科，大學也就繼續了資訊工程的道路。<br>
        我個人比較喜歡演算法模型與深度學習，上大學遇到一個好老師兼好朋友<a href="https://www.tershi.com/">夏特稀</a>開始接觸互聯網相關的專業。
    </div>
</div>
`;
export default page;
