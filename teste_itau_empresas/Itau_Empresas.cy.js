/// <reference types="cypress" />

describe('Teste Site Itaú Empresas', () => {

    it('Testar carregamento do site', () => {
        cy.visit('https://www.itau.com.br/empresas')  
    })
    
    it('Teste link header', () => {
        cy.visit('https://www.itau.com.br/empresas')
        //para empresas 
        cy.get(':nth-child(1) > [data-component="Header"] > .navigationMenu__item > .navigationMenu__label').click ()
        //para voce
        cy.get('[data-component="Header"] > .navigationMenu__item > .navigationMenu__emp').click()
        //volta para o site do Itaú Empresas
        cy.go('back')
        //ajuda
        cy.get(':nth-child(3) > [data-component="Header"] > .navigationMenu__item > .navigationMenu__label').click()
        //busca - inserindo e validando a busca por 'boletos'
        cy.get('#open-search').click()
        cy.get('#inputSearch-search',{timeout: 10000}).should('exist')
        cy.get('#inputSearch-search').type('boletos')
        cy.get('#inputSearch-search').should('have.value', 'boletos')
        cy.get(':nth-child(1) > .justify-content-between > .div-ellipsis > .autocomplete-link-search > .title-faq-autocomplete').click()
        cy.get('h1').contains('boletos')
        cy.get('.description > p').contains('Emita boletos')        
    })

    it('Teste login', () => {
        cy.visit('https://www.itau.com.br/empresas')
        cy.get('#agencia').type('1234')
        cy.get('#conta').type('987654')   
    })

    it('Teste login', () => {
        cy.visit('https://www.itau.com.br/empresas')
        cy.get('#agencia').type('1234')
        cy.get('#agencia').should('have.value', '1234')
        cy.get('#conta').type('987654')
        cy.get('#conta').should('have.value', '98765-4')
    })
})