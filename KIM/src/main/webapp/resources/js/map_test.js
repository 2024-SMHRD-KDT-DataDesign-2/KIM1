// 전역 변수 선언
var map;
var markers = []; // 지도에 표시된 마커 배열

// 지도 초기화
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM 로드 완료!"); // 디버깅 로그 추가

    // 네이버 지도 초기화
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5666805, 126.9784147), // 서울 중심 좌표
        zoom: 13,
        mapTypeId: naver.maps.MapTypeId.NORMAL
    });

    // 브라우저에서 Geolocation API 사용
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
    } else {
        console.error("Geolocation not supported");
    }

    // 초기 이벤트 설정
    document.getElementById("view-report").addEventListener("click", viewReportHandler);
    document.getElementById("reset-button").addEventListener("click", resetSidebar);
    document.getElementById("reset-button-result").addEventListener("click", resetSidebar); // 결과 상태의 다시 선택 버튼

    console.log("이벤트 리스너 등록 완료!"); // 디버깅 로그 추가
});

// 현재 위치 성공 시
function onSuccessGeolocation(position) {
    var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(location); // 위치 중심으로 지도 이동
    map.setZoom(13); // 줌 레벨 설정

    // 현재 위치에 마커 추가
    var marker = new naver.maps.Marker({
        position: location,
        map: map,
    });

    console.log('현재 위치: ' + location.toString()); // 디버깅 로그
}

// 지도에 마커를 추가하는 함수
function initMap() {
    var areaArr = []; // 서버에서 받은 데이터를 저장

    // AJAX 요청
    $.ajax({
        url: 'http://localhost:8085/kim/cd', // 서버 API URL
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("AJAX 요청 성공!", data); // 디버깅 로그
            for (let i = 0; i < data.length; i++) {
                let place = data[i];

                let placeInfo = {
                    region : place.region,
                    stats_year : place.stats_year,
                    quarter : place.quarter,
                    service_category : place.service_category,
                    cd_name : place.cd_name,
                    survive : place.survive,
                    region_lat : place.region_lat.toString(),
                    region_lon : place.region_lon.toString(),
                    cd_lat : place.cd_lat.toString(),
                    cd_lon : place.cd_lon.toString()
                            
                };
                areaArr.push(placeInfo);
            }

            let infoWindows = [];

            // 마커와 정보창 추가
            for (let i = 0; i < areaArr.length; i++) {
                let marker = new naver.maps.Marker({
                    map: map,
                    title: areaArr[i].region,
                    position: new naver.maps.LatLng(areaArr[i].cd_lat, areaArr[i].cd_lon),
                    icon: {
                        url: '/resources/images/test.png', // 이미지 경로 수정
                        scaledSize: new naver.maps.Size(30, 30),
                    }
                });

        //        let contentString = `
          //          <div style="width:400px;text-align:center;padding:10px;">
            //            <a href="#"><b>${areaArr[i].location}</b></a>
              //          <span style="font-size:12px">${areaArr[i].category}</span><br>
                //        📍 ${areaArr[i].address}<br>
                  //      📞 ${areaArr[i].tel}<br>
                 //   </div>
               // `;

                let infoWindow = new naver.maps.InfoWindow({
                    content: contentString,
                    borderWidth: 3,
                    anchorSize: new naver.maps.Size(30, 30),
                    backgroundColor: "#EFF8FB",
                    borderColor: "#0040FF",
                    anchorColor: "#EFF8FB"
                });

                markers.push(marker);
                infoWindows.push(infoWindow);

                // 마커 클릭 이벤트 추가
                naver.maps.Event.addListener(marker, 'click', function () {
                    if (infoWindow.getMap()) {
                        infoWindow.close();
                    } else {
                        infoWindow.open(map, marker);
                    }
                });
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX 요청 실패:", error); // 에러 로그
        }
    });
}

// 필터 초기화 함수
function resetFilters() {
    document.getElementById("region-select").value = ""; // 지역 선택 초기화
    document.getElementById("business-select").value = ""; // 업종 선택 초기화
}

// 지도 마커 초기화 함수
function clearMarkers() {
    if (markers && markers.length > 0) {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null); // 지도에서 마커 제거
        }
        markers = []; // 마커 배열 초기화
    }
}

// 초기화면으로 돌아가는 함수
function resetSidebar() {
    console.log("resetSidebar 호출됨!"); // 디버깅 로그 추가
    document.getElementById("initial-state").style.display = "block"; // 초기 화면 표시
    document.getElementById("result-state").style.display = "none"; // 결과 화면 숨김

    // 필터와 마커 초기화
    resetFilters();
    clearMarkers();
}

// 보고서 보기 버튼 핸들러
function viewReportHandler() {
    const region = document.getElementById("region-select").value;
    const business = document.getElementById("business-select").value;

    if (!region || !business) {
        alert("분석 지역과 업종을 선택해주세요.");
        return;
    }

    // 결과 화면에 데이터 삽입
    document.getElementById("result-region").textContent = region || "데이터가 없습니다.";
    document.getElementById("result-business").textContent = business || "데이터가 없습니다.";

    // 초기 상태 숨기고 결과 상태 표시
    console.log("viewReportHandler 호출됨!"); // 디버깅 로그 추가
    document.getElementById("initial-state").style.display = "none";
    document.getElementById("result-state").style.display = "block";
}

// 위치 정보 오류 처리
function onErrorGeolocation() {
    console.error('Geolocation failed.');
}
