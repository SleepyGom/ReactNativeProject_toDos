# Todo App

React Native로 만든 할 일 관리 앱입니다.

## 앱 동작 영상

### 탭 이동
![Moving Tab](assets/movingtab.gif)

### 할 일 추가
![Making Content](assets/makingcontent.gif)

### 할 일 체크
![Check Content](assets/checkcontent.gif)

### 할 일 수정
![Modify Content](assets/modifycontent.gif)

### 할 일 삭제
![Delete Content](assets/deletecontent.gif)

### 앱 다시 시작시 탭 고정
![Position Change](assets/position.gif)

## 기능

- Work와 Schedule 두 가지 카테고리로 할 일 관리
- AsyncStorage를 사용한 데이터 영구 저장
- 할 일 추가 및 삭제 기능
- 마지막 선택한 탭 상태 저장
- 체크박스로 할 일 완료 표시
  - 체크 시 텍스트에 취소선 추가
  - 체크 시 텍스트 색상 변경
- 할 일 수정 기능
  - 텍스트 길게 누르기로 수정 모드 진입
  - 수정 중 취소 가능
  - 엔터키로 수정 완료

## 기술 스택

- React Native
- Expo
- AsyncStorage
- Fontisto Icons
- React Native Bouncy Checkbox

## 주요 기능 설명

### 할 일 관리
- Work와 Schedule 탭으로 할 일 분류
- 새로운 할 일 추가 (엔터키로 저장)
- 할 일 삭제 (휴지통 아이콘 클릭)

### 체크박스 기능
- 할 일 완료 여부 표시
- 체크 시 텍스트에 취소선 추가
- 체크 시 텍스트 색상이 회색으로 변경

### 수정 기능
- 텍스트를 길게 누르면 수정 모드 진입
- 수정 중 취소 가능 (X 아이콘)
- 엔터키로 수정 완료

### 데이터 저장
- AsyncStorage를 사용한 데이터 영구 저장
- 앱 재시작 시에도 데이터 유지
- 마지막 선택한 탭 상태 저장 