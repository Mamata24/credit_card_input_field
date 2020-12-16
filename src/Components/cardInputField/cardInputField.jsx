import React,{Component} from 'react'
import CardPinItem from '../cardPinItem/cardPinItem';

class CardInputField extends Component {
    constructor(props) {
        super(props);
        this.values = new Array(props.length).fill("")
        this.elements=[]
    }

    handleChange = (value, i) => {
        const { length } = this.props
        this.values[i]=value
        if (value.length > 3 && i < length-1) {
            this.elements[i+1].input.focus()
        }
        this.props.onChange(this.values.join(""))
    }

    onBackspace = (index, e) => {
        console.log(e.type)
        if (index > 0) {
            this.elements[index - 1].input.focus()
        }
    }
    render() {
        return (
            <div>
                {
                    this.values.map((item, i) => (
                        <CardPinItem
                            key={i}
                            ref={n => this.elements[i] = n}
                            onChange={(value) => this.handleChange(value, i)}
                            onBackspace={(e) => this.onBackspace(i,e)} />
                    )
                    )
                }
            </div>
        )
    }
        
}

export default CardInputField
