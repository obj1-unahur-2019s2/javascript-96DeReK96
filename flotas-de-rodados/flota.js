class Corsa {
 //   var property color
    
    constructor() {
        this._color = null;
    }
    color(unColor) {
        color = unColor
    }

	capacidad() {
		return this._4
	}
	velocidadMax() {
		return this._150
	}
	peso() {
		return this._1300
	}
}
const rojo = {}
const azul = {}
const verde = {}
const beige = {}
const negro = {}
const amarillo = {}

// object rojo {}
// object azul{}
// object verde{}
// object beige{}
// object negro{}
// object amarillo{}

class Kwid {
 //   var property tieneTanqueAdicional
    
    constructor() {
        this._tieneTanqueAdicional = false;
    }

	capacidad() {
		if(not this._tieneTanqueAdicional()) {
			return this._4
		} else {
			return this._3
		}
	}
	velocidadMax() {
		return if(tieneTanqueAdicional) {
			120
		} else {
			110
		}
	}
	peso() {
		return if(tieneTanqueAdicional) {
			1350
		} else {
			1200
		}
	}
	color() {
		return this._azul
	}
}

class AutoEspecial {
	// var property capacidad
	// var property velocidadMax
	// var property peso
    // var property color 
    constructor() {
        this._capacidad = null;
        this._velocidadMax = null;
        this._peso = null;
        this._color = null;
    }
}

object trafic {
	var property interior = interiorComodo
	var property motor = motorPulenta
	const pesoDelBase = 4000
	method capacidad() {
		return interior.capacidad()
	}
	method velocidadMax() {
		return motor.velocidadMax()
	}
	method peso() {
		return pesoDelBase + interior.peso() + motor.peso()
	}
	method color() {
		return "blanco"
	}
}

const trafic {
    constructor() {
        
    }
    capacidad: () => this._interiorComodo()}

object interiorComodo {
	method capacidad() {
		return 5
	}
	method peso() {
		return 750
	}
}

object interiorPopular {
	method capacidad() {
		return 12
	}
	method peso() {
		return 1000
	}
}

object motorPulenta {
	method peso() {
		return 800
	}
	method velocidadMax() {
		return 130
	}
}

object motorBataton {
	method peso() {
		return 500
	}
	method velocidadMax() {
		return 80
	}
}