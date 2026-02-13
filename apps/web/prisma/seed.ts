import { PrismaClient, Language, Level } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'temel-bilgiler' },
      update: {},
      create: {
        slug: 'temel-bilgiler',
        title: 'Temel Bilgiler',
        order: 1,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'ibadetler' },
      update: {},
      create: {
        slug: 'ibadetler',
        title: 'İbadetler',
        order: 2,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'gunluk-hayat' },
      update: {},
      create: {
        slug: 'gunluk-hayat',
        title: 'Günlük Hayat',
        order: 3,
      },
    }),
    prisma.category.upsert({
      where: { slug: 'ogrenme-planlari' },
      update: {},
      create: {
        slug: 'ogrenme-planlari',
        title: 'Öğrenme Planları',
        order: 4,
      },
    }),
  ])

  console.log('✅ Categories created')

  // Create articles
  const articles = await Promise.all([
    // Turkish Articles
    prisma.article.upsert({
      where: { slug_language: { slug: 'islam-nedir', language: Language.TR } },
      update: {},
      create: {
        slug: 'islam-nedir',
        language: Language.TR,
        title: 'İslam Nedir?',
        summary: 'İslam dininin temel prensiplerini ve anlamını öğrenin.',
        content: `# İslam Nedir?

İslam, Arapça kökenli bir kelime olup "barış, güvenlik ve teslimiyet" anlamlarına gelir. Dini bir terim olarak İslam, Allah'a tam teslimiyet ve O'nun emirlerine boyun eğme anlamında kullanılır.

## İslam'ın Temel Mesajı

İslam'ın temel mesajı çok basit ve nettir: "Lâ ilâhe illallah" - Allah'tan başka ilah yoktur.

Bu kelime, İslam'ın özünü ifade eder:
- Tevhid: Allah'ın birliği ve eşsizliği
- İbadet: Sadece Allah'a kulluk
- Hayat tarzı: Allah'ın emirlerine göre yaşama`,
        categoryId: categories[0].id,
        readingTime: 5,
        difficultyLevel: Level.BEGINNER,
        seoTitle: 'İslam Nedir? - Yeni Müslümanlar İçin Temel Rehber',
        seoDescription: 'İslam dininin anlamı, temel prensipleri ve inanç esasları hakkında kapsamlı bilgi.',
        published: true,
        featured: true,
      },
    }),
    prisma.article.upsert({
      where: { slug_language: { slug: 'namaz-nasil-kilinir', language: Language.TR } },
      update: {},
      create: {
        slug: 'namaz-nasil-kilinir',
        language: Language.TR,
        title: 'Namaz Nasıl Kılınır?',
        summary: 'Namazın adımlarını ve önemini detaylı şekilde öğrenin.',
        content: `# Namaz Nasıl Kılınır?

Namaz, İslam'ın beş şartından biridir ve günde beş vakit kılınır.

## Namazın Önemi

Namaz, Müslümanın Allah ile olan bağını güçlendiren en önemli ibadettir.

## Abdest Nasıl Alınır?

Namaza başlamadan önce abdest almak gerekir:
1. Besmele çekin
2. Ellerinizi yıkayın
3. Ağzınızı çalkalayın
4. Burnunuzu temizleyin
5. Yüzünüzü yıkayın
6. Kollarınızı yıkayın
7. Başınızı meshedin
8. Ayaklarınızı yıkayın`,
        categoryId: categories[1].id,
        readingTime: 8,
        difficultyLevel: Level.BEGINNER,
        seoTitle: 'Namaz Nasıl Kılınır? - Adım Adım Namaz Rehberi',
        seoDescription: 'Namaz kılmanın adımları, abdest alma ve namaz duaları hakkında detaylı rehber.',
        published: true,
        featured: true,
      },
    }),
    prisma.article.upsert({
      where: { slug_language: { slug: '30-gunluk-plan', language: Language.TR } },
      update: {},
      create: {
        slug: '30-gunluk-plan',
        language: Language.TR,
        title: '30 Günlük Başlangıç Planı',
        summary: 'Yeni Müslümanlar için hazırlanmış adım adım rehber.',
        content: `# 30 Günlük Başlangıç Planı

Bu plan, yeni Müslüman olan kardeşlerimiz için hazırlanmış kapsamlı bir rehberdir.

## 1. Hafta: Temel Bilgiler (Gün 1-7)

### Gün 1-3: İman Esasları
- Allah'ın varlığı ve birliği
- Peygamberlik müessesesi
- Ahiret inancı

### Gün 4-7: İslam'ın Şartları
- Şehadet getirmek
- Namaz kılmak
- Zekat vermek
- Oruç tutmak
- Hac yapmak

## 2. Hafta: İbadetlere Başlangıç (Gün 8-14)

### Gün 8-10: Abdest ve Temizlik
- Abdest alma
- Gusül abdesti
- Temizlik kuralları

### Gün 11-14: İlk Namazlar
- 2 rekatlık namazlar
- Temel dualar
- Namaz vakitleri`,
        categoryId: categories[3].id,
        readingTime: 12,
        difficultyLevel: Level.INTERMEDIATE,
        seoTitle: '30 Günlük Başlangıç Planı - Yeni Müslümanlar İçin Rehber',
        seoDescription: 'Yeni Müslümanlar için hazırlanmış 30 günlük öğrenme planı ve adım adım rehber.',
        published: true,
        featured: true,
      },
    }),

    // English Articles
    prisma.article.upsert({
      where: { slug_language: { slug: 'what-is-islam', language: Language.EN } },
      update: {},
      create: {
        slug: 'what-is-islam',
        language: Language.EN,
        title: 'What is Islam?',
        summary: 'Learn the fundamental principles and meaning of Islam.',
        content: `# What is Islam?

Islam is an Arabic word meaning "peace, security, and submission." As a religious term, Islam means complete submission to Allah and obedience to His commands.

## The Core Message of Islam

The fundamental message of Islam is simple and clear: "La ilaha illa Allah" - There is no god but Allah.

This statement represents the essence of Islam:
- Tawhid: The unity and uniqueness of Allah
- Worship: Devotion only to Allah
- Lifestyle: Living according to Allah's commands`,
        categoryId: categories[0].id,
        readingTime: 5,
        difficultyLevel: Level.BEGINNER,
        seoTitle: 'What is Islam? - Essential Guide for New Muslims',
        seoDescription: 'Comprehensive information about the meaning of Islam, its basic principles and beliefs.',
        published: true,
        featured: true,
      },
    }),

    // German Articles
    prisma.article.upsert({
      where: { slug_language: { slug: 'was-ist-islam', language: Language.DE } },
      update: {},
      create: {
        slug: 'was-ist-islam',
        language: Language.DE,
        title: 'Was ist Islam?',
        summary: 'Lernen Sie die grundlegenden Prinzipien und die Bedeutung des Islam.',
        content: `# Was ist Islam?

Islam ist ein arabisches Wort, das "Frieden, Sicherheit und Hingabe" bedeutet. Als religiöser Begriff bedeutet Islam vollständige Hingabe an Allah und Gehorsam gegenüber Seinen Geboten.

## Die Kernbotschaft des Islam

Die grundlegende Botschaft des Islam ist einfach und klar: "La ilaha illa Allah" - Es gibt keinen Gott außer Allah.

Diese Aussage repräsentiert das Wesen des Islam:
- Tawhid: Die Einheit und Einzigartigkeit Allahs
- Anbetung: Hingabe nur an Allah
- Lebensstil: Leben nach Allahs Geboten`,
        categoryId: categories[0].id,
        readingTime: 5,
        difficultyLevel: Level.BEGINNER,
        seoTitle: 'Was ist Islam? - Grundlegender Leitfaden für neue Muslime',
        seoDescription: 'Umfassende Informationen über die Bedeutung des Islam, seine Grundprinzipien und Überzeugungen.',
        published: true,
        featured: true,
      },
    }),
  ])

  console.log('✅ Articles created')

  // Create learning paths
  const learningPaths = await Promise.all([
    prisma.learningPath.upsert({
      where: { id: 'temel-islam-tr' },
      update: {},
      create: {
        id: 'temel-islam-tr',
        title: 'Temel İslam Bilgisi',
        language: Language.TR,
        description: 'İslam\'ın temel kavramlarını ve ibadetlerini öğrenin.',
        order: 1,
        published: true,
      },
    }),
    prisma.learningPath.upsert({
      where: { id: 'gunluk-ibadetler-tr' },
      update: {},
      create: {
        id: 'gunluk-ibadetler-tr',
        title: 'Günlük İbadetler',
        language: Language.TR,
        description: 'Namaz, oruç ve diğer günlük ibadetleri öğrenin.',
        order: 2,
        published: true,
      },
    }),
  ])

  console.log('✅ Learning paths created')

  // Create lessons
  const lessons = await Promise.all([
    prisma.lesson.upsert({
      where: { learningPathId_articleId: { learningPathId: learningPaths[0].id, articleId: articles[0].id } },
      update: {},
      create: {
        learningPathId: learningPaths[0].id,
        articleId: articles[0].id,
        order: 1,
      },
    }),
    prisma.lesson.upsert({
      where: { learningPathId_articleId: { learningPathId: learningPaths[1].id, articleId: articles[1].id } },
      update: {},
      create: {
        learningPathId: learningPaths[1].id,
        articleId: articles[1].id,
        order: 1,
      },
    }),
  ])

  console.log('✅ Lessons created')
  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
