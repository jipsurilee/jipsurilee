# 집수리 이선생 홈페이지

GitHub Pages에 바로 올릴 수 있는 정적 홈페이지입니다.

## 포함 파일
- `index.html` : 메인 페이지
- `styles.css` : 반응형 디자인
- `script.js` : 모바일 메뉴, 시공사례 필터, 문의 복사 기능
- `assets/` : 현재는 샘플 SVG 이미지

## 반드시 바꿀 곳
`index.html`에서 아래 내용을 실제 정보로 바꾸세요.
1. `01000000000` → 실제 전화번호
2. `#`로 되어 있는 네이버 블로그 링크 → 실제 블로그 주소
3. `assets/*.svg` → 실제 시공 사진 (파일명 유지하면 HTML 수정 없이 교체 가능)

## GitHub Pages에 올리는 순서
1. GitHub에 새 Public repository 생성
2. 이 폴더 안의 파일 전체 업로드
3. Repository → Settings → Pages
4. Build and deployment에서 `Deploy from a branch`
5. Branch는 `main`, 폴더는 `/ (root)` 선택 후 Save
6. 잠시 후 `https://아이디.github.io/저장소이름/` 주소 생성

## 독립 도메인 연결
GitHub Pages Settings의 Custom domain에 구매한 도메인을 입력하고,
도메인 판매처 DNS에서 GitHub Pages 안내값을 연결하면 됩니다.

## 실제 문의폼을 이메일로 받으려면
현재 버전은 서버가 없어 문의 내용을 "클립보드에 복사"합니다.
Formspree 같은 폼 서비스를 연결하면 이메일로 받을 수 있습니다.
