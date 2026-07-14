# Frontera MRO Supply Site

This file is the project source of truth between ChatGPT Work and Codex.

## Active Project Path

`C:\Users\Pcsolution\Desktop\CUsersPcsolutionDesktopCODING_PROJECTSfrontera-mro-supply-site`

Do not move, rename, duplicate, or edit files outside this project folder unless the user explicitly asks.

## Project Objective

Frontera MRO Supply is a Spanish-first MRO supplier website designed as a professional portfolio demonstration for the Ciudad Juarez-El Paso industrial market.

The current goal is a smooth one-click category-to-WhatsApp RFQ demonstration: users select an MRO category, see a complete category-specific example loaded automatically, customize the visible dropdowns if needed, and generate a structured WhatsApp quotation message without first pressing an add-product button.

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
- Climatizacion y ventilacion
- Material electrico
- Seguridad industrial
- Herramientas

Each category card includes a compact local PNG image, a short description, and a `Solicitar esta categoria` button.

## Category-To-RFQ Workflow

Clicking a category card/button must:

- Smoothly scroll to the RFQ form
- Select the chosen category in the manual RFQ fields
- Load the category's default product, two specifications, quantity `1`, and unit `Pieza`
- Treat the visible dropdown configuration as `Producto 1` immediately
- Update the quotation counter to `1`
- Preload fictional demo contact details only into empty contact fields
- Focus the primary `Generar solicitud por WhatsApp` button after scrolling
- Show a Spanish confirmation message such as `Ejemplo de Abrasivos listo para enviar o personalizar.`
- Avoid creating duplicate `Producto 1` rows when dropdowns change

The customer can then customize the visible product values, generate the RFQ message, add more products with `Agregar otro producto`, edit/remove saved additional products, review the message, copy it, or open WhatsApp.

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

The RFQ form is the central feature.

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
- Generate a local demonstration reference such as `FMS-20260712-001`
- Display the generated message for review
- Provide Copy message, Edit request, Empty request, and Open WhatsApp controls
- Encode the WhatsApp URL correctly
- Store and restore the draft using `localStorage`
- Store no information on a server

## Current Files

- `PROJECT_NOTES.md` - source of truth and project coordination notes
- `AGENTS.md` - permanent Codex guidance and mentoring style
- `index.html` - website structure, category cards, contact links, and RFQ form markup
- `styles.css` - desktop-first layout, hero layering, compact categories, RFQ rows, and responsive behavior
- `app.js` - category selection, RFQ items, validation, localStorage draft, message generation, copy behavior, and WhatsApp link
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
- Header quotation counter
- Strong Solicitar cotizacion CTA
- Desktop navigation visible above 850px
- Mobile menu below 850px
- Hero photograph and dark overlay
- Hero eyebrow: `SUMINISTRO MRO PARA MANUFACTURA FRONTERIZA`
- Six-category compact grid
- Keyboard-accessible category-to-RFQ selection behavior
- One-click category-to-WhatsApp RFQ setup
- Category-dependent product and specification dropdowns
- Live `Producto 1` inclusion without pressing an add-product button
- Manual `Otro` product/specification fields
- Multiple RFQ products
- Saved product editing and removal
- Required-field validation
- Formatted Spanish RFQ message generation
- Copy message control
- Edit request control
- Open WhatsApp control
- localStorage draft persistence
- localStorage restoration for custom `Otro` text values
- Contact/service-area section
- Footer portfolio-demonstration disclaimer

## Known Problems / Limitations

- The optional reference-file field does not upload files.
- The local reference number is fixed for this demonstration pass.
- There is no backend, database, analytics, CRM integration, login, payment, or checkout.
- This folder is not a git repository as of the latest check; project-local checkpoints are used instead.

## Decisions Already Made

- This is a portfolio demonstration, not an official company site.
- The company name is `Frontera MRO Supply`.
- The main slogan is `Soluciones MRO locales para mantener tu planta en movimiento.`
- The site is Spanish-first.
- The site is desktop-first and responsive, not mobile-first.
- Plain HTML, CSS, and JavaScript only.
- No React, Bootstrap, Tailwind, build tools, backend, database, login, checkout, or payment system.
- RFQ / quotation is the primary conversion path.
- WhatsApp message generation is allowed as a front-end demo.
- Do not display the fictional status prominently in the hero; keep the disclaimer in the footer.

## Testing Checklist

Before considering the current version stable, test:

- Run `node --check app.js`
- Click all six category buttons
- Confirm automatic category selection
- Confirm smooth scroll to RFQ
- Confirm the quotation counter becomes `1`
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
- Generate the Spanish RFQ message
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

The most recent implementation created the one-click category-to-WhatsApp RFQ demonstration.

Major changes included:

- Category clicks now load the selected category defaults and immediately count the visible dropdown configuration as `Producto 1`
- Category clicks preload fictional demo contact information only when the contact fields are empty
- The main action remains `Generar solicitud por WhatsApp`; `Agregar otro producto` is only for Product 2 and later
- The reset demo button is labeled `Restablecer ejemplo` and asks for confirmation before replacing entered data
- Category cards can be activated with keyboard Enter/Space
- Saved products now have edit and remove controls
- Custom `Otro` values now survive localStorage draft restoration
- Browser verification passed for all six category defaults, Product 1 generation without an add-product click, modified dropdown output, multiple-product output, visitor-info preservation, `Otro` fields, localStorage restoration, and no horizontal overflow at 1440px and 390px
- Kept WhatsApp number `526561696385`
- Kept the hero image, category images, overlay, HTML text, and responsive visual design

Latest checkpoint:

`.codex-checkpoints\pre-one-click-rfq-20260714-171027`
