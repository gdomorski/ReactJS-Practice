var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      //creates an item and puts it in an list tag
      return <li>{itemText}</li>;
    };
    //creates a list of everything in the array
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  //sets a deafault state and the text key to an empty string
  getInitialState: function() {
    return {items: ["Welcome to Greg Domorski's Todo list"], text: ''};
  },
  //the onChange function takes the value of the event
  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextItem = '';
    this.setState({items: nextItems, text: nextItem});

  },
  render: function() {
    return (
      <div>
        <h3>A Todo List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>Add an item to todo list</button>
        </form>
      </div>
    );
  }
});



React.render(<TodoApp />, document.getElementById("content"));

