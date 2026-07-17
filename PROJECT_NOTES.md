# Frontera MRO Supply Site

This file is the project source of truth between ChatGPT Work and Codex.

## Active Project Path

`C:\Users\Pcsolution\Desktop\CUsersPcsolutionDesktopCODING_PROJECTSfrontera-mro-supply-site`

Do not move, rename, duplicate, or edit files outside this project folder unless the user explicitly asks.

## Project Objective

Frontera MRO Supply is a Spanish-first MRO supplier website designed as a professional portfolio project for the Ciudad Juarez-El Paso industrial market.

The current goal is a clean one-click category-to-WhatsApp solicitud de cotizacion flow: users select an MRO category, customize the visible dropdowns if needed, and generate a structured WhatsApp quotation message without first pressing an add-product button.

## Target Users

- Gerentes de mantenimiento
- Compras indirectas
- Ingenieria de planta
- Almacen MRO
- Supervisores de produccion
- Plant-management personnel
- Plantas maquiladoras
- Empresas manufactureras in the Ciudad Juarez-El Paso industrial market

## Current Visual Direction

- Professional desktop-first MRO supplier site
- Responsive tablet and mobile layouts
- Hero photograph at `assets/images/hero-industrial.png`
- Dark hero overlay with HTML text and buttons
- White and light-gray content backgrounds
- Dark navy header, headings, and footer
- Industrial red for quotation actions and restrained accents
- Compact category grid with restrained spacing
- No product prices
- No fake ecommerce checkout

## Active Categories

The old 12-product fictional catalog has been removed. The active site uses these six categories:

- Abrasivos
- Manejo de materiales
- Neumatica
- Material electrico
- Seguridad industrial
- Herramientas

Each category card includes a compact local PNG image, a short description, and a `Solicitar esta categoria` button.

The `Neumática` category is now the first separate category-catalog experience. Its card opens `neumatica.html` instead of going directly to the quotation form. The other five categories keep the direct category-to-quotation behavior.

## Category-To-Quotation Workflow

Clicking a category card/button must:

- Smoothly scroll to the quotation form
- Select the chosen category in the quotation fields
- Load the category's default product, two specifications, quantity `1`, and unit `Pieza`
- Treat the visible dropdown configuration as `Producto 1` immediately
- Preload demonstration contact values only when contact fields are empty:
  - `Daniel Canales`
  - `Planta Industrial Demo`
  - `decanale312@gmail.com`
  - `Mantenimiento`
  - `Cotización estándar`
  - `WhatsApp`
- Never overwrite visitor-entered contact information
- Focus the primary `Generar solicitud por WhatsApp` button after scrolling
- Show a Spanish confirmation message such as `Abrasivos seleccionada. Personaliza el producto y prepara tu solicitud.`
- Avoid creating duplicate `Producto 1` rows when dropdowns change

The customer can then customize the visible product values, generate the quotation message, add more products with `Agregar otro producto`, edit/remove saved additional products, review the message, copy it, or open WhatsApp.

## Contact Configuration

Public email:

`decanale312@gmail.com`

Public WhatsApp / telephone display:

`+52 656 169 6385`

Normalized telephone value:

`+526561696385`

WhatsApp URL number in `app.js`:

`526561696385`

Active links should use:

- `mailto:decanale312@gmail.com`
- `tel:+526561696385`
- `https://wa.me/526561696385?text=...`

## Required Quotation Workflow

The quotation form is the central feature.

It must:

- Maintain a quotation list in JavaScript
- Use category-dependent product and specification dropdowns
- Include the currently visible dropdown configuration as `Producto 1`
- Start from a selected category when a category card is clicked
- Allow category, product, specifications, quantity, and unit changes
- Support `Otro` manual text fields where configured
- Allow saved product editing and removal
- Collect contact name
- Collect company
- Collect department or area
- Collect email or telephone
- Collect urgency
- Collect required date
- Collect preferred response method
- Collect whether acceptable equivalents are allowed
- Collect general notes
- Include an optional reference-file field clearly presented as front-end-only
- Validate essential fields
- Generate a standardized Spanish quotation message
- Generate a local reference folio such as `FMS-20260712-001`
- Display the generated message for review
- Provide Copy message, Edit request, Empty request, and Open WhatsApp controls
- Encode the WhatsApp URL correctly
- Store and restore the draft using `localStorage`
- Store no information on a server

## Current Files

- `PROJECT_NOTES.md` - source of truth and project coordination notes
- `AGENTS.md` - permanent Codex guidance and mentoring style
- `index.html` - website structure, category cards, contact links, and quotation form markup
- `styles.css` - desktop-first layout, hero layering, compact categories, quotation rows, and responsive behavior
- `app.js` - category selection, quotation items, validation, localStorage draft, message generation, copy behavior, and WhatsApp link
- `README.md` - public-facing project overview and testing instructions
- `assets/images/` - hero image and active category PNG assets plus preserved older image versions
- `.codex-checkpoints/` - local backup checkpoints before larger edits

## Completed Features

- Two-level industrial header with utility bar
- Ciudad Juarez-El Paso service-area text
- Public email and telephone links
- Language indicator
- Original text-based Frontera MRO wordmark
- Navigation for Inicio, Categorias, Soluciones, Nosotros, FAQ, and Contacto
- Strong Solicitar cotizacion CTA
- Desktop navigation visible above 850px
- Mobile menu below 850px
- Hero photograph and dark overlay
- Hero eyebrow: `SUMINISTRO MRO PARA MANUFACTURA FRONTERIZA`
- Six-category compact grid
- Keyboard-accessible category-to-quotation selection behavior
- One-click category-to-WhatsApp quotation setup
- Category-dependent product and specification dropdowns
- Live `Producto 1` inclusion without pressing an add-product button
- Manual `Otro` product/specification fields
- Multiple quotation products
- Saved product editing and removal
- Required-field validation
- Formatted Spanish quotation message generation
- Copy message control
- Edit request control
- Open WhatsApp control
- localStorage draft persistence
- localStorage restoration for custom `Otro` text values
- Contact/service-area section
- Footer portfolio-demonstration disclaimer

## Known Problems / Limitations

- The optional reference-file field does not upload files.
- The local reference number is fixed for this front-end pass.
- There is no backend, database, analytics, CRM integration, login, payment, or checkout.
- The local Git repository is connected to `https://github.com/decanale312-rgb/frontera-mro-supply-demo.git`.

## Decisions Already Made

- This is a portfolio project, not an official company site.
- The company name is `Frontera MRO Supply`.
- The main slogan is `Soluciones MRO locales para mantener tu planta en movimiento.`
- The site is Spanish-first.
- The site is desktop-first and responsive, not mobile-first.
- Plain HTML, CSS, and JavaScript only.
- No React, Bootstrap, Tailwind, build tools, backend, database, login, checkout, or payment system.
- Solicitud de cotizacion is the primary conversion path.
- WhatsApp message generation is allowed as a front-end workflow.
- Do not display the fictional status prominently in the hero; keep the disclaimer in the footer.
- Product names, manufacturers, models, specifications, prices, and photographs must come from verified user-supplied information.
- Do not invent product prices, SKUs, specifications, manufacturer claims, or distributor relationships.

## Next Product-Loading Workflow

When the user supplies verified product information:

- Confirm the exact product name, manufacturer, model, specifications, unit, price, currency, price note, image, and image alt text.
- Confirm whether the product should be displayed publicly before adding it to the interface.
- Add product records in `app.js` using the prepared verified-product record area.
- Do not display empty labels or `undefined` values when optional product fields are missing.
- Keep the quotation form as the main conversion path.

## Neumatica Catalog Page

New page:

- `neumatica.html`

Purpose:

- `Neumatica` is the complete proof-of-concept category for the current portfolio demonstration.
- It shows how one industrial category can expand from a compact homepage card into a professional product catalog with product information, reference prices, and a structured quotation handoff.
- The architecture can later be repeated for Abrasivos, Manejo de materiales, Material electrico, Seguridad industrial, and Herramientas.

Current product cards:

- `Válvula manual 5/2 Nugget 200`
  - Brand: `IMI Norgren`
  - Part number: `K71DA00KS1KL0`
  - Price wording: `Precio de referencia: USD $260.85`
- `Unidad FRL Excelon BL74`
  - Brand: `IMI Norgren`
  - Configuration: `BL74-605G`
  - Price wording: `Precio de referencia de la familia: desde USD $535.86`
  - Limitation: exact configuration, availability, taxes, and final price require confirmation.
- `Cilindro compacto de doble efecto`
  - Brand: `IMI Norgren`
  - Part number: `RA/192032/MX/50`
  - Price wording: `Precio de referencia: USD $162.02`
  - Disclosure: image is representative of the `RA/192000/MX` series; visible configuration and stroke may vary.

Product-card buttons use a static query-string flow such as:

`index.html?producto=valvula-k71da00ks1kl0&cantidad=1#solicitud`

The index page maps that product id through `verifiedProductRecords` in `app.js`, preloads the selected product once, preserves existing visitor contact information, and keeps the WhatsApp quotation workflow intact.

Email demonstration:

- The generated-message area includes `Solicitar por correo`.
- This does not open an email client, use `mailto:`, call an API, or send data.
- It opens an accessible preparation message explaining that email integration is planned for a later stage.
- `Continuar por WhatsApp` returns the visitor to the working WhatsApp action.
- Escape and `Cerrar` close the message.

Verified behavior on 2026-07-16:

- `neumatica.html` opens directly from the local preview server.
- The Neumatica category card on `index.html` opens `neumatica.html`.
- The other five category cards still load their existing quotation defaults directly.
- Each pneumatic product card sends its product id and quantity into `index.html#solicitud`.
- The selected pneumatic product becomes the visible configured product and is included as `PRODUCTO 1` without pressing an add-product button.
- Existing visitor contact information is preserved when a pneumatic product is loaded.
- The generated WhatsApp URL starts with `https://wa.me/526561696385?text=`.
- Additional products can still be added, edited, and removed.
- `Otro` fields still reveal manual inputs and appear in the generated message.
- `localStorage` draft restoration works on normal page loads.
- Browser back navigation from the quotation handoff returns to `neumatica.html`.
- Desktop 1440px and mobile 390px checks showed no horizontal overflow.

Performance decisions:

- Original PNG product images were preserved.
- WebP copies were created for product cards.
- Product-card images use `loading="lazy"`.
- Product-card images include `width` and `height` attributes to reduce layout shift.
- The index hero image is preloaded and remains eager.
- Product images are not loaded on `index.html`.
- No external libraries, framework, backend, or build tooling were added.

Product image size results:

- Valve PNG: 1728.3 KB; WebP: 46.7 KB
- FRL PNG: 1629.7 KB; WebP: 53.4 KB
- Cylinder PNG: 1800.6 KB; WebP: 106.4 KB

Large remaining image assets to watch later:

- `category-abrasives-v2.png`: 2756.5 KB
- `category-safety.png`: 2114.2 KB
- `category-pneumatics.png`: 2080.2 KB
- `category-tools.png`: 2066.2 KB
- `category-material-handling-v2.png`: 2033.4 KB
- `category-electrical.png`: 2015.5 KB
- `hero-industrial.png`: 1869.9 KB

## Testing Checklist

Before considering the current version stable, test:

- Run `node --check app.js`
- Click all six category buttons
- Confirm automatic category selection
- Confirm smooth scroll to the quotation form
- Confirm the visible dropdown configuration becomes `Producto 1`
- Confirm focus moves to `Generar solicitud por WhatsApp`
- Change selected categories
- Generate a message without pressing `Agregar otro producto`
- Confirm `Producto 1` appears exactly once
- Modify dropdowns and confirm the generated message updates
- Add a second product
- Edit and remove saved products
- Confirm existing visitor information is not overwritten by category clicks
- Test `Otro` manual fields
- Test required-field validation
- Generate the Spanish quotation message
- Confirm the message includes contact, company, department, contact information, selected category, product descriptions, brand, quantity/unit, equivalents, required date, urgency, and notes
- Test Copy message
- Test Open WhatsApp
- Confirm the WhatsApp link starts with `https://wa.me/526561696385?text=`
- Test `mailto:decanale312@gmail.com`
- Test `tel:+526561696385`
- Refresh and confirm localStorage draft restoration
- Refresh and confirm custom `Otro` text values restore correctly
- Check desktop at approximately 1440px
- Check mobile at approximately 390px
- Confirm no broken image references
- Confirm no horizontal overflow
- Check edited files for broken mojibake / encoding artifacts

## Most Recent Change Summary

The most recent implementation added the first separate category-catalog page for `Neumática`.

Major changes included:

- Created `neumatica.html`
- Connected the `Neumática` category card to the catalog page
- Preserved direct-to-quotation behavior for the other five categories
- Added three verified pneumatic product records to `verifiedProductRecords`
- Added static query-string product handoff into the existing quotation form
- Preserved automatic empty-field preloading of demonstration contact data
- Added WebP product-card images while preserving PNG originals
- Added the representative cylinder image disclosure
- Added reference-price wording and confirmation limitations
- Confirmed product handoff keeps WhatsApp generation functional
- Kept WhatsApp number `526561696385`
- Kept the hero image, category images, localStorage, and responsive visual design

Latest checkpoint:

Git branch: `cleanup-rfq-interface-before-products`
