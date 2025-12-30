# Website Pages Documentation

This document explains the purpose and functionality of each page in the Yusuf Semih Sancar personal website.

## Pages Overview

### 1. `index.js` - Ana Sayfa (Home Page)
- **Purpose**: Main landing page introducing Yusuf Semih Sancar
- **Content**: 
  - Personal introduction and bio
  - Profile picture
  - Work experience description
  - Biography timeline (2006-2025)
  - Personal interests and hobbies
  - Social media links (GitHub, LinkedIn, YouTube, Instagram)
- **Features**: Responsive design with animated sections
- **Navigation**: Links to portfolio works page

### 2. `works.js` - Portfolyo (Portfolio)
- **Purpose**: Showcase of projects and works
- **Content**: 
  - Grid layout of project cards
  - Currently displays 2 projects:
    - Snake Game (classic snake game)
    - WPM Test (typing speed test)
- **Features**: Project thumbnails, GitHub links, project descriptions
- **Navigation**: Accessible from home page portfolio button

### 3. `contact.js` - İletişim (Contact)
- **Purpose**: Contact form and social media links
- **Content**:
  - Contact form (name, email, message fields)
  - Email integration (opens email client)
  - Social media buttons (GitHub, LinkedIn, YouTube, Instagram)
- **Features**: Form validation, toast notifications, responsive design
- **Email**: Sends to yusufsemihsancar08@gmail.com

### 4. `posts.js` - Blog Yazıları (Blog Posts)
- **Purpose**: Blog posts section
- **Content**: Currently shows "Coming Soon!" placeholder
- **Status**: Under development, no posts yet
- **Future**: Will contain blog articles and writings

### 5. `wallpapers/index.js` - Duvar Kağıtları (Wallpapers)
- **Purpose**: Graphic design wallpapers showcase
- **Content**: Currently shows "Coming Soon!" placeholder
- **Status**: Under development, no wallpapers yet
- **Future**: Will display Photoshop and graphic design works

### 6. `404.js` - Sayfa Bulunamadı (Page Not Found)
- **Purpose**: Error page for non-existent URLs
- **Content**: Simple "Not found" message with return to home button
- **Features**: Minimal design, clear navigation back to home

## Special Pages (System Pages)

### 7. `_app.js` - Uygulama Şablonu (App Template)
- **Purpose**: Main app wrapper and configuration
- **Features**:
  - Global layout application
  - Font loading
  - Animation setup with Framer Motion
  - Chakra UI theme integration
  - Vercel Analytics
  - Scroll restoration management

### 8. `_document.js` - Doküman Yapısı (Document Structure)
- **Purpose**: HTML document structure configuration
- **Features**:
  - HTML lang attribute set to "en"
  - Chakra UI ColorModeScript
  - Custom theme integration

## Navigation Structure

The website follows this navigation flow:
- **Home** (index.js) → Works, Contact, Wallpapers, Posts
- **Works** (works.js) → Project showcase
- **Contact** (contact.js) → Contact form and social media
- **Posts** (posts.js) → Blog (coming soon)
- **Wallpapers** (wallpapers/index.js) → Design works (coming soon)

## Technologies Used

- **Framework**: Next.js 13.5.6
- **UI Library**: Chakra UI 2.8.1
- **Animations**: Framer Motion 10.16.4
- **Icons**: React Icons, Chakra UI Icons
- **Analytics**: Vercel Analytics
- **Styling**: Emotion (built into Chakra UI)

## Design Features

- **Responsive**: Mobile-first design approach
- **Dark/Light Mode**: Built-in color mode switching
- **Animations**: Smooth page transitions and micro-interactions
- **Accessibility**: Semantic HTML and ARIA support
- **Performance**: Optimized images and lazy loading

## Future Development

- **Posts Page**: Blog functionality with markdown support
- **Wallpapers Page**: Gallery for graphic design works
- **Additional Projects**: More portfolio items
- **CMS Integration**: Dynamic content management
- **Multi-language Support**: Turkish language options
