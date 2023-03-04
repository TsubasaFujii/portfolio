interface Path {
    path: string[];
    stroke: string;
    fill: string;
    width: number;
}

export type IconName = 'chevronDown' | 'code' | 'openExternal' | 'paperPlane' | 'funnel' | 'close' |
    'chevronRight' | 'mail' | 'react' | 'vue' | 'node' | 'javaScript' | 'css' | 'html' |
    'linkedin' | 'github'

export const PATH: {
    [key in IconName]: Path;
} = {
    chevronDown: {
        path: [
            'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
        ],
        stroke: 'currentColor',
        fill: 'none',
        width: 2,
    },
    code: {
        path: [
            'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
        ],
        stroke: 'currentColor',
        fill: 'none',
        width: 2,
    },
    openExternal: {
        path: [
            'M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
        ],
        stroke: 'currentColor',
        fill: 'none',
        width: 2,
    },
    paperPlane: {
        path: [
            'M9.7037 12.7754L1.28635 8.85694C7.07369 5.2802 13.4292 2.71783 20.079 1.28027C19.3289 8.04219 17.4298 14.6264 14.4635 20.7491L9.70303 12.7761L9.7037 12.7754ZM9.7037 12.7754L14.7289 7.20785'
        ],
        stroke: 'currentColor',
        fill: 'none',
        width: 2,
    },
    funnel: {
        path: [
            'M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z'
        ],
        stroke: 'none',
        fill: 'currentColor',
        width: 2,
    },
    close: {
        path: [
            'M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
        ],
        stroke: 'none',
        fill: 'currentColor',
        width: 2,
    },
    chevronRight: {
        path: [
            'M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
        ],
        stroke: 'currentColor',
        fill: 'none',
        width: 2,
    },
    mail: {
        path: [
            'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z',
            'M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z'
        ],
        stroke: 'none',
        fill: 'currentColor',
        width: 2,
    },
    react: {
        path: [
            'M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z'
        ],
        stroke: 'none',
        fill: 'currentColor',
        width: 2,
    },
    vue: {
        path: [
            'm11.99999,19.91741l-0.56991,0.3324c0.11825,0.20269 0.33525,0.32738 0.56991,0.32738c0.23466,0 0.45166,-0.1247 0.56991,-0.32738l-0.56991,-0.3324zm5.27827,-15.83482l0.57282,0.32735c0.11678,-0.2042 0.11586,-0.45509 -0.00211,-0.6585c-0.1181,-0.20342 -0.33557,-0.32863 -0.57071,-0.32863l0,0.65978zm-5.27827,9.23698l-0.57285,0.32735c0.11747,0.20558 0.33608,0.33244 0.57285,0.33244c0.23677,0 0.45538,-0.12686 0.57285,-0.33244l-0.57285,-0.32735zm-5.27827,-9.23698l0,-0.65978c-0.2352,0 -0.4526,0.1252 -0.57066,0.32863c-0.11805,0.20341 -0.11888,0.4543 -0.00219,0.6585l0.57285,-0.32735zm3.95871,0l0.59012,-0.29507l-0.18235,-0.36472l-0.40777,0l0,0.65978zm1.31957,2.63914l-0.59012,0.29507c0.11175,0.22352 0.34021,0.36472 0.59012,0.36472c0.24991,0 0.47837,-0.14119 0.59012,-0.36472l-0.59012,-0.29507zm1.31957,-2.63914l0,-0.65978l-0.40777,0l-0.18235,0.36472l0.59012,0.29507zm-11.12646,0.33245l9.23698,15.83477l1.13982,-0.6648l-9.23698,-15.83488l-1.13982,0.6649zm10.3768,15.83477l9.23699,-15.83477l-1.13984,-0.6649l-9.23697,15.83488l1.13982,0.6648zm4.13554,-16.49457l-5.2783,9.23698l1.1457,0.65469l5.27825,-9.23698l-1.14565,-0.65469zm-4.1326,9.23698l-5.27827,-9.23698l-1.1457,0.65469l5.27827,9.23698l1.1457,-0.65469zm-5.85113,-8.24985l3.95871,0l0,-1.31957l-3.95871,0l0,1.31957zm3.36858,-0.36472l1.31957,2.63914l1.18025,-0.59014l-1.31957,-2.63914l-1.18025,0.59014zm2.49982,2.63914l1.31957,-2.63914l-1.18025,-0.59014l-1.31957,2.63914l1.18025,0.59014zm0.72944,-2.27442l3.95871,0l0,-1.31957l-3.95871,0l0,1.31957z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
    node: {
        path: [
            'M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
    javaScript: {
        path: [
            'm2,2l0,19.90648l19.90648,0l0,-19.90648l-19.90648,0zm10.83339,15.52492c0,1.93733 -1.13751,2.82174 -2.79473,2.82174c-1.49725,0 -2.36389,-0.7728 -2.80823,-1.71053l1.52427,-0.91996c0.29362,0.5197 0.56023,0.95978 1.20434,0.95978c0.61284,0 1.00386,-0.2403 1.00386,-1.17733l0,-6.3587l1.8705,0l0,6.385zm4.42493,2.82174c-1.73755,0 -2.86156,-0.82612 -3.40827,-1.91102l1.52427,-0.87944c0.40026,0.65336 0.92423,1.13751 1.84419,1.13751c0.7728,0 1.27117,-0.38675 1.27117,-0.92423c0,-0.63985 -0.5069,-0.86664 -1.3643,-1.24415l-0.46638,-0.19978c-1.3508,-0.57302 -2.24374,-1.29748 -2.24374,-2.82174c0,-1.40412 1.07068,-2.47054 2.73714,-2.47054c1.19083,0 2.04397,0.41306 2.65751,1.49725l-1.45744,0.93347c-0.31993,-0.57302 -0.66687,-0.79981 -1.20434,-0.79981c-0.54601,0 -0.89295,0.34694 -0.89295,0.79981c0,0.56023 0.34694,0.78631 1.15102,1.13751l0.46638,0.19978c1.5911,0.67966 2.48404,1.37781 2.48404,2.94118c0,1.67996 -1.32449,2.60348 -3.09759,2.60348l-0.00071,0.00071z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
    css: {
        path: [
            'M1.80005 0L3.71232 21.6669L11.9999 24L20.2871 21.6669L22.2 0H1.80005V0ZM18.0924 7.02224L11.9925 9.74954L11.9777 9.75592H11.9925H17.8771L17.2023 17.87L12.0018 19.4577L11.9925 19.4547V19.4577L6.76372 17.8407L6.42632 13.7545H6.43532H9.01243H9.02175L9.19045 15.8712L11.9687 16.6048L11.9925 16.5977V16.6011L14.8691 15.7539L15.0661 12.3438L11.9925 12.334L6.25762 12.3139L6.06096 9.75626L11.9925 7.17278L12.3383 7.02257H11.9925H5.83603L5.52658 4.40549H11.9925H18.3456L18.0924 7.02224Z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
    html: {
        path: [
            'M21.9389 0.705933L20.1319 21.0057L11.9719 23.2942L3.86834 21.0057L2.06128 0.705933H21.9389V0.705933ZM18.2401 4.85511H5.7601L6.42363 12.3939H15.065L14.7516 15.6113L11.9719 16.3624L9.20481 15.6128L9.02128 13.6377H6.5521L6.86269 17.561L11.9733 18.9728H12.0283V18.9586L17.098 17.561L17.8039 9.88099H8.71069L8.49893 7.3257H18.0142L18.2401 4.85511V4.85511Z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
    linkedin: {
        path: [
            'M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
    github: {
        path: [
            'M11.964 0C8.79107 0.000397735 5.74821 1.26101 3.50461 3.50461C1.26101 5.74821 0.000397735 8.79107 0 11.964C0 17.247 3.45 21.7245 8.1465 23.34C8.7345 23.4135 8.9535 23.046 8.9535 22.752V20.697C5.652 21.432 4.9185 19.083 4.9185 19.083C4.404 17.688 3.597 17.3205 3.597 17.3205C2.496 16.587 3.669 16.587 3.669 16.587C4.8435 16.6605 5.505 17.835 5.505 17.835C6.606 19.6695 8.2935 19.155 8.955 18.8625C9.027 18.0555 9.3945 17.5425 9.6885 17.2485C7.0455 16.9545 4.257 15.927 4.257 11.3025C4.257 9.9825 4.6965 8.9535 5.505 8.073C5.43 7.8525 4.9905 6.606 5.652 4.9905C5.652 4.9905 6.6795 4.6965 8.9535 6.2385C9.9075 5.9445 10.9365 5.871 11.964 5.871C12.9915 5.871 14.019 6.018 14.973 6.2385C17.2485 4.698 18.276 4.9905 18.276 4.9905C18.936 6.606 18.495 7.8525 18.4215 8.1465C19.2298 9.02712 19.6756 10.1806 19.6695 11.376C19.6695 16.0005 16.8795 16.9545 14.2395 17.2485C14.679 17.6145 15.0465 18.348 15.0465 19.449V22.752C15.0465 23.046 15.2655 23.412 15.8535 23.34C18.2325 22.5371 20.299 21.0068 21.7609 18.9654C23.2228 16.9241 24.006 14.4748 24 11.964C23.9265 5.358 18.57 0 11.964 0Z'
        ],
        width: 1,
        stroke: 'none',
        fill: 'currentColor',
    },
}