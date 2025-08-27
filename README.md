# BUCC Certificate Corner

A modern web application for BRAC University Computer Club members to access and download their certificates with ease.

## ✨ Features

### 🔍 Certificate Access
- **Search by ID**: Direct access using unique recipient IDs
- **Certificate Preview**: View certificates before downloading
- **Fast Retrieval**: Instant certificate access

### 📱 User Experience
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Elegant Roman-inspired design aesthetic
- **Fast Performance**: Instant certificate retrieval
- **Accessibility**: Screen reader friendly with proper ARIA labels

### 🔗 Social Sharing
- **Facebook Integration**: Share directly to Facebook
- **LinkedIn Sharing**: Post to LinkedIn profiles
- **Copy Link**: Easy certificate link sharing
- **Social Media Ready**: Pre-formatted sharing URLs

### 📊 Admin Dashboard
- **Certificate Overview**: View all certificates in one place
- **Statistics**: Track total certificates and recipients
- **Search & Filter**: Find specific certificates quickly
- **Bulk Actions**: View and manage multiple certificates

### 📞 Support System
- **Contact Form**: Direct support request submission
- **FAQ Section**: Common questions and answers
- **Multiple Channels**: Email, phone, and office support
- **Issue Tracking**: Structured support ticket system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd bitbattles-certificate

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

### Environment Setup
The application now uses a local JSON database, so no external database setup is required.

## 🏗️ Architecture

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component primitives

### Data Layer
- **JSON Database**: Local certificate data storage
- **Type Safety**: Full TypeScript interfaces

### Components
- **IdSubmissionForm**: ID-based certificate access
- **CertificateStats**: Statistics and metrics display
- **ShareDialogue**: Social media sharing functionality
- **CopyButton**: Certificate link copying

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [recipientId]/     # Dynamic certificate pages
│   ├── admin/             # Admin dashboard
│   ├── contact/           # Support contact page
│   ├── api/certificate/   # Certificate API endpoint
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── CertificateStats.tsx
│   └── ShareDialogue.tsx
├── lib/                  # Utility functions
│   └── database.ts       # JSON database operations
└── DB/                   # Certificate data
    └── Data_Base.json    # Certificate database
```

## 🎨 Design System

### Color Palette
- **Primary**: `#3a1e10` (Dark Brown)
- **Secondary**: `#a06937` (Medium Brown)
- **Accent**: `#efda9b` (Light Gold)
- **Background**: `#3a1e10` with opacity variations

### Typography
- **Kragx**: Custom font for main titles
- **Cinzel**: Serif font for headings
- **Lora**: Body text font

### Components
- **Glass Morphism**: Backdrop blur effects
- **Gradient Buttons**: Sophisticated animations
- **Custom Scrollbars**: Themed styling
- **Responsive Grid**: Mobile-first layout

## 🔧 API Endpoints

### POST `/api/certificate`
- **Purpose**: Certificate lookup by recipient ID
- **Input**: `{ recipientId: string }`
- **Output**: Redirect to certificate page or error

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop Experience**: Full-featured interface
- **Touch Friendly**: Optimized for touch devices

## 🚀 Deployment

### Build
```bash
npm run build
# or
pnpm build
```

### Start Production
```bash
npm run start
# or
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- **Email**: support@bracucc.org
- **Phone**: +880 1234-567890
- **Office**: BRAC University, 66 Mohakhali, Dhaka 1212, Bangladesh

## 🔄 Recent Updates

- ✅ Replaced MongoDB with local JSON database
- ✅ Implemented admin dashboard
- ✅ Created comprehensive contact page
- ✅ Enhanced UI with statistics display
- ✅ Improved social sharing features
- ✅ Added FAQ section
- ✅ Optimized performance and accessibility
- ✅ Simplified to ID-only access method
