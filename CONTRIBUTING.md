# Contributing to Glide UI

First off, thanks for taking the time to contribute! 🎉  
Glide UI is an open-source headless UI library focused on smooth micro-interactions using Framer Motion.

## 🧠 How You Can Contribute

- 🐛 Report bugs
- ✨ Suggest new features
- 🧩 Improve existing components
- 📖 Enhance documentation
- ✅ Improve accessibility & tests

## 🛠️ Getting Started

1. **Fork the repo**
2. **Clone your fork**

```bash
  git clone https://github.com/your-username/glide-ui.git
  cd glide-ui

```

3. **Install dependencies**

```bash
npm install
```

4. **Run in dev mode**

```bash

npm run dev
```

5.  **Build the library**

```bash
npm run build
```

**📁 Project Structure**

glide-ui/
├── src/
│ ├── components/
│ │ └── button/
│ │ ├── Button.tsx
│ │ └── index.ts
├── dist/
├── README.md
├── package.json

**🧪 Adding a New Component**

1. Create a new folder inside src/components/yourComponent

2. Add the component .tsx and export it in an index.ts

3. Export it in src/index.ts

4. Write a basic test (optional but appreciated)

**✅ Code Guidelines**

-> Use TypeScript.

-> Follow accessible HTML practices.

-> Use Framer Motion for animations.

-> Ensure your component is headless and unstyled by default.

-> Make use of existing utility-first styling when necessary (e.g., Tailwind for internal playground).

**🧹 Lint & Format**

Before you commit:

```bash

npm run lint
npm run format
```

**💬 Questions?**
Open an issue or join the discussion under the Discussions tab.

Thanks again, and happy contributing! 🚀
