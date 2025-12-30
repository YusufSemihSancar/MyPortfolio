# Craftzdog Homepage Kurulum ve Çalıştırma Rehberi

## Gereksinimler

### 1. Node.js
- **Versiyon**: Node.js 16.0 veya üzeri
- **İndirme**: https://nodejs.org/
- **Kontrol**: Terminalde `node --version` komutunu çalıştırarak kurulu versiyonu kontrol edebilirsiniz

### 2. npm (Node Package Manager)
- Node.js kurulumuyla birlikte otomatik olarak gelir
- **Kontrol**: Terminalde `npm --version` komutunu çalıştırarak kurulu versiyonu kontrol edebilirsiniz

## Kurulum Adımları

### Adım 1: Proje Klasörüne Gitme
```bash
cd c:\Users\yusuf\Downloads\craftzdog-homepage-master\craftzdog-homepage-master
```

### Adım 2: Bağımlılıkları Yükleme
```bash
npm install
```
Bu komut, `package.json` dosyasında belirtilen tüm paketleri indirip kuracaktır.

### Adım 3: Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Bu komut, geliştirme sunucusunu başlatacaktır.

## Kullanılabilir Komutlar

### Geliştirme Modu
```bash
npm run dev
```
- **Açıklama**: Geliştirme sunucusunu başlatır
- **Adres**: http://localhost:3000
- **Özellik**: Hot reload (değişiklikler anında yansır)

### Üretim Modu
```bash
npm run build
```
- **Açıklama**: Projeyi üretim için oluşturur
- **Çıktı**: `.next` klasörü içinde optimize edilmiş dosyalar

```bash
npm start
```
- **Açıklama**: Üretim sunucusunu başlatır
- **Önkoşul**: Önce `npm run build` komutunu çalıştırmanız gerekir

### Kod Formatlama
```bash
npm run prettier
```
- **Açıklama**: Tüm kod dosyalarını Prettier ile formatlar

### Kod Kontrolü
```bash
npm run lint
```
- **Açıklama**: ESLint ile kod kalitesini kontrol eder

## Proje Yapısı

```
craftzdog-homepage-master/
├── components/     # React bileşenleri
├── pages/         # Next.js sayfaları
├── public/        # Statik dosyalar (resimler, ikonlar vb.)
├── lib/           # Yardımcı kütüphaneler
├── styles/        # CSS dosyaları
├── package.json   # Proje bağımlılıkları ve komutları
└── next.config.js # Next.js yapılandırma dosyası
```

## Sorun Giderme

### "yarn komutu bulunamadı" Hatası
Eğer `yarn` komutu çalışmazsa, `npm` kullanın:
```bash
npm install
npm run dev
```

### Port Sorunu
Eğer 3000 portu kullanılıyorsa, farklı bir port ile başlatabilirsiniz:
```bash
npm run dev -- -p 3001
```

### Bağımlılık Hataları
Bağımlılık yüklemesi sırasında hata alırsanız:
```bash
npm cache clean --force
npm install
```

## Tarayıcıda Görüntüleme

Sunucu başlatıldıktan sonra:
1. Web tarayıcınızı açın
2. Adres çubuğuna `http://localhost:3000` yazın
3. Enter tuşuna basın

## Geliştirme İpuçları

- **Hot Reload**: Kodda yaptığınız değişiklikler tarayıcıda otomatik olarak güncellenir
- **Hata Mesajları**: Terminaldeki hata mesajlarını dikkatlice okuyun
- **Debug**: Tarayıcı geliştirici araçlarını (F12) kullanarak hata ayıklama yapabilirsiniz

## Destek

Sorun yaşarsanız:
1. Node.js versiyonunu kontrol edin (`node --version`)
2. npm versiyonunu kontrol edin (`npm --version`)
3. Terminaldeki hata mesajlarını dikkatlice okuyun
4. Proje klasörünün doğru olduğundan emin olun
