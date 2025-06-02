# LLVM Flow API (FastAPI)

## 소개
LLVM-FLOW의 API

## 실행 방법

1. Run
```
docker compose up
```

## API 문서
- Swagger: [http://localhost:8000/docs](http://localhost:8000/docs)
- Redoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## 주요 엔드포인트
- POST `/upload/C` : C 파일 업로드 및 분석
- POST `/upload/CPP` : C++ 파일 업로드 및 분석
- POST `/upload/LL` : LL 파일 업로드 및 분석
- GET `/optimization-history`: 파일을 업로드 해서 pass를 적용했던 히스토리
- POST `/show` : 선택한 데이터의 그래프 다시 보기

