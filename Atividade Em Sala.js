class Forma {
    constructor (altura) {

        if (typeof altura !== 'number') {
            console.log('Digite Um Valor Númerico.')
        }
        this.altura = altura;
    };

    calcularArea () {
        console.log('Esta e sua Altura: ')
    };

    calcularVolume () {
        console.log('Este e seu Volume: ')
    };
};

class FormaPlana extends Forma {
    #tipo;
    #base;
    #comprimento;
    constructor (altura, tipo, base, comprimento) {
        if (typeof altura !== 'number') {
            console.log('Digite Um Valor Númerico.')
        }
        if (typeof base !== 'number') {
            console.log('Digite Um Valor Númerico.')
        }
        if (typeof comprimento !== 'number') {
            console.log('Digite Um Valor Númerico.')
        }
        super (altura)
        this.#tipo = tipo.toLowerCase();
        this.#base = base;
        this.#comprimento = comprimento;
    };
    // Tipo
    get tipo() {
        return this.#tipo;
    };
    set tipo(tipo) {
        this.#tipo = tipo;
    };
    // Base
    get base() {
        return this.#base;
    };
    set base(base) {
        this.#base = base;
    };
    // Comprimento
    get comprimento() {
        return this.#comprimento;
    };
    set comprimento(comprimento) {
        this.#comprimento = comprimento;
    };

    calcularArea() {
        if (this.tipo == 'retangular') {
            let areaRetangular = this.base * this.comprimento;

            return (areaRetangular).toFixed(2);
        } else if (this.tipo == 'triangular') {
            let areaTriangular = ((this.base * this.comprimento) / 2);
    
            return (areaTriangular).toFixed(2);
        } else {
            console.log('Error - Digite Uma Opção Válida Para O Tipo Que Deseja.')
            return -1
        };
    };

    calcularVolume() {
        if (this.tipo == 'retangular') {
            let volumeRetangular = areaRetangular * this.altura;

            return (volumeRetangular).toFixed(2);
        } else if (this.tipo == 'triangular') {
            let volumeTriangular = ((areaTriangular * this.altura) / 3);

            return (volumeTriangular).toFixed(2);
        } else {
            console.log('Error - Digite Uma Opção Válida Para O Tipo Que Deseja.')
            return -1
        };
    };
};

class FormaCircular extends Forma {
    static #pi = 3.14;
    #raio;
    constructor (raio, altura) {
        super (altura);
        this.#raio = raio;
    };
    // Raio
    get raio() {
        return this.#raio;
    };
    set raio(raio) {
        this.#raio = raio;
    };

    calcularArea () {
        let area = (FormaCircular.#pi * (this.raio * this.raio));

        return (area).toFixed(2);
    };

    calcularVolumeCilindro () {
        let area = this.calcularArea();

        let volume = (area * this.altura);

        return (volume).toFixed(2);
    };

    calcularVolumeCone () {
        let area = this.calcularArea();

        let volume = ((area * this.altura) / 3);

        return (volume).toFixed(2);
    };

    calcularVolumeEsfera () {
        let area = this.calcularArea();

        let volume = (area * this.raio * 1.33);

        return (volume).toFixed(2);
    };
}

// Retangular - Calcular Area
let area1 = new FormaPlana(50, 'Retangular', 10, 30)

let resultadoArea1 = area1.calcularArea()

console.log(resultadoArea1)

// Triangular - Calcular Volume
let triangulo1 = new FormaPlana(50, 'Triangular', 10, 30)

let resultadoTriangulo = triangulo1.calcularArea()

console.log(resultadoTriangulo)

// FormaCircular - Calcular Area

let areaCirculo = new FormaCircular(20, 40)

let resultadoCirculo = areaCirculo.calcularArea()

console.log(resultadoCirculo)

// FormaCircular - Calcular Volume Cilindro

let volumeCilindro = new FormaCircular(50, 20)

let resultadoCilindro = volumeCilindro.calcularVolumeCilindro()

console.log(resultadoCilindro)

// FormaCircular - Calcular Volume Cone

let volumeCone = new FormaCircular(50, 40)

let resultadoCone = volumeCone.calcularVolumeCone()

console.log(resultadoCone)

// FormaCircular - Calcular Volume Esfera

let volumeEsfera = new FormaCircular(50, 60)

let resultadoEsfera = volumeEsfera.calcularVolumeEsfera()

console.log(resultadoEsfera)


volumeEsfera.calcularVolume()

// quando esse método é invocado em uma instância da classe "FormaCircular", a linguagem JavaScript não encontra a implementação na classe específica e continua a busca na classe pai, que é a classe "Forma". Assim, a implementação padrão do método "calcularVolume" da classe "Forma" é chamada, exibindo a mensagem "Este e seu Volume: " no console.