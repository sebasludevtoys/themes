---
to: "<%= h.toUpper(type) === h.toUpper('section') ? `${h.getSectionPath(type_location)}/${h.changeCase.snake(type_name)}/${h.capitalize(h.changeCase.camel(type_name))}.module.css`: `${h.getComponentPath(type_location)}/${h.changeCase.snake(type_name)}/${h.capitalize(h.changeCase.camel(type_name))}.module.css`%>"
---

// add style here