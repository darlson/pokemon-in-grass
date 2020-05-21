import React, {Component} from 'react'

class Pokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            userInput: ''
        }
    }

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleChange(e) {
        this.setState({ userInput: e.target.value })
    }
    handleSaveName() {
        const {data} = this.props
        this.props.saveName(data.id, this.state.userInput)
        this.toggleEdit()
    }

    render () {
        return (
            <div>
                <img src={this.props.data.image} alt={this.props.data.name} />
                {!this.state.isEditing ? (
                    <p onDoubleClick={ () => this.toggleEdit()} >{ this.props.data.name }</p>
                ) : (
                    <div>
                        <input onChange={ e=> this.handleChange(e)} />
                        <button onClick={ () => this.toggleEdit()}>Cancel</button>
                        <button onClick={ () => this.handleSaveName()}>Save</button>
                    </div>
                )}
                <button onClick={()=> this.props.releasePokemon(this.props.data.id)}>Release</button>
            </div>
        )
    }
}

export default Pokemon