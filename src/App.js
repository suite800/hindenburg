import React, { Component } from 'react';
// import { Container, Dropdown, Form, Header, List } from "semantic-ui-react";
import { Button, Form, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { tags: [] };
    }

    componentDidMount() {
        fetch('https://aissfgskw7.execute-api.us-west-2.amazonaws.com/Prod/listTags')
        .then(res => res.json())
        .then((data) => {
            this.setState({ selected: undefined, tags: data.reverse() })
        })
        .catch(console.log)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        fetch('https://aissfgskw7.execute-api.us-west-2.amazonaws.com/Prod/generate?from=hadron.v25.0.0.334&to=hadron.v25.0.1.342');
    }

   render() {
        return (
          <Form onSubmit={this.onSubmit}>
            <>
            <Form.Group>
            <DropdownButton as={ButtonGroup} title="From">
                {this.state.tags.map(x => <Dropdown.Item>{x.name}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="  To  ">
                {this.state.tags.map(x => <Dropdown.Item>{x.name}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Format">
                {['json', 'html', 'csv', 'markdown', 'pdf'].map(x => <Dropdown.Item eventKey="{x}">{x}</Dropdown.Item>)}
            </DropdownButton>
            </Form.Group>
            </>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        )
    }

    _render() {
        let format = [ 'json', 'markdown', 'html', 'csv', 'pdf' ];
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <p>
                    <label>From:
                        <select value="">
                            {this.state.tags.map(x=><option value={x.name}>{x.name}</option>)}
                        </select>
                    </label>
                </p>
                <p>
                    <label>To:
                        <select>
                            {this.state.tags.map(x=><option value={x.name}>{x.name}</option>)}
                        </select>
                    </label>
                </p>
                <p>
                    <label>Output Format:
                        <select>
                            {format.map(x=><option>{x}</option>)}
                        </select>
                    </label>
                </p>
                <p>
                    <input type='submit' value='Submit'/>
                </p>
                </form>
            </div>
        )
    }
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
