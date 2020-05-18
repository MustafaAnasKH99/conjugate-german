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
              Use the text input above to enter the german verb you want to conjugate.
              Currently, only present, past, and future "Indicative" is available.
            </span>
            <span>
                Use the green button below to change the verb tense.
            </span>
          </div>
        </Collapse>
      </div>
    );
  }
}
