# Frontera MRO Supply Site

Frontera MRO Supply is a Spanish-first portfolio demonstration for an MRO supplier serving the Ciudad Juarez-El Paso manufacturing market.

It is not an official website for any real company. It does not use real logos, private company information, prices, checkout, backend storage, or a database.

## Objective

Build a desktop-first, responsive industrial supplier website where customers select an MRO category and complete a structured RFQ request for WhatsApp follow-up.

## Current Direction

The product-card catalog has been removed. The active direction is a compact six-category flow:

- Abrasivos
- Manejo de materiales
- Climatizacion y ventilacion
- Material electrico
- Seguridad industrial
- Herramientas

Each category leads directly into the manual RFQ form. This keeps the interface practical and avoids fake product pricing or decorative product listings.

## Contact Configuration

Public email:

`decanale312@gmail.com`

Public WhatsApp / telephone display:

`+52 656 169 6385`

Normalized telephone value:

`+526561696385`

WhatsApp URL number in `app.js`:

```js
const WHATSAPP_NUMBER = "526561696385";
```

## RFQ Workflow

Users can:

- Click any category card
- Smoothly scroll to the RFQ section
- Automatically set the selected category
- Focus the product-description field
- Add one or more manually described products
- Change category, description, brand, quantity, and unit
- Remove products
- Fill contact name, company, department, email or telephone, urgency, required date, acceptable equivalents, and notes
- Generate a Spanish WhatsApp RFQ message
- Review the complete request
- Copy the message
- Open WhatsApp with the encoded message
- Restore the draft through `localStorage`

No request is sent to a server. The file field is front-end-only and does not upload files.

## File Structure

- `PROJECT_NOTES.md` - source of truth and project coordination notes
- `AGENTS.md` - Codex guidance and mentoring style
- `index.html` - page structure, category section, contact links, and RFQ form
- `styles.css` - desktop-first layout, responsive design, hero, category cards, and RFQ styling
- `app.js` - category selection, manual RFQ items, validation, localStorage, copy behavior, and WhatsApp URL generation
- `assets/images/` - hero image and compact category placeholders
- `.codex-checkpoints/` - local backup checkpoints before larger edits

## Testing Instructions

Open `index.html` directly or preview through a local static server.

Suggested checks:

- Run `node --check app.js`
- Click all six category buttons
- Confirm each category sets the RFQ category field
- Confirm focus moves to the product-description field
- Add multiple manual products
- Change categories in added products
- Remove products
- Test required-field validation
- Generate the RFQ message
- Confirm the WhatsApp URL starts with `https://wa.me/526561696385?text=`
- Test Copy message
- Test `mailto:decanale312@gmail.com`
- Test `tel:+526561696385`
- Refresh and confirm the draft restores
- Inspect desktop around 1440px
- Inspect mobile around 390px
- Confirm no horizontal overflow

## Future Backend Opportunities

Later, this could evolve into:

- Server-side RFQ submission
- Email or CRM integration
- Real file uploads
- Admin-managed categories
- WhatsApp Business integration
- Analytics for category selections and quote starts

Those features are intentionally out of scope for the current plain HTML/CSS/JavaScript learning stage.
