  var array0 = [['marker','latitude','longitude']];
  var table  = array0;

  // 場所選択時における画面遷移
  function move(st_lat,st_lng) {
  // マップの初期化
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: st_lat, lng: st_lng},
    clickableIcons: false,
    });
    // クリックイベントを追加
    map.addListener('click', function(e) {
      getClickLatLng(e.latLng, map);
    });
  }

  function calcBmi(){
	var place = document.getElementById('place').value;
	if(place == 'Seenigama'){
	   move(6.158023694480074, 80.09944740045268);
        }else if(place=='Rathgama'){
           move(6.094113067712668, 80.14460119177627);   
	}else if(place=='Dadalla'){
           move(6.05061027710379, 80.20185262870272); 
        }
  }


    var click_count = 0;
   
    function initMap() {
      // マップの初期化
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat:6.7059876442864, lng: 80.38543545988964},
	clickableIcons: false,
      });

      // クリックイベントを追加
      map.addListener('click', function(e) {
        getClickLatLng(e.latLng, map);
      });
    }

    function getClickLatLng(lat_lng, map) {
      click_count++;
      str_cnt = String(click_count);
      str_lat = String(lat_lng.lat());
      str_lng = String(lat_lng.lng());
      var array1 = [str_cnt, str_lat, str_lng];
      array0.push(array1);
      // 座標を表示
      document.getElementById('lat').textContent = lat_lng.lat();
      document.getElementById('lng').textContent = lat_lng.lng();
      document.getElementById('cnt').textContent = click_count;
  

      // マーカーを設置
      var marker = new google.maps.Marker({
        position: lat_lng,
        map: map,
	title: str_cnt,
	label: {
	  text: str_cnt,
	  color: "white",
	},
      });

      var size = new google.maps.Size( 200, 200 ) ;

      // 座標の中心をずらす
           map.panTo(lat_lng);
    }


    // 配列を文字列に変換するための関数
  function tableToCsvString(table) {
          var str = '\uFEFF';
          for (var i = 0, imax = table.length - 1; i <= imax; ++i) {
              var row = table[i];
              for (var j = 0, jmax = row.length - 1; j <= jmax; ++j) {
                  str += '"' + row[j].replace('"', '""') + '"';
                  if (j !== jmax) {
                      str += ',';
                  }
              }
              str += ',';
          }
	  document.forms["path"].elements["entry.1323365906"].value = str;
      };
   

    // 文字列を出力
    function save(){
        tableToCsvString(table);
    }
