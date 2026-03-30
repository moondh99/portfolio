# 구현 계획: Web Portfolio

## 개요

서비스 기획/PM 직무 지원자를 위한 원페이지 정적 포트폴리오 웹사이트를 HTML, CSS, Vanilla JavaScript로 구현한다. 각 태스크는 이전 단계 위에 점진적으로 기능을 추가하며, 최종적으로 모든 컴포넌트를 통합한다.

## 태스크

- [x] 1. HTML 기본 구조 및 시맨틱 마크업 작성
  - [x] 1.1 index.html 파일 생성 및 기본 HTML5 문서 구조 작성
    - DOCTYPE, html, head, body 태그 구성
    - meta charset, viewport 태그 포함
    - CSS(css/style.css) 및 JS(js/main.js) 파일 연결
    - 시맨틱 태그(header, nav, main, section, footer)로 전체 페이지 골격 구성
    - 각 섹션에 고유 id 부여 (hero, about, skills, projects, contact)
    - _요구사항: 1.1, 1.2, 1.3, 1.4, 8.3_

  - [x] 1.2 Navigation Bar 마크업 작성
    - header 내부에 nav 요소 배치
    - 각 섹션으로 이동하는 앵커 링크 목록 작성
    - 햄버거 메뉴 버튼 마크업 추가 (aria-expanded, aria-label 속성 포함)
    - _요구사항: 2.1, 2.2, 2.5, 2.6, 11.2_

  - [x] 1.3 Hero 섹션 마크업 작성
    - 이름, 지원 직무, 자기소개 문구 텍스트 배치
    - CTA 버튼 마크업 추가 (About 또는 Projects 섹션으로 이동)
    - _요구사항: 3.1, 3.2, 3.3_

  - [x] 1.4 About Me 섹션 마크업 작성
    - 프로필 이미지/아바타 영역 배치
    - 학력 정보 (대학교, 전공, GPA) 마크업
    - 경력 사항 시간순 목록 마크업 (기간, 직무명, 주요 업무)
    - 모든 이미지에 alt 속성 제공
    - _요구사항: 4.1, 4.2, 4.3, 4.4, 11.1_

  - [x] 1.5 Skills 섹션 마크업 작성
    - 기술 스택 카테고리별 그룹 마크업 (프로그래밍, 데이터, 인프라, 협업)
    - 각 기술 항목을 태그 형태로 마크업
    - 자격증 목록 마크업
    - _요구사항: 5.1, 5.2, 5.3_

  - [x] 1.6 Projects 섹션 마크업 작성
    - 필터 버튼 그룹 마크업 (전체, 연도별, 카테고리별)
    - 프로젝트 카드 그리드 컨테이너 마크업
    - 각 프로젝트 카드에 data-year, data-category 속성 부여
    - 카드 내 프로젝트명, 기간, 설명, 기술 스택, 수상 배지 마크업
    - 프로젝트 상세 모달 마크업 (닫기 버튼, 오버레이 포함, aria 속성)
    - _요구사항: 6.1, 6.2, 6.3, 6.4, 6.5, 11.1, 11.2_

  - [x] 1.7 Contact 섹션 및 Footer 마크업 작성
    - 이메일(mailto: 링크), GitHub 프로필 링크 배치
    - 외부 링크에 target="_blank" rel="noopener noreferrer" 속성 적용
    - Footer 마크업 작성
    - _요구사항: 7.1, 7.2, 7.3_

- [x] 2. 체크포인트 - HTML 구조 검증
  - 모든 시맨틱 태그, id 속성, aria 속성이 올바르게 적용되었는지 확인한다. 문제가 있으면 사용자에게 질문한다.

- [x] 3. CSS 기본 스타일 및 레이아웃 구현
  - [x] 3.1 CSS 리셋 및 커스텀 속성(디자인 토큰) 정의
    - css/style.css 파일 생성
    - CSS 리셋/노멀라이즈 규칙 작성
    - :root에 색상, 타이포그래피, 간격, 애니메이션 커스텀 속성 정의
    - 시스템 폰트 스택 적용
    - box-sizing: border-box 전역 적용
    - _요구사항: 9.1, 9.2, 9.3, 9.5_

  - [x] 3.2 Navigation Bar 스타일 구현
    - 고정(fixed) 위치 네비게이션 바 스타일
    - 네비게이션 링크 hover/active 상태 스타일
    - 활성 섹션 표시 스타일 (.active 클래스)
    - _요구사항: 2.1, 2.4, 10.3_

  - [x] 3.3 Hero 섹션 스타일 구현
    - 100vh 높이 설정
    - 텍스트 중앙 정렬 및 타이포그래피
    - CTA 버튼 스타일 및 hover 효과
    - 페이드인 애니메이션 CSS 클래스 정의
    - _요구사항: 3.2, 3.4, 9.3, 10.3_

  - [x] 3.4 About Me 섹션 스타일 구현
    - 프로필 이미지 영역 스타일
    - 경력 타임라인 레이아웃
    - 섹션 간 여백 적용
    - _요구사항: 4.4, 9.4_

  - [x] 3.5 Skills 섹션 스타일 구현
    - 기술 카테고리 그리드/플렉스 레이아웃
    - 기술 태그 스타일 (배경색, 둥근 모서리, 패딩)
    - 자격증 목록 스타일
    - 등장 애니메이션 CSS 클래스 (.animate-on-scroll)
    - _요구사항: 5.2, 5.4, 10.1_

  - [x] 3.6 Projects 섹션 스타일 구현
    - 필터 버튼 그룹 스타일 (활성/비활성 상태)
    - 프로젝트 카드 그리드 레이아웃 (데스크톱: 다열, 태블릿: 2열)
    - 카드 hover 효과 및 수상 배지 스타일
    - 모달 오버레이 및 모달 콘텐츠 스타일
    - _요구사항: 6.1, 6.3, 10.3_

  - [x] 3.7 Contact 섹션 및 Footer 스타일 구현
    - 연락처 링크 스타일 및 hover 효과
    - Footer 스타일
    - _요구사항: 7.1, 10.3_

  - [x] 3.8 반응형 미디어 쿼리 구현
    - 모바일(~767px): 단일 열 레이아웃, 햄버거 메뉴 표시, 데스크톱 메뉴 숨김
    - 태블릿(768px~1023px): 2열 그리드, 축소된 네비게이션
    - 데스크톱(1024px~): 다열 그리드, 전체 네비게이션
    - 이미지 max-width: 100% 적용
    - 프로젝트 카드 모바일 단일 열 레이아웃
    - _요구사항: 8.1, 8.2, 8.4, 6.6, 2.5_

- [x] 4. 체크포인트 - CSS 스타일 검증
  - 모든 스타일이 올바르게 적용되었는지 확인한다. 반응형 브레이크포인트가 정상 동작하는지 확인한다. 문제가 있으면 사용자에게 질문한다.

- [x] 5. JavaScript 핵심 기능 구현
  - [x] 5.1 js/main.js 파일 생성 및 초기화 구조 작성
    - DOMContentLoaded 이벤트 리스너 설정
    - 각 초기화 함수 호출 구조 작성 (initNavigation, initScrollAnimations, initProjectFilters, initHamburgerMenu, initHeroAnimation)
    - _요구사항: 1.4_

  - [x] 5.2 Navigation Controller 구현
    - initNavigation() 함수 구현
    - smoothScrollTo(targetId) 함수 구현 - 네비게이션 링크 클릭 시 스무스 스크롤
    - updateActiveNav(sections, navLinks) 함수 구현 - 스크롤 위치 기반 활성 링크 업데이트
    - 스크롤 이벤트 리스너 등록
    - _요구사항: 2.3, 2.4_

  - [x] 5.3 Hamburger Menu 구현
    - initHamburgerMenu() 함수 구현
    - toggleMenu() 함수 구현 - 메뉴 열기/닫기 토글
    - aria-expanded 속성 동적 업데이트
    - Escape 키로 메뉴 닫기
    - 메뉴 항목 클릭 시 자동 닫기
    - _요구사항: 2.5, 2.6, 11.2, 11.5_

  - [x] 5.4 Scroll Animation Observer 구현
    - initScrollAnimations() 함수 구현
    - handleIntersection(entries) 콜백 구현 - Viewport 진입 시 'visible' 클래스 추가
    - 모든 .animate-on-scroll 요소에 Observer 등록
    - threshold, rootMargin 옵션 설정
    - _요구사항: 10.1, 10.2, 10.4, 5.4_

  - [x] 5.5 Hero Animation 구현
    - initHeroAnimation() 함수 구현
    - 페이지 로드 시 텍스트 요소 순차 페이드인
    - CTA 버튼 클릭 이벤트 연결
    - _요구사항: 3.4, 3.3_

  - [x] 5.6 Project Filter 구현
    - initProjectFilters() 함수 구현
    - filterProjects(category, cards) 함수 구현 - data-year, data-category 기반 필터링
    - 필터 버튼 활성 상태 관리
    - 필터 적용 시 카드 표시/숨김 처리
    - _요구사항: 6.5_

  - [x] 5.7 Project Modal 구현
    - openModal(projectData) 함수 구현 - 프로젝트 상세 데이터로 모달 내용 채우기
    - closeModal() 함수 구현
    - 모달 닫기: 닫기 버튼, Escape 키, 오버레이 클릭
    - 모달 열림 시 포커스 트랩(focus trap) 구현
    - body 스크롤 잠금 처리
    - _요구사항: 6.4, 11.2, 11.5_

  - [x] 5.8 JavaScript 단위 테스트 작성
    - filterProjects 함수 테스트 (전체/연도별/카테고리별 필터링)
    - toggleMenu 함수 테스트 (열기/닫기 상태 전환)
    - updateActiveNav 함수 테스트 (활성 링크 업데이트)
    - _요구사항: 6.5, 2.6, 2.4_

- [x] 6. 체크포인트 - JavaScript 기능 검증
  - 모든 JavaScript 기능이 정상 동작하는지 확인한다. 네비게이션, 햄버거 메뉴, 스크롤 애니메이션, 프로젝트 필터, 모달이 올바르게 작동하는지 확인한다. 문제가 있으면 사용자에게 질문한다.

- [x] 7. 접근성 및 키보드 탐색 강화
  - [x] 7.1 키보드 탐색 및 ARIA 속성 보강
    - 모든 인터랙티브 요소에 Tab 키 탐색 지원 확인
    - 모달에 role="dialog", aria-modal="true", aria-labelledby 속성 추가
    - 햄버거 메뉴에 aria-expanded, aria-controls 속성 동적 관리
    - 필터 버튼에 aria-pressed 속성 적용
    - 스킵 네비게이션 링크 추가 (선택)
    - _요구사항: 11.2, 11.5_

  - [x] 7.2 명도 대비 및 포커스 스타일 적용
    - 모든 인터랙티브 요소에 :focus-visible 스타일 적용
    - 텍스트/배경 명도 대비 4.5:1 이상 확인 및 조정
    - _요구사항: 11.3_

- [x] 8. 프로젝트 데이터 통합 및 최종 연결
  - [x] 8.1 프로젝트 데이터 배열 작성 및 카드/모달 연동
    - projects 배열에 실제 프로젝트 데이터 입력 (플레이스홀더)
    - JavaScript에서 프로젝트 데이터를 기반으로 카드 렌더링 또는 HTML 데이터와 연동
    - 모달 열기 시 해당 프로젝트 데이터로 상세 내용 표시
    - _요구사항: 6.2, 6.3, 6.4_

  - [x] 8.2 전체 컴포넌트 통합 및 동작 확인
    - 네비게이션 → 스무스 스크롤 → 활성 링크 업데이트 흐름 확인
    - 햄버거 메뉴 → 메뉴 항목 클릭 → 스크롤 → 메뉴 닫기 흐름 확인
    - 프로젝트 필터 → 카드 표시/숨김 → 카드 클릭 → 모달 열기/닫기 흐름 확인
    - 스크롤 애니메이션이 모든 섹션에서 정상 동작하는지 확인
    - _요구사항: 2.3, 2.4, 2.6, 6.4, 6.5, 10.1_

- [x] 9. 최종 체크포인트 - 전체 기능 및 접근성 검증
  - 모든 요구사항이 구현되었는지 최종 확인한다. HTML 유효성, CSS 스타일, JavaScript 기능, 반응형 레이아웃, 접근성이 모두 정상인지 확인한다. 문제가 있으면 사용자에게 질문한다.

## 참고 사항

- `*` 표시된 태스크는 선택 사항이며 빠른 MVP를 위해 건너뛸 수 있다
- 각 태스크는 특정 요구사항을 참조하여 추적 가능하다
- 체크포인트에서 점진적으로 검증하여 문제를 조기에 발견한다
- 모든 코드는 외부 프레임워크/라이브러리 없이 순수 HTML, CSS, JavaScript로 작성한다
