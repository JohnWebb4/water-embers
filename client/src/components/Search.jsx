class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      numResults: 0
    };

    this.search = this.search.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.numResultsChange = this.numResultsChange.bind(this);
  }

  render() {
  return (
    <React.Fragment>
      <h2>Search</h2>
      <form name="Search" onSubmit={this.search}>
        <select name="search-criteria" defaultValue="Newest" onChange={this.selectChange}>
          <option value="Newest">Newest</option>
        </select>
        <p>Number of results</p>
        <input type="number" onChange={this.numResultsChange}/>
        <input type="submit"/>
      </form>
    </React.Fragment>
  );
  }

  selectChange(e) {
    this.setState({search: e.target.value});
  }

  numResultsChange(e) {
    this.setState({numResults: e.target.value});
  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state);
  }
}
