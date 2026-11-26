# SkillSync AI — Frontend Replica

Frontend-only recreation of the uploaded SkillSync Bidding Hub, migrated to the requested stack.

## Stack
- React.js + Vite + JavaScript/JSX
- React Router
- Axios (JWT-ready API client)
- TanStack Query
- Tailwind CSS
- Recharts
- lucide-react

## Backend-ready target
The frontend is structured to integrate with:
- Python 3.11+
- FastAPI + Uvicorn
- Pydantic v2 REST APIs
- PostgreSQL via DATABASE_URL
- SQLAlchemy 2.0 + Alembic
- JWT + bcrypt
- Client / Developer roles
- scikit-learn, pandas, numpy, joblib, sentence-transformers all-MiniLM-L6-v2, with TF-IDF fallback

No backend or ML implementation is included. The current app uses an in-memory mock data layer so every UI module is demonstrable without a server. Replace `src/lib/mockApi.js` calls with Axios endpoints when the FastAPI backend is available.

## Modules replicated
- Authentication / demo role selection
- Client and Developer dashboards
- Project listing, search, status filtering
- Project creation with eligibility criteria
- Project detail and AI signal panel
- Eligibility rules
- AI developer recommendations with explainable scores
- Proposal/bid submission
- Client proposal review and award flow
- Developer proposal history
- Project-scoped messaging
- Developer directory / portfolio view
- Reviews/ratings represented in developer data and recommendation cards
- Stability, duplicate-risk and proposal-quality signal presentation
- Settings, presenter role switching and trust/explainability panel
- Responsive sidebar/navigation and notification affordance
- Recharts dashboard analytics
- Axios JWT-ready API client

## Run
```bash
npm install
npm run dev
```

Default demo credentials are local-only; choose Client or Developer on `/login`.
