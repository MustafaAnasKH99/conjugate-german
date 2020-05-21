import React from "react";
import { Fade, Button, InputGroup } from "shards-react";
import './App.css'

export default class EngTranslation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visible: false
    };
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <div className="examples-container-1">
            <div className="examples-container-2">
                <span className="examples-sentences">{this.props.sentence}</span>
                <InputGroup>
                    <Button theme="light" onClick={this.toggle} className="mb-2">
                        <bold>English</bold>
                    </Button>
                    <Button theme="dark" className="mb-2" onClick={() => this.props.randomize()}>
                        <bold>Example</bold>
                    </Button>
                </InputGroup>
            </div>
            <hr style={{alignContent: 'center', width: '200px'}}></hr>
            <Fade in={this.state.visible}>
                <span className="examples-sentences">
                    {this.props.translation}
                </span>
            </Fade>
        </div>
      </div>
    );
  }
}
