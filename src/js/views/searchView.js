class SearchView {
  _parentElement = document.querySelector('.search');
  //Let's start with the query:
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  //Clearing the 'input' field:
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  //This is our 'publisher':
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
