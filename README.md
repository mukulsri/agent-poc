# agent-poc

A small task management REST API.

## Endpoints

- `GET /health` — health check
- `GET /tasks` — list all tasks
- `POST /tasks` — create a task (`{ "title": "...", "assignee": "..." }`)
- `GET /tasks/:id` — get a task
- `POST /tasks/:id/complete` — mark a task complete

## Run locally

```bash
npm install
npm start
```

## Test

```bash
npm test
```
