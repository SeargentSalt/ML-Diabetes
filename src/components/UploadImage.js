const React = require('react')

class UploadImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img style={{width: 500, height: 500}} src={this.state.file} alt="hi"/>
      </div>
    );
  }
}
module.exports = UploadImage