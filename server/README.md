# Prisma TypeScript Backend

A complete backend API built with Prisma, TypeScript, PostgreSQL, and Express.

## 🚀 Features

- ✅ Full CRUD operations for Users and Posts
- ✅ Type-safe database queries with Prisma
- ✅ RESTful API endpoints
- ✅ Proper error handling
- ✅ Database migrations
- ✅ Development and production scripts
- ✅ ESM modules support

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

### 3. Initialize Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Create and apply migrations
npm run prisma:migrate

# (Optional) Seed database with sample data
npm run db:seed
```

### 4. Run the Application

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
# Build the project
npm run build

# Start the server
npm start
```

## 📚 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with auto-reload |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run prisma:generate` | Generate Prisma Client |
| `npm run prisma:migrate` | Create and apply migrations |
| `npm run prisma:studio` | Open Prisma Studio (database GUI) |
| `npm run db:push` | Push schema changes without migration |
| `npm run db:seed` | Seed database with sample data |

## 🔌 API Endpoints

### Health Check
- `GET /health` - Check server and database status

### Users

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/users` | Create a new user | `{ "email": "user@example.com", "name": "John Doe" }` |
| GET | `/api/users` | Get all users | Query: `?skip=0&take=10&includePosts=true` |
| GET | `/api/users/:id` | Get user by ID | Query: `?includePosts=true` |
| PUT | `/api/users/:id` | Update user | `{ "email": "new@example.com", "name": "Jane Doe" }` |
| DELETE | `/api/users/:id` | Delete user | - |
| GET | `/api/users/search/:query` | Search users | - |

### Posts

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/posts` | Create a new post | `{ "title": "Title", "content": "Content", "published": true, "authorId": 1 }` |
| GET | `/api/posts` | Get all posts | Query: `?skip=0&take=10&publishedOnly=true&includeAuthor=true` |
| GET | `/api/posts/:id` | Get post by ID | Query: `?includeAuthor=true` |
| GET | `/api/users/:authorId/posts` | Get posts by author | Query: `?publishedOnly=true` |
| PUT | `/api/posts/:id` | Update post | `{ "title": "New Title", "content": "New Content", "published": false }` |
| PATCH | `/api/posts/:id/publish` | Publish a post | - |
| DELETE | `/api/posts/:id` | Delete post | - |
| GET | `/api/posts/search/:query` | Search posts | Query: `?publishedOnly=true` |

## 📝 Example Requests

### Create a User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "name": "John Doe"}'
```

### Get All Users
```bash
curl http://localhost:3000/api/users?includePosts=true
```

### Create a Post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post",
    "published": true,
    "authorId": 1
  }'
```

### Search Posts
```bash
curl http://localhost:3000/api/posts/search/prisma?publishedOnly=true
```

## 🗂️ Project Structure

```
.
├── src/
│   ├── lib/
│   │   └── prisma.ts          # Prisma client instance
│   ├── services/
│   │   ├── user.service.ts    # User CRUD operations
│   │   └── post.service.ts    # Post CRUD operations
│   └── index.ts               # Express server & routes
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── migrations/            # Database migrations
│   └── seed.ts                # Database seeding
├── dist/                      # Compiled JavaScript (generated)
├── generated/                 # Generated Prisma Client (generated)
├── package.json
├── tsconfig.json
└── .env
```

## 🔧 Service Methods

### UserService

- `create(data)` - Create a new user
- `findAll(options)` - Get all users with pagination
- `findById(id, includePosts)` - Get user by ID
- `findByEmail(email, includePosts)` - Get user by email
- `update(id, data)` - Update user
- `delete(id)` - Delete user
- `count()` - Count total users
- `search(query)` - Search users by name or email

### PostService

- `create(data)` - Create a new post
- `findAll(options)` - Get all posts with filters
- `findById(id, includeAuthor)` - Get post by ID
- `findByAuthor(authorId, publishedOnly)` - Get posts by author
- `update(id, data)` - Update post
- `delete(id)` - Delete post
- `publish(id)` - Publish a post
- `unpublish(id)` - Unpublish a post
- `count(publishedOnly)` - Count total posts
- `search(query, publishedOnly)` - Search posts

## 🛡️ Error Handling

All service methods include proper error handling:
- Unique constraint violations
- Not found errors
- Foreign key violations
- Database connection issues

## 🎨 TypeScript Support

Full TypeScript support with:
- Type-safe database queries
- Generated types from Prisma schema
- Strict type checking
- IntelliSense support

## 📦 Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🚦 Port Configuration

Default port: `3000`

Change port in `.env`:
```env
PORT=8080
```
