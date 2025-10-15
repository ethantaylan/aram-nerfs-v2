# AM I NERFED? ⚔️

> **Instantly check ARAM balance adjustments for any League of Legends champion**

A sleek, fast, and mobile-friendly web application that helps League of Legends players quickly discover champion-specific balance changes in ARAM mode. No more guessing if your favorite champion has hidden nerfs or buffs!

## ✨ Features

- **⚡ Instant Search** - Lightning-fast champion lookup with real-time filtering
- **📊 Detailed Stats** - View damage dealt, damage taken, healing, shielding, ability haste, mana regen, energy regen, and tenacity adjustments
- **🎨 Beautiful UI** - Modern, clean interface with smooth animations and transitions
- **🌓 Dark/Light Mode** - Toggle between themes with persistent preferences
- **📱 Mobile Optimized** - Fully responsive design that works perfectly on all devices
- **🔍 Smart Search** - Type any champion name and get instant results
- **🎯 SEO Optimized** - Dynamic page titles and metadata for better discoverability
- **♿ Accessible** - Built with accessibility in mind using semantic HTML and ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ethantaylan/aram-nerfs-v2.git
   cd aram-nerfs-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** - Modern React with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons

## 📦 Project Structure

```
aram-nerfs-v2/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Core UI components (Button, Card, Input, etc.)
│   │   ├── ThemeToggle.tsx # Theme switching component
│   │   ├── MobilePopup.tsx # Mobile-specific popup
│   │   ├── AppDescription.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   ├── features/           # Feature-specific components
│   │   └── champion/       # Champion search & display features
│   ├── hooks/              # Custom React hooks
│   │   ├── useChampionSearch.ts
│   │   ├── useLocalStorage.ts
│   │   └── useMobilePopup.ts
│   ├── utils/              # Utility functions
│   │   ├── champion.utils.ts
│   │   ├── seo.utils.ts
│   │   └── stat.utils.ts
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # App constants
│   └── App.tsx             # Main application component
├── aram-balance-data.json  # ARAM balance data
└── package.json
```

## 🎮 How It Works

1. **Search for a Champion** - Start typing any champion name in the search bar
2. **View Balance Changes** - See all ARAM-specific adjustments at a glance
3. **Understand the Impact** - Each stat shows percentage buffs (green) or nerfs (red)
4. **Stay Updated** - The app displays the current patch version

### Example Stats Displayed

- **Damage Dealt** - How much more/less damage your champion deals
- **Damage Taken** - How much more/less damage your champion receives
- **Healing** - Adjustments to healing output
- **Shielding** - Adjustments to shield strength
- **Ability Haste** - CDR modifications
- **Mana/Energy Regen** - Resource regeneration changes
- **Tenacity** - CC resistance adjustments

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

**AM I NERFED?** is built with a focus on:

- **Performance First** - Optimized for speed with minimal dependencies
- **User Experience** - Intuitive interface that gets out of your way
- **Clean Code** - Modular architecture with separation of concerns
- **Type Safety** - Full TypeScript coverage for reliability
- **Responsive Design** - Mobile-first approach that scales beautifully

## 📝 Data Source

ARAM balance data is maintained in `aram-balance-data.json` and updated regularly with each League of Legends patch. The data includes all champion-specific balance adjustments made exclusively for ARAM mode.

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug reports
- 💡 Feature requests
- 📖 Documentation improvements
- 🔧 Code contributions

Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Champion data and balance information from Riot Games
- Built with love for the League of Legends community
- Inspired by the need for quick, accessible ARAM balance information

---

**Made with ⚡ by [Ethan Taylan](https://github.com/ethantaylan)**

*Not affiliated with or endorsed by Riot Games. League of Legends and all related properties are trademarks of Riot Games.*
