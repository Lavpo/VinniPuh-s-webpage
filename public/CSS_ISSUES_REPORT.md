# CSS Code Review - Issues Found

## ❌ SYNTAX ERRORS (Must Fix)

### 1. Invalid border syntax (2 occurrences)
**Lines: 161, 497**
```css
/* WRONG - has commas */
border: solid, 0.2px, #741A2E;

/* CORRECT */
border: solid 0.2px #741A2E;
```
**Selectors:** `.Menu` (line 161) and `.container-guestbook .front` (line 497)

---

## 🔁 DUPLICATE STYLES (Cleanup needed)

### 2. Duplicate selector rules for `.updatelog .log-btn:hover` and `.updatelog .log-btn:active`
**Lines: 365-368 AND 869-870**
These exact rules appear TWICE in the stylesheet. Keep one, remove the duplicate at line 869-870.

### 3. Duplicate `border-radius` properties in `.bulbAndGifs .bulb`
**Lines: 802-803 and 805**
```css
border-radius: 0 0 10px 10px;  /* line 802 */
border-radius: 0 0 10px 10px;  /* line 805 - DUPLICATE */
```
Remove line 805.

### 4. Duplicate `border-radius` in `.Melia_container`
**Lines: 557-558**
```css
border-radius: 10px;  /* line 557 */
border-radius: 10px;  /* line 558 - DUPLICATE */
```
Remove one of these lines.

### 5. Duplicate property declarations in `.updatelog .updtop p`
**Lines: 408-410**
```css
.updatelog .updtop p{
  align-self: end;
  color: rgb(0, 0, 0, 0.60);
  font-size: 0.813rem;
  margin: 0 0 0.313rem 0;

  font-size: 0.813rem;      /* DUPLICATE - line 410 */
  margin: 0 0 0.313rem 0;   /* DUPLICATE - line 411 */
}
```
Remove lines 410-411.

---

## ⚠️ INCONSISTENCIES & MINOR ISSUES

### 6. Inconsistent border width values
- Some borders use `0.2px`: lines 161, 497, 635
- Others use `1px`: lines 181, 200, etc.
- Consider standardizing to `1px` for better consistency and visibility

### 7. Unnecessary commented-out code
**Lines: 96-110, 123-132**
- Old Google fonts definitions (commented out)
- Old font-face rules (commented out)
- Consider removing if no longer needed

### 8. CSS Rules appear in media queries
The rules at lines 1494-1497 (`.updatelog .log-btn:hover` and `.updatelog .log-btn:active`) are duplicated from the main stylesheet (lines 365-368), but they're NOT inside a media query block - they're at the end of the file after media queries. This could cause confusion. These should be removed as they're already defined in the base styles.

---

## 📋 SUMMARY
- **Critical Errors:** 2 (border syntax)
- **Duplicate Rules:** 2 (`.updatelog .log-btn` rules)
- **Duplicate Properties:** 3 (border-radius and font-size/margin declarations)
- **Inconsistencies:** 1 (border width values)
- **Commented Code:** 2 sections (possibly safe to remove)

**Total Issues:** ~10 issues to address
