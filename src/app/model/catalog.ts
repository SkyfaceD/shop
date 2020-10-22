export class Catalog{
    constructor(
        public img: String,
        public title: String,
        public color: String
    ) {}
}

export default [
    new Catalog(
        "https://static.olx.kz/static/olxkz/packed/img/2f6aba4f6fa3bb4c01279d64cdba97513b.png",
        "Хобби, отдых и спорт",
        "#D32F2F"
    ),
    new Catalog(
        "https://static.olx.kz/static/olxkz/packed/img/2fbdd6cc9f1e2add8947ae07a2e4be0655.png",
        "Электроника",
        "#FF4081"
    ),
    new Catalog(
        "https://static.olx.kz/static/olxkz/packed/img/2fd423bcfaa2015e6137bcdb6bea3d6287.png",
        "Транспорт",
        "#7B1FA2"
    ),
    new Catalog(
        "https://static.olx.kz/static/olxkz/packed/img/2f828dab38aaebec334f341d5246c125a2.png",
        "Дом и сад",
        "#00796B"
    ),
    new Catalog(
        "https://static.olx.kz/static/olxkz/packed/img/2f3f64b4385c02d4b4bdec60512414ddf3.png",
        "Животные",
        "#536DFE"
    )
]