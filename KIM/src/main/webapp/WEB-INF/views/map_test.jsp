<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- UTF-8 문자 인코딩 설정 -->
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>지도 서비스</title>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/map_test.css">
  <script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=m242vsth46"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- jQuery 추가 -->
  <script src="${pageContext.request.contextPath}/resources/js/map_test.js"></script>
</head>
<body>
  <div class="main-container">
    <!-- 왼쪽 사이드바 -->
    <div class="sidebar" id="sidebar">
      <!-- 초기 상태 -->
      <div id="initial-state" class="sidebar-state">
        <div class="header">
          <span>분석 지역 및 업종 선택</span>
          <button id="reset-button" class="reset-button" aria-label="필터 초기화"> 다시 선택 </button>
        </div>
        <div class="filters">
          <label for="region-select">
          <br>
            <i class="icon"></i> 분석 지역을 선택해 주세요
          </label>
          <select id="region-select" aria-label="지역 선택">
            <option value="">분석 지역을 선택해 주세요</option>
            <option value="서울">서울</option>
          </select>
          <label for="business-select">
          <br>
            <i class="icon"></i> 분석 업종을 선택해 주세요
          </label>
          <select id="business-select" aria-label="업종 선택">
            <option value="">분석 업종을 선택해 주세요</option>
            <option value="한식">한식</option>
            <option value="주점">주점</option>
          </select>
        </div>
        <button id="view-report" class="view-button" aria-label="보고서 보기">보고서 보기</button>
      </div>

      <!-- 결과 상태 -->
      <div id="result-state" class="sidebar-state" style="display: none;">
        <div class="header">
          <span>분석 결과</span>
          <button id="find">행정동 분석</button>
          <button id="reset-button-result" class="reset-button" aria-label="결과 초기화">다시 선택</button>
        </div>
        <div class="module-row">
          <div class="module-header">주소:</div>
          <p id="result-region">데이터가 없습니다.</p>
        </div>
        <div class="module-row">
          <div class="module-header">행정동:</div>
          <p id="result-business">데이터가 없습니다.</p>
        </div>
      </div>
    </div>

    <!-- 동적 사이드바 -->
    <div id="dynamic-sidebar" class="modal-sidebar" style="display: none;"> <!-- 기본 상태 숨김 -->
      <div class="header">
        <span>행정동 분석 결과</span>
        <button id="closeSidebar" class="reset-button" aria-label="사이드바 닫기">닫기</button>
      </div>
      <div class="module-content">
        <p>이곳에 행정동 분석 결과 데이터를 표시합니다.</p>
      </div>
    </div>

    <!-- 오른쪽 지도 -->
    <div id="map" aria-label="지도 화면"></div>
  </div>
</body>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const findButton = document.getElementById("find");
    const dynamicSidebar = document.getElementById("dynamic-sidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const resetButton = document.getElementById("reset-button-result");

    if (findButton && dynamicSidebar && closeSidebar && resetButton) {
      // "행정동 분석" 버튼 클릭 시 동적 사이드바 표시
      findButton.addEventListener("click", function () {
        dynamicSidebar.style.display = "flex"; // 동적 사이드바 보이기
      });

      // 닫기 버튼 클릭 시 동적 사이드바 숨기기
      closeSidebar.addEventListener("click", function () {
        dynamicSidebar.style.display = "none"; // 동적 사이드바 숨기기
      });

      // "다시 선택" 버튼 클릭 시 동적 사이드바 숨기기
      resetButton.addEventListener("click", function () {
        dynamicSidebar.style.display = "none"; // 동적 사이드바 숨기기
      });
    } else {
      console.error("동적 사이드바 관련 요소가 존재하지 않습니다.");
    }
  });
</script>
</html>
