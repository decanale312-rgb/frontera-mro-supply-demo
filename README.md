# Frontera MRO Supply Site

Frontera MRO Supply is a Spanish-first portfolio project for an MRO supplier serving the Ciudad Juarez-El Paso manufacturing market.

It is not an official website for any real company. It does not use real logos, private company information, prices, checkout, backend storage, or a database.

## Objective

Build a desktop-first, responsive industrial supplier website where customers select an MRO category and complete a structured RFQ (solicitud de cotización) request for WhatsApp follow-up.

## Current Direction

The product-card catalog has been removed. The active direction is a compact six-category flow:

- Abrasivos
- Manejo de materiales
- Neumatica
- Material electrico
- Seguridad industrial
- Herramientas

Most categories lead directly into the quotation form. `Neumatica` now opens a separate category catalog page first, then sends the selected product into the existing quotation workflow.

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

## Quotation Workflow

Users can:

- Click most category cards to start a quotation immediately
- Click `Neumatica` to review a focused product catalog first
- Smoothly scroll to the quotation section
- Automatically set the selected category
- Load the category's current dropdown configuration as Product 1
- Preload demonstration contact details only when contact fields are empty
- Preserve any contact information already entered by the visitor
- Change category, product, specifications, quantity, and unit
- Add more products when needed
- Edit or remove saved additional products
- Remove products
- Fill contact name, company, department, email or telephone, urgency, required date, acceptable equivalents, and notes
- Generate a Spanish WhatsApp quotation message
- Review the complete request
- Copy the message
- Open WhatsApp with the encoded message
- Restore the draft through `localStorage`

No request is sent to a server. The file field is front-end-only and does not upload files.

## Neumatica Catalog

The first separate category-catalog page is:

`neumatica.html`

This is the complete proof-of-concept category for the demonstration. It shows how one MRO category can expand into a focused product page with product details, reference pricing, and a clean handoff into the existing WhatsApp quotation workflow. The same architecture can later be expanded to the other five categories.

It includes three pneumatic product cards:

- `Válvula manual 5/2 Nugget 200`
- `Unidad FRL Excelon BL74`
- `Cilindro compacto de doble efecto`

Product prices are reference prices and require confirmation. Configuration, availability, taxes, and final price are not guaranteed by the static page.

The cylinder image is representative of the `RA/192000/MX` series. The visible configuration and stroke may vary.

Product images use WebP copies for lighter product-card loading while preserving the original PNG files.

The product buttons send the selected product and quantity into the existing quotation workflow with a URL such as `index.html?producto=valvula-k71da00ks1kl0&cantidad=1#solicitud`. The quotation page then prepares `PRODUCTO 1` automatically and keeps WhatsApp generation on the same review-first flow.

The generated-message area also includes `Solicitar por correo`. In this version, that button only shows a preparation message. It does not send email, open an email client, use `mailto:`, or connect to a backend.

Product image optimization results:

- Valve PNG: 1728.3 KB; WebP: 46.7 KB
- FRL PNG: 1629.7 KB; WebP: 53.4 KB
- Cylinder PNG: 1800.6 KB; WebP: 106.4 KB

## File Structure

- `PROJECT_NOTES.md` - source of truth and project coordination notes
- `AGENTS.md` - Codex guidance and mentoring style
- `index.html` - page structure, category section, contact links, and quotation form
- `neumatica.html` - focused pneumatic category catalog and product-to-quotation handoff
- `styles.css` - desktop-first layout, responsive design, hero, category cards, and quotation styling
- `app.js` - category selection, quotation items, validation, localStorage, copy behavior, prepared verified-product records, and WhatsApp URL generation
- `assets/images/` - hero image and compact category placeholders
- `.codex-checkpoints/` - local backup checkpoints before larger edits

## Testing Instructions

Open `index.html` directly or preview through a local static server.

Suggested checks:

- Run `node --check app.js`
- Click all six category buttons
- Confirm each category sets the quotation category field
- Confirm the visible dropdown configuration becomes Product 1
- Generate a message without pressing an add-product button
- Add a second product
- Edit and remove saved products
- Remove products
- Test required-field validation
- Generate the quotation message
- Confirm the WhatsApp URL starts with `https://wa.me/526561696385?text=`
- Test `Solicitar por correo`
- Confirm `Continuar por WhatsApp` returns focus to the working WhatsApp action
- Test Copy message
- Test `mailto:decanale312@gmail.com`
- Test `tel:+526561696385`
- Refresh and confirm the draft restores
- Inspect desktop around 1440px
- Inspect mobile around 390px
- Confirm no horizontal overflow

## Product Data Policy

Product names, manufacturers, models, specifications, prices, and photographs should be added only when verified by the user. Do not invent product prices, SKUs, specifications, manufacturer claims, or authorized-distributor relationships.

## Future Backend Opportunities

Later, this could evolve into:

- Server-side quotation submission
- Email or CRM integration
- Real file uploads
- Admin-managed categories
- WhatsApp Business integration
- Analytics for category selections and quote starts

Those features are intentionally out of scope for the current plain HTML/CSS/JavaScript learning stage.
