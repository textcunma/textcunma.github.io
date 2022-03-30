function drawChart(name,score,canvas){
    const ctx = document.getElementById(canvas);

    let string='';      //☆を追加するための変数
    for(let i = 0; i < score; i++){
        string += '★';     //指定された分だけ★を追加
    }
    for(let i = 0; i < 5-score; i++){
        string += '☆';     //（最大値5-指定された分）の☆を追加
    }
    
    let color='#EF4123';    //赤色指定

    let  data= {
        labels: "",  
        datasets: [{
            label: "", 
            data: [score,5-score],
            backgroundColor:[color,'#000'],
            borderColor:[color,'#000'],
        }],
    };
    
    let options={
        responsive: false,  //サイズを変更しない
        cutout:140,         //ドーナッツ型グラフの厚み
        events: [],         //マウスイベント無効化
        animation: {
            delay:100,      //100ms後にアニメーション開始
            duration: 1200, //1200msでアニメーション終了
        },
        plugins:{
            legend: {
                display: false  //凡例を非表示
            }
        },
        // animation: false    //アニメーションOFF
    };

    new Chart(ctx, {
        type: 'doughnut',   //ドーナッツ型グラフ
        data: data,
        options: options,
        plugins:[{
            beforeDraw: function (chart, args, options) {
                let text=string;            //☆の文章
                let width = chart.width;    // グラフの幅
                let height = chart.height;  // グラフの高さ
                let ctx = chart.ctx;        // グラフのコンテキスト
                ctx.restore();

                //☆を描く
                let fontSize = (height / 114).toFixed(2);   //☆の文字サイズ
                ctx.font = fontSize + "em sans-serif";
                let textX = Math.round((width - ctx.measureText(text).width) / 2);
                let textY = height / 1.5;
                ctx.fillStyle=color;
                ctx.fillText(text, textX, textY);

                //言語名を描く
                fontSize=1.0;
                ctx.font = fontSize + "em sans-serif";
                ctx.fillStyle="#000";
                let nameX=Math.round((width - ctx.measureText(name).width) / 2);
                let nameY=height / 2.5;
                ctx.fillText(name, nameX, nameY);

                ctx.save();
            }
        }]
    });
}