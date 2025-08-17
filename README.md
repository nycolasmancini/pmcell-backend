# PMCELL Medusa Backend

Backend API para loja PMCELL usando Medusa v2.

## Configuração Railway

### 1. Variáveis de Ambiente
Configure estas variáveis no Railway:

```env
DATABASE_URL=postgresql://user:password@host:port/database
JWT_SECRET=your-jwt-secret-here
COOKIE_SECRET=your-cookie-secret-here
STORE_CORS=https://your-frontend-domain.vercel.app
ADMIN_CORS=https://your-admin-domain.com
NODE_ENV=production
PORT=9000
MEDUSA_FF_MEDUSA_V2=true
```

### 2. Banco de Dados
O Railway irá provisionar automaticamente um PostgreSQL.

### 3. Deploy
O Railway executará automaticamente:
1. `npm install`
2. `npm run build`
3. `npm run db:migrate`
4. `npm start`

## Endpoints Importantes
- Health Check: `/health`
- Admin: `/app`
- Store API: `/store/*`
- Admin API: `/admin/*`

## Desenvolvimento Local
```bash
npm install
npm run dev
```