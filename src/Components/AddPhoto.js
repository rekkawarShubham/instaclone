import React,{Component} from 'react'

class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        const link = event.target.elements.link.value
        const caption = event.target.elements.caption.value
        const post ={
            id : Number(new Date()),
            description : caption,
            imageLink : link
        }
        if(link && caption)
        {
            this.props.onAddPhoto(post)
        }
    }
    render(){
        return(<div>
            <div>
                <h1>Add Photo</h1>
            </div>
            
            <div>
                <form className="form" onSubmit={this.handleSubmit}> 
                 <input type="text" placeholder="LINK" name="link"/>
                 <input type="text" placeholder="Caption" name="caption"/>
                 <button>POST</button>
                </form>
            </div>

            </div>
        )
    }
}

export default AddPhoto