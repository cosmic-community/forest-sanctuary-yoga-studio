# Forest Sanctuary Yoga Studio

![Studio Preview](https://imgix.cosmicjs.com/391b4940-7213-11f0-a051-23c10f41277a-photo-1499002238440-d264edd596ec-1754408733445.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A magical yoga studio website inspired by Studio Ghibli films, creating a peaceful digital sanctuary where ancient practices meet the timeless beauty of nature. This enchanting website brings your forest sanctuary to life with gentle animations, organic design elements, and a seamless content management experience.

## ✨ Features

- 🌸 **Magical Hero Section** with animated floating particles and peaceful messaging
- 🧘‍♀️ **Dynamic Class Schedule** showcasing yoga offerings with instructor details
- 👤 **Instructor Profiles** featuring personal stories and nature connections
- 🏠 **Studio Space Gallery** with immersive descriptions and capacity details
- 💫 **Membership Plans** with detailed benefits and flexible pricing options
- 📞 **Contact & Booking** information in a serene, welcoming format
- 🎨 **Ghibli-Inspired Design** with soft colors, organic typography, and nature elements
- 📱 **Fully Responsive** design that works beautifully on all devices
- ⚡ **Fast Performance** with optimized images and efficient loading

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=689166c0f202dcc2fa9a6cb8&clone_repository=689228e355f872cd4812e2ff)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to create a yoga studio website inspired by the look and feel of Studio Ghibli films. The overall vibe should be peaceful, magical, and deeply connected to nature—like stepping into a quiet, enchanted forest.

Use hand-drawn or illustrated elements that feel Ghibli-esque: soft skies, lush greenery, cozy indoor spaces, maybe even little spirit creatures subtly tucked into the design. The layout should feel open and airy, with warm, earthy colors like moss green, sky blue, soft beige, and muted pinks. Avoid anything too modern, glossy, or techy.

The typography should feel handcrafted and organic—something gentle and calming, like a rounded serif or brush-style font.

Include subtle, peaceful animations: drifting clouds, leaves falling, fireflies, or slow-moving nature scenes. It should feel alive, but never busy. Optional soft ambient music would be a nice touch, as long as there's a way to mute it—something like the peaceful background tracks from Spirited Away or Totoro.

The site should have:
	•	A calming welcome section with a hero image or animation and a short message like "Find stillness in motion"
	•	Class schedule
	•	Instructor bios
	•	Studio space overview (with cozy, illustrated interiors)
	•	Membership info
	•	Contact and booking section

The whole experience should feel like you're entering a calm, storybook world—not just another yoga website. Keep everything soothing, spacious, and intuitive."

### Code Generation Prompt

> I want to create a yoga studio website inspired by the look and feel of Studio Ghibli films. The overall vibe should be peaceful, magical, and deeply connected to nature—like stepping into a quiet, enchanted forest.

Use hand-drawn or illustrated elements that feel Ghibli-esque: soft skies, lush greenery, cozy indoor spaces, maybe even little spirit creatures subtly tucked into the design. The layout should feel open and airy, with warm, earthy colors like moss green, sky blue, soft beige, and muted pinks. Avoid anything too modern, glossy, or techy.

The typography should feel handcrafted and organic—something gentle and calming, like a rounded serif or brush-style font.

Include subtle, peaceful animations: drifting clouds, leaves falling, fireflies, or slow-moving nature scenes. It should feel alive, but never busy. Optional soft ambient music would be a nice touch, as long as there's a way to mute it—something like the peaceful background tracks from Spirited Away or Totoro.

The site should have:
	•	A calming welcome section with a hero image or animation and a short message like "Find stillness in motion"
	•	Class schedule
	•	Instructor bios
	•	Studio space overview (with cozy, illustrated interiors)
	•	Membership info
	•	Contact and booking section

The whole experience should feel like you're entering a calm, storybook world—not just another yoga website. Keep everything soothing, spacious, and intuitive.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom Studio Ghibli theme
- **Cosmic** - Headless CMS for content management
- **Framer Motion** - Smooth animations and transitions
- **React** - Component-based UI library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket with the yoga studio content structure

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd forest-sanctuary-yoga
```

2. Install dependencies:
```bash
bun install
```

3. Set up your environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to see your magical yoga studio website.

## 📚 Cosmic SDK Examples

### Fetching Classes with Instructors and Spaces
```typescript
const response = await cosmic.objects
  .find({ type: 'classes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1); // Include connected instructors and studio spaces

const classes = response.objects;
```

### Getting Featured Memberships
```typescript
const response = await cosmic.objects
  .find({ 
    type: 'memberships',
    'metadata.featured': true 
  })
  .props(['id', 'title', 'slug', 'metadata']);

const featuredMemberships = response.objects;
```

### Retrieving Studio Spaces with Images
```typescript
const response = await cosmic.objects
  .find({ type: 'studio-spaces' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

const spaces = response.objects;
```

## 🎨 Cosmic CMS Integration

This website integrates with your Cosmic CMS bucket containing:

- **Classes** - Yoga class offerings with schedules, descriptions, and connected instructors/spaces
- **Instructors** - Teacher profiles with bios, specialties, and nature connections
- **Studio Spaces** - Practice room details with capacity, features, and ambiance
- **Memberships** - Pricing plans with benefits and target audiences
- **Pages** - Flexible content pages for additional information

All content is dynamically fetched and rendered with proper TypeScript typing and error handling.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build command to `bun run build`
4. Set the publish directory to `.next`
5. Add your environment variables
6. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

The website will automatically adapt to your Cosmic content and create a beautiful, Ghibli-inspired yoga studio experience that feels like stepping into an enchanted forest sanctuary.
<!-- README_END -->