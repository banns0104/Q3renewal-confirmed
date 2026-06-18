# 어바웃피싱 8월버전 — Claude Code 핸드오프

## 한 줄 요약
모바일(393px / iPhone 14 Pro) 낚시 슈퍼앱 프로토타입. HTML 기반 Design Component(`*.dc.html`)로 제작됨. 진입점 `index.html`.

## 폴더 구조 (zip 그대로)
- `index.html` — 랜딩 허브 (전체화면/프로토타입/플로우기획서/시스템메시지/기능상세정책 링크)
- `layout.dc.html` — **전체 화면 보드** (모든 화면 한눈에)
- `prototype.dc.html` — **인터랙티브 프로토타입** (디바이스 + 하단탭 + 좌측 화면 인덱스)
- `flowspec.dc.html` — 플로우 기획서 (화면 번호 + 직각 연결 화살표)
- `기능상세정책.dc.html` — 기능상세정책 (S1~S55 화면별 요소 번호 + D1~D5 개발 명세 · 서비스기획/PM/FE/BE 4관점 노트)
- `systemmessages.dc.html` / `SysCase.dc.html` — 얼럿/컨펌/토스트/푸쉬/알림톡 카탈로그 & 상황별
- 화면 컴포넌트: `Auth / Permission / News / Reserve / Map / Search / My / Sub / Empty / Error`
- `support.js` — 런타임(필수) · `scr/` — Figma 추출 번들 · `assets/` — 이미지
- `design-export.standalone.html` — 커스텀 화면만 담은 단독 실행본(이미지 포함)

## 화면 종류 (두 가지 — 수정법 다름)
1. **커스텀 DC** (`*.dc.html`): 손으로 만든 화면. 인라인 스타일 + `class Component extends DCLogic`. 자유 편집.
2. **Figma 추출본** (`scr/<name>/Components.bundle.js`, `AF*`/`Screen`): 자동 생성 코드. 직접 수정 비권장 — 원본 Figma 재추출 권장. (출조탭 홈=통합홈→`scr/chuljohome`의 `Screen`(node 411:16309, 실제 출조탭 홈 화면), 새소식기본형=AFNewsA, 스플래쉬=AFSplash). ※ 기존 '선박 리스트(Reserve list)'는 실제 없는 화면이라 제거, 출조탭 홈은 통합홈 피드로 대체함.
   - `scr/chuljohome` 통합홈은 8604px·이미지 다수 → 보드에서 메모리 리스크로 assets PNG를 760px로 축소하고 `content-visibility:auto`로 마운트함. 원본 고해상도 교체 시 재추출 필요.
   - `scr/pointmodal` (포인트 모달 바다·항구/댐/강/공통) · `scr/newscreens` (날씨 드래그·스플래쉬ver2·로그인다크·퀵메뉴) — Figma ver2 정밀본. 보드에서는 렌더 부하 회피를 위해 `scr/snapshots/*.png` 정적 스냅샷으로 표시(원본 컴포넌트는 해당 폴더에 보존).

## 화면 목록 (커스텀)
- 인증: 로그인 · 카카오/네이버 동의 · 휴대폰번호/인증번호 · 약관(미동의/전체동의/상세) · 관심온보딩 · 권한동의(위치·알림·광고추적 ATT/ADID)
- 메인/탐색: 출조(통합홈 피드) · 퀵메뉴 오버레이 · 새소식(피드형) · 통합검색(결과/검색전) · 탐색지도(포인트 바다·항구/민물 강·댐·공통·날씨드래그·길안내·조황·예약·CCTV)
- 예약: 선박상세 → 예약(인원·날짜) → 승선안전동의 → 결제 → 결제진행중/확인중 → (성공)예약완료 / (실패)결제실패 · 가상계좌 입금대기
- 마이: 마이페이지 · 회원레벨안내 · 예약내역(예정/완료/취소 탭) · 내조황 · 찜 · 쿠폰함(사용가능/완료/만료) · 관심낚시 · 알림설정 · 고객센터FAQ · 프로필편집 · 결제수단관리 · 회원탈퇴(설문)+탈퇴완료 · 친구초대모달
- 서브: 알림 · 공지사항(+상세) · 이벤트(+상세) · 후기작성(+완료) · 1:1채팅 · 예약취소·환불(+완료)
- 빈상태 9종 · 에러 4종 · 상황별 시스템메시지

## 실행
정적 파일. 빌드 없음. 로컬 정적 서버로 폴더 서빙 후 `index.html` 열기 (예: `python -m http.server`). `file://` 직접 열기는 상대경로 fetch 때문에 비권장.

## 디자인 시스템
AboutFishing. Primary `#0041FF`(예약/결제/인증) · 쇼핑 `#191919` · 챔피언십 `#6433DF`. Pretendard. 노이모지. 제목 뒤 볼드 점(`예약.`). 393px 캔버스 · 18px 거터.

## ⬇️ Claude Code에게 줄 작업 프롬프트 (복사해서 사용)

```
첨부한 zip은 어바웃피싱 모바일 앱(393px) HTML 프로토타입입니다. index.html이 진입점이고,
화면들은 *.dc.html(커스텀) + scr/의 Figma 추출 번들로 구성됩니다.

목표: 이 프로토타입의 "전체 화면"을 Figma에 동일하게 옮긴다.
- 먼저 정적 서버로 폴더를 띄우고(python -m http.server) layout.dc.html 과 각 *.dc.html을
  렌더해 실제 픽셀/레이아웃/색/타이포를 확인하라.
- Figma로 옮기는 방법은 (a) Figma 'Import from HTML'(가능 시) 또는 (b) html.to.design /
  builder.io 같은 HTML→Figma 변환을 사용하되, 변환 후 393px 프레임 단위로 정리하라.
- 화면 단위로 프레임을 만들고(파일명=프레임명), 디자인 시스템 토큰(#0041FF 등)과
  Pretendard, 18px 거터, 제목 뒤 볼드 점 규칙을 지켜라.
- scr/의 추출 화면(통합홈·선박리스트·새소식기본형·스플래쉬)은 이미지 비중이 크니
  스크린샷 기준으로 정밀 재현하라.
주의: HTML을 직접 .fig로 쓸 수는 없으므로 변환 도구 또는 Figma API/플러그인을 활용하고,
틀어진 부분은 원본 HTML 렌더와 1:1 대조해 보정하라.
```
