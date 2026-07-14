const WHATSAPP_NUMBER = "526561696385";
const STORAGE_KEY = "fronteraMroDropdownRfqDraft";
const REFERENCE_NUMBER = "FMS-20260712-001";

const categoryConfigs = {
  "Abrasivos": {
    description: "Discos, lijas, ruedas y consumibles para corte, desbaste o acabado.",
    image: "assets/images/category-abrasives-v2.png",
    imageAlt: "Discos abrasivos, disco flap, banda y hojas de lija para uso industrial.",
    productLabel: "Producto",
    specOneLabel: "Material",
    specTwoLabel: "Medida",
    defaults: {
      product: "Disco de corte",
      specOne: "Acero",
      specTwo: "4½ pulgadas",
    },
    products: ["Disco de corte", "Disco de desbaste", "Disco flap", "Lija", "Rueda abrasiva", "Otro"],
    specOne: ["Acero", "Acero inoxidable", "Aluminio", "Concreto", "Madera", "No especificado"],
    specTwo: ["4½ pulgadas", "5 pulgadas", "7 pulgadas", "9 pulgadas", "Medida por confirmar"],
  },
  "Manejo de materiales": {
    description: "Equipos y accesorios para mover, levantar o acomodar materiales.",
    image: "assets/images/category-material-handling-v2.png",
    imageAlt: "Patín hidráulico, carro plataforma y accesorios para manejo de materiales.",
    productLabel: "Producto",
    specOneLabel: "Capacidad",
    specTwoLabel: "Operación",
    defaults: {
      product: "Patín hidráulico",
      specOne: "2 toneladas",
      specTwo: "Manual",
    },
    products: ["Patín hidráulico", "Carrito de plataforma", "Polipasto", "Eslinga", "Rueda industrial", "Otro"],
    specOne: ["500 kg", "1 tonelada", "2 toneladas", "3 toneladas", "Capacidad por confirmar"],
    specTwo: ["Manual", "Eléctrica", "Neumática", "No especificada"],
  },
  "Climatización y ventilación": {
    description: "Ventilacion, extraccion, filtros y requerimientos HVAC para planta.",
    image: "assets/images/category-pneumatics.png",
    imageAlt: "Cilindro, regulador, válvulas, conexiones y manguera neumática industrial.",
    productLabel: "Producto",
    specOneLabel: "Voltaje",
    specTwoLabel: "Aplicación",
    defaults: {
      product: "Ventilador industrial",
      specOne: "220 V",
      specTwo: "Área de producción",
    },
    products: ["Ventilador industrial", "Extractor", "Aire acondicionado", "Calefactor", "Filtro", "Refacción HVAC", "Otro"],
    specOne: ["127 V", "220 V", "440 V", "Voltaje por confirmar"],
    specTwo: ["Área de producción", "Almacén", "Oficina", "Gabinete eléctrico", "Extracción localizada", "Otra"],
  },
  "Material eléctrico": {
    description: "Componentes eléctricos, control, protección y gabinete industrial.",
    image: "assets/images/category-electrical.png",
    imageAlt: "Interruptor, contactor, relevador, terminales y cableado eléctrico industrial.",
    productLabel: "Producto",
    specOneLabel: "Voltaje",
    specTwoLabel: "Polos",
    defaults: {
      product: "Interruptor termomagnético",
      specOne: "220 VAC",
      specTwo: "3 polos",
    },
    products: ["Interruptor termomagnético", "Contactor", "Relevador", "Sensor", "Cable", "Conector", "Gabinete", "Fuente de alimentación", "Otro"],
    specOne: ["24 VDC", "127 VAC", "220 VAC", "440 VAC", "Voltaje por confirmar"],
    specTwo: ["1 polo", "2 polos", "3 polos", "4 polos", "No especificado"],
  },
  "Seguridad industrial": {
    description: "EPP y productos para seguridad general, alturas, impacto o quimicos.",
    image: "assets/images/category-safety.png",
    imageAlt: "Casco, lentes, guantes, respirador y arnés de seguridad industrial.",
    productLabel: "Producto",
    specOneLabel: "Talla",
    specTwoLabel: "Uso",
    defaults: {
      product: "Lentes de seguridad",
      specOne: "Unitalla",
      specTwo: "General",
    },
    products: ["Lentes de seguridad", "Casco", "Guantes", "Protección auditiva", "Respirador", "Arnés", "Calzado", "Otro"],
    specOne: ["Chica", "Mediana", "Grande", "Extra grande", "Unitalla", "No especificada"],
    specTwo: ["General", "Eléctrico", "Soldadura", "Químicos", "Alturas", "Impacto", "Otro"],
  },
  "Herramientas": {
    description: "Herramientas manuales, electricas, medicion y mantenimiento general.",
    image: "assets/images/category-tools.png",
    imageAlt: "Taladro, llaves, pinzas, destornilladores, multímetro y dados para mantenimiento industrial.",
    productLabel: "Producto",
    specOneLabel: "Alimentación",
    specTwoLabel: "Uso",
    defaults: {
      product: "Taladro",
      specOne: "Batería",
      specTwo: "Mantenimiento general",
    },
    products: ["Taladro", "Esmeril", "Juego de llaves", "Torquímetro", "Multímetro", "Herramienta neumática", "Otro"],
    specOne: ["Manual", "Batería", "127 V", "220 V", "Aire comprimido", "No especificada"],
    specTwo: ["Mantenimiento general", "Eléctrico", "Mecánico", "Producción", "Otro"],
  },
};

const unitOptions = ["Pieza", "Caja", "Metro", "Juego", "Paquete", "Rollo"];

const state = {
  quoteItems: [],
  latestMessage: "",
};

const elements = {
  menuToggle: document.querySelector(".menu-toggle"),
  navLinks: document.querySelector("#site-menu"),
  categoryGrid: document.querySelector("#category-grid"),
  quoteCount: document.querySelector("#quote-count"),
  additionalProductsPanel: document.querySelector("#additional-products-panel"),
  quoteItems: document.querySelector("#quote-items"),
  emptyQuote: document.querySelector("#empty-quote"),
  quoteForm: document.querySelector("#quote-form"),
  clearQuote: document.querySelector("#clear-quote"),
  loadDemo: document.querySelector("#load-demo"),
  addManualProduct: document.querySelector("#add-manual-product"),
  generateWhatsapp: document.querySelector("#generate-whatsapp"),
  manualCategory: document.querySelector("#manual-category"),
  manualProduct: document.querySelector("#manual-product"),
  manualSpecOne: document.querySelector("#manual-spec-one"),
  manualSpecTwo: document.querySelector("#manual-spec-two"),
  specOneLabel: document.querySelector("#spec-one-label"),
  specTwoLabel: document.querySelector("#spec-two-label"),
  manualQuantity: document.querySelector("#manual-quantity"),
  manualUnit: document.querySelector("#manual-unit"),
  productOtherWrap: document.querySelector("#manual-product-other-wrap"),
  productOther: document.querySelector("#manual-product-other"),
  specOneOtherWrap: document.querySelector("#manual-spec-one-other-wrap"),
  specOneOther: document.querySelector("#manual-spec-one-other"),
  specTwoOtherWrap: document.querySelector("#manual-spec-two-other-wrap"),
  specTwoOther: document.querySelector("#manual-spec-two-other"),
  messageWorkspace: document.querySelector("#message-workspace"),
  messagePreview: document.querySelector("#message-preview"),
  whatsappLink: document.querySelector("#whatsapp-link"),
  copyMessage: document.querySelector("#copy-message"),
  editRequest: document.querySelector("#edit-request"),
  clearMessage: document.querySelector("#clear-message"),
  formStatus: document.querySelector("#form-status"),
  referenceNumber: document.querySelector("#reference-number"),
  optionalDetails: document.querySelector("#optional-details"),
};

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  elements.referenceNumber.textContent = REFERENCE_NUMBER;
  renderCategories();
  renderCategoryOptions();
  renderUnitOptions();
  restoreDraft();

  if (!elements.manualCategory.value) {
    setCategory("Abrasivos", { resetToDefaults: true });
  } else {
    setCategory(elements.manualCategory.value, { resetToDefaults: false });
  }

  renderQuote();
  bindEvents();
}

function bindEvents() {
  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.navLinks.classList.toggle("is-open");
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  elements.categoryGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-category], [data-category-card]");
    if (!target) return;
    selectCategory(target.dataset.category || target.dataset.categoryCard);
  });

  elements.categoryGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest("[data-category-card]");
    if (!card || event.target.closest("button")) return;

    event.preventDefault();
    selectCategory(card.dataset.categoryCard);
  });

  elements.manualCategory.addEventListener("change", () => {
    setCategory(elements.manualCategory.value, { resetToDefaults: true });
    hideGeneratedMessage();
    renderQuote();
    saveDraft();
  });

  [elements.manualProduct, elements.manualSpecOne, elements.manualSpecTwo].forEach((field) => {
    field.addEventListener("change", () => {
      updateOtherFields();
      hideGeneratedMessage();
      renderQuote();
      saveDraft();
    });
  });

  [elements.productOther, elements.specOneOther, elements.specTwoOther, elements.manualQuantity, elements.manualUnit].forEach((field) => {
    field.addEventListener("input", () => {
      hideGeneratedMessage();
      renderQuote();
      saveDraft();
    });
    field.addEventListener("change", () => {
      hideGeneratedMessage();
      renderQuote();
      saveDraft();
    });
  });

  elements.loadDemo.addEventListener("click", loadDemoRequest);
  elements.addManualProduct.addEventListener("click", addConfiguredProduct);

  elements.quoteItems.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-quote]");
    const removeButton = event.target.closest("[data-remove-quote]");

    if (editButton) {
      editQuoteItem(editButton.dataset.editQuote);
      return;
    }

    if (removeButton) {
      removeQuoteItem(removeButton.dataset.removeQuote);
    }
  });

  elements.clearQuote.addEventListener("click", clearQuote);
  elements.clearMessage.addEventListener("click", clearQuote);
  elements.editRequest?.addEventListener("click", editRequest);
  elements.quoteForm.addEventListener("submit", generateQuoteMessage);
  elements.copyMessage.addEventListener("click", copyMessage);

  ["contact-name", "company", "department", "reply-contact", "urgency", "required-date", "preferred-brand", "response-method", "equivalents", "general-notes"].forEach((id) => {
    const field = document.querySelector(`#${id}`);
    field.addEventListener("input", saveDraft);
    field.addEventListener("change", saveDraft);
  });
}

function renderCategories() {
  elements.categoryGrid.innerHTML = Object.entries(categoryConfigs).map(([name, config]) => `
    <article class="category-tile" data-category-card="${name}" role="button" tabindex="0" aria-label="Preparar cotización de ${name}">
      <img src="${config.image}" alt="${config.imageAlt || `Imagen compacta para ${name}`}">
      <h3>${name}</h3>
      <p>${config.description}</p>
      <button type="button" data-category="${name}">Solicitar esta categoría</button>
    </article>
  `).join("");
}

function renderCategoryOptions() {
  elements.manualCategory.innerHTML = Object.keys(categoryConfigs).map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderUnitOptions() {
  elements.manualUnit.innerHTML = unitOptions.map((unit) => `<option value="${unit}">${unit}</option>`).join("");
}

function selectCategory(categoryName) {
  state.quoteItems = [];
  state.latestMessage = "";
  setCategory(categoryName, { resetToDefaults: true });
  preloadDemoFieldsIfEmpty();
  hideGeneratedMessage();
  renderQuote();
  saveDraft();
  showStatus(`Ejemplo de ${categoryName} listo para enviar o personalizar.`, false);

  document.querySelector("#cotizacion").scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    elements.generateWhatsapp.focus();
  }, 350);
}

function setCategory(categoryName, options = {}) {
  const config = categoryConfigs[categoryName];
  if (!config) return;

  const current = getManualState();
  elements.manualCategory.value = categoryName;
  elements.specOneLabel.textContent = config.specOneLabel;
  elements.specTwoLabel.textContent = config.specTwoLabel;
  renderSelect(elements.manualProduct, config.products);
  renderSelect(elements.manualSpecOne, config.specOne);
  renderSelect(elements.manualSpecTwo, config.specTwo);

  if (options.resetToDefaults) {
    elements.manualProduct.value = config.defaults.product;
    elements.manualSpecOne.value = config.defaults.specOne;
    elements.manualSpecTwo.value = config.defaults.specTwo;
    elements.manualQuantity.value = "1";
    elements.manualUnit.value = "Pieza";
    elements.productOther.value = "";
    elements.specOneOther.value = "";
    elements.specTwoOther.value = "";
  } else {
    elements.manualProduct.value = config.products.includes(current.product) ? current.product : config.defaults.product;
    elements.manualSpecOne.value = config.specOne.includes(current.specOne) ? current.specOne : config.defaults.specOne;
    elements.manualSpecTwo.value = config.specTwo.includes(current.specTwo) ? current.specTwo : config.defaults.specTwo;
    elements.manualQuantity.value = current.quantity || "1";
    elements.manualUnit.value = current.unit || "Pieza";
  }

  updateOtherFields();
}

function loadDemoRequest() {
  if (hasVisitorEnteredData() && !window.confirm("Restablecer ejemplo reemplazará los datos actuales de esta solicitud. ¿Continuar?")) {
    return;
  }

  clearStatus();
  state.quoteItems = [];
  state.latestMessage = "";

  setCategory("Abrasivos", { resetToDefaults: true });
  elements.manualProduct.value = "Disco de corte";
  elements.manualSpecOne.value = "Acero";
  elements.manualSpecTwo.value = "4½ pulgadas";
  elements.manualQuantity.value = "1";
  elements.manualUnit.value = "Pieza";

  document.querySelector("#contact-name").value = "Daniel Canales";
  document.querySelector("#company").value = "Planta Industrial Demo";
  document.querySelector("#reply-contact").value = "decanale312@gmail.com";
  document.querySelector("#department").value = "Mantenimiento";
  document.querySelector("#urgency").value = "Cotización estándar";
  document.querySelector("#response-method").value = "WhatsApp";
  document.querySelector("#preferred-brand").value = "";
  document.querySelector("#equivalents").value = "";
  document.querySelector("#required-date").value = "";
  document.querySelector("#general-notes").value = "";

  elements.optionalDetails.open = false;
  hideGeneratedMessage();
  updateOtherFields();
  renderQuote();
  saveDraft();
  showStatus("Ejemplo restablecido.", false);
}

function hasVisitorEnteredData() {
  const demoDefaults = categoryConfigs.Abrasivos.defaults;
  const manual = getManualState();
  const hasManualChanges = manual.category !== "Abrasivos"
    || manual.product !== demoDefaults.product
    || manual.specOne !== demoDefaults.specOne
    || manual.specTwo !== demoDefaults.specTwo
    || manual.quantity !== "1"
    || manual.unit !== "Pieza"
    || manual.productOther.trim()
    || manual.specOneOther.trim()
    || manual.specTwoOther.trim();

  const fieldsWithPossibleVisitorData = [
    "#contact-name",
    "#company",
    "#department",
    "#reply-contact",
    "#urgency",
    "#required-date",
    "#preferred-brand",
    "#response-method",
    "#equivalents",
    "#general-notes",
  ];

  return state.quoteItems.length > 0
    || hasManualChanges
    || fieldsWithPossibleVisitorData.some((selector) => document.querySelector(selector).value.trim());
}

function preloadDemoFieldsIfEmpty() {
  setValueIfEmpty("#contact-name", "Daniel Canales");
  setValueIfEmpty("#company", "Planta Industrial Demo");
  setValueIfEmpty("#department", "Mantenimiento");
  setValueIfEmpty("#reply-contact", "decanale312@gmail.com");
  setValueIfEmpty("#response-method", "WhatsApp");
  setValueIfEmpty("#urgency", "Cotización estándar");
}

function setValueIfEmpty(selector, value) {
  const field = document.querySelector(selector);
  if (field && !field.value.trim()) {
    field.value = value;
  }
}

function renderSelect(select, options) {
  select.innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join("");
}

function updateOtherFields() {
  toggleOtherField(elements.manualProduct, elements.productOtherWrap, elements.productOther);
  toggleOtherField(elements.manualSpecOne, elements.specOneOtherWrap, elements.specOneOther);
  toggleOtherField(elements.manualSpecTwo, elements.specTwoOtherWrap, elements.specTwoOther);
}

function toggleOtherField(select, wrapper, input) {
  const isOther = select.value === "Otro" || select.value === "Otra";
  wrapper.hidden = !isOther;
  input.required = isOther;
  if (!isOther) {
    input.value = "";
  }
}

function addConfiguredProduct() {
  clearStatus();
  const item = getConfiguredItem();

  if (!item.product) {
    showStatus("Especifica el producto seleccionado.", true);
    getFirstVisibleOtherInput()?.focus();
    return;
  }

  if (!item.specOne) {
    showStatus("Completa la primera especificación.", true);
    getFirstVisibleOtherInput()?.focus();
    return;
  }

  if (!item.specTwo) {
    showStatus("Completa la segunda especificación.", true);
    getFirstVisibleOtherInput()?.focus();
    return;
  }

  state.quoteItems.push({
    id: createId(),
    ...item,
  });

  setCategory(item.category, { resetToDefaults: true });
  hideGeneratedMessage();
  renderQuote();
  saveDraft();
  showStatus("Producto agregado. Configura el siguiente producto.", false);
  elements.manualProduct.focus();
}

function getConfiguredItem() {
  const category = elements.manualCategory.value;
  const config = categoryConfigs[category];
  return {
    category,
    productLabel: config.productLabel,
    product: resolveOther(elements.manualProduct, elements.productOther),
    specOneLabel: config.specOneLabel,
    specOne: resolveOther(elements.manualSpecOne, elements.specOneOther),
    specTwoLabel: config.specTwoLabel,
    specTwo: resolveOther(elements.manualSpecTwo, elements.specTwoOther),
    quantity: Math.max(1, Number(elements.manualQuantity.value) || 1),
    unit: elements.manualUnit.value || "Pieza",
  };
}

function resolveOther(select, input) {
  if (select.value === "Otro" || select.value === "Otra") {
    return input.value.trim();
  }
  return select.value;
}

function getFirstVisibleOtherInput() {
  return [elements.productOther, elements.specOneOther, elements.specTwoOther].find((input) => !input.closest("label").hidden);
}

function renderQuote() {
  elements.quoteCount.textContent = String(getRequestItems().length);
  elements.additionalProductsPanel.hidden = state.quoteItems.length === 0;
  elements.emptyQuote.hidden = state.quoteItems.length > 0;

  elements.quoteItems.innerHTML = state.quoteItems.map((item, index) => `
    <div class="quote-row" data-quote-id="${item.id}">
      <div class="quote-row-title">
        <strong>Producto ${index + 1}: ${escapeHtml(item.product)}</strong>
        <small>${escapeHtml(item.category)} | ${escapeHtml(item.specOneLabel)}: ${escapeHtml(item.specOne)} | ${escapeHtml(item.specTwoLabel)}: ${escapeHtml(item.specTwo)} | ${item.quantity} ${escapeHtml(item.unit)}</small>
      </div>
      <div class="quote-row-actions">
        <button class="edit-quote-item" type="button" data-edit-quote="${item.id}">Editar</button>
        <button class="remove-quote-item" type="button" data-remove-quote="${item.id}">Quitar</button>
      </div>
    </div>
  `).join("");
}

function editQuoteItem(id) {
  const item = state.quoteItems.find((quoteItem) => quoteItem.id === id);
  if (!item) return;

  state.quoteItems = state.quoteItems.filter((quoteItem) => quoteItem.id !== id);
  applyItemToControls(item);
  hideGeneratedMessage();
  renderQuote();
  saveDraft();
  showStatus("Producto cargado para editar. Ajusta los campos y genera la solicitud otra vez.", false);
  elements.manualProduct.focus();
}

function applyItemToControls(item) {
  setCategory(item.category, { resetToDefaults: true });
  setSelectOrOther(elements.manualProduct, elements.productOther, item.product);
  setSelectOrOther(elements.manualSpecOne, elements.specOneOther, item.specOne);
  setSelectOrOther(elements.manualSpecTwo, elements.specTwoOther, item.specTwo);
  elements.manualQuantity.value = String(item.quantity || 1);
  elements.manualUnit.value = item.unit || "Pieza";
  updateOtherFields();
}

function setSelectOrOther(select, otherInput, value) {
  const matchingOption = Array.from(select.options).find((option) => option.value === value);

  if (matchingOption) {
    select.value = value;
    otherInput.value = "";
    return;
  }

  const otherOption = Array.from(select.options).find((option) => option.value === "Otro" || option.value === "Otra");
  if (otherOption) {
    select.value = otherOption.value;
    otherInput.value = value;
  }
}

function removeQuoteItem(id) {
  state.quoteItems = state.quoteItems.filter((item) => item.id !== id);
  renderQuote();
  saveDraft();
}

function clearQuote() {
  state.quoteItems = [];
  state.latestMessage = "";
  hideGeneratedMessage();
  renderQuote();
  saveDraft();
  showStatus("Solicitud vaciada.", false);
}

function hideGeneratedMessage() {
  elements.messageWorkspace.hidden = true;
  elements.messagePreview.textContent = "";
  elements.whatsappLink.href = "#";
  state.latestMessage = "";
}

function generateQuoteMessage(event) {
  event.preventDefault();
  clearStatus();

  if (!elements.quoteForm.checkValidity()) {
    elements.quoteForm.reportValidity();
    showStatus("Completa los campos requeridos antes de generar el mensaje.", true);
    return;
  }

  const requestItems = getRequestItems();

  if (requestItems.length === 0) {
    showStatus("Configura al menos un producto para generar la solicitud.", true);
    elements.manualProduct.focus();
    return;
  }

  if (!validateConfiguredItem(requestItems[0])) {
    return;
  }

  state.latestMessage = buildMessage(requestItems);
  elements.messagePreview.textContent = state.latestMessage;
  elements.whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(state.latestMessage)}`;
  elements.messageWorkspace.hidden = false;
  elements.messageWorkspace.scrollIntoView({ behavior: "smooth", block: "start" });
  showStatus("Mensaje generado. Revisa, copia o abre WhatsApp.", false);
  saveDraft();
}

function getRequestItems() {
  const configuredItem = {
    id: "configured-product",
    ...getConfiguredItem(),
  };

  return [...state.quoteItems, configuredItem];
}

function validateConfiguredItem(item) {
  if (!item.product) {
    showStatus("Especifica el producto seleccionado.", true);
    getFirstVisibleOtherInput()?.focus();
    return false;
  }

  if (!item.specOne) {
    showStatus("Completa la primera especificación.", true);
    getFirstVisibleOtherInput()?.focus();
    return false;
  }

  if (!item.specTwo) {
    showStatus("Completa la segunda especificación.", true);
    getFirstVisibleOtherInput()?.focus();
    return false;
  }

  return true;
}

function buildMessage(requestItems) {
  const contactName = document.querySelector("#contact-name").value.trim();
  const company = document.querySelector("#company").value.trim();
  const department = document.querySelector("#department").value;
  const replyContact = document.querySelector("#reply-contact").value.trim();
  const urgency = document.querySelector("#urgency").value;
  const requiredDate = document.querySelector("#required-date").value;
  const preferredBrand = document.querySelector("#preferred-brand").value.trim();
  const responseMethod = document.querySelector("#response-method").value;
  const equivalents = document.querySelector("#equivalents").value;
  const notes = document.querySelector("#general-notes").value.trim();

  const lines = [
    "SOLICITUD DE COTIZACIÓN",
    "",
    `Folio: ${REFERENCE_NUMBER}`,
    "",
    `Empresa: ${company}`,
    "",
    `Contacto: ${contactName}`,
    "",
  ];

  requestItems.forEach((item, index) => {
    lines.push(`PRODUCTO ${index + 1}`);
    lines.push("");
    lines.push(`Categoría: ${item.category}`);
    lines.push(`${item.productLabel}: ${item.product}`);
    lines.push(`${item.specOneLabel}: ${item.specOne}`);
    lines.push(`${item.specTwoLabel}: ${item.specTwo}`);
    lines.push(`Cantidad: ${item.quantity} ${formatUnit(item.unit, item.quantity)}`);
    lines.push("");
  });

  if (department) {
    lines.push(`Departamento: ${department}`);
  }

  lines.push(`Información de contacto: ${replyContact}`);

  if (preferredBrand) {
    lines.push(`Marca preferida: ${preferredBrand}`);
  }

  if (responseMethod) {
    lines.push(`Respuesta preferida: ${responseMethod}`);
  }

  if (equivalents) {
    lines.push(`Equivalentes aceptables: ${equivalents}`);
  }

  if (requiredDate) {
    lines.push(`Fecha requerida: ${requiredDate}`);
  }

  if (urgency) {
    lines.push(`Urgencia: ${urgency}`);
  }

  if (notes) {
    lines.push("");
    lines.push("Notas generales:");
    lines.push(notes);
  }

  lines.push("");
  lines.push("Aviso: esta solicitud se generó desde una demostración de portafolio. No se almacena en servidor.");

  return lines.join("\n");
}

function formatUnit(unit, quantity) {
  const normalized = {
    "Pieza": quantity === 1 ? "pieza" : "piezas",
    "Caja": quantity === 1 ? "caja" : "cajas",
    "Metro": quantity === 1 ? "metro" : "metros",
    "Juego": quantity === 1 ? "juego" : "juegos",
    "Paquete": quantity === 1 ? "paquete" : "paquetes",
    "Rollo": quantity === 1 ? "rollo" : "rollos",
  };
  return normalized[unit] || unit;
}

async function copyMessage() {
  if (!state.latestMessage) {
    showStatus("Primero genera el mensaje de cotización.", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(state.latestMessage);
    showStatus("Mensaje copiado al portapapeles.", false);
  } catch {
    const copied = copyWithTemporaryTextarea(state.latestMessage);
    showStatus(copied ? "Mensaje copiado al portapapeles." : "No se pudo copiar automaticamente. Selecciona el texto y copialo manualmente.", !copied);
  }
}

function copyWithTemporaryTextarea(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

function editRequest() {
  elements.messageWorkspace.hidden = true;
  elements.manualProduct.focus();
  showStatus("Puedes editar la solicitud y generar el mensaje otra vez.", false);
}

function saveDraft() {
  const draft = {
    quoteItems: state.quoteItems,
    latestMessage: state.latestMessage,
    manual: getManualState(),
    fields: {
      contactName: document.querySelector("#contact-name").value,
      company: document.querySelector("#company").value,
      department: document.querySelector("#department").value,
      replyContact: document.querySelector("#reply-contact").value,
      urgency: document.querySelector("#urgency").value,
      requiredDate: document.querySelector("#required-date").value,
      preferredBrand: document.querySelector("#preferred-brand").value,
      responseMethod: document.querySelector("#response-method").value,
      equivalents: document.querySelector("#equivalents").value,
      generalNotes: document.querySelector("#general-notes").value,
    },
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

function getManualState() {
  return {
    category: elements.manualCategory.value,
    product: elements.manualProduct.value,
    productOther: elements.productOther.value,
    specOne: elements.manualSpecOne.value,
    specOneOther: elements.specOneOther.value,
    specTwo: elements.manualSpecTwo.value,
    specTwoOther: elements.specTwoOther.value,
    quantity: elements.manualQuantity.value,
    unit: elements.manualUnit.value,
  };
}

function restoreDraft() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const draft = JSON.parse(saved);
    state.quoteItems = Array.isArray(draft.quoteItems) ? draft.quoteItems : [];
    state.latestMessage = draft.latestMessage || "";

    if (draft.manual?.category && categoryConfigs[draft.manual.category]) {
      elements.manualCategory.value = draft.manual.category;
      setCategory(draft.manual.category, { resetToDefaults: false });
      elements.productOther.value = draft.manual.productOther || "";
      elements.specOneOther.value = draft.manual.specOneOther || "";
      elements.specTwoOther.value = draft.manual.specTwoOther || "";
      setSelectOrOther(elements.manualProduct, elements.productOther, draft.manual.product || categoryConfigs[draft.manual.category].defaults.product);
      setSelectOrOther(elements.manualSpecOne, elements.specOneOther, draft.manual.specOne || categoryConfigs[draft.manual.category].defaults.specOne);
      setSelectOrOther(elements.manualSpecTwo, elements.specTwoOther, draft.manual.specTwo || categoryConfigs[draft.manual.category].defaults.specTwo);
      restoreOtherText(elements.manualProduct, elements.productOther, draft.manual.productOther);
      restoreOtherText(elements.manualSpecOne, elements.specOneOther, draft.manual.specOneOther);
      restoreOtherText(elements.manualSpecTwo, elements.specTwoOther, draft.manual.specTwoOther);
      elements.manualQuantity.value = draft.manual.quantity || "1";
      elements.manualUnit.value = draft.manual.unit || "Pieza";
      updateOtherFields();
    }

    if (draft.fields) {
      document.querySelector("#contact-name").value = draft.fields.contactName || "";
      document.querySelector("#company").value = draft.fields.company || "";
      document.querySelector("#department").value = draft.fields.department || "";
      document.querySelector("#reply-contact").value = draft.fields.replyContact || "";
      document.querySelector("#urgency").value = draft.fields.urgency || "";
      document.querySelector("#required-date").value = draft.fields.requiredDate || "";
      document.querySelector("#preferred-brand").value = draft.fields.preferredBrand || "";
      document.querySelector("#response-method").value = draft.fields.responseMethod || "";
      document.querySelector("#equivalents").value = draft.fields.equivalents || "";
      document.querySelector("#general-notes").value = draft.fields.generalNotes || "";
    }

    if (state.latestMessage) {
      elements.messagePreview.textContent = state.latestMessage;
      elements.whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(state.latestMessage)}`;
      elements.messageWorkspace.hidden = false;
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function createId() {
  return `quote-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function restoreOtherText(select, input, value) {
  if ((select.value === "Otro" || select.value === "Otra") && value) {
    input.value = value;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function showStatus(message, isError) {
  elements.formStatus.textContent = message;
  elements.formStatus.classList.toggle("error", isError);
}

function clearStatus() {
  elements.formStatus.textContent = "";
  elements.formStatus.classList.remove("error");
}
