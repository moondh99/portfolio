// main.js - 포트폴리오 JavaScript

/**
 * 프로젝트 데이터 배열 - HTML 카드와 동기화된 참조 데이터
 * @type {Project[]}
 */
var projects = [
  {
    id: 'project-intern',
    title: '데이터 라벨링 검수 프로세스 설계 및 품질 관리',
    period: '2025 · 셀렉트스타 Data Assistant 인턴 (4개월)',
    year: '2025',
    category: 'data',
    summary: 'API 기반 기계 검수 + 휴먼 검수 이중 체계를 설계하여 라벨링 정확도 72%→94%, 검수 시간 55% 단축',
    description: '데이터 라벨링 정확도가 72%에 머물러 AI 모델 학습 품질에 직접적 영향을 미치는 문제를 해결하기 위해, API 기반 기계 검수와 가이드라인 기반 휴먼 검수를 결합한 이중 검수 체계를 설계했습니다. 오류 유형 분류 체계를 확립하고 작업자 가이드라인을 제작하여 정확도 94% 달성 및 검수 시간 55% 단축을 이끌어냈습니다.',
    techStack: ['Python', 'Apps Script', 'API', 'Google Sheets'],
    award: '💼 실무 경험',
    link: null,
    problem: '데이터 라벨링 정확도가 72%에 머물러 AI 모델 학습 품질에 직접적 영향을 미치고, 작업자별 검수 기준이 상이하여 건당 검수 시간이 평균 15분 소요',
    hypothesis: 'API 기반 기계 검수와 오류 유형 분류 체계를 갖춘 휴먼 검수를 결합하고, 작업자 가이드라인을 표준화하면 정확도 90% 이상 달성과 검수 시간 단축이 가능할 것이다',
    solution: '① API 기반 기계 검수 + 휴먼 검수 이중 체계 설계 ② 오류 유형 분류 체계 확립 및 작업자 가이드라인 제작 ③ Apps Script로 검수 시트 자동화하여 데이터 납품 일정 준수 ④ 개발팀과 일정 조율 — 병행 프로젝트로 데이터 공급 지연 시 선제적으로 가이드라인·시트를 준비하여 납품 차질 방지',
    outcome: '라벨링 정확도 72% → 94% (22%p↑), 건당 검수 시간 15분 → 6~7분으로 55% 단축, 재작업률 감소 및 작업자 사후 만족도 조사에서 높은 만족도 확인. 검수 프로세스가 사내 표준으로 정착',
    metrics: [
      { label: '정확도↑', value: '22%p' },
      { label: '시간 단축', value: '55%' },
      { label: '실무', value: '4개월' }
    ]
  },
  {
    id: 'project-2',
    title: '청년 문화·여가 시설 접근성 격차 분석',
    period: '2025 · 경기청년 연구랩업 (팀장/기획 및 문서화)',
    year: '2025',
    category: 'research',
    summary: '경기도 31개 시군의 복합 접근성 지수를 산출하여 최대 4.8배 격차를 발견하고, 정책 참고자료로 활용',
    description: '경기도 31개 시군 간 청년 문화·여가 시설 접근성 격차를 복합 지표로 정량화한 연구입니다. GIS 기반 공간 분석과 교통 접근성 지표를 결합하여 수원시(8.7점) vs 연천군(1.8점) 간 최대 4.8배 격차를 발견하고, 남북부 양극화 구조를 확인했습니다.',
    techStack: ['Python', 'Pandas', 'SQL', 'GIS'],
    award: '🏆 경기청년 연구랩업 대상',
    link: null,
    problem: '경기도 31개 시군 간 청년 문화·여가 시설 접근성 격차가 존재하지만, 이를 복합 지표로 정량화한 연구가 부재하여 정책 근거가 부족',
    hypothesis: '공간 데이터(시설 분포·밀도)와 대중교통 데이터(분담률·철도 인프라)를 결합한 복합 접근성 지수를 산출하면, 소외 지역을 식별하고 최적 시설 위치를 도출할 수 있을 것이다',
    solution: 'GIS 기반 공간 분석 프레임워크 설계, 복합 접근성 지수 산출 모델 개발. 팀장으로서 연구 방향 설정 및 문서화 리드 — 팀원 간 시험·인턴 등 일정 충돌 시 주 1회 온/오프라인 회의를 주최하고 핵심 역할을 직접 수행하여 프로젝트 진행',
    outcome: '수원시(8.7점) vs 연천군(1.8점) 간 최대 4.8배 접근성 격차 발견, 남북부 양극화 구조 확인. 청년공간 31개 시군 중 7개 지역 완전 부재, 영화관 4개 시군 전무 등 청년 특화 시설 편중 실태 규명. 연구 결과가 경기도 지역 개발 참고자료로 활용 예정 (주최측 확인), 대상 수상',
    metrics: [
      { label: '수상', value: '대상' },
      { label: '시군 분석', value: '31개' },
      { label: '격차 발견', value: '4.8배' }
    ]
  },
  {
    id: 'project-3',
    title: 'MCP 활용 정치인 공약 이행 추적 시스템',
    period: '2025 · 경기청년 갭이어 (팀원/기획 및 개발)',
    year: '2025',
    category: 'service',
    summary: '경기도지사 306건 + 의정부시장 192건 공약을 자동 추적하는 대시보드 시스템 기획·개발',
    description: '공약 PDF 파싱 → DB 저장, 언론사별 뉴스 크롤링 + Gemini Grounding API 팩트체크 에이전트를 결합하여 정치인 공약 이행 현황을 자동 추적하는 시스템을 기획·개발했습니다.',
    techStack: ['Python', 'MCP', 'Gemini API', '크롤링'],
    award: '🏆 경기청년 갭이어 우수 참여자',
    link: null,
    problem: '시민들이 정치인의 공약 이행 여부를 체계적으로 확인할 수 있는 도구가 부재하여, 선행 연구에서도 공약 이행 추적의 자동화·체계화 필요성이 지속적으로 제기됨',
    hypothesis: '공약 PDF를 파싱하여 DB화하고, 보수/진보/중도 언론사별 뉴스 크롤링 + Gemini Grounding API 기반 팩트체크 에이전트를 결합하면 공약 이행 현황을 자동으로 추적할 수 있을 것이다',
    solution: '① 도/시청 홈페이지 공약 PDF 파싱 → DB 저장 파이프라인 구축 ② 언론사별(보수/진보/중도) 정치 뉴스 크롤링 및 공약 매칭 ③ Gemini Grounding API 활용 팩트체크 에이전트 구성 ④ 대시보드 기획·개발: 도넛 차트 이행률 시각화, 분야별 카드 그리드, 상태 필터·키워드 검색 기능',
    outcome: '경기도지사 306건, 의정부시장 192건 공약 추적 시스템 프로토타입 완성. 대시보드 5개 탭(대시보드/정치인별/국회의원/입법랭킹/법안검색) 구현, 우수 참여자 선정',
    metrics: [
      { label: '공약 추적', value: '498건' },
      { label: '선정', value: '우수 참여자' },
      { label: '대시보드', value: '5개 탭' }
    ]
  },
  {
    id: 'project-1',
    title: 'LLM 기반 유가증권 투자 분석 플랫폼',
    period: '2025 · 한이음 프로젝트 (팀장/PM, 6개월)',
    year: '2025',
    category: 'data',
    summary: 'LLM 기반 4대 관점별 금융 분석 및 일일 예측 검증 워크플로우를 갖춘 투자 분석 플랫폼',
    description: '개인 투자자의 종합적 분석 부재 문제를 해결하기 위해, LLM이 기업·산업·거시경제·기술적 요인 4대 관점에서 시장을 분석하고 투자 의견을 생성하는 플랫폼을 기획·개발했습니다.',
    techStack: ['Python', 'LLM', 'Pandas'],
    award: null,
    link: null,
    problem: '개인 투자자가 기업·산업·거시경제·기술적 요인을 종합적으로 분석하기 어려워, 단편적 정보에 의존한 비합리적 투자 결정이 반복되는 문제',
    hypothesis: 'LLM이 4대 관점(기업/산업/거시경제/기술적 요인)별로 시장 데이터를 분석하고 투자 의견을 생성하면, 개인 투자자의 의사결정 품질을 높일 수 있을 것이다',
    solution: 'PM으로서 WBS 기반 일정 관리 및 팀원 4명 역할 분배. 처음 사용하는 기술 스택에 대해 현직 멘토를 적극 활용하여 기술적 난관 해결. 4대 관점별 원인 분석 모듈과 전날 예측 vs 당일 실제 주가 비교 평가(성공/부분성공/실패) 워크플로우 설계',
    outcome: 'LLM 기반 금융 분석 플랫폼 프로토타입 완성. 4대 관점별 원인 분석 모듈 및 일일 예측 검증 워크플로우 구현, 팀원 4명 · 6개월 프로젝트 성공적 완수',
    metrics: [
      { label: '팀 리드', value: '4명' },
      { label: '수행', value: '6개월' },
      { label: '분석', value: '4대 관점' }
    ]
  },
  {
    id: 'project-4',
    title: '취업 박람회 사전예약 신청 시스템',
    period: '2025 · 교내 DB입문 프로젝트 (팀장/기획)',
    year: '2025',
    category: 'service',
    summary: '취업 박람회 사전예약 신청 시스템의 DB 설계 및 구축 프로젝트',
    description: '취업 박람회 사전예약 신청 시스템의 데이터베이스 설계 및 구축을 담당한 프로젝트입니다. 팀장으로서 기획을 리드했습니다.',
    techStack: ['MySQL', 'SQL'],
    award: null,
    link: null,
    problem: '취업 박람회 사전예약이 수작업으로 처리되어 중복 신청, 데이터 누락 등 운영 비효율이 발생',
    hypothesis: '정규화된 DB 설계와 체계적인 예약 시스템을 구축하면 운영 효율성과 데이터 정합성을 동시에 확보할 수 있을 것이다',
    solution: 'ERD 설계 및 MySQL 기반 예약 관리 DB를 구축하고, 팀장으로서 요구사항 정의 및 테이블 설계를 리드',
    outcome: '정규화된 DB 스키마 설계 완료 및 예약 시스템 프로토타입 구현',
    metrics: [
      { label: '팀원', value: '4명' },
      { label: '테이블', value: '8개' }
    ]
  },
  {
    id: 'project-5',
    title: '무역 품목 공행성 판별 및 무역량 예측',
    period: '2025 · 제3회 국민대 AI빅데이터 분석 대회',
    year: '2025',
    category: 'data',
    summary: '무역 품목 공행성 판별 및 무역량 예측 AI 모델 개발',
    description: '무역 품목의 공행성을 판별하고 무역량을 예측하는 AI 모델을 개발한 대회 프로젝트입니다.',
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    award: null,
    link: null,
    problem: '무역 품목 간 공행성(co-movement) 관계를 정량적으로 판별하기 어려워 무역량 예측의 정확도가 낮음',
    hypothesis: '품목 간 공행성 패턴을 머신러닝으로 학습하면 무역량 예측 정확도를 유의미하게 향상시킬 수 있을 것이다',
    solution: '공행성 판별 모델과 무역량 예측 모델을 파이프라인으로 연결하여 통합 분석 시스템 구축',
    outcome: '공행성 판별 및 무역량 예측 모델 개발 완료',
    metrics: [
      { label: '분석 품목', value: '5개' },
      { label: '팀원', value: '3명' }
    ]
  },
  {
    id: 'project-6',
    title: '국민대학교 수강신청 시스템 개편',
    period: '2025 · 시스템 분석 및 설계 (팀장/기획)',
    year: '2025',
    category: 'service',
    summary: '국민대학교 수강신청 시스템의 프로세스 분석 및 개편 기획 프로젝트',
    description: '국민대학교 수강신청 시스템의 기존 프로세스를 분석하고 개편 방안을 기획한 프로젝트입니다. 팀장으로서 전체 기획을 리드했습니다.',
    techStack: ['UML', 'Figma'],
    award: null,
    link: null,
    problem: '기존 수강신청 시스템의 UX가 비직관적이고 서버 과부하 시 장애가 빈번하여 학생 불만이 높음',
    hypothesis: '현행 시스템의 프로세스를 체계적으로 분석하고 UML로 모델링하면 병목 지점을 식별하고 개선안을 도출할 수 있을 것이다',
    solution: 'UML 기반 현행 시스템 분석 후 개선된 프로세스 설계 및 Figma 프로토타입 제작, 팀장으로서 분석 프레임워크 설계를 리드',
    outcome: '시스템 분석 보고서 및 개편 프로토타입 완성',
    metrics: [
      { label: '팀원', value: '5명' },
      { label: 'UML 다이어그램', value: '6종' }
    ]
  },
  {
    id: 'project-7',
    title: 'AI 기반 K리그 승률 예측 프로그램',
    period: '2024 · 한이음 프로젝트 (팀장/기획 및 프론트엔드)',
    year: '2024',
    category: 'data',
    summary: '인공지능 기반 K리그 승률 예측 프로그램 기획 및 프론트엔드 개발',
    description: '인공지능을 활용하여 K리그 경기 승률을 예측하는 프로그램을 기획하고 프론트엔드를 개발한 프로젝트입니다.',
    techStack: ['Python', 'Scikit-learn'],
    award: null,
    link: null,
    problem: 'K리그 팬과 분석가가 경기 결과를 데이터 기반으로 예측할 수 있는 도구가 부족하여 주관적 판단에 의존',
    hypothesis: '팀별 과거 경기 데이터와 선수 통계를 머신러닝 모델에 학습시키면 승률 예측 정확도를 높일 수 있을 것이다',
    solution: '경기 데이터 수집·분석 파이프라인과 예측 결과를 시각화하는 프론트엔드를 기획·개발, 팀장으로서 전체 프로젝트를 리드',
    outcome: 'K리그 승률 예측 모델 및 시각화 대시보드 프로토타입 완성',
    metrics: [
      { label: '팀원', value: '4명' },
      { label: '기간', value: '8개월' }
    ]
  },
  {
    id: 'project-8',
    title: '실시간 데이터 아키텍처 활용 따릉이 수요분석',
    period: '2024 · 한이음 프로젝트 (팀장/데이터 엔지니어)',
    year: '2024',
    category: 'data',
    summary: '실시간 데이터 파이프라인을 구축하여 따릉이 수요를 분석하는 데이터 엔지니어링 프로젝트',
    description: '실시간 데이터 아키텍처를 활용하여 서울시 따릉이 수요를 분석하는 데이터 파이프라인을 구축한 프로젝트입니다. 팀장 겸 데이터 엔지니어로 참여했습니다.',
    techStack: ['Python', 'Airflow', 'AWS', 'Docker'],
    award: null,
    link: null,
    problem: '서울시 따릉이 수요 데이터가 실시간으로 수집·분석되지 않아 수요 예측 및 재배치 의사결정이 지연됨',
    hypothesis: '실시간 데이터 파이프라인을 구축하면 따릉이 수요 패턴을 즉시 파악하고 운영 효율을 개선할 수 있을 것이다',
    solution: 'Airflow 기반 ETL 파이프라인과 AWS 인프라를 활용한 실시간 데이터 수집·분석 아키텍처 설계 및 구축',
    outcome: '실시간 데이터 파이프라인 구축 완료, 따릉이 수요 패턴 분석 대시보드 구현',
    metrics: [
      { label: '팀원', value: '4명' },
      { label: '기간', value: '8개월' },
      { label: '데이터', value: '실시간' }
    ]
  },
  {
    id: 'project-9',
    title: '산업 주요 5개 품목 무역데이터 예측',
    period: '2024 · 제2회 국민대 AI빅데이터 분석 대회',
    year: '2024',
    category: 'data',
    summary: '산업 주요 5개 품목의 6개년 무역데이터를 활용한 예측 모델 개발',
    description: '산업 주요 5개 품목의 6개년 무역데이터와 외부 데이터를 활용하여 예측 모델을 개발한 대회 프로젝트입니다.',
    techStack: ['Python', 'Pandas', 'Scikit-learn'],
    award: null,
    link: null,
    problem: '산업 주요 품목의 무역량 변동을 정확히 예측하기 어려워 기업과 정책 입안자의 의사결정에 불확실성이 존재',
    hypothesis: '6개년 무역데이터와 외부 경제 지표를 결합하면 품목별 무역량 예측 정확도를 향상시킬 수 있을 것이다',
    solution: '다변량 시계열 분석과 머신러닝 앙상블 기법을 적용하여 5개 품목별 예측 모델 개발',
    outcome: '5개 품목 무역량 예측 모델 개발 완료',
    metrics: [
      { label: '분석 품목', value: '5개' },
      { label: '데이터', value: '6개년' }
    ]
  },
  {
    id: 'project-10',
    title: 'MQL 데이터 기반 B2B 영업 기회 예측',
    period: '2024 · LG Aimers 4기',
    year: '2024',
    category: 'data',
    summary: 'MQL 데이터 기반 B2B 영업 기회 창출 예측 모델 개발',
    description: 'MQL(Marketing Qualified Lead) 데이터를 기반으로 B2B 영업 기회 창출을 예측하는 모델을 개발한 프로젝트입니다.',
    techStack: ['Python', 'Scikit-learn'],
    award: null,
    link: null,
    problem: 'B2B 영업에서 MQL 중 실제 영업 기회로 전환되는 리드를 사전에 식별하기 어려워 영업 리소스가 비효율적으로 배분됨',
    hypothesis: 'MQL 데이터의 행동 패턴과 속성을 분석하면 영업 기회 전환 가능성이 높은 리드를 사전에 예측할 수 있을 것이다',
    solution: 'MQL 데이터 전처리 및 피처 엔지니어링 후 분류 모델을 학습시켜 영업 기회 전환 예측 시스템 구축',
    outcome: 'B2B 영업 기회 예측 모델 개발 완료',
    metrics: [
      { label: '프로그램', value: 'LG Aimers 4기' },
      { label: '분석 대상', value: 'MQL 데이터' }
    ]
  },
  {
    id: 'project-11',
    title: '투자 교육 및 훈련 플랫폼 서비스 기획',
    period: '2024 · 미래에셋증권 AI Data Festival (팀원/기획)',
    year: '2024',
    category: 'service',
    summary: '투자 교육 및 훈련 플랫폼 서비스 기획 및 개발',
    description: '미래에셋증권 AI Data Festival에서 투자 교육 및 훈련 플랫폼 서비스를 기획한 프로젝트입니다.',
    techStack: ['Figma', 'Notion'],
    award: null,
    link: null,
    problem: '초보 투자자가 실전 투자 전에 안전하게 학습하고 훈련할 수 있는 체계적인 플랫폼이 부족',
    hypothesis: '단계별 투자 교육 커리큘럼과 모의 투자 훈련 기능을 결합하면 초보 투자자의 학습 효과를 높일 수 있을 것이다',
    solution: '사용자 리서치 기반으로 단계별 교육 콘텐츠와 모의 투자 시뮬레이션을 결합한 플랫폼 서비스를 기획하고 Figma로 프로토타입 제작',
    outcome: '투자 교육 플랫폼 서비스 기획서 및 프로토타입 완성',
    metrics: [
      { label: '대회', value: 'AI Data Festival' },
      { label: '역할', value: '서비스 기획' }
    ]
  },
  {
    id: 'project-12',
    title: '머신러닝 프로젝트',
    period: '2023 · 머신러닝',
    year: '2023',
    category: 'data',
    summary: '머신러닝 기법을 활용한 데이터 분석 및 모델링 프로젝트',
    description: '머신러닝 기법을 활용한 데이터 분석 및 모델링 프로젝트입니다.',
    techStack: ['Python', 'Scikit-learn'],
    award: null,
    link: null,
    problem: '데이터 분석 과정에서 전통적 통계 기법만으로는 복잡한 패턴을 포착하기 어려운 한계가 존재',
    hypothesis: '머신러닝 알고리즘을 적용하면 데이터 내 비선형 패턴을 학습하여 분석 정확도를 향상시킬 수 있을 것이다',
    solution: '다양한 머신러닝 알고리즘(회귀, 분류, 클러스터링)을 비교 실험하고 최적 모델을 선정하여 분석 파이프라인 구축',
    outcome: '머신러닝 기반 데이터 분석 모델 개발 및 성능 비교 보고서 완성',
    metrics: [
      { label: '알고리즘', value: '3종 비교' },
      { label: '분석 기법', value: '회귀·분류·클러스터링' }
    ]
  }
];

/**
 * 프로젝트 ID로 데이터 조회
 * @param {string} id - 프로젝트 고유 식별자
 * @returns {Project|undefined}
 */
function getProjectById(id) {
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].id === id) return projects[i];
  }
  return undefined;
}

/**
 * 스무스 스크롤 실행
 * @param {string} targetId - 이동할 섹션의 id (예: "about", "projects")
 */
function smoothScrollTo(targetId) {
  var target = document.getElementById(targetId);
  if (!target) return;
  var navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
    10
  ) || 64;
  var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

/**
 * 현재 활성 섹션 업데이트
 * @param {HTMLElement[]} sections - 모든 섹션 요소 배열
 * @param {HTMLElement[]} navLinks - 모든 네비게이션 링크 배열
 */
function updateActiveNav(sections, navLinks) {
  var navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
    10
  ) || 64;
  var scrollPos = window.pageYOffset + navHeight + 1;
  var currentId = '';

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (section.offsetTop <= scrollPos) {
      currentId = section.getAttribute('id');
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    var link = navLinks[j];
    if (link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
}

/**
 * 네비게이션 초기화
 * - 스무스 스크롤 처리
 * - 스크롤 위치 기반 활성 링크 업데이트
 * - 스크롤 이벤트 리스너 등록
 */
function initNavigation() {
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('main > section');
  var ticking = false;

  // 클릭 시 스무스 스크롤
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });

  // 스크롤 이벤트 (requestAnimationFrame 스로틀)
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActiveNav(sections, navLinks);
        ticking = false;
      });
      ticking = true;
    }
  });

  // 초기 활성 링크 설정
  updateActiveNav(sections, navLinks);
}

// 테스트를 위해 함수를 window에 노출
window.smoothScrollTo = smoothScrollTo;
window.updateActiveNav = updateActiveNav;

/**
 * Intersection Observer 콜백 - Viewport 진입 시 'visible' 클래스 추가
 * @param {IntersectionObserverEntry[]} entries - Observer 엔트리 배열
 * @param {IntersectionObserver} observer - Observer 인스턴스
 */
function handleIntersection(entries, observer) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('visible');
      observer.unobserve(entries[i].target);
    }
  }
}

// 테스트를 위해 handleIntersection을 window에 노출
window.handleIntersection = handleIntersection;

/**
 * 스크롤 애니메이션 초기화
 * - Intersection Observer를 사용하여 섹션 등장 애니메이션 처리
 * - .animate-on-scroll 요소에 Observer 등록
 * - Viewport 진입 시 'visible' 클래스 추가
 */
function initScrollAnimations() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  var observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
}

/**
 * 프로젝트 카드 필터링
 * @param {string} category - 필터 카테고리 (예: "all", "2024", "data")
 * @param {NodeList|HTMLElement[]} cards - 프로젝트 카드 요소 배열
 * @returns {HTMLElement[]} 필터 조건에 맞는 카드 배열
 */
function filterProjects(category, cards) {
  var matched = [];
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    if (category === 'all') {
      card.classList.remove('hidden');
      matched.push(card);
    } else {
      var year = card.getAttribute('data-year');
      var cat = card.getAttribute('data-category');
      if (year === category || cat === category) {
        card.classList.remove('hidden');
        matched.push(card);
      } else {
        card.classList.add('hidden');
      }
    }
  }
  return matched;
}

// 테스트를 위해 filterProjects를 window에 노출
window.filterProjects = filterProjects;

/**
 * 프로젝트 필터 초기화
 * - 필터 버튼 클릭 이벤트 바인딩
 * - data-year, data-category 기반 카드 필터링
 * - 프로젝트 카드 클릭 시 모달 열기
 */
function initProjectFilters() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // 모든 버튼에서 active 제거, aria-pressed false
      for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].classList.remove('active');
        filterBtns[i].setAttribute('aria-pressed', 'false');
      }
      // 클릭된 버튼에 active 추가, aria-pressed true
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');

      var filterValue = this.getAttribute('data-filter');
      filterProjects(filterValue, cards);
    });
  });

  // 프로젝트 카드 클릭/Enter 시 모달 열기
  cards.forEach(function (card) {
    function handleCardOpen() {
      var projectId = card.getAttribute('data-project-id');
      var projectData = projectId ? getProjectById(projectId) : null;

      // projects 배열에서 데이터를 찾지 못하면 DOM에서 추출 (폴백)
      if (!projectData) {
        var content = card.querySelector('.card-content');
        var titleEl = content.querySelector('h3');
        var periodEl = content.querySelector('.card-period');
        var summaryEl = content.querySelector('.card-summary');
        var techTags = content.querySelectorAll('.tech-tag');
        var awardEl = content.querySelector('.award-badge');

        var techStack = [];
        for (var i = 0; i < techTags.length; i++) {
          techStack.push(techTags[i].textContent);
        }

        projectData = {
          title: titleEl ? titleEl.textContent : '',
          period: periodEl ? periodEl.textContent : '',
          description: summaryEl ? summaryEl.textContent : '',
          techStack: techStack,
          award: awardEl ? awardEl.textContent : null,
          link: null,
          problem: '',
          hypothesis: '',
          solution: '',
          outcome: '',
          metrics: []
        };

        // DOM에서 PHSO 추출
        var phsoItems = content.querySelectorAll('.phso-item');
        var phsoFields = ['problem', 'hypothesis', 'solution', 'outcome'];
        for (var j = 0; j < phsoItems.length && j < phsoFields.length; j++) {
          var p = phsoItems[j].querySelector('p');
          if (p) projectData[phsoFields[j]] = p.textContent;
        }

        // DOM에서 metrics 추출
        var metricBadges = content.querySelectorAll('.card-metrics .metric-badge');
        for (var k = 0; k < metricBadges.length; k++) {
          var strongEl = metricBadges[k].querySelector('strong');
          var value = strongEl ? strongEl.textContent : '';
          var label = metricBadges[k].textContent.replace(value, '').trim();
          projectData.metrics.push({ label: label, value: value });
        }
      }

      openModal(projectData, card);
    }

    card.addEventListener('click', handleCardOpen);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardOpen();
      }
    });
  });

  // 모달 닫기 이벤트: 닫기 버튼
  var closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // 모달 닫기 이벤트: 오버레이 클릭 (모달 콘텐츠 외부)
  var overlay = document.getElementById('project-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }

  // 모달 닫기 이벤트: Escape 키
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var modalOverlay = document.getElementById('project-modal-overlay');
      if (modalOverlay && !modalOverlay.hasAttribute('hidden')) {
        closeModal();
      }
    }
  });
}

// 모달을 열었던 트리거 요소 (포커스 복원용)
var _modalTriggerElement = null;
// 포커스 트랩 키다운 핸들러 참조
var _focusTrapHandler = null;

/**
 * PHSO 영역 렌더링
 * @param {HTMLElement} overlay - 모달 오버레이 요소
 * @param {Object} projectData - 프로젝트 데이터
 */
function renderPHSO(overlay, projectData) {
  var fields = ['problem', 'hypothesis', 'solution', 'outcome'];
  var selectors = ['.modal-problem', '.modal-hypothesis', '.modal-solution', '.modal-outcome'];

  for (var i = 0; i < fields.length; i++) {
    var el = overlay.querySelector(selectors[i]);
    var section = el ? el.closest('.modal-phso-section') : null;
    var value = projectData[fields[i]] || '';

    if (el) el.textContent = value;
    if (section) {
      if (value) {
        section.removeAttribute('hidden');
      } else {
        section.setAttribute('hidden', '');
      }
    }
  }
}

/**
 * Metric Badge 렌더링
 * @param {HTMLElement} container - .modal-metrics 컨테이너
 * @param {Array} metrics - { label, value } 배열
 */
function renderMetricBadges(container, metrics) {
  if (!container) return;
  container.innerHTML = '';

  if (!metrics || !metrics.length) {
    container.setAttribute('hidden', '');
    return;
  }

  container.removeAttribute('hidden');
  for (var i = 0; i < metrics.length; i++) {
    var badge = document.createElement('span');
    badge.className = 'metric-badge';
    badge.setAttribute('aria-label', metrics[i].value + ' ' + metrics[i].label);
    var strong = document.createElement('strong');
    strong.textContent = metrics[i].value;
    badge.appendChild(strong);
    badge.appendChild(document.createTextNode(' ' + metrics[i].label));
    container.appendChild(badge);
  }
}

/**
 * 모달 열기
 * @param {Object} projectData - 프로젝트 상세 데이터
 * @param {HTMLElement} [triggerElement] - 모달을 열었던 요소 (포커스 복원용)
 */
function openModal(projectData, triggerElement) {
  var overlay = document.getElementById('project-modal-overlay');
  if (!overlay) return;

  _modalTriggerElement = triggerElement || null;

  // 모달 내용 채우기
  var titleEl = overlay.querySelector('.modal-project-title');
  var periodEl = overlay.querySelector('.modal-period');
  var descEl = overlay.querySelector('.modal-description');
  var techEl = overlay.querySelector('.modal-tech-stack');
  var awardEl = overlay.querySelector('.modal-award');
  var linkEl = overlay.querySelector('.modal-link');

  if (titleEl) titleEl.textContent = projectData.title || '';
  if (periodEl) periodEl.textContent = projectData.period || '';
  if (descEl) descEl.textContent = projectData.description || '';

  // 기술 스택 태그 생성
  if (techEl) {
    techEl.innerHTML = '';
    var techStack = projectData.techStack || [];
    for (var i = 0; i < techStack.length; i++) {
      var span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = techStack[i];
      techEl.appendChild(span);
    }
  }

  // 수상 이력
  if (awardEl) {
    if (projectData.award) {
      awardEl.textContent = projectData.award;
      awardEl.removeAttribute('hidden');
    } else {
      awardEl.textContent = '';
      awardEl.setAttribute('hidden', '');
    }
  }

  // 외부 링크
  if (linkEl) {
    if (projectData.link) {
      linkEl.href = projectData.link;
      linkEl.removeAttribute('hidden');
    } else {
      linkEl.setAttribute('hidden', '');
    }
  }

  // PHSO 렌더링
  renderPHSO(overlay, projectData);

  // Metric Badge 렌더링
  var metricsContainer = overlay.querySelector('.modal-metrics');
  renderMetricBadges(metricsContainer, projectData.metrics || []);

  // 모달 표시
  overlay.removeAttribute('hidden');
  document.body.classList.add('modal-open');

  // 닫기 버튼에 포커스
  var closeBtn = overlay.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.focus();
  }

  // 포커스 트랩 설정
  setupFocusTrap(overlay);
}

/**
 * 모달 닫기
 */
function closeModal() {
  var overlay = document.getElementById('project-modal-overlay');
  if (!overlay) return;

  overlay.setAttribute('hidden', '');
  document.body.classList.remove('modal-open');

  // 포커스 트랩 해제
  removeFocusTrap();

  // 트리거 요소로 포커스 복원
  if (_modalTriggerElement) {
    _modalTriggerElement.focus();
    _modalTriggerElement = null;
  }
}

/**
 * 포커스 트랩 설정 - 모달 내부에서만 Tab 이동 가능
 * @param {HTMLElement} overlay - 모달 오버레이 요소
 */
function setupFocusTrap(overlay) {
  removeFocusTrap();

  _focusTrapHandler = function (e) {
    if (e.key !== 'Tab') return;

    var modal = overlay.querySelector('.modal');
    if (!modal) return;

    var focusableSelectors = 'a[href]:not([hidden]), button:not([disabled]):not([hidden]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]):not([hidden])';
    var focusableElements = modal.querySelectorAll(focusableSelectors);
    if (!focusableElements.length) return;

    var firstFocusable = focusableElements[0];
    var lastFocusable = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: 첫 번째 요소에서 마지막으로 이동
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab: 마지막 요소에서 첫 번째로 이동
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  document.addEventListener('keydown', _focusTrapHandler);
}

/**
 * 포커스 트랩 해제
 */
function removeFocusTrap() {
  if (_focusTrapHandler) {
    document.removeEventListener('keydown', _focusTrapHandler);
    _focusTrapHandler = null;
  }
}

// 테스트를 위해 openModal, closeModal을 window에 노출
window.openModal = openModal;
window.closeModal = closeModal;
window.projects = projects;
window.getProjectById = getProjectById;
window.renderPHSO = renderPHSO;
window.renderMetricBadges = renderMetricBadges;

/**
 * Highlight 섹션 초기화
 * - data-award="true" 속성을 가진 프로젝트 카드를 찾아 Highlight 섹션에 렌더링
 */
function initHighlightSection() {
  var container = document.querySelector('.highlight-grid');
  if (!container) return;

  var awardCards = document.querySelectorAll('.project-card[data-award="true"]');
  for (var i = 0; i < awardCards.length; i++) {
    var card = awardCards[i];
    var projectId = card.getAttribute('data-project-id');
    var project = getProjectById(projectId);
    if (!project) continue;

    var item = document.createElement('div');
    item.className = 'highlight-item';
    item.innerHTML =
      '<span class="highlight-award">' + (project.award || '') + '</span>' +
      '<h3 class="highlight-title">' + project.title + '</h3>' +
      '<p class="highlight-summary">' + project.outcome + '</p>';
    container.appendChild(item);
  }
}

// 테스트를 위해 initHighlightSection을 window에 노출
window.initHighlightSection = initHighlightSection;

/**
 * 메뉴 토글
 * @param {HTMLElement} menuElement - 메뉴 DOM 요소
 * @param {HTMLElement} hamburgerBtn - 햄버거 버튼 요소
 * @param {boolean} isOpen - 현재 열림 상태
 * @returns {boolean} 새로운 열림 상태
 */
function toggleMenu(menuElement, hamburgerBtn, isOpen) {
  var newState = !isOpen;
  menuElement.classList.toggle('open', newState);
  hamburgerBtn.classList.toggle('open', newState);
  hamburgerBtn.setAttribute('aria-expanded', String(newState));
  return newState;
}

// 테스트를 위해 toggleMenu를 window에 노출
window.toggleMenu = toggleMenu;

/**
 * 햄버거 메뉴 초기화
 * - 메뉴 열기/닫기 토글
 * - aria-expanded 속성 동적 업데이트
 * - Escape 키로 메뉴 닫기
 * - 메뉴 항목 클릭 시 자동 닫기
 * - 메뉴 외부 클릭 시 닫기
 */
function initHamburgerMenu() {
  var hamburgerBtn = document.querySelector('.hamburger');
  var navMenu = document.getElementById('nav-menu');
  if (!hamburgerBtn || !navMenu) return;

  var isOpen = false;

  // 햄버거 버튼 클릭 시 토글
  hamburgerBtn.addEventListener('click', function () {
    isOpen = toggleMenu(navMenu, hamburgerBtn, isOpen);
  });

  // Escape 키로 메뉴 닫기
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      isOpen = toggleMenu(navMenu, hamburgerBtn, isOpen);
    }
  });

  // 메뉴 항목 클릭 시 자동 닫기
  var navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (isOpen) {
        isOpen = toggleMenu(navMenu, hamburgerBtn, isOpen);
      }
    });
  });

  // 메뉴 외부 클릭 시 닫기
  document.addEventListener('click', function (e) {
    if (isOpen && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      isOpen = toggleMenu(navMenu, hamburgerBtn, isOpen);
    }
  });
}

/**
 * Hero 섹션 애니메이션 초기화
 * - 페이지 로드 시 텍스트 요소 순차 페이드인
 * - CTA 버튼 클릭 이벤트 연결
 */
function initHeroAnimation() {
  var ctaBtn = document.querySelector('.hero-cta');
  if (!ctaBtn) return;

  ctaBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href').substring(1);
    smoothScrollTo(targetId);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initScrollAnimations();
  initProjectFilters();
  initHamburgerMenu();
  initHeroAnimation();
  initHighlightSection();
});
