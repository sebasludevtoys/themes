---
to: "<%= h.toUpper(type) === h.toUpper('section') ? `${h.getSectionPath(type_location)}/${h.changeCase.snake(type_name)}/${h.capitalize(h.changeCase.camel(type_name))}.tsx`: `${h.getComponentPath(type_location)}/${h.changeCase.snake(type_name)}/${h.capitalize(h.changeCase.camel(type_name))}.tsx`%>"
---
import React from 'react'
import styles from './<%=h.capitalize(h.changeCase.camel(type_name))%>.module.scss'

type Props = {
    children?:React.ReactNode
}

export const <%=h.capitalize(h.changeCase.camel(type_name))%> = ({children}:Props) => {
    return (
        <div>
        {children}
        </div>
    )
};
