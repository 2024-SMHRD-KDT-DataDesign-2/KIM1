<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<table border="1">
		<tr>
			<td>번호</td>
			<td>상점명</td>
			<td>업종</td>
			<td>구</td>
		</tr>
		<c:forEach items="${test }" var="t" varStatus="v">
			<tr>
				<td>${v.count }</td>
				<td>${t.name }</td>
				<td>${t.category }</td>
				<td>${t.district }</td>
			</tr>
		</c:forEach>

	</table>

</body>
</html>