# 요구사항 문서

## 소개

기업 지원용 웹 포트폴리오 사이트를 구축한다. 서비스 기획/PM 직무에 지원하는 사용자의 경력, 프로젝트, 기술 스택, 자격증 등을 효과적으로 전달하는 원페이지(One-page) 형식의 정적 웹사이트이다. HTML, CSS, Vanilla JavaScript만 사용하며, 모던하고 신뢰감 있는 디자인과 반응형 레이아웃을 제공한다.

## 용어 정의

- **Portfolio_Site**: 사용자의 이력, 프로젝트, 기술 스택 등을 보여주는 원페이지 정적 웹사이트
- **Navigation_Bar**: 페이지 상단에 고정되어 각 섹션으로 이동할 수 있는 메뉴 바
- **Hero_Section**: 페이지 최상단에 위치하여 사용자의 이름, 직무, 핵심 메시지를 표시하는 영역
- **About_Section**: 사용자의 기본 정보, 학력, 경력 요약을 표시하는 영역
- **Skills_Section**: 기술 스택과 자격증 정보를 시각적으로 표시하는 영역
- **Projects_Section**: 주요 프로젝트 목록과 상세 정보를 표시하는 영역
- **Contact_Section**: 연락처 정보와 외부 링크를 표시하는 영역
- **Viewport**: 사용자가 웹 페이지를 보는 화면 영역 (모바일, 태블릿, 데스크톱)
- **Smooth_Scroll**: 네비게이션 클릭 시 해당 섹션으로 부드럽게 스크롤되는 동작
- **Hamburger_Menu**: 모바일 화면에서 네비게이션 메뉴를 접고 펼 수 있는 아이콘 버튼

## 요구사항

### 요구사항 1: 페이지 구조 및 레이아웃

**사용자 스토리:** 서비스 기획/PM 직무 지원자로서, 나의 정보를 체계적으로 구성된 원페이지 포트폴리오로 보여주고 싶다. 이를 통해 채용 담당자가 나의 역량을 한눈에 파악할 수 있다.

#### 인수 조건

1. THE Portfolio_Site SHALL 단일 HTML 파일 내에 Header, Hero, About Me, Skills, Projects, Contact 섹션을 순서대로 포함한다
2. THE Portfolio_Site SHALL 각 섹션에 고유한 id 속성을 부여하여 네비게이션 링크의 앵커 대상으로 사용한다
3. THE Portfolio_Site SHALL 시맨틱 HTML 태그(header, nav, main, section, footer)를 사용하여 문서 구조를 구성한다
4. THE Portfolio_Site SHALL HTML, CSS, Vanilla JavaScript 파일만으로 구성되며 외부 프레임워크나 라이브러리를 사용하지 않는다

### 요구사항 2: 네비게이션 바

**사용자 스토리:** 포트폴리오 방문자로서, 페이지 상단의 네비게이션 바를 통해 원하는 섹션으로 빠르게 이동하고 싶다. 이를 통해 관심 있는 정보를 즉시 확인할 수 있다.

#### 인수 조건

1. THE Navigation_Bar SHALL 페이지 상단에 고정(fixed) 위치로 표시되어 스크롤 시에도 항상 보인다
2. THE Navigation_Bar SHALL Hero, About Me, Skills, Projects, Contact 섹션으로 이동하는 링크를 포함한다
3. WHEN 사용자가 네비게이션 링크를 클릭하면, THE Portfolio_Site SHALL 해당 섹션으로 Smooth_Scroll 동작을 수행한다
4. WHEN 사용자가 페이지를 스크롤하면, THE Navigation_Bar SHALL 현재 보이는 섹션에 해당하는 링크를 시각적으로 활성화(active) 표시한다
5. WHILE Viewport 너비가 768px 이하이면, THE Navigation_Bar SHALL 메뉴 항목을 Hamburger_Menu로 대체하여 표시한다
6. WHEN 사용자가 Hamburger_Menu 아이콘을 클릭하면, THE Navigation_Bar SHALL 메뉴 항목 목록을 토글(열기/닫기)한다

### 요구사항 3: Hero 섹션

**사용자 스토리:** 포트폴리오 방문자로서, 페이지에 접속하자마자 지원자의 이름과 직무 목표를 확인하고 싶다. 이를 통해 지원자의 정체성을 즉시 파악할 수 있다.

#### 인수 조건

1. THE Hero_Section SHALL 사용자의 이름, 지원 직무(서비스 기획/PM), 간결한 자기소개 문구를 표시한다
2. THE Hero_Section SHALL Viewport 높이의 100%를 차지하여 전체 화면으로 표시된다
3. THE Hero_Section SHALL CTA(Call-to-Action) 버튼을 포함하여 About_Section 또는 Projects_Section으로 이동할 수 있다
4. WHEN 페이지가 로드되면, THE Hero_Section SHALL 텍스트 요소에 페이드인(fade-in) 애니메이션을 적용한다

### 요구사항 4: About Me 섹션

**사용자 스토리:** 채용 담당자로서, 지원자의 학력, 경력, 핵심 역량을 요약된 형태로 확인하고 싶다. 이를 통해 지원자의 배경을 빠르게 이해할 수 있다.

#### 인수 조건

1. THE About_Section SHALL 사용자의 학력 정보(대학교, 전공, GPA 3.3/4.5)를 표시한다
2. THE About_Section SHALL 경력 사항을 시간순으로 정렬하여 표시한다 (메트릭 스튜디오, 셀렉트스타, 한국금융연수원, 육군 제21사단 등)
3. THE About_Section SHALL 각 경력 항목에 기간, 직무명, 주요 업무 내용을 포함한다
4. THE About_Section SHALL 프로필 이미지 또는 아바타 영역을 포함한다

### 요구사항 5: Skills 섹션

**사용자 스토리:** 채용 담당자로서, 지원자의 기술 스택과 보유 자격증을 시각적으로 확인하고 싶다. 이를 통해 지원자의 기술 역량 수준을 판단할 수 있다.

#### 인수 조건

1. THE Skills_Section SHALL 기술 스택을 카테고리별로 분류하여 표시한다 (프로그래밍: Python, SQL / 데이터: Pandas, Scikit-learn / 인프라: AWS, Docker / 협업: Git, GitHub, Slack, Notion 등)
2. THE Skills_Section SHALL 각 기술 항목을 아이콘 또는 태그 형태의 시각적 요소로 표시한다
3. THE Skills_Section SHALL 보유 자격증 목록을 표시한다 (정보처리기사, 빅데이터분석기사, ADSP, SQLD, AICE Associate, AWS Certified AI Practitioner, OPIc IM3, TOEIC 800)
4. WHEN 사용자가 스크롤하여 Skills_Section이 Viewport에 진입하면, THE Skills_Section SHALL 기술 항목에 등장 애니메이션을 적용한다

### 요구사항 6: Projects 섹션

**사용자 스토리:** 채용 담당자로서, 지원자의 주요 프로젝트 경험과 성과를 상세히 확인하고 싶다. 이를 통해 지원자의 실무 능력과 문제 해결 역량을 평가할 수 있다.

#### 인수 조건

1. THE Projects_Section SHALL 프로젝트를 카드(card) 형태의 그리드 레이아웃으로 표시한다
2. THE Projects_Section SHALL 각 프로젝트 카드에 프로젝트명, 기간, 간략한 설명, 사용 기술을 포함한다
3. THE Projects_Section SHALL 수상 이력이 있는 프로젝트(경기청년 연구랩업 대상, 경기청년 갭이어 우수 참여자)에 수상 배지를 표시한다
4. WHEN 사용자가 프로젝트 카드를 클릭하면, THE Projects_Section SHALL 해당 프로젝트의 상세 정보를 모달(modal) 또는 확장 영역으로 표시한다
5. THE Projects_Section SHALL 프로젝트를 연도별 또는 카테고리별로 필터링할 수 있는 탭 또는 버튼을 제공한다
6. WHILE Viewport 너비가 768px 이하이면, THE Projects_Section SHALL 프로젝트 카드를 단일 열(single column) 레이아웃으로 표시한다

### 요구사항 7: Contact 섹션

**사용자 스토리:** 채용 담당자로서, 지원자에게 연락할 수 있는 방법을 쉽게 찾고 싶다. 이를 통해 면접 제안이나 추가 문의를 할 수 있다.

#### 인수 조건

1. THE Contact_Section SHALL 이메일 주소, GitHub 프로필 링크를 표시한다
2. THE Contact_Section SHALL 각 연락처 항목에 클릭 가능한 링크를 제공한다 (이메일은 mailto: 링크, GitHub은 외부 링크)
3. THE Contact_Section SHALL 외부 링크를 새 탭(_blank)으로 열며 rel="noopener noreferrer" 속성을 포함한다

### 요구사항 8: 반응형 디자인

**사용자 스토리:** 포트폴리오 방문자로서, 모바일, 태블릿, 데스크톱 등 다양한 기기에서 포트폴리오를 편리하게 열람하고 싶다. 이를 통해 어떤 환경에서든 정보를 쉽게 확인할 수 있다.

#### 인수 조건

1. THE Portfolio_Site SHALL 모바일(~767px), 태블릿(768px~1023px), 데스크톱(1024px~) 세 가지 Viewport 구간에 대한 미디어 쿼리를 적용한다
2. WHILE Viewport 너비가 767px 이하이면, THE Portfolio_Site SHALL 모든 콘텐츠를 단일 열 레이아웃으로 표시한다
3. THE Portfolio_Site SHALL meta viewport 태그를 포함하여 모바일 기기에서 올바른 스케일링을 보장한다
4. THE Portfolio_Site SHALL 이미지와 미디어 요소에 max-width: 100%를 적용하여 Viewport를 초과하지 않도록 한다

### 요구사항 9: 시각 디자인 및 타이포그래피

**사용자 스토리:** 포트폴리오 방문자로서, 모던하고 신뢰감 있는 디자인의 포트폴리오를 보고 싶다. 이를 통해 지원자의 전문성에 대한 긍정적인 인상을 받을 수 있다.

#### 인수 조건

1. THE Portfolio_Site SHALL 밝고 깔끔한 배경색(흰색 또는 밝은 회색 계열)을 기본으로 사용한다
2. THE Portfolio_Site SHALL 일관된 색상 팔레트(주 색상, 보조 색상, 강조 색상)를 CSS 커스텀 속성(변수)으로 정의하여 사용한다
3. THE Portfolio_Site SHALL 본문 텍스트에 16px 이상의 폰트 크기를 적용하여 가독성을 확보한다
4. THE Portfolio_Site SHALL 섹션 간 충분한 여백(padding/margin)을 적용하여 콘텐츠 간 시각적 구분을 제공한다
5. THE Portfolio_Site SHALL Google Fonts 또는 시스템 폰트 스택을 사용하여 깔끔한 산세리프 서체를 적용한다

### 요구사항 10: 인터랙션 및 애니메이션

**사용자 스토리:** 포트폴리오 방문자로서, 스크롤 시 자연스러운 애니메이션 효과를 경험하고 싶다. 이를 통해 포트폴리오 열람이 더 흥미롭고 몰입감 있게 느껴진다.

#### 인수 조건

1. WHEN 사용자가 스크롤하여 각 섹션이 Viewport에 진입하면, THE Portfolio_Site SHALL 해당 섹션의 콘텐츠에 등장 애니메이션(fade-in, slide-up 등)을 적용한다
2. THE Portfolio_Site SHALL Intersection Observer API를 사용하여 스크롤 기반 애니메이션을 구현한다
3. THE Portfolio_Site SHALL 버튼 및 링크 요소에 hover 상태 전환 효과(transition)를 적용한다
4. THE Portfolio_Site SHALL 모든 애니메이션의 지속 시간을 300ms~600ms 범위로 설정하여 자연스러운 속도를 유지한다

### 요구사항 11: 접근성 및 성능

**사용자 스토리:** 포트폴리오 방문자로서, 접근성이 보장되고 빠르게 로드되는 웹사이트를 이용하고 싶다. 이를 통해 다양한 환경과 보조 기술을 사용하는 사용자도 정보를 확인할 수 있다.

#### 인수 조건

1. THE Portfolio_Site SHALL 모든 이미지 요소에 대체 텍스트(alt 속성)를 제공한다
2. THE Portfolio_Site SHALL 키보드 탐색(Tab, Enter, Escape 키)을 지원하여 모든 인터랙티브 요소에 접근할 수 있도록 한다
3. THE Portfolio_Site SHALL 텍스트와 배경 간 WCAG 2.1 AA 수준의 명도 대비(4.5:1 이상)를 유지한다
4. THE Portfolio_Site SHALL 외부 CSS 및 JavaScript 파일을 최소화하여 페이지 로드 시간을 최적화한다
5. WHEN 사용자가 Escape 키를 누르면, THE Portfolio_Site SHALL 열려 있는 모달 또는 Hamburger_Menu를 닫는다
