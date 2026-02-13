# rlg
# İslam Rehberi - Yeni Müslümanlar İçin Başlangıç Rehberi

Yeni Müslüman olmuş veya İslam'ı araştıran kişiler için kapsamlı, güvenilir ve sade anlatımlı rehber.

## 🌟 Özellikler

- **Çok Dilli Destek**: Türkçe, İngilizce ve Almanca
- **Adım Adım Öğrenme**: Sistematik ve anlaşılır içerik
- **30 Günlük Plan**: Yeni Müslümanlar için özel program
- **SEO Optimizasyonu**: Arama motorlarında kolay bulunabilirlik
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm

## 🚀 Teknoloji Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Internationalization**: next-intl
- **Content**: MDX
- **Deployment**: Docker, Nginx

## 📁 Proje Yapısı

```
├── apps/
│   └── web/                 # Next.js web uygulaması
├── packages/
│   ├── ui/                  # Paylaşılan UI bileşenleri
│   └── config/              # Paylaşılan konfigürasyonlar
├── docker/                  # Docker konfigürasyonları
└── docs/                    # Dokümantasyon
```

## 🛠️ Kurulum

### Gereksinimler

- Node.js 18+
- PostgreSQL 15+
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
   ```bash
   git clone https://github.com/angebotspar-debug/rlg.git
   cd rlg
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Veritabanını başlatın**
   ```bash
   docker-compose up postgres -d
   ```

4. **Environment dosyasını oluşturun**
   ```bash
   cp apps/web/.env.example apps/web/.env
   ```

5. **Veritabanını migrate edin**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

6. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## 🐳 Docker ile Çalıştırma

```bash
# Geliştirme ortamı
docker-compose up

# Production ortamı
docker-compose --profile production up
```

## 📚 İçerik Yapısı

### Kategoriler
- **Temel Bilgiler**: İslam'ın temelleri
- **İbadetler**: Namaz, oruç, hac
- **Günlük Hayat**: Müslüman yaşam tarzı
- **Öğrenme Planları**: Sistematik eğitim

### Dil Desteği
- **Türkçe**: `/tr/` - Ana dil
- **İngilizce**: `/en/` - İkinci dil
- **Almanca**: `/de/` - Üçüncü dil

## 🔧 Geliştirme

### Yeni İçerik Ekleme

1. **MDX dosyası oluşturun**
   ```bash
   # Türkçe içerik
   apps/web/content/tr/yeni-makale.mdx
   
   # İngilizce içerik
   apps/web/content/en/new-article.mdx
   ```

2. **Frontmatter ekleyin**
   ```yaml
   ---
   title: "Makale Başlığı"
   summary: "Makale özeti"
   slug: "makale-slug"
   language: "TR"
   categoryId: "kategori-id"
   ---
   ```

3. **Veritabanını güncelleyin**
   ```bash
   npm run db:seed
   ```

### Yeni Dil Ekleme

1. **Locale ekleyin**
   ```typescript
   // apps/web/src/i18n.ts
   export const locales = ['tr', 'en', 'de', 'fr'] // Yeni dil
   ```

2. **Çeviri dosyası oluşturun**
   ```bash
   apps/web/messages/fr.json
   ```

3. **Middleware'i güncelleyin**
   ```typescript
   // apps/web/src/middleware.ts
   matcher: ['/', '/(tr|en|de|fr)/:path*']
   ```

## 🔒 Güvenlik

- **CSRF Koruması**: Cross-site request forgery koruması
- **XSS Koruması**: Cross-site scripting koruması
- **Rate Limiting**: API isteklerinde hız sınırlaması
- **Security Headers**: Güvenlik başlıkları
- **Input Sanitization**: Kullanıcı girdi temizleme

## 📈 SEO Optimizasyonu

- **Meta Tags**: Dinamik meta etiketleri
- **Structured Data**: Schema.org işaretlemesi
- **Sitemap**: Otomatik sitemap oluşturma
- **Open Graph**: Sosyal medya paylaşımları
- **Multi-language**: Çok dilli SEO desteği

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Docker Production

```bash
docker-compose --profile production up -d
```

### Environment Variables

```bash
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/db"

# Application
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NODE_ENV="production"

# Security
CSRF_SECRET="your-csrf-secret"
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Website**: https://islamrehberi.com
- **Email**: iletisim@islamrehberi.com
- **GitHub**: https://github.com/angebotspar-debug/rlg

## 🙏 Teşekkürler

Bu proje, yeni Müslüman kardeşlerimize faydalı olmak amacıyla hazırlanmıştır. Allah'ın rızası için yapılan bu çalışmanın hayırlı olmasını dileriz.

---

**Not**: Bu proje, mezhep tartışması içermez, politik içerik barındırmaz ve sade, birleştirici bir yaklaşım benimser.
