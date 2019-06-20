function initialize() {
		/* http://openapi.map.naver.com/api/geocode.php?key=AIzaSyBycKZYweoTna9GEVe1TcxwEil9KSACRXU&encoding=euc-kr
				&coord=LatLng&query=서울특별시 강남구 강남대로 456
	       위의 링크에서 뒤에 주소를 적으면 x,y 값을 구할수 있습니다. */
	            var Y_point = 35.15997;     // Y 좌표
	            var X_point = 126.910121;   // X 좌표

	            var zoomLevel = 17;         // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
				
	         	// 현재 위치 마커에 마우스를 오버을때 나타나는 정보
	            var markerTitle = "SIRESOURCES Co.,Ltd."; 
	            var markerMaxWidth = 300; // 마커를 클릭했을때 나타나는 말풍선의 최대 크기

	            // 말풍선 내용
	            var contentString    = '<div>' +
	                                   '<h2>(주)한국경영원</h2>'+
	                                   '<p>SIRESOURCES Co.,Ltd.<br/>' +
	                                   'has become a resource development company.</p>' +
	            //'<a href="http://www.daegu.go.kr" target="_blank">http://www.daegu.go.kr</a>'+ //링크도 넣을 수 있음
	                                   '</div>';

	            var myLatlng = new google.maps.LatLng(Y_point, X_point);
	            var mapOptions = {
		            zoom: zoomLevel,
		            center: myLatlng,
		            mapTypeId: google.maps.MapTypeId.ROADMAP
	            }
	            /*구글 지도를 만드는것 document~'map_view'인 애한테 만들어줘야한다. 그리고 바디에 온로드가 있어야 실행됨*/
	            var map = new google.maps.Map(document.getElementById('map_view'), 
	            		  mapOptions);

	            var marker = new google.maps.Marker({
	            	position: myLatlng,
	            	map: map,
	            	title: markerTitle
	            });

	            var infowindow = new google.maps.InfoWindow(
		           {
		                   content: contentString,
		                   maxWidth: markerMaxWidth
		           }
	            );

	            google.maps.event.addListener(marker, 'click', function() {
	                    infowindow.open(map, marker);
	            });
	    }