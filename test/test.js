
const expect = require('chai').expect
const platzom = require('..').default // con esto estamos requiriendo el archivo indicado en el PACKAGE.JSON campo "main"

describe('#platzom', function() {

	it('Si la palabra termina con "ar", se le quitan esas dos letras.', function () {
		const tranlation = platzom("Programar")
		expect(tranlation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final.', function () {
		const tranlation = platzom("Zorro")
		const tranlation2 = platzom("Zarpar")

		expect(tranlation).to.equal("Zorrope")
		expect(tranlation2).to.equal("Zarppe")
	})

	it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guíon del medio.', function () {
		const tranlation = platzom("abecedario")

		expect(tranlation).to.equal("abece-dario")
	})

	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayÃºsculas y minúsculas.', function () {
		const tranlation = platzom("sometemos")

		expect(tranlation).to.equal("SoMeTeMoS")
	})

})