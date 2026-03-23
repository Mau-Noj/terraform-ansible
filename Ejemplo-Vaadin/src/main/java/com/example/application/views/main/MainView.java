package com.example.application.views.main;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Html;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.HashMap;
import java.util.Map;

@PageTitle("ALM + MDA + Ingeniería de Software · Guía Maestra")
@Route("")
public class MainView extends VerticalLayout {

    private final Map<Tab, Component> tabContentMap = new HashMap<>();
    private Div contentContainer;

    public MainView() {
        setSizeFull();
        setPadding(false);
        setSpacing(false);
        addClassName("alm-root");

        add(buildHeader());
        add(buildNavWithContent());
    }

    // ─────────────────────────────────────────
    // HEADER
    // ─────────────────────────────────────────
    private Component buildHeader() {
        Div header = new Div();
        header.addClassName("alm-header");

        Span badge = new Span("Guía Maestra Interactiva · Ingeniería de Software");
        badge.addClassName("alm-badge");

        H1 title = new H1("ALM · SDLC · MDA + Ingeniería Completa");
        title.addClassName("alm-h1");

        Paragraph subtitle = new Paragraph(
            "Todo el ciclo de vida del software: etapas, modelos, UML, patrones, SOLID, " +
            "bases de datos, ACID, CAP, normalización, calidad y metodologías. " +
            "Haz clic en cualquier tarjeta."
        );
        subtitle.addClassName("alm-subtitle");

        header.add(badge, title, subtitle);
        return header;
    }

    // ─────────────────────────────────────────
    // NAV TABS + CONTENT
    // ─────────────────────────────────────────
    private Component buildNavWithContent() {
        VerticalLayout wrapper = new VerticalLayout();
        wrapper.setPadding(false);
        wrapper.setSpacing(false);
        wrapper.setSizeFull();

        // Build tabs
        Tab tabMapa      = makeTab("🗺️ Mapa General",    "tab-amber");
        Tab tabEtapas    = makeTab("📋 5 Etapas ALM",    "tab-sky");
        Tab tabMda       = makeTab("🔷 Modelos MDA",     "tab-violet");
        Tab tabUml       = makeTab("📐 Diagramas UML",   "tab-orange");
        Tab tabPatrones  = makeTab("🧩 Patrones",        "tab-fuchsia");
        Tab tabSolid     = makeTab("🏛️ SOLID",           "tab-pink");
        Tab tabBd        = makeTab("🗄️ Bases de Datos",  "tab-emerald");
        Tab tabCalidad   = makeTab("✅ Calidad",          "tab-yellow");
        Tab tabMetod     = makeTab("🔀 Metodologías",    "tab-sky2");
        Tab tabTools     = makeTab("🛠️ Herramientas",    "tab-muted");

        Tabs tabs = new Tabs(
            tabMapa, tabEtapas, tabMda, tabUml, tabPatrones,
            tabSolid, tabBd, tabCalidad, tabMetod, tabTools
        );
        tabs.addClassName("alm-nav");
        tabs.setWidthFull();

        // Build content sections
        contentContainer = new Div();
        contentContainer.addClassName("alm-content-container");
        contentContainer.setWidthFull();

        tabContentMap.put(tabMapa,     buildSecMapa());
        tabContentMap.put(tabEtapas,   buildSecEtapas());
        tabContentMap.put(tabMda,      buildSecMda());
        tabContentMap.put(tabUml,      buildSecUml());
        tabContentMap.put(tabPatrones, buildSecPatrones());
        tabContentMap.put(tabSolid,    buildSecSolid());
        tabContentMap.put(tabBd,       buildSecBd());
        tabContentMap.put(tabCalidad,  buildSecCalidad());
        tabContentMap.put(tabMetod,    buildSecMetod());
        tabContentMap.put(tabTools,    buildSecTools());

        // Show first tab by default
        showTab(tabMapa);

        tabs.addSelectedChangeListener(e -> showTab(e.getSelectedTab()));

        wrapper.add(tabs, contentContainer);
        return wrapper;
    }

    private Tab makeTab(String label, String colorClass) {
        Tab tab = new Tab(label);
        tab.addClassName(colorClass);
        return tab;
    }

    private void showTab(Tab tab) {
        contentContainer.removeAll();
        Component content = tabContentMap.get(tab);
        if (content != null) {
            contentContainer.add(content);
        }
    }

    // ─────────────────────────────────────────
    // SEC 1 · MAPA GENERAL
    // ─────────────────────────────────────────
    private Component buildSecMapa() {
        Div sec = new Div();
        sec.addClassName("alm-section");

        sec.add(secLabel("▸ Dónde va cada concepto en el ciclo de vida"));

        Div tableWrap = new Div();
        tableWrap.addClassName("alm-table-wrap");
        tableWrap.add(new Html("""
            <table class="alm-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Etapa ALM / SDLC</th>
                  <th>Modelo MDA</th>
                  <th>Técnicas &amp; Conceptos</th>
                  <th>Herramientas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="num-amber">1</span></td>
                  <td><strong>Gobernanza y Requisitos</strong><br><small>Governance · CIM</small></td>
                  <td><span class="badge-amber">🔵 CIM</span></td>
                  <td><div class="chip-row"><span class="chip">📋 Casos de Uso</span><span class="chip">🎯 BPMN</span><span class="chip">⚖️ Legal</span></div></td>
                  <td><div class="chip-row"><span class="chip">Jira</span><span class="chip">Trello</span><span class="chip">Monday</span></div></td>
                </tr>
                <tr>
                  <td><span class="num-sky">2</span></td>
                  <td><strong>Diseño de la Aplicación</strong><br><small>Architecture &amp; Design · PIM</small></td>
                  <td><span class="badge-sky">🟢 PIM</span></td>
                  <td><div class="chip-row"><span class="chip">📊 UML</span><span class="chip">🏗️ Patrones Arquitectónicos</span><span class="chip">🗄️ SQL vs NoSQL</span><span class="chip">📐 Normalización</span></div></td>
                  <td><div class="chip-row"><span class="chip">Figma</span><span class="chip">Draw.io</span><span class="chip">StarUML</span></div></td>
                </tr>
                <tr>
                  <td><span class="num-violet">3</span></td>
                  <td><strong>Desarrollo de la Aplicación</strong><br><small>SDLC Build · PSM + ISM</small></td>
                  <td><span class="badge-violet">🟡 PSM + ISM</span></td>
                  <td><div class="chip-row"><span class="chip">🧩 Patrones GoF</span><span class="chip">🏛️ SOLID</span><span class="chip">✨ Buenas Prácticas</span><span class="chip">🔀 Scrum / XP</span></div></td>
                  <td><div class="chip-row"><span class="chip">VS Code</span><span class="chip">Git</span><span class="chip">Docker</span></div></td>
                </tr>
                <tr>
                  <td><span class="num-pink">4</span></td>
                  <td><strong>Pruebas y Control de Calidad</strong><br><small>Testing / QA · Modelo V</small></td>
                  <td><span class="badge-pink">✅ Validación</span></td>
                  <td><div class="chip-row"><span class="chip">🔬 ISO 25010</span><span class="chip">🤖 Pruebas Unitarias</span><span class="chip">🔗 Integración</span><span class="chip">👤 UAT</span></div></td>
                  <td><div class="chip-row"><span class="chip">Selenium</span><span class="chip">JUnit</span><span class="chip">Postman</span></div></td>
                </tr>
                <tr>
                  <td><span class="num-emerald">5</span></td>
                  <td><strong>Operaciones y Mantenimiento</strong><br><small>Operations · CI/CD · Decomiso</small></td>
                  <td><span class="badge-emerald">🔄 Ciclo Vivo</span></td>
                  <td><div class="chip-row"><span class="chip">🚀 CI/CD</span><span class="chip">📈 Monitoreo</span><span class="chip">🔧 Mantenimiento</span></div></td>
                  <td><div class="chip-row"><span class="chip">Firebase</span><span class="chip">AWS</span><span class="chip">Jenkins</span></div></td>
                </tr>
              </tbody>
            </table>
        """));
        sec.add(tableWrap);

        sec.add(tipBox("🧩 La Gran Conexión",
            "<strong>ALM</strong> es el paraguas del ciclo de vida completo. " +
            "<strong>SDLC</strong> es la secuencia de fases. <strong>MDA</strong> es la metodología de modelado. " +
            "Los diagramas <strong>UML</strong> se crean en la fase de diseño (PIM). " +
            "Los <strong>patrones de diseño + SOLID</strong> se aplican en la fase de desarrollo. " +
            "La elección de <strong>SQL vs NoSQL</strong> y la <strong>normalización</strong> ocurren en diseño. " +
            "La <strong>calidad y las pruebas</strong> van en QA. Todo encaja."));

        return sec;
    }

    // ─────────────────────────────────────────
    // SEC 2 · 5 ETAPAS ALM
    // ─────────────────────────────────────────
    private Component buildSecEtapas() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Las 5 Etapas del Ciclo ALM — Haz clic para ver detalles"));

        Div hscroll = new Div();
        hscroll.addClassName("alm-hscroll");

        hscroll.add(
            etapaCard("Etapa 1 · Governance","🏛️","Gobernanza y Requisitos",
                "La etapa estratégica — antes de programar una sola línea",
                "🍕 Pizzería Don Carlos: el dueño decide si vale la pena invertir antes de contratar a nadie.",
                new String[]{"CIM","Jira","Trello"}, "amber",
                "La <strong>Gobernanza</strong> define el CIM: los requisitos de negocio sin tecnología. "+
                "Jira y Trello son las herramientas de gestión aquí."),
            arrow(),
            etapaCard("Etapa 2 · Architecture & Design","📐","Diseño de la Aplicación",
                "Del lenguaje de negocio al lenguaje técnico — el \"plano\"",
                "🏠 Arquitecto: dibuja el plano con habitaciones, sin decidir ladrillo o madera.",
                new String[]{"PIM","UML","Figma"}, "sky",
                "Aquí se crean los <strong>Diagramas UML</strong> (Clases, Secuencia, Estado). "+
                "El PIM es independiente de la tecnología."),
            arrow(),
            etapaCard("Etapa 3 · SDLC Build","⌨️","Desarrollo de la Aplicación",
                "¡Aquí se escribe el código! SOLID + Patrones de Diseño",
                "🧱 Albañiles: construyen la casa real con los materiales del plano.",
                new String[]{"PSM+ISM","SOLID","GoF"}, "violet",
                "Se aplican los <strong>Patrones GoF</strong>, principios <strong>SOLID</strong> y buenas prácticas. "+
                "Git y Docker son esenciales."),
            arrow(),
            etapaCard("Etapa 4 · Testing / QA","🔬","Pruebas y Calidad",
                "Verificar que todo funciona — ISO 25010, Modelo V",
                "🍽️ Chef: prueba el platillo antes de llevarlo al cliente.",
                new String[]{"QA","UAT","ISO 25010"}, "pink",
                "Pruebas unitarias, integración, regresión y UAT. "+
                "Se validan los 8 atributos de <strong>ISO 25010</strong>."),
            arrow(),
            etapaCard("Etapa 5 · Operations","🛰️","Operaciones y Mantenimiento",
                "El software vive — CI/CD, monitoreo, hasta el Decomiso",
                "🏥 Hospital: la operación terminó, pero el paciente necesita seguimiento.",
                new String[]{"CI/CD","Firebase","Jenkins"}, "emerald",
                "CI/CD, monitoreo con Grafana/Datadog. El ciclo cierra y vuelve a empezar.")
        );

        sec.add(hscroll);
        return sec;
    }

    private Component etapaCard(String label, String ico, String title, String sub,
                                 String analogy, String[] chips, String color, String detail) {
        Div card = new Div();
        // FIX: use addClassNames instead of multiple addClassName calls with spaces
        card.addClassNames("alm-card", "alm-card-hover", "alm-stage-card", "strip-" + color);

        Span lbl = new Span(label);
        lbl.addClassNames("stage-lbl", "color-" + color);  // FIX: was "stage-lbl color-" + color

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("stage-ico");

        H3 h3 = new H3(title);
        Paragraph subP = new Paragraph(sub);
        subP.addClassName("stage-sub");

        Div anaDiv = new Div();
        anaDiv.addClassName("ana-mini");
        anaDiv.add(new Html("<span>" + analogy + "</span>"));

        Div chipRow = new Div();
        chipRow.addClassName("chip-row");
        for (String c : chips) {
            Span chip = new Span(c);
            chip.addClassName("chip");
            chipRow.add(chip);
        }

        card.add(lbl, icoSpan, h3, subP, anaDiv, chipRow);
        card.addClickListener(e -> showDialog(title, ico + " " + title, detail));

        Div wrapper = new Div(card);
        wrapper.addClassName("stage-wrapper");
        return wrapper;
    }

    private Component arrow() {
        Span a = new Span("→");
        a.addClassName("alm-arrow");
        return a;
    }

    // ─────────────────────────────────────────
    // SEC 3 · MODELOS MDA
    // ─────────────────────────────────────────
    private Component buildSecMda() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Los 4 Modelos MDA — Architecture Driven by Models"));

        Div pipe = new Div();
        pipe.addClassName("alm-mda-pipe");

        pipe.add(
            mdaNode("Modelo 1","🏛️","CIM","Computation Independent Model",
                "🍕 El dueño de la pizzería que solo describe su problema, sin saber nada de tecnología.",
                "amber",
                "El CIM define el problema de negocio. No sabe nada de tecnología. "+
                "Es la entrada de la <strong>Etapa 1 de ALM (Gobernanza)</strong>."),
            pipeArrow("Transforma"),
            mdaNode("Modelo 2","📐","PIM","Platform Independent Model",
                "🏠 El plano arquitectónico sin especificar materiales. Portátil e intemporal.",
                "sky",
                "El PIM es el diseño lógico. Los <strong>Diagramas UML</strong> son el PIM. "+
                "Es independiente de la plataforma — si cambia la tecnología, el PIM no cambia."),
            pipeArrow("Transforma"),
            mdaNode("Modelo 3","⚙️","PSM","Platform Specific Model",
                "🍳 La receta con ingredientes exactos: horno Mabe, 180°C, molde de 24cm.",
                "emerald",
                "El PSM adapta el PIM a una tecnología específica. "+
                "Un mismo PIM genera <strong>PSM Android</strong> (Kotlin), <strong>PSM iOS</strong> (Swift) y <strong>PSM Web</strong> (JS)."),
            pipeArrow("Genera"),
            mdaNode("Modelo 4","🚀","ISM","Implementation Specific Model",
                "🏡 La casa ya construida, con electricidad y agua. Lista para vivir.",
                "violet",
                "El ISM es el código real funcionando. "+
                "Es el resultado de aplicar <strong>SOLID, Patrones GoF</strong> y buenas prácticas al PSM.")
        );

        sec.add(pipe);

        // Highlight band
        sec.add(new Html("""
            <div class="alm-hband" style="margin-top:24px;">
              <h3 style="font-family:inherit;font-size:18px;font-weight:700;color:#fff;margin-bottom:18px;">⭐ Un PIM → Múltiples Plataformas</h3>
              <div class="hb-flow">
                <div class="hb-step" style="border-color:rgba(56,189,248,.25);">
                  <span class="hb-ico">📐</span>
                  <h4 style="color:#38bdf8;">PIM</h4>
                  <p>Un solo diseño lógico</p>
                </div>
                <div class="hb-arr">→</div>
                <div style="display:flex;flex-direction:column;gap:8px;flex:1;min-width:150px;">
                  <div class="hb-step" style="border-color:rgba(245,158,11,.25);">
                    <span class="hb-ico">🤖</span><h4 style="color:#f59e0b;">PSM Android</h4><p>Kotlin + Room DB</p>
                  </div>
                  <div class="hb-step" style="border-color:rgba(52,211,153,.25);">
                    <span class="hb-ico">🍎</span><h4 style="color:#34d399;">PSM iOS</h4><p>Swift + CoreData</p>
                  </div>
                  <div class="hb-step" style="border-color:rgba(167,139,250,.25);">
                    <span class="hb-ico">🌐</span><h4 style="color:#a78bfa;">PSM Web</h4><p>JS + PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>
        """));

        sec.add(tipBox("🔑 Clave del Examen",
            "Si cambia la tecnología, el <strong>PIM no cambia</strong>. Solo generas un nuevo PSM. " +
            "Como el plano de una casa que puedes construir en ladrillo o madera sin redibujar el plano."));

        return sec;
    }

    private Component mdaNode(String label, String ico, String title, String sub,
                               String analogy, String color, String detail) {
        Div node = new Div();
        node.addClassNames("alm-card", "alm-card-hover", "alm-mda-node", "strip-" + color);

        Span lbl = new Span(label);
        lbl.addClassNames("stage-lbl", "color-" + color);  // FIX: was "stage-lbl color-" + color

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("stage-ico");

        H3 h3 = new H3(title);
        Paragraph subP = new Paragraph(sub);
        subP.addClassName("stage-sub");

        Div anaDiv = new Div();
        anaDiv.addClassName("ana-mini");
        anaDiv.add(new Html("<span>" + analogy + "</span>"));

        node.add(lbl, icoSpan, h3, subP, anaDiv);
        node.addClickListener(e -> showDialog(title, ico + " " + title + " — " + sub, detail));
        return node;
    }

    private Component pipeArrow(String label) {
        Div a = new Div();
        a.addClassName("pipe-arrow");
        a.add(new Html("<div><span>→</span><small>" + label + "</small></div>"));
        return a;
    }

    // ─────────────────────────────────────────
    // SEC 4 · DIAGRAMAS UML
    // ─────────────────────────────────────────
    private Component buildSecUml() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Diagramas UML — Se crean en la Fase 2 (Diseño / PIM)"));

        // Intro card
        sec.add(infoCard("📐 ¿Qué es UML y dónde vive?",
            "UML (Unified Modeling Language) es el <strong>lenguaje visual del PIM</strong>. " +
            "Los diagramas UML son la forma en que se documenta el diseño lógico del sistema " +
            "antes de escribir código. Se crean en la <strong>Etapa 2 - Diseño</strong> y sirven " +
            "como entrada para generar el PSM.",
            "🏠 Los diagramas UML son como los planos arquitectónicos: el plano de planta (clases), " +
            "el plano eléctrico (secuencia), el manual de instrucciones (casos de uso)."));

        sec.add(secLabel("▸ Diagramas Estructurales — El \"Qué ES\" el sistema"));
        Div g1 = new Div();
        g1.addClassName("alm-grid-4");
        g1.add(
            umlCard("🗂️","Diagrama de Clases","Las \"cosas\" del sistema y cómo se relacionan. El más importante del PIM.","Diseño (PIM)",
                "Es el diagrama más importante del PIM. Muestra las clases, atributos, métodos y relaciones (herencia, composición, asociación). " +
                "En Vaadin, cada clase Java que creas tiene un diagrama de clases detrás. " +
                "Los <strong>Patrones GoF</strong> se documentan con diagramas de clases."),
            umlCard("📦","Diagrama de Objetos","Snapshot de instancias concretas en un momento específico.","Diseño / Pruebas",
                "Muestra instancias concretas del diagrama de clases en un momento dado. " +
                "Útil para depurar y entender el estado del sistema en un punto específico. " +
                "Se usa en <strong>pruebas unitarias</strong> para visualizar el estado esperado."),
            umlCard("🧩","Diagrama de Componentes","Los módulos del sistema y cómo se conectan entre sí.","Diseño (PIM/PSM)",
                "Muestra los módulos o paquetes del sistema y sus dependencias. " +
                "Fundamental para arquitecturas de <strong>Microservicios</strong> y sistemas por <strong>Capas</strong>. " +
                "Define qué equipo construye qué componente en SAFe/Scrum."),
            umlCard("🖥️","Diagrama de Despliegue","El hardware y la infraestructura donde vive el sistema.","Diseño (PSM)",
                "Muestra los nodos físicos (servidores, contenedores Docker, cloud) y cómo se despliega el software. " +
                "Vive en el <strong>PSM</strong> porque ya especifica la plataforma. " +
                "Es el puente hacia la <strong>Etapa 5 de ALM (Operaciones)</strong> y DevOps.")
        );
        sec.add(g1);

        sec.add(secLabel("▸ Diagramas de Comportamiento — El \"Qué HACE\" el sistema"));
        Div g2 = new Div();
        g2.addClassName("alm-grid-4");
        g2.add(
            umlCard("👤","Diagrama de Casos de Uso","Quién usa el sistema y qué puede hacer. Conecta CIM con PIM.","Gobernanza → Diseño",
                "Define los actores (usuarios, sistemas externos) y las funcionalidades del sistema. " +
                "Conecta el <strong>CIM</strong> (qué quiere el negocio) con el <strong>PIM</strong> (cómo se diseña). " +
                "En Scrum, cada caso de uso puede convertirse en una <strong>User Story</strong>."),
            umlCard("🔄","Diagrama de Estado","Cómo cambia el estado de un objeto a lo largo del tiempo.","Diseño (PIM)",
                "Muestra los estados de un objeto y las transiciones entre ellos. " +
                "Fundamental para modelar flujos de trabajo: un pedido pasa de PENDIENTE → PROCESANDO → ENVIADO → ENTREGADO. " +
                "Se aplica en el patrón <strong>State</strong> de GoF."),
            umlCard("📡","Diagrama de Secuencia","Cómo se comunican los objetos en el tiempo, paso a paso.","Diseño / Desarrollo",
                "Muestra las interacciones entre objetos en orden cronológico. " +
                "Es el más usado para documentar APIs y llamadas entre microservicios. " +
                "El patrón <strong>Observer</strong> y <strong>Command</strong> se documentan con diagramas de secuencia."),
            umlCard("🔀","Diagrama de Actividad","El flujo de trabajo o proceso. Similar a un diagrama de flujo.","Gobernanza → Diseño",
                "Documenta procesos de negocio y flujos de trabajo. Similar al BPMN del CIM pero con notación UML. " +
                "Se usa en la <strong>Etapa 1 y 2 de ALM</strong> para documentar procesos antes de codificar. " +
                "Puede modelar el flujo completo de un pipeline CI/CD de DevOps.")
        );
        sec.add(g2);
        return sec;
    }

    private Component umlCard(String ico, String title, String desc, String phase, String detail) {
        Div card = new Div();
        card.addClassName("alm-uml-card");

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("uml-ico");
        H5 h5 = new H5(title);
        Paragraph p = new Paragraph(desc);
        Span badge = new Span("Usado en: " + phase);
        badge.addClassName("uml-phase");

        card.add(icoSpan, h5, p, badge);
        card.addClickListener(e -> showDialog(title, ico + " " + title, detail));
        return card;
    }

    // ─────────────────────────────────────────
    // SEC 5 · PATRONES
    // ─────────────────────────────────────────
    private Component buildSecPatrones() {
        Div sec = new Div();
        sec.addClassName("alm-section");

        sec.add(secLabel("▸ Patrones Arquitectónicos — Fase 2 (Diseño / PIM)"));
        Div g1 = new Div();
        g1.addClassName("alm-grid-3");
        g1.add(
            patCard("🎭","Patrón Arquitectónico","MVC","Model-View-Controller. Separa datos, lógica y presentación.",
                "🏪 Restaurante: Cocina (Model), Menú/Presentación (View), Mesero (Controller). Cada uno con su rol separado.",
                "sky",
                "MVC es el patrón base de frameworks como Spring Boot + Vaadin. " +
                "El <strong>Model</strong> son las clases de dominio, el <strong>View</strong> es la UI Vaadin, " +
                "el <strong>Controller</strong> son los servicios de negocio. " +
                "Aplica directamente el principio <strong>Single Responsibility (SOLID)</strong>."),
            patCard("🧬","Patrón Arquitectónico","Microservicios","El sistema dividido en servicios pequeños e independientes.",
                "🏬 Mall: Cada tienda es independiente, tiene su propio inventario y caja, pero comparten el edificio.",
                "emerald",
                "Los microservicios implementan el <strong>Interface Segregation (SOLID)</strong> a nivel arquitectónico. " +
                "Cada servicio tiene su propia base de datos (Polyglot Persistence). " +
                "Se comunican via REST APIs o mensajería. Docker y Kubernetes los orquestan."),
            patCard("🎂","Patrón Arquitectónico","Capas (Layers)","El sistema dividido en capas: Presentación, Negocio, Datos.",
                "🎂 Pastel: Cada capa cumple una función y se apoya en la de abajo. La decoración no toca directamente el relleno.",
                "orange",
                "La arquitectura por capas es la más común en Spring Boot: " +
                "<strong>Presentation Layer</strong> (Vaadin Views), <strong>Service Layer</strong> (Business Logic), " +
                "<strong>Repository Layer</strong> (JPA/Hibernate). " +
                "Aplica <strong>Dependency Inversion (SOLID)</strong>."),
            patCard("📣","Patrón Arquitectónico","Event-Driven","Los componentes se comunican mediante eventos asíncronos.",
                "📻 Radio: la emisora transmite, todos los radios sintonizados reciben. La emisora no sabe quién escucha.",
                "fuchsia",
                "Event-Driven es la base de <strong>DevOps y CI/CD</strong>: un push en Git dispara eventos que " +
                "activan el build, las pruebas y el deploy automáticamente. " +
                "Implementa el patrón <strong>Observer</strong> de GoF a nivel arquitectónico.")
        );
        sec.add(g1);

        sec.add(secLabel("▸ Patrones de Diseño GoF — Fase 3 (Desarrollo / ISM)"));
        Div g2 = new Div();
        g2.addClassName("alm-grid-3");
        g2.add(
            patCard("🏭","Creacional","Factory Method","Crear objetos sin especificar la clase exacta del objeto a crear.",
                "🚗 Fábrica de autos: le pides un \"auto\" y la fábrica decide si es sedan o SUV según el pedido.",
                "amber",
                "Factory Method aplica <strong>Open/Closed (SOLID)</strong>: añadir nuevos tipos de objetos sin modificar el código existente. " +
                "En Spring Boot, <code>@Bean</code> y <code>@Configuration</code> implementan este patrón. " +
                "Se conecta con la <strong>Etapa 3 de ALM</strong>."),
            patCard("👤","Creacional","Singleton","Garantizar que una clase tenga solo una instancia en toda la aplicación.",
                "🏛️ Gobierno: solo hay un presidente a la vez. Todos acceden a la misma instancia del gobierno.",
                "sky",
                "En Spring Boot, todos los <code>@Service</code>, <code>@Repository</code> y <code>@Component</code> son Singletons por defecto. " +
                "Garantiza un único punto de acceso a recursos compartidos como conexiones de BD. " +
                "Cuidado: puede violar <strong>Single Responsibility (SOLID)</strong> si acumula demasiada lógica."),
            patCard("👀","Comportamental","Observer","Cuando un objeto cambia, notifica automáticamente a sus suscriptores.",
                "📰 Periódico: Te suscribes y recibes el diario automáticamente cada vez que se publica.",
                "violet",
                "Observer es el núcleo de los sistemas reactivos y event-driven. " +
                "En Java: interfaces <code>EventListener</code>. En Spring: <code>@EventListener</code>. " +
                "El pipeline de <strong>CI/CD en DevOps</strong> usa Observer: un commit notifica al build server."),
            patCard("♟️","Comportamental","Strategy","Intercambiar algoritmos en tiempo de ejecución según el contexto.",
                "🗺️ GPS: Mismo destino, diferentes rutas (más rápida, sin peaje, evitar autopistas). Cambias la estrategia sin cambiar el destino.",
                "sky",
                "Strategy aplica <strong>Open/Closed (SOLID)</strong>: añadir nuevos algoritmos sin modificar el código cliente. " +
                "Ejemplos: diferentes métodos de pago, diferentes algoritmos de ordenamiento, diferentes estrategias de logging."),
            patCard("🎁","Estructural","Decorator","Agregar funcionalidades a un objeto sin modificar su clase.",
                "☕ Café: Café base + leche + azúcar + canela. Cada \"decorador\" añade algo sin cambiar el café original.",
                "emerald",
                "Decorator implementa <strong>Open/Closed (SOLID)</strong>. " +
                "En Java: <code>BufferedReader</code> decora <code>FileReader</code>. " +
                "En Spring Security: los filtros de seguridad son decoradores. " +
                "Evita la explosión de subclases al combinar características."),
            patCard("🔌","Estructural","Adapter","Permite que clases incompatibles trabajen juntas.",
                "🔌 Adaptador de viaje: Tu enchufe europeo no entra en el tomacorriente americano. El adaptador lo resuelve sin cambiar ninguno de los dos.",
                "emerald",
                "Adapter es fundamental en integraciones. Al conectar con APIs externas, " +
                "un adaptador convierte el formato externo al formato interno. " +
                "En el contexto <strong>MDA</strong>: el PSM es un adaptador del PIM a la plataforma específica.")
        );
        sec.add(g2);
        return sec;
    }

    private Component patCard(String ico, String type, String title, String desc,
                               String analogy, String color, String detail) {
        Div card = new Div();
        card.addClassNames("alm-card", "alm-card-hover", "alm-pat-card", "border-" + color);

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("pat-ico");
        Span typeSpan = new Span(type);
        typeSpan.addClassNames("pat-type", "color-" + color);  // FIX: was "pat-type color-" + color
        H4 h4 = new H4(title);
        Paragraph p = new Paragraph(desc);
        Div ana = new Div();
        ana.addClassName("ana-mini");
        ana.add(new Html("<span>" + analogy + "</span>"));

        card.add(icoSpan, typeSpan, h4, p, ana);
        card.addClickListener(e -> showDialog(title, ico + " " + title, detail));
        return card;
    }

    // ─────────────────────────────────────────
    // SEC 6 · SOLID
    // ─────────────────────────────────────────
    private Component buildSecSolid() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Principios SOLID — Fase 3 (Desarrollo / PSM + ISM)"));

        sec.add(infoCard("🏛️ ¿Qué son los principios SOLID?",
            "Son 5 reglas para escribir código limpio, flexible y fácil de mantener. " +
            "Se aplican durante el <strong>desarrollo (Fase 3 / ISM)</strong>. " +
            "Como los principios de construcción de una casa: si los sigues, la casa dura décadas. " +
            "Si los ignoras, la casa se cae al primer terremoto.",
            null));

        Div solidGrid = new Div();
        solidGrid.addClassName("alm-solid-grid");
        solidGrid.add(
            solidCard("S","Single Responsibility","Cada clase hace UNA sola cosa bien hecha.",
                "Una clase <code>UserService</code> solo gestiona usuarios. No envía emails, no genera reportes. " +
                "Cuando una clase cambia por más de una razón, viola este principio. " +
                "Directamente relacionado con el principio de cohesión alta en ingeniería de software."),
            solidCard("O","Open / Closed","Abierto para extender, cerrado para modificar.",
                "Puedes añadir nuevas funcionalidades creando nuevas clases, sin modificar las existentes. " +
                "Los <strong>Patrones Strategy, Decorator y Factory</strong> implementan este principio. " +
                "Reduce el riesgo de introducir bugs al cambiar código que ya funciona."),
            solidCard("L","Liskov Substitution","Las subclases deben poder reemplazar a sus superclases.",
                "Si <code>Pato extends Ave</code>, un Pato debe comportarse como un Ave en cualquier lugar donde se use un Ave. " +
                "Violar LSP crea jerarquías de herencia frágiles. " +
                "Alternativa: usar composición en lugar de herencia profunda."),
            solidCard("I","Interface Segregation","Interfaces pequeñas y específicas, no gigantes.",
                "Una clase no debe implementar métodos que no usa. " +
                "En lugar de una interfaz <code>Animal</code> con <code>volar()</code>, <code>nadar()</code> y <code>correr()</code>, " +
                "crea <code>Volador</code>, <code>Nadador</code> y <code>Corredor</code> por separado. " +
                "Conecta con los <strong>Microservicios</strong>: cada servicio expone solo la API que necesita."),
            solidCard("D","Dependency Inversion","Depender de abstracciones, no de implementaciones.",
                "Los módulos de alto nivel no deben depender de los de bajo nivel. Ambos deben depender de abstracciones. " +
                "En Spring Boot: inyectar interfaces, no clases concretas (<code>@Autowired UserRepository</code>). " +
                "Permite cambiar la implementación (MySQL → MongoDB) sin tocar el código de negocio.")
        );
        sec.add(solidGrid);

        sec.add(secLabel("▸ Buenas Prácticas de Desarrollo — Fase 3"));
        Div g = new Div();
        g.addClassName("alm-grid-3");
        g.add(
            bpCard("✨","Clean Code",
                "Código que se lee como prosa. Nombres descriptivos, funciones cortas, sin \"code smells\".",
                "📚 Robert C. Martin — \"El código limpio se escribe para humanos, no para máquinas.\"",
                "Reglas: nombres que revelan intención (<code>getUserById</code> no <code>getU</code>), " +
                "funciones de máximo 20 líneas, comentarios solo cuando el código no puede explicarse solo. " +
                "El <strong>Refactoring</strong> es la herramienta para limpiar código existente."),
            bpCard("💧","DRY — Don't Repeat Yourself",
                "Cada pieza de lógica debe existir en un solo lugar. Si algo cambia, cambias en un solo lugar.",
                "📞 Si cambias el número de tu casa, lo actualizas en un solo directorio centralizado.",
                "El código duplicado es el peor \"code smell\". " +
                "Herramienta: Extract Method, crear utilidades comunes, usar herencia o composición. " +
                "Viola DRY = viola <strong>Single Responsibility (SOLID)</strong> indirectamente."),
            bpCard("😘","KISS — Keep It Simple",
                "La solución más simple que funcione es la mejor. No sobre-ingeniería.",
                "🚲 Para ir a la tienda de la esquina, la bicicleta es la solución correcta.",
                "Aplica el principio de Occam en el software. No implementes patrones complejos si una función simple resuelve el problema. " +
                "Relacionado con YAGNI: si no lo necesitas ahora, no lo compliques."),
            bpCard("🚫","YAGNI — You Ain't Gonna Need It",
                "No construyas funcionalidades \"por si acaso\". Solo construye lo que necesitas ahora.",
                "🏠 No construyes un cuarto extra \"por si\" tienes más hijos. Lo construyes cuando los tienes.",
                "En Scrum, YAGNI se implementa naturalmente: solo construyes lo que está en el Sprint Backlog. " +
                "El <strong>Product Owner</strong> prioriza — si algo no está en el backlog, no se construye."),
            bpCard("🔴🟢♻️","TDD — Test-Driven Development",
                "Escribe el test PRIMERO (falla en rojo), luego el código (pasa en verde), luego refactoriza.",
                "🧪 Primero defines qué resultado esperas del experimento, luego haces el experimento.",
                "Ciclo: RED (test falla) → GREEN (mínimo código para pasar) → REFACTOR (limpiar). " +
                "TDD garantiza cobertura del 100% desde el inicio. " +
                "Es una práctica central de <strong>XP (Extreme Programming)</strong>. " +
                "Sin TDD, el Refactoring es arriesgado."),
            bpCard("🔧","Refactoring",
                "Mejorar la estructura interna del código sin cambiar su comportamiento externo.",
                "🏚️ Reorganizas la cocina para que sea más eficiente, pero sigues cocinando las mismas recetas.",
                "El Refactoring aplica directamente los <strong>Patrones GoF</strong> " +
                "(Extract Method → Strategy, inlining → Facade). " +
                "Mantiene alta la <strong>Mantenibilidad ISO 25010</strong>. " +
                "Sin las pruebas TDD, el refactoring sería arriesgado.")
        );
        sec.add(g);
        return sec;
    }

    private Component solidCard(String letter, String name, String desc, String detail) {
        Div card = new Div();
        card.addClassName("alm-solid-card");

        Span l = new Span(letter);
        l.addClassName("solid-letter");
        H5 h5 = new H5(name);
        Paragraph p = new Paragraph(desc);

        card.add(l, h5, p);
        card.addClickListener(e -> showDialog(name, letter + " — " + name, detail));
        return card;
    }

    private Component bpCard(String ico, String title, String desc, String tip, String detail) {
        Div card = new Div();
        card.addClassNames("alm-card", "alm-card-hover");
        card.getStyle().set("padding", "22px");

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("bp-ico");
        H4 h4 = new H4(title);
        Paragraph p = new Paragraph(desc);
        p.getStyle().set("font-size","13px").set("color","var(--alm-muted)").set("line-height","1.6");

        Div tipDiv = new Div();
        tipDiv.addClassName("ana-mini");
        tipDiv.add(new Html("<span>" + tip + "</span>"));

        card.add(icoSpan, h4, p, tipDiv);
        card.addClickListener(e -> showDialog(title, ico + " " + title, detail));
        return card;
    }

    // ─────────────────────────────────────────
    // SEC 7 · BASES DE DATOS
    // ─────────────────────────────────────────
    private Component buildSecBd() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Bases de Datos — Se decide en Fase 2 (Diseño / PIM → PSM)"));

        // SQL vs NoSQL
        sec.add(new Html("""
            <div class="alm-hband" style="margin-bottom:24px;">
              <h3 style="font-family:inherit;font-size:18px;font-weight:700;color:#fff;margin-bottom:18px;">🗄️ SQL vs NoSQL — ¿Cuándo elegir cuál?</h3>
              <div class="db-compare">
                <div class="db-col db-col-sql">
                  <h4 style="color:#38bdf8;">🏛️ SQL (Relacional)</h4>
                  <ul>
                    <li><strong>Cuándo:</strong> Datos estructurados, relaciones complejas, transacciones críticas</li>
                    <li><strong>Analogía:</strong> 📋 Hoja de cálculo con columnas fijas — todo tiene su lugar exacto</li>
                    <li><strong>Ventajas:</strong> ACID garantizado, joins poderosos, madurez, consistencia</li>
                    <li><strong>Ejemplos:</strong> Banca, inventario, ERPs, datos de facturación</li>
                    <li><strong>Motores:</strong> PostgreSQL, MySQL, Oracle, SQL Server</li>
                  </ul>
                </div>
                <div class="db-col db-col-nosql">
                  <h4 style="color:#34d399;">🌊 NoSQL (No Relacional)</h4>
                  <ul>
                    <li><strong>Cuándo:</strong> Datos variables, escala masiva, flexibilidad de esquema</li>
                    <li><strong>Analogía:</strong> 📦 Cajas de cartón donde metes lo que quieras — flexible pero menos ordenado</li>
                    <li><strong>Ventajas:</strong> Escala horizontal, esquema flexible, velocidad de lectura</li>
                    <li><strong>Ejemplos:</strong> Redes sociales, IoT, catálogos de productos, logs</li>
                    <li><strong>Motores:</strong> MongoDB, Redis, Cassandra, DynamoDB, Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
        """));

        sec.add(tipBox("🎯 Regla de Oro",
            "<strong>SQL</strong> cuando necesitas consistencia absoluta (bancos, hospitales). " +
            "<strong>NoSQL</strong> cuando necesitas escala y velocidad (redes sociales, streaming). " +
            "<strong>¡Puedes usar ambos!</strong> Es el patrón Polyglot Persistence."));

        // ACID
        sec.add(secLabel("▸ Principios ACID — Garantizan la integridad de las transacciones SQL"));
        Div acidGrid = new Div();
        acidGrid.addClassName("alm-acid-grid");
        acidGrid.add(
            acidCard("⚛️","A","Atomicidad","Todo o nada. La transacción completa se ejecuta o no se ejecuta nada.","amber",
                "Ejemplo: transferencia bancaria. Se debita de cuenta A y acredita en cuenta B. Si falla cualquiera de los dos pasos, ambos se revierten. Implementado con <code>@Transactional</code> en Spring."),
            acidCard("⚖️","C","Consistencia","La BD siempre pasa de un estado válido a otro estado válido.","sky",
                "Las restricciones (NOT NULL, FOREIGN KEY, CHECK) garantizan consistencia. Si una operación violaría una restricción, se rechaza. El estado de la BD siempre cumple las reglas de integridad."),
            acidCard("🔒","I","Aislamiento","Las transacciones concurrentes no se interfieren entre sí.","violet",
                "Niveles de aislamiento: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE. Problemas que previene: dirty reads, phantom reads, non-repeatable reads."),
            acidCard("💾","D","Durabilidad","Una transacción confirmada persiste aunque el sistema falle.","emerald",
                "Una vez el COMMIT se confirma, los datos están guardados incluso si el servidor se cae. Implementado con Write-Ahead Logging (WAL). Es la base de la <strong>Confiabilidad ISO 25010</strong>.")
        );
        sec.add(acidGrid);

        // CAP
        sec.add(secLabel("▸ Teorema CAP — Fundamental para sistemas distribuidos (NoSQL)"));
        sec.add(infoCard("🔺 El Triángulo que solo permite elegir 2 de 3",
            "En un sistema distribuido, es <strong>imposible garantizar los 3 propiedades simultáneamente</strong>. " +
            "Siempre debes sacrificar una. Como elegir entre velocidad, calidad y precio en un servicio — " +
            "no puedes tener todo a la vez.",
            null));

        Div capGrid = new Div();
        capGrid.addClassName("alm-acid-grid");
        capGrid.add(
            acidCard("⚖️","C","Consistency","Todos los nodos ven los mismos datos al mismo tiempo.","sky",
                "Todos los nodos del cluster devuelven la misma respuesta al mismo tiempo. Si se actualiza un nodo, todos los demás se actualizan antes de responder. Bancos y sistemas críticos priorizan CP."),
            acidCard("🟢","A","Availability","Siempre hay respuesta aunque algunos nodos fallen.","emerald",
                "El sistema siempre responde, incluso si algunos nodos están caídos. La respuesta puede no ser la más actualizada. Redes sociales y sistemas de entretenimiento priorizan AP."),
            acidCard("🔀","P","Partition Tolerance","El sistema funciona aunque haya fallas de red entre nodos.","pink",
                "El sistema continúa operando aunque haya particiones en la red. En sistemas distribuidos reales, P casi siempre ocurre. La elección real es entre CP (bancos) y AP (redes sociales).")
        );
        sec.add(capGrid);
        sec.add(tipBox("📌 Clave",
            "La Partición (P) casi siempre ocurre en sistemas reales. Entonces la elección real es: " +
            "<strong>¿CP o AP?</strong> Bancos eligen CP (prefieren no responder que dar datos incorrectos). " +
            "Redes sociales eligen AP (prefieren responder aunque el dato sea levemente desactualizado)."));

        // Normalización
        sec.add(secLabel("▸ Normalización de Bases de Datos — Fase 2 (Diseño)"));
        sec.add(infoCard("📋 La Organización del Archivero",
            "Normalizar es como organizar un archivero caótico: primero sacas los papeles repetidos (1FN), " +
            "luego agrupas los que pertenecen al mismo tema (2FN), finalmente eliminas las dependencias indirectas (3FN). " +
            "El resultado: sin duplicados, fácil de actualizar, sin anomalías.",
            null));

        Div normSteps = new Div();
        normSteps.addClassName("norm-steps");
        normSteps.add(
            normStep("1FN","amber","Primera Forma Normal",
                "Sin grupos repetidos, sin listas dentro de celdas. Cada celda tiene un solo valor atómico.",
                "Problema: Tabla PEDIDOS con columna 'productos' = 'Leche, Pan, Huevos'. " +
                "Solución: Crear tabla PEDIDO_DETALLE con una fila por producto. " +
                "Regla: valores atómicos e indivisibles en cada celda."),
            normStep("2FN","sky","Segunda Forma Normal",
                "Cumple 1FN + todos los atributos no clave dependen de la CLAVE COMPLETA, no de parte de ella.",
                "Aplica solo cuando la clave primaria es compuesta. " +
                "Problema: Tabla con clave (ID_Pedido, ID_Producto) donde 'Nombre_Producto' depende solo de ID_Producto. " +
                "Solución: Separar en tabla PRODUCTOS."),
            normStep("3FN","emerald","Tercera Forma Normal",
                "Cumple 2FN + sin dependencias transitivas. Los atributos dependen solo de la clave, nada más.",
                "Problema: Tabla EMPLEADOS con columnas ID_Empleado, ID_Depto, Nombre_Depto. " +
                "Nombre_Depto depende de ID_Depto, no de ID_Empleado (dependencia transitiva). " +
                "Solución: Crear tabla DEPARTAMENTOS."),
            normStep("BCNF","violet","Forma Normal de Boyce-Codd",
                "Versión más estricta de 3FN. Elimina toda dependencia funcional no trivial que no sea superclave.",
                "Resuelve anomalías que 3FN no elimina cuando hay múltiples claves candidatas. " +
                "En la práctica, 3FN es suficiente para la mayoría de sistemas. " +
                "BCNF se aplica en sistemas críticos con muchas claves candidatas.")
        );
        sec.add(normSteps);
        return sec;
    }

    private Component acidCard(String ico, String letter, String name, String desc, String color, String detail) {
        Div card = new Div();
        card.addClassName("alm-acid-card");
        card.addClickListener(e -> showDialog(name, letter + " — " + name, detail));

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("acid-ico");
        Span letterSpan = new Span(letter);
        letterSpan.addClassNames("acid-letter", "color-" + color);  // FIX: was "acid-letter color-" + color
        H5 h5 = new H5(name);
        Paragraph p = new Paragraph(desc);

        card.add(icoSpan, letterSpan, h5, p);
        return card;
    }

    private Component normStep(String num, String color, String title, String desc, String detail) {
        Div step = new Div();
        step.addClassName("alm-norm-step");
        step.addClickListener(e -> showDialog(title, num + " — " + title, detail));

        Span numSpan = new Span(num);
        numSpan.addClassNames("norm-num", "color-" + color);  // FIX: was "norm-num color-" + color

        Div content = new Div();
        H5 h5 = new H5(title);
        Paragraph p = new Paragraph(desc);
        content.add(h5, p);

        step.add(numSpan, content);
        return step;
    }

    // ─────────────────────────────────────────
    // SEC 8 · CALIDAD
    // ─────────────────────────────────────────
    private Component buildSecCalidad() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Calidad del Software — Fase 4 (QA) + Todo el Ciclo"));

        sec.add(infoCard("🏆 La Norma ISO 25010 — El estándar de calidad",
            "ISO 25010 define qué significa que un software sea de calidad. No es solo que \"funcione\" — " +
            "hay 8 características que deben cumplirse. Como la revisión técnica de un auto: " +
            "no solo verifica que encienda, sino frenos, luces, emisiones, confort, seguridad.",
            null));

        sec.add(secLabel("▸ Las 8 Características de Calidad ISO 25010"));
        Div qualGrid = new Div();
        qualGrid.addClassName("alm-qual-grid");
        qualGrid.add(
            qualCard("⚡","Funcionalidad","amber","¿Hace lo que se supone que debe hacer?",
                "El software realiza exactamente las funciones especificadas en los requisitos. " +
                "Se verifica con <strong>Pruebas de Aceptación UAT</strong>. " +
                "Conecta con el <strong>CIM de MDA</strong>: si no cumple lo que el negocio necesita, falla en funcionalidad."),
            qualCard("🚀","Eficiencia de Rendimiento","sky","¿Es rápido y usa bien los recursos?",
                "Tiempo de respuesta, throughput, uso de CPU y memoria. " +
                "La elección entre <strong>SQL y NoSQL</strong> impacta directamente aquí. " +
                "La <strong>normalización</strong> puede sacrificar rendimiento por consistencia (trade-off)."),
            qualCard("🤝","Compatibilidad","emerald","¿Funciona bien con otros sistemas?",
                "Co-existencia (no interfiere con otros sistemas) e interoperabilidad (se comunica con otros sistemas). " +
                "Los <strong>Patrones Arquitectónicos de Microservicios</strong> maximizan la compatibilidad. " +
                "APIs REST y contratos de interfaz son clave."),
            qualCard("😊","Usabilidad","orange","¿Es fácil de usar para los usuarios?",
                "Aprendizaje, operabilidad, protección ante errores, accesibilidad. " +
                "Se valida en el <strong>UAT de la Etapa 4 ALM</strong>. " +
                "Figma y los prototipos del <strong>PIM</strong> permiten validar la usabilidad antes de codificar."),
            qualCard("🔐","Seguridad","pink","¿Protege los datos y el acceso?",
                "Confidencialidad, integridad, no repudio, autenticación, autorización. " +
                "Spring Security implementa estos controles. " +
                "La <strong>Atomicidad (ACID)</strong> protege la integridad de los datos. " +
                "En DevOps, las pruebas de seguridad se incluyen en el pipeline CI/CD."),
            qualCard("🔧","Mantenibilidad","violet","¿Es fácil de modificar y actualizar?",
                "Los principios <strong>SOLID</strong>, <strong>Clean Code</strong>, <strong>DRY</strong> y el Refactoring " +
                "maximizan directamente este atributo. " +
                "SonarQube mide la Mantenibilidad detectando violaciones SOLID, complejidad ciclomática y código duplicado."),
            qualCard("🧳","Portabilidad","fuchsia","¿Funciona en diferentes entornos?",
                "<strong>Docker</strong> es la implementación perfecta de Portabilidad ISO 25010. " +
                "Una imagen Docker empaqueta el <strong>ISM de MDA</strong> con todo lo necesario para correr en cualquier ambiente. " +
                "El <strong>PIM</strong> garantiza portabilidad a nivel de diseño."),
            qualCard("🛡️","Confiabilidad","yellow","¿Funciona sin fallar en condiciones específicas?",
                "Madurez, disponibilidad, tolerancia a fallos, recuperabilidad. " +
                "La <strong>Durabilidad (ACID)</strong> garantiza confiabilidad en la capa de datos. " +
                "En la <strong>Etapa 5 de ALM</strong>, el monitoreo con Grafana/Datadog mide la disponibilidad en tiempo real.")
        );
        sec.add(qualGrid);

        sec.add(secLabel("▸ Tipos de Pruebas — Por nivel y propósito"));
        Div g = new Div();
        g.addClassName("alm-grid-3");
        g.add(
            testCard("🔬","Pruebas Unitarias","emerald",
                "Cada función o método probado de forma aislada. Primer nivel de defensa.",
                "🧪 Laboratorio: pruebas cada ingrediente por separado antes de combinarlos.",
                "JUnit, pytest, Jest. Se ejecutan en milisegundos. " +
                "Con TDD se escriben ANTES del código. " +
                "Cobertura mínima recomendada: 80%. SonarQube mide la cobertura."),
            testCard("🔗","Pruebas de Integración","sky",
                "Verificar que los módulos funcionan correctamente juntos.",
                "🚗 Motor + chasis: pruebas que el motor funciona dentro del auto, no solo en el banco de pruebas.",
                "Spring Boot Test con <code>@SpringBootTest</code>. " +
                "Testcontainers para pruebas con base de datos real. " +
                "Verifican que los <strong>Patrones de Integración</strong> funcionan correctamente."),
            testCard("🔄","Pruebas de Regresión","pink",
                "Verificar que los cambios nuevos no rompieron lo que ya funcionaba.",
                "🏥 Post-cirugía: verificas que la operación de la rodilla no afectó la cadera.",
                "Se ejecutan automáticamente en cada commit con <strong>CI/CD</strong>. " +
                "Son la red de seguridad del Refactoring: si refactorizas y las pruebas pasan, el comportamiento no cambió."),
            testCard("👤","UAT — Aceptación de Usuario","amber",
                "El usuario real valida que el sistema cumple sus expectativas.",
                "🏠 Entrega de llaves: el cliente recorre la casa y verifica que es lo que contrató.",
                "Corresponde a la <strong>Etapa 4 de ALM</strong>. " +
                "En Scrum, el UAT ocurre en la Sprint Review. " +
                "Valida contra los requisitos del <strong>CIM de MDA</strong>: ¿cumple lo que el negocio pidió?"),
            testCard("🏋️","Pruebas de Carga","violet",
                "Verificar el rendimiento bajo condiciones extremas.",
                "🏟️ Estadio lleno: el sistema funciona bien con 1 usuario, pero ¿qué pasa con 100,000?",
                "JMeter, Gatling, k6. Miden la <strong>Eficiencia de Rendimiento ISO 25010</strong>. " +
                "Critical antes del launch. " +
                "Los resultados definen la arquitectura: ¿necesitas cacheo, balanceo de carga, NoSQL?"),
            testCard("🔐","Pruebas de Seguridad","orange",
                "Encontrar vulnerabilidades antes que los atacantes.",
                "🕵️ Contratar un ladrón profesional para que intente robar tu casa y te diga los puntos débiles.",
                "OWASP ZAP, Burp Suite. " +
                "Validan la <strong>Seguridad ISO 25010</strong>. " +
                "En DevOps se incluyen en el pipeline CI/CD como 'Security Gates' — el deploy no ocurre si hay vulnerabilidades críticas.")
        );
        sec.add(g);
        return sec;
    }

    private Component qualCard(String ico, String name, String color, String desc, String detail) {
        Div card = new Div();
        card.addClassNames("alm-qual-card", "border-" + color);  // FIX: was "alm-qual-card border-" + color
        card.addClickListener(e -> showDialog(name, ico + " " + name, detail));

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("qual-ico");
        Span isoLabel = new Span("ISO 25010");
        isoLabel.addClassNames("qual-label", "color-" + color);  // FIX: was "qual-label color-" + color
        H5 h5 = new H5(name);
        Paragraph p = new Paragraph(desc);

        card.add(icoSpan, isoLabel, h5, p);
        return card;
    }

    private Component testCard(String ico, String title, String color,
                                String desc, String analogy, String detail) {
        Div card = new Div();
        card.addClassNames("alm-card", "alm-card-hover");
        card.getStyle().set("padding", "22px");
        card.addClickListener(e -> showDialog(title, ico + " " + title, detail));

        Span icoSpan = new Span(ico);
        icoSpan.addClassName("bp-ico");
        H4 h4 = new H4(title);
        h4.addClassName("color-" + color);
        Paragraph p = new Paragraph(desc);
        p.getStyle().set("font-size","13px").set("color","var(--alm-muted)").set("line-height","1.6");

        Div ana = new Div();
        ana.addClassName("ana-mini");
        ana.add(new Html("<span>" + analogy + "</span>"));

        card.add(icoSpan, h4, p, ana);
        return card;
    }

    // ─────────────────────────────────────────
    // SEC 9 · METODOLOGÍAS
    // ─────────────────────────────────────────
    private Component buildSecMetod() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Metodologías de Desarrollo"));

        sec.add(new Html("""
            <div>
            <div class="metod-tabs" id="metod-tabs">
              <div class="metod-tab mt-active" onclick="showMetod('wf', this)" style="--mt:var(--alm-amber);">
                🌊 Waterfall
              </div>
              <div class="metod-tab" onclick="showMetod('sp', this)" style="--mt:var(--alm-sky);">
                🌀 Espiral
              </div>
              <div class="metod-tab" onclick="showMetod('rup', this)" style="--mt:var(--alm-violet);">
                🏛️ RUP
              </div>
              <div class="metod-tab" onclick="showMetod('sc', this)" style="--mt:var(--alm-pink);">
                🏃 Scrum
              </div>
              <div class="metod-tab" onclick="showMetod('xp', this)" style="--mt:var(--alm-emerald);">
                ⚡ XP
              </div>
              <div class="metod-tab" onclick="showMetod('dv', this)" style="--mt:var(--alm-orange);">
                ∞ DevOps
              </div>
              <div class="metod-tab" onclick="showMetod('sf', this)" style="--mt:var(--alm-yellow);">
                📐 SAFe
              </div>
            </div>
            <div id="metod-wf" class="metod-panel">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  🌊 Waterfall — Modelo Cascada
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  El modelo más tradicional. Las fases se ejecutan de forma <strong>secuencial y lineal</strong>.
                  No se puede avanzar a la siguiente fase hasta completar la anterior.
                  Ideal para proyectos con <strong>requisitos muy estables y bien definidos</strong>.
                </p>
                <div class="metod-flow-h">
                  <div class="mf-step" style="--mc:#f59e0b;">
                    <span>📋</span><h5>Requisitos</h5><small>Todos los requisitos definidos</small>
                  </div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#38bdf8;">
                    <span>📐</span><h5>Diseño</h5><small>Arquitectura completa</small>
                  </div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#a78bfa;">
                    <span>⌨️</span><h5>Implementación</h5><small>Todo el código</small>
                  </div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#f472b6;">
                    <span>🔬</span><h5>Verificación</h5><small>Pruebas completas</small>
                  </div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#34d399;">
                    <span>🛰️</span><h5>Mantenimiento</h5><small>Soporte en producción</small>
                  </div>
                </div>
                <div class="alm-tip" style="margin-top:16px;">
                  <span class="tip-label">⚠️ Ventajas y Desventajas</span>
                  <strong>✅ Ventajas:</strong> Fácil de gestionar, documentación completa, ideal para contratos fijos.
                  <strong>❌ Desventajas:</strong> Cambios tardíos son muy costosos, el cliente no ve el producto hasta el final.
                  Conecta con el <strong>SDLC clásico y el CIM→PIM→PSM→ISM de MDA</strong>.
                </div>
              </div>
            </div>
            <div id="metod-sp" class="metod-panel" style="display:none;">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  🌀 Modelo Espiral — Risk-Driven
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  Combina Waterfall con prototipos iterativos. En cada vuelta de la espiral se ejecutan 4 cuadrantes:
                  Planificación → Análisis de Riesgos → Ingeniería → Evaluación.
                  Ideal para proyectos <strong>grandes, complejos y con alta incertidumbre técnica</strong>.
                </p>
                <div class="spiral-grid">
                  <div class="spiral-q" style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.2);">
                    <div class="sq-num" style="color:#f59e0b;">1</div>
                    <h5 style="color:#f59e0b;">Planificación</h5>
                    <p>Objetivos del ciclo, restricciones y alternativas</p>
                  </div>
                  <div class="spiral-q" style="background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.2);">
                    <div class="sq-num" style="color:#38bdf8;">2</div>
                    <h5 style="color:#38bdf8;">Análisis de Riesgos</h5>
                    <p>Identificar y mitigar riesgos técnicos y de negocio</p>
                  </div>
                  <div class="spiral-q" style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.2);">
                    <div class="sq-num" style="color:#a78bfa;">3</div>
                    <h5 style="color:#a78bfa;">Ingeniería</h5>
                    <p>Desarrollo y pruebas del ciclo actual</p>
                  </div>
                  <div class="spiral-q" style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.2);">
                    <div class="sq-num" style="color:#34d399;">4</div>
                    <h5 style="color:#34d399;">Evaluación</h5>
                    <p>El cliente valida y se planifica el siguiente ciclo</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="metod-rup" class="metod-panel" style="display:none;">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  🏛️ RUP — Rational Unified Process
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  Proceso iterativo e incremental con 4 fases. Fuertemente orientado a UML.
                  Cada fase tiene múltiples iteraciones. Roles definidos: Arquitecto, Analista, Desarrollador, Tester.
                </p>
                <div class="metod-flow-h">
                  <div class="mf-step" style="--mc:#f59e0b;"><span>🌱</span><h5>Inicio</h5><small>¿Vale la pena?</small></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#38bdf8;"><span>🔍</span><h5>Elaboración</h5><small>Arquitectura base</small></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#a78bfa;"><span>🏗️</span><h5>Construcción</h5><small>Desarrollo iterativo</small></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#34d399;"><span>🚀</span><h5>Transición</h5><small>Entrega al usuario</small></div>
                </div>
              </div>
            </div>
            <div id="metod-sc" class="metod-panel" style="display:none;">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  🏃 Scrum — El Framework Ágil Más Popular
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  Framework ágil iterativo con Sprints de 1-4 semanas. 3 roles: Product Owner, Scrum Master, Dev Team.
                  5 eventos: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective, Sprint.
                </p>
                <div class="kanban-board">
                  <div class="kb-col"><h5 style="color:#f59e0b;">📦 Product Backlog</h5>
                    <div class="kb-card"><strong>US-001</strong>Login usuario</div>
                    <div class="kb-card"><strong>US-002</strong>Registro nuevo usuario</div>
                    <div class="kb-card"><strong>US-003</strong>Recuperar contraseña</div>
                  </div>
                  <div class="kb-col"><h5 style="color:#38bdf8;">🗓️ Sprint Backlog</h5>
                    <div class="kb-card"><strong>US-001</strong>Login usuario</div>
                    <div class="kb-card"><strong>US-004</strong>Dashboard principal</div>
                  </div>
                  <div class="kb-col"><h5 style="color:#a78bfa;">⚡ En Progreso</h5>
                    <div class="kb-wip">WIP LIMIT: 2</div>
                    <div class="kb-card" style="border-color:#a78bfa;"><strong>US-001</strong>Login — en desarrollo</div>
                  </div>
                  <div class="kb-col"><h5 style="color:#34d399;">✅ Terminado</h5>
                    <div class="kb-card" style="border-color:#34d399;"><strong>US-005</strong>Estructura de BD</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="metod-xp" class="metod-panel" style="display:none;">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  ⚡ XP — Extreme Programming
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  Metodología ágil enfocada en prácticas de ingeniería. Las 12 prácticas XP son las mejores prácticas de desarrollo llevadas al extremo.
                </p>
                <div class="alm-grid-3" style="margin-top:8px;">
                  <div class="alm-card" style="padding:16px;"><h5 style="color:#34d399;margin-bottom:6px;">🧪 TDD</h5><p style="font-size:12px;color:var(--alm-muted);">Test primero, luego código</p></div>
                  <div class="alm-card" style="padding:16px;"><h5 style="color:#38bdf8;margin-bottom:6px;">👥 Pair Programming</h5><p style="font-size:12px;color:var(--alm-muted);">Dos programadores, una computadora</p></div>
                  <div class="alm-card" style="padding:16px;"><h5 style="color:#f59e0b;margin-bottom:6px;">🔧 Refactoring</h5><p style="font-size:12px;color:var(--alm-muted);">Mejorar el código continuamente</p></div>
                  <div class="alm-card" style="padding:16px;"><h5 style="color:#a78bfa;margin-bottom:6px;">🚀 Integración Continua</h5><p style="font-size:12px;color:var(--alm-muted);">Integrar varias veces al día</p></div>
                  <div class="alm-card" style="padding:16px;"><h5 style="color:#f472b6;margin-bottom:6px;">🗣️ Cliente Presente</h5><p style="font-size:12px;color:var(--alm-muted);">El cliente es parte del equipo</p></div>
                  <div class="alm-card" style="padding:16px;"><h5 style="color:#fb923c;margin-bottom:6px;">📦 Entregas Pequeñas</h5><p style="font-size:12px;color:var(--alm-muted);">Releases frecuentes al cliente</p></div>
                </div>
              </div>
            </div>
            <div id="metod-dv" class="metod-panel" style="display:none;">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  ∞ DevOps — El Bucle Infinito
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  DevOps une Desarrollo y Operaciones en un ciclo continuo de 8 fases.
                  Automatización total del pipeline desde el commit hasta el monitoreo en producción.
                </p>
                <div class="metod-flow-h" style="flex-wrap:wrap;">
                  <div class="mf-step" style="--mc:#f59e0b;"><span>📋</span><h5>Planificar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#38bdf8;"><span>⌨️</span><h5>Codificar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#a78bfa;"><span>🔨</span><h5>Compilar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#f472b6;"><span>🔬</span><h5>Probar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#34d399;"><span>📦</span><h5>Liberar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#fb923c;"><span>🚀</span><h5>Desplegar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#e879f9;"><span>🖥️</span><h5>Operar</h5></div>
                  <div class="mf-arr">→</div>
                  <div class="mf-step" style="--mc:#facc15;"><span>📈</span><h5>Monitorear</h5></div>
                </div>
              </div>
            </div>
            <div id="metod-sf" class="metod-panel" style="display:none;">
              <div class="alm-hband">
                <h3 style="font-family:inherit;font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;">
                  📐 SAFe — Scaled Agile Framework
                </h3>
                <p style="font-size:13px;color:var(--alm-muted);margin-bottom:16px;line-height:1.6;">
                  Framework para escalar Scrum a múltiples equipos. 3 niveles: Portfolio, Program (ART) y Team.
                </p>
                <div class="alm-grid-3" style="margin-top:8px;">
                  <div class="alm-card" style="padding:20px;border-color:rgba(250,204,21,.3);">
                    <h5 style="color:#facc15;margin-bottom:6px;">🏢 Nivel Portfolio</h5>
                    <p style="font-size:12px;color:var(--alm-muted);">Estrategia y financiamiento. Epics empresariales. OKRs. Corresponde al CIM de MDA.</p>
                  </div>
                  <div class="alm-card" style="padding:20px;border-color:rgba(167,139,250,.3);">
                    <h5 style="color:#a78bfa;margin-bottom:6px;">⚙️ Nivel Program / ART</h5>
                    <p style="font-size:12px;color:var(--alm-muted);">Agile Release Train. PI Planning cada 8-12 semanas. Múltiples equipos Scrum sincronizados.</p>
                  </div>
                  <div class="alm-card" style="padding:20px;border-color:rgba(52,211,153,.3);">
                    <h5 style="color:#34d399;margin-bottom:6px;">👥 Nivel Team</h5>
                    <p style="font-size:12px;color:var(--alm-muted);">Equipos Scrum/Kanban con cadencia SAFe. Sprints de 2 semanas alineados con todos los equipos.</p>
                  </div>
                </div>
              </div>
            </div>
            <script>
            function showMetod(id, el) {
              document.querySelectorAll('.metod-panel').forEach(p => p.style.display = 'none');
              document.querySelectorAll('.metod-tab').forEach(t => t.classList.remove('mt-active'));
              document.getElementById('metod-' + id).style.display = 'block';
              if(el) el.classList.add('mt-active');
            }
            </script>
            </div>
        """));

        return sec;
    }

    // ─────────────────────────────────────────
    // SEC 10 · HERRAMIENTAS
    // ─────────────────────────────────────────
    private Component buildSecTools() {
        Div sec = new Div();
        sec.addClassName("alm-section");
        sec.add(secLabel("▸ Herramientas por Etapa ALM — El Ecosistema Completo"));

        sec.add(new Html("""
            <div class="alm-table-wrap">
            <table class="alm-table">
              <thead>
                <tr>
                  <th>Herramienta</th>
                  <th>Categoría / Etapa ALM</th>
                  <th>Para qué sirve</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong style="color:#f59e0b;">🎯 Jira</strong></td>
                  <td><span class="badge-amber">Etapa 1 · Gobernanza</span></td>
                  <td>Gestión de proyectos, backlogs, sprints y tickets. El estándar de la industria para Scrum/SAFe.</td></tr>
                <tr><td><strong style="color:#38bdf8;">📐 Figma</strong></td>
                  <td><span class="badge-sky">Etapa 2 · Diseño</span></td>
                  <td>Diseño de UI/UX y prototipos. Transforma el CIM en mockups visuales antes de codificar.</td></tr>
                <tr><td><strong style="color:#38bdf8;">🗂️ Draw.io / StarUML</strong></td>
                  <td><span class="badge-sky">Etapa 2 · Diseño</span></td>
                  <td>Diagramas UML: Clases, Secuencia, Estado, Actividad. Documentan el PIM.</td></tr>
                <tr><td><strong style="color:#a78bfa;">🐙 Git / GitHub</strong></td>
                  <td><span class="badge-violet">Etapa 3 · Desarrollo</span></td>
                  <td>Control de versiones. Feature branches, Pull Requests, Code Review. Base de todo CI/CD.</td></tr>
                <tr><td><strong style="color:#a78bfa;">💻 VS Code / IntelliJ</strong></td>
                  <td><span class="badge-violet">Etapa 3 · Desarrollo</span></td>
                  <td>IDEs para escribir código. IntelliJ IDEA es el preferido para Java/Spring Boot/Vaadin.</td></tr>
                <tr><td><strong style="color:#f472b6;">🔬 JUnit / Selenium</strong></td>
                  <td><span class="badge-pink">Etapa 4 · QA</span></td>
                  <td>JUnit para pruebas unitarias e integración en Java. Selenium para pruebas E2E de UI.</td></tr>
                <tr><td><strong style="color:#f472b6;">📊 SonarQube</strong></td>
                  <td><span class="badge-pink">Etapa 4 · QA</span></td>
                  <td>Análisis estático: detecta violaciones SOLID, código duplicado, complejidad ciclomática alta.</td></tr>
                <tr><td><strong style="color:#34d399;">🐳 Docker</strong></td>
                  <td><span class="badge-emerald">Etapa 5 · Operaciones</span></td>
                  <td>Empaqueta el ISM (código + dependencias) en contenedores. Implementa la Portabilidad ISO 25010.</td></tr>
                <tr><td><strong style="color:#34d399;">🚀 Jenkins / GitHub Actions</strong></td>
                  <td><span class="badge-emerald">Etapa 5 · CI/CD</span></td>
                  <td>Automatizan el pipeline: commit → build → test → deploy. El corazón de DevOps.</td></tr>
                <tr><td><strong style="color:#fb923c;">☁️ AWS / Azure / GCP</strong></td>
                  <td><span class="badge-orange">Etapa 5 · Cloud</span></td>
                  <td>Infraestructura cloud. EC2, Lambda, RDS, S3. Kubernetes para orquestar contenedores Docker.</td></tr>
                <tr><td><strong style="color:#facc15;">📈 Grafana / Datadog</strong></td>
                  <td><span class="badge-yellow">Etapa 5 · Monitoreo</span></td>
                  <td>Dashboards de métricas en tiempo real, alertas y logs. Miden la Confiabilidad y Disponibilidad ISO 25010.</td></tr>
                <tr><td><strong style="color:#38bdf8;">🔥 Firebase</strong></td>
                  <td><span class="badge-sky">Backend / Realtime</span></td>
                  <td>Base de datos NoSQL en tiempo real, autenticación, hosting. Popular para apps móviles y web rápidas.</td></tr>
                <tr><td><strong style="color:#a78bfa;">🐘 PostgreSQL / MySQL</strong></td>
                  <td><span class="badge-violet">Base de Datos</span></td>
                  <td>Motores SQL relacionales. PostgreSQL es el preferido para aplicaciones enterprise por su robustez ACID.</td></tr>
                <tr><td><strong style="color:#fb923c;">🍃 MongoDB</strong></td>
                  <td><span class="badge-orange">Base de Datos NoSQL</span></td>
                  <td>Base de datos de documentos. Flexible, escala horizontal. Ideal para datos no estructurados.</td></tr>
                <tr><td><strong style="color:#f59e0b;">🔎 Postman</strong></td>
                  <td><span class="badge-amber">Testing APIs</span></td>
                  <td>Probar y documentar APIs REST. Permite crear colecciones de pruebas automáticas para CI/CD.</td></tr>
              </tbody>
            </table>
            </div>
        """));

        sec.add(tipBox("🔗 Todo Conectado",
            "Cada herramienta vive en una etapa específica del <strong>ALM</strong>. " +
            "Jira gestiona el <strong>CIM</strong>. Figma diseña el <strong>PIM</strong>. " +
            "Git implementa el <strong>ISM</strong>. Docker empaqueta el <strong>ISM</strong> para producción. " +
            "Jenkins automatiza el pipeline que conecta todas las etapas en el ciclo <strong>DevOps ∞</strong>."));

        return sec;
    }

    // ─────────────────────────────────────────
    // HELPERS — REUSABLE COMPONENTS
    // ─────────────────────────────────────────
    private Div secLabel(String text) {
        Div label = new Div();
        label.addClassName("alm-sec-label");
        label.setText(text);
        return label;
    }

    private Div tipBox(String labelText, String html) {
        Div tip = new Div();
        tip.addClassName("alm-tip");
        tip.add(new Html("<div><span class='tip-label'>" + labelText + "</span> " + html + "</div>"));
        return tip;
    }

    private Div infoCard(String title, String desc, String analogy) {
        Div card = new Div();
        card.addClassName("alm-card");
        card.getStyle().set("padding", "28px").set("margin-bottom", "20px");

        H3 h3 = new H3(title);
        h3.getStyle().set("font-size","18px").set("font-weight","700")
          .set("color","#fff").set("margin-bottom","10px");

        Div descDiv = new Div();
        descDiv.add(new Html("<p style='font-size:14px;color:var(--alm-muted);line-height:1.7;'>" + desc + "</p>"));

        card.add(h3, descDiv);

        if (analogy != null) {
            Div ana = new Div();
            ana.addClassName("ana-mini");
            ana.getStyle().set("margin-top", "14px");
            ana.add(new Html("<span>" + analogy + "</span>"));
            card.add(ana);
        }
        return card;
    }

    private void showDialog(String title, String header, String detail) {
        Dialog dialog = new Dialog();
        dialog.addClassName("alm-dialog");
        dialog.setWidth("680px");
        dialog.setMaxWidth("95vw");

        Div bar = new Div();
        bar.addClassName("dialog-bar");

        Div head = new Div();
        head.addClassName("dialog-head");

        H2 h2 = new H2(header);
        h2.addClassName("dialog-title");

        Button closeBtn = new Button("✕");
        closeBtn.addClassName("dialog-close");
        closeBtn.addClickListener(e -> dialog.close());

        head.add(h2, closeBtn);

        Div body = new Div();
        body.addClassName("dialog-body");
        body.add(new Html("<p style='font-size:14px;color:var(--alm-muted);line-height:1.8;'>" + detail + "</p>"));

        dialog.add(bar, head, body);
        dialog.open();
    }
}