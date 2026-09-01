# 💪 Big Ant Coaching - 1:1 Online Coaching Website

Professional intake form for Big Ant's 1:1 online coaching program. Collect client information about fitness goals, training experience, and commitment.

## 🎯 Features

✅ **Professional Dark Theme** - Modern, sleek design  
✅ **Responsive Design** - Works on all devices  
✅ **Form Validation** - Client-side validation with error messages  
✅ **Checkbox & Radio Options** - Multiple question types  
✅ **Form Integration** - Connected to Formspree for submissions  
✅ **Clean UI** - Professional styling with hover effects  

## 📋 Form Fields

1. **Full Name** - Text input
2. **Email Address** - Email with validation
3. **Phone Number** - Phone input
4. **Primary Fitness Goal** - Multiple checkboxes
   - Building raw size / mass (Hypertrophy)
   - Getting lean / dropping body fat
   - Increasing strength on heavy compound lifts
   - General physique aesthetic / V-taper development
5. **Training Experience** - Radio buttons
   - 0–1 year (Beginner)
   - 1–3 years (Intermediate)
   - 3+ years (Advanced)
6. **Training Split** - Text input
7. **Biggest Roadblock** - Textarea
8. **Ready to Invest** - Yes/No radio buttons

## 🚀 Quick Start

### 1. Enable GitHub Pages
- Go to Settings → Pages
- Select "Deploy from a branch"
- Choose "main" branch, "/ (root)" folder
- Click Save
- Your site will be live at: `https://anteaton.github.io/big-ant-website`

### 2. Access Your Website
- Visit: **https://anteaton.github.io/big-ant-website**
- Form submissions go to your Formspree email
- Check your inbox for new applications

## 📁 File Structure

```
big-ant-website/
├── index.html          # Main HTML form
├── style.css          # Dark theme styling
├── form-handler.js    # Form validation
└── README.md          # Documentation
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --bg-color: #0f0f11;        /* Background */
    --card-bg: #18181c;         /* Card background */
    --accent: #ff3b30;          /* Accent color (red) */
    --text-main: #ffffff;       /* Main text */
    --text-sub: #a1a1aa;        /* Subtitle text */
    --border-color: #27272a;    /* Borders */
}
```

### Change Form Questions
Edit questions in `index.html` to match your needs.

### Update Hero Text
Change the tagline in the header:
```html
<p class="hero-text">Your custom message here...</p>
```

## 💻 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **JavaScript (ES6+)** - Form validation
- **Formspree** - Form submission handling

## 📧 Form Submissions

Submissions are automatically sent to your Formspree email:
- **Formspree URL**: https://formspree.io/f/xnpqdaej
- Check your inbox for new coaching applications
- Respond directly via email or Formspree dashboard

## ✅ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Form Not Submitting
1. Check browser console (F12 → Console)
2. Ensure all required fields are filled
3. Verify email is valid format
4. Check Formspree status

### Page Not Loading
1. Verify GitHub Pages is enabled
2. Wait 1-2 minutes for initial deployment
3. Refresh page (Ctrl+F5)
4. Check repository is public

### Styling Issues
1. Hard refresh (Ctrl+Shift+F5)
2. Check browser cache
3. Verify all CSS is loaded

## 📱 Mobile Responsive

The form automatically adapts to:
- **Mobile** - Single column, large touch targets
- **Tablet** - Optimized spacing and sizing
- **Desktop** - Full-width form experience

## 🔐 Data Privacy

- Form data sent via HTTPS
- Submissions stored in Formspree
- No data stored on this server
- You control all data access

## 📞 Support

For issues:
1. Check browser console for errors
2. Verify Formspree account is active
3. Test with different browser
4. Review GitHub Pages deployment status

---

**Big Ant Coaching** - Elite Physique Development  
Live at: **https://anteaton.github.io/big-ant-website**
