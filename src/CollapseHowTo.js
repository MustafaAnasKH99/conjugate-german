import React from "react";
import { Collapse, Button }from "shards-react";
import './App.css'

export default class CollapseHowTo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <Button style={{width: '100%'}} onClick={this.toggle}>How To?</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded white-bg">
            <h5>This helps you conjugate German verbs 😍!</h5>
            <span>
              You can use the text input below to enter the german verb you want to conjugate.
              Currently, only present, past, and future "Indicative" tenses are available.
            </span>
            <span>
                To change the verb tense, you can use the green button next to the input field.
            </span>
            <span>
                You can also get random examples for how to use the verb in a sentence, along with an English translation. Press the Example button to get new setneces.
            </span>
          </div>
        </Collapse>
      </div>
    );
  }
}
