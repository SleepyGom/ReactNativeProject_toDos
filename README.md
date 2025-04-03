# Todo App

React Native로 만든 할 일 관리 앱입니다.


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


## 앱 동작 영상

### 탭 이동
<img src="assets/movingtab.gif" width="300" />

### 할 일 추가
<img src="assets/makingcontent.gif" width="300" />

### 할 일 체크
<img src="assets/checkcontent.gif" width="300" />

### 할 일 수정
<img src="assets/modifycontent.gif" width="300" />

### 할 일 삭제
<img src="assets/deletecontent.gif" width="300" />

### 앱 다시 시작시 탭 고정
<img src="assets/position.gif" width="300" />

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

## Known Issues

- **New Update Available Downloading 무한 루프 현상**: 
  Expo에 앱을 업로드한 후, Preview를 통해 QR 코드를 스캔했을 때 "New update available downloading" 상태에서 무한 로딩이 발생하는 문제가 발생하였습니다.
  - 이 문제를 해결하기 위해서 모바일내의 캐시를 삭제하고, 최신 코드를 다시 업데이트 및 버전의 호환성을 맞추었으며, 이후 문제가 해결되었습니다.  
     ```bash
     eas update --branch development --message "updating"
     ```
    위의 명령어를 통하여 최신 코드로 업데이트 하였습니다.