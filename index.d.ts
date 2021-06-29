/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        hubPublish(action: string, ...args: any): Cypress.Chainable<any>;
        hubVerify(action: string, times: number, callback?: (invokes: IInvoke[]) => void): Cypress.Chainable<any>;
        hubClear(props: IClearProps): Cypress.Chainable<any>;
    }
}
