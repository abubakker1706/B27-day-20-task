const searchBar = document.getElementById('searchtxt');
searchBar.addEventListener('keyup',(e) => {
    let box= document.getElementById('note');
        if(box.style.display=== "none"){
            box.style.display="block";  
        }
    
} );

async function search(){
    try {

       

        let num=document.getElementById('searchtxt').value;
        console.log(num);
        let url=await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);
        let data=await url.json();
        console.log(data);
        document.getElementById('content').innerHTML=`
        <div class="boxpart-1" id="content-tam">
            <div id="muppal"><b>முப்பால்:</b> ${data.sect_tam}</div>
            <div id="chapt"><b>இயல்:</b> ${data.chapgrp_tam}</div>
            <div id="adhi"><b>அதிகாரம்:</b> ${data.chap_tam}</div>
            <div id="lines"><b>குறள்- ${data.number} :</b> <br>
            <div id="line1">${data.line1}</div>
            <div id="line1">${data.line2}</div>
            </div>
            <div id="expl">
            <b>பொருள்:</b> <br>
            ${data.tam_exp}
            </div>
        </div>
      
        <div class="boxpart-1" id="content-eng">
            <div id="muppal"><b>Section/Paal:</b> ${data.sect_eng}</div>
        <div id="chapt"><b>ChapterGroup/Iyal:</b> ${data.chapgrp_eng}</div>
        <div id="adhi"><b>Chapter/Adhigaram:</b> ${data.chap_eng}</div>
        <div id="lines"><b>Couplet/Kural- ${data.number} :</b> <br>
        ${data.eng}
        </div>
        <div id="expl">
        <b>Explanation:</b> <br>
            ${data.eng_exp}
        </div>
        </div>`
    } catch (error) {
        console.log(error);
    }
} 
