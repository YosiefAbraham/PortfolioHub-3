# Portfolio Images Directory

## File Naming Convention

### Experience Images
Place experience-related images in `/client/public/images/experiences/` with this naming pattern:

**Format:** `[company]-[number].jpg` (or .png, .webp)

**Examples:**
- `oasiz-1.jpg` - First Oasiz.Ai image
- `oasiz-2.jpg` - Second Oasiz.Ai image
- `collide-1.jpg` - Collide Capital image
- `morgan-stanley-1.jpg` - Morgan Stanley image
- `stanford-1.jpg` - Stanford research image
- `stanford-2.jpg` - Second Stanford image
- `bart-1.jpg` - BART engineering image

### Project Images
Place project images in `/client/public/images/projects/` with this naming pattern:

**Format:** `[project-name]-[number].jpg`

**Examples:**
- `portfolio-1.jpg` - Portfolio project image
- `mobile-app-1.jpg` - Mobile app project image
- `web-app-1.jpg` - Web application image

### Profile Images
- `yosief-profile.jpg` - Main profile photo (already exists)

## How to Add Images

1. **Save your image** with the correct naming convention
2. **Place it** in the appropriate folder (`experiences/` or `projects/`)
3. **Tell me** something like: "I added `morgan-stanley-1.jpg` to experiences folder"
4. **I'll automatically** update the code to include your image

## Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.svg`

## Image Guidelines
- **Recommended size:** 800x600px or similar aspect ratio
- **File size:** Keep under 500KB for web performance
- **Quality:** High quality, well-lit photos work best

## Current Image Structure
```
client/public/images/
├── yosief-profile.jpg          # Main profile photo
├── experiences/                 # Experience images
│   ├── oasiz-1.jpg            # Oasiz.Ai images
│   ├── oasiz-2.jpg
│   ├── collide-1.jpg          # Collide Capital images
│   ├── morgan-stanley-1.jpg   # Morgan Stanley images
│   ├── stanford-1.jpg         # Stanford research images
│   ├── stanford-2.jpg
│   └── bart-1.jpg             # BART engineering images
└── projects/                   # Project images
    ├── portfolio-1.jpg        # Portfolio project images
    ├── mobile-app-1.jpg       # Mobile app images
    └── web-app-1.jpg          # Web app images
```