# Kurulum Rehberi

Bu dokümanda "İslam Rehberi" projesinin nasıl kurulacağı ve çalıştırılacağı anlatılmaktadır.

## Sistem Gereksinimleri

### Minimum Gereksinimler
- **Node.js**: 18.0.0 veya üzeri
- **npm**: 8.0.0 veya üzeri
- **PostgreSQL**: 15.0 veya üzeri
- **Git**: 2.30.0 veya üzeri

### Önerilen Gereksinimler
- **RAM**: 4GB veya üzeri
- **Disk**: 10GB boş alan
- **İşletim Sistemi**: Ubuntu 20.04+, macOS 12+, Windows 10+

## Adım Adım Kurulum

### 1. Repository'yi Klonlama

```bash
# HTTPS ile klonlama
git clone https://github.com/angebotspar-debug/rlg.git

# SSH ile klonlama (önerilen)
git clone git@github.com:angebotspar-debug/rlg.git

# Proje dizinine geçiş
cd rlg
```

### 2. Bağımlılıkları Yükleme

```bash
# Root seviyesinde bağımlılıkları yükle
npm install

# Web uygulaması bağımlılıklarını yükle
cd apps/web
npm install
cd ../..
```

### 3. Veritabanı Kurulumu

#### Option A: Docker ile (Önerilen)

```bash
# PostgreSQL container'ını başlat
docker-compose up postgres -d

# Container'ın çalıştığını kontrol et
docker ps
```

#### Option B: Manuel Kurulum

```bash
# PostgreSQL kurulumu (Ubuntu)
sudo apt update
sudo apt install postgresql postgresql-contrib

# PostgreSQL servisini başlat
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Veritabanı oluştur
sudo -u postgres createdb islamic_guidance
```

### 4. Environment Konfigürasyonu

```bash
# Environment dosyasını kopyala
cp apps/web/.env.example apps/web/.env

# Environment dosyasını düzenle
nano apps/web/.env
```

**Gerekli environment değişkenleri:**

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/islamic_guidance?schema=public"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Security
CSRF_SECRET="your-random-secret-key-here"
```

### 5. Veritabanı Migrasyonu

```bash
# Prisma client oluştur
npm run db:generate

# Veritabanı şemasını oluştur
npm run db:push

# Örnek verileri yükle
npm run db:seed
```

### 6. Geliştirme Sunucusunu Başlatma

```bash
# Geliştirme modunda başlat
npm run dev

# Veya sadece web uygulamasını başlat
cd apps/web
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## Docker ile Kurulum

### Geliştirme Ortamı

```bash
# Tüm servisleri başlat
docker-compose up

# Arka planda çalıştır
docker-compose up -d

# Logları takip et
docker-compose logs -f web
```

### Production Ortamı

```bash
# Production profili ile başlat
docker-compose --profile production up -d

# SSL sertifikalarını yapılandır
sudo certbot --nginx -d yourdomain.com
```

## Doğrulama

### 1. Sağlık Kontrolü

```bash
# Web uygulamasının çalıştığını kontrol et
curl http://localhost:3000

# Veritabanı bağlantısını kontrol et
npm run db:studio
```

### 2. Test Çalıştırma

```bash
# Unit testleri çalıştır
npm run test

# E2E testleri çalıştır
npm run test:e2e

# Linting kontrolü
npm run lint
```

### 3. Build Testi

```bash
# Production build oluştur
npm run build

# Production modunda çalıştır
npm run start
```

## Sorun Giderme

### Yaygın Sorunlar

#### 1. Port Çakışması

```bash
# 3000 portunu kullanan process'i bul
lsof -i :3000

# Process'i sonlandır
kill -9 <PID>
```

#### 2. Veritabanı Bağlantı Hatası

```bash
# PostgreSQL servisinin çalıştığını kontrol et
sudo systemctl status postgresql

# Bağlantı ayarlarını kontrol et
psql -h localhost -U postgres -d islamic_guidance
```

#### 3. Node Modules Sorunu

```bash
# Node modules'ları temizle
rm -rf node_modules apps/web/node_modules

# Package-lock dosyalarını temizle
rm package-lock.json apps/web/package-lock.json

# Yeniden yükle
npm install
```

#### 4. Prisma Sorunları

```bash
# Prisma client'ı yeniden oluştur
npm run db:generate

# Veritabanını sıfırla
npm run db:reset

# Migration'ları yeniden çalıştır
npm run db:migrate
```

### Log Kontrolü

```bash
# Uygulama logları
tail -f apps/web/.next/trace

# Docker logları
docker-compose logs -f

# PostgreSQL logları
docker-compose logs postgres
```

## Geliştirme Araçları

### Önerilen VS Code Eklentileri

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint"
  ]
}
```

### Faydalı Komutlar

```bash
# Veritabanı studio'yu aç
npm run db:studio

# Type checking
npm run type-check

# Kod formatlama
npm run format

# Dependency güncellemesi
npm run update-deps
```

## Sonraki Adımlar

1. [Geliştirme Rehberi](./development.md) - Kod geliştirme süreçleri
2. [Deployment Rehberi](./deployment.md) - Production'a çıkarma
3. [API Dokümantasyonu](./api.md) - API endpoint'leri
4. [Katkıda Bulunma](../CONTRIBUTING.md) - Projeye katkı sağlama

## Destek

Kurulum sırasında sorun yaşarsanız:

1. [GitHub Issues](https://github.com/angebotspar-debug/rlg/issues) - Sorun bildirimi
2. [Discussions](https://github.com/angebotspar-debug/rlg/discussions) - Topluluk desteği
3. Email: iletisim@islamrehberi.com
