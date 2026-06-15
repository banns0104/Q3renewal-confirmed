# 어바웃피싱 서비스 최적화 (앱) · 8월버전 — HANDOFF

이 폴더 하나가 프로젝트 전부예요. **폴더 통째로** 옮기면 지금 화면과 100% 동일하게 이어집니다.

## 0. 진입점
- **`index.html`** — 랜딩. 여기서 전체화면 / 프로토타입 / 플로우 기획서 / 시스템 메시지로 연결돼요.
- 모든 화면은 `support.js`·`scr/`·`assets/`를 **상대경로**로 참조 → 폴더 구조를 깨지 말 것.

## 1. 파일 종류 (중요)
화면 파일은 두 종류이고 **수정 방식이 달라요.**

| 종류 | 무엇 | 어떻게 수정 |
|---|---|---|
| **커스텀 DC** (`*.dc.html`) | 직접 손으로 만든 화면. 인라인 스타일 + `class Component extends DCLogic`. | 자유롭게 편집. 사람이 읽는 코드. |
| **Figma 추출본** (`scr/<name>/Components.bundle.js`) | Figma에서 자동 추출한 화면. `x-import component-from-global-scope="AF..."`로 로드. | **직접 수정 비권장**(자동생성 코드). 바꾸려면 원본 Figma에서 재추출하거나 커스텀으로 다시 그릴 것. |

### 커스텀 DC 목록
- `Auth.dc.html` — 로그인 / 휴대폰 인증 / 약관 / 관심 온보딩 (prop `start`)
- `Permission.dc.html` — 권한 동의
- `News.dc.html` — 새소식 **피드형**(완성본)
- `Reserve.dc.html` — 선박상세 → 예약 → 결제 → 예약완료 (prop `screen`)
- `Map.dc.html` — 탐색 지도 (필터·바텀시트·길안내·CCTV)
- `Search.dc.html` — 통합검색 (선박/어종/포인트/상품 다중 섹션)
- `My.dc.html` — 마이페이지 9종 + 회원탈퇴/탈퇴완료/친구초대 모달 (prop `screen`)
- `Sub.dc.html` — 알림 / 공지사항 / 이벤트 (prop `screen`)
- `Empty.dc.html` — 빈 상태 9종 (prop `type`)
- `Error.dc.html` — 404 / 500 / 네트워크 / 점검 (prop `type`)
- `SysCase.dc.html` — 상황별 시스템 메시지 (실제 화면 위에 메시지 오버레이)

### Figma 추출본 (scr/)
- `home`(통합홈/출조탭 = `AFHome`), `reserve_list`(선박 리스트 = `AFReserveList`),
  `map`/`search`(현재는 커스텀 Map/Search 사용), `news_a`(새소식 **기본형** = `AFNewsA`),
  `splash`(= `AFSplash`), 그 외 `shop·pointmap·chuljo·reserve·news_b`는 현재 미사용.
- 각 폴더에 `Components.bundle.js`(window에 전역 노출), `Components.d.ts`(카탈로그 — 컴포넌트명 확인용), `fig-tokens.css`, `fig-assets.css`, `assets/`(PNG).
- ⚠ `Components.d.ts`를 먼저 읽고 전역 컴포넌트명을 확인할 것.

## 2. 통합/문서 페이지
- `layout.dc.html` — 모든 화면을 한 보드에 (393px 아이폰 14 Pro 프레임). 섹션: 인증·메인·마이·서브·빈상태·에러·**상황별 시스템 메시지(SysCase)**.
- `prototype.dc.html` — 인터랙티브. 디바이스 + 하단 탭(새소식·탐색·출조·프로필) + 좌측 화면 인덱스.
- `flow-spec.dc.html` — 화면별 번호/기능정책 + **버튼→화면 직각 화살표**.
- `system-messages.dc.html` — 얼럿·컴펌·토스트·푸쉬·알림톡 카탈로그.

## 3. 핵심 동작 로직 (코드에서 찾을 위치)
- **프로토타입 네비**: `prototype.dc.html`의 `class Component`
  - `onMsg(e)` — 자식 화면이 `window.parent.postMessage({type:"af-nav", to:"<screen>"})`로 이동 요청. `to:"back"`은 히스토리 뒤로, `to:"noop"`은 "준비 중" 토스트.
  - `routeFor(view, txt)` / `onClick` — 추출 화면의 카드·검색바 클릭을 텍스트로 추정해 라우팅.
  - 상단 아이콘은 `data-route` 오버레이로 주입.
- **플로우 기획서 화살표**: `drawArrows()` — 모든 `.mock/.sm` 위치를 측정, `freeX/freeY`로 화면 사이 빈 공간(거터)을 통과하는 **직각 경로**를 그림. 연결은 `conns` 배열(라벨 텍스트 쌍)로 정의. 라벨은 `.mlabel/.smlabel` 텍스트로 매칭(`findNode`).
- **SysCase**: 각 카드가 `bd`로 실제 화면 컴포넌트를 배경에 import하고 메시지를 오버레이. 토스트는 화살표 없음, 얼럿·컴펌만 화살표.

## 4. 남은 TODO (이어서 할 것)
1. **통합홈(출조탭) UI 깨짐** — `scr/home` 추출본이 깨져 보임. 원본 Figma 재확인 후 재추출 또는 커스텀 재작성.
2. **소셜 로그인 동의 화면** — 카카오/네이버/애플 각 동의 화면 샘플.
3. **약관 동의** — 각 약관 서브페이지 + 전체동의 활성화 상태.
4. **새소식 2종** — 기본형(`AFNewsA`)/피드형(`News`) 둘 다 prototype에도 반영.
5. **시스템 메시지 확장** — 종류 추가 + 앱/웹 신규 구축용 유형(인앱배너·스낵바·폼검증·쿠키동의 등) 검토 후 Layout 반영.
6. **기능상세 정책 디벨롭** — 플로우 기획서 스펙 카드 보강.

## 5. 디자인 시스템
- AboutFishing Design System. Primary CTA `#0041FF`(예약/결제/인증), 쇼핑 `#191919`, 챔피언십 `#6433DF`. Pretendard. 노이모지. 제목 뒤 볼드 점(`예약.`). 393px 캔버스, 18px 거터.
- 폰트는 jsDelivr Pretendard CDN. 오프라인 필요 시 로컬 woff2로 교체.

## 6. 실행
- 정적 파일이라 빌드 없음. 로컬 서버로 폴더를 서빙하고 `index.html`을 열면 돼요. (상대경로 fetch 때문에 `file://` 직접 열기보다 `python -m http.server` 같은 정적 서버 권장.)
