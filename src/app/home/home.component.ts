import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { CustomPaginator } from '../paginator/paginatorIntl';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

import catalogs from '../model/catalog';
import { RequestService } from '../config/request.service';
import { MatTableDataSource } from '@angular/material/table';
import { Card } from '../model/card';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ICard {
    id: Number;
    uuid: String;
    title: String;
    description: String;
    price: Number;
    img: String;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
})
export class HomeComponent implements OnInit, OnDestroy {
    title = 'shop';
    catalogs = catalogs;
    cards = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    obs: Observable<any>;
    dataSource: MatTableDataSource<Card> = new MatTableDataSource<ICard>();

    constructor(
        private requestService: RequestService,
        private changeDetectorRef: ChangeDetectorRef,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        // this.requestService.getData().subscribe((list) => {
        //   this.dataSource = new MatTableDataSource<ICard>(list);
        //   this.changeDetectorRef.detectChanges();
        //   this.dataSource.paginator = this.paginator;
        //   this.obs = this.dataSource.connect();
        // });

        this.dataSource = new MatTableDataSource<ICard>(this.items);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
    } 

    ngOnDestroy(): void {
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
    }

    list(size: number) {
        return new Array(size).fill(null);
    }

    openSnackBar() {
        this.snackBar.open('Добавлено в корзину', null, {
            duration: 2000,
        });
    }

    items: Array<ICard> = [
        {
            id: 1,
            uuid: 'a65ee140-0ce4-47f0-977d-1c95f5eb8aa9',
            title: 'Лоснящийся неодимовый шарф',
            description:
                'Выполнять активности деятельности развития место массового от экономической. Сущности кругу с укрепления нас форм массового концепция активом.',
            price: 382338,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 2,
            uuid: '27d12eb7-0ab0-43ff-99dc-20837118cf31',
            title: 'Фантастический пластиковый свитер',
            description:
                'Формировании уровня модернизации целесообразности собой. Формирования организационной инновационный реализация общественной.',
            price: 739930,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 3,
            uuid: '1b050039-6a8f-4637-9538-6bb6386987ac',
            title: 'Свободный гранитный компьютер',
            description:
                'Же специалистов мира значение. Различных стороны прогрессивного.',
            price: 699079,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 4,
            uuid: '44d938ac-534f-42da-b656-38ee8630844b',
            title: 'Большой пластиковый носки',
            description:
                'Идейные принимаемых насущным существующий оценить шагов базы. Повседневная разнообразный для.',
            price: 205201,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 5,
            uuid: '05548974-4796-479a-80fe-9b4cdae85729',
            title: 'Великолепный бетонный плащ',
            description:
                'Систему структуры общественной структура предложений. Идейные модель сомнений системы экономической финансовых однако значимость понимание.',
            price: 433884,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 6,
            uuid: '6353219a-3b74-44a3-9104-8af00eaec8aa',
            title: 'Грубый резиновый компьютер',
            description:
                'Нами форм обеспечение богатый место формировании определения курс. И от активом особенности плановых последовательного создание эксперимент нами процесс.',
            price: 889840,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 7,
            uuid: '4145f810-ea8b-4492-89cc-613a2b7884f2',
            title: 'Большой хлопковый майка',
            description:
                'Идейные соответствующей базы правительством. Повышение финансовых уровня технологий принимаемых.',
            price: 876563,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 8,
            uuid: '838f999e-a1e6-4b71-8620-a2ad8504a7da',
            title: 'Большой неодимовый берет',
            description:
                'Требует что модернизации широкому оценить технологий сложившаяся формированию деятельности. Не сложившаяся кругу обеспечение начало.',
            price: 610258,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 9,
            uuid: '0b803e71-6454-44f4-8376-c27ea186fc21',
            title: 'Невероятный стальной куртка',
            description:
                'Высокотехнологичная проверки проект нас практика нас. Кадровой значение нами консультация прежде повседневной нами играет.',
            price: 525297,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 10,
            uuid: 'd9be19ea-b670-4cd9-8d77-9e43ae1af926',
            title: 'Эргономичный пластиковый свитер',
            description:
                'Обуславливает задача консультация напрямую очевидна актуальность технологий. Прогресса структуры структура значимость задания соответствующих подготовке.',
            price: 583346,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 11,
            uuid: '6878f6ca-ba8a-406c-a579-22ab99608806',
            title: 'Интеллектуальный деревянный берет',
            description:
                'Выбранный степени роль. Забывать курс финансовых разработке.',
            price: 937899,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 12,
            uuid: '122eb7fb-9840-4cdc-893b-afe23b25a9b3',
            title: 'Фантастический меховой носки',
            description:
                'Рост количественный особенности. Практика потребностям активом не модели шагов однако материально-технической особенности проект.',
            price: 15102,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 13,
            uuid: 'fc7888fb-6460-4f36-b205-46aff4cd6af7',
            title: 'Потрясающий пластиковый носки',
            description:
                'Всего по соображения обуславливает на профессионального специалистов воздействия. Концепция актуальность значительной собой воздействия напрямую.',
            price: 293561,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 14,
            uuid: 'fd0cf349-eae0-48fe-8fe3-e3a7d2ab9c1d',
            title: 'Эргономичный резиновый стол',
            description:
                'Форм дальнейшее гражданского. Определения значительной различных важную вызывает.',
            price: 490799,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 15,
            uuid: '563f4bea-c0ed-4503-8f28-ad6c21f64cb4',
            title: 'Великолепный неодимовый носки',
            description:
                'Базы национальный поэтапного. Нашей обуславливает выбранный широким.',
            price: 785736,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 16,
            uuid: 'a77b7d5c-4da2-409c-be98-2ed3a8395ca0',
            title: 'Фантастический меховой свитер',
            description:
                'Кадров поставленных массового соответствующих значение. Другой представляет насущным всего консультация повышение ресурсосберегающих нами активом.',
            price: 525439,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 17,
            uuid: 'e3e1b094-39f2-4818-a0d7-3543c4109b73',
            title: 'Большой резиновый свитер',
            description:
                'Высшего проблем информационно-пропогандистское проверки финансовых мира повседневной рамки. Демократической повседневная повышению направлений обеспечение национальный очевидна прежде плановых ресурсосберегающих.',
            price: 723857,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 18,
            uuid: '9d533d33-53e0-4aed-b745-373cd562d042',
            title: 'Большой неодимовый сабо',
            description:
                'Значительной сложившаяся этих насущным сложившаяся организации идейные. Кадров и повседневной формировании.',
            price: 674046,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 19,
            uuid: 'e0d2d43a-f075-4551-8a9c-3164857b2477',
            title: 'Невероятный хлопковый кулон',
            description:
                'Экономической особенности определения участия задания роль особенности обеспечивает кадровой курс. Проект форм шагов направлений.',
            price: 172319,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 20,
            uuid: '6cca7dcd-ed50-4427-8bdd-d70e5d00d3e2',
            title: 'Большой резиновый шарф',
            description:
                'Выполнять следует сознания. Вызывает системы материально-технической административных информационно-пропогандистское участниками представляет показывает активом массового.',
            price: 85640,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 21,
            uuid: '978f7a94-de36-43a4-8863-ad3eefd484ff',
            title: 'Свободный меховой портмоне',
            description:
                'Другой широкому значимость сознания занимаемых. Технологий сущности очевидна обеспечивает забывать опыт модернизации базы значимость предложений.',
            price: 426194,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 22,
            uuid: 'b7622aa6-bfed-47eb-bef2-24ec345d92c8',
            title: 'Потрясающий бетонный майка',
            description:
                'Укрепления интересный для. Для реализация насущным место.',
            price: 492144,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 23,
            uuid: 'a5237b84-2c92-468a-b773-45c7a5fb766a',
            title: 'Практичный стальной кепка',
            description:
                'Подготовке таким новая равным в формирования. Подготовке богатый материально-технической этих процесс задания.',
            price: 1758,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 24,
            uuid: 'dac98061-8716-4dcc-83c6-400494c48d61',
            title: 'Практичный неодимовый куртка',
            description:
                'Также высокотехнологичная предпосылки. Соответствующих участниками качественно качества значимость выбранный.',
            price: 45410,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 25,
            uuid: '5d75f56e-2739-4808-b289-51eaf8370385',
            title: 'Эргономичный деревянный плащ',
            description:
                'Представляет мира широкому активности другой кадровой. Обеспечение формировании создаёт другой другой профессионального разработке.',
            price: 919496,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 26,
            uuid: 'f7185f82-9869-40b8-b3b6-cec804236987',
            title: 'Грубый гранитный куртка',
            description:
                'Правительством материально-технической базы технологий организационной выполнять намеченных повседневная опыт важные. Равным деятельности новая сознания обуславливает степени сфера прогресса.',
            price: 545156,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 27,
            uuid: '5753b322-5dc7-4321-9632-39a84e127360',
            title: 'Большой бетонный шарф',
            description:
                'С управление модель напрямую оценить и. Не анализа выбранный структуры сознания формированию сознания а выполнять.',
            price: 537510,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 28,
            uuid: '4e77941e-470e-4c05-8f49-54c4b493e2eb',
            title: 'Фантастический гранитный плащ',
            description:
                'Кадров другой предложений проблем. Идейные задача настолько.',
            price: 306928,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 29,
            uuid: 'fa3b01c0-c2b5-4020-90e9-177457e97bfc',
            title: 'Фантастический стальной берет',
            description:
                'Эксперимент структура порядка профессионального другой играет. Формирования отметить отметить всего повседневная же кадров отношении кадровой позволяет.',
            price: 286598,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 30,
            uuid: 'b185c8e7-7580-44e9-a00a-e0b18b0a35a4',
            title: 'Грубый неодимовый ножницы',
            description:
                'Работы проблем намеченных создаёт курс систему. Активности стороны кругу информационно-пропогандистское всего новая порядка.',
            price: 740804,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 31,
            uuid: 'a79c94ea-4736-4619-a175-3ccc7217eb4c',
            title: 'Маленький хлопковый кошелек',
            description:
                'Забывать потребностям по проверки. Предложений нашей сознания.',
            price: 98862,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 32,
            uuid: '462c320c-916a-4469-b3e7-c00ececc1352',
            title: 'Потрясающий хлопковый стул',
            description:
                'Выполнять экономической кадровой активности следует управление обучения играет же. Соображения новая сущности формировании обеспечивает инновационный таким.',
            price: 42113,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 33,
            uuid: '0c8e75dd-099e-4a6a-86ca-2b668697308b',
            title: 'Большой неодимовый кепка',
            description:
                'Роль в значительной повседневной системы правительством проблем. Определения консультация зависит настолько создание проблем.',
            price: 40893,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 34,
            uuid: '57b40f17-0e64-4b17-aaf4-a07df3371cd4',
            title: 'Эргономичный бетонный клатч',
            description:
                'Обеспечивает за отношении. Выполнять принимаемых с информационно-пропогандистское.',
            price: 209481,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 35,
            uuid: '5a6dd6d2-e1b0-4a8e-bca8-ea47d6f540c1',
            title: 'Грубый хлопковый кулон',
            description:
                'Кругу повышению целесообразности деятельности концепция прежде важные представляет. Стороны место соответствующей сложившаяся общества экономической опыт представляет демократической дальнейших.',
            price: 219256,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 36,
            uuid: '6b213b13-c820-4bfe-8e49-b744c118a64b',
            title: 'Интеллектуальный стальной автомобиль',
            description:
                'Изменений не обеспечивает ресурсосберегающих общества мира участниками. Путь обучения систему консультация внедрения.',
            price: 488784,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 37,
            uuid: '9a797bbb-7eb9-4f6e-8156-db72e30c5dd2',
            title: 'Грубый хлопковый берет',
            description:
                'Занимаемых обеспечение инновационный вызывает воздействия финансовых. Отметить намеченных уточнения проверки.',
            price: 714320,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 38,
            uuid: 'b2e6280a-bbe8-4ad4-abfd-9dca187115b5',
            title: 'Грубый стальной берет',
            description:
                'Представляет существующий шагов. За качественно актуальность.',
            price: 229357,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 39,
            uuid: '419c9695-1786-4c22-9cfe-76f71cb3f10e',
            title: 'Потрясающий кожанный шарф',
            description:
                'Укрепления опыт богатый таким курс забывать. Широким уровня повышение с способствует структуры уровня активом.',
            price: 981967,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 40,
            uuid: '69f6a267-8229-425f-810e-45cb7537a7d1',
            title: 'Грубый бетонный майка',
            description:
                'Профессионального представляет социально-экономическое социально-экономическое обеспечивает активности позиции общества. Проверки в и и демократической обеспечивает сознания забывать кадров нами.',
            price: 709907,
            img: 'http://placeimg.com/640/480/animals',
        },
        {
            id: 41,
            uuid: 'f51782e0-f6ee-4461-99ce-39a27e6aa693',
            title: 'Свободный хлопковый свитер',
            description:
                'Управление что собой дальнейших. Качественно рамки сознания соответствующей.',
            price: 592314,
            img: 'http://placeimg.com/640/480/animals',
        },
    ];
}
