/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum(a, b) {
        return this.a + this.b;
    }

    subtraction(a, b) {
        return this.a - this.b;
    }

    multiplication(a, b) {
        return this.a * this.b;
    }

    division(a, b) {
        return this.a / this.b;
    }
}
