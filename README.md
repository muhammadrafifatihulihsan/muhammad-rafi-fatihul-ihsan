# Personal Portfolio — Muhammad Rafi Fatihul Ihsan

React + Vite + Tailwind CSS portfolio with JSON-driven content management.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📝 Update Content (No Coding Required!)

All content lives in `src/data/` as JSON files:

| File | What to Edit |
|------|-------------|
| `profile.json` | Name, bio, avatar, hero text, about section |
| `social.json` | Social media links (LinkedIn, GitHub, etc.) |
| `projects.json` | Projects (add/remove/edit projects) |
| `experiences.json` | Work experience timeline |
| `certifications.json` | Certifications list |
| `skills.json` | Technical skills categories |

### Adding a New Project

1. Open `src/data/projects.json`
2. Add a new object to the array:

```json
{
  "id": "my-new-project",
  "title": "My New Project",
  "type": "🚀 Web App",
  "featured": false,
  "description": "Description of your project...",
  "tech": ["React", "Node.js"],
  "github": "https://github.com/...",
  "demo": null,
  "mockupType": "default",
  "previewUrl": "myproject.com",
  "modalDescription": "Detailed description...",
  "screenshots": [
    { "label": "Screenshot 1", "emoji": "📸", "gradient": "linear-gradient(135deg,#1a1a2e,#2d2d4e)" }
  ]
}
```

3. Commit & push to GitHub → Vercel auto-deploys!

### Adding Profile Photo

Place your photo at `public/images/profile.jpg` and it will appear in the Hero and Contact sections.

## 🔧 Decap CMS (Optional)

For visual editing at `/admin`:

1. Deploy to Netlify or Vercel
2. Enable Netlify Identity (or use another Git Gateway)
3. Visit `yoursite.com/admin`
4. Edit content through the visual interface

## 🏗️ Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v4**
- **Framer Motion** — smooth animations
- **Lucide React** — social media icons
- **Decap CMS** — optional visual content editor

## 📦 Deploy to Vercel

```bash
npm run build
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

Build command: `npm run build`
Output directory: `dist`
