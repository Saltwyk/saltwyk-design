# Table Component Specification

## Philosophy

- Tables display structured data for scanning and comparison
- They must balance information density with readability
- Row interactions (hover, select, expand) provide progressive disclosure

---

## Anatomy

- **Container** — Wrapper with optional border/shadow
- **Header row** — Column labels
- **Body rows** — Data rows
- **Cells** — Individual data points
- **Footer row** — Optional: totals, pagination

---

## Base Specifications

| Property | Value |
|----------|-------|
| Font family | Inter |
| Header font size | 12px |
| Header font weight | 600 |
| Header text transform | uppercase |
| Header letter spacing | 0.05em |
| Body font size | 14px |
| Body font weight | 400 |
| Row height (compact) | 40px |
| Row height (default) | 48px |
| Row height (comfortable) | 56px |
| Cell padding (x) | 12px |
| Cell padding (y) | 12px |

---

## Table Variants — Light Mode

### Default Table

| Element | Style |
|---------|-------|
| Container | `white` background, `warm-200` border, `rounded-lg` |
| Header row | `warm-50` background |
| Header text | `warm-600`, uppercase, tracking-wide |
| Body row | `white` background |
| Body text | `ink` |
| Row border | `warm-100` bottom border (1px) |
| Last row | No bottom border |

### Striped Table

| Element | Style |
|---------|-------|
| Odd rows | `white` |
| Even rows | `warm-50` |

### Bordered Table

| Element | Style |
|---------|-------|
| All cells | `warm-200` border on all sides |

### Minimal Table

| Element | Style |
|---------|-------|
| Container | No border, no background |
| Header | `warm-200` bottom border only |
| Rows | `warm-100` bottom border only |

---

## Table Variants — Dark Mode (Fire Opal)

### Default Table (on dark)

| Element | Style |
|---------|-------|
| Container | `intaglio-800` background, `intaglio-700` border |
| Header row | `intaglio-900` background |
| Header text | `warm-400`, uppercase |
| Body row | `intaglio-800` background |
| Body text | `warm-100` |
| Row border | `intaglio-700` bottom border |

### Striped Table (on dark)

| Element | Style |
|---------|-------|
| Odd rows | `intaglio-800` |
| Even rows | `intaglio-850` or `intaglio-900` |

---

## Row States

### Hover

| Mode | Background |
|------|------------|
| Light | `warm-50` |
| Dark | `intaglio-700` |

### Selected

| Mode | Background | Border |
|------|------------|--------|
| Light | `emerald-50` | `emerald-500` left border (3px) |
| Dark | `emerald-500/10` | `emerald-500` left border (3px) |

### Active/Pressed

| Mode | Background |
|------|------------|
| Light | `warm-100` |
| Dark | `intaglio-600` |

### Disabled

| Mode | Style |
|------|-------|
| Light | 50% opacity, no hover |
| Dark | 50% opacity, no hover |

---

## Column Types

### Text Column

| Alignment | Use Case |
|-----------|----------|
| Left | Names, descriptions, IDs |

### Number Column

| Alignment | Use Case |
|-----------|----------|
| Right | Amounts, counts, percentages |

### Currency Column

| Style | Light | Dark |
|-------|-------|------|
| Positive | `emerald-600`, +$1,234.56 | `emerald-400` |
| Negative | `ink`, -$567.89 | `warm-100` |
| Neutral | `ink`, $1,234.56 | `warm-100` |

### Date/Time Column

| Alignment | Format Examples |
|-----------|-----------------|
| Left or Right | Jan 15, 2026 • 3:45 PM |
| | 2h ago, Yesterday, Jan 15 |

### Status Column

- Use Badge component
- Centered or left-aligned

### Actions Column

| Alignment | Content |
|-----------|---------|
| Right | Icon buttons, dropdown menu trigger |
| | Ghost button style |

---

## Sortable Columns

### Sort indicator

| State | Icon | Position |
|-------|------|----------|
| Unsorted | Subtle up/down arrows (`warm-300`) | Right of header text |
| Ascending | Up arrow (`ink`/`warm-100`) | Right of header text |
| Descending | Down arrow (`ink`/`warm-100`) | Right of header text |

### Header interaction

- Cursor: pointer on sortable columns
- Hover: Header text darkens, sort icon more visible

---

## Selectable Rows

### Checkbox column

- First column
- Checkbox vertically centered
- Header checkbox: Select all / Deselect all

### Selection states

- Unselected: Default row
- Selected: Selected row state (emerald tint + left border)
- Indeterminate (header): Some rows selected

### Bulk actions

- When rows selected, show action bar above or below table
- Action bar: Selection count + action buttons

---

## Expandable Rows

### Expand trigger

- Chevron icon in first or last column
- Rotates 90° when expanded

### Expanded content

- Appears below row
- Full table width
- Slightly indented or different background
- Light: `warm-50` background
- Dark: `intaglio-900` background

---

## Empty State

| Element | Style |
|---------|-------|
| Container | Same as table |
| Header | Shown (maintains column structure) |
| Body | Empty state component centered |
| Message | "No transactions yet" or contextual message |
| Action | Optional button to add data |

---

## Loading State

| Pattern | Use Case |
|---------|----------|
| Skeleton rows | Initial load |
| Overlay spinner | Refreshing data |
| Inline spinner | Loading more rows |

### Skeleton row

- Animated shimmer effect
- Gray bars where content would be
- 3-5 skeleton rows typical

---

## Pagination

### Pagination bar

| Element | Style |
|---------|-------|
| Position | Below table |
| Alignment | Right or space-between |
| Info | "Showing 1-10 of 156" |
| Controls | Previous/Next buttons, page numbers |

### Pagination styles

- Simple: Previous / Next only
- Numbered: 1 2 3 ... 15 16
- With page size: "Show 10 / 25 / 50"

---

## Responsive Behavior

### Horizontal scroll

- Container gets `overflow-x-auto`
- Table maintains minimum column widths
- Sticky first column option

### Priority columns

- Hide low-priority columns at smaller breakpoints
- Show expand row to reveal hidden data

### Card transformation

- Below certain breakpoint, rows become cards
- Each card shows all data for one row
- Stack vertically

---

## Contextual Examples to Build

1. **Transaction History (Light)** — Columns: Date, Description, Program, Amount, Status. 5-6 rows, mix of completed/pending, sortable, pagination
2. **Transaction History (Dark - Fire Opal)** — Same table on dark background
3. **Selectable Product List** — Checkbox column, Product/SKU/Price/Stock, 2-3 rows selected, bulk action bar
4. **Expandable Order Details** — Order ID/Customer/Total/Status/Date, one row expanded showing line items
5. **Empty State** — Table with headers but empty body with message

---

## Code Reference

### Default Table (Light)

```css
.table-container {
  @apply bg-white border border-warm-200 rounded-lg overflow-hidden;
}

.table-header {
  @apply bg-warm-50;
}

.table-header-cell {
  @apply px-3 py-3 text-left text-xs font-semibold text-warm-600 uppercase tracking-wide;
}

.table-row {
  @apply border-b border-warm-100 last:border-b-0;
}

.table-row:hover {
  @apply bg-warm-50;
}

.table-cell {
  @apply px-3 py-3 text-sm text-ink;
}
```

### Default Table (Dark)

```css
.table-container-dark {
  @apply bg-intaglio-800 border border-intaglio-700 rounded-lg overflow-hidden;
}

.table-header-dark {
  @apply bg-intaglio-900;
}

.table-header-cell-dark {
  @apply px-3 py-3 text-left text-xs font-semibold text-warm-400 uppercase tracking-wide;
}

.table-row-dark {
  @apply border-b border-intaglio-700 last:border-b-0;
}

.table-row-dark:hover {
  @apply bg-intaglio-700;
}

.table-cell-dark {
  @apply px-3 py-3 text-sm text-warm-100;
}
```

### Selected Row

```css
.table-row-selected {
  @apply bg-emerald-50 border-l-[3px] border-l-emerald-500;
}

.table-row-selected-dark {
  @apply bg-emerald-500/10 border-l-[3px] border-l-emerald-500;
}
```

### Currency Cells

```css
.cell-currency-positive {
  @apply text-emerald-600 text-right tabular-nums;
}

.cell-currency-negative {
  @apply text-ink text-right tabular-nums;
}
```

---

## Implementation Checklist

### Base table

- [ ] Container: rounded-lg, border warm-200 (light) / intaglio-700 (dark)
- [ ] Header: warm-50 (light) / intaglio-900 (dark), uppercase, tracking-wide
- [ ] Rows: 48px default height
- [ ] Cell padding: 12px horizontal, 12px vertical

### Row states

- [ ] Hover: warm-50 (light) / intaglio-700 (dark)
- [ ] Selected: emerald-50 + emerald-500 left border (light)
- [ ] Selected dark: emerald-500/10 + emerald-500 left border

### Column alignment

- [ ] Text: left
- [ ] Numbers/currency: right
- [ ] Actions: right

### Sortable

- [ ] Sort icons visible on hover, active on sorted column
- [ ] Cursor pointer on sortable headers

### Dark mode

- [ ] Container: intaglio-800 background
- [ ] Header: intaglio-900 background, warm-400 text
- [ ] Body: warm-100 text
- [ ] Borders: intaglio-700
