# Gerald Assignment 🚀

---

## Demo 🎥

[🔗 Project Demo](https://github.com/user-attachments/assets/29f5395e-9d4f-4ef8-94e3-bdb252973d62)





---

## Getting Started 🛠️

### Installation & Running the Project ▶️

```sh
npm install
npm run ios
```

---

## Features 🌟

### 1. Atomic Design ⚛️

The project follows the **Atomic Design** methodology, ensuring:
- ✅ Code reusability
- ✅ Prevention of cyclic import errors

![Atomic Design](https://github.com/user-attachments/assets/a4ef4609-c5db-4e9b-b4f9-a0b4e387ce28)

---

### 2. Project Structure 📂

Following the **Atomic Design** approach results in a clean and well-organized project structure, making navigation easier.

```
.
├── App.tsx
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── eslint.config.js
├── index.ts
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── atoms
│   │   │   ├── Divider.tsx
│   │   │   └── TextButton.tsx
│   │   ├── molecules
│   │   │   ├── ButtonList.tsx
│   │   │   └── Header.tsx
│   │   ├── organisms
│   │   │   ├── AnimatedDrawerPageWrapper.tsx
│   │   │   └── SimpleScreen.tsx
│   │   └── templates
│   │       ├── AnimatedDrawerScreen.tsx
│   │       ├── BottomTabLayout.tsx
│   │       ├── DrawerMenuTemplate.tsx
│   │       └── SimpleButtonScreen.tsx
│   ├── navigation
│   │   ├── BottomTabNavigator.tsx
│   │   ├── DrawerStack.tsx
│   │   ├── HomeStack.tsx
│   │   └── hooks.tsx
│   ├── screens
│   │   ├── CartScreen.tsx
│   │   ├── ContactScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── OrdersScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── types
│   │   ├── atoms.d.ts
│   │   ├── index.ts
│   │   ├── molecules.d.ts
│   │   ├── navigation.d.ts
│   │   ├── organisms.d.ts
│   │   └── templates.d.ts
│   └── utils
│       ├── colors.ts
│       └── theme.ts
└── tsconfig.json
```

---

### 3. Clean Imports ✨

The project utilizes **import aliases**, leading to:
- 📌 A cleaner and more readable import section
- 📌 Properly arranged imports for better code organization

<img width="617" alt="Clean Imports" src="https://github.com/user-attachments/assets/d9e81980-2925-4b20-8516-00c9fcd495c9" />

---

### 4. Additional Features 🎯

- 🎭 **Smooth animated drawer transitions** and animated menu bar highlight
- 🚀 **Reanimated 3** for optimal performance
- 🔒 **Type-safe implementation** with TypeScript

---
