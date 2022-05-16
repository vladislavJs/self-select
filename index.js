import {Select} from '/select/select'
import './select/style.scss'
const select = new Select('#select', {
    placeholder: 'Pls choose object',
    selectedId: '4',
    data: [
        {id: 1, value: 'Ang'},
        {id: 2, value: 'Rect'},
        {id: 3, value: 'Vue'},
        {id: 4, value: 'Next'},
        {id: 5, value: 'Nest'},
    ],
    onSelected(item) {
        console.log(`new item is ${item}`)
    }
})

window.s = select