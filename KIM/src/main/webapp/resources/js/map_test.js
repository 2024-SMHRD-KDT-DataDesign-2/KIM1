// 전역 변수로 map 선언
var map;

// 지도 초기화
document.addEventListener("DOMContentLoaded", function() {
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5666805, 126.9784147),
        zoom: 13,
        mapTypeId: naver.maps.MapTypeId.NORMAL
    });

    // 브라우저에서 Geolocation API 사용
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
    } else {
        console.error("Geolocation not supported");
    }
});

// 현재 위치 성공 시
function onSuccessGeolocation(position) {
    var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(location);  // 위치 중심으로 지도 이동
    map.setZoom(13);  // 줌 레벨 설정

    // 현재 위치에 마커 추가
    var marker = new naver.maps.Marker({
        position: location,
        map: map,
    });

    // 현재 위치 정보 콘솔 출력
    console.log('Coordinates: ' + location.toString());

    // 마커 표시
    initMap(); // 위치를 잡은 후 마커 초기화
}

// 위도, 경도 사용해 지도에 마커 표시
function initMap() {
    var areaArr = [];

    $.ajax({
        url: 'http://localhost:8085/kim/places',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            for (let i = 0; i < data.length; i++) {
                let place = data[i];

                let placeInfo = {
                    location: place.place_name,
                    category: place.category,
                    address: place.place_addr,
                    tel: place.place_tel,
                    lat: place.place_lat.toString(),
                    lng: place.place_lon.toString()
                };
                areaArr.push(placeInfo);
            }
            console.log(areaArr);
            let markers = [];
            let infoWindows = [];

            for (var i = 0; i < areaArr.length; i++) {
                var marker = new naver.maps.Marker({
                    map: map,
                    title: areaArr[i].location,
                    position: new naver.maps.LatLng(areaArr[i].lat, areaArr[i].lng),
                    icon: {
                        url: '/resources/images/test.png', // 이미지 경로 수정
                        scaledSize: new naver.maps.Size(30, 30),
                    }
                });

                var contentString = [
                    '<div style="width:400px;text-align:center;padding:10px;">' +
                    '<a href="#"><b>' + areaArr[i].location + '</b></a>' +
                    ' ' + '<span style="font-size:12px">' + areaArr[i].category + '</span>' + '<br>' +
                    '📍 ' + areaArr[i].address + '<br>' +
                    '📞 ' + areaArr[i].tel + '<br>' +
                    '</div>'
                ].join('');

                var infoWindow = new naver.maps.InfoWindow({
                    content: contentString,
                    borderWidth: 3,
                    anchorSize: new naver.maps.Size(30, 30),
                    backgroundColor: "#EFF8FB",
                    borderColor: "#0040FF",
                    anchorColor: "#EFF8FB"
                });

                markers.push(marker);
                infoWindows.push(infoWindow);
            }

            function getClickHandler(seq) {
                return function(e) {
                    var marker = markers[seq],
                        infoWindow = infoWindows[seq];

                    if (infoWindow.getMap()) {
                        infoWindow.close();
                    } else {
                        infoWindow.open(map, marker);
                    }
                }
            }

            for (var i = 0, ii = markers.length; i < ii; i++) {
                naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
            }
        },
        error: function(xhr, status, error) {
            console.error("AJAX 요청 실패:", error);
        }
    });
}

// 위치 정보 오류 처리
function onErrorGeolocation() {
    console.error('Geolocation failed.');
}
