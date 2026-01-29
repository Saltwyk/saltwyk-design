# Guilloche Composition Engine

**Component Type:** Interactive Design Tool (React Island)
**Surface:** Marketing, Brand Collateral, Print
**Status:** Future Feature Specification
**Target Platform:** Astro Migration (`client:load` island)
**Last Updated:** 2026-01-28

---

## Overview

### Problem Statement

The current guilloche generator (`/core/tools/guilloche.html`) produces **single rosettes** — individual spirograph-family curves (hypotrochoid, epitrochoid, rose, spirograph) useful as standalone decorative elements. However, real certificate-style intaglio security art is never a single rosette. It consists of **flowing, interconnected fields** of pattern that fill irregular regions, blend at intersections, and build visual density through layered overprints.

The gap between "one rosette" and "certificate-grade composition" is enormous:

| Capability | Current Tool | Composition Engine |
|---|---|---|
| Output | Single rosette SVG | Full-field intaglio composition |
| Layout | Centered on canvas | Positioned across shaped regions |
| Layering | One curve | Multiple overlapping passes |
| Flow | Static | Directional, following field shape |
| Color | Single gradient per curve | Layered overprints with transparency |
| Control | Manual sliders | LLM art direction + manual refinement |
| Use case | Icon, spot illustration | Hero backgrounds, certificates, print collateral |

### Vision

An LLM-powered composition engine that accepts **narrative art direction** ("a dense, warm field flowing left-to-right with an open center for the wordmark") and renders a complete intaglio composition by orchestrating the existing parametric engine across multiple passes, positions, and warp envelopes.

---

## Architecture

### Component Structure

```
src/
  components/
    guilloche/
      CompositionEngine.tsx      # React island, mounted via client:load
      engine/
        ParametricCurve.ts       # Core math (hypotrochoid, epitrochoid, rose, spirograph)
        Compositor.ts            # Multi-layer orchestration
        PathBlender.ts           # Intersection and overlap logic
        WarpEnvelope.ts          # Field-shape deformation
        FieldGenerator.ts        # Fills regions with tiled/flowing curves
      llm/
        ArtDirector.ts           # Narrative prompt → structured params
        PromptTemplates.ts       # Composition prompt schemas
        ParamResolver.ts         # Structured params → engine calls
      ui/
        CompositionControls.tsx  # Field shape, flow, density controls
        LayerStack.tsx           # Layer management panel
        PreviewCanvas.tsx        # Real-time SVG preview
        RosetteLibrary.tsx       # Browse/select pre-built rosettes
      export/
        SVGExporter.ts           # Web-optimized SVG output
        PrintExporter.ts         # High-resolution print output
  data/
    rosette-library/             # Pre-generated tagged SVG library
      warm-dense-hypotrochoid.svg
      cool-sparse-rose.svg
      ...
```

### Astro Integration

```astro
---
// src/pages/tools/guilloche-composer.astro
import Layout from '@layouts/ToolLayout.astro';
import CompositionEngine from '@components/guilloche/CompositionEngine.tsx';
---

<Layout title="Guilloche Composer">
  <CompositionEngine client:load />
</Layout>
```

The component mounts as a React island with `client:load` since it requires immediate interactivity. All rendering happens client-side via SVG DOM manipulation — no server-side generation needed.

### Dependencies

| Dependency | Purpose |
|---|---|
| React 18+ | Component framework (Astro island) |
| d3-shape / d3-path | SVG path construction and interpolation |
| SVGO | Export optimization (invoked at export time) |
| Design tokens CSS | Brand colors, thread gradients |

---

## Composition Techniques

### Parametric Fields

The key insight from certificate-style intaglio is that curves are **mathematically continuous across the field** — not tiled copies of a single rosette. Tiling creates visible seams and repetition. Instead, the field generator plots 2D polar equations where parameters vary spatially:

```
r(θ, φ) = a·sin(n·θ) + b·cos(m·φ)
```

By modulating frequency, amplitude, and phase as functions of position (e.g., `freq(x,y) = baseFreq + gradient·x`), the output flows seamlessly across the entire region without repeat boundaries.

For simpler compositions, discrete rosette tiling with overlap blending is also supported:

```
┌──────────────────────────────────┐
│  ╭──╮   ╭──╮   ╭──╮   ╭──╮     │
│ ╭╯  ╰╮ ╭╯  ╰╮ ╭╯  ╰╮ ╭╯  ╰╮   │
│ ╰╮  ╭╯ ╰╮  ╭╯ ╰╮  ╭╯ ╰╮  ╭╯   │  ← tiled rosettes fill region
│  ╰──╯   ╰──╯   ╰──╯   ╰──╯     │
│  ╭──╮   ╭──╮   ╭──╮   ╭──╮     │
│ ╭╯  ╰╮ ╭╯  ╰╮ ╭╯  ╰╮ ╭╯  ╰╮   │
│ ╰╮  ╭╯ ╰╮  ╭╯ ╰╮  ╭╯ ╰╮  ╭╯   │
│  ╰──╯   ╰──╯   ╰──╯   ╰──╯     │
└──────────────────────────────────┘
```

**Field generation approach (continuous):**

```javascript
// Multi-layer continuous field — each layer is a family of curves
// with spatially varying parameters for seamless flow
for (let layer = 0; layer < numLayers; layer++) {
  ctx.strokeStyle = `hsla(${hue}, 80%, 50%, 0.3)`;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      const angle = (x * freqX + y * freqY + layer * phase) % (Math.PI * 2);
      const radius = amp * Math.sin(density * angle + warp);
      ctx.moveTo(x, y);
      ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
    }
  }
  ctx.stroke();
}
```

**Field parameters:**

| Parameter | Type | Description |
|---|---|---|
| `fieldShape` | `rect` \| `ellipse` \| `path` | Region boundary |
| `flowDirection` | `angle` (0-360) | Primary pattern flow |
| `density` | `0.1 - 1.0` | Spacing between tiled elements |
| `scale` | `0.5 - 3.0` | Size of individual rosettes within field |
| `jitter` | `0 - 1.0` | Positional randomness |
| `fadeEdge` | `0 - 50` (px) | Opacity falloff at field boundary |

### Path Blending

Where curves intersect — either from tiled rosettes overlapping or from multi-layer continuous fields — the blender controls visual behavior. This draws from Illustrator's blend/envelope techniques, ported to JS:

- **Additive blend** — overlapping strokes increase density, creating the characteristic darkness at intersections seen in certificate intaglio
- **Subtractive blend** — overlapping strokes create voids, producing a watermark-like negative space effect
- **Weave blend** — alternating over/under at intersections via clip-path toggling, creating an interlaced lattice

Create wavy base paths (e.g., sine waves), duplicate and offset them densely, then apply envelope warps or blends to interweave into unified flows.

Blending is achieved through SVG compositing: `mix-blend-mode`, clip paths, and strategic opacity layering — no rasterization required. The `mix-blend-mode` property is particularly effective for intaglio depth on web.

### Layered Overprints

Real intaglio printing uses multiple ink passes. The composition engine simulates this with a layer stack:

```
Layer 3: Fine detail (0.25px stroke, high density, 0.3 opacity)
Layer 2: Mid structure (0.75px stroke, medium density, 0.6 opacity)
Layer 1: Base field (1.5px stroke, low density, 0.4 opacity)
──────────────────────────────────────────────────
Canvas (transparent or white)
```

Each layer can have independent:
- Curve type and parameters
- Color / gradient
- Flow direction (counter-flowing layers create moiré-like depth)
- Blend mode

### Warp Envelopes

Flat tiled fields look mechanical. Warp envelopes deform the entire field to follow organic shapes:

| Envelope | Effect |
|---|---|
| `barrel` | Bulge outward from center |
| `pinch` | Compress toward center |
| `wave` | Sinusoidal horizontal distortion |
| `radial` | Curves follow concentric rings |
| `path` | Deform along an arbitrary SVG path |
| `perspective` | Simulate 3D receding plane |

Warp is applied as a post-transform on computed path points before SVG serialization — keeping output as clean vector paths, not transformed groups.

---

## LLM Integration

### Pipeline

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Narrative    │ ──▷ │  Structured  │ ──▷ │  Rendering   │ ──▷ │  SVG         │
│  Art Direction│     │  Params      │     │  Pipeline    │     │  Output      │
│  (natural     │     │  (JSON)      │     │  (engine     │     │  (optimized  │
│   language)   │     │              │     │   calls)     │     │   vector)    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
       ▲                                         │
       │              ┌──────────────┐           │
       └───────────── │  User        │ ◁─────────┘
                      │  Refinement  │   preview + adjust
                      └──────────────┘
```

### How It Works

1. **User writes art direction** in natural language (or selects a template)
2. **LLM (Claude API) interprets** the narrative and returns a structured composition spec (JSON)
3. **ParamResolver maps** the spec to engine calls — curve types, layer stack, field shapes, warp envelopes
4. **Rendering pipeline executes** all layers, composites the result, previews in real-time
5. **User refines** via sliders/controls or revised narrative — loop back to step 2 or 3

### Structured Composition Spec (LLM Output)

```json
{
  "canvas": { "width": 1200, "height": 600 },
  "layers": [
    {
      "id": "base-field",
      "curveType": "hypotrochoid",
      "params": { "R": 200, "r": 80, "d": 100, "rotations": 12 },
      "field": {
        "shape": "rect",
        "density": 0.6,
        "flowDirection": 0,
        "fadeEdge": 30
      },
      "style": {
        "strokeWidth": 1.0,
        "opacity": 0.3,
        "color": "var(--warm-600)"
      },
      "warp": { "type": "barrel", "strength": 0.2 }
    },
    {
      "id": "detail-overlay",
      "curveType": "rose",
      "params": { "R": 120, "r": 45, "d": 60, "rotations": 20 },
      "field": {
        "shape": "ellipse",
        "density": 0.8,
        "flowDirection": 45,
        "fadeEdge": 50
      },
      "style": {
        "strokeWidth": 0.3,
        "opacity": 0.5,
        "color": "var(--sepia-500)"
      },
      "warp": { "type": "wave", "strength": 0.15 }
    }
  ],
  "exclusionZones": [
    { "shape": "ellipse", "cx": 600, "cy": 300, "rx": 200, "ry": 100 }
  ],
  "blendMode": "additive"
}
```

The `exclusionZones` array defines regions where pattern density drops to zero — space reserved for typography, logos, or the Saltwyk wordmark.

---

## Art Direction Template

A structured prompt format that guides both human authors and the LLM toward complete, renderable composition specs:

```markdown
## Composition Brief

**Surface:** [marketing-hero | certificate | card-background | print-collateral]
**Dimensions:** [width]×[height] px (or mm for print)
**Opal Treatment:** [Bright Opal | Fire Opal | Full Spectrum]

### Field Description
Describe the overall pattern field — shape, flow, density, mood.
Example: "A dense, warm field of interlocking spirograph curves flowing
diagonally from bottom-left to top-right, with a soft radial fade
creating an open center for the wordmark."

### Layer Intent
Describe each visual layer and its role.
- **Base:** Heavy, low-opacity foundational structure
- **Mid:** Medium-weight directional flow
- **Detail:** Fine, high-density intricate overlay

### Exclusion Zones
Where should the pattern clear out?
- Center: oval void for wordmark
- Bottom-right: rectangular clear zone for CTA button

### Color Direction
Thread colors, gradients, or brand palette references.
Example: "Sepia-to-warm base layers, with a single cyan thread
detail pass at 20% opacity for the Bright Opal signature."

### Reference
[Optional] Link to currency, certificate, or intaglio artwork
for mood reference.
```

---

## Rosette Library

### Concept

A catalog of pre-generated, tagged SVG rosettes that serve as **composition building blocks**. Rather than computing every curve from raw parameters, the library provides curated starting points that the composition engine can tile, warp, and layer.

### Library Structure

Each rosette is stored as an optimized SVG with a companion metadata sidecar:

```
data/rosette-library/
  rosettes/
    warm-dense-hypotrochoid-001.svg
    warm-dense-hypotrochoid-001.json   # metadata
    cool-sparse-rose-002.svg
    cool-sparse-rose-002.json
    ...
  index.json                           # full catalog with tags
```

### Metadata Schema

```json
{
  "id": "warm-dense-hypotrochoid-001",
  "curveType": "hypotrochoid",
  "params": { "R": 200, "r": 80, "d": 100, "rotations": 15 },
  "tags": ["warm", "dense", "intricate", "certificate"],
  "colorFamily": "warm",
  "density": "dense",
  "complexity": "high",
  "fileSize": "12KB",
  "dimensions": { "width": 400, "height": 400 },
  "preview": "data:image/svg+xml;base64,..."
}
```

### Tag Taxonomy

| Dimension | Values |
|---|---|
| **Temperature** | `warm`, `cool`, `neutral` |
| **Density** | `sparse`, `medium`, `dense`, `intricate` |
| **Curve family** | `hypotrochoid`, `epitrochoid`, `rose`, `spirograph` |
| **Color family** | `sepia`, `intaglio`, `emerald`, `cyan`, `magenta`, `slate`, `indigo`, `burgundy`, `lime`, `orange`, `sienna` |
| **Character** | `elegant`, `mechanical`, `organic`, `chaotic`, `flowing`, `angular` |
| **Use case** | `certificate`, `border`, `background`, `spot`, `watermark` |

### Library Size Target

- **Initial release:** 50-80 curated rosettes covering the tag matrix
- **Growth:** Community/team contributions via the generator tool with a "Save to Library" action
- **Storage:** ~2-4 MB total for 80 rosettes at average 30KB each

---

## UI Controls

### Control Panel Layout

```
┌─────────────────────────────────────────────────────────┐
│ COMPOSITION ENGINE                                       │
├───────────────┬─────────────────────────────────────────┤
│               │                                         │
│  Art Direction│         Preview Canvas                  │
│  ┌──────────┐ │                                         │
│  │ textarea │ │    ┌─────────────────────────────┐      │
│  └──────────┘ │    │                             │      │
│  [Generate]   │    │      live SVG preview       │      │
│               │    │                             │      │
│  FIELD SHAPE  │    │                             │      │
│  ○ Rect       │    └─────────────────────────────┘      │
│  ○ Ellipse    │                                         │
│  ○ Custom Path│                                         │
│               │                                         │
│  FLOW         │                                         │
│  Direction ◐──│                                         │
│  Density  ───●│                                         │
│  Jitter   ──●─│                                         │
│               │                                         │
│  WARP         │  ┌──────────────────────────────────┐   │
│  Type [▾ ]    │  │ Layer Stack                      │   │
│  Strength ──● │  │ ☐ Layer 3 — detail (rose)       │   │
│               │  │ ☑ Layer 2 — mid (spirograph)     │   │
│  LAYERS       │  │ ☑ Layer 1 — base (hypotrochoid) │   │
│  [+ Add Layer]│  │ [+ Add] [↕ Reorder]             │   │
│               │  └──────────────────────────────────┘   │
│  EXPORT       │                                         │
│  [Web SVG]    │                                         │
│  [Print SVG]  │                                         │
│  [Copy JSON]  │                                         │
│               │                                         │
├───────────────┴─────────────────────────────────────────┤
│ Rosette Library Browser                [Search] [Filter]│
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐     │
│ │    │ │    │ │    │ │    │ │    │ │    │ │    │     │
│ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘     │
└─────────────────────────────────────────────────────────┘
```

### Control Reference

| Control | Type | Range | Description |
|---|---|---|---|
| Art direction | Textarea | Free text | Natural language composition prompt |
| Field shape | Radio group | `rect`, `ellipse`, `path` | Boundary shape for pattern fill |
| Flow direction | Angle dial | 0-360° | Primary axis of pattern flow |
| Density | Slider | 0.1 - 1.0 | Spacing between tiled rosettes |
| Jitter | Slider | 0 - 1.0 | Positional randomness |
| Warp type | Dropdown | `none`, `barrel`, `pinch`, `wave`, `radial`, `path`, `perspective` | Field deformation |
| Warp strength | Slider | 0 - 1.0 | Intensity of warp deformation |
| Intersection density | Slider | 0 - 1.0 | How much adjacent rosettes overlap |
| Blend mode | Dropdown | `additive`, `subtractive`, `weave` | Overlap compositing behavior |
| Edge fade | Slider | 0 - 50px | Opacity falloff at field boundary |
| Canvas size | Width × Height inputs | 200-2400px | Output dimensions |
| Background | Toggle | `white`, `transparent`, `intaglio` | Canvas fill |

### Layer Controls (per layer)

| Control | Type | Range |
|---|---|---|
| Curve type | Dropdown | `hypotrochoid`, `epitrochoid`, `rose`, `spirograph` |
| R (outer radius) | Slider | 50 - 300 |
| r (inner radius) | Slider | 10 - 200 |
| d (pen offset) | Slider | 5 - 200 |
| Rotations | Slider | 1 - 60 |
| Stroke width | Slider | 0.25 - 3.0 |
| Opacity | Slider | 0.1 - 1.0 |
| Color / gradient | Picker | Design token colors |
| Visibility | Toggle | Show / hide |
| Lock | Toggle | Prevent edits |

---

## File Size Strategy

### Web vs Print Budgets

| Context | Target Size | Rationale |
|---|---|---|
| **Single rosette (web)** | < 50 KB | Inline SVG or `<img>`, no layout shift |
| **Composition (web hero)** | 80 - 150 KB | Background hero, lazy-loaded below fold or inlined above fold |
| **Composition (web card)** | 30 - 80 KB | Smaller field, fewer layers |
| **Print (full field)** | 200 - 500 KB | High detail, no compression constraints |
| **Print (certificate)** | 500 KB - 2 MB | Maximum detail, many layers |

### Optimization Techniques

| Technique | Impact | When Applied |
|---|---|---|
| **Path simplification** | 30-50% reduction | Reduce point count via Ramer-Douglas-Peucker |
| **Coordinate rounding** | 10-20% reduction | Round path coordinates to 1 decimal place |
| **Shared definitions** | 20-40% reduction | `<defs>` + `<use>` for repeated rosette patterns |
| **SVGO processing** | 10-15% reduction | Minify, merge paths, remove metadata |
| **Gzip (transfer)** | 60-80% reduction | SVG compresses extremely well |
| **Layer culling** | Variable | Omit layers below opacity threshold for web export |

### Export Profiles

```typescript
interface ExportProfile {
  name: 'web-hero' | 'web-card' | 'print-standard' | 'print-certificate';
  maxFileSize: number;          // KB
  coordinatePrecision: number;  // decimal places
  minStrokeWidth: number;       // cull finer strokes for web
  minOpacity: number;           // cull near-invisible layers for web
  useSharedDefs: boolean;       // <defs>/<use> optimization
  svgoProfile: 'aggressive' | 'standard' | 'minimal';
}
```

---

## Design Token Integration

### Thread Gradients

Compositions use the same thread color families defined in the design system. Each layer can reference token-based colors:

| Token Reference | Resolved Value | Use |
|---|---|---|
| `var(--warm-600)` | Sepia brown | Base field strokes |
| `var(--warm-400)` | Light sepia | Secondary field strokes |
| `var(--intaglio-700)` | Dark ink | Fire Opal backgrounds |
| `var(--cyan-thread)` | Thread cyan | Detail overlays (Bright Opal) |
| `var(--magenta-thread)` | Thread magenta | Detail overlays (Cool family) |
| `var(--lime-thread)` | Thread lime | Detail overlays (Fresh family) |
| `var(--orange-thread)` | Thread orange | Accent highlights |

### Opal Treatment Presets

Pre-configured color schemes matching the three Opal treatments:

| Preset | Base Color | Detail Color | Background |
|---|---|---|---|
| **Bright Opal** | `warm-500` / `warm-600` | `cyan-thread` at 20% | `warm-50` (ledger) |
| **Fire Opal** | `warm-300` / `warm-400` | `lime-thread` at 30% | `intaglio-900` |
| **Full Spectrum** | `warm-600` | All four threads layered | `white` or `transparent` |
| **Certificate** | `intaglio-800` | `warm-400` at 40% | `warm-50` (ledger) |

### Brand Compliance

- Thread colors in compositions follow the same restraint principles as the broader design system
- Full spectrum treatment is reserved for hero/marketing use
- Semantic colors (cyan=info, magenta=error) are **never** used in compositions — only thread-family tints and shades
- Emerald does not appear in guilloche patterns (interactive-only rule)

---

## Implementation Phases

### Phase 1: Core Engine Extraction

Extract the parametric math from `guilloche.html` into standalone TypeScript modules.

- [ ] Port `GuillocheEngine.generate()` to `ParametricCurve.ts`
- [ ] Port `SVGBuilder` to dedicated module with proper typing
- [ ] Port `PromptParser` keyword mapping
- [ ] Unit tests for all four curve types (hypotrochoid, epitrochoid, rose, spirograph)
- [ ] Validate output matches current HTML tool pixel-for-pixel

### Phase 2: Field Generation

Build the tiling and field-fill system.

- [ ] Implement `FieldGenerator` — tile rosettes across rectangular regions
- [ ] Add elliptical and arbitrary-path field boundaries
- [ ] Implement edge fade (opacity falloff at boundaries)
- [ ] Implement exclusion zones (clear areas for text/logos)
- [ ] Add flow direction and jitter controls
- [ ] Visual regression tests comparing output against reference compositions

### Phase 3: Layer Compositing

Multi-layer rendering with blend modes.

- [ ] Implement `Compositor` — render and merge multiple layers
- [ ] Implement `PathBlender` — additive, subtractive, and weave blending
- [ ] Layer stack UI with reorder, visibility, lock
- [ ] Per-layer style controls (color, opacity, stroke width)
- [ ] Export with `<defs>`/`<use>` optimization for repeated elements

### Phase 4: Warp Envelopes

Field deformation for organic, non-mechanical compositions.

- [ ] Implement barrel and pinch warps
- [ ] Implement wave and radial warps
- [ ] Implement arbitrary path warp
- [ ] Implement perspective warp
- [ ] Warp preview in real-time (may require WebWorker for performance)

### Phase 5: LLM Art Direction

Natural language composition control via Claude API.

- [ ] Define structured composition spec JSON schema
- [ ] Build `ArtDirector` module — prompt → structured params
- [ ] Build `ParamResolver` — structured params → engine calls
- [ ] Art direction template UI (textarea + template selector)
- [ ] Iterative refinement loop (generate → preview → adjust → regenerate)
- [ ] Prompt templates for common compositions (hero, certificate, card background)

### Phase 6: Rosette Library

Pre-generated building blocks with tagging and search.

- [ ] Generate initial 50-80 rosettes covering tag matrix
- [ ] Define metadata schema and tag taxonomy
- [ ] Build library browser UI with search and filter
- [ ] "Save to Library" action from single-rosette mode
- [ ] Drag-and-drop from library into composition layers

### Phase 7: Export & Optimization

Production-quality output for web and print.

- [ ] Web export profiles (hero, card) with size budgets
- [ ] Print export profiles (standard, certificate) with full detail
- [ ] SVGO integration for final optimization
- [ ] File size reporting and warnings when over budget
- [ ] Copy-to-clipboard for inline SVG usage
- [ ] Batch export (all layers separately + composite)

---

## Verification

### Functional Validation

- [ ] Single rosette mode still works identically to current `guilloche.html` tool
- [ ] Field generator fills a rectangular region with tiled rosettes at specified density
- [ ] Exclusion zones produce clean voids in the pattern field
- [ ] Layer stack renders 3+ layers with correct z-ordering and blend modes
- [ ] Warp envelope deforms field paths without breaking SVG validity
- [ ] LLM art direction produces a valid composition spec from natural language
- [ ] Exported SVG renders identically in Chrome, Safari, and Firefox
- [ ] Web export meets file size budget (< 150 KB for hero compositions)
- [ ] Print export preserves full detail (no path simplification, no layer culling)

### Visual Quality Gates

- [ ] Compositions exhibit depth through layered transparency (not flat or muddy)
- [ ] Edge fade creates smooth boundary transitions (no hard cutoffs)
- [ ] Warp deformations feel organic, not glitchy
- [ ] Color choices align with Opal treatment presets
- [ ] At least 3 reference compositions pass team design review

### Technical Quality Gates

- [ ] All parametric curve modules have unit tests
- [ ] SVG output passes W3C validator
- [ ] No runtime errors in the composition pipeline
- [ ] React island hydrates correctly within Astro layout
- [ ] Export profiles enforce documented size budgets

---

## References

### Internal

- Existing single-rosette tool: `/core/tools/guilloche.html`
- Design principles: `/docs/design-principles.md`
- Illustration system: `/marketing/components/illustration-system.html`
- Color strategy: `/docs/surface-shopper-color-strategy.md`

### Research Context

Key findings from Perplexity research that informed this spec:

- **Math/code methods produce superior results** for security-style guilloche — pure parametric equations yield precise, editable vector lines without AI image-generation artifacts
- **Pure JavaScript excels** at rendering guilloche directly in Canvas or SVG using parametric equations; no native libraries or server-side rendering needed
- **GCMC** (G-Code Meta Compiler) generates guilloche via rotor/stator teeth ratios — confirms the parametric approach
- **Tangra AI** generates seamless vector guilloche vortices via prompts (uses Flux, DALL-E, Imagen, Stable Diffusion) — demonstrates LLM-directed generation is viable, though raster AI introduces artifacts
- **SVG file sizes stay compact** (10-50KB typical) unless exceeding 10,000+ curves; confirms web viability
- **React inside Astro** confirmed as sufficient architecture — no full Next.js app required; `client:load` island keeps host page lightweight
- **Variable guilloche patents** describe parametric curves modulated by data for security features — informs the spatial parameter variation approach in the field generator
