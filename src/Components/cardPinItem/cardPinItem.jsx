import React,{Component} from 'react'

const style = {
    padding: 15,
    width: 50,
    margin:10,
    fontSize: 14,
    borderRadius: 5,
    borderColor: "#7BC0E3"
}
class CardPinItem extends Component {

    focus = () => {
     this.input.focus()   
    }

    onChange = (e) => {
        this.props.onChange(e.target.value)
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 8 && !this.input.value) {
            this.props.onBackspace(e)
        }
    }
    render() {
        return (
            <input
                ref={(n) => (this.input = n)}
                maxLength={4}
                onKeyDown={this.handleKeyDown}
                onChange={this.onChange}
                style={style} />
        )
    }
}

export default CardPinItem
