const express = require('express');
const app = express();

const sentences = [
    "Me dejas tomarte una foto, quiero enseñarle a mis amigos como se ve un angel",
    "Quisiera ser tarzan, para ir de rama en rama, hasta llegar a tu cama",
    "Te daria un beso de buenas noches, pero prefiero darte una noche de buenos besos",
    "eres un globulo rojo? Porque eres lo que mi corazon necesita",
    "oye Halloween/Carnaval ya ha acabado, porque sigues vestida de angel?",
    "eres una camara? porque cada vez que te veo me dan ganas de sonreir",
    "se mi cenicenta, dejemos que tu vestido desparezca a media noche",
    "eres una gorra? porque estas todo el dia en mi cabeza",
    "tu mano parece un poco pesada, dejame sostenerla por ti",
    "se que no somos calcetines, pero podriamos hacer buena pareja",
    "Sabes porque nunca jugaria al escondite contigo? Porque no seria capaz de encontrar a alguien como tu",
    'acaso te llamas "nadie", porque dicen que nadie es perfecto',
    "cual es la diferencia entre una hamburguesa y una ereccion? no me estas dando una hamburguesa ahora",
    "tenemos 2 brazos, 2 piernas, 2 ojos, pero solo un corazon, por que? Porque se supone que tenemos que encontrar el otro, y encontre el tuyo",
    "dicen que los besos son el idioma del amor, entonces que te parece si iniciamos una conversacion?",
    "eres wifi, porque siento una fuerte conexion entre nosostros",
    "no estaba jugando a las cartas, pero aun asi encontre una reina",
    "tus ojos son como un IKEA, me pierdo en ellos",
    "Mi amor por ti es como la diarrea, no lo puedo contener",
    "El cielo es azul, la noche es negra, dile a tu mama si quiere ser mi suegra",
    "Si nos queremos y nos amamos, por que no nos damos por donde meamos?",
    "Si tu fueras Atenea, y yo fuera pegaso, te aventaria todos mis meteoros por ese culazo",
    "Ojala ser Bob Esponja, para estar en el fondo de tu bikini",
    "Perdona tienes el numero de algun mecanico? No puedo frenar las ganas que te tengo",
    "oye me esta llamando la policia de la gravedad, dicen que es ilegal que me atraigas de esa manera",
    "Te puedo pedir un favor? Necesito una foto tuya, estoy jugando al poker y me falta una reina para ganar",
    "Chancla es chancla, pepino es pepino, y como te agaches te perforo el intestino",
    "TU DEBES TRABAJAR PARA MONSTER, PORQUE ACCELERAS MIS LATIDOS",
    "ACASO ERES RETRASADA? ES QUE TE VES SUPER ESPECIAL",
    "Yo evitando el Covid por el bien de mis pulmones, y va tu sonrisa y me deja si aire. En fin, la hipocresia",
    "Mi amor es duro como el hierro, pero a quien le daba duro era a tu perro",
    "a ti no te dejo en visto, a ti te desvisto",
    ", juguemos al 42, tu en 4 y yo en 2",
    'Acaso te llamas "muro de berlin", porque hoy vas a caer',
    "γεια σου πανέμορφη. creia que lo entenderias, como eres un/una dios/a griego/a",
    "del cielo bajo un angel para pintar tu hermosura, pero al ver tu belleza subio por mas pintura",
    "eres hacienda? Para declararme",
    "NI EL RASHO MCQUEEN CORRE TAN RAPIDO COMO MI CORAZON AL VERTE",
    "Sabes para que sirven el punto y la coma? No lo se pero quiero que me comas y punto",
    "Se ha filtrado la ubicacion de tu casa. El olimpo porque menuda diosa",
    "acaso eres mierda de pajaro, o por que caiste del cielo",
    "si te quedas sin saldo, avisame y te recargo contra la pared",
    "oye cuando sales al sol no te derrites, porque tremendo bombon",
    "tu papá es artista?, porque vaya obra de arte que ha creado",
    "Te busque en el diccionario y significas todo para mi",
    "No se que se me viene encima, pero ojala seas tu",
    "ya aprendi a cocinar, cuando quieras te hago el delicioso",
    "Hubo un terremoto o solo sacudiste mi mundo?",
    "Acaso tu cumpleanos es el 10 de Octubre? Porque eres 10 de 10",
    "Nuestro amor es como la letra de los medicos, nadie lo entiende",
    "como me gustaria ser colesterol para ir llegando poco a poco a tu corazon",
];

app.get('/random-sentence', (req, res) => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    res.json({ sentence: randomSentence });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
