class Search{
    setSearchfun(searchico){
      cy.get('#search-bar').type(searchico + '{enter}', { force: true });
    }
}
export const sd = new Search();