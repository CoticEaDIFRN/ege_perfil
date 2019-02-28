const data = new Vue({
    el: '#perfil',
    delimiters: ['${', '}'],

    data: {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        photo_user: 'https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png',
        dialog_bio: false,
        dialog_email: false,
        switch_email: false,
        switch_needs: true,
        selected: [],
        special_needs: [
            'Autismo',
            'Doença crônica',
            'Daltonismo',
            'Deficiência de aprendizado',
            'Doença mental',
            'Deficiência física',
            'Distúrbios da fala e da linguagem',
            'Perda auditiva e surdez',
            'Perda de memória',
            'Perda de visão e cegueira'
        ],
        cursos: [
            {
                nome: 'Tecnologia e Desenvolvimento de Software',
                codigo: '0000.0000.000-00',
                media: 7.0,
                aproveitamento: 70,
                color_bar: ''
            },
            {
                nome: 'Matemática financeira',
                codigo: '0000.0000.000-00',
                media: 5.0,
                aproveitamento: 50,
                color_bar: ''
            },
            {
                nome: 'Gestão Ambiental',
                codigo: '0000.0000.000-00',
                media: null,
                aproveitamento: 20,
                color_bar: ''
            }
        ],
    },
    mounted: function () {
        for (let i = 0; i <= this.cursos.length - 1; i++) {
            if (this.cursos[i].aproveitamento >= 70) { this.cursos[i].color_bar = "success" }
            else if (this.cursos[i].aproveitamento >= 30 && this.cursos[i].aproveitamento < 70) { this.cursos[i].color_bar = "warning" }
            else this.cursos[i].color_bar = "error"
        }
    }
});